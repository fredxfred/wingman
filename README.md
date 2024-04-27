A highly flexible, customizable, and powerful extension for working with LLMs within Visual Studio Code, focusing on Cloud development.

Highlights:

- Compatible with OpenAI (any model), Anthropic (any model), and self-hosted LLM.
- Complete control over completion parameters, system message, and more.
- Highly customizable prompt templates with built-in prompt management.
- Workspace-specific chat history storage. Review old chats whenever.
- No need to edit `settings.json` for any reason. There's a UI for everything!
- A few modes, and dozens of prompts to get you started.

<center>

![image](.github/media/diff.png)

</center>

# Usage

If you're using a local solution, you can skip setting an API key.

Otherwise, you need to configure API keys for whichever providers you plan to use by opening the command pallete (Windows: <kbd>⊞</kbd><kbd>⇧</kbd><kbd>P</kbd>, macOS: <kbd>⌘</kbd><kbd>⇧</kbd><kbd>P</kbd>) and running the command labeled: "Wingman: Set API key". Select the provider you want to use, enter your API key, and press enter.

NOTE: When "Anthropic" and "ClaudeV3" API keys are both provided, ClaudeV3 executions will default to the ClaudeV3 key (and fall back to "Anthropic" if not set) while legacy Anthropic models will default to the Anthropic key (falling back to nothing if not set). This is a temporary problem arising from the breaking API changes between ClaudeV3 and prior Anthropic model generations.

# Core concepts

There are three concepts that are crucial to understanding how Cloud Wingman operates.

It's really not that complicated.

- Prompts
- Presets
- Modes

## Prompts

A UI is included for prompt management.

Cloud Wingman makes your prompts dynamic with support for placeholders.

Current placeholders:

- `{{selection}}` is replaced with the selected text.
- `{{ft}}` is replaced with the VSCode language identifier (`go`, `typescript`)
- `{{language}}` is replaced with a friendly language name (`Go`, `TypeScript`).
- `{{file}}` is replaced with the contents of the active file.
- `{{input}}` prompts for user input and replaces this placeholder with the response.
- `{{:param:val}}` prompt-level completion param overrides (e.g. `{{:top_k:0.1}}`).
- `{{abs_path}}` is replaced with the absolute path of the current open file.
- `{{fname}}` is replaced with the extension-less, path-less name of the current open file e.g. `main` or `AbstractBeanFactory`.

<center>

![image](.github/media/promptui.png)

</center>

## Presets

A UI is included for preset management.

A preset is a provider configuration. It defines the system message, the provider, the API URL, and completion parameters. You can create as many presets as you want and switch between them whenever.

<center>

![image](.github/media/presetui.png)

</center>

## Modes

A UI is included for mode management.

Modes enhance the prompt and preset management experience. A mode is a collection of presets and prompts. Three built-in modes are provided as examples: "Programming", "Creative writing", and "Technical writing", but you are encouraged to create your own.

Modes can have presets assigned to them. Here's why this is useful:

- Your "Programming" mode can use your GPT-4-Turbo preset.
- Your "Creative writing" mode can use your Anthropic Claude preset.
- And so on, and so forth.

Switching between modes automatically activates the last preset used in that mode.

<center>

![image](.github/media/modeswitch.gif)

</center>

# History

[This is fork off the original Wingman](https://github.com/nvms/wingman) to implement Cloud-specific functionality and take the extension in another direction (less for General SWE and bring-your-own workflows, more for Cloud development with complex workflows provided out of the box.). All copyright prior to the fork belongs to the original developers, and we thank them for their contributions!

# Development

In a fresh gitpod.io workspace created from Cloud Wingman, get things set up with

```
sh extension/scripts/gitpodup.sh
```

this starts the Svelte server in dev mode and configures the extension to automatically build when changed.

To test out changes to the extension, go to the "Run and Debug" panel and choose `npm: build:browser - extension`. This should automatically open a second gitpod.io tab running the extension with your changes.

We look forward to seeing your PRs! If you run into problems getting this to work, please open a Github Issue or contact [extensionpublisher@mplode.ai](mailto:extensionpublisher@mplode.ai) for assistance.

## Older Instructions

1. In `/webview`: `npm run dev`. This is a Svelte project that outputs to `/extension/dist`.
2. In `/extension`: `npm run build:watch`
3. Run the extension using the debug panel.

Note that over time these instructons may become obsolete. Active development is done within gitpod.io.

# TODO

Tests!!!

Add more default prompts.

Listen to your glorious feedback!