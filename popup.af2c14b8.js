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
                    Action: ["getTitle", "setIcon", "getPopup"],
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
"vCxL": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.__extends = e,
        exports.__rest = n,
        exports.__decorate = o,
        exports.__param = a,
        exports.__metadata = u,
        exports.__awaiter = i,
        exports.__generator = c,
        exports.__exportStar = f,
        exports.__values = l,
        exports.__read = s,
        exports.__spread = p,
        exports.__await = y,
        exports.__asyncGenerator = _,
        exports.__asyncDelegator = h,
        exports.__asyncValues = b,
        exports.__makeTemplateObject = v,
        exports.__importStar = d,
        exports.__importDefault = x,
        exports.__assign = void 0;
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                 || function (t, e) {
                for (var r in e)
                    e.hasOwnProperty(r)
                         && (t[r] = e[r])
                })(e, r)
            };
            function e(e, r) {
                function n() {
                    this.constructor = e
                }
                t(e, r),
                e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
            var r = function () {
                return exports.__assign = r = Object.assign || function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var o in e = arguments[r])
                            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                },
                r.apply(this, arguments)
            };
            function n(t, e) {
                var r = {};
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
                        e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]])
                }
                return r
            }
            function o(t, e, r, n) {
                var o,
                a = arguments.length,
                u = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    u = Reflect.decorate(t, e, r, n);
                else
                    for (var i = t.length - 1; i >= 0; i--)
                        (o = t[i]) && (u = (a < 3 ? o(u) : a > 3 ? o(e, r, u) : o(e, r)) || u);
                return a > 3 && u && Object.defineProperty(e, r, u),
                u
            }
            function a(t, e) {
                return function (r, n) {
                    e(r, n, t)
                }
            }
            function u(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(t, e)
            }
            function i(t, e, r, n) {
                return new(r || (r = Promise))(function (o, a) {
                    function u(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function c(t) {
                        t.done ? o(t.value) : new r(function (e) {
                            e(t.value)
                        }).then(u, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            }
            function c(t, e) {
                var r,
                n,
                o,
                a,
                u = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw : i(1),
                    return : i(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                    return this
                }),
                a;
                function i(a) {
                    return function (i) {
                        return function (a) {
                            if (r)
                                throw new TypeError("Generator is already executing.");
                            for (; u; )
                                try {
                                    if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done)
                                        return o;
                                    switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++,
                                        n = a[1],
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = u.ops.pop(),
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            u.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && u.label < o[1]) {
                                            u.label = o[1],
                                            o = a;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2],
                                            u.ops.push(a);
                                            break
                                        }
                                        o[2] && u.ops.pop(),
                                        u.trys.pop();
                                        continue
                                    }
                                    a = e.call(t, u)
                                } catch (i) {
                                    a = [6, i],
                                    n = 0
                                } finally {
                                r = o = 0
                            }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }
                        ([a, i])
                    }
                }
            }
            function f(t, e) {
                for (var r in t)
                    e.hasOwnProperty(r) || (e[r] = t[r])
            }
            function l(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                r = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                }
            }
            function s(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r)
                    return t;
                var n,
                o,
                a = r.call(t),
                u = [];
                try {
                    for (; (void 0 === e || e-- > 0) && !(n = a.next()).done; )
                        u.push(n.value)
                } catch (i) {
                    o = {
                        error: i
                    }
                } finally {
                    try {
                        n && !n.done && (r = a.return) && r.call(a)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                return u
            }
            function p() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t = t.concat(s(arguments[e]));
                return t
            }
            function y(t) {
                return this instanceof y ? (this.v = t, this) : new y(t)
            }
            function _(t, e, r) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var n,
                o = r.apply(t, e || []),
                a = [];
                return n = {},
                u("next"),
                u("throw"),
                u("return"),
                n[Symbol.asyncIterator] = function () {
                    return this
                },
                n;
                function u(t) {
                    o[t] && (n[t] = function (e) {
                        return new Promise(function (r, n) {
                            a.push([t, e, r, n]) > 1 || i(t, e)
                        })
                    })
                }
                function i(t, e) {
                    try {
                        (r = o[t](e)).value instanceof y ? Promise.resolve(r.value.v).then(c, f) : l(a[0][2], r)
                    } catch (n) {
                        l(a[0][3], n)
                    }
                    var r
                }
                function c(t) {
                    i("next", t)
                }
                function f(t) {
                    i("throw", t)
                }
                function l(t, e) {
                    t(e),
                    a.shift(),
                    a.length && i(a[0][0], a[0][1])
                }
            }
            function h(t) {
                var e,
                r;
                return e = {},
                n("next"),
                n("throw", function (t) {
                    throw t
                }),
                n("return"),
                e[Symbol.iterator] = function () {
                    return this
                },
                e;
                function n(n, o) {
                    e[n] = t[n] ? function (e) {
                        return (r = !r) ? {
                            value: y(t[n](e)),
                            done: "return" === n
                        }
                         : o ? o(e) : e
                    }
                     : o
                }
            }
            function b(t) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var e,
                r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = "function" == typeof l ? l(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function () {
                    return this
                }, e);
                function n(r) {
                    e[r] = t[r] && function (e) {
                        return new Promise(function (n, o) {
                            (function (t, e, r, n) {
                                Promise.resolve(n).then(function (e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }, e)
                            })(n, o, (e = t[r](e)).done, e.value)
                        })
                    }
                }
            }
            function v(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e,
                t
            }
            function d(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var r in t)
                        Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t,
                e
            }
            function x(t) {
                return t && t.__esModule ? t : {
                default:
                    t
                }
            }
            exports.__assign = r;
        }, {}
    ],
    "uJAj": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = exports.MDCFoundation = void 0;
            var e = function () {
                function e(e) {
                    void 0 === e && (e = {}),
                    this.adapter_ = e
                }
                return Object.defineProperty(e, "cssClasses", {
                    get: function () {
                        return {}
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e, "strings", {
                    get: function () {
                        return {}
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e, "numbers", {
                    get: function () {
                        return {}
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e, "defaultAdapter", {
                    get: function () {
                        return {}
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.init = function () {},
                e.prototype.destroy = function () {},
                e
            }
            ();
            exports.MDCFoundation = e;
            var t = e;
            exports.default = t;
        }, {}
    ],
    "EQDb": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = exports.MDCComponent = void 0;
            var t = o(require("tslib")),
            e = require("./foundation");
            function n() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return n = function () {
                    return t
                },
                t
            }
            function o(t) {
                if (t && t.__esModule)
                    return t;
                var e = n();
                if (e && e.has(t))
                    return e.get(t);
                var o = {};
                if (null != t) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var u = r ? Object.getOwnPropertyDescriptor(t, i) : null;
                            u && (u.get || u.set) ? Object.defineProperty(o, i, u) : o[i] = t[i]
                        }
                }
                return o.default = t,
                e && e.set(t, o),
                o
            }
            var r = function () {
                function n(e, n) {
                    for (var o = [], r = 2; r < arguments.length; r++)
                        o[r - 2] = arguments[r];
                    this.root_ = e,
                    this.initialize.apply(this, t.__spread(o)),
                    this.foundation_ = void 0 === n ? this.getDefaultFoundation() : n,
                    this.foundation_.init(),
                    this.initialSyncWithDOM()
                }
                return n.attachTo = function (t) {
                    return new n(t, new e.MDCFoundation({}))
                },
                n.prototype.initialize = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e]
                },
                n.prototype.getDefaultFoundation = function () {
                    throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
                },
                n.prototype.initialSyncWithDOM = function () {},
                n.prototype.destroy = function () {
                    this.foundation_.destroy()
                },
                n.prototype.listen = function (t, e, n) {
                    this.root_.addEventListener(t, e, n)
                },
                n.prototype.unlisten = function (t, e, n) {
                    this.root_.removeEventListener(t, e, n)
                },
                n.prototype.emit = function (t, e, n) {
                    var o;
                    void 0 === n && (n = !1),
                    "function" == typeof CustomEvent ? o = new CustomEvent(t, {
                        bubbles: n,
                        detail: e
                    }) : (o = document.createEvent("CustomEvent")).initCustomEvent(t, n, !1, e),
                    this.root_.dispatchEvent(o)
                },
                n
            }
            ();
            exports.MDCComponent = r;
            var i = r;
            exports.default = i;
        }, {
            "tslib": "vCxL",
            "./foundation": "uJAj"
        }
    ],
    "Hm44": [function (require, module, exports) {
            "use strict";
            var e;
            function t(t, i) {
                if (void 0 === t && (t = window), void 0 === i && (i = !1), void 0 === e || i) {
                    var r = !1;
                    try {
                        t.document.addEventListener("test", function () {}, {
                            get passive() {
                                return r = !0
                            }
                        })
                    } catch (s) {}
                    e = r
                }
                return !!e && {
                    passive: !0
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.applyPassive = t;
        }, {}
    ],
    "g9TK": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.numbers = exports.strings = exports.cssClasses = void 0;
            var e = {
                ACTIVE: "mdc-slider--active",
                DISABLED: "mdc-slider--disabled",
                DISCRETE: "mdc-slider--discrete",
                FOCUS: "mdc-slider--focus",
                HAS_TRACK_MARKER: "mdc-slider--display-markers",
                IN_TRANSIT: "mdc-slider--in-transit",
                IS_DISCRETE: "mdc-slider--discrete"
            };
            exports.cssClasses = e;
            var r = {
                ARIA_DISABLED: "aria-disabled",
                ARIA_VALUEMAX: "aria-valuemax",
                ARIA_VALUEMIN: "aria-valuemin",
                ARIA_VALUENOW: "aria-valuenow",
                CHANGE_EVENT: "MDCSlider:change",
                INPUT_EVENT: "MDCSlider:input",
                LAST_TRACK_MARKER_SELECTOR: ".mdc-slider__track-marker:last-child",
                PIN_VALUE_MARKER_SELECTOR: ".mdc-slider__pin-value-marker",
                STEP_DATA_ATTR: "data-step",
                THUMB_CONTAINER_SELECTOR: ".mdc-slider__thumb-container",
                TRACK_MARKER_CONTAINER_SELECTOR: ".mdc-slider__track-marker-container",
                TRACK_SELECTOR: ".mdc-slider__track"
            };
            exports.strings = r;
            var s = {
                PAGE_FACTOR: 4
            };
            exports.numbers = s;
        }, {}
    ],
    "EGFR": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.getCorrectPropertyName = i,
            exports.getCorrectEventName = r;
            var t = {
                animation: {
                    prefixed: "-webkit-animation",
                    standard: "animation"
                },
                transform: {
                    prefixed: "-webkit-transform",
                    standard: "transform"
                },
                transition: {
                    prefixed: "-webkit-transition",
                    standard: "transition"
                }
            },
            n = {
                animationend: {
                    cssProperty: "animation",
                    prefixed: "webkitAnimationEnd",
                    standard: "animationend"
                },
                animationiteration: {
                    cssProperty: "animation",
                    prefixed: "webkitAnimationIteration",
                    standard: "animationiteration"
                },
                animationstart: {
                    cssProperty: "animation",
                    prefixed: "webkitAnimationStart",
                    standard: "animationstart"
                },
                transitionend: {
                    cssProperty: "transition",
                    prefixed: "webkitTransitionEnd",
                    standard: "transitionend"
                }
            };
            function e(t) {
                return Boolean(t.document) && "function" == typeof t.document.createElement
            }
            function i(n, i) {
                if (e(n) && i in t) {
                    var r = n.document.createElement("div"),
                    a = t[i],
                    o = a.standard,
                    d = a.prefixed;
                    return o in r.style ? o : d
                }
                return i
            }
            function r(t, i) {
                if (e(t) && i in n) {
                    var r = t.document.createElement("div"),
                    a = n[i],
                    o = a.standard,
                    d = a.prefixed;
                    return a.cssProperty in r.style ? o : d
                }
                return i
            }
        }, {}
    ],
    "DmKx": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.default = exports.MDCSliderFoundation = void 0;
            var t = i(require("tslib")),
            e = require("@material/animation/util"),
            r = require("@material/base/foundation"),
            n = require("./constants");
            function a() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return a = function () {
                    return t
                },
                t
            }
            function i(t) {
                if (t && t.__esModule)
                    return t;
                var e = a();
                if (e && e.has(t))
                    return e.get(t);
                var r = {};
                if (null != t) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var s = n ? Object.getOwnPropertyDescriptor(t, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i]
                        }
                }
                return r.default = t,
                e && e.set(t, r),
                r
            }
            var s = ["mousedown", "pointerdown", "touchstart"],
            o = ["mouseup", "pointerup", "touchend"],
            u = {
                mousedown: "mousemove",
                pointerdown: "pointermove",
                touchstart: "touchmove"
            },
            _ = {
                ARROW_DOWN: "ArrowDown",
                ARROW_LEFT: "ArrowLeft",
                ARROW_RIGHT: "ArrowRight",
                ARROW_UP: "ArrowUp",
                END: "End",
                HOME: "Home",
                PAGE_DOWN: "PageDown",
                PAGE_UP: "PageUp"
            },
            d = function (r) {
                function a(e) {
                    var n = r.call(this, t.__assign({}, a.defaultAdapter, e)) || this;
                    return n.savedTabIndex_ = NaN,
                    n.active_ = !1,
                    n.inTransit_ = !1,
                    n.isDiscrete_ = !1,
                    n.hasTrackMarker_ = !1,
                    n.handlingThumbTargetEvt_ = !1,
                    n.min_ = 0,
                    n.max_ = 100,
                    n.step_ = 0,
                    n.value_ = 0,
                    n.disabled_ = !1,
                    n.preventFocusState_ = !1,
                    n.thumbContainerPointerHandler_ = function () {
                        return n.handlingThumbTargetEvt_ = !0
                    },
                    n.interactionStartHandler_ = function (t) {
                        return n.handleDown_(t)
                    },
                    n.keydownHandler_ = function (t) {
                        return n.handleKeydown_(t)
                    },
                    n.focusHandler_ = function () {
                        return n.handleFocus_()
                    },
                    n.blurHandler_ = function () {
                        return n.handleBlur_()
                    },
                    n.resizeHandler_ = function () {
                        return n.layout()
                    },
                    n
                }
                return t.__extends(a, r),
                Object.defineProperty(a, "cssClasses", {
                    get: function () {
                        return n.cssClasses
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a, "strings", {
                    get: function () {
                        return n.strings
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a, "numbers", {
                    get: function () {
                        return n.numbers
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a, "defaultAdapter", {
                    get: function () {
                        return {
                            hasClass: function () {
                                return !1
                            },
                            addClass: function () {},
                            removeClass: function () {},
                            getAttribute: function () {
                                return null
                            },
                            setAttribute: function () {},
                            removeAttribute: function () {},
                            computeBoundingRect: function () {
                                return {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                }
                            },
                            getTabIndex: function () {
                                return 0
                            },
                            registerInteractionHandler: function () {},
                            deregisterInteractionHandler: function () {},
                            registerThumbContainerInteractionHandler: function () {},
                            deregisterThumbContainerInteractionHandler: function () {},
                            registerBodyInteractionHandler: function () {},
                            deregisterBodyInteractionHandler: function () {},
                            registerResizeHandler: function () {},
                            deregisterResizeHandler: function () {},
                            notifyInput: function () {},
                            notifyChange: function () {},
                            setThumbContainerStyleProperty: function () {},
                            setTrackStyleProperty: function () {},
                            setMarkerValue: function () {},
                            appendTrackMarkers: function () {},
                            removeTrackMarkers: function () {},
                            setLastTrackMarkersStyleProperty: function () {},
                            isRTL: function () {
                                return !1
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a.prototype.init = function () {
                    var t = this;
                    this.isDiscrete_ = this.adapter_.hasClass(n.cssClasses.IS_DISCRETE),
                    this.hasTrackMarker_ = this.adapter_.hasClass(n.cssClasses.HAS_TRACK_MARKER),
                    s.forEach(function (e) {
                        t.adapter_.registerInteractionHandler(e, t.interactionStartHandler_),
                        t.adapter_.registerThumbContainerInteractionHandler(e, t.thumbContainerPointerHandler_)
                    }),
                    this.adapter_.registerInteractionHandler("keydown", this.keydownHandler_),
                    this.adapter_.registerInteractionHandler("focus", this.focusHandler_),
                    this.adapter_.registerInteractionHandler("blur", this.blurHandler_),
                    this.adapter_.registerResizeHandler(this.resizeHandler_),
                    this.layout(),
                    this.isDiscrete_ && 0 === this.getStep() && (this.step_ = 1)
                },
                a.prototype.destroy = function () {
                    var t = this;
                    s.forEach(function (e) {
                        t.adapter_.deregisterInteractionHandler(e, t.interactionStartHandler_),
                        t.adapter_.deregisterThumbContainerInteractionHandler(e, t.thumbContainerPointerHandler_)
                    }),
                    this.adapter_.deregisterInteractionHandler("keydown", this.keydownHandler_),
                    this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_),
                    this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_),
                    this.adapter_.deregisterResizeHandler(this.resizeHandler_)
                },
                a.prototype.setupTrackMarker = function () {
                    if (this.isDiscrete_ && this.hasTrackMarker_ && 0 !== this.getStep()) {
                        var t = this.getMin(),
                        e = this.getMax(),
                        r = this.getStep(),
                        n = (e - t) / r,
                        a = Math.ceil(n) !== n;
                        if (a && (n = Math.ceil(n)), this.adapter_.removeTrackMarkers(), this.adapter_.appendTrackMarkers(n), a) {
                            var i = (e - n * r) / r + 1;
                            this.adapter_.setLastTrackMarkersStyleProperty("flex-grow", String(i))
                        }
                    }
                },
                a.prototype.layout = function () {
                    this.rect_ = this.adapter_.computeBoundingRect(),
                    this.updateUIForCurrentValue_()
                },
                a.prototype.getValue = function () {
                    return this.value_
                },
                a.prototype.setValue = function (t) {
                    this.setValue_(t, !1)
                },
                a.prototype.getMax = function () {
                    return this.max_
                },
                a.prototype.setMax = function (t) {
                    if (t < this.min_)
                        throw new Error("Cannot set max to be less than the slider's minimum value");
                    this.max_ = t,
                    this.setValue_(this.value_, !1, !0),
                    this.adapter_.setAttribute(n.strings.ARIA_VALUEMAX, String(this.max_)),
                    this.setupTrackMarker()
                },
                a.prototype.getMin = function () {
                    return this.min_
                },
                a.prototype.setMin = function (t) {
                    if (t > this.max_)
                        throw new Error("Cannot set min to be greater than the slider's maximum value");
                    this.min_ = t,
                    this.setValue_(this.value_, !1, !0),
                    this.adapter_.setAttribute(n.strings.ARIA_VALUEMIN, String(this.min_)),
                    this.setupTrackMarker()
                },
                a.prototype.getStep = function () {
                    return this.step_
                },
                a.prototype.setStep = function (t) {
                    if (t < 0)
                        throw new Error("Step cannot be set to a negative number");
                    this.isDiscrete_ && ("number" != typeof t || t < 1) && (t = 1),
                    this.step_ = t,
                    this.setValue_(this.value_, !1, !0),
                    this.setupTrackMarker()
                },
                a.prototype.isDisabled = function () {
                    return this.disabled_
                },
                a.prototype.setDisabled = function (t) {
                    this.disabled_ = t,
                    this.toggleClass_(n.cssClasses.DISABLED, this.disabled_),
                    this.disabled_ ? (this.savedTabIndex_ = this.adapter_.getTabIndex(), this.adapter_.setAttribute(n.strings.ARIA_DISABLED, "true"), this.adapter_.removeAttribute("tabindex")) : (this.adapter_.removeAttribute(n.strings.ARIA_DISABLED), isNaN(this.savedTabIndex_) || this.adapter_.setAttribute("tabindex", String(this.savedTabIndex_)))
                },
                a.prototype.handleDown_ = function (t) {
                    var e = this;
                    if (!this.disabled_) {
                        this.preventFocusState_ = !0,
                        this.setInTransit_(!this.handlingThumbTargetEvt_),
                        this.handlingThumbTargetEvt_ = !1,
                        this.setActive_(!0);
                        var r = function (t) {
                            e.handleMove_(t)
                        },
                        n = u[t.type],
                        a = function () {
                            e.handleUp_(),
                            e.adapter_.deregisterBodyInteractionHandler(n, r),
                            o.forEach(function (t) {
                                return e.adapter_.deregisterBodyInteractionHandler(t, a)
                            })
                        };
                        this.adapter_.registerBodyInteractionHandler(n, r),
                        o.forEach(function (t) {
                            return e.adapter_.registerBodyInteractionHandler(t, a)
                        }),
                        this.setValueFromEvt_(t)
                    }
                },
                a.prototype.handleMove_ = function (t) {
                    t.preventDefault(),
                    this.setValueFromEvt_(t)
                },
                a.prototype.handleUp_ = function () {
                    this.setActive_(!1),
                    this.adapter_.notifyChange()
                },
                a.prototype.getPageX_ = function (t) {
                    return t.targetTouches && t.targetTouches.length > 0 ? t.targetTouches[0].pageX : t.pageX
                },
                a.prototype.setValueFromEvt_ = function (t) {
                    var e = this.getPageX_(t),
                    r = this.computeValueFromPageX_(e);
                    this.setValue_(r, !0)
                },
                a.prototype.computeValueFromPageX_ = function (t) {
                    var e = this.max_,
                    r = this.min_,
                    n = (t - this.rect_.left) / this.rect_.width;
                    return this.adapter_.isRTL() && (n = 1 - n),
                    r + n * (e - r)
                },
                a.prototype.handleKeydown_ = function (t) {
                    var e = this.getKeyId_(t),
                    r = this.getValueForKeyId_(e);
                    isNaN(r) || (t.preventDefault(), this.adapter_.addClass(n.cssClasses.FOCUS), this.setValue_(r, !0), this.adapter_.notifyChange())
                },
                a.prototype.getKeyId_ = function (t) {
                    return t.key === _.ARROW_LEFT || 37 === t.keyCode ? _.ARROW_LEFT : t.key === _.ARROW_RIGHT || 39 === t.keyCode ? _.ARROW_RIGHT : t.key === _.ARROW_UP || 38 === t.keyCode ? _.ARROW_UP : t.key === _.ARROW_DOWN || 40 === t.keyCode ? _.ARROW_DOWN : t.key === _.HOME || 36 === t.keyCode ? _.HOME : t.key === _.END || 35 === t.keyCode ? _.END : t.key === _.PAGE_UP || 33 === t.keyCode ? _.PAGE_UP : t.key === _.PAGE_DOWN || 34 === t.keyCode ? _.PAGE_DOWN : ""
                },
                a.prototype.getValueForKeyId_ = function (t) {
                    var e = this.max_,
                    r = this.min_,
                    a = this.step_ || (e - r) / 100;
                    switch (this.adapter_.isRTL() && (t === _.ARROW_LEFT || t === _.ARROW_RIGHT) && (a = -a), t) {
                    case _.ARROW_LEFT:
                    case _.ARROW_DOWN:
                        return this.value_ - a;
                    case _.ARROW_RIGHT:
                    case _.ARROW_UP:
                        return this.value_ + a;
                    case _.HOME:
                        return this.min_;
                    case _.END:
                        return this.max_;
                    case _.PAGE_UP:
                        return this.value_ + a * n.numbers.PAGE_FACTOR;
                    case _.PAGE_DOWN:
                        return this.value_ - a * n.numbers.PAGE_FACTOR;
                    default:
                        return NaN
                    }
                },
                a.prototype.handleFocus_ = function () {
                    this.preventFocusState_ || this.adapter_.addClass(n.cssClasses.FOCUS)
                },
                a.prototype.handleBlur_ = function () {
                    this.preventFocusState_ = !1,
                    this.adapter_.removeClass(n.cssClasses.FOCUS)
                },
                a.prototype.setValue_ = function (t, e, r) {
                    if (void 0 === r && (r = !1), t !== this.value_ || r) {
                        var a = this.min_,
                        i = this.max_,
                        s = t === a || t === i;
                        this.step_ && !s && (t = this.quantize_(t)),
                        t < a ? t = a : t > i && (t = i),
                        this.value_ = t,
                        this.adapter_.setAttribute(n.strings.ARIA_VALUENOW, String(this.value_)),
                        this.updateUIForCurrentValue_(),
                        e && (this.adapter_.notifyInput(), this.isDiscrete_ && this.adapter_.setMarkerValue(t))
                    }
                },
                a.prototype.quantize_ = function (t) {
                    return Math.round(t / this.step_) * this.step_
                },
                a.prototype.updateUIForCurrentValue_ = function () {
                    var t = this,
                    r = this.max_,
                    n = this.min_,
                    a = (this.value_ - n) / (r - n),
                    i = a * this.rect_.width;
                    this.adapter_.isRTL() && (i = this.rect_.width - i);
                    var s = (0, e.getCorrectPropertyName)(window, "transform"),
                    o = (0, e.getCorrectEventName)(window, "transitionend");
                    if (this.inTransit_) {
                        var u = function () {
                            t.setInTransit_(!1),
                            t.adapter_.deregisterThumbContainerInteractionHandler(o, u)
                        };
                        this.adapter_.registerThumbContainerInteractionHandler(o, u)
                    }
                    requestAnimationFrame(function () {
                        t.adapter_.setThumbContainerStyleProperty(s, "translateX(" + i + "px) translateX(-50%)"),
                        t.adapter_.setTrackStyleProperty(s, "scaleX(" + a + ")")
                    })
                },
                a.prototype.setActive_ = function (t) {
                    this.active_ = t,
                    this.toggleClass_(n.cssClasses.ACTIVE, this.active_)
                },
                a.prototype.setInTransit_ = function (t) {
                    this.inTransit_ = t,
                    this.toggleClass_(n.cssClasses.IN_TRANSIT, this.inTransit_)
                },
                a.prototype.toggleClass_ = function (t, e) {
                    e ? this.adapter_.addClass(t) : this.adapter_.removeClass(t)
                },
                a
            }
            (r.MDCFoundation);
            exports.MDCSliderFoundation = d;
            var h = d;
            exports.default = h;
        }, {
            "tslib": "vCxL",
            "@material/animation/util": "EGFR",
            "@material/base/foundation": "uJAj",
            "./constants": "g9TK"
        }
    ],
    "XtGF": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.MDCSlider = void 0;
            var t = s(require("tslib")),
            e = require("@material/base/component"),
            r = require("@material/dom/events"),
            n = require("./constants"),
            i = require("./foundation");
            function o() {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap;
                return o = function () {
                    return t
                },
                t
            }
            function s(t) {
                if (t && t.__esModule)
                    return t;
                var e = o();
                if (e && e.has(t))
                    return e.get(t);
                var r = {};
                if (null != t) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var s = n ? Object.getOwnPropertyDescriptor(t, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = t[i]
                        }
                }
                return r.default = t,
                e && e.set(t, r),
                r
            }
            var a = function (e) {
                function o() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t.__extends(o, e),
                o.attachTo = function (t) {
                    return new o(t)
                },
                Object.defineProperty(o.prototype, "value", {
                    get: function () {
                        return this.foundation_.getValue()
                    },
                    set: function (t) {
                        this.foundation_.setValue(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(o.prototype, "min", {
                    get: function () {
                        return this.foundation_.getMin()
                    },
                    set: function (t) {
                        this.foundation_.setMin(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(o.prototype, "max", {
                    get: function () {
                        return this.foundation_.getMax()
                    },
                    set: function (t) {
                        this.foundation_.setMax(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(o.prototype, "step", {
                    get: function () {
                        return this.foundation_.getStep()
                    },
                    set: function (t) {
                        this.foundation_.setStep(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(o.prototype, "disabled", {
                    get: function () {
                        return this.foundation_.isDisabled()
                    },
                    set: function (t) {
                        this.foundation_.setDisabled(t)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                o.prototype.initialize = function () {
                    this.thumbContainer_ = this.root_.querySelector(n.strings.THUMB_CONTAINER_SELECTOR),
                    this.track_ = this.root_.querySelector(n.strings.TRACK_SELECTOR),
                    this.pinValueMarker_ = this.root_.querySelector(n.strings.PIN_VALUE_MARKER_SELECTOR),
                    this.trackMarkerContainer_ = this.root_.querySelector(n.strings.TRACK_MARKER_CONTAINER_SELECTOR)
                },
                o.prototype.getDefaultFoundation = function () {
                    var t = this,
                    e = {
                        hasClass: function (e) {
                            return t.root_.classList.contains(e)
                        },
                        addClass: function (e) {
                            return t.root_.classList.add(e)
                        },
                        removeClass: function (e) {
                            return t.root_.classList.remove(e)
                        },
                        getAttribute: function (e) {
                            return t.root_.getAttribute(e)
                        },
                        setAttribute: function (e, r) {
                            return t.root_.setAttribute(e, r)
                        },
                        removeAttribute: function (e) {
                            return t.root_.removeAttribute(e)
                        },
                        computeBoundingRect: function () {
                            return t.root_.getBoundingClientRect()
                        },
                        getTabIndex: function () {
                            return t.root_.tabIndex
                        },
                        registerInteractionHandler: function (e, n) {
                            return t.listen(e, n, (0, r.applyPassive)())
                        },
                        deregisterInteractionHandler: function (e, n) {
                            return t.unlisten(e, n, (0, r.applyPassive)())
                        },
                        registerThumbContainerInteractionHandler: function (e, n) {
                            t.thumbContainer_.addEventListener(e, n, (0, r.applyPassive)())
                        },
                        deregisterThumbContainerInteractionHandler: function (e, n) {
                            t.thumbContainer_.removeEventListener(e, n, (0, r.applyPassive)())
                        },
                        registerBodyInteractionHandler: function (t, e) {
                            return document.body.addEventListener(t, e)
                        },
                        deregisterBodyInteractionHandler: function (t, e) {
                            return document.body.removeEventListener(t, e)
                        },
                        registerResizeHandler: function (t) {
                            return window.addEventListener("resize", t)
                        },
                        deregisterResizeHandler: function (t) {
                            return window.removeEventListener("resize", t)
                        },
                        notifyInput: function () {
                            return t.emit(n.strings.INPUT_EVENT, t)
                        },
                        notifyChange: function () {
                            return t.emit(n.strings.CHANGE_EVENT, t)
                        },
                        setThumbContainerStyleProperty: function (e, r) {
                            t.thumbContainer_.style.setProperty(e, r)
                        },
                        setTrackStyleProperty: function (e, r) {
                            return t.track_.style.setProperty(e, r)
                        },
                        setMarkerValue: function (e) {
                            return t.pinValueMarker_.innerText = e.toLocaleString()
                        },
                        appendTrackMarkers: function (e) {
                            for (var r = document.createDocumentFragment(), n = 0; n < e; n++) {
                                var i = document.createElement("div");
                                i.classList.add("mdc-slider__track-marker"),
                                r.appendChild(i)
                            }
                            t.trackMarkerContainer_.appendChild(r)
                        },
                        removeTrackMarkers: function () {
                            for (; t.trackMarkerContainer_.firstChild; )
                                t.trackMarkerContainer_.removeChild(t.trackMarkerContainer_.firstChild)
                        },
                        setLastTrackMarkersStyleProperty: function (e, r) {
                            t.root_.querySelector(n.strings.LAST_TRACK_MARKER_SELECTOR).style.setProperty(e, r)
                        },
                        isRTL: function () {
                            return "rtl" === getComputedStyle(t.root_).direction
                        }
                    };
                    return new i.MDCSliderFoundation(e)
                },
                o.prototype.initialSyncWithDOM = function () {
                    var t = this.parseFloat_(this.root_.getAttribute(n.strings.ARIA_VALUENOW), this.value),
                    e = this.parseFloat_(this.root_.getAttribute(n.strings.ARIA_VALUEMIN), this.min),
                    r = this.parseFloat_(this.root_.getAttribute(n.strings.ARIA_VALUEMAX), this.max);
                    e >= this.max ? (this.max = r, this.min = e) : (this.min = e, this.max = r),
                    this.step = this.parseFloat_(this.root_.getAttribute(n.strings.STEP_DATA_ATTR), this.step),
                    this.value = t,
                    this.disabled = this.root_.hasAttribute(n.strings.ARIA_DISABLED) && "false" !== this.root_.getAttribute(n.strings.ARIA_DISABLED),
                    this.foundation_.setupTrackMarker()
                },
                o.prototype.layout = function () {
                    this.foundation_.layout()
                },
                o.prototype.stepUp = function (t) {
                    void 0 === t && (t = this.step || 1),
                    this.value += t
                },
                o.prototype.stepDown = function (t) {
                    void 0 === t && (t = this.step || 1),
                    this.value -= t
                },
                o.prototype.parseFloat_ = function (t, e) {
                    var r = parseFloat(t);
                    return "number" == typeof r && isFinite(r) ? r : e
                },
                o
            }
            (e.MDCComponent);
            exports.MDCSlider = a;
        }, {
            "tslib": "vCxL",
            "@material/base/component": "EQDb",
            "@material/dom/events": "Hm44",
            "./constants": "g9TK",
            "./foundation": "DmKx"
        }
    ],
    "MWpR": [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var e = require("./component");
            Object.keys(e).forEach(function (t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(exports, t, {
                    enumerable: !0,
                    get: function () {
                        return e[t]
                    }
                })
            });
            var t = require("./constants");
            Object.keys(t).forEach(function (e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                    enumerable: !0,
                    get: function () {
                        return t[e]
                    }
                })
            });
            var r = require("./foundation");
            Object.keys(r).forEach(function (e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                    enumerable: !0,
                    get: function () {
                        return r[e]
                    }
                })
            });
        }, {
            "./component": "XtGF",
            "./constants": "g9TK",
            "./foundation": "DmKx"
        }
    ],
    "GW8s": [function (require, module, exports) {
            "use strict";
            function e(e, a) {
                return n(e) || t(e, a) || r()
            }
            function r() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
            function t(e, r) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var t = [],
                    n = !0,
                    a = !1,
                    u = void 0;
                    try {
                        for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (t.push(c.value), !r || t.length !== r); n = !0);
                    } catch (o) {
                        a = !0,
                        u = o
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a)
                                throw u
                        }
                    }
                    return t
                }
            }
            function n(e) {
                if (Array.isArray(e))
                    return e
            }
            function a(e, r, t, n, a, u, c) {
                try {
                    var i = e[u](c),
                    o = i.value
                } catch (s) {
                    return void t(s)
                }
                i.done ? r(o) : Promise.resolve(o).then(n, a)
            }
            function u(e) {
                return function () {
                    var r = this,
                    t = arguments;
                    return new Promise(function (n, u) {
                        var c = e.apply(r, t);
                        function i(e) {
                            a(c, n, u, i, o, "next", e)
                        }
                        function o(e) {
                            a(c, n, u, i, o, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            require("chrome-extension-async"),
            require("regenerator-runtime/runtime");
            var c = require("@material/slider"),
            i = document.querySelector("#volume-slider"),
            o = document.querySelectorAll(".mdc-radio a"),
            s = document.querySelector("#slider-max span"),
            l = document.querySelector("#disable_control"),
            m = new c.MDCSlider(i);
            u(regeneratorRuntime.mark(function e() {
                    var r,
                    t;
                    return regeneratorRuntime.wrap(function (e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return i.style.opacity = "0",
                                e.next = 3,
                                p();
                            case 3:
                                for (r = e.sent, m.value = 100 * r, f(), 1 != r && h(r), i.style.opacity = "1", t = 0; t < o.length; t++)
                                    ("mute" != o[t].id || 0 != r) && o[t].innerText != r + "x" || o[t].classList.contains("checked") ? o[t].classList.remove("checked") : o[t].classList.add("checked");
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }))(),
            l.addEventListener("click", function () {
                var e = u(regeneratorRuntime.mark(function e(r) {
                            return regeneratorRuntime.wrap(function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        chrome.runtime.reload();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }));
                return function (r) {
                    return e.apply(this, arguments)
                }
            }
                ());
            for (var d = 0; d < o.length; d++)
                o[d].addEventListener("click", function (e) {
                    var r = e.target.innerText;
                    h(r = "volume_off" == r ? "0" : r.slice(0, -1)),
                    m.value = 100 * r,
                    f();
                    for (var t = 0; t < o.length; t++)
                        o[t].classList.remove("checked");
                    "volume_off" == e.target.innerText ? e.target.parentElement.classList.add("checked") : e.target.classList.add("checked")
                });
            function f() {
                m.value >= m.max - 100 ? (m.max = m.max + 100, s.innerText = m.max / 200) : m.value <= .4 * m.max && m.max >= 600 && (m.max = m.max - 100, s.innerText = m.max / 200)
            }
            function p() {
                return v.apply(this, arguments)
            }
            function v() {
                return (v = u(regeneratorRuntime.mark(function e() {
                                var r,
                                t;
                                return regeneratorRuntime.wrap(function (e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                            y();
                                        case 2:
                                            return r = e.sent,
                                            t = {
                                                name: "get-tab-volume",
                                                tabId: r
                                            },
                                            e.abrupt("return", chrome.runtime.sendMessage(t));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                        }
                                }, e)
                            }))).apply(this, arguments)
            }
            function h(e) {
                return x.apply(this, arguments)
            }
            function x() {
                return (x = u(regeneratorRuntime.mark(function e(r) {
                                var t,
                                n,
                                a;
                                return regeneratorRuntime.wrap(function (e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                            y();
                                        case 2:
                                            return t = e.sent,
                                            n = {
                                                name: "set-tab-volume",
                                                tabId: t,
                                                value: r
                                            },
                                            e.next = 6,
                                            chrome.runtime.sendMessage(n);
                                        case 6:
                                            return a = e.sent,
                                            e.abrupt("return", a);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                        }
                                }, e)
                            }))).apply(this, arguments)
            }
            function y() {
                return g.apply(this, arguments)
            }
            function g() {
                return (g = u(regeneratorRuntime.mark(function r() {
                                var t,
                                n,
                                a;
                                return regeneratorRuntime.wrap(function (r) {
                                    for (; ; )
                                        switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2,
                                            chrome.tabs.query({
                                                active: !0,
                                                currentWindow: !0
                                            });
                                        case 2:
                                            return t = r.sent,
                                            n = e(t, 1),
                                            a = n[0],
                                            r.abrupt("return", a.id);
                                        case 6:
                                        case "end":
                                            return r.stop()
                                        }
                                }, r)
                            }))).apply(this, arguments)
            }
            m.listen("MDCSlider:input", function () {
                for (var e = m.value / 100, r = 0; r < o.length; r++)
                    ("mute" != o[r].id || 0 != e) && o[r].innerText != e + "x" || o[r].classList.contains("checked") ? o[r].classList.remove("checked") : o[r].classList.add("checked");
                f(),
                h(e)
            });
        }, {
            "chrome-extension-async": "sSZ0",
            "regenerator-runtime/runtime": "QVnC",
            "@material/slider": "MWpR"
        }
    ]
}, {}, ["GW8s"], null)
//# sourceMappingURL=/popup.af2c14b8.js.map
