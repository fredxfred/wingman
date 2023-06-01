/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-undef */

(() => {
  const vscode = acquireVsCodeApi();

  let chatId = 0;
  let responseId = 0;

  const getUserBoxClasses = () => {
    // return "user-text p-4 text-gray-100 overflow-x-auto";
    return "user-text p-4 overflow-x-auto";
  };

  const getAiBoxClasses = () => {
    // return "ai-text text-gray-400 p-4 overflow-x-auto";
    return "ai-text p-4 overflow-x-auto in-progress-response";
  };

  const getAiBoxClassesFinished = () => {
    // return "ai-text text-gray-100 p-4 overflow-x-auto";
    return "ai-text p-4 overflow-x-auto finished-response";
  };

  window.addEventListener("message", (e) => {
    const message = e.data;

    switch (message.type) {
      case "requestMessage": {
        requestMessage(message.value);
        break;
      }
      case "newChat": {
        newChat();
        break;
      }
      case "partialResponse": {
        partialResponse(message);
        break;
      }
      case "responseFinished": {
        responseFinished(message);
        break;
      }
      case "aborted": {
        responseAborted();
        break;
      }
    }
  });

  $("#input").on("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      const input = $("#input");
      const text = input.val();
      input.val("");

      vscode.postMessage({
        type: "sendInput",
        value: text,
      });
    }
  });

  $("#abort").on("click", () => {
    vscode.postMessage({ type: "abort" });
  });

  $("#clear-conversation").on("click", () => {
    // if #abort is visible, then send abort message
    // else send clear conversation message
    // if (!$("#abort").hasClass("hidden")) {
    //   vscode.postMessage({
    //     type: "abort",
    //   });
    // }
    vscode.postMessage({ type: "abort" });
    $("#output").empty();
    hideInput();
  });

  function showInput() {
    $("#input-container").removeClass("hidden");
  }

  function hideInput() {
    $("#input-container").addClass("hidden");
  }

  function newChat() {
    // find #output and empty it.
    // create a new chat div inside of #output.
    // increment chatId and assign it to the div's id, e.g. "chat-1"
    const output = $("#output");
    output.empty();

    const div = $("<div>");
    div.attr("id", `chat-${++chatId}`);

    output.append(div);

    showInput();
  }

  function createUserTextDiv(question) {
    const div = $("<div></div>").addClass(getUserBoxClasses()).text(question);
    const domDiv = div[0];
    formatDiv(domDiv, div.text());
    return domDiv;
  }

  function scrollToBottom() {
    const output = $("#scroll");
    output.scrollTop(output[0].scrollHeight);
  }

  function requestMessage(text) {
    // find the chat div
    const div = document.querySelector(`#chat-${chatId}`);
    const userTextDiv = createUserTextDiv(text);

    // append a new div
    div.append(userTextDiv);

    $("#abort").removeClass("hidden");
    
    scrollToBottom();
  }

  function responseFinished(message) {
    const div = $(`#ai-${responseId}`);

    div.removeClass();
    div.addClass(getAiBoxClassesFinished());

    formatDiv(div[0], message.value.text);

    responseId++;

    $("#abort").addClass("hidden");
    
    scrollToBottom();
  }

  function responseAborted() {
    $("#abort").addClass("hidden");
    const div = $(`#ai-${responseId}`);
    formatDiv(div[0], message.value.text);
    responseId++;
    scrollToBottom();
  }

  function partialResponse(message) {
    const existing = document.querySelector(`#ai-${responseId}`);
    const chatBox = $(`#chat-${chatId}`);
    const div = $("<div>").addClass(getAiBoxClasses()).attr("id", `ai-${responseId}`).text(message.value.text);

    formatDiv(div[0], message.value.text);

    if (!existing) {
      chatBox.append(div);
    } else {
      existing.textContent = message.value.text;
      formatDiv(existing, message.value.text);
    }

    $("#abort").removeClass("hidden");
    
    scrollToBottom();
  }

  function fixCodeBlocks(response) {
    const REGEX_CODEBLOCK = /```/g;
    const matches = response.match(REGEX_CODEBLOCK);
    const count = matches ? matches.length : 0;

    return count % 2 === 0 ? response : `${response}\n\`\`\``;
  }

  function formatDiv(div, text) {
    const options = {
      renderer: new marked.Renderer(),
      highlight(code, language) {
        return hljs.highlightAuto(code).value;
      },
      langPrefix: "hljs language-",
      breaks: false,
      pedantic: false,
      gfm: true,
      sanitize: false,
      smartypants: false,
      xhtml: false,
    };

    marked.setOptions(options);
    const fixedText = fixCodeBlocks(text);
    const html = marked.parse(fixedText);
    div.innerHTML = html;

    // find any `code` blocks that are a direct descendant of a `pre` and add the `hljs` class
    // if it is missing.
    const codeBlocks = div.querySelectorAll("pre > code");
    codeBlocks.forEach((codeBlock) => {
      if (!codeBlock.classList.contains("hljs")) {
        codeBlock.classList.add("hljs");
      }
    });
  }
})();
