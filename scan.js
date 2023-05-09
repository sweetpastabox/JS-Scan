! function(e) {
    "use strict";
    var t = sessionStorage,
        n = "FACIL-ITI";
    e.cache = {
        save: function(e, o) {
            t && t.setItem(n + "_" + e, o)
        },
        load: function(e) {
            return t && t.getItem(n + "_" + e)
        }
    }
}(FACIL_ITI),
function(e, t, n) {
    "use strict";
    n.compat = {
        check: function() {
            var o = !0;
            return o = (o = (o = (o = (o = (o = o && "function" == typeof n.compat.jsonParse) && "function" == typeof n.compat.jsonStringify) && "function" == typeof n.compat.addEvent) && "function" == typeof e.postMessage) && "function" == typeof t.querySelector) && "function" == typeof t.querySelectorAll
        },
        selectAll: function(e) {
            return t.querySelectorAll(e)
        },
        select: function(e) {
            return t.querySelector(e)
        },
        jsonParse: function(e) {
            return JSON && JSON.parse ? JSON.parse(e) : JSON && JSON.decode ? JSON.decode(e) : void 0
        },
        jsonStringify: function(e) {
            var t = null,
                n = "";
            return "object" == typeof Prototype && "function" == typeof Array.prototype.toJSON && (t = Array.prototype.toJSON, Array.prototype.toJSON = null), JSON && JSON.stringify ? n = JSON.stringify(e) : JSON && JSON.encode && (n = JSON.encode(e)), "function" == typeof t && (Array.prototype.toJSON = t), n
        },
        addEvent: function(t, n, o) {
            return "function" == typeof e.addEventListener ? (t.addEventListener(n, o, !1), !0) : e.attachEvent ? (t.attachEvent("on" + n, o), !0) : void 0
        },
        setAttributesList: function(e, t) {
            var n;
            for (n in t) e.setAttribute(n, t[n])
        }
    }
}(window, document, FACIL_ITI),
function(e, t) {
    "use strict";
    var n = function() {
        var e, t, n, o = [];
        for (e = 0; e < 256; e++) {
            for (n = e, t = 0; t < 8; t++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
            o[e] = n
        }
        return function(e) {
            var t, n = -1;
            for (t = 0; t < e.length; t++) n = n >>> 8 ^ o[255 & (n ^ e.charCodeAt(t))];
            return (-1 ^ n) >>> 0
        }
    }();

    function o(e) {
        var t, n = [];
        if (e.href && n.push(e.href), "cssRules" in e) try {
            for (t = 0; t < e.cssRules.length; t++) e.cssRules[t] instanceof CSSImportRule && e.cssRules[t].styleSheet && (n = n.concat(o(e.cssRules[t].styleSheet)))
        } catch (e) {}
        return n
    }
    t.handleCssHashList = function(i, r, s) {
        var a, c, l, u, f, d, p, I = r || e,
            h = I.createElement("a"),
            g = [],
            m = function(e) {
                var t, n = e.styleSheets,
                    i = [];
                for (t = 0; t < n.length; t++) i = i.concat(o(n[t]));
                return i.filter((function(e, t) {
                    return i.indexOf(e) === t
                }))
            }(I),
            y = [],
            C = [],
            A = {},
            _ = s || function(e) {
                return e.hash
            };
        for (g.push(t.params.domain), g = g.concat(t.params.aliases), a = 0; a < m.length; a++) h.href = m[a], f = -1 === g.indexOf(h.hostname) ? m[a] : m[a].replace(h.origin, ""), (c = t.cache.load(f)) ? "null" !== c && C.push(c) : -1 === g.indexOf(h.hostname) ? (A.name = h.pathname.replace(/^.*\/|\.[^.]*$/g, ""), A.path = h.hostname + "/" + h.pathname.replace(/^\//, ""), A.hash = A.name + "-" + n(A.path).toString(16) + "-0", -1 === C.indexOf(A.hash) && (C.push(_(A)), t.cache.save(f, A.hash))) : -1 === y.indexOf(m[a]) && y.push(m[a].replace(h.origin, ""));
        if (0 === y.length) i(C);
        else
            for (u = t.delayTrigger(y.length, i, [C]), l = function(e, o) {
                    var i = {};
                    h.href = e, i.path = t.params.domain + "/" + h.pathname.replace(/^\//, ""), i.name = h.pathname.replace(/^.*\/|\.[^.]*$/g, ""), i.hash = i.name + "-" + n(i.path).toString(16) + "-" + n(o).toString(16), i.content = o, C.push(_(i)), t.cache.save(e, i.hash)
                }, p = function(e) {
                    return function(n) {
                        t.cache.save(e, "null")
                    }
                }, d = function(e) {
                    return function(t) {
                        l(e, t)
                    }
                }, a = 0; a < y.length; a++) t.request(y[a], {}, {
                onsuccess: d(y[a]),
                onfailure: p(y[a]),
                oncomplete: u
            })
    }
}(document, FACIL_ITI),
function(e) {
    "use strict";
    e.delayTrigger = function(e, t, n) {
        return function() {
            0 === --e && t.apply(null, n)
        }
    }
}(FACIL_ITI),
function(e, t, n) {
    "use strict";
    n.INCONTENT_MANAGER = {},
        function(o) {
            const i = "FACIL_ITI_INCONTENT",
                r = {
                    origin: {
                        source: "tag",
                        version: "ws"
                    }
                };
            o.inContent = null, o.context = () => ({
                tag: "ws",
                id: "incontent-context",
                currentURL: e.location.href,
                width: e.innerWidth,
                height: e.innerHeight,
                lang: t.documentElement.lang,
                isDesktopView: !1,
                isMobileView: !1,
                applicationIdentifier: void 0 !== n.params ? n.params.userId : null,
                uiVersion: void 0 !== n.params && void 0 !== n.params.uiVersion ? n.params.uiVersion : "default",
                iframeTitle: "FACIL-ITI solution de personnalisation de l'affichage"
            });
            const s = "https://web-service.facil-iti.app",
                a = {
                    css: {
                        height: "100%",
                        width: "100%"
                    },
                    stylesheet: ""
                };
            o.applyLayout = function() {
                try {
                    const e = t.querySelector("#FACIL_ITI_INCONTENT");
                    if (e)
                        for (const [t, n] of Object.entries(a.css)) e.style[t] = n
                } catch (e) {}
            }, o.applyConfiguration = () => {
                try {
                    t.querySelector("#FACIL_ITI_INCONTENT").contentWindow.postMessage(o.context(), "*")
                } catch (e) {}
            }, o.open = function(e) {
                let n;
                n = t.createElement("iframe"), n.title = o.context().iframeTitle, n.src = s + "/ui/router/" + o.context().applicationIdentifier + "/popin/" + JSON.stringify(r), n.id = i, o.inContent = n;
                const a = t.querySelector(e);
                a && (a.appendChild(n), n.onload = o.applyConfiguration, o.applyLayout())
            }
        }(n.INCONTENT_MANAGER)
}(window, document, FACIL_ITI),
function(e, t, n) {
    n.POPIN_MANAGER = {
            proxy: null,
            wsDomain: null
        },
        function(o) {
            "use strict";
            const i = "FACIL_ITI_POPIN",
                r = "https://web-service.facil-iti.app";
            let s = !1;

            function a() {
                return {
                    app_url: r,
                    features: "env_1",
                    ui: {
                        css: {
                            height: o.context().height - 60 + "px",
                            width: "420px",
                            position: "fixed",
                            borderRadius: "20px",
                            top: "30px",
                            border: "2px solid white"
                        },
                        position: "right",
                        sideMargin: "30px",
                        stylesheet: ""
                    }
                }
            }
            o.popin = null, o.context = () => ({
                tag: "ws",
                id: "popin-context",
                currentURL: e.location.href,
                width: e.innerWidth,
                height: e.innerHeight,
                lang: t.documentElement.lang,
                isDesktopView: e.innerWidth > 600,
                isMobileView: e.innerWidth <= 600,
                applicationIdentifier: void 0 !== n.params ? n.params.userId : null,
                uiVersion: void 0 !== n.params && void 0 !== n.params.uiVersion ? n.params.uiVersion : "default",
                iframeTitle: "FACIL-ITI solution de personnalisation de l'affichage"
            });
            const c = {
                    ui: {
                        css: {
                            height: "60vh",
                            width: "100%",
                            borderRadius: "20px 20px 0 0",
                            bottom: "0px",
                            position: "fixed",
                            top: "auto",
                            right: "0",
                            left: "0",
                            border: "none",
                            borderTop: "2px solid white"
                        },
                        position: "left",
                        sideMargin: "0"
                    }
                },
                l = {
                    origin: {
                        source: "tag",
                        version: "ws"
                    }
                };
            let u, f;

            function d() {
                e.scrollTo(f, u)
            }
            let p = !1;
            try {
                e.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        p = !0
                    }
                }))
            } catch (e) {}
            let I = !!p && {
                passive: !1
            };
            o.disableScroll = () => {
                u = e.pageYOffset || t.documentElement.scrollTop, f = e.pageXOffset || t.documentElement.scrollLeft, e.addEventListener("scroll", d, !1), e.addEventListener("DOMMouseScroll", d, !1), e.addEventListener("wheel", d, I), e.addEventListener("mousewheel", d, I), e.addEventListener("touchmove", d, I)
            }, o.enableScroll = () => {
                e.removeEventListener("scroll", d, !1), e.removeEventListener("DOMMouseScroll", d, !1), e.removeEventListener("wheel", d, I), e.removeEventListener("mousewheel", d, I), e.removeEventListener("touchmove", d, I)
            }, o.isPopinOpen = () => null !== t.querySelector("#FACIL_ITI_POPIN"), o.toggle = (e = l) => {
                o.isPopinOpen() ? o.close() : o.open(e)
            }, o.redraw = () => {
                let e = t.querySelector("#FACIL_ITI_POPIN"),
                    n = o.getMaxZIndexInUse();
                e && n > parseInt(e.style.zIndex) && (e.style.zIndex = n)
            }, o.getMaxZIndexInUse = () => [...t.querySelectorAll("body *")].map((e => parseInt(getComputedStyle(e).zIndex))).filter((e => !isNaN(e))).reduce(((e, t) => Math.max(e, t)), 1) + 15, o.applyLayout = function() {
                try {
                    const e = t.querySelector("#FACIL_ITI_POPIN");
                    if (e) {
                        const t = o.context().isDesktopView ? a() : Object.assign({}, a(), c);
                        for (const [n, o] of Object.entries(t.ui.css)) e.style[n] = o;
                        "right" === t.ui.position ? (e.style.right = t.ui.sideMargin, e.style.left = "auto") : (e.style.left = t.ui.sideMargin, e.style.right = "auto")
                    }
                } catch (e) {}
            }, o.applyConfiguration = () => {
                try {
                    t.querySelector("#FACIL_ITI_POPIN").contentWindow.postMessage(o.context(), "*")
                } catch (e) {}
            }, o.open = function(r = l) {
                let s;
                o.popin ? s = o.popin : (s = t.createElement("iframe"), s.title = o.context().iframeTitle, s.src = a().app_url + "/ui/router/" + o.context().applicationIdentifier + "/popin/" + JSON.stringify(r), s.id = i, s.style.zIndex = o.getMaxZIndexInUse() + 1, o.popin = s), t.body.appendChild(s), s.onload = o.applyConfiguration, o.applyLayout();
                var c = e.innerWidth;
                e.onresize = () => {
                    n.POPIN_MANAGER.applyLayout(), c !== e.innerWidth && (c = e.innerWidth, n.POPIN_MANAGER.applyConfiguration())
                }, t.querySelector("#FACIL_ITI_POPIN").addEventListener("mouseenter", o.disableScroll), t.querySelector("#FACIL_ITI_POPIN").addEventListener("mouseleave", o.enableScroll), setTimeout((() => {
                    s.focus && s.focus(), s.contentWindow && s.contentWindow.focus && s.contentWindow.focus()
                }), 300)
            }, o.close = function() {
                o.enableScroll(), t.querySelector("#FACIL_ITI_POPIN").removeEventListener("mouseenter", o.disableScroll), t.querySelector("#FACIL_ITI_POPIN").removeEventListener("mouseleave", o.enableScroll), t.querySelector("#FACIL_ITI_POPIN").remove();
                const n = t.querySelector("[data-faciliti-popin]");
                e.onresize = null, n && setTimeout((() => {
                    n.focus && n.focus()
                }), 100)
            }, o.switchPosition = function() {
                const e = t.querySelector("#FACIL_ITI_POPIN").style;
                e.right === a().ui.sideMargin ? (e.right = "auto", e.left = a().ui.sideMargin) : (e.left = "auto", e.right = a().ui.sideMargin)
            }, o.switchMode = function(e) {
                const n = t.querySelector("#FACIL_ITI_POPIN");
                n && (n.style.borderColor = e ? "#ffffff" : "#121212")
            }, o.resizeWindow = function() {
                const e = t.querySelector("#FACIL_ITI_POPIN").style;
                e.height === c.ui.css.height ? e.height = "100%" : e.height = c.ui.css.height
            }, o.initialize = function() {
                h(), g()
            }, o.openOnSelectorClick = e => {
                const n = t.querySelectorAll(e);
                n && n.forEach((e => {
                    e.addEventListener("click", (e => {
                        e.preventDefault(), o.toggle()
                    }), !1)
                }))
            }, o.clearAllDataInStorage = function(i = !1) {
                try {
                    if (e.localStorage.setItem("FACIL_ITI", ""), e.localStorage.removeItem("FACIL_ITI"), e.sessionStorage.setItem("FACIL-ITI_CSS", ""), e.sessionStorage.setItem("FACIL-ITI_url_blacklist", ""), e.sessionStorage.setItem("FACIL_ITI_CACHE", ""), e.sessionStorage.removeItem("FACIL-ITI_CSS"), e.sessionStorage.removeItem("FACIL-ITI_url_blacklist"), e.sessionStorage.removeItem("FACIL_ITI_CACHE"), o.proxy.postMessage(n.compat.jsonStringify({
                            subject: "delete-all-user-data-from-storage",
                            content: null
                        }), o.wsDomain), !i) {
                        let e;
                        const n = t.querySelector("#FACIL_ITI_POPIN"),
                            o = t.querySelector("#FACIL_ITI_INCONTENT");
                        n && (e = n.contentWindow || n, e.postMessage({
                            popinAction: "delete-all-user-data-from-storage"
                        }, "*")), o && (e = o.contentWindow || o, e.postMessage({
                            popinAction: "delete-all-user-data-from-storage"
                        }, "*"))
                    }
                } catch (e) {}
            };
            let h = () => {
                    t.addEventListener("keydown", (function(e) {
                        e.ctrlKey && e.shiftKey && "KeyF" === e.code && o.toggle()
                    }), !1)
                },
                g = () => {
                    e.addEventListener("message", (e => {
                        if ([r, "https://cdn.facil-iti.app"].includes(e.origin)) switch (e.data.popinAction) {
                            case "switch-position":
                                o.switchPosition();
                                break;
                            case "resize":
                                o.resizeWindow();
                                break;
                            case "close":
                                o.close();
                                break;
                            case "switch-mode":
                                s = e.data.isDarkMode, o.switchMode(s);
                                break;
                            case "delete-all-user-data-from-storage":
                                o.clearAllDataInStorage(!0)
                        }
                    }))
                };
            o.initialize()
        }(n.POPIN_MANAGER)
}(window, document, FACIL_ITI),
function(e, t) {
    "use strict";
    t.request = function(t, n, o) {
        var i, r = [],
            s = function() {
                var t, n;
                if (e.XMLHttpRequest) return new XMLHttpRequest;
                if (void 0 !== e.ActiveXObject)
                    for (t in n = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"])
                        if (n.hasOwnProperty(t)) try {
                            return new ActiveXObject(n[t])
                        } catch (e) {}
                return null
            }();
        if (null !== s) {
            if (o.onfailure && "function" == typeof o.onfailure && (s.onerror = o.onfailure), s.onreadystatechange = function() {
                    4 === s.readyState && (200 === s.status && o.onsuccess && "function" == typeof o.onsuccess ? o.onsuccess(s.responseText) : o.onfailure && "function" == typeof o.onfailure && o.onfailure(s.responseText), o.oncomplete && "function" == typeof o.oncomplete && o.oncomplete(s.status))
                }, n && n.length > 0) {
                for (i in n) n.hasOwnProperty(i) && r.push(i + "=" + encodeURIComponent(n[i]));
                t = t + "?" + r.join("&")
            }
            s.open("GET", t, !0), s.send()
        }
    }
}(window, FACIL_ITI),
function(e, t, n) {
    "use strict";
    var o, i = n.compat.selectAll,
        r = n.compat.select,
        s = n.compat.jsonParse,
        a = n.compat.jsonStringify,
        c = n.compat.setAttributesList,
        l = {},
        u = {
            wsDomain: null,
            wsIntegration: null,
            userId: null,
            userConfig: null,
            language: null,
            domain: null,
            aliases: [],
            display_mode_popin: !0,
            display_mode_incontent: !0
        },
        f = "blue",
        d = "green";

    function p() {
        var e, n, o, s;
        if (!u.wsDomain)
            if (s = t.createElement("a"), n = r("#FACIL_ITI-script")) s.href = n.src, u.wsDomain = s.protocol + "//" + s.hostname;
            else
                for (o = i("script"), e = 0; o.length; e++)
                    if ((n = o[e]) && -1 !== n.src.indexOf("faciliti-tag.min.js")) {
                        s.href = n.src, u.wsDomain = s.protocol + "//" + s.hostname;
                        break
                    } return u.wsDomain
    }

    function I() {
        l.html = t.documentElement, l.head = t.head || r("head"), l.body = t.body
    }

    function h(e) {
        var n, o = r("#FACIL_ITI-style");
        if (null !== o && o.parentElement.removeChild(o), e) {
            (n = t.createElement("style")).setAttribute("id", "FACIL_ITI-style"), l.body.appendChild(n);
            try {
                n.innerHTML = e
            } catch (t) {
                n.styleSheet.cssText = e
            }
        }
    }

    function g(t) {
        try {
            e.localStorage.setItem("FACIL_ITI", t)
        } catch (e) {}
    }

    function m(e) {
        if (e)
            for (var t = 0; t < e.length; t++)
                if (RegExp(e[t], "gi").test(location.pathname)) return !0;
        return !1
    }

    function y(e) {
        var o, i, I, g, y, C;
        try {
            for (o in u.userConfig = s(e), n.reset)
                if (n.reset.hasOwnProperty(o) && "extend" !== o && u.cacheFunc.indexOf(o) > -1) try {
                    n.reset[o]()
                } catch (e) {}
            if (u.userConfig.url_blacklist && (n.cache.save("url_blacklist", a(u.userConfig.url_blacklist)), m(u.userConfig.url_blacklist))) return !1;
            u.userConfig.stylesheets && u.userConfig.stylesheets.length && function(e) {
                var n;
                e && (console.log("FACILâ€™iti REFRESH " + d + " to " + f), e.forEach((function(e) {
                    var o = u.wsIntegration ? u.wsIntegration + e : e;
                    (n = t.createElement("link")).setAttribute("rel", "stylesheet"), n.setAttribute("class", "FACILITI-stylesheet " + f), n.setAttribute("href", o), l.head.appendChild(n)
                })), t.querySelectorAll("link.FACILITI-stylesheet." + d).forEach((function(e) {
                    e.remove()
                })), [f, d] = [d, f])
            }(u.userConfig.stylesheets), u.userConfig.features && (l.html.dataset.faciliti = u.userConfig.features.join(" ")), u.cacheFunc = [], g = u.userConfig.js || [], I = "", u.userConfig.css && u.userConfig.css.forEach((function(e) {
                (0 === e.filters.length || function(e) {
                    var t, n = location.pathname + location.search;
                    for (t = 0; t < e.length; t++)
                        if (new RegExp(e[t]).test(n)) return !0;
                    return !1
                }(e.filters)) && (I += e.content)
            })), I = I.replace(/#FACIL_ITI_DOMAIN#/g, p()), n.cache.save("CSS", I), h(I), g.length && ((y = r("#FACIL_ITI-engine")) && l.head.removeChild(y), i = t.createElement("script"), C = {
                id: "FACIL_ITI-engine",
                crossorigin: "anonymous",
                src: p() + "/" + u.userConfig.engine
            }, u.userConfig.engine_integrity && (C.integrity = u.userConfig.engine_integrity), c(i, C), l.head.appendChild(i)), n.POPIN_MANAGER.redraw()
        } catch (e) {}
    }

    function C(e) {
        u.domain = e.domain, u.aliases = e.aliases
    }

    function A(e) {
        n.params.language = e
    }

    function _(e) {
        n.handleCssHashList((function(e) {
            v({
                subject: "response-css-hashes",
                content: e
            })
        }))
    }

    function v(e) {
        o && e.subject && o.postMessage(a(e), p())
    }

    function S(e) {
        var t, n;
        if (e.origin !== p()) return !1;
        try {
            n = s(e.data)
        } catch (e) {
            return !1
        }
        t = {
            "configure-domain-aliases": C,
            "request-css-hashes": _,
            "configure-language": A,
            "run-engine": y,
            "cookie-migration": g
        }, n.subject in t && t[n.subject](n.content)
    }

    function L() {
        I(), n.cache.load("url_blacklist") && m(s(n.cache.load("url_blacklist"))) ? h(null) : h(n.cache.load("CSS"));
        var i = function() {
            var i, s, a;
            if (I(), n.data)
                for (i = 0; i < n.data.length; i++) u[n.data[i][0]] = n.data[i][1];
            if (n.data = null, !u.userId) return !1;
            n.compat.addEvent(e, "message", S), a = {
                subject: "initialisation",
                content: {
                    id: u.userId,
                    origin: {
                        domain: t.location.hostname,
                        protocol: t.location.protocol,
                        url_call: t.location.origin
                    }
                }
            }, null !== (s = r("#FACIL_ITI-proxy")) && s.parentElement.removeChild(s), (s = t.createElement("iframe")).style.display = "none", c(s, {
                id: "FACIL_ITI-proxy",
                src: p() + "/tag/proxy/?id=" + u.userId + "&d=" + btoa(encodeURIComponent(a.content.origin.domain)),
                title: "Solution dâ€™accessibilitÃ© FACILâ€™iti",
                role: "presentation",
                "aria-hidden": "true",
                width: "10",
                height: "10"
            }), s.onload = function() {
                o = s.contentWindow || s, n.POPIN_MANAGER.proxy = o, v(a)
            }, l.body.appendChild(s), u.display_mode_popin && (n.POPIN_MANAGER.wsDomain = p(), n.POPIN_MANAGER.openOnSelectorClick("[data-faciliti-popin]")), u.display_mode_incontent && n.INCONTENT_MANAGER.open("[data-faciliti-incontent]")
        };
        "complete" === t.readyState ? i() : n.compat.addEvent(e, "load", i)
    }

    function T(e, t) {
        this[e] = this[e] || t
    }
    try {
        n.compat.check() && (n.page = l, n.reload = L, n.params = u, n.saveFilters = function(t) {
            e.localStorage.setItem("FACIL_ITI", t), e.dispatchEvent(new StorageEvent("storage", {
                key: "FACIL_ITI"
            }))
        }, n.customParams = {}, n.reset = {
            extend: T
        }, n.utilities = {
            extend: T
        }, n.modules = {
            extend: T
        }, L())
    } catch (e) {}
}(window, document, FACIL_ITI);
