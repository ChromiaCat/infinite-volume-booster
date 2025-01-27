parcelRequire = function (e, r, t, n) {
    var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function (r) {
                return e[t][1][r] || r
            },
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function (e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    },
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function (r, t) {
        e[r] = [function (e, r) {
                r.exports = t
            }, {}
        ]
    };
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i)
        throw i;
    return f
}
({
    "sSZ0": [function (require, module, exports) {
            !function () {
                "use strict";
                function e(e, t) {
                    return (...o) => {
                        let s,
                        n = o;
                        if (o && o.length > 0) {
                            const e = o[o.length - 1];
                            "function" == typeof e && (n = o.slice(0, o.length - 1), s = e)
                        }
                        return new Promise((o, r) => {
                            try {
                                e(...n, (...e) => {
                                    if (s)
                                        try {
                                            s(...e)
                                        } catch (n) {
                                            r(n)
                                        }
                                    if (chrome.runtime.lastError)
                                        r(new Error(chrome.runtime.lastError.message || `Error thrown by API ${chrome.runtime.lastError}`));
                                    else if (t) {
                                        const s = t(...e);
                                        o(s)
                                    } else
                                        e && 0 !== e.length ? 1 === e.length ? o(e[0]) : o(e) : o()
                                })
                            } catch (a) {
                                r(a)
                            }
                        })
                    }
                }
                function t(o, s) {
                    if (o)
                        for (let n of s) {
                            let s;
                            if (s = "string" == typeof n ? n : n.n, !o.hasOwnProperty(s))
                                continue;
                            const r = o[s];
                            "function" == typeof r ? o[s] = e(r.bind(o), n.cb) : t(r, n.props)
                        }
                }
                const o = ["get", "set", "clear"],
                s = ["clear", "get", "set", "getResourceIdentifiers"],
                n = ["get", "getBytesInUse", "set", "remove", "clear"];
                !function (e) {
                    for (let o in e) {
                        const s = chrome[o];
                        s && t(s, e[o])
                    }
                }
                ({
                    accessibilityFeatures: [{
                            n: "spokenFeedback",
                            props: o
                        }, {
                            n: "largeCursor",
                            props: o
                        }, {
                            n: "stickyKeys",
                            props: o
                        }, {
                            n: "highContrast",
                            props: o
                        }, {
                            n: "screenMagnifier",
                            props: o
                        }, {
                            n: "autoclick",
                            props: o
                        }, {
                            n: "virtualKeyboard",
                            props: o
                        }, {
                            n: "animationPolicy",
                            props: o
                        }
                    ],
                    alarms: ["get", "getAll", "clear", "clearAll"],
                    bookmarks: ["get", "getChildren", "getRecent", "getTree", "getSubTree", "search", "create", "move", "update", "remove", "removeTree"],
                    browser: ["openTab"],
                    browserAction: ["getTitle", "setIcon", "getPopup", "getBadgeText", "getBadgeBackgroundColor"],
                    browsingData: ["settings", "remove", "removeAppcache", "removeCache", "removeCookies", "removeDownloads", "removeFileSystems", "removeFormData", "removeHistory", "removeIndexedDB", "removeLocalStorage", "removePluginData", "removePasswords", "removeWebSQL"],
                    commands: ["getAll"],
                    contentSettings: [{
                            n: "cookies",
                            props: s
                        }, {
                            n: "images",
                            props: s
                        }, {
                            n: "javascript",
                            props: s
                        }, {
                            n: "location",
                            props: s
                        }, {
                            n: "plugins",
                            props: s
                        }, {
                            n: "popups",
                            props: s
                        }, {
                            n: "notifications",
                            props: s
                        }, {
                            n: "fullscreen",
                            props: s
                        }, {
                            n: "mouselock",
                            props: s
                        }, {
                            n: "microphone",
                            props: s
                        }, {
                            n: "camera",
                            props: s
                        }, {
                            n: "unsandboxedPlugins",
                            props: s
                        }, {
                            n: "automaticDownloads",
                            props: s
                        }
                    ],
                    contextMenus: ["create", "update", "remove", "removeAll"],
                    cookies: ["get", "getAll", "set", "remove", "getAllCookieStores"],
                    debugger: ["attach", "detach", "sendCommand", "getTargets"],
                    desktopCapture: ["chooseDesktopMedia"],
                    documentScan: ["scan"],
                    downloads: ["download", "search", "pause", "resume", "cancel", "getFileIcon", "erase", "removeFile", "acceptDanger"],
                    enterprise: [{
                            n: "platformKeys",
                            props: ["getToken", "getCertificates", "importCertificate", "removeCertificate"]
                        }
                    ],
                    extension: ["isAllowedIncognitoAccess", "isAllowedFileSchemeAccess"],
                    fileBrowserHandler: ["selectFile"],
                    fileSystemProvider: ["mount", "unmount", "getAll", "get", "notify"],
                    fontSettings: ["setDefaultFontSize", "getFont", "getDefaultFontSize", "getMinimumFontSize", "setMinimumFontSize", "getDefaultFixedFontSize", "clearDefaultFontSize", "setDefaultFixedFontSize", "clearFont", "setFont", "clearMinimumFontSize", "getFontList", "clearDefaultFixedFontSize"],
                    gcm: ["register", "unregister", "send"],
                    history: ["search", "getVisits", "addUrl", "deleteUrl", "deleteRange", "deleteAll"],
                    i18n: ["getAcceptLanguages", "detectLanguage"],
                    identity: ["getAuthToken", "getProfileUserInfo", "removeCachedAuthToken", "launchWebAuthFlow"],
                    idle: ["queryState"],
                    input: [{
                            n: "ime",
                            props: ["setMenuItems", "commitText", "setCandidates", "setComposition", "updateMenuItems", "setCandidateWindowProperties", "clearComposition", "setCursorPosition", "sendKeyEvents", "deleteSurroundingText"]
                        }
                    ],
                    management: ["setEnabled", "getPermissionWarningsById", "get", "getAll", "getPermissionWarningsByManifest", "launchApp", "uninstall", "getSelf", "uninstallSelf", "createAppShortcut", "setLaunchType", "generateAppForLink"],
                    networking: [{
                            n: "config",
                            props: ["setNetworkFilter", "finishAuthentication"]
                        }
                    ],
                    notifications: ["create", "update", "clear", "getAll", "getPermissionLevel"],
                    pageAction: ["getTitle", "setIcon", "getPopup"],
                    pageCapture: ["saveAsMHTML"],
                    permissions: ["getAll", "contains", "request", "remove"],
                    platformKeys: ["selectClientCertificates", "verifyTLSServerCertificate", {
                            n: "getKeyPair",
                            cb: (e, t) => ({
                                publicKey: e,
                                privateKey: t
                            })
                        }
                    ],
                    runtime: ["getBackgroundPage", "openOptionsPage", "setUninstallURL", "restartAfterDelay", "sendMessage", "sendNativeMessage", "getPlatformInfo", "getPackageDirectoryEntry", {
                            n: "requestUpdateCheck",
                            cb: (e, t) => ({
                                status: e,
                                details: t
                            })
                        }
                    ],
                    scriptBadge: ["getPopup"],
                    sessions: ["getRecentlyClosed", "getDevices", "restore"],
                    storage: [{
                            n: "sync",
                            props: n
                        }, {
                            n: "local",
                            props: n
                        }, {
                            n: "managed",
                            props: n
                        }
                    ],
                    socket: ["create", "connect", "bind", "read", "write", "recvFrom", "sendTo", "listen", "accept", "setKeepAlive", "setNoDelay", "getInfo", "getNetworkList"],
                    sockets: [{
                            n: "tcp",
                            props: ["create", "update", "setPaused", "setKeepAlive", "setNoDelay", "connect", "disconnect", "secure", "send", "close", "getInfo", "getSockets"]
                        }, {
                            n: "tcpServer",
                            props: ["create", "update", "setPaused", "listen", "disconnect", "close", "getInfo", "getSockets"]
                        }, {
                            n: "udp",
                            props: ["create", "update", "setPaused", "bind", "send", "close", "getInfo", "getSockets", "joinGroup", "leaveGroup", "setMulticastTimeToLive", "setMulticastLoopbackMode", "getJoinedGroups", "setBroadcast"]
                        }
                    ],
                    system: [{
                            n: "cpu",
                            props: ["getInfo"]
                        }, {
                            n: "memory",
                            props: ["getInfo"]
                        }, {
                            n: "storage",
                            props: ["getInfo", "ejectDevice", "getAvailableCapacity"]
                        }
                    ],
                    tabCapture: ["capture", "getCapturedTabs"],
                    tabs: ["get", "getCurrent", "sendMessage", "create", "duplicate", "query", "highlight", "update", "move", "reload", "remove", "detectLanguage", "captureVisibleTab", "executeScript", "insertCSS", "setZoom", "getZoom", "setZoomSettings", "getZoomSettings", "discard"],
                    topSites: ["get"],
                    tts: ["isSpeaking", "getVoices", "speak"],
                    types: ["set", "get", "clear"],
                    vpnProvider: ["createConfig", "destroyConfig", "setParameters", "sendPacket", "notifyConnectionStateChanged"],
                    wallpaper: ["setWallpaper"],
                    webNavigation: ["getFrame", "getAllFrames", "handlerBehaviorChanged"],
                    windows: ["get", "getCurrent", "getLastFocused", "getAll", "create", "update", "remove"]
                })
            }
            ();
        }, {}
    ],
    "QVnC": [function (require, module, exports) {
            var define;
            var t,
            r = function (t) {
                "use strict";
                var r,
                e = Object.prototype,
                n = e.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                c = o.toStringTag || "@@toStringTag";
                function u(t, r, e) {
                    return Object.defineProperty(t, r, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[r]
                }
                try {
                    u({}, "")
                } catch (P) {
                    u = function (t, r, e) {
                        return t[r] = e
                    }
                }
                function h(t, r, e, n) {
                    var o = r && r.prototype instanceof d ? r : d,
                    i = Object.create(o.prototype),
                    a = new G(n || []);
                    return i._invoke = function (t, r, e) {
                        var n = l;
                        return function (o, i) {
                            if (n === p)
                                throw new Error("Generator is already running");
                            if (n === y) {
                                if ("throw" === o)
                                    throw i;
                                return F()
                            }
                            for (e.method = o, e.arg = i; ; ) {
                                var a = e.delegate;
                                if (a) {
                                    var c = j(a, e);
                                    if (c) {
                                        if (c === v)
                                            continue;
                                        return c
                                    }
                                }
                                if ("next" === e.method)
                                    e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if (n === l)
                                        throw n = y, e.arg;
                                    e.dispatchException(e.arg)
                                } else
                                    "return" === e.method && e.abrupt("return", e.arg);
                                n = p;
                                var u = f(t, r, e);
                                if ("normal" === u.type) {
                                    if (n = e.done ? y : s, u.arg === v)
                                        continue;
                                    return {
                                        value: u.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === u.type && (n = y, e.method = "throw", e.arg = u.arg)
                            }
                        }
                    }
                    (t, e, a),
                    i
                }
                function f(t, r, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(r, e)
                        }
                    } catch (P) {
                        return {
                            type: "throw",
                            arg: P
                        }
                    }
                }
                t.wrap = h;
                var l = "suspendedStart",
                s = "suspendedYield",
                p = "executing",
                y = "completed",
                v = {};
                function d() {}
                function g() {}
                function m() {}
                var w = {};
                w[i] = function () {
                    return this
                };
                var L = Object.getPrototypeOf,
                x = L && L(L(N([])));
                x && x !== e && n.call(x, i) && (w = x);
                var b = m.prototype = d.prototype = Object.create(w);
                function E(t) {
                    ["next", "throw", "return"].forEach(function (r) {
                        u(t, r, function (t) {
                            return this._invoke(r, t)
                        })
                    })
                }
                function _(t, r) {
                    var e;
                    this._invoke = function (o, i) {
                        function a() {
                            return new r(function (e, a) {
                                !function e(o, i, a, c) {
                                    var u = f(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var h = u.arg,
                                        l = h.value;
                                        return l && "object" == typeof l && n.call(l, "__await") ? r.resolve(l.__await).then(function (t) {
                                            e("next", t, a, c)
                                        }, function (t) {
                                            e("throw", t, a, c)
                                        }) : r.resolve(l).then(function (t) {
                                            h.value = t,
                                            a(h)
                                        }, function (t) {
                                            return e("throw", t, a, c)
                                        })
                                    }
                                    c(u.arg)
                                }
                                (o, i, e, a)
                            })
                        }
                        return e = e ? e.then(a, a) : a()
                    }
                }
                function j(t, e) {
                    var n = t.iterator[e.method];
                    if (n === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = r, j(t, e), "throw" === e.method))
                                return v;
                            e.method = "throw",
                            e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return v
                    }
                    var o = f(n, t.iterator, e.arg);
                    if ("throw" === o.type)
                        return e.method = "throw", e.arg = o.arg, e.delegate = null, v;
                    var i = o.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
                }
                function O(t) {
                    var r = {
                        tryLoc: t[0]
                    };
                    1 in t && (r.catchLoc = t[1]),
                    2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]),
                    this.tryEntries.push(r)
                }
                function k(t) {
                    var r = t.completion || {};
                    r.type = "normal",
                    delete r.arg,
                    t.completion = r
                }
                function G(t) {
                    this.tryEntries = [{
                            tryLoc: "root"
                        }
                    ],
                    t.forEach(O, this),
                    this.reset(!0)
                }
                function N(t) {
                    if (t) {
                        var e = t[i];
                        if (e)
                            return e.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                            a = function e() {
                                for (; ++o < t.length; )
                                    if (n.call(t, o))
                                        return e.value = t[o], e.done = !1, e;
                                return e.value = r,
                                e.done = !0,
                                e
                            };
                            return a.next = a
                        }
                    }
                    return {
                        next: F
                    }
                }
                function F() {
                    return {
                        value: r,
                        done: !0
                    }
                }
                return g.prototype = b.constructor = m,
                m.constructor = g,
                g.displayName = u(m, c, "GeneratorFunction"),
                t.isGeneratorFunction = function (t) {
                    var r = "function" == typeof t && t.constructor;
                    return !!r && (r === g || "GeneratorFunction" === (r.displayName || r.name))
                },
                t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, c, "GeneratorFunction")),
                    t.prototype = Object.create(b),
                    t
                },
                t.awrap = function (t) {
                    return {
                        __await: t
                    }
                },
                E(_.prototype),
                _.prototype[a] = function () {
                    return this
                },
                t.AsyncIterator = _,
                t.async = function (r, e, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(h(r, e, n, o), i);
                    return t.isGeneratorFunction(e) ? a : a.next().then(function (t) {
                        return t.done ? t.value : a.next()
                    })
                },
                E(b),
                u(b, c, "Generator"),
                b[i] = function () {
                    return this
                },
                b.toString = function () {
                    return "[object Generator]"
                },
                t.keys = function (t) {
                    var r = [];
                    for (var e in t)
                        r.push(e);
                    return r.reverse(),
                    function e() {
                        for (; r.length; ) {
                            var n = r.pop();
                            if (n in t)
                                return e.value = n, e.done = !1, e
                        }
                        return e.done = !0,
                        e
                    }
                },
                t.values = N,
                G.prototype = {
                    constructor: G,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(k), !t)
                            for (var e in this)
                                "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done)
                            throw t;
                        var e = this;
                        function o(n, o) {
                            return c.type = "throw",
                            c.arg = t,
                            e.next = n,
                            o && (e.method = "next", e.arg = r),
                            !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                            c = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n.call(a, "catchLoc"),
                                h = n.call(a, "finallyLoc");
                                if (u && h) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0)
                                } else {
                                    if (!h)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, r) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var o = this.tryEntries[e];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t,
                        a.arg = r,
                        i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function (t, r) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r),
                        v
                    },
                    finish: function (t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.finallyLoc === t)
                                return this.complete(e.completion, e.afterLoc), k(e), v
                        }
                    },
                    catch : function (t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc === t) {
                                var n = e.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(e)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                delegateYield: function (t, e, n) {
                    return this.delegate = {
                        iterator: N(t),
                        resultName: e,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = r),
                    v
                }
            },
            t
        }
        ("object" == typeof module ? module.exports : {});
        try {
            regeneratorRuntime = r
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    }, {}
],
"uL3H": [function (require, module, exports) {
        "use strict";
        function e(e, t, r, n, a, o, u) {
            try {
                var i = e[o](u),
                c = i.value
            } catch (s) {
                return void r(s)
            }
            i.done ? t(c) : Promise.resolve(c).then(n, a)
        }
        function t(t) {
            return function () {
                var r = this,
                n = arguments;
                return new Promise(function (a, o) {
                    var u = t.apply(r, n);
                    function i(t) {
                        e(u, a, o, i, c, "next", t)
                    }
                    function c(t) {
                        e(u, a, o, i, c, "throw", t)
                    }
                    i(void 0)
                })
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        require("chrome-extension-async"),
        require("regenerator-runtime/runtime"),
        chrome.runtime.onMessage.addListener(function () {
            var e = t(regeneratorRuntime.mark(function e(t, r, n) {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    e.t0 = t.name,
                                    e.next = "get-tab-volume" === e.t0 ? 3 : "set-tab-volume" === e.t0 ? 9 : 13;
                                    break;
                                case 3:
                                    return e.t1 = n,
                                    e.next = 6,
                                    a(t.tabId);
                                case 6:
                                    return e.t2 = e.sent,
                                    (0, e.t1)(e.t2),
                                    e.abrupt("break", 14);
                                case 9:
                                    return n(void 0),
                                    e.next = 12,
                                    u(t.tabId, t.value);
                                case 12:
                                    return e.abrupt("break", 14);
                                case 13:
                                    throw Error("Unknown message received: ".concat(t));
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
            return function (t, r, n) {
                return e.apply(this, arguments)
            }
        }
            ()),
        chrome.tabs.onRemoved.addListener(p);
        var r = {};
        function n(e) {
            r[e] = new Promise(function () {
                var e = t(regeneratorRuntime.mark(function e(t) {
                            var r,
                            n,
                            a,
                            o;
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        chrome.tabCapture.capture({
                                            audio: !0,
                                            video: !1
                                        });
                                    case 2:
                                        r = e.sent,
                                        n = new AudioContext,
                                        a = n.createMediaStreamSource(r),
                                        o = n.createGain(),
                                        a.connect(o),
                                        o.connect(n.destination),
                                        t({
                                            audioContext: n,
                                            streamSource: a,
                                            gainNode: o
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }
                    ())
        }
        function a(e) {
            return o.apply(this, arguments)
        }
        function o() {
            return (o = t(regeneratorRuntime.mark(function e(t) {
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t in r)) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3,
                                        r[t];
                                    case 3:
                                        e.t0 = e.sent.gainNode.gain.value,
                                        e.next = 7;
                                        break;
                                    case 6:
                                        e.t0 = 1;
                                    case 7:
                                        return e.abrupt("return", e.t0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }))).apply(this, arguments)
        }
        function u(e, t) {
            return i.apply(this, arguments)
        }
        function i() {
            return (i = t(regeneratorRuntime.mark(function e(t, a) {
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t in r || n(t),
                                        e.next = 3,
                                        r[t];
                                    case 3:
                                        e.sent.gainNode.gain.value = a,
                                        c(t, a);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }))).apply(this, arguments)
        }
        function c(e, t) {
            return s.apply(this, arguments)
        }
        function s() {
            return (s = t(regeneratorRuntime.mark(function e(t, n) {
                            var a;
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        t in r && (a = String(n) + "x", chrome.browserAction.setBadgeText({
                                                text: a,
                                                tabId: t
                                            }), chrome.browserAction.setBadgeBackgroundColor({
                                                color: "rgb(233,108,76)"
                                            }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }))).apply(this, arguments)
        }
        function p(e) {
            return f.apply(this, arguments)
        }
        function f() {
            return (f = t(regeneratorRuntime.mark(function e(t) {
                            var n = arguments;
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n.length > 1 && void 0 !== n[1] ? n[1] : null, !(t in r)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 4,
                                        r[t];
                                    case 4:
                                        return e.next = 6,
                                        e.sent.audioContext.close();
                                    case 6:
                                        delete r[t];
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }))).apply(this, arguments)
        }
    }, {
        "chrome-extension-async": "sSZ0",
        "regenerator-runtime/runtime": "QVnC"
    }
]
}, {}, ["uL3H"], null)
//# sourceMappingURL=/background.js.map
