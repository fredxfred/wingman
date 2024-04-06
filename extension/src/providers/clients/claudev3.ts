import { fetchEventSource } from "@ai-zen/node-fetch-event-source";
import { PreparedCommand } from "../../dispatcher";
import { getCurrentProviderAPIKey } from "../../utils";
import pTimeout from "p-timeout";
import Anthropic from '@anthropic-ai/sdk';
import { PartialResponse } from "../common";

export type ClaudeContent = {
    type: string;
    text: string;
};

const ANTHROPIC_VERSION = "2023-06-01";

export class ClaudeV3Client {
  private key: string;
  private command: PreparedCommand;
  private client: Anthropic;
  private created: boolean = false;

  constructor(command: PreparedCommand) {
    this.command = command;
  }

  async create() {
    this.key = await getCurrentProviderAPIKey();
    this.client = new Anthropic({
      apiKey: this.key,
    });
    this.created = true;
  }

  async stream(abortSignal: AbortSignal, onProgress?: (PartialResponse: PartialResponse) => void): Promise<PartialResponse> {
    if (!this.created) {
      await this.create();
    }

    const abortController = new AbortController();
    const result: PartialResponse = {
      role: "assistant",
      id: "1",
      text: "",
      delta: "",
      detail: {},
    };

    const responseP = new Promise<PartialResponse>((resolve, reject) => {
      abortSignal.addEventListener("abort", (event) => {
        abortController.abort(event);
        reject(new Error("Caller aborted completion stream."));
      });

      // @ts-ignore
      this.client.messages.stream(this.command.completionParams).on('text', (delta, snapshot) => {
        result.text += delta;
        result.delta = delta;
        result.detail = snapshot;
        onProgress?.(result);
      }).on('error', (error) => {
        abortController.abort();
        return reject(error);
      }).on('abort', (error) => {
        abortController.abort();
        return reject(error);
      }).on('end', () => {
        return resolve(result);
      });
    });

    pTimeout(responseP, {
      milliseconds: 30 * 1000,
      message: "Completion stream timed out.",
    }).catch(() => {
      abortController.abort();
    });

    return responseP;
  }
}