import { fetchEventSource } from "@ai-zen/node-fetch-event-source";
import { PreparedCommand } from "../../dispatcher";
import { getCurrentProviderAPIKey } from "../../utils";
import pTimeout from "p-timeout";

export type ClaudeContent = {
    type: string;
    text: string;
};

export type CompletionResponse = {
  id: string;
  model: string;
  role: string;
  stop_reason: "stop_sequence" | "max_tokens" | "end_turn";
  type: string;
  content: Array<ClaudeContent>;
};

const ANTHROPIC_VERSION = "2023-06-01";

export class ClaudeV3Client {
  private key: string;
  private command: PreparedCommand;
  private created: boolean = false;

  constructor(command: PreparedCommand) {
    this.command = command;
  }

  async create() {
    this.key = await getCurrentProviderAPIKey();
    this.created = true;
  }

  async stream(abortSignal: AbortSignal, onProgress?: (completionResponse: CompletionResponse) => void): Promise<CompletionResponse> {
    if (!this.created) {
      await this.create();
    }

    const abortController = new AbortController();
    const body = JSON.stringify(this.command.completionParams);

    const responseP = new Promise<CompletionResponse>((resolve, reject) => {
      abortSignal.addEventListener("abort", (event) => {
        abortController.abort(event);
        reject(new Error("Caller aborted completion stream."));
      });

      fetchEventSource(
        this.command.url,
        {
          method: "POST",
          body,
          signal: abortController.signal,
          headers: {
            "content-type": "application/json",
            "anthropic-version": ANTHROPIC_VERSION,
            "x-api-key": this.key,
          },
          onopen: async (response) => {
            if (!response.ok) {
              abortController.abort();
              return reject(new Error(`Failed to open completion stream: ${response.status} ${response.statusText}`));
            }
          },
          onmessage: async (event) => {
            if (event.event === "ping") { return; }

            if (event.data === "[DONE]") {
              console.error("Unexpected done message before stop_reason has been issued");
              return;
            }

            const completion = JSON.parse(event.data) as CompletionResponse;

            onProgress?.(completion);

            if (completion.stop_reason !== "end_turn") {
              abortController.abort();
              return resolve(completion);
            }
          },
          onerror: (error) => {
            abortController.abort();
            return reject(new Error(error));
          },
        },
      );
    });

    pTimeout(responseP, {
      milliseconds: 10 * 60 * 1000,
      message: "Completion stream timed out.",
    }).catch(() => {
      abortController.abort();
    });

    return responseP;
  }
}