import * as u from "vscode";
var z2 = /* @__PURE__ */ ((G) => (G.None = "none", G.Replace = "replace", G.Before = "before", G.After = "after", G))(z2 || {});
const K = /* @__PURE__ */ new Map([
  ["abap", "ABAP"],
  ["bat", "Windows Bat"],
  ["bibtex", "BibTeX"],
  ["clojure", "Clojure"],
  ["coffeescript", "CoffeeScript"],
  ["c", "C"],
  ["cpp", "C++"],
  ["csharp", "C#"],
  ["css", "CSS"],
  ["cuda-cpp", "CUDA C++"],
  ["diff", "Diff"],
  ["dockerfile", "Dockerfile"],
  ["dockercompose", "Docker Compose"],
  ["fsharp", "F#"],
  ["git-commit", "Git Commit"],
  ["git-rebase", "Git Rebase"],
  ["go", "Go"],
  ["groovy", "Groovy"],
  ["haml", "Haml"],
  ["html", "HTML"],
  ["javascript", "JavaScript"],
  ["javascriptreact", "JavaScript React"],
  ["json", "JSON"],
  ["jsonc", "JSON with Comments (JSONC)"],
  ["makefile", "Makefile"],
  ["markdown", "Markdown"],
  ["objective-c", "Objective-C"],
  ["objective-cpp", "Objective-C++"],
  ["perl", "Perl"],
  ["perl6", "Perl 6"],
  ["php", "PHP"],
  ["less", "Less"],
  ["latex", "LaTeX"],
  ["lua", "Lua"],
  ["plaintext", "Plain Text"],
  ["powershell", "PowerShell"],
  ["jade", "Pug"],
  ["julia", "Julia"],
  ["pug", "Pug"],
  ["python", "Python"],
  ["r", "R"],
  ["razor", "Razor (cshtml)"],
  ["ruby", "Ruby"],
  ["rust", "Rust"],
  ["scss", "SCSS"],
  ["shaderlab", "ShaderLab"],
  ["shellscript", "Shell Script (Bash)"],
  ["slim", "Slim"],
  ["sql", "SQL"],
  ["stylus", "Stylus"],
  ["swift", "Swift"],
  ["typescript", "TypeScript"],
  ["typescriptreact", "TypeScript React"],
  ["tex", "TeX"],
  ["vb", "Visual Basic"],
  ["vue", "Vue"],
  ["vue-html", "Vue HTML"],
  ["xml", "XML"],
  ["xsl", "XSL"],
  ["yaml", "YAML"]
]), i = /* @__PURE__ */ new Map([
  ["abap", "abap"],
  ["bat", "bat"],
  ["clj", "clojure"],
  ["cljc", "clojure"],
  ["cljr", "clojure"],
  ["cljs", "clojure"],
  ["coffee", "coffeescript"],
  ["c", "c"],
  ["cjs", "javascript"],
  ["cpp", "cpp"],
  ["cs", "csharp"],
  ["css", "css"],
  ["diff", "diff"],
  ["dockerfile", "dockerfile"],
  ["fs", "fsharp"],
  ["h", "cpp"],
  ["hpp", "cpp"],
  ["jav", "java"],
  ["java", "java"],
  ["jl", "julia"],
  ["js", "javascript"],
  ["jsx", "javascriptreact"],
  ["md", "markdown"],
  ["mdx", "markdown"],
  ["mjs", "javascript"],
  ["ps1", "powershell"],
  ["py", "python"],
  ["tsx", "typescriptreact"],
  ["ts", "typescript"],
  ["tsx", "typescriptreact"]
]), P2 = (G, I) => K.has(G) ? K.get(G) : I && i.has(I) && K.has(i.get(I)) ? K.get(i.get(I)) : I && i.has(I) ? i.get(I) : K.get("plaintext"), O2 = {
  javascript: "Use modern JavaScript syntax and features.",
  typescript: "Use modern TypeScript syntax and features.",
  javascriptreact: "Use modern JavaScript syntax and features.",
  typescriptreact: "Use modern TypeScript syntax and features.",
  cpp: "Use modern C++ syntax and features.",
  c: "Use modern C syntax and features.",
  python: "Use modern Python syntax and features.",
  csharp: "Use modern C# syntax and features."
}, h2 = () => Math.random().toString(36).substring(2, 15), p = "i85zwf6o1xa", V2 = "cg5j1roh85p", X2 = "goqf1wael1a", D2 = /* @__PURE__ */ new Map([
  [p, "You are an assistant to a {{language}} programmer."],
  [V2, "You are an assistant to a creative writer."],
  [X2, "You are an assistant to a technical writer."]
]), q2 = (G, I) => G && G.system ? G.system : D2.get(I) || "You are an assistant.", B2 = [
  {
    id: p,
    label: "Programming",
    url: "/programming"
  },
  {
    id: V2,
    label: "Creative writing",
    url: "/creative-writing"
  },
  {
    id: X2,
    label: "Technical writing",
    url: "/technical-writing"
  }
], L = "IMPORTANT: Only return the code inside of a code fence and nothing else. Do not explain your changes.", f2 = "```{{ft}}\n{{selection}}\n```", E = `I have the following {{language}} code:
${f2}

`, Q2 = "IMPORTANT: Only return the text inside of the code fence and nothing else. Do not explain your changes.", _2 = "```\n{{selection}}\n```", H2 = `I have the following text:
${_2}

`, o2 = [
  // Code
  {
    modeId: p,
    category: "Refactoring",
    title: "Make modification",
    description: "Modify existing code for improvement or new features.",
    message: `${E}{{input:What modification do you want to make?}}
Refactor the code to be more readable and maintainable.

{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Performance optimization",
    description: "Enhance the efficiency and speed of the code.",
    message: `${E}
Optimize the code to be more efficient and faster.
{{input:Elaborate on what specifically to optimize, or leave blank to attempt general optimization.}}
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Modernize",
    description: "Modernize the selected code where possible.",
    message: `${E}
Modernize this code without changing its behavior.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Clarity improvement",
    description: "Improve the clarity and readability of the code.",
    message: `${E}
Improve the clarity and readability of the code so that it can be easily understood by a human.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Simplify",
    description: "Simplify complex code segments for better understanding.",
    message: `${E}
Simplify this code so that it is less complex and more easily understandable.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Make functional",
    description: "Refactor the code to follow functional programming principles.",
    message: `${E}
Refactor this code so that it adheres to more conventional functional programming principles. Introduce immutability and pure functions where possible.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Make DRY",
    description: "Eliminate redundant code and apply DRY (don't repeat yourself) principles.",
    message: `${E}
Refactor the code by making it much more DRY, minimizing code duplication as much as possible without changing its behavior.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Decompose",
    description: "Break down large functions or modules into smaller, more manageable parts.",
    message: `${E}
Refactor the code to improve its modularity and reduce function responsibility. Decompose monoliths into smaller, more manageable components. Use your best judgement to determine when a new function is necessary.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Recompose",
    description: "Reorganize code components for better structure and readability.",
    message: `${E}
Refactor this code by recomposing it such that it has a better (cleaner, more thoughtfully organized) structure and its readability is improved without changing its behavior in any way.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Make robust",
    description: "Strengthen code against potential errors and edge cases.",
    message: `${E}
Refactor the code to make it more robust and resilient against potential errors and edge cases. This may include adding error handling, input validation, or ensuring the code behaves correctly under edge cases.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Meaningful variable names",
    description: "Rename variables to be more meaningful and descriptive.",
    message: `${E}
Refactor this code by renaming variables, where needed, such that they have more meaningful and descriptive names.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Refactoring",
    title: "Remove dead code",
    description: "Identify and remove unused or obsolete code segments.",
    message: `${E}
Refactor this code, removing any unused or obsolete code segments without changing the behavior of the code in any way.
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Analysis & Debugging",
    title: "Analyze for bugs",
    description: "Examine code to identify and locate bugs.",
    message: `${E}
Analyze the code for bugs. List each bug as a list item. If you have a solution for a bug, include it as a code block underneath the bug's list item.`
  },
  {
    modeId: p,
    category: "Analysis & Debugging",
    title: "Fix a known bug",
    description: "Identify and implemenet a solution for a known bug.",
    message: `${E}
Your task is to find and fix this bug: {{input:What is the bug?}}
{{language_instructions}}

${L}`
  },
  {
    modeId: p,
    category: "Analysis & Debugging",
    title: "Explain",
    description: "Clarify complex code segments for better understanding.",
    message: `${E}
Explain this code as if you were explaining to another developer. Use your best judgement to determine how much explanation is necessary.`
  },
  {
    modeId: p,
    category: "Analysis & Debugging",
    title: "Question",
    description: "Ask a question about the selected code.",
    message: `${E}
I have a question about this code: {{input:What is your question?}}`
  },
  // Creative writing
  {
    modeId: V2,
    category: "Creating assistance",
    title: "Improve scene visualization",
    description: "Aid in describing scenes vividly and effectively.",
    message: `${H2}Improve the description of the scene to be more vivid and effective.

${Q2}`
  },
  // Technical writing
  {
    modeId: X2,
    category: "Tech blogger",
    title: "Write a stupid blog",
    description: "Aid in describing scenes vividly and effectively.",
    message: `${H2}Improve the description of the scene to be more vivid and effective.

${Q2}`
  }
];
var P = /* @__PURE__ */ ((G) => (G.ChatInitiated = "chatInitiated", G.ChatMessageReceived = "chatMessageReceived", G.ChatEnded = "chatEnded", G))(P || {});
class h {
  static context;
  static create(I) {
    this.context = I;
  }
  static get(I) {
    return h.context.globalState.get(I);
  }
  static set(I, l) {
    return h.context.globalState.update(I, l);
  }
  static getSecret(I) {
    return h.context.secrets.get(I);
  }
  static setSecret(I, l) {
    return h.context.secrets.store(I, l);
  }
}
var $2 = globalThis && globalThis.__asyncValues || function(G) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var I = G[Symbol.asyncIterator], l;
  return I ? I.call(G) : (G = typeof __values == "function" ? __values(G) : G[Symbol.iterator](), l = {}, Z("next"), Z("throw"), Z("return"), l[Symbol.asyncIterator] = function() {
    return this;
  }, l);
  function Z(W) {
    l[W] = G[W] && function(X) {
      return new Promise(function(d, V) {
        X = G[W](X), c(d, V, X.done, X.value);
      });
    };
  }
  function c(W, X, d, V) {
    Promise.resolve(V).then(function(N) {
      W({ value: N, done: d });
    }, X);
  }
};
async function I1(G, I) {
  var l, Z, c, W;
  if ("getReader" in G) {
    const N = G.getReader();
    let R;
    for (; !(R = await N.read()).done; )
      I(R.value);
    return;
  }
  try {
    for (var X = !0, d = $2(G), V; V = await d.next(), l = V.done, !l; ) {
      W = V.value, X = !1;
      try {
        I(W);
      } finally {
        X = !0;
      }
    }
  } catch (N) {
    Z = { error: N };
  } finally {
    try {
      !X && !l && (c = d.return) && await c.call(d);
    } finally {
      if (Z)
        throw Z.error;
    }
  }
}
function l1(G) {
  let I, l, Z, c = !1;
  return function(X) {
    I === void 0 ? (I = X, l = 0, Z = -1) : I = Z1(I, X);
    const d = I.length;
    let V = 0;
    for (; l < d; ) {
      c && (I[l] === 10 && (V = ++l), c = !1);
      let N = -1;
      for (; l < d && N === -1; ++l)
        switch (I[l]) {
          case 58:
            Z === -1 && (Z = l - V);
            break;
          case 13:
            c = !0;
          case 10:
            N = l;
            break;
        }
      if (N === -1)
        break;
      G(I.subarray(V, N), Z), V = l, Z = -1;
    }
    V === d ? I = void 0 : V !== 0 && (I = I.subarray(V), l -= V);
  };
}
function G1(G, I, l) {
  let Z = J2();
  const c = new TextDecoder();
  return function(X, d) {
    if (X.length === 0)
      l?.(Z), Z = J2();
    else if (d > 0) {
      const V = c.decode(X.subarray(0, d)), N = d + (X[d + 1] === 32 ? 2 : 1), R = c.decode(X.subarray(N));
      switch (V) {
        case "data":
          Z.data = Z.data ? Z.data + `
` + R : R;
          break;
        case "event":
          Z.event = R;
          break;
        case "id":
          G(Z.id = R);
          break;
        case "retry":
          const F = parseInt(R, 10);
          isNaN(F) || I(Z.retry = F);
          break;
      }
    }
  };
}
function Z1(G, I) {
  const l = new Uint8Array(G.length + I.length);
  return l.set(G), l.set(I, G.length), l;
}
function J2() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var b1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function c1(G) {
  return G && G.__esModule && Object.prototype.hasOwnProperty.call(G, "default") ? G.default : G;
}
var O = {}, W1 = {
  get exports() {
    return O;
  },
  set exports(G) {
    O = G;
  }
};
(function(G, I) {
  var l = typeof self < "u" ? self : b1, Z = function() {
    function W() {
      this.fetch = !1, this.DOMException = l.DOMException;
    }
    return W.prototype = l, new W();
  }();
  (function(W) {
    (function(X) {
      var d = {
        searchParams: "URLSearchParams" in W,
        iterable: "Symbol" in W && "iterator" in Symbol,
        blob: "FileReader" in W && "Blob" in W && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in W,
        arrayBuffer: "ArrayBuffer" in W
      };
      function V(b) {
        return b && DataView.prototype.isPrototypeOf(b);
      }
      if (d.arrayBuffer)
        var N = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], R = ArrayBuffer.isView || function(b) {
          return b && N.indexOf(Object.prototype.toString.call(b)) > -1;
        };
      function F(b) {
        if (typeof b != "string" && (b = String(b)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
          throw new TypeError("Invalid character in header field name");
        return b.toLowerCase();
      }
      function H(b) {
        return typeof b != "string" && (b = String(b)), b;
      }
      function n(b) {
        var m = {
          next: function() {
            var Y = b.shift();
            return { done: Y === void 0, value: Y };
          }
        };
        return d.iterable && (m[Symbol.iterator] = function() {
          return m;
        }), m;
      }
      function Q(b) {
        this.map = {}, b instanceof Q ? b.forEach(function(m, Y) {
          this.append(Y, m);
        }, this) : Array.isArray(b) ? b.forEach(function(m) {
          this.append(m[0], m[1]);
        }, this) : b && Object.getOwnPropertyNames(b).forEach(function(m) {
          this.append(m, b[m]);
        }, this);
      }
      Q.prototype.append = function(b, m) {
        b = F(b), m = H(m);
        var Y = this.map[b];
        this.map[b] = Y ? Y + ", " + m : m;
      }, Q.prototype.delete = function(b) {
        delete this.map[F(b)];
      }, Q.prototype.get = function(b) {
        return b = F(b), this.has(b) ? this.map[b] : null;
      }, Q.prototype.has = function(b) {
        return this.map.hasOwnProperty(F(b));
      }, Q.prototype.set = function(b, m) {
        this.map[F(b)] = H(m);
      }, Q.prototype.forEach = function(b, m) {
        for (var Y in this.map)
          this.map.hasOwnProperty(Y) && b.call(m, this.map[Y], Y, this);
      }, Q.prototype.keys = function() {
        var b = [];
        return this.forEach(function(m, Y) {
          b.push(Y);
        }), n(b);
      }, Q.prototype.values = function() {
        var b = [];
        return this.forEach(function(m) {
          b.push(m);
        }), n(b);
      }, Q.prototype.entries = function() {
        var b = [];
        return this.forEach(function(m, Y) {
          b.push([Y, m]);
        }), n(b);
      }, d.iterable && (Q.prototype[Symbol.iterator] = Q.prototype.entries);
      function A(b) {
        if (b.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        b.bodyUsed = !0;
      }
      function B(b) {
        return new Promise(function(m, Y) {
          b.onload = function() {
            m(b.result);
          }, b.onerror = function() {
            Y(b.error);
          };
        });
      }
      function f(b) {
        var m = new FileReader(), Y = B(m);
        return m.readAsArrayBuffer(b), Y;
      }
      function _(b) {
        var m = new FileReader(), Y = B(m);
        return m.readAsText(b), Y;
      }
      function S(b) {
        for (var m = new Uint8Array(b), Y = new Array(m.length), y = 0; y < m.length; y++)
          Y[y] = String.fromCharCode(m[y]);
        return Y.join("");
      }
      function o(b) {
        if (b.slice)
          return b.slice(0);
        var m = new Uint8Array(b.byteLength);
        return m.set(new Uint8Array(b)), m.buffer;
      }
      function k() {
        return this.bodyUsed = !1, this._initBody = function(b) {
          this._bodyInit = b, b ? typeof b == "string" ? this._bodyText = b : d.blob && Blob.prototype.isPrototypeOf(b) ? this._bodyBlob = b : d.formData && FormData.prototype.isPrototypeOf(b) ? this._bodyFormData = b : d.searchParams && URLSearchParams.prototype.isPrototypeOf(b) ? this._bodyText = b.toString() : d.arrayBuffer && d.blob && V(b) ? (this._bodyArrayBuffer = o(b.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : d.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(b) || R(b)) ? this._bodyArrayBuffer = o(b) : this._bodyText = b = Object.prototype.toString.call(b) : this._bodyText = "", this.headers.get("content-type") || (typeof b == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : d.searchParams && URLSearchParams.prototype.isPrototypeOf(b) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, d.blob && (this.blob = function() {
          var b = A(this);
          if (b)
            return b;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? A(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f);
        }), this.text = function() {
          var b = A(this);
          if (b)
            return b;
          if (this._bodyBlob)
            return _(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(S(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, d.formData && (this.formData = function() {
          return this.text().then(T2);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function j2(b) {
        var m = b.toUpperCase();
        return g.indexOf(m) > -1 ? m : b;
      }
      function t(b, m) {
        m = m || {};
        var Y = m.body;
        if (b instanceof t) {
          if (b.bodyUsed)
            throw new TypeError("Already read");
          this.url = b.url, this.credentials = b.credentials, m.headers || (this.headers = new Q(b.headers)), this.method = b.method, this.mode = b.mode, this.signal = b.signal, !Y && b._bodyInit != null && (Y = b._bodyInit, b.bodyUsed = !0);
        } else
          this.url = String(b);
        if (this.credentials = m.credentials || this.credentials || "same-origin", (m.headers || !this.headers) && (this.headers = new Q(m.headers)), this.method = j2(m.method || this.method || "GET"), this.mode = m.mode || this.mode || null, this.signal = m.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Y)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(Y);
      }
      t.prototype.clone = function() {
        return new t(this, { body: this._bodyInit });
      };
      function T2(b) {
        var m = new FormData();
        return b.trim().split("&").forEach(function(Y) {
          if (Y) {
            var y = Y.split("="), w = y.shift().replace(/\+/g, " "), J = y.join("=").replace(/\+/g, " ");
            m.append(decodeURIComponent(w), decodeURIComponent(J));
          }
        }), m;
      }
      function S2(b) {
        var m = new Q(), Y = b.replace(/\r?\n[\t ]+/g, " ");
        return Y.split(/\r?\n/).forEach(function(y) {
          var w = y.split(":"), J = w.shift().trim();
          if (J) {
            var r = w.join(":").trim();
            m.append(J, r);
          }
        }), m;
      }
      k.call(t.prototype);
      function U(b, m) {
        m || (m = {}), this.type = "default", this.status = m.status === void 0 ? 200 : m.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in m ? m.statusText : "OK", this.headers = new Q(m.headers), this.url = m.url || "", this._initBody(b);
      }
      k.call(U.prototype), U.prototype.clone = function() {
        return new U(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Q(this.headers),
          url: this.url
        });
      }, U.error = function() {
        var b = new U(null, { status: 0, statusText: "" });
        return b.type = "error", b;
      };
      var r2 = [301, 302, 303, 307, 308];
      U.redirect = function(b, m) {
        if (r2.indexOf(m) === -1)
          throw new RangeError("Invalid status code");
        return new U(null, { status: m, headers: { location: b } });
      }, X.DOMException = W.DOMException;
      try {
        new X.DOMException();
      } catch {
        X.DOMException = function(m, Y) {
          this.message = m, this.name = Y;
          var y = Error(m);
          this.stack = y.stack;
        }, X.DOMException.prototype = Object.create(Error.prototype), X.DOMException.prototype.constructor = X.DOMException;
      }
      function $(b, m) {
        return new Promise(function(Y, y) {
          var w = new t(b, m);
          if (w.signal && w.signal.aborted)
            return y(new X.DOMException("Aborted", "AbortError"));
          var J = new XMLHttpRequest();
          function r() {
            J.abort();
          }
          J.onload = function() {
            var M = {
              status: J.status,
              statusText: J.statusText,
              headers: S2(J.getAllResponseHeaders() || "")
            };
            M.url = "responseURL" in J ? J.responseURL : M.headers.get("X-Request-URL");
            var I2 = "response" in J ? J.response : J.responseText;
            Y(new U(I2, M));
          }, J.onerror = function() {
            y(new TypeError("Network request failed"));
          }, J.ontimeout = function() {
            y(new TypeError("Network request failed"));
          }, J.onabort = function() {
            y(new X.DOMException("Aborted", "AbortError"));
          }, J.open(w.method, w.url, !0), w.credentials === "include" ? J.withCredentials = !0 : w.credentials === "omit" && (J.withCredentials = !1), "responseType" in J && d.blob && (J.responseType = "blob"), w.headers.forEach(function(M, I2) {
            J.setRequestHeader(I2, M);
          }), w.signal && (w.signal.addEventListener("abort", r), J.onreadystatechange = function() {
            J.readyState === 4 && w.signal.removeEventListener("abort", r);
          }), J.send(typeof w._bodyInit > "u" ? null : w._bodyInit);
        });
      }
      return $.polyfill = !0, W.fetch || (W.fetch = $, W.Headers = Q, W.Request = t, W.Response = U), X.Headers = Q, X.Request = t, X.Response = U, X.fetch = $, Object.defineProperty(X, "__esModule", { value: !0 }), X;
    })({});
  })(Z), Z.fetch.ponyfill = !0, delete Z.fetch.polyfill;
  var c = Z;
  I = c.fetch, I.default = c.fetch, I.fetch = c.fetch, I.Headers = c.Headers, I.Request = c.Request, I.Response = c.Response, G.exports = I;
})(W1, O);
const d1 = /* @__PURE__ */ c1(O);
var V1 = globalThis && globalThis.__rest || function(G, I) {
  var l = {};
  for (var Z in G)
    Object.prototype.hasOwnProperty.call(G, Z) && I.indexOf(Z) < 0 && (l[Z] = G[Z]);
  if (G != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, Z = Object.getOwnPropertySymbols(G); c < Z.length; c++)
      I.indexOf(Z[c]) < 0 && Object.prototype.propertyIsEnumerable.call(G, Z[c]) && (l[Z[c]] = G[Z[c]]);
  return l;
};
const W2 = "text/event-stream", X1 = 1e3, a2 = "last-event-id";
function m1(G, I) {
  var { signal: l, headers: Z, onopen: c, onmessage: W, onclose: X, onerror: d, fetch: V } = I, N = V1(I, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "fetch"]);
  return new Promise((R, F) => {
    const H = Object.assign({}, Z);
    H.accept || (H.accept = W2);
    let n, Q = X1, A;
    function B() {
      clearTimeout(A), n.abort();
    }
    l?.addEventListener("abort", () => {
      B(), R();
    });
    const f = V ?? d1, _ = c ?? N1;
    async function S() {
      var o;
      n = new AbortController();
      try {
        const k = await f(G, Object.assign(Object.assign({}, N), { headers: H, signal: n.signal }));
        await _(k), await I1(k.body, l1(G1((g) => {
          g ? H[a2] = g : delete H[a2];
        }, (g) => {
          Q = g;
        }, W))), X?.(), B(), R();
      } catch (k) {
        if (!n.signal.aborted)
          try {
            const g = (o = d?.(k)) !== null && o !== void 0 ? o : Q;
            clearTimeout(A), A = setTimeout(S, g);
          } catch (g) {
            B(), F(g);
          }
      }
    }
    S();
  });
}
function N1(G) {
  const I = G.headers.get("content-type");
  if (!I?.startsWith(W2))
    throw new Error(`Expected content-type to be ${W2}, Actual: ${I}`);
}
class R1 extends Error {
  constructor(I) {
    super(I), this.name = "TimeoutError";
  }
}
class F1 extends Error {
  constructor(I) {
    super(), this.name = "AbortError", this.message = I;
  }
}
const p2 = (G) => globalThis.DOMException === void 0 ? new F1(G) : new DOMException(G), v2 = (G) => {
  const I = G.reason === void 0 ? p2("This operation was aborted.") : G.reason;
  return I instanceof Error ? I : p2(I);
};
function Y1(G, I) {
  const {
    milliseconds: l,
    fallback: Z,
    message: c,
    customTimers: W = { setTimeout, clearTimeout }
  } = I;
  let X;
  const V = new Promise((N, R) => {
    if (typeof l != "number" || Math.sign(l) !== 1)
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${l}\``);
    if (I.signal) {
      const { signal: H } = I;
      H.aborted && R(v2(H)), H.addEventListener("abort", () => {
        R(v2(H));
      });
    }
    if (l === Number.POSITIVE_INFINITY) {
      G.then(N, R);
      return;
    }
    const F = new R1();
    X = W.setTimeout.call(void 0, () => {
      if (Z) {
        try {
          N(Z());
        } catch (H) {
          R(H);
        }
        return;
      }
      typeof G.cancel == "function" && G.cancel(), c === !1 ? N() : c instanceof Error ? R(c) : (F.message = c ?? `Promise timed out after ${l} milliseconds`, R(F));
    }, l), (async () => {
      try {
        N(await G);
      } catch (H) {
        R(H);
      }
    })();
  }).finally(() => {
    V.clear();
  });
  return V.clear = () => {
    W.clearTimeout.call(void 0, X), X = void 0;
  }, V;
}
class h1 {
  key;
  command;
  created = !1;
  constructor(I) {
    this.command = I;
  }
  async create() {
    this.key = await M1(), this.created = !0;
  }
  async stream(I, l) {
    this.created || await this.create();
    const Z = new AbortController(), c = JSON.stringify(this.command.completionParams);
    console.log("asdf stream called, body is", c, "and key is", String(this.key));
    const W = {
      role: "assistant",
      id: "1",
      text: "",
      delta: "",
      detail: {}
    };
    console.log("asdf about to create responseP");
    const X = new Promise((d, V) => {
      I.addEventListener("abort", (N) => {
        Z.abort(N), V(new Error("Caller aborted completion stream."));
      }), m1(
        this.command.url,
        {
          method: "POST",
          body: c,
          signal: Z.signal,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer foobar"
          },
          onclose() {
            console.log("asdf ONCLOSE");
          },
          onopen: async (N) => {
            if (console.log("asdf ONOPEN"), !N.ok)
              return console.log("asdf NOT OK, ABORT"), Z.abort(), V(new Error(`Failed to open completion stream: ${N.status} ${N.statusText}`));
          },
          onmessage: (N) => {
            if (console.log("asdf ONMESSAGE"), N.data === "[DONE]")
              return W.text = W.text.trim(), d(W);
            try {
              const R = JSON.parse(N.data);
              if (R?.id && (W.id = R.id), R?.choices?.length) {
                const { delta: F } = R.choices[0];
                W.delta = F.content, F.content && (W.text += F.content), F.role && (W.role = F.role), W.detail = R, l?.(R);
              }
            } catch (R) {
              console.log("asdf CAUGHT ERROR", R), V(R);
            }
          },
          onerror: (N) => {
            console.log("asdf ONERROR"), V(N);
          }
        }
      );
    });
    return console.log("asdf about to call pTimeout"), Y1(
      X,
      {
        milliseconds: 1e4,
        message: "Completion stream timed out."
      }
    ).catch(() => {
      Z.abort();
    }), console.log("returning responseP"), X;
  }
}
class w2 {
  webviewView;
  command;
  onProgressCallback;
  client;
  abortController;
  messages = [];
  constructor(I, l, Z) {
    this.webviewView = I, this.command = l, this.abortController = new AbortController(), this.client = new h1(this.command);
  }
  /**
   * @param message Only provided when this is a follow-up message. Otherwise, the command message is used.
   */
  async send(I = void 0) {
    I === void 0 ? (this.messages.length === 0 && this.messages.push({ role: "system", content: this.command.system }), this.messages.push({ role: "user", content: this.command.message })) : this.messages.push({ role: "user", content: I });
    const l = this.messages.map(({ content: X }) => X).join(`

`), Z = C("tokenizer"), c = new i2[Z].instance(), W = Number(this.command.completionParams.max_tokens) || 2048;
    this.command.completionParams.max_tokens = c.maxTokens(l, W), this.command.completionParams.stream = !0;
    try {
      const X = await this.client.stream(
        this.abortController.signal,
        (d) => {
          console.log("calling onProgressCallback"), this.onProgressCallback?.(d.text);
        }
      );
      return this.messages.push({ role: "assistant", content: X.text }), X.text;
    } catch (X) {
      console.log("asdf error", X), this.abort();
    }
    return null;
  }
  abort() {
    try {
      this.abortController && this.abortController.abort(), this.abortController = new AbortController();
    } catch (I) {
      console.error(I);
    }
  }
}
function Q1(G, I, l) {
  var Z;
  if (l === void 0 && (l = {}), !I.codes) {
    I.codes = {};
    for (var c = 0; c < I.chars.length; ++c)
      I.codes[I.chars[c]] = c;
  }
  if (!l.loose && G.length * I.bits & 7)
    throw new SyntaxError("Invalid padding");
  for (var W = G.length; G[W - 1] === "="; )
    if (--W, !l.loose && !((G.length - W) * I.bits & 7))
      throw new SyntaxError("Invalid padding");
  for (var X = new ((Z = l.out) != null ? Z : Uint8Array)(W * I.bits / 8 | 0), d = 0, V = 0, N = 0, R = 0; R < W; ++R) {
    var F = I.codes[G[R]];
    if (F === void 0)
      throw new SyntaxError("Invalid character " + G[R]);
    V = V << I.bits | F, d += I.bits, d >= 8 && (d -= 8, X[N++] = 255 & V >> d);
  }
  if (d >= I.bits || 255 & V << 8 - d)
    throw new SyntaxError("Unexpected end of data");
  return X;
}
function H1(G, I, l) {
  l === void 0 && (l = {});
  for (var Z = l, c = Z.pad, W = c === void 0 ? !0 : c, X = (1 << I.bits) - 1, d = "", V = 0, N = 0, R = 0; R < G.length; ++R)
    for (N = N << 8 | 255 & G[R], V += 8; V > I.bits; )
      V -= I.bits, d += I.chars[X & N >> V];
  if (V && (d += I.chars[X & N << I.bits - V]), W)
    for (; d.length * I.bits & 7; )
      d += "=";
  return d;
}
var y2 = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bits: 6
}, J1 = {
  parse: function(I, l) {
    return Q1(I, y2, l);
  },
  stringify: function(I, l) {
    return H1(I, y2, l);
  }
};
class x2 {
  [Symbol.toStringTag] = "[object EncoderMap]";
  encoder;
  constructor(I) {
    this.encoder = new Map(I ? (
      // eslint-disable-next-line unicorn/prefer-spread
      Array.from(I, ([l, Z]) => [l.toString(), Z])
    ) : void 0);
  }
  get size() {
    return this.encoder.size;
  }
  clear() {
    this.encoder.clear();
  }
  delete(I) {
    return this.encoder.delete(I.toString());
  }
  forEach(I) {
    this.encoder.forEach((l, Z) => {
      I(l, new Uint8Array(Z.split(",").map(Number)), this);
    });
  }
  get(I) {
    return this.encoder.get(I.toString());
  }
  getOrThrow(I) {
    const l = this.encoder.get(I.toString());
    if (typeof l > "u")
      throw new Error(`The byte-pair encoding does not contain a value for: ${I.toString()}`);
    return l;
  }
  has(I) {
    return this.encoder.has(I.toString());
  }
  set(I, l) {
    return this.encoder.set(I.toString(), l), this;
  }
  *entries() {
    for (const [I, l] of this.encoder.entries())
      yield [new Uint8Array(I.split(",").map(Number)), l];
  }
  *keys() {
    for (const I of this.encoder.keys())
      yield new Uint8Array(I.split(",").map(Number));
  }
  values() {
    return this.encoder.values();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
}
function a1(G) {
  const I = G.flatMap(([l, Z]) => !l || l.length === 0 ? [] : [[J1.parse(l), Z]]);
  return new x2(I);
}
function e2(G) {
  return G.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&");
}
class v1 {
  encoder;
  decoder;
  tokenSplitRegex;
  specialTokensEncoder;
  specialTokensDecoder;
  specialTokenPatternRegex;
  textEncoder = new TextEncoder();
  constructor({ bytePairEncoder: I, specialTokenEncoder: l, tokenSplitRegex: Z }) {
    this.encoder = I ?? new x2(), this.decoder = I ? new Map([...I].map(([X, d]) => [d, X])) : /* @__PURE__ */ new Map(), this.specialTokensEncoder = l ?? /* @__PURE__ */ new Map(), this.specialTokensDecoder = l ? new Map([...l].map(([X, d]) => [
      d,
      this.textEncoder.encode(X)
    ])) : /* @__PURE__ */ new Map(), this.tokenSplitRegex = Z;
    const W = [...this.specialTokensEncoder.keys()].map(e2).join("|");
    try {
      this.specialTokenPatternRegex = new RegExp(W);
    } catch {
      throw new Error("Invalid regular expression pattern.");
    }
  }
  *encodeNative(I, l) {
    let Z = 0, c = 0;
    for (; ; ) {
      const W = this.findNextSpecialStartIndex(I, l, Z, this.specialTokenPatternRegex), X = W !== void 0 ? W : I.length, d = I.slice(Z, X - Z);
      for (const [V] of d.matchAll(this.tokenSplitRegex)) {
        const N = this.textEncoder.encode(V), R = this.encoder.get(N);
        if (R !== void 0) {
          c = 1, yield [R];
          continue;
        }
        const F = this.bytePairEncode(N, this.encoder);
        c = F.length, yield F;
      }
      if (W !== void 0) {
        const V = I.slice(Math.max(0, W)), N = this.specialTokensEncoder.get(V);
        if (N === void 0)
          throw new Error(`Special token "${V}" is not in the special token encoder.`);
        yield [N], Z = W + V.length, c = 0;
      } else
        break;
    }
    return c;
  }
  findNextSpecialStartIndex(I, l, Z, c) {
    let W = Z;
    for (; ; ) {
      const X = c.exec(I.slice(Math.max(0, W)));
      if (!X)
        return;
      const [d] = X;
      if (l.has(d))
        return X.index + W;
      W = X.index + W + 1;
    }
  }
  *decodeNative(I) {
    for (const l of I) {
      const Z = this.tryDecodeToken(l);
      Z && (yield Z);
    }
  }
  async *decodeNativeAsync(I) {
    for await (const l of I) {
      const Z = this.tryDecodeToken(l);
      Z && (yield Z);
    }
  }
  tryDecodeToken(I) {
    return this.decoder.get(I) ?? this.specialTokensDecoder.get(I);
  }
  bytePairEncode(I, l) {
    return I.length === 1 ? [l.getOrThrow(I)] : this.bytePairMerge(I, l, (Z) => {
      const c = I.slice(Z.start, Z.end);
      return l.getOrThrow(c);
    });
  }
  bytePairMerge(I, l, Z) {
    const c = Array.from({ length: I.length + 1 }, (d, V) => ({
      start: V,
      rank: Number.POSITIVE_INFINITY
    })), W = (d, V) => {
      if (d + V + 2 >= c.length)
        return;
      const N = I.slice(c[d].start, c[d + V + 2].start);
      return l.get(N);
    };
    for (let d = 0; d < c.length - 2; d++) {
      const V = W(d, 0);
      V !== void 0 && (c[d].rank = V);
    }
    for (; c.length > 1; ) {
      let d = Number.POSITIVE_INFINITY, V = 0, N = 0;
      for (const R of c)
        R.rank < d && (d = R.rank, V = N), N++;
      if (d === Number.POSITIVE_INFINITY)
        break;
      c[V].rank = W(V, 1) ?? Number.POSITIVE_INFINITY, V > 0 && (c[V - 1].rank = W(V - 1, 1) ?? Number.POSITIVE_INFINITY), c.splice(V + 1, 1);
    }
    const X = [];
    for (let d = 0; d < c.length - 1; d++)
      X.push(Z({
        start: c[d].start,
        end: c[d + 1].start
      }));
    return X;
  }
}
const T = "<|endoftext|>", m2 = "<|fim_prefix|>", N2 = "<|fim_middle|>", R2 = "<|fim_suffix|>", C2 = "<|im_start|>", M2 = "<|im_end|>", x = "<|im_sep|>", K2 = "<|endofprompt|>", z = "cl100k_base", s = "p50k_base", E2 = "p50k_edit", v = "r50k_base", n2 = {
  // chat
  "gpt-4": z,
  "gpt-4-32k": z,
  "gpt-4-0314": z,
  "gpt-4-32k-0314": z,
  "gpt-3.5-turbo": z,
  "gpt-3.5-turbo-0301": z,
  // text
  "text-davinci-003": s,
  "text-davinci-002": s,
  "text-davinci-001": v,
  "text-curie-001": v,
  "text-babbage-001": v,
  "text-ada-001": v,
  davinci: v,
  curie: v,
  babbage: v,
  ada: v,
  // code
  "code-davinci-002": s,
  "code-davinci-001": s,
  "code-cushman-002": s,
  "code-cushman-001": s,
  "davinci-codex": s,
  "cushman-codex": s,
  // edit
  "text-davinci-edit-001": E2,
  "code-davinci-edit-001": E2,
  // embeddings
  "text-embedding-ada-002": z,
  // old embeddings
  "text-similarity-davinci-001": v,
  "text-similarity-curie-001": v,
  "text-similarity-babbage-001": v,
  "text-similarity-ada-001": v,
  "text-search-davinci-doc-001": v,
  "text-search-curie-doc-001": v,
  "text-search-babbage-doc-001": v,
  "text-search-ada-doc-001": v,
  "code-search-babbage-code-001": v,
  "code-search-ada-code-001": v
}, w1 = {
  "gpt-3.5-turbo": {
    messageSeparator: `
`,
    roleSeparator: `
`
  },
  "gpt-3.5-turbo-0301": {
    messageSeparator: `
`,
    roleSeparator: `
`
  },
  "gpt-4": {
    messageSeparator: "",
    roleSeparator: x
  },
  "gpt-4-0314": {
    messageSeparator: "",
    roleSeparator: x
  },
  "gpt-4-32k": {
    messageSeparator: "",
    roleSeparator: x
  },
  "gpt-4-32k-0314": {
    messageSeparator: "",
    roleSeparator: x
  }
}, y1 = w1, F2 = /'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu;
function E1(G) {
  return {
    expectedVocabularySize: 50257,
    tokenSplitRegex: F2,
    mergeableBytePairRanks: G,
    specialTokenMapping: /* @__PURE__ */ new Map([[T, 50256]])
  };
}
function n1(G) {
  return {
    expectedVocabularySize: 50281,
    tokenSplitRegex: F2,
    mergeableBytePairRanks: G,
    specialTokenMapping: /* @__PURE__ */ new Map([[T, 50256]])
  };
}
function L1(G) {
  return {
    tokenSplitRegex: F2,
    mergeableBytePairRanks: G,
    specialTokenMapping: /* @__PURE__ */ new Map([
      [T, 50256],
      [m2, 50281],
      [N2, 50282],
      [R2, 50283]
    ])
  };
}
function u1(G) {
  return {
    tokenSplitRegex: /(?:'s|'t|'re|'ve|'m|'ll|'d)|[^\r\n\p{L}\p{N}]?\p{L}+|\p{N}{1,3}| ?[^\s\p{L}\p{N}]+[\r\n]*|\s*[\r\n]+|\s+(?!\S)|\s+/giu,
    mergeableBytePairRanks: G,
    specialTokenMapping: /* @__PURE__ */ new Map([
      [T, 100257],
      [m2, 100258],
      [N2, 100259],
      [R2, 100260],
      [C2, 100264],
      [M2, 100265],
      [x, 100266],
      [K2, 100276]
    ])
  };
}
function d2(G, I) {
  const l = I(G);
  switch (G.toLowerCase()) {
    case "r50k_base":
      return E1(l);
    case "p50k_base":
      return n1(l);
    case "p50k_edit":
      return L1(l);
    case "cl100k_base":
      return u1(l);
    default:
      throw new Error(`Unknown encoding name: ${G}`);
  }
}
async function L2(G, I) {
  const l = await I(G);
  return d2(G, () => l);
}
const A1 = 55296, g1 = 56319;
function u2(G) {
  if (G.length === 0)
    return !1;
  const I = G.charCodeAt(G.length - 1);
  return I >= A1 && I <= g1;
}
function A2(G) {
  let I = 0;
  return G.forEach((l) => {
    I = Math.max(I, l);
  }), I;
}
function U1(G) {
  const l = [...G].map(e2).join("|");
  return new RegExp(`(${l})`);
}
const l2 = "all";
class e {
  static EndOfPrompt = K2;
  static EndOfText = T;
  static FimMiddle = N2;
  static FimPrefix = m2;
  static FimSuffix = R2;
  decoder = new TextDecoder("utf8");
  modelName;
  bytePairEncodingCoreProcessor;
  specialTokenMapping;
  constructor({ tokenSplitRegex: I, mergeableBytePairRanks: l, specialTokenMapping: Z, expectedVocabularySize: c, modelName: W }) {
    const X = Math.max(A2(l), A2(Z));
    if (this.specialTokenMapping = Z, c !== void 0) {
      if (l.size + Z.size !== c)
        throw new Error("The number of mergeable tokens and special tokens must be equal to explicit_n_vocab.");
      if (X !== c - 1)
        throw new Error("The maximum token value must be equal to explicit_n_vocab - 1.");
    }
    this.bytePairEncodingCoreProcessor = new v1({
      bytePairEncoder: l,
      specialTokenEncoder: Z,
      tokenSplitRegex: I
    }), this.encode = this.encode.bind(this), this.decode = this.decode.bind(this), this.encodeGenerator = this.encodeGenerator.bind(this), this.decodeGenerator = this.decodeGenerator.bind(this), this.decodeAsyncGenerator = this.decodeAsyncGenerator.bind(this), this.isWithinTokenLimit = this.isWithinTokenLimit.bind(this), this.encodeChat = this.encodeChat.bind(this), this.encodeChatGenerator = this.encodeChatGenerator.bind(this), this.modelName = W;
  }
  static getEncodingApi(I, l) {
    const Z = d2(I, l);
    return new e(Z);
  }
  static getEncodingApiForModel(I, l) {
    const Z = n2[I], c = d2(Z, l);
    return new e({ ...c, modelName: I });
  }
  static async getEncodingApiAsync(I, l) {
    const Z = await L2(I, l);
    return new e(Z);
  }
  static async getEncodingApiForModelAsync(I, l) {
    const Z = n2[I], c = await L2(Z, l);
    return new e({ ...c, modelName: I });
  }
  encodeGenerator(I, { allowedSpecial: l = /* @__PURE__ */ new Set(), disallowedSpecial: Z = /* @__PURE__ */ new Set([l2]) } = {}) {
    const c = new Set(this.specialTokenMapping.keys());
    if (Z.has(l2) && (Z = new Set(c), l.forEach((W) => Z.delete(W)), Z.forEach((W) => l.delete(W))), l.has(l2) && (l = c), Z.size > 0) {
      const W = U1(Z), X = I.match(W);
      if (X !== null)
        throw new Error(`Disallowed special token found: ${X[0]}`);
    }
    return this.bytePairEncodingCoreProcessor.encodeNative(I, l);
  }
  encode(I, l = {}) {
    return [...this.encodeGenerator(I, l)].flat();
  }
  /**
   * Progressively tokenizes an OpenAI chat.
   * Warning: gpt-3.5-turbo and gpt-4 chat format may change over time.
   * Returns tokens assuming the 'gpt-3.5-turbo-0301' / 'gpt-4-0314' format.
   * Based on OpenAI's guidelines: https://github.com/openai/openai-python/blob/main/chatml.md
   * Also mentioned in section 6 of this document: https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb
   */
  *encodeChatGenerator(I, l = this.modelName) {
    if (!l)
      throw new Error("Model name must be provided either during initialization or passed in to the method.");
    const Z = y1[l], c = this.specialTokenMapping.get(C2), W = this.specialTokenMapping.get(M2);
    if (!Z || c === void 0 || W === void 0)
      throw new Error(`Model '${l}' does not support chat.`);
    const X = /* @__PURE__ */ new Set([x]), { messageSeparator: d, roleSeparator: V } = Z, N = d.length > 0 ? this.encode(d) : [], R = V.length > 0 ? this.encode(V, { allowedSpecial: X }) : [], F = /* @__PURE__ */ new Map();
    for (const { role: H = "system", name: n = H, content: Q } of I) {
      if (Q === void 0)
        throw new Error("Content must be defined for all messages.");
      yield [c];
      const A = F.get(n) ?? this.encode(n);
      F.set(n, A), yield A, R.length > 0 && (yield R), yield* this.encodeGenerator(Q), yield [W], yield N;
    }
    yield [c], yield* this.encodeGenerator("assistant"), R.length > 0 && (yield R);
  }
  /**
   * Encodes a chat into a single array of tokens.
   * Warning: gpt-3.5-turbo and gpt-4 chat format may change over time.
   * Returns tokens assuming the 'gpt-3.5-turbo-0301' / 'gpt-4-0314' format.
   * Based on OpenAI's guidelines: https://github.com/openai/openai-python/blob/main/chatml.md
   * Also mentioned in section 6 of this document: https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb
   */
  encodeChat(I, l = this.modelName) {
    return [...this.encodeChatGenerator(I, l)].flat();
  }
  /**
   * @returns {false | number} false if token limit is exceeded, otherwise the number of tokens
   */
  isWithinTokenLimit(I, l) {
    const Z = typeof I == "string" ? this.encodeGenerator(I) : this.encodeChatGenerator(I);
    let c = 0;
    for (const W of Z)
      if (c += W.length, c > l)
        return !1;
    return c;
  }
  *decodeGenerator(I) {
    const l = this.bytePairEncodingCoreProcessor.decodeNative(I);
    let Z = "";
    for (const c of l)
      Z += this.decoder.decode(c, { stream: !0 }), !(Z.length === 0 || u2(Z)) && (yield Z, Z = "");
    Z.length > 0 && (yield Z);
  }
  async *decodeAsyncGenerator(I) {
    const l = this.bytePairEncodingCoreProcessor.decodeNativeAsync(I);
    let Z = "";
    for await (const c of l)
      Z += this.decoder.decode(c, { stream: !0 }), !(Z.length === 0 || u2(Z)) && (yield Z, Z = "");
    Z.length > 0 && (yield Z);
  }
  decode(I) {
    return [...this.decodeGenerator(I)].join("");
  }
}
const s1 = e.getEncodingApi("cl100k_base", () => a1(p1)), { decode: S1, decodeAsyncGenerator: r1, decodeGenerator: P1, encode: g2, encodeGenerator: O1, isWithinTokenLimit: D1, encodeChat: q1, encodeChatGenerator: f1 } = s1;
class G2 {
  countTokens(I) {
    return g2(I).length;
  }
  maxTokens(I, l) {
    return l - g2(I).length;
  }
}
const k1 = {
  OpenAI: {
    system: "{system_message}",
    user: "{user_message}",
    first: "{system}",
    stops: []
  },
  Anthropic: {
    system: "{system_message}",
    user: `

Human: {user_message}

Assistant:`,
    first: "{system}{user}",
    stops: ["Human:"]
  },
  Alpaca: {
    system: "{system_message}",
    user: `### Instruction: {user_message}

### Response:`,
    first: `{system}

{user}`,
    stops: ["### Instruction:"]
  },
  Vicuna: {
    system: "{system_message}",
    user: `USER:
{user_message}
ASSISTANT:`,
    first: `{system}

{user}`,
    stops: ["USER:"]
  },
  ChatML: {
    system: `<|im_start|>system
{system_message}<|im_end|>`,
    user: `<|im_start|>user
{user_message}<|im_end|>
<|im_start|>assistant
`,
    first: `{system}
{user}`,
    stops: ["<|im_end|>"]
  },
  "Llama 2": {
    system: `<<SYS>>
{system_message}
<</SYS>>`,
    user: "<s>[INST] {user_message} [/INST]",
    first: `<s>[INST] {system}

{user_message} [/INST]`,
    stops: ["</s>"]
  },
  "Orca 2": {
    system: `### System:
{system_message}`,
    user: `### User:
{user_message}

### Response:
`,
    first: `{system}

{user}`,
    stops: ["### User:"]
  }
}, q = {
  OpenAI: {
    instance: w2,
    completionParams: [
      { name: "n", default: 1 },
      { name: "model", default: "gpt-3.5-turbo" },
      { name: "temperature", default: 0.3 },
      { name: "max_tokens", default: 2048 }
    ]
  },
  Anthropic: {
    instance: w2,
    completionParams: [
      { name: "max_tokens_to_sample", default: 1e5 },
      { name: "top_k", default: 5 },
      { name: "model", default: "claude-instant-1" },
      { name: "temperature", default: 0.3 }
    ]
  }
}, i2 = {
  OpenAI: {
    instance: G2
  },
  Llama: {
    instance: G2
  },
  Anthropic: {
    instance: G2
  }
}, U2 = (G) => {
  const I = {};
  return q[G].completionParams.forEach((l) => {
    I[l.name] = l.default;
  }), I;
}, t1 = {
  label: "Programming",
  id: p,
  url: "/programming"
}, z1 = () => {
  const G = "abcdefghijklmnopqrstuvwxyz";
  let I = "";
  for (let l = 0; l < 8; l++)
    I += G.charAt(Math.floor(Math.random() * G.length));
  return I;
}, B1 = (G) => {
  const { selection: I } = G, l = I.start.line, Z = I.end.line;
  return { selectedText: G.document.getText(I), startLine: l, endLine: Z };
}, s2 = (G) => u.window.showErrorMessage(G), Z2 = (G) => G.document.languageId, o1 = (G) => G.document.fileName.split(".").pop() || "", Y2 = {}, x1 = () => {
  o2.map((I) => ({
    ...I,
    commandId: e1(I.title),
    mode: B2.find((l) => l.id === I.modeId)
  })).forEach((I) => {
    Y2[I.commandId] = I;
  });
}, e1 = (G) => G.toLowerCase().replaceAll(/[^a-zA-Z\d]+/g, "_").split("_").filter(Boolean).reduce((c, W, X) => X === 0 ? c + W : c + W.charAt(0).toUpperCase() + W.slice(1), "") + z1(), C1 = async (G, I) => await h.getSecret(G) ?? I, k2 = () => {
  const G = h.get(a.activeMode());
  return G || t1;
}, b2 = () => {
  const G = h.get(a.modes());
  return G || B2;
}, a = {
  // Stores all the Modes for the active Preset.
  activeModePresets() {
    return `${k2().id}-presets`;
  },
  // Stores the active Mode for the active Preset.
  activeModeActivePreset() {
    return `${k2().id}-activePreset`;
  },
  // Stores the active Mode.
  activeMode() {
    return "activeMode";
  },
  // Stores all the Modes.
  modes() {
    return "modes";
  },
  // Welcome wizard
  welcomeWizard() {
    return "welcomeWizard";
  },
  providerApiKey(G) {
    return `${G}-apiKey`;
  }
}, C = (G) => {
  const I = h.get(a.activeModeActivePreset());
  if (I && I[G])
    return typeof I[G] == "object" ? { ...I[G] } : I[G];
}, M1 = async () => {
  const G = C("provider"), I = await C1(a.providerApiKey(G));
  return I || "";
};
async function K1(G) {
  const I = u.window.activeTextEditor, l = P2(Z2(I), o1(I)), Z = B1(I), c = async (d) => {
    if (d = d.replace("{{ft}}", Z2(I)), d = d.replace("{{language}}", l), d = d.replace("{{selection}}", Z.selectedText), d.includes("{{input}}")) {
      const F = await u.window.showInputBox({
        prompt: "Elaborate, or leave blank.",
        value: ""
      });
      if (F === void 0)
        return "";
      d = d.replace("{{input}}", F);
    }
    const V = /\{\{input:.*?\}\}/g, N = d.match(V);
    if (N)
      for (const F of N) {
        const H = await u.window.showInputBox({
          prompt: F.replace("{{input:", "").replace("}}", ""),
          value: ""
        });
        if (H === void 0)
          return "";
        d = d.replace(F, H);
      }
    const R = O2[Z2(I)] ?? "";
    return d.replace("{{language_instructions}}", R);
  }, W = await c(G.message), X = await c(G.system ?? q2(G, G.modeId));
  return { message: W, system: X };
}
class i1 {
  webviewView;
  prepared;
  provider;
  providerInstance;
  constructor(I, l) {
    this.webviewView = I;
    const Z = Y2[l.commandId];
    if (!Z)
      throw new Error(`Command ${l.commandId} not found`);
    this.runCommand(Z);
  }
  async runCommand(I) {
    if (this.prepared = await j1(I), this.provider = q[C("provider")].instance, !this.provider) {
      s2(`Provider "${C("provider")}" not found`);
      return;
    }
    c2(this.webviewView, P.ChatInitiated), this.providerInstance = new this.provider(
      this.webviewView,
      this.prepared,
      (Z) => {
        c2(this.webviewView, P.ChatMessageReceived, Z);
      }
    ), console.log("asdf runCommand");
    const l = await this.providerInstance.send();
    console.log("asdf after send"), this.handleResponseInsertionMethod(l), c2(this.webviewView, P.ChatEnded);
  }
  // send is for follow-up messages on an existing providerInstance.
  async send(I) {
    if (!this.providerInstance) {
      s2("No provider instance found");
      return;
    }
    const l = await this.providerInstance.send(I);
    this.handleResponseInsertionMethod(l);
  }
  handleResponseInsertionMethod(I) {
    this.prepared;
  }
  abort() {
    this.providerInstance?.abort(), this.webviewView.webview.postMessage({ content: { type: "notification", message: "Request aborted" } });
  }
}
const j1 = async (G) => {
  const I = await K1(G), l = G.insertionMethod ?? z2.Replace;
  return {
    ...I,
    insertionMethod: l,
    url: C("url"),
    completionParams: C("completionParams")
  };
}, c2 = (G, I, l) => {
  G.webview.postMessage({ content: { type: I, value: l } });
}, t2 = (G, I) => {
  G.webview.postMessage({ content: { type: "notification", message: I } });
};
let j;
class D {
  constructor(I, l) {
    this._extensionPath = I, this._extensionUri = l;
  }
  static viewType = "wingman2.mainView";
  static _view;
  resolveWebviewView(I, l, Z) {
    I.webview.options = {
      enableScripts: !0,
      localResourceRoots: [this._extensionUri]
    }, D._view = I, I.webview.html = this.getWebviewHTML(I.webview), I.webview.onDidReceiveMessage(async (c) => {
      try {
        const { id: W, content: X } = c;
        if (!W || !X)
          throw new Error("Invalid message format");
        const { type: d, key: V, value: N } = X;
        switch (d) {
          case "get": {
            if (!V)
              throw new Error("Missing 'key' in 'get' request");
            switch (V) {
              case "prompts": {
                I.webview.postMessage({ id: W, content: Y2 });
                break;
              }
              case "activeMode": {
                I.webview.postMessage({ id: W, content: h.get(a.activeMode()) });
                break;
              }
              case "presets": {
                I.webview.postMessage({ id: W, content: h.get(a.activeModePresets()) || [] });
                break;
              }
              case "activePreset": {
                I.webview.postMessage({ id: W, content: h.get(a.activeModeActivePreset()) });
                break;
              }
              case "providers": {
                I.webview.postMessage({ id: W, content: Object.keys(q) });
                break;
              }
              case "formats": {
                I.webview.postMessage({ id: W, content: Object.keys(k1) });
                break;
              }
              case "tokenizers": {
                I.webview.postMessage({ id: W, content: Object.keys(i2) });
                break;
              }
              case "welcomeWizard": {
                I.webview.postMessage({ id: W, content: h.get(a.welcomeWizard()) });
                break;
              }
              default:
                throw new Error(`Invalid 'key' in 'get' request: ${V}`);
            }
            break;
          }
          case "set": {
            if (!V || N === void 0)
              throw new Error("Missing 'key' or 'value' in 'set' request");
            switch (V) {
              case "prompts": {
                I.webview.postMessage({ id: W, content: o2 });
                break;
              }
              case "activeMode": {
                h.set(a.activeMode(), N), console.log("activeMode set to", h.get(a.activeMode()));
                break;
              }
              case "activePreset": {
                h.set(a.activeModeActivePreset(), N), console.log("activePreset set to", h.get(a.activeModeActivePreset()));
                break;
              }
              case "welcomeWizard": {
                h.set(a.welcomeWizard(), N);
                break;
              }
              default:
                throw new Error(`Invalid 'key' in 'set' request: ${V}`);
            }
            break;
          }
          case "delete": {
            if (!V)
              throw new Error("Missing 'key' in 'delete' request");
            switch (V) {
              default:
                throw new Error(`Invalid 'key' in 'delete' request: ${V}`);
            }
            break;
          }
          case "create": {
            if (!V || N === void 0)
              throw new Error("Missing 'key' or 'value' in 'create' request");
            switch (V) {
              case "newPreset": {
                const R = h.get(a.activeModePresets()) || [], F = await u.window.showInputBox({ prompt: "Enter a name for your preset" });
                if (!F)
                  return;
                const H = { ...N, name: F };
                R.push(H), h.set(a.activeModePresets(), R), t2(I, "Preset created."), I.webview.postMessage({ id: W, content: H });
                break;
              }
              default:
                throw new Error(`Invalid 'key' in 'create' request: ${V}`);
            }
            break;
          }
          case "update": {
            if (!V || !N)
              throw new Error("Missing 'key' or 'value' in 'create' request");
            switch (V) {
              case "preset": {
                const R = h.get(a.activeModePresets()) || [];
                if (!R.find((Q) => Q.id === N.id))
                  return;
                const H = R.map((Q) => Q.id === N.id ? N : Q);
                h.set(a.activeModePresets(), H), h.get(a.activeModeActivePreset()).id === N.id && h.set(a.activeModeActivePreset(), N), t2(I, "Preset saved."), I.webview.postMessage({ id: W, content: N });
                break;
              }
              default:
                throw new Error(`Invalid 'key' in 'create' request: ${V}`);
            }
            break;
          }
          case "run": {
            if (!V)
              throw new Error("Missing 'key' in 'run' request");
            j = new i1(
              I,
              { commandId: V }
            );
            break;
          }
          case "send": {
            if (!j)
              return;
            j.send(N);
            break;
          }
          case "abort": {
            if (!j)
              return;
            j.abort();
            break;
          }
          default:
            throw new Error(`Invalid 'type' in message: ${d}`);
        }
      } catch (W) {
        console.error("Error processing message:", W);
      }
    });
  }
  getWebviewHTML(I) {
    const l = I.asWebviewUri(
      u.Uri.joinPath(this._extensionUri, "dist", "style.css")
    ), Z = I.asWebviewUri(
      u.Uri.joinPath(this._extensionUri, "dist", "webview.umd.js")
    );
    return (
      /* html */
      `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <link href="${l}" rel="stylesheet">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Wingman2</title>
          </head>
          <body>
            <div id="app"></div>
            <script type="module" src="${Z}"><\/script>
          </body>
        </html>`
    );
  }
}
const T1 = () => {
  b2().forEach((l) => {
    h.set(`${l.id}-presets`, void 0), h.set(`${l.id}-activePreset`, void 0);
  });
  const I = b2().map((l) => h.get(`${l.id}-presets`)).filter(Boolean);
  (!I || !I.length) && (console.log("Creating default presets"), b2().forEach((Z) => {
    h.set(`${Z.id}-presets`, [
      {
        id: h2(),
        name: "OpenAI (gpt-3.5-turbo)",
        provider: "OpenAI",
        format: "OpenAI",
        tokenizer: "OpenAI",
        url: "https://api.openai.com/v1/chat/completions",
        completionParams: {
          ...U2("OpenAI")
        }
      },
      {
        id: h2(),
        name: "Anthropic (claude-instant-1)",
        provider: "Anthropic",
        url: "https://api.anthropic.com/v1/complete",
        completionParams: {
          ...U2("Anthropic")
        }
      }
    ]), h.set(`${Z.id}-activePreset`, h.get(`${Z.id}-presets`)[0]);
  }));
};
function _1(G) {
  h.create(G), T1(), x1();
  try {
    const l = u.commands.registerCommand("wingman2.setApiKey", async () => {
      const Z = await u.window.showQuickPick(
        Object.keys(q).map((W) => ({ label: W })),
        { placeHolder: "Select the provider you want to set the API key for." }
      );
      if (!Z)
        return;
      const c = await u.window.showInputBox({ prompt: `Enter your ${Z.label} API key.` });
      c && h.setSecret(a.providerApiKey(Z.label), c);
    });
    G.subscriptions.push(l);
  } catch (l) {
    console.error(l);
  }
  const I = new D(
    G.extensionPath,
    G.extensionUri
  );
  G.subscriptions.push(
    u.window.registerWebviewViewProvider(
      D.viewType,
      I,
      {
        webviewOptions: {
          retainContextWhenHidden: !0
        }
      }
    )
  );
}
function $1() {
}
export {
  _1 as activate,
  $1 as deactivate,
  T1 as restoreDefaultPresetsForAllModes
};