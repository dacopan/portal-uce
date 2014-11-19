var debug = true;
//<editor-fold defaultstate="collapsed" desc="modernizer">
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
    function x(a) {
        j.cssText = a
    }
    function y(a, b) {
        return x(prefixes.join(a + ";") + (b || ""))
    }
    function z(a, b) {
        return typeof a === b
    }
    function A(a, b) {
        return!!~("" + a).indexOf(b)
    }
    function B(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!A(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return!1
    }
    function C(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
        }
        return!1
    }
    function D(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + n.join(d + " ") + d).split(" ");
        return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = "Webkit Moz O ms", n = m.split(" "), o = m.toLowerCase().split(" "), p = {}, q = {}, r = {}, s = [], t = s.slice, u, v = {}.hasOwnProperty, w;
    !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
        return v.call(a, b)
    } : w = function(a, b) {
        return b in a && z(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = t.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(t.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(t.call(arguments)))
        };
        return e
    }), p.csstransitions = function() {
        return D("transition")
    };
    for (var E in p)
        w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                w(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, x(""), i = k = null, function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j)
                return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j)
                return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden"in a, j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0, j = !0
            }
        })();
        var r = {elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, supportsUnknownElements: j, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: q, createElement: n, createDocumentFragment: o};
        a.html5 = r, q(b)
    }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
        return B([a])
    }, e.testAllProps = D, e.prefixed = function(a, b, c) {
        return b ? D(a, b, c) : D(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
}(this, this.document), function(a, b, c) {
    function d(a) {
        return"[object Function]" == o.call(a)
    }
    function e(a) {
        return"string" == typeof a
    }
    function f() {
    }
    function g(a) {
        return!a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }
    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return"[object Array]" == o.call(a)
    }, x = [], y = {}, z = {timeout: function(a, b) {
            return b.length && (a.timeout = b[0]), a
        }}, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(), a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
        z[a] = b
    }, B.addFilter = function(a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function() {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="isotope">
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t) {
    function e() {
    }
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }
        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a], h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f)
                                    return f
                            } else
                                r("no such method '" + n + "' for " + e + " instance");
                        else
                            r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window), function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement, o = function() {
    };
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function() {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function() {
    };
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {bind: o, unbind: n};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }
    function o(o) {
        return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
    }
    var n = t.document, r = [];
    e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this), function() {
    function t() {
    }
    function e(t, e) {
        for (var i = t.length; i--; )
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype, n = this, r = n.EventEmitter;
    o.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o)
                o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else
            e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function(t, i) {
        var o, n = this.getListenersAsObject(t), r = "object" == typeof i;
        for (o in n)
            n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {listener: i, once: !1});
        return this
    }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
        return this.getListeners(t), this
    }, o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    }, o.removeListener = function(t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r)
            r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function(t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--; )
                r.call(this, e, i[o]);
        else
            for (o in e)
                e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function(t) {
        var e, i = typeof t, o = this._getEvents();
        if ("string" === i)
            delete o[t];
        else if (t instanceof RegExp)
            for (e in o)
                o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else
            delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--; )
                    i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++)
                if (e = i[n] + t, "string" == typeof o[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t) {
    function e(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function i() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }
    function o(t) {
        function o(t) {
            if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var o = r(t);
                if ("none" === o.display)
                    return i();
                var n = {};
                n.width = t.offsetWidth, n.height = t.offsetHeight;
                for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                    var d = s[f], l = o[d];
                    l = a(t, l);
                    var y = parseFloat(l);
                    n[d] = isNaN(y) ? 0 : y
                }
                var m = n.paddingLeft + n.paddingRight, g = n.paddingTop + n.paddingBottom, v = n.marginLeft + n.marginRight, _ = n.marginTop + n.marginBottom, I = n.borderLeftWidth + n.borderRightWidth, L = n.borderTopWidth + n.borderBottomWidth, z = h && u, S = e(o.width);
                S !== !1 && (n.width = S + (z ? 0 : m + I));
                var b = e(o.height);
                return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
            }
        }
        function a(t, e) {
            if (n || -1 === e.indexOf("%"))
                return e;
            var i = t.style, o = i.left, r = t.runtimeStyle, s = r && r.left;
            return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
        }
        var u, p = t("boxSizing");
        return function() {
            if (p) {
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = r(t);
                u = 200 === e(o.width), i.removeChild(t)
            }
        }(), o
    }
    var n = t.getComputedStyle, r = n ? function(t) {
        return n(t, null)
    } : function(t) {
        return t.currentStyle
    }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function(t, e) {
    function i(t, e) {
        return t[a](e)
    }
    function o(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        o(t);
        for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
            if (i[n] === t)
                return!0;
        return!1
    }
    function r(t, e) {
        return o(t), i(t, e)
    }
    var s, a = function() {
        if (e.matchesSelector)
            return"matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
            var n = t[i], r = n + "MatchesSelector";
            if (e[r])
                return r
        }
    }();
    if (a) {
        var u = document.createElement("div"), p = i(u, "div");
        s = p ? i : r
    } else
        s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return s
    }) : window.matchesSelector = s
}(this, Element.prototype), function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        for (var e in t)
            return!1;
        return e = null, !0
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return"-" + t.toLowerCase()
        })
    }
    function n(t, n, r) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
        }
        var u = r("transition"), p = r("transform"), h = u && p, f = !!r("perspective"), c = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend"}[u], d = ["transform", "transition", "transitionDuration", "transitionProperty"], l = function() {
            for (var t = {}, e = 0, i = d.length; i > e; e++) {
                var o = d[e], n = r(o);
                n && n !== o && (t[o] = n)
            }
            return t
        }();
        e(a.prototype, t.prototype), a.prototype._create = function() {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function() {
            this.size = n(this.element)
        }, a.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var o = l[i] || i;
                e[o] = t[i]
            }
        }, a.prototype.getPosition = function() {
            var t = s(this.element), e = this.layout.options, i = e.isOriginLeft, o = e.isOriginTop, n = parseInt(t[i ? "left" : "right"], 10), r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
        }, a.prototype.layoutPosition = function() {
            var t = this.layout.size, e = this.layout.options, i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
        };
        var y = f ? function(t, e) {
            return"translate3d(" + t + "px, " + e + "px, 0)"
        } : function(t, e) {
            return"translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x, o = this.position.y, n = parseInt(t, 10), r = parseInt(e, 10), s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning)
                return this.layoutPosition(), void 0;
            var a = t - i, u = e - o, p = {}, h = this.layout.options;
            a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({to: p, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
        }, a.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var m = p && o(p) + ",opacity";
        a.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({transitionProperty: m, transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(c, this, !1))
        }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        a.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn, o = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        };
        var v = {transitionProperty: "", transitionDuration: ""};
        return a.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, a.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration))
                return this.removeElem(), void 0;
            var t = this;
            this.on("transitionEnd", function() {
                return t.removeElem(), !0
            }), this.hide()
        }, a.prototype.reveal = function() {
            delete this.isHidden, this.css({display: ""});
            var t = this.layout.options;
            this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
        }, a.prototype.hide = function() {
            this.isHidden = !0, this.css({display: ""});
            var t = this.layout.options;
            this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: {opacity: function() {
                        this.isHidden && this.css({display: "none"})
                    }}})
        }, a.prototype.destroy = function() {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, a
    }
    var r = t.getComputedStyle, s = r ? function(t) {
        return r(t, null)
    } : function(t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return"[object Array]" === f.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = d(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    function s(i, s, f, d, l, y) {
        function m(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t))
                return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
            var o = ++g;
            this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var g = 0, v = {};
        return m.namespace = "outlayer", m.Item = y, m.defaults = {containerStyle: {position: "relative"}, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}}, e(m.prototype, f.prototype), m.prototype.option = function(t) {
            e(this.options, t)
        }, m.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, m.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, m.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n], a = new i(s, this);
                o.push(a)
            }
            return o
        }, m.prototype._filterFindItemElements = function(t) {
            t = o(t);
            for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (c(s))
                    if (e) {
                        l(s, e) && i.push(s);
                        for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)
                            i.push(a[u])
                    } else
                        i.push(s)
            }
            return i
        }, m.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)
                t.push(this.items[e].element);
            return t
        }, m.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
            this.getSize()
        }, m.prototype.getSize = function() {
            this.size = d(this.element)
        }, m.prototype._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
        }, m.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, m.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, m.prototype._layoutItems = function(t, e) {
            function i() {
                o.emitEvent("layoutComplete", [o, t])
            }
            var o = this;
            if (!t || !t.length)
                return i(), void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r], u = this._getItemLayoutPosition(a);
                u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
            }
            this._processLayoutQueue(n)
        }, m.prototype._getItemLayoutPosition = function() {
            return{x: 0, y: 0}
        }, m.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, m.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, m.prototype._postLayout = function() {
            this.resizeContainer()
        }, m.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, m.prototype._itemsOn = function(t, e, i) {
            function o() {
                return n++, n === r && i.call(s), !0
            }
            for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                p.on(e, o)
            }
        }, m.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, m.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, m.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, m.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n(o, this.stamps), this.unignore(o)
                }
        }, m.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
        }, m.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, m.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)}
        }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(), i = this._boundingRect, o = d(t), n = {left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom};
            return n
        }, m.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, m.prototype.bindResize = function() {
            this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
        }, m.prototype.unbindResize = function() {
            this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
        }, m.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, m.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.prototype.needsResizeLayout = function() {
            var t = d(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, m.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, m.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, m.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, m.prototype.reveal = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.reveal()
                }
        }, m.prototype.hide = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.hide()
                }
        }, m.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t)
                    return o
            }
        }, m.prototype.getItems = function(t) {
            if (t && t.length) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i], r = this.getItem(n);
                    r && e.push(r)
                }
                return e
            }
        }, m.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function() {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    s.remove(), n(s, this.items)
                }
            }
        }, m.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
        }, m.data = function(t) {
            var e = t && t.outlayerGUID;
            return e && v[e]
        }, m.create = function(t, i) {
            function o() {
                m.apply(this, arguments)
            }
            return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
                y.apply(this, arguments)
            }, o.Item.prototype = new y, s(function() {
                for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                    var f, c = i[s], d = c.getAttribute(n);
                    try {
                        f = d && JSON.parse(d)
                    } catch (l) {
                        u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                        continue
                    }
                    var y = new o(c, f);
                    p && p.data(c, t, y)
                }
            }), p && p.bridget && p.bridget(t, o), o
        }, m.Item = y, m
    }
    var a = t.document, u = t.console, p = t.jQuery, h = function() {
    }, f = Object.prototype.toString, c = "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    } : function(t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, d = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    } : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function(t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        return e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData, e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function(t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element), i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e, o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function(t) {
    function e(t, e) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--; )
                this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, o.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth, o = e && 1 > e ? "round" : "ceil", n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {x: this.columnWidth * a, y: s}, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)
                this.colYs[a + f] = p;
            return u
        }, o.prototype._getColGroup = function(t) {
            if (2 > t)
                return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function(t) {
            var i = e(t), o = this._getElementOffset(t), n = this.options.isOriginLeft ? o.left : o.right, r = n + i.outerWidth, s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)
                this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {height: this.maxY};
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                t++;
            return(this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }
    var i = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    } : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e)
                return i
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t, i) {
        var o = t.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, o
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function(t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var e = {x: this.x, y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
        }, e.prototype._getContainerSize = function() {
            return{height: this.maxY}
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function(t) {
    function e(t) {
        var e = t.create("vertical", {horizontalAlignment: 0});
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
            return this.y += t.size.outerHeight, {x: e, y: i}
        }, e.prototype._getContainerSize = function() {
            return{height: this.y}
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return"[object Array]" === h.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t, i, r, u, h) {
        function f(t, e) {
            return function(i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n], a = i.sortData[s], u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e, h = p ? 1 : -1;
                        return(a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var c = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
        c.Item = u, c.LayoutMode = h, c.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in h.modes)
                this._initLayoutMode(e)
        }, c.prototype.reloadItems = function() {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, c.prototype._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, c.prototype._initLayoutMode = function(t) {
            var i = h.modes[t], o = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
        }, c.prototype.layout = function() {
            return!this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, c.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, c.prototype.arrange = function(t) {
            this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, c.prototype._filter = function(t) {
            function e() {
                f.reveal(n), f.hide(r)
            }
            var i = this.options.filter;
            i = i || "*";
            for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                if (!p.isIgnored) {
                    var h = s(p);
                    h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                }
            }
            var f = this;
            return this._isInstant ? this._noTransition(e) : e(), o
        }, c.prototype._getFilterTest = function(t) {
            return s && this.options.isJQueryFiltering ? function(e) {
                return s(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return r(e.element, t)
            }
        }, c.prototype.updateSortData = function(t) {
            this._getSorters(), t = o(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items, this._updateItemsSortData(e)
        }, c.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        }, c.prototype._updateItemsSortData = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                o.updateSortData()
            }
        };
        var d = function() {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = a(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), r = n && n[1], s = e(r, o), u = c.sortDataParsers[i[1]];
                return t = u ? function(t) {
                    return t && u(s(t))
                } : function(t) {
                    return t && s(t)
                }
            }
            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }
            return t
        }();
        c.sortDataParsers = {parseInt: function(t) {
                return parseInt(t, 10)
            }, parseFloat: function(t) {
                return parseFloat(t)
            }}, c.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory), i = f(e, this.options.sortAscending);
                this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, c.prototype._mode = function() {
            var t = this.options.layoutMode, e = this.modes[t];
            if (!e)
                throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, c.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, c.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, c.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, c.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, c.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, c.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, c.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                var o = this._filterRevealAdded(e);
                this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
            }
        }, c.prototype._filterRevealAdded = function(t) {
            var e = this._noTransition(function() {
                return this._filter(t)
            });
            return this.layoutItems(e, !0), this.reveal(e), t
        }, c.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, o, n = e.length;
                for (i = 0; n > i; i++)
                    o = e[i], this.element.appendChild(o.element);
                var r = this._filter(e);
                for (this._noTransition(function() {
                    this.hide(r)
                }), i = 0; n > i; i++)
                    e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++)
                    delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var l = c.prototype.remove;
        return c.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (l.call(this, t), e && e.length)
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    n(s, this.filteredItems)
                }
        }, c.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, c
    }
    var s = t.jQuery, a = String.prototype.trim ? function(t) {
        return t.trim()
    } : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, u = document.documentElement, p = u.textContent ? function(t) {
        return t.textContent
    } : function(t) {
        return t.innerText
    }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    } : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++)
            if (t[i] === e)
                return i;
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);
//</editor-fold>//

//<editor-fold defaultstate="collapsed" desc="jquery widget">
/*! jQuery UI - v1.10.3 - 2013-05-28
 * http://jqueryui.com
 * Includes: jquery.ui.widget.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e, t) {
    var i = 0, s = Array.prototype.slice, n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++)
            try {
                e(i).triggerHandler("remove")
            } catch (a) {
            }
        n(t)
    }, e.widget = function(i, s, n) {
        var a, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return!!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {version: n.version, _proto: e.extend({}, n), _childConstructors: []}), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
            return e.isFunction(n) ? (l[i] = function() {
                var e = function() {
                    return s.prototype[i].apply(this, arguments)
                }, t = function(e) {
                    return s.prototype[i].apply(this, e)
                };
                return function() {
                    var i, s = this._super, a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, {widgetEventPrefix: r ? h.widgetEventPrefix : i}, l, {constructor: o, namespace: u, widgetName: i, widgetFullName: a}), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function(i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o])
                a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function() {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function(e) {
                    e.target === s && this.destroy()
                }}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        }, _destroy: e.noop, widget: function() {
            return this.element
        }, option: function(i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++)
                        a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    if (i = n.pop(), s === t)
                        return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t)
                        return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o), this
        }, _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        }, _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        }, enable: function() {
            return this._setOption("disabled", !1)
        }, disable: function() {
            return this._setOption("disabled", !0)
        }, _on: function(i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        }, _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        }, _delay: function(e, t) {
            function i() {
                return("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        }, _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }})
        }, _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }})
        }, _trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a)
                    n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }}, e.each({show: "fadeIn", hide: "fadeOut"}, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="jquery mousewheel">

/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i; ) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i; ) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event,
                args = [].slice.call(arguments, 1),
                delta = 0,
                deltaX = 0,
                deltaY = 0,
                absDelta = 0,
                absDeltaXY = 0,
                fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta;
        }
        if (orgEvent.detail) {
            delta = orgEvent.detail * -1;
        }

        // New school wheel delta (wheel event)
        if (orgEvent.deltaY) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if (orgEvent.deltaX) {
            deltaX = orgEvent.deltaX;
            delta = deltaX * -1;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
        }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
            lowestDeltaXY = absDeltaXY;
        }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);
        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="MM menu js">

!function(e) {
    function n(n, s, t) {
        if (t)
            return"object" != typeof n && (n = {}), n;
        n = e.extend(!0, {}, e[a].defaults, n);
        for (var i = ["position", "zposition", "modal", "moveBackground"], o = 0, l = i.length; l > o; o++)
            "undefined" != typeof n[i[o]] && (e[a].deprecated('The option "' + i[o] + '"', "offCanvas." + i[o]), n.offCanvas = n.offCanvas || {}, n.offCanvas[i[o]] = n[i[o]]);
        return n
    }
    function s(n) {
        n = e.extend(!0, {}, e[a].configuration, n);
        for (var s = ["panel", "list", "selected", "label", "spacer"], t = 0, i = s.length; i > t; t++)
            "undefined" != typeof n[s[t] + "Class"] && (e[a].deprecated('The configuration option "' + s[t] + 'Class"', "classNames." + s[t]), n.classNames[s[t]] = n[s[t] + "Class"]);
        if ("undefined" != typeof n.counterClass && (e[a].deprecated('The configuration option "counterClass"', "classNames.counters.counter"), n.classNames.counters = n.classNames.counters || {}, n.classNames.counters.counter = n.counterClass), "undefined" != typeof n.collapsedClass && (e[a].deprecated('The configuration option "collapsedClass"', "classNames.labels.collapsed"), n.classNames.labels = n.classNames.labels || {}, n.classNames.labels.collapsed = n.collapsedClass), "undefined" != typeof n.header)
            for (var s = ["panelHeader", "panelNext", "panelPrev"], t = 0, i = s.length; i > t; t++)
                "undefined" != typeof n.header[s[t] + "Class"] && (e[a].deprecated('The configuration option "header.' + s[t] + 'Class"', "classNames.header." + s[t]), n.classNames.header = n.classNames.header || {}, n.classNames.header[s[t]] = n.header[s[t] + "Class"]);
        for (var s = ["pageNodetype", "pageSelector", "menuWrapperSelector", "menuInjectMethod"], t = 0, i = s.length; i > t; t++)
            "undefined" != typeof n[s[t]] && (e[a].deprecated('The configuration option "' + s[t] + '"', "offCanvas." + s[t]), n.offCanvas = n.offCanvas || {}, n.offCanvas[s[t]] = n[s[t]]);
        return n
    }
    function t() {
        r = !0, c.$wndw = e(window), c.$html = e("html"), c.$body = e("body"), e.each([o, l, d], function(e, n) {
            n.add = function(e) {
                e = e.split(" ");
                for (var s in e)
                    n[e[s]] = n.mm(e[s])
            }
        }), o.mm = function(e) {
            return"mm-" + e
        }, o.add("wrapper menu inline panel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"), o.umm = function(e) {
            return"mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, l.mm = function(e) {
            return"mm-" + e
        }, l.add("parent"), d.mm = function(e) {
            return e + ".mm"
        }, d.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"), e[a]._c = o, e[a]._d = l, e[a]._e = d, e[a].glbl = c
    }
    var a = "mmenu", i = "4.4.2";
    if (!e[a]) {
        var o = {}, l = {}, d = {}, r = !1, c = {$wndw: null, $html: null, $body: null};
        e[a] = function(e, s, t) {
            return this.$menu = e, this.opts = s, this.conf = t, this.vars = {}, this.opts = n(this.opts, this.conf, this.$menu), this._initMenu(), this._init(this.$menu.children(this.conf.panelNodetype)), this
        }, e[a].version = i, e[a].addons = [], e[a].uniqueId = 0, e[a].defaults = {classes: "", slidingSubmenus: !0, onClick: {setSelected: !0}}, e[a].configuration = {panelNodetype: "ul, ol, div", transitionDuration: 400, openingInterval: 25, classNames: {panel: "Panel", selected: "Selected", label: "Label", spacer: "Spacer"}}, e[a].prototype = {_init: function(n) {
                n = this._initPanels(n), n = this._initLinks(n), n = this._bindCustomEvents(n);
                for (var s = 0; s < e[a].addons.length; s++)
                    "function" == typeof this["_init_" + e[a].addons[s]] && this["_init_" + e[a].addons[s]](n);
                this._update()
            }, _initMenu: function() {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("*")).filter("[id]").each(function() {
                    e(this).attr("id", o.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function() {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$menu.parent().addClass(o.wrapper);
                var n = [o.menu];
                n.push(o.mm(this.opts.slidingSubmenus ? "horizontal" : "vertical")), this.opts.classes && n.push(this.opts.classes), this.$menu.addClass(n.join(" "))
            }, _initPanels: function(n) {
                var s = this;
                this.__findAddBack(n, "ul, ol").not("." + o.nolist).addClass(o.list);
                var t = this.__findAddBack(n, "." + o.list).find("> li");
                this.__refactorClass(t, this.conf.classNames.selected, "selected"), this.__refactorClass(t, this.conf.classNames.label, "label"), this.__refactorClass(t, this.conf.classNames.spacer, "spacer"), t.off(d.setSelected).on(d.setSelected, function(n, s) {
                    n.stopPropagation(), t.removeClass(o.selected), "boolean" != typeof s && (s = !0), s && e(this).addClass(o.selected)
                }), this.__refactorClass(this.__findAddBack(n, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel"), n.add(this.__findAddBack(n, "." + o.list).children().children().filter(this.conf.panelNodetype)).addClass(o.panel);
                var a = this.__findAddBack(n, "." + o.panel), i = e("." + o.panel, this.$menu);
                a.each(function() {
                    var n = e(this), t = n.attr("id") || s.__getUniqueId();
                    n.attr("id", t)
                }), a.each(function() {
                    var n = e(this), t = n.is("ul, ol") ? n : n.find("ul ,ol").first(), a = n.parent(), i = a.find("> a, > span"), d = a.closest("." + o.panel);
                    if (a.parent().is("." + o.list)) {
                        n.data(l.parent, a);
                        var r = e('<a class="' + o.subopen + '" href="#' + n.attr("id") + '" />').insertBefore(i);
                        i.is("a") || r.addClass(o.fullsubopen), s.opts.slidingSubmenus && t.prepend('<li class="' + o.subtitle + '"><a class="' + o.subclose + '" href="#' + d.attr("id") + '">' + i.text() + "</a></li>")
                    }
                });
                var r = this.opts.slidingSubmenus ? d.open : d.toggle;
                if (i.each(function() {
                    var n = e(this), s = n.attr("id");
                    e('a[href="#' + s + '"]', i).off(d.click).on(d.click, function(e) {
                        e.preventDefault(), n.trigger(r)
                    })
                }), this.opts.slidingSubmenus) {
                    var c = this.__findAddBack(n, "." + o.list).find("> li." + o.selected);
                    c.parents("li").removeClass(o.selected).end().add(c.parents("li")).each(function() {
                        var n = e(this), s = n.find("> ." + o.panel);
                        s.length && (n.parents("." + o.panel).addClass(o.subopened), s.addClass(o.opened))
                    }).closest("." + o.panel).addClass(o.opened).parents("." + o.panel).addClass(o.subopened)
                } else {
                    var c = e("li." + o.selected, i);
                    c.parents("li").removeClass(o.selected).end().add(c.parents("li")).addClass(o.opened)
                }
                var u = i.filter("." + o.opened);
                return u.length || (u = a.first()), u.addClass(o.opened).last().addClass(o.current), this.opts.slidingSubmenus && a.not(u.last()).addClass(o.hidden).end().appendTo(this.$menu), a
            }, _initLinks: function(n) {
                var s = this;
                return this.__findAddBack(n, "." + o.list).find("> li > a").not("." + o.subopen).not("." + o.subclose).not('[rel="external"]').not('[target="_blank"]').off(d.click).on(d.click, function(n) {
                    var t = e(this), a = t.attr("href") || "";
                    s.__valueOrFn(s.opts.onClick.setSelected, t) && t.parent().trigger(d.setSelected);
                    var i = s.__valueOrFn(s.opts.onClick.preventDefault, t, "#" == a.slice(0, 1));
                    i && n.preventDefault(), s.__valueOrFn(s.opts.onClick.blockUI, t, !i) && c.$html.addClass(o.blocking), s.__valueOrFn(s.opts.onClick.close, t, i) && s.$menu.triggerHandler(d.close)
                }), n
            }, _bindCustomEvents: function(n) {
                var s = this;
                return n.off(d.toggle + " " + d.open + " " + d.close).on(d.toggle + " " + d.open + " " + d.close, function(e) {
                    e.stopPropagation()
                }), this.opts.slidingSubmenus ? n.on(d.open, function() {
                    return s._openSubmenuHorizontal(e(this))
                }) : n.on(d.toggle, function() {
                    var n = e(this);
                    return n.triggerHandler(n.parent().hasClass(o.opened) ? d.close : d.open)
                }).on(d.open, function() {
                    return e(this).parent().addClass(o.opened), "open"
                }).on(d.close, function() {
                    return e(this).parent().removeClass(o.opened), "close"
                }), n
            }, _openSubmenuHorizontal: function(n) {
                if (n.hasClass(o.current))
                    return!1;
                var s = e("." + o.panel, this.$menu), t = s.filter("." + o.current);
                return s.removeClass(o.highest).removeClass(o.current).not(n).not(t).addClass(o.hidden), n.hasClass(o.opened) ? t.addClass(o.highest).removeClass(o.opened).removeClass(o.subopened) : (n.addClass(o.highest), t.addClass(o.subopened)), n.removeClass(o.hidden).addClass(o.current), setTimeout(function() {
                    n.removeClass(o.subopened).addClass(o.opened)
                }, this.conf.openingInterval), "open"
            }, _update: function(e) {
                if (this.updates || (this.updates = []), "function" == typeof e)
                    this.updates.push(e);
                else
                    for (var n = 0, s = this.updates.length; s > n; n++)
                        this.updates[n].call(this, e)
            }, __valueOrFn: function(e, n, s) {
                return"function" == typeof e ? e.call(n[0]) : "undefined" == typeof e && "undefined" != typeof s ? s : e
            }, __refactorClass: function(e, n, s) {
                e.filter("." + n).removeClass(n).addClass(o[s])
            }, __findAddBack: function(e, n) {
                return e.find(n).add(e.filter(n))
            }, __transitionend: function(e, n, s) {
                var t = !1, a = function() {
                    t || n.call(e[0]), t = !0
                };
                e.one(d.transitionend, a), e.one(d.webkitTransitionEnd, a), setTimeout(a, 1.1 * s)
            }, __getUniqueId: function() {
                return o.mm(e[a].uniqueId++)
            }}, e.fn[a] = function(i, o) {
            return r || t(), i = n(i, o), o = s(o), this.each(function() {
                var n = e(this);
                n.data(a) || n.data(a, new e[a](n, i, o))
            })
        }, function() {
            var n = window.document, s = window.navigator.userAgent, t = "ontouchstart"in n, i = "WebkitOverflowScrolling"in n.documentElement.style, o = function() {
                return s.indexOf("Android") >= 0 ? 2.4 > parseFloat(s.slice(s.indexOf("Android") + 8)) : !1
            }();
            e[a].support = {touch: t, oldAndroidBrowser: o, overflowscrolling: function() {
                    return t ? i ? !0 : o ? !1 : !0 : !0
                }()}
        }(), e[a].debug = function() {
        }, e[a].deprecated = function(e, n) {
            "undefined" != typeof console && "undefined" != typeof console.warn && console.warn("MMENU: " + e + " is deprecated, use " + n + " instead.")
        }
    }
}(jQuery);
!function(e) {
    function o(o) {
        return("top" == o.position || "bottom" == o.position) && ("back" == o.zposition || "next" == o.zposition) && (e[s].deprecated('Using position "' + o.position + '" in combination with zposition "' + o.zposition + '"', 'zposition "front"'), o.zposition = "front"), o
    }
    function t(e) {
        return"string" != typeof e.pageSelector && (e.pageSelector = "> " + e.pageNodetype), e
    }
    function n() {
        c = !0, p = e[s]._c, a = e[s]._d, r = e[s]._e, p.add("offcanvas modal background opening blocker page"), a.add("style"), r.add("opening opened closing closed setPage"), l = e[s].glbl, l.$allMenus = (l.$allMenus || e()).add(this.$menu), l.$wndw.on(r.keydown, function(e) {
            return l.$html.hasClass(p.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var o = 0;
        l.$wndw.on(r.resize, function(e, t) {
            if (t || l.$html.hasClass(p.opened)) {
                var n = l.$wndw.height();
                (t || n != o) && (o = n, l.$page.css("minHeight", n))
            }
        })
    }
    var s = "mmenu", i = "offCanvas";
    e[s].prototype["_init_" + i] = function() {
        if (this.opts[i] && !this.vars[i + "_added"]) {
            this.vars[i + "_added"] = !0, c || n(), this.opts[i] = o(this.opts[i]), this.conf[i] = t(this.conf[i]);
            var e = this.opts[i], s = this.conf[i], a = [p.offcanvas];
            "boolean" != typeof this.vars.opened && (this.vars.opened = !1), "left" != e.position && a.push(p.mm(e.position)), "back" != e.zposition && a.push(p.mm(e.zposition)), this.$menu.addClass(a.join(" ")).parent().removeClass(p.wrapper), this[i + "_initPage"](l.$page), this[i + "_initBlocker"](), this[i + "_initOpenClose"](), this[i + "_bindCustomEvents"](), this.$menu[s.menuInjectMethod + "To"](s.menuWrapperSelector)
        }
    }, e[s].addons.push(i), e[s].defaults[i] = {position: "left", zposition: "back", modal: !1, moveBackground: !0}, e[s].configuration[i] = {pageNodetype: "div", pageSelector: null, menuWrapperSelector: "body", menuInjectMethod: "prepend"}, e[s].prototype.open = function() {
        if (this.vars.opened)
            return!1;
        var e = this;
        return this._openSetup(), setTimeout(function() {
            e._openFinish()
        }, this.conf.openingInterval), "open"
    }, e[s].prototype._openSetup = function() {
        l.$allMenus.not(this.$menu).trigger(r.close), l.$page.data(a.style, l.$page.attr("style") || ""), l.$wndw.trigger(r.resize, [!0]);
        var e = [p.opened];
        this.opts[i].modal && e.push(p.modal), this.opts[i].moveBackground && e.push(p.background), "left" != this.opts[i].position && e.push(p.mm(this.opts[i].position)), "back" != this.opts[i].zposition && e.push(p.mm(this.opts[i].zposition)), this.opts.classes && e.push(this.opts.classes), l.$html.addClass(e.join(" ")), this.vars.opened = !0, this.$menu.addClass(p.current + " " + p.opened)
    }, e[s].prototype._openFinish = function() {
        var e = this;
        this.__transitionend(l.$page, function() {
            e.$menu.trigger(r.opened)
        }, this.conf.transitionDuration), l.$html.addClass(p.opening), this.$menu.trigger(r.opening)
    }, e[s].prototype.close = function() {
        if (!this.vars.opened)
            return!1;
        var e = this;
        return this.__transitionend(l.$page, function() {
            e.$menu.removeClass(p.current).removeClass(p.opened), l.$html.removeClass(p.opened).removeClass(p.modal).removeClass(p.background).removeClass(p.mm(e.opts[i].position)).removeClass(p.mm(e.opts[i].zposition)), e.opts.classes && l.$html.removeClass(e.opts.classes), l.$page.attr("style", l.$page.data(a.style)), e.vars.opened = !1, e.$menu.trigger(r.closed)
        }, this.conf.transitionDuration), l.$html.removeClass(p.opening), this.$menu.trigger(r.closing), "close"
    }, e[s].prototype[i + "_initBlocker"] = function() {
        var o = this;
        l.$blck || (l.$blck = e('<div id="' + p.blocker + '" />').appendTo(l.$body)), l.$blck.off(r.touchstart).on(r.touchstart, function(e) {
            e.preventDefault(), e.stopPropagation(), l.$blck.trigger(r.mousedown)
        }).on(r.mousedown, function(e) {
            e.preventDefault(), l.$html.hasClass(p.modal) || o.close()
        })
    }, e[s].prototype[i + "_initPage"] = function(o) {
        o || (o = e(this.conf[i].pageSelector, l.$body), o.length > 1 && (e[s].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <" + this.conf[i].pageNodetype + ">."), o = o.wrapAll("<" + this.conf[i].pageNodetype + " />").parent())), o.addClass(p.page), l.$page = o
    }, e[s].prototype[i + "_initOpenClose"] = function() {
        var o = this, t = this.$menu.attr("id");
        t && t.length && (this.conf.clone && (t = p.umm(t)), e('a[href="#' + t + '"]').off(r.click).on(r.click, function(e) {
            e.preventDefault(), o.open()
        }));
        var t = l.$page.attr("id");
        t && t.length && e('a[href="#' + t + '"]').on(r.click, function(e) {
            e.preventDefault(), o.close()
        })
    }, e[s].prototype[i + "_bindCustomEvents"] = function() {
        var e = this, o = r.open + " " + r.opening + " " + r.opened + " " + r.close + " " + r.closing + " " + r.closed + " " + r.setPage;
        this.$menu.off(o).on(o, function(e) {
            e.stopPropagation()
        }), this.$menu.on(r.open, function() {
            e.open()
        }).on(r.close, function() {
            e.close()
        }).on(r.setPage, function(o, t) {
            e[i + "_initPage"](t), e[i + "_initOpenClose"]()
        })
    };
    var p, a, r, l, c = !1
}(jQuery);
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="waypoints.min.js">
(function($, k, m, i, d) {
    var e = $(i), g = "waypoint.reached", b = function(o, n) {
        o.element.trigger(g, n);
        if (o.options.triggerOnce) {
            o.element[k]("destroy")
        }
    }, h = function(p, o) {
        if (!o) {
            return -1
        }
        var n = o.waypoints.length - 1;
        while (n >= 0 && o.waypoints[n].element[0] !== p[0]) {
            n -= 1
        }
        return n
    }, f = [], l = function(n) {
        $.extend(this, {element: $(n), oldScroll: 0, waypoints: [], didScroll: false, didResize: false, doScroll: $.proxy(function() {
                var q = this.element.scrollTop(), p = q > this.oldScroll, s = this, r = $.grep(this.waypoints, function(u, t) {
                    return p ? (u.offset > s.oldScroll && u.offset <= q) : (u.offset <= s.oldScroll && u.offset > q)
                }), o = r.length;
                if (!this.oldScroll || !q) {
                    $[m]("refresh")
                }
                this.oldScroll = q;
                if (!o) {
                    return
                }
                if (!p) {
                    r.reverse()
                }
                $.each(r, function(u, t) {
                    if (t.options.continuous || u === o - 1) {
                        b(t, [p ? "down" : "up"])
                    }
                })
            }, this)});
        $(n).bind("scroll.waypoints", $.proxy(function() {
            if (!this.didScroll) {
                this.didScroll = true;
                i.setTimeout($.proxy(function() {
                    this.doScroll();
                    this.didScroll = false
                }, this), $[m].settings.scrollThrottle)
            }
        }, this)).bind("resize.waypoints", $.proxy(function() {
            if (!this.didResize) {
                this.didResize = true;
                i.setTimeout($.proxy(function() {
                    $[m]("refresh");
                    this.didResize = false
                }, this), $[m].settings.resizeThrottle)
            }
        }, this));
        e.load($.proxy(function() {
            this.doScroll()
        }, this))
    }, j = function(n) {
        var o = null;
        $.each(f, function(p, q) {
            if (q.element[0] === n) {
                o = q;
                return false
            }
        });
        return o
    }, c = {init: function(o, n) {
            this.each(function() {
                var u = $.fn[k].defaults.context, q, t = $(this);
                if (n && n.context) {
                    u = n.context
                }
                if (!$.isWindow(u)) {
                    u = t.closest(u)[0]
                }
                q = j(u);
                if (!q) {
                    q = new l(u);
                    f.push(q)
                }
                var p = h(t, q), s = p < 0 ? $.fn[k].defaults : q.waypoints[p].options, r = $.extend({}, s, n);
                r.offset = r.offset === "bottom-in-view" ? function() {
                    var v = $.isWindow(u) ? $[m]("viewportHeight") : $(u).height();
                    return v - $(this).outerHeight()
                } : r.offset;
                if (p < 0) {
                    q.waypoints.push({element: t, offset: null, options: r})
                } else {
                    q.waypoints[p].options = r
                }
                if (o) {
                    t.bind(g, o)
                }
                if (n && n.handler) {
                    t.bind(g, n.handler)
                }
            });
            $[m]("refresh");
            return this
        }, remove: function() {
            return this.each(function(o, p) {
                var n = $(p);
                $.each(f, function(r, s) {
                    var q = h(n, s);
                    if (q >= 0) {
                        s.waypoints.splice(q, 1);
                        if (!s.waypoints.length) {
                            s.element.unbind("scroll.waypoints resize.waypoints");
                            f.splice(r, 1)
                        }
                    }
                })
            })
        }, destroy: function() {
            return this.unbind(g)[k]("remove")
        }}, a = {refresh: function() {
            $.each(f, function(r, s) {
                var q = $.isWindow(s.element[0]), n = q ? 0 : s.element.offset().top, p = q ? $[m]("viewportHeight") : s.element.height(), o = q ? 0 : s.element.scrollTop();
                $.each(s.waypoints, function(u, x) {
                    if (!x) {
                        return
                    }
                    var t = x.options.offset, w = x.offset;
                    if (typeof x.options.offset === "function") {
                        t = x.options.offset.apply(x.element)
                    } else {
                        if (typeof x.options.offset === "string") {
                            var v = parseFloat(x.options.offset);
                            t = x.options.offset.indexOf("%") ? Math.ceil(p * (v / 100)) : v
                        }
                    }
                    x.offset = x.element.offset().top - n + o - t;
                    if (x.options.onlyOnScroll) {
                        return
                    }
                    if (w !== null && s.oldScroll > w && s.oldScroll <= x.offset) {
                        b(x, ["up"])
                    } else {
                        if (w !== null && s.oldScroll < w && s.oldScroll >= x.offset) {
                            b(x, ["down"])
                        } else {
                            if (!w && s.element.scrollTop() > x.offset) {
                                b(x, ["down"])
                            }
                        }
                    }
                });
                s.waypoints.sort(function(u, t) {
                    return u.offset - t.offset
                })
            })
        }, viewportHeight: function() {
            return(i.innerHeight ? i.innerHeight : e.height())
        }, aggregate: function() {
            var n = $();
            $.each(f, function(o, p) {
                $.each(p.waypoints, function(q, r) {
                    n = n.add(r.element)
                })
            });
            return n
        }};
    $.fn[k] = function(n) {
        if (c[n]) {
            return c[n].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof n === "function" || !n) {
                return c.init.apply(this, arguments)
            } else {
                if (typeof n === "object") {
                    return c.init.apply(this, [null, n])
                } else {
                    $.error("Method " + n + " does not exist on jQuery " + k)
                }
            }
        }
    };
    $.fn[k].defaults = {continuous: true, offset: 0, triggerOnce: false, context: i};
    $[m] = function(n) {
        if (a[n]) {
            return a[n].apply(this)
        } else {
            return a.aggregate()
        }
    };
    $[m].settings = {resizeThrottle: 200, scrollThrottle: 100};
    e.load(function() {
        $[m]("refresh")
    })
})(jQuery, "waypoint", "waypoints", window);
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="jquery easing">
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing,
        {
            def: 'easeOutQuad',
            swing: function(x, t, b, c, d) {
                //alert(jQuery.easing.default);
                return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
            },
            easeInQuad: function(x, t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function(x, t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function(x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            },
            easeInCubic: function(x, t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function(x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function(x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function(x, t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function(x, t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function(x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function(x, t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function(x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function(x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function(x, t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function(x, t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function(x, t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function(x, t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function(x, t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function(x, t, b, c, d) {
                if (t == 0)
                    return b;
                if (t == d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function(x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function(x, t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function(x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function(x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function(x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function(x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d / 2) == 2)
                    return b + c;
                if (!p)
                    p = d * (.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                }
                else
                    var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1)
                    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function(x, t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function(x, t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function(x, t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                if ((t /= d / 2) < 1)
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function(x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
            },
            easeOutBounce: function(x, t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOutBounce: function(x, t, b, c, d) {
                if (t < d / 2)
                    return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        });
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="nivo slider">
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(e) {
    var t = function(t, n) {
        var r = e.extend({}, e.fn.nivoSlider.defaults, n);
        var i = {currentSlide: 0, currentImage: "", totalSlides: 0, running: false, paused: false, stop: false, controlNavEl: false};
        var s = e(t);
        s.data("nivo:vars", i).addClass("nivoSlider");
        var o = s.children();
        o.each(function() {
            var t = e(this);
            var n = "";
            if (!t.is("img")) {
                if (t.is("a")) {
                    t.addClass("nivo-imageLink");
                    n = t
                }
                t = t.find("img:first")
            }
            var r = r === 0 ? t.attr("width") : t.width(), s = s === 0 ? t.attr("height") : t.height();
            if (n !== "") {
                n.css("display", "none")
            }
            t.css("display", "none");
            i.totalSlides++
        });
        if (r.randomStart) {
            r.startSlide = Math.floor(Math.random() * i.totalSlides)
        }
        if (r.startSlide > 0) {
            if (r.startSlide >= i.totalSlides) {
                r.startSlide = i.totalSlides - 1
            }
            i.currentSlide = r.startSlide
        }
        if (e(o[i.currentSlide]).is("img")) {
            i.currentImage = e(o[i.currentSlide])
        } else {
            i.currentImage = e(o[i.currentSlide]).find("img:first")
        }
        if (e(o[i.currentSlide]).is("a")) {
            e(o[i.currentSlide]).css("display", "block")
        }
        var u = e("<img/>").addClass("nivo-main-image");
        u.attr("src", i.currentImage.attr("src")).show();
        s.append(u);
        e(window).resize(function() {
            s.children("img").width(s.width());
            u.attr("src", i.currentImage.attr("src"));
            u.stop().height("auto");
            e(".nivo-slice").remove();
            e(".nivo-box").remove()
        });
        s.append(e('<div class="nivo-caption"></div>'));
        var a = function(t) {
            var n = e(".nivo-caption", s);
            if (i.currentImage.attr("title") != "" && i.currentImage.attr("title") != undefined) {
                var r = i.currentImage.attr("title");
                if (r.substr(0, 1) == "#")
                    r = e(r).html();
                if (n.css("display") == "block") {
                    setTimeout(function() {
                        n.html(r)
                    }, t.animSpeed)
                } else {
                    n.html(r);
                    n.stop().fadeIn(t.animSpeed)
                }
            } else {
                n.stop().fadeOut(t.animSpeed)
            }
        };
        a(r);
        var f = 0;
        if (!r.manualAdvance && o.length > 1) {
            f = setInterval(function() {
                d(s, o, r, false)
            }, r.pauseTime)
        }
        if (r.directionNav) {
            s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + r.prevText + '</a><a class="nivo-nextNav">' + r.nextText + "</a></div>");
            e(s).on("click", "a.nivo-prevNav", function() {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                i.currentSlide -= 2;
                d(s, o, r, "prev")
            });
            e(s).on("click", "a.nivo-nextNav", function() {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                d(s, o, r, "next")
            })
        }
        if (r.controlNav) {
            i.controlNavEl = e('<div class="nivo-controlNav"></div>');
            s.after(i.controlNavEl);
            for (var l = 0; l < o.length; l++) {
                if (r.controlNavThumbs) {
                    i.controlNavEl.addClass("nivo-thumbs-enabled");
                    var c = o.eq(l);
                    if (!c.is("img")) {
                        c = c.find("img:first")
                    }
                    if (c.attr("data-thumb"))
                        i.controlNavEl.append('<a class="nivo-control" rel="' + l + '"><img src="' + c.attr("data-thumb") + '" alt="" /></a>')
                } else {
                    i.controlNavEl.append('<a class="nivo-control" rel="' + l + '">' + (l + 1) + "</a>")
                }
            }
            e("a:eq(" + i.currentSlide + ")", i.controlNavEl).addClass("active");
            e("a", i.controlNavEl).bind("click", function() {
                if (i.running)
                    return false;
                if (e(this).hasClass("active"))
                    return false;
                clearInterval(f);
                f = "";
                u.attr("src", i.currentImage.attr("src"));
                i.currentSlide = e(this).attr("rel") - 1;
                d(s, o, r, "control")
            })
        }
        if (r.pauseOnHover) {
            s.hover(function() {
                i.paused = true;
                clearInterval(f);
                f = ""
            }, function() {
                i.paused = false;
                if (f === "" && !r.manualAdvance) {
                    f = setInterval(function() {
                        d(s, o, r, false)
                    }, r.pauseTime)
                }
            })
        }
        s.bind("nivo:animFinished", function() {
            u.attr("src", i.currentImage.attr("src"));
            i.running = false;
            e(o).each(function() {
                if (e(this).is("a")) {
                    e(this).css("display", "none")
                }
            });
            if (e(o[i.currentSlide]).is("a")) {
                e(o[i.currentSlide]).css("display", "block")
            }
            if (f === "" && !i.paused && !r.manualAdvance) {
                f = setInterval(function() {
                    d(s, o, r, false)
                }, r.pauseTime)
            }
            r.afterChange.call(this)
        });
        var h = function(t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height();
            for (var s = 0; s < n.slices; s++) {
                var o = Math.round(t.width() / n.slices);
                if (s === n.slices - 1) {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({left: o * s + "px", width: t.width() - o * s + "px", height: i + "px", opacity: "0", overflow: "hidden"}))
                } else {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({left: o * s + "px", width: o + "px", height: i + "px", opacity: "0", overflow: "hidden"}))
                }
            }
            e(".nivo-slice", t).height(i);
            u.stop().animate({height: e(r.currentImage).height()}, n.animSpeed)
        };
        var p = function(t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = Math.round(t.width() / n.boxCols), s = Math.round(e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows);
            for (var o = 0; o < n.boxRows; o++) {
                for (var a = 0; a < n.boxCols; a++) {
                    if (a === n.boxCols - 1) {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({opacity: 0, left: i * a + "px", top: s * o + "px", width: t.width() - i * a + "px"}));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    } else {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({opacity: 0, left: i * a + "px", top: s * o + "px", width: i + "px"}));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    }
                }
            }
            u.stop().animate({height: e(r.currentImage).height()}, n.animSpeed)
        };
        var d = function(t, n, r, i) {
            var s = t.data("nivo:vars");
            if (s && s.currentSlide === s.totalSlides - 1) {
                r.lastSlide.call(this)
            }
            if ((!s || s.stop) && !i) {
                return false
            }
            r.beforeChange.call(this);
            if (!i) {
                u.attr("src", s.currentImage.attr("src"))
            } else {
                if (i === "prev") {
                    u.attr("src", s.currentImage.attr("src"))
                }
                if (i === "next") {
                    u.attr("src", s.currentImage.attr("src"))
                }
            }
            s.currentSlide++;
            if (s.currentSlide === s.totalSlides) {
                s.currentSlide = 0;
                r.slideshowEnd.call(this)
            }
            if (s.currentSlide < 0) {
                s.currentSlide = s.totalSlides - 1
            }
            if (e(n[s.currentSlide]).is("img")) {
                s.currentImage = e(n[s.currentSlide])
            } else {
                s.currentImage = e(n[s.currentSlide]).find("img:first")
            }
            if (r.controlNav) {
                e("a", s.controlNavEl).removeClass("active");
                e("a:eq(" + s.currentSlide + ")", s.controlNavEl).addClass("active")
            }
            a(r);
            e(".nivo-slice", t).remove();
            e(".nivo-box", t).remove();
            var o = r.effect, f = "";
            if (r.effect === "random") {
                f = new Array("sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse");
                o = f[Math.floor(Math.random() * (f.length + 1))];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (r.effect.indexOf(",") !== -1) {
                f = r.effect.split(",");
                o = f[Math.floor(Math.random() * f.length)];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (s.currentImage.attr("data-transition")) {
                o = s.currentImage.attr("data-transition")
            }
            s.running = true;
            var l = 0, c = 0, d = "", m = "", g = "", y = "";
            if (o === "sliceDown" || o === "sliceDownRight" || o === "sliceDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    n.css({top: "0px"});
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUp" || o === "sliceUpRight" || o === "sliceUpLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    n.css({bottom: "0px"});
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUpDown" || o === "sliceUpDownRight" || o === "sliceUpDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                var b = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    if (c === 0) {
                        n.css("top", "0px");
                        c++
                    } else {
                        n.css("bottom", "0px");
                        c = 0
                    }
                    if (b === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    b++
                })
            } else if (o === "fold") {
                h(t, r, s);
                l = 0;
                c = 0;
                e(".nivo-slice", t).each(function() {
                    var n = e(this);
                    var i = n.width();
                    n.css({top: "0px", width: "0px"});
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({width: i, opacity: "1.0"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({width: i, opacity: "1.0"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "fade") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({width: t.width() + "px"});
                m.animate({opacity: "1.0"}, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInRight") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({width: "0px", opacity: "1"});
                m.animate({width: t.width() + "px"}, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInLeft") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({width: "0px", opacity: "1", left: "", right: "0px"});
                m.animate({width: t.width() + "px"}, r.animSpeed * 2, "", function() {
                    m.css({left: "0px", right: ""});
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "boxRandom") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                y = v(e(".nivo-box", t));
                y.each(function() {
                    var n = e(this);
                    if (c === g - 1) {
                        setTimeout(function() {
                            n.animate({opacity: "1"}, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({opacity: "1"}, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 20;
                    c++
                })
            } else if (o === "boxRain" || o === "boxRainReverse" || o === "boxRainGrow" || o === "boxRainGrowReverse") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                var w = 0;
                var E = 0;
                var S = [];
                S[w] = [];
                y = e(".nivo-box", t);
                if (o === "boxRainReverse" || o === "boxRainGrowReverse") {
                    y = e(".nivo-box", t)._reverse()
                }
                y.each(function() {
                    S[w][E] = e(this);
                    E++;
                    if (E === r.boxCols) {
                        w++;
                        E = 0;
                        S[w] = []
                    }
                });
                for (var x = 0; x < r.boxCols * 2; x++) {
                    var T = x;
                    for (var N = 0; N < r.boxRows; N++) {
                        if (T >= 0 && T < r.boxCols) {
                            (function(n, i, s, u, a) {
                                var f = e(S[n][i]);
                                var l = f.width();
                                var c = f.height();
                                if (o === "boxRainGrow" || o === "boxRainGrowReverse") {
                                    f.width(0).height(0)
                                }
                                if (u === a - 1) {
                                    setTimeout(function() {
                                        f.animate({opacity: "1", width: l, height: c}, r.animSpeed / 1.3, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + s)
                                } else {
                                    setTimeout(function() {
                                        f.animate({opacity: "1", width: l, height: c}, r.animSpeed / 1.3)
                                    }, 100 + s)
                                }
                            })(N, T, l, c, g);
                            c++
                        }
                        T--
                    }
                    l += 100
                }
            }
        };
        var v = function(e) {
            for (var t, n, r = e.length; r; t = parseInt(Math.random() * r, 10), n = e[--r], e[r] = e[t], e[t] = n)
                ;
            return e
        };
        var m = function(e) {
            if (this.console && typeof console.log !== "undefined") {
                console.log(e)
            }
        };
        this.stop = function() {
            if (!e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = true;
                m("Stop Slider")
            }
        };
        this.start = function() {
            if (e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = false;
                m("Start Slider")
            }
        };
        r.afterLoad.call(this);
        return this
    };
    e.fn.nivoSlider = function(n) {
        return this.each(function(r, i) {
            var s = e(this);
            if (s.data("nivoslider")) {
                return s.data("nivoslider")
            }
            var o = new t(this, n);
            s.data("nivoslider", o)
        })
    };
    e.fn.nivoSlider.defaults = {effect: "random", slices: 15, boxCols: 8, boxRows: 4, animSpeed: 500, pauseTime: 3e3, startSlide: 0, directionNav: true, controlNav: true, controlNavThumbs: false, pauseOnHover: true, manualAdvance: false, prevText: "Prev", nextText: "Next", randomStart: false, beforeChange: function() {
        }, afterChange: function() {
        }, slideshowEnd: function() {
        }, lastSlide: function() {
        }, afterLoad: function() {
        }};
    e.fn._reverse = [].reverse
})(jQuery);
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="vacordion">
(function($) {

    // cache some values
    var cache = {
        idx_expanded: -1, // the index of the current expanded slice
        sliceH: 0, // the default slice's height	
        current: 0, // controls the current slider position
        totalSlices: 0	  // total number of slices
    },
    aux = {
        // triggered when we click a slice. If the slice is expanded,
        // we close it, otherwise we open it..
        selectSlice: function($el, $slices, $navNext, $navPrev, settings) {

            return $.Deferred(
                    function(dfd) {

                        var expanded = $el.data('expanded'),
                                pos = $el.data('position'),
                                itemHeight, othersHeight,
                                $others = $slices.not($el);
                        // if it's opened..	
                        if (expanded) {
                            $el.data('expanded', false);
                            cache.idx_expanded = -1;
                            // the default values of each slices's height
                            itemHeight = cache.sliceH;
                            othersHeight = cache.sliceH;
                            // hide the content div
                            $el.find('.va-content').hide();
                            // control the navigation buttons visibility
                            if (aux.canSlideUp($slices, settings))
                                $navPrev.fadeIn();
                            else
                                $navPrev.fadeOut();
                            if (aux.canSlideDown($slices, settings))
                                $navNext.fadeIn();
                            else
                                $navNext.fadeOut();
                        }
                        // if it's closed..
                        else {
                            $el.data('expanded', true);
                            cache.idx_expanded = $el.index();
                            $others.data('expanded', false);
                            // the current slice's height
                            itemHeight = settings.expandedHeight;
                            // the height the other slices will have
                            othersHeight = Math.ceil((settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1));
                            // control the navigation buttons visibility
                            if (cache.idx_expanded > 0)
                                $navPrev.fadeIn();
                            else
                                $navPrev.fadeOut();
                            if (cache.idx_expanded < cache.totalSlices - 1)
                                $navNext.fadeIn();
                            else
                                $navNext.fadeOut();
                        }

                        // the animation parameters for the clicked slice
                        var animParam = {
                            height: itemHeight + 'px',
                            opacity: 1,
                            top: (pos - 1) * othersHeight + 'px'
                        };
                        // animate the clicked slice and also its title (<h3>)
                        $el.stop()
                                .animate(animParam, settings.animSpeed, settings.animEasing, function() {
                                    if (!expanded)
                                        $el.find('.va-content').fadeIn(settings.contentAnimSpeed);
                                })
                                .find('.va-title')
                                .stop()
                                .animate({
                                    lineHeight: cache.sliceH + 'px'
                                }, settings.animSpeed, settings.animEasing).hide();
                        // animate all the others
                        $others.each(function(i) {
                            var $other = $(this),
                                    posother = $other.data('position'),
                                    t;
                            if (expanded)
                                t = (posother - 1) * othersHeight;
                            else {
                                if (posother < pos)
                                    t = (posother - 1) * othersHeight;
                                else
                                    t = ((posother - 2) * othersHeight) + settings.expandedHeight;
                            }

                            $other.stop()
                                    .animate({
                                        top: t + 'px',
                                        height: othersHeight + 'px',
                                        opacity: (expanded) ? 1 : settings.animOpacity
                                    }, settings.animSpeed, settings.animEasing, dfd.resolve)
                                    .find('.va-title')
                                    .stop().show()
                                    .animate({
                                        lineHeight: othersHeight + 'px'
                                    }, settings.animSpeed, settings.animEasing)
                                    .end()
                                    .find('.va-content')
                                    .hide();
                        });
                    }
            ).promise();
        },
        // triggered when clicking the navigation buttons / mouse scrolling
        navigate: function(dir, $slices, $navNext, $navPrev, settings) {
            // if animating return
            if ($slices.is(':animated'))
                return false;
            // all move up / down one position
            // if settings.savePositions is false, then we need to close any expanded slice before sliding
            // otherwise we slide, and the next one will open automatically
            var $el;
            if (cache.idx_expanded != -1 && !settings.savePositions) {
                $el = $slices.eq(cache.idx_expanded);
                $.when(aux.selectSlice($el, $slices, $navNext, $navPrev, settings)).done(function() {
                    setTimeout(function() {
                        aux.slide(dir, $slices, $navNext, $navPrev, settings);
                    }, 10);
                });
            }
            else {
                aux.slide(dir, $slices, $navNext, $navPrev, settings);
            }
        },
        slide: function(dir, $slices, $navNext, $navPrev, settings) {
            // control if we can navigate.
            // control the navigation buttons visibility.
            // the navigation will behave differently for the cases we have all the slices closed, 
            // and when one is opened. It will also depend on settings.savePositions 
            if (cache.idx_expanded === -1 || !settings.savePositions) {
                if (dir === 1 && cache.current + settings.visibleSlices >= cache.totalSlices)
                    return false;
                else if (dir === -1 && cache.current === 0)
                    return false;
                if (dir === -1 && cache.current === 1)
                    $navPrev.fadeOut();
                else
                    $navPrev.fadeIn();
                if (dir === 1 && cache.current + settings.visibleSlices === cache.totalSlices - 1)
                    $navNext.fadeOut();
                else
                    $navNext.fadeIn();
            }
            else {
                if (dir === 1 && cache.idx_expanded === cache.totalSlices - 1)
                    return false;
                else if (dir === -1 && cache.idx_expanded === 0)
                    return false;
                if (dir === -1 && cache.idx_expanded === 1)
                    $navPrev.fadeOut();
                else
                    $navPrev.fadeIn();
                if (dir === 1 && cache.idx_expanded === cache.totalSlices - 2)
                    $navNext.fadeOut();
                else
                    $navNext.fadeIn();
            }

            var $currentSlice = $slices.eq(cache.idx_expanded),
                    $nextSlice,
                    t;
            (dir === 1) ? $nextSlice = $currentSlice.next() : $nextSlice = $currentSlice.prev();
            // if we cannot slide up / down, then we just call the selectSlice for the previous / next slice
            if ((dir === 1 && !aux.canSlideDown($slices, settings)) ||
                    (dir === -1 && !aux.canSlideUp($slices, settings))) {
                aux.selectSlice($nextSlice, $slices, $navNext, $navPrev, settings);
                return false;
            }

            // if we slide down, the top and position of each slice will decrease
            if (dir === 1) {
                cache.current++;
                t = '-=' + cache.sliceH;
                pos_increment = -1;
            }
            else {
                cache.current--;
                t = '+=' + cache.sliceH;
                pos_increment = 1;
            }

            $slices.each(function(i) {
                var $slice = $(this),
                        pos = $slice.data('position');
                // all closed or savePositions is false
                if (!settings.savePositions || cache.idx_expanded === -1)
                    $slice.stop().animate({top: t}, settings.animSpeed, settings.animEasing);
                else {
                    var itemHeight, othersHeight;
                    // if the slice is the one we should open..
                    if (i === $nextSlice.index()) {
                        $slice.data('expanded', true);
                        cache.idx_expanded = $slice.index();
                        itemHeight = settings.expandedHeight;
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    height: itemHeight + 'px',
                                    opacity: 1,
                                    top: (dir === 1) ? (pos - 2) * othersHeight + 'px' : pos * othersHeight + 'px'
                                }, settings.animSpeed, settings.animEasing, function() {
                                    $slice.find('.va-content').fadeIn(settings.contentAnimSpeed);
                                })
                                .find('.va-title')
                                .stop()
                                .animate({
                                    lineHeight: cache.sliceH + 'px'
                                }, settings.animSpeed, settings.animEasing);
                    }
                    // if the slice is the one opened, lets close it
                    else if ($slice.data('expanded')) {
                        // collapse

                        $slice.data('expanded', false);
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    height: othersHeight + 'px',
                                    opacity: settings.animOpacity,
                                    top: (dir === 1) ? '-=' + othersHeight : '+=' + settings.expandedHeight
                                }, settings.animSpeed, settings.animEasing)
                                .find('.va-title')
                                .stop()
                                .animate({
                                    lineHeight: othersHeight + 'px'
                                }, settings.animSpeed, settings.animEasing)
                                .end()
                                .find('.va-content')
                                .hide();
                    }
                    // all the others..
                    else {
                        $slice.data('expanded', false);
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    top: (dir === 1) ? '-=' + othersHeight : '+=' + othersHeight
                                }, settings.animSpeed, settings.animEasing);
                    }
                }
                // change the slice's position
                $slice.data().position += pos_increment;
            });
        },
        canSlideUp: function($slices, settings) {
            var $first = $slices.eq(cache.current);
            if ($first.index() !== 0)
                return true;
        },
        canSlideDown: function($slices, settings) {
            var $last = $slices.eq(cache.current + settings.visibleSlices - 1);
            if ($last.index() !== cache.totalSlices - 1)
                return true;
        }
    },
    methods = {
        init: function(options) {

            if (this.length) {

                var settings = {
                    // the accordion's width
                    accordionW: 1000,
                    // the accordion's height
                    accordionH: 450,
                    // number of visible slices
                    visibleSlices: 3,
                    // the height of a opened slice
                    // should not be more than accordionH
                    expandedHeight: 350,
                    // speed when opening / closing a slice
                    animSpeed: 250,
                    // easing when opening / closing a slice
                    animEasing: 'jswing',
                    // opacity value for the collapsed slices
                    animOpacity: 0.2,
                    // time to fade in the slice's content
                    contentAnimSpeed: 900,
                    // if this is set to false, then before
                    // sliding we collapse any opened slice
                    savePositions: true
                };
                return this.each(function() {

                    // if options exist, lets merge them with our default settings
                    if (options) {
                        $.extend(settings, options);
                    }

                    var $el = $(this),
                            // the accordion's slices
                            $slices = $el.find('div.va-slice'),
                            // the navigation buttons
                            $navNext = $el.find('span.va-nav-next'),
                            $navPrev = $el.find('span.va-nav-prev');
                    // each slice's height
                    cache.sliceH = Math.ceil(settings.accordionH / settings.visibleSlices);
                    // total slices
                    cache.totalSlices = $slices.length;
                    // control some user config parameters
                    if (settings.expandedHeight > settings.accordionH)
                        settings.expandedHeight = settings.accordionH;
                    else if (settings.expandedHeight <= cache.sliceH)
                        settings.expandedHeight = cache.sliceH + 50; // give it a minimum

                    // set the accordion's width & height
                    $el.css({
                        width: settings.accordionW + 'px',
                        height: settings.accordionH + 'px'
                    });
                    // show / hide $navNext 
                    if (settings.visibleSlices < cache.totalSlices)
                        $navNext.show();
                    // set the top & height for each slice.
                    // also save the position of each one.
                    // as we navigate, the first one in the accordion
                    // will have position 1 and the last settings.visibleSlices.
                    // finally set line-height of the title (<h3>)
                    $slices.each(function(i) {
                        var $slice = $(this);
                        $slice.css({
                            top: i * cache.sliceH + 'px',
                            height: cache.sliceH + 'px'
                        }).data('position', (i + 1));
                    })
                            .children('.va-title')
                            .css('line-height', cache.sliceH + 'px');
                    // click event
                    $slices.bind('click.vaccordion', function(e) {
                        // only if we have more than 1 visible slice. 
                        // otherwise we will just be able to slide.
                        if (settings.visibleSlices > 1) {
                            var $el = $(this);
                            aux.selectSlice($el, $slices, $navNext, $navPrev, settings);
                        }
                    });
                    // navigation events
                    $navNext.bind('click.vaccordion', function(e) {
                        aux.navigate(1, $slices, $navNext, $navPrev, settings);
                    });
                    $navPrev.bind('click.vaccordion', function(e) {
                        aux.navigate(-1, $slices, $navNext, $navPrev, settings);
                    });
                    // adds events to the mouse
                    $el.bind('mousewheel.vaccordion', function(e, delta) {
                        if (delta > 0) {
                            aux.navigate(-1, $slices, $navNext, $navPrev, settings);
                        }
                        else {
                            aux.navigate(1, $slices, $navNext, $navPrev, settings);
                        }
                        return false;
                    });
                });
            }
        }
    };
    $.fn.vaccordion = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.vaccordion');
        }
    };
})(jQuery);
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="notices full">
/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
 *
 * Copyright 2011 @louis_remi
 * Licensed under the MIT license.
 */
var $event = $.event,
        $special,
        resizeTimeout;
$special = $event.special.debouncedresize = {
    setup: function() {
        $(this).on("resize", $special.handler);
    },
    teardown: function() {
        $(this).off("resize", $special.handler);
    },
    handler: function(event, execAsap) {
        // Save the context
        var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply(context, args);
                };
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }

        execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, $special.threshold);
    },
    threshold: 50
};
var Boxgrid = (function() {
//mayra
    var $items = $('.noticeX'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    // transition end event name
    transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ],
            // window and body elements
            $window = $(window),
            $body = $('BODY'),
            // transitions support
            supportTransitions = Modernizr.csstransitions,
            // current item's index
            current = -1,
            // window width and height
            winsize = getWindowSize();
    function init(options) {
        // apply fittext plugin
        //$items.find( 'div.rb-week > div span' ).fitText( 0.3 ).end().find( 'span.rb-city' ).fitText( 0.5 );
        initEvents();
    }

    function initEvents() {

        $items.each(function(ix) {

            var $item = $(this),
                    $close = $item.find('span.rb-close'),
                    $overlay = $item.find('div.rb-overlay'),
                    $prev = $('<span class="rb-prev">Prebv</span>').appendTo($overlay),
                    $next = $('<span class="rb-next">Next</span>').appendTo($overlay),
                    $linkNext, $linkPrev;
            if ($item.is(':last-child')) {
                $linkPrev = $items[ix - 1];
                $linkNext = $items[0];
            } else if ($item.is(':first-child')) {
                $linkPrev = $items[$items.size() - 1];
                $linkNext = $items[ix + 1];
            } else {
                $linkNext = $items[ix + 1];
                $linkPrev = $items[ix - 1];
            }

            $next.on('click', function(event) {
                $($linkNext).trigger("click");
                $close.trigger("click");
            });
            $prev.on('click', function(event) {
                $($linkPrev).trigger("click");
                $close.trigger("click");
            });
            $item.on('click', function(event) {
                event.preventDefault();
                $('.noticiesWrap').removeClass("oculto visible animated fadeInUp");
                if ($item.data('isExpanded')) {
                    return false;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.index();
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
                $overlay.css({
                    transformOrigin: layoutProp.left + 'px ' + layoutProp.top + 'px',
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    transform: supportTransitions ? 'rotate(45deg)' : 'none',
                    opacity: 1,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function() {

                        $overlay.off(transEndEventName);
                        setTimeout(function() {
                            $overlay.css({clip: clipPropLast, transform: 'rotate(0deg)'}).on(transEndEventName, function() {
                                $overlay.off(transEndEventName);
                                $body.css('overflow-y', 'hidden');
                            });
                        }, 25);
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }

            });
            $close.on('click', function() {

                $body.css('overflow-y', 'auto');
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'auto';
                // reset current
                current = -1;
                $overlay.css({
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    opacity: supportTransitions ? 1 : 0,
                    pointerEvents: 'none'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function() {

                        $overlay.off(transEndEventName);
                        setTimeout(function() {
                            $overlay.css('opacity', 0).on(transEndEventName, function() {
                                $overlay.off(transEndEventName).css({clip: clipPropLast, zIndex: -1});
                                $item.data('isExpanded', false);
                            });
                        }, 25);
                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }

                return false;
            });
        });
        $(window).on('debouncedresize', function() {
            winsize = getWindowSize();
            // todo : cache the current item
            if (current !== -1) {
                $items.eq(current).children('div.rb-overlay').css('clip', 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)');
            }
        });
    }

    function getItemLayoutProp($item) {

        var scrollT = $window.scrollTop(),
                scrollL = $window.scrollLeft(),
                itemOffset = $item.offset();
        return {
            left: itemOffset.left - scrollL,
            top: itemOffset.top - scrollT,
            width: $item.outerWidth(),
            height: $item.outerHeight()
        };
    }

    function getWindowSize() {
        $body.css('overflow-y', 'hidden');
        var w = $window.width(), h = $window.height();
        if (current === -1) {
            $body.css('overflow-y', 'auto');
        }
        return {width: w, height: h};
    }

    return {init: init};
})();
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="grid facultades">

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
$.fn.imagesLoaded = function(callback) {
    var $this = this,
            deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
            hasNotify = $.isFunction(deferred.notify),
            $images = $this.find('img').add($this.filter('img')),
            loaded = [],
            proper = [],
            broken = [];
    // Register deferred callbacks
    if ($.isPlainObject(callback)) {
        $.each(callback, function(key, value) {
            if (key === 'callback') {
                callback = value;
            } else if (deferred) {
                deferred[key](value);
            }
        });
    }

    function doneLoading() {
        var $proper = $(proper),
                $broken = $(broken);
        if (deferred) {
            if (broken.length) {
                deferred.reject($images, $proper, $broken);
            } else {
                deferred.resolve($images);
            }
        }

        if ($.isFunction(callback)) {
            callback.call($this, $images, $proper, $broken);
        }
    }

    function imgLoaded(img, isBroken) {
        // don't proceed if BLANK image, or image is already loaded
        if (img.src === BLANK || $.inArray(img, loaded) !== -1) {
            return;
        }

        // store element in loaded images array
        loaded.push(img);
        // keep track of broken and properly loaded images
        if (isBroken) {
            broken.push(img);
        } else {
            proper.push(img);
        }

        // cache image and its state for future calls
        $.data(img, 'imagesLoaded', {isBroken: isBroken, src: img.src});
        // trigger deferred progress method if present
        if (hasNotify) {
            deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]);
        }

        // call doneLoading and clean listeners if all images are loaded
        if ($images.length === loaded.length) {
            setTimeout(doneLoading);
            $images.unbind('.imagesLoaded');
        }
    }

    // if no images, trigger immediately
    if (!$images.length) {
        doneLoading();
    } else {
        $images.bind('load.imagesLoaded error.imagesLoaded', function(event) {
            // trigger imgLoaded
            imgLoaded(event.target, event.type === 'error');
        }).each(function(i, el) {
            var src = el.src;
            // find out if this image has been already checked for status
            // if it was, and src has not changed, call imgLoaded on it
            var cached = $.data(el, 'imagesLoaded');
            if (cached && cached.src === src) {
                imgLoaded(el, cached.isBroken);
                return;
            }

            // if complete is true and browser supports natural sizes, try
            // to check for image status manually
            if (el.complete && el.naturalWidth !== undefined) {
                imgLoaded(el, el.naturalWidth === 0 || el.naturalHeight === 0);
                return;
            }

            // cached images don't fire load sometimes, so we reset src, but only when
            // dealing with IE, or image is complete (loaded) and failed manual check
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            if (el.readyState || el.complete) {
                el.src = BLANK;
                el.src = src;
            }
        });
    }

    return deferred ? deferred.promise($this) : $this;
};


/*(function($) {
 
 // transitionend events
 var transEndEventNames = {
 'WebkitTransition': 'webkitTransitionEnd',
 'MozTransition': 'transitionend',
 'OTransition': 'oTransitionEnd',
 'msTransition': 'MSTransitionEnd',
 'transition': 'transitionend'
 },
 transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ],
 // support for csstransitions
 support = Modernizr.csstransitions;
 
 $.widget("metro.dcmgrid", {
 version: "1.0.0",
 grid: {}, items: {},
 options: {
 // current expanded item's index
 current: -1,
 // position (top) of the expanded item
 // used to know if the preview will expand in a different row
 previewPos: -1,
 // extra amount of pixels to scroll the window
 scrollExtra: 0,
 // extra margin when expanded (between preview overlay and the next items)
 marginExpanded: 10,
 window: null, winsize: null,
 $body: $('html, body'),
 // default settings
 settings: {
 minHeight: 500,
 speed: 350,
 easing: 'ease'
 }
 },
 _create: function() {
 var o = this.options;
 this.grid = $(this);
 // the items
 this.items = this.grid.children('li');
 o.window = $(window);
 // preload all images
 this.grid.imagesLoaded(function() {
 
 // save itemÂ´s size and offset
 _saveItemInfo(true);
 // get windowÂ´s size
 _getWinSize();
 // initialize some events
 _initEvents();
 });
 },
 // add more items to the grid.
 // the new items need to appended to the grid.
 // after that call Grid.addItems(theItems);
 _addItems: function($newitems) {
 
 this.items = this.items.add($newitems);
 $newitems.each(function() {
 var $item = $(this);
 $item.data({
 offsetTop: $item.offset().top,
 height: $item.height()
 });
 });
 _initItemsEvents($newitems);
 },
 // saves the itemÂ´s offset top and height (if saveheight is true)
 _saveItemInfo: function(saveheight) {
 this.items.each(function() {
 var $item = $(this);
 $item.data('offsetTop', $item.offset().top);
 if (saveheight) {
 $item.data('height', $item.height());
 }
 });
 },
 _initEvents: function() {
 
 // when clicking an item, show the preview with the itemÂ´s info and large image.
 // close the item if already expanded.
 // also close if clicking on the itemÂ´s cross
 _initItemsEvents(this.items);
 // on window resize get the windowÂ´s size again
 // reset some values..
 this.options.window.on('debouncedresize', function() {
 
 this.options.scrollExtra = 0;
 this.options.previewPos = -1;
 // save itemÂ´s offset
 _saveItemInfo();
 _getWinSize();
 var preview = $.data(this, 'preview');
 if (typeof preview != 'undefined') {
 _hidePreview();
 }
 
 });
 },
 _initItemsEvents: function($items) {
 $items.on('click', 'span.og-close', function() {
 _hidePreview();
 return false;
 }).children('a').on('click', function(e) {
 
 var $item = $(this).parent();
 // check if item already opened
 this.options.current === $item.index() ? _hidePreview() : _showPreview($item);
 return false;
 });
 },
 _getWinSize: function() {
 this.options.winsize = {width: this.options.window.width(), height: this.options.window.height()};
 },
 _showPreview: function($item) {
 
 var preview = $.data(this, 'preview'),
 // itemÂ´s offset top
 position = $item.data('offsetTop');
 this.options.scrollExtra = 0;
 // if a preview exists and previewPos is different (different row) from itemÂ´s top then close it
 if (typeof preview != 'undefined') {
 
 // not in the same row
 if (this.options.previewPos !== position) {
 // if position > previewPos then we need to take te current previewÂ´s height in consideration when scrolling the window
 if (position > this.options.previewPos) {
 this.options.scrollExtra = preview.height;
 }
 _hidePreview();
 }
 // same row
 else {
 preview.update($item);
 return false;
 }
 
 }
 
 // update previewPos
 this.options.previewPos = position;
 // initialize new preview for the clicked item
 preview = $.data(this, 'preview', new Preview($item));
 // expand preview overlay
 preview.open();
 },
 _hidePreview: function() {
 this.options.current = -1;
 var preview = $.data(this, 'preview');
 preview.close();
 $.removeData(this, 'preview');
 },
 _destroy: function() {
 
 },
 _setOption: function(key, value) {
 this._super('_setOption', key, value);
 }
 });
 // the preview obj / overlay
 function Preview($item) {
 this.$item = $item;
 this.expandedIdx = this.$item.index();
 this.create();
 this.update();
 }
 Preview.prototype = {
 create: function() {
 // create Preview structure:
 this.$title = $('<h3></h3>');
 this.$description = $('<p></p>');
 this.$href = $('<a href="#">Ir a Facultad</a>');
 this.$details = $('<div class="og-details"></div>').append(this.$title, this.$description, this.$href);
 this.$loading = $('<div class="og-loading"></div>');
 this.$fullimage = $('<div class="og-fullimg"></div>').append(this.$loading);
 this.$closePreview = $('<span class="og-close"></span>');
 this.$previewInner = $('<div class="og-expander-inner"></div>').append(this.$closePreview, this.$fullimage, this.$details);
 this.$previewEl = $('<div class="og-expander"></div>').append(this.$previewInner);
 // append preview element to the item
 this.$item.append(this.getEl());
 // set the transitions for the preview and the item
 if (support) {
 this.setTransition();
 }
 },
 update: function($item) {
 
 if ($item) {
 this.$item = $item;
 }
 
 // if already expanded remove class "og-expanded" from current item and add it to new item
 if (current !== -1) {
 var $currentItem = $items.eq(current);
 $currentItem.removeClass('og-expanded');
 this.$item.addClass('og-expanded');
 // position the preview correctly
 this.positionPreview();
 }
 
 // update current value
 current = this.$item.index();
 // update previewÂ´s content
 var $itemEl = this.$item.children('a'),
 eldata = {
 href: $itemEl.attr('href'),
 largesrc: $itemEl.data('largesrc'),
 title: $itemEl.data('title'),
 //description : $itemEl.data( 'description' )
 description: $itemEl.find('.detailx').html()
 };
 this.$title.html(eldata.title);
 this.$description.html(eldata.description);
 this.$href.attr('href', eldata.href);
 var self = this;
 // remove the current image in the preview
 if (typeof self.$largeImg != 'undefined') {
 self.$largeImg.remove();
 }
 
 // preload large image and add it to the preview
 // for smaller screens we donÂ´t display the large image (the media query will hide the fullimage wrapper)
 if (self.$fullimage.is(':visible')) {
 this.$loading.show();
 $('<img/>').load(function() {
 var $img = $(this);
 if ($img.attr('src') === self.$item.children('a').data('largesrc')) {
 self.$loading.hide();
 self.$fullimage.find('img').remove();
 self.$largeImg = $img.fadeIn(350);
 self.$fullimage.append(self.$largeImg);
 }
 }).attr('src', eldata.largesrc);
 }
 
 },
 open: function() {
 
 setTimeout($.proxy(function() {
 // set the height for the preview and the item
 this.setHeights();
 // scroll to position the preview in the right place
 this.positionPreview();
 }, this), 25);
 },
 close: function() {
 
 var self = this,
 onEndFn = function() {
 if (support) {
 $(this).off(transEndEventName);
 }
 self.$item.removeClass('og-expanded');
 self.$previewEl.remove();
 };
 setTimeout($.proxy(function() {
 
 if (typeof this.$largeImg !== 'undefined') {
 this.$largeImg.fadeOut('fast');
 }
 this.$previewEl.css('height', 0);
 // the current expanded item (might be different from this.$item)
 var $expandedItem = $items.eq(this.expandedIdx);
 $expandedItem.css('height', $expandedItem.data('height')).on(transEndEventName, onEndFn);
 if (!support) {
 onEndFn.call();
 }
 
 }, this), 25);
 return false;
 },
 calcHeight: function() {
 
 var heightPreview = winsize.height - this.$item.data('height') - marginExpanded,
 itemHeight = winsize.height;
 if (heightPreview < settings.minHeight) {
 heightPreview = settings.minHeight;
 itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;
 }
 
 this.height = heightPreview;
 this.itemHeight = itemHeight;
 },
 setHeights: function() {
 
 var self = this,
 onEndFn = function() {
 if (support) {
 self.$item.off(transEndEventName);
 }
 self.$item.addClass('og-expanded');
 };
 this.calcHeight();
 this.$previewEl.css('height', this.height);
 this.$item.css('height', this.itemHeight).on(transEndEventName, onEndFn);
 if (!support) {
 onEndFn.call();
 }
 
 },
 positionPreview: function() {
 
 // scroll page
 // case 1 : preview height + item height fits in windowÂ´s height
 // case 2 : preview height + item height does not fit in windowÂ´s height and preview height is smaller than windowÂ´s height
 // case 3 : preview height + item height does not fit in windowÂ´s height and preview height is bigger than windowÂ´s height
 var position = this.$item.data('offsetTop'),
 previewOffsetT = this.$previewEl.offset().top - scrollExtra,
 scrollVal = this.height + this.$item.data('height') + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - (winsize.height - this.height) : previewOffsetT;
 $body.animate({scrollTop: scrollVal}, settings.speed);
 },
 setTransition: function() {
 this.$previewEl.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
 this.$item.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
 },
 getEl: function() {
 return this.$previewEl;
 }
 }
 
 })(jQuery);
 
 */


var DCMGrid = (function() {
    //var $grid;
    // list of items
    $('.og-grid.fac').each(function() {
        var $grid = $(this);


        // the items
        var $items = $grid.children('li'),
                // current expanded item's index
                current = -1,
                // position (top) of the expanded item
                // used to know if the preview will expand in a different row
                previewPos = -1,
                // extra amount of pixels to scroll the window
                scrollExtra = 0,
                // extra margin when expanded (between preview overlay and the next items)
                marginExpanded = 10,
                $window = $(window), winsize,
                $body = $('html, body'),
                // transitionend events
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                },
        transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ],
                // support for csstransitions
                support = Modernizr.csstransitions,
                // default settings
                settings = {
                    minHeight: 500,
                    speed: 350,
                    easing: 'ease'
                };
        function init(config) {
            //$grid = gu;
            // the settings..
            settings = $.extend(true, {}, settings, config);
            // preload all images
            $grid.imagesLoaded(function() {

                // save itemÂ´s size and offset
                saveItemInfo(true);
                // get windowÂ´s size
                getWinSize();
                // initialize some events
                initEvents();
            });
        }

        // add more items to the grid.
        // the new items need to appended to the grid.
        // after that call Grid.addItems(theItems);
        function addItems($newitems) {

            $items = $items.add($newitems);
            $newitems.each(function() {
                var $item = $(this);
                $item.data({
                    offsetTop: $item.offset().top,
                    height: $item.height()
                });
            });
            initItemsEvents($newitems);
        }

        // saves the itemÂ´s offset top and height (if saveheight is true)
        function saveItemInfo(saveheight) {
            $items.each(function() {
                var $item = $(this);
                $item.data('offsetTop', $item.offset().top);
                if (saveheight) {
                    $item.data('height', $item.height());
                }
            });
        }

        function initEvents() {

            // when clicking an item, show the preview with the itemÂ´s info and large image.
            // close the item if already expanded.
            // also close if clicking on the itemÂ´s cross
            initItemsEvents($items);
            // on window resize get the windowÂ´s size again
            // reset some values..
            $window.on('debouncedresize', function() {

                scrollExtra = 0;
                previewPos = -1;
                // save itemÂ´s offset
                saveItemInfo();
                getWinSize();
                var preview = $.data(this, 'preview');
                if (typeof preview != 'undefined') {
                    hidePreview();
                }

            });
        }

        function initItemsEvents($items) {
            $items.on('click', 'span.og-close', function() {
                hidePreview();
                return false;
            }).find('.spreview').on('click', function(e) {

                var $item = $(this).parent().parent();
                // check if item already opened
                current === $item.index() ? hidePreview() : showPreview($item);
                return false;
            });
        }

        function getWinSize() {
            winsize = {width: $window.width(), height: $window.height()};
        }

        function showPreview($item) {

            var preview = $.data(this, 'preview'),
                    // itemÂ´s offset top
                    position = $item.data('offsetTop');
            scrollExtra = 0;
            // if a preview exists and previewPos is different (different row) from itemÂ´s top then close it
            if (typeof preview != 'undefined') {

                // not in the same row
                if (previewPos !== position) {
                    // if position > previewPos then we need to take te current previewÂ´s height in consideration when scrolling the window
                    if (position > previewPos) {
                        scrollExtra = preview.height;
                    }
                    hidePreview();
                }
                // same row
                else {
                    preview.update($item);
                    return false;
                }

            }

            // update previewPos
            previewPos = position;
            // initialize new preview for the clicked item
            preview = $.data(this, 'preview', new Preview($item));
            // expand preview overlay
            preview.open();
        }

        function hidePreview() {
            current = -1;
            var preview = $.data(this, 'preview');
            preview.close();
            $.removeData(this, 'preview');
        }

        // the preview obj / overlay
        function Preview($item) {
            this.$item = $item;
            this.expandedIdx = this.$item.index();
            this.create();
            this.update();
        }

        Preview.prototype = {
            create: function() {
                // create Preview structure:
                //this.$title = $('<h3></h3>');
                this.$description = $('<div></div>');
                //this.$href = $('<a href="#">Ir a Facultad</a>');
                this.$details = $('<div class="og-details"></div>').append(this.$description);
                this.$loading = $('<div class="og-loading"></div>');
                //this.$fullimage = $('<div class="og-fullimg"></div>').append(this.$loading);
                this.$closePreview = $('<span class="og-close"></span>');
                this.$previewInner = $('<div class="og-expander-inner"></div>').append(this.$closePreview, this.$details);
                this.$previewEl = $('<div class="og-expander"></div>').append(this.$previewInner);
                // append preview element to the item
                this.$item.append(this.getEl());
                // set the transitions for the preview and the item
                if (support) {
                    this.setTransition();
                }
            },
            update: function($item) {

                if ($item) {
                    this.$item = $item;
                }

                // if already expanded remove class "og-expanded" from current item and add it to new item
                if (current !== -1) {
                    var $currentItem = $items.eq(current);
                    $currentItem.removeClass('og-expanded');
                    this.$item.addClass('og-expanded');
                    // position the preview correctly
                    this.positionPreview();
                }

                // update current value
                current = this.$item.index();
                // update previewÂ´s content
                var eldata = {
                    description: this.$item.find('.detailx').html()
                };
                this.$description.html(eldata.description);
                /* var self = this;
                 // remove the current image in the preview
                 if (typeof self.$largeImg != 'undefined') {
                 self.$largeImg.remove();
                 }
                 
                 // preload large image and add it to the preview
                 // for smaller screens we donÂ´t display the large image (the media query will hide the fullimage wrapper)
                 if (self.$fullimage.is(':visible')) {
                 this.$loading.show();
                 $('<img/>').load(function() {
                 var $img = $(this);
                 if ($img.attr('src') === self.$item.children('a').data('largesrc')) {
                 self.$loading.hide();
                 self.$fullimage.find('img').remove();
                 self.$largeImg = $img.fadeIn(350);
                 self.$fullimage.append(self.$largeImg);
                 }
                 }).attr('src', eldata.largesrc);
                 }*/

            },
            open: function() {

                setTimeout($.proxy(function() {
                    // set the height for the preview and the item
                    this.setHeights();
                    // scroll to position the preview in the right place
                    this.positionPreview();
                }, this), 25);
            },
            close: function() {

                var self = this,
                        onEndFn = function() {
                            if (support) {
                                $(this).off(transEndEventName);
                            }
                            self.$item.removeClass('og-expanded');
                            self.$previewEl.remove();
                        };
                setTimeout($.proxy(function() {

                    if (typeof this.$largeImg !== 'undefined') {
                        this.$largeImg.fadeOut('fast');
                    }
                    this.$previewEl.css('height', 0);
                    // the current expanded item (might be different from this.$item)
                    var $expandedItem = $items.eq(this.expandedIdx);
                    $expandedItem.css('height', $expandedItem.data('height')).on(transEndEventName, onEndFn);
                    if (!support) {
                        onEndFn.call();
                    }

                }, this), 25);
                return false;
            },
            calcHeight: function() {

                var heightPreview = winsize.height - this.$item.data('height') - marginExpanded,
                        itemHeight = winsize.height;
                if (heightPreview < settings.minHeight) {
                    heightPreview = settings.minHeight;
                    itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;
                }

                this.height = heightPreview;
                this.itemHeight = itemHeight;
            },
            setHeights: function() {

                var self = this,
                        onEndFn = function() {
                            if (support) {
                                self.$item.off(transEndEventName);
                            }
                            self.$item.addClass('og-expanded');
                        };
                this.calcHeight();
                this.$previewEl.css('height', this.height);
                this.$item.css('height', this.itemHeight).on(transEndEventName, onEndFn);
                if (!support) {
                    onEndFn.call();
                }

            },
            positionPreview: function() {

                // scroll page
                // case 1 : preview height + item height fits in windowÂ´s height
                // case 2 : preview height + item height does not fit in windowÂ´s height and preview height is smaller than windowÂ´s height
                // case 3 : preview height + item height does not fit in windowÂ´s height and preview height is bigger than windowÂ´s height
                var position = this.$item.data('offsetTop'),
                        previewOffsetT = this.$previewEl.offset().top - scrollExtra,
                        scrollVal = this.height + this.$item.data('height') + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - (winsize.height - this.height) : previewOffsetT;
                $body.animate({scrollTop: scrollVal}, settings.speed);
            },
            setTransition: function() {
                this.$previewEl.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
                this.$item.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
            },
            getEl: function() {
                return this.$previewEl;
            }
        }

        // init(); //start facultades grid detail slice
    });

    /* return {
     init: init,
     addItems: addItems
     };*/


})();
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="parallax tom clancy">

/* PARALLAX */
!function(t, i, e) {
    "use strict";
    function s(t, i) {
        this.element = t, this.layers = t.getElementsByClassName("layer");
        var e = {calibrateX: this.data(this.element, "calibrate-x"), calibrateY: this.data(this.element, "calibrate-y"), invertX: this.data(this.element, "invert-x"), invertY: this.data(this.element, "invert-y"), limitX: this.data(this.element, "limit-x"), limitY: this.data(this.element, "limit-y"), scalarX: this.data(this.element, "scalar-x"), scalarY: this.data(this.element, "scalar-y"), frictionX: this.data(this.element, "friction-x"), frictionY: this.data(this.element, "friction-y"), originX: this.data(this.element, "origin-x"), originY: this.data(this.element, "origin-y")};
        for (var s in e)
            null === e[s] && delete e[s];
        this.extend(this, r, i, e), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var n = "Parallax", o = 30, r = {relativeInput: !1, clipRelativeInput: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5};
    s.prototype.extend = function() {
        if (arguments.length > 1)
            for (var t = arguments[0], i = 1, e = arguments.length; e > i; i++) {
                var s = arguments[i];
                for (var n in s)
                    t[n] = s[n]
            }
    }, s.prototype.data = function(t, i) {
        return this.deserialize(t.getAttribute("data-" + i))
    }, s.prototype.deserialize = function(t) {
        return"true" === t ? !0 : "false" === t ? !1 : "null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t
    }, s.prototype.camelCase = function(t) {
        return t.replace(/-+(.)?/g, function(t, i) {
            return i ? i.toUpperCase() : ""
        })
    }, s.prototype.transformSupport = function(s) {
        for (var n = i.createElement("div"), o = !1, r = null, a = !1, h = null, l = null, p = 0, c = this.vendors.length; c > p; p++)
            if (null !== this.vendors[p] ? (h = this.vendors[p][0] + "transform", l = this.vendors[p][1] + "Transform") : (h = "transform", l = "transform"), n.style[l] !== e) {
                o = !0;
                break
            }
        switch (s) {
            case"2D":
                a = o;
                break;
            case"3D":
                if (o) {
                    var m = i.body || i.createElement("body"), u = i.documentElement, y = u.style.overflow;
                    i.body || (u.style.overflow = "hidden", u.appendChild(m), m.style.overflow = "hidden", m.style.background = ""), m.appendChild(n), n.style[l] = "translate3d(1px,1px,1px)", r = t.getComputedStyle(n).getPropertyValue(h), a = r !== e && r.length > 0 && "none" !== r, u.style.overflow = y, m.removeChild(n)
                }
        }
        return a
    }, s.prototype.ww = null, s.prototype.wh = null, s.prototype.wcx = null, s.prototype.wcy = null, s.prototype.wrx = null, s.prototype.wry = null, s.prototype.portrait = null, s.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), s.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], s.prototype.motionSupport = !!t.DeviceMotionEvent, s.prototype.orientationSupport = !!t.DeviceOrientationEvent, s.prototype.orientationStatus = 0, s.prototype.transform2DSupport = s.prototype.transformSupport("2D"), s.prototype.transform3DSupport = s.prototype.transformSupport("3D"), s.prototype.propertyCache = {}, s.prototype.initialise = function() {
        this.transform3DSupport && this.accelerate(this.element);
        var i = t.getComputedStyle(this.element);
        "static" === i.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, s.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
        for (var t = 0, i = this.layers.length; i > t; t++) {
            var e = this.layers[t];
            this.transform3DSupport && this.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0, this.depths.push(this.data(e, "depth") || 0)
        }
    }, s.prototype.updateDimensions = function() {
        this.ww = t.innerWidth, this.wh = t.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, s.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, s.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, s.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, t.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, t.addEventListener("mousemove", this.onMouseMove)), t.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, s.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? t.removeEventListener("deviceorientation", this.onDeviceOrientation) : t.removeEventListener("mousemove", this.onMouseMove), t.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, s.prototype.calibrate = function(t, i) {
        this.calibrateX = t === e ? this.calibrateX : t, this.calibrateY = i === e ? this.calibrateY : i
    }, s.prototype.invert = function(t, i) {
        this.invertX = t === e ? this.invertX : t, this.invertY = i === e ? this.invertY : i
    }, s.prototype.friction = function(t, i) {
        this.frictionX = t === e ? this.frictionX : t, this.frictionY = i === e ? this.frictionY : i
    }, s.prototype.scalar = function(t, i) {
        this.scalarX = t === e ? this.scalarX : t, this.scalarY = i === e ? this.scalarY : i
    }, s.prototype.limit = function(t, i) {
        this.limitX = t === e ? this.limitX : t, this.limitY = i === e ? this.limitY : i
    }, s.prototype.origin = function(t, i) {
        this.originX = t === e ? this.originX : t, this.originY = i === e ? this.originY : i
    }, s.prototype.clamp = function(t, i, e) {
        return t = Math.max(t, i), t = Math.min(t, e)
    }, s.prototype.css = function(t, i, s) {
        var n = this.propertyCache[i];
        if (!n)
            for (var o = 0, r = this.vendors.length; r > o; o++)
                if (n = null !== this.vendors[o] ? this.camelCase(this.vendors[o][1] + "-" + i) : i, t.style[n] !== e) {
                    this.propertyCache[i] = n;
                    break
                }
        t.style[n] = s
    }, s.prototype.accelerate = function(t) {
        this.css(t, "transform", "translate3d(0,0,0)"), this.css(t, "transform-style", "preserve-3d"), this.css(t, "backface-visibility", "hidden")
    }, s.prototype.setPosition = function(t, i, e) {
        i += "px", e += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + i + "," + e + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + i + "," + e + ")") : (t.style.left = i, t.style.top = e)
    }, s.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, s.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }, s.prototype.onWindowResize = function() {
        this.updateDimensions()
    }, s.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx, i = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(i) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? i : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? i : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var e = 0, s = this.layers.length; s > e; e++) {
            var n = this.layers[e], o = this.depths[e], r = this.vx * o * (this.invertX ? -1 : 1), a = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(n, r, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, s.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / o, e = (t.gamma || 0) / o, s = this.wh > this.ww;
            this.portrait !== s && (this.portrait = s, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = e), this.ix = i, this.iy = e
        }
    }, s.prototype.onMouseMove = function(t) {
        var i = t.clientX, e = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (i = Math.max(i, this.ex), i = Math.min(i, this.ex + this.ew), e = Math.max(e, this.ey), e = Math.min(e, this.ey + this.eh)), this.ix = (i - this.ex - this.ecx) / this.erx, this.iy = (e - this.ey - this.ecy) / this.ery) : (this.ix = (i - this.wcx) / this.wrx, this.iy = (e - this.wcy) / this.wry)
    }, t[n] = s
}(window, document), function() {
    for (var t = 0, i = ["ms", "moz", "webkit", "o"], e = 0; e < i.length && !window.requestAnimationFrame; ++e)
        window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(i) {
        var e = (new Date).getTime(), s = Math.max(0, 16 - (e - t)), n = window.setTimeout(function() {
            i(e + s)
        }, s);
        return t = e + s, n
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}();
/******************/
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="metro tabs control">
(function(c) {
    c.widget("metro.tabcontrol", {version: "1.0.0", options: {effect: "none", activateStoredTab: !1, tabclick: function(a) {
            }, tabchange: function(a) {
            }}, _create: function() {
            var a = this, b = this.element, d = c(b.children(".tabs")).children("li"), e = c(b.children(".frames")).children(".frame"), f = b.attr("id");
            void 0 != b.data("effect") && (this.options.effect = b.data("effect"));
            this.init(d, e);
            d.each(function() {
                var b = c(this).children("a");
                b.on("click", function(h) {
                    h.preventDefault();
                    a.options.tabclick(this);
                    if (c(this).parent().hasClass("disabled"))
                        return!1;
                    d.removeClass("active");
                    b.parent("li").addClass("active");
                    e.hide();
                    var e1 = e.data('anim');
                    e.find('a').removeClass(e1);
                    h = c(b.attr("href"));
                    switch (a.options.effect) {
                        case "slide":
                            h.slideDown();
                            break;
                        case "fade":
                            h.fadeIn();
                            break;
                        default:
                            h.show()
                    }

                    var e2 = h.data('anim');
                    var w = h.find('a');
                    if (e2 !== undefined && w.width() !== null) {
                        w.addClass('animated ' + e2);
                        setTimeout(function() {
                            w.removeClass('animated ' + e2);
                        }, 1000)
                    }
                    a._trigger("change", null, h);
                    a.options.tabchange(this);
                    void 0 != f && window.localStorage.setItem(f + "-current-tab", c(this).attr("href"))
                })
            });
            this.options.activateStoredTab && this._activateStoredTab(d)
        }, init: function(a, b) {
            var d = this;
            a.each(function() {
                if (c(this).hasClass("active")) {
                    var a = c(c(c(this).children("a")).attr("href"));
                    b.hide();
                    a.show();
                    d._trigger("change", null, a)
                }
            })
        }, _activateStoredTab: function(a) {
            var b = window.localStorage.getItem(this.element.attr("id") + "-current-tab");
            void 0 != b && a.each(function() {
                var a = c(this).children("a");
                a.attr("href") == b && a.click()
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.hint", {version: "1.0.0", options: {position: "bottom", background: "#FFFCC0", shadow: !1, border: !1, _hint: void 0}, _create: function() {
            var a = this, b = this.options;
            this.element.on("mouseenter", function(c) {
                a.createHint();
                b._hint.stop().fadeIn();
                c.preventDefault()
            });
            this.element.on("mouseleave", function(a) {
                b._hint.stop().fadeOut(function() {
                    b._hint.remove()
                });
                a.preventDefault()
            })
        }, createHint: function() {
            var a = this.element, b = a.data("hint").split("|"), d = this.options;
            void 0 != a.data("hintPosition") &&
                    (d.position = a.data("hintPosition"));
            void 0 != a.data("hintBackground") && (d.background = a.data("hintBackground"));
            void 0 != a.data("hintShadow") && (d.shadow = a.data("hintShadow"));
            void 0 != a.data("hintBorder") && (d.border = a.data("hintBorder"));
            if ("TD" == a[0].tagName || "TH" == a[0].tagName) {
                var e = c("<div/>").css("display", "inline-block").html(a.html());
                a.html(e);
                a = e
            }
            var e = 1 < b.length ? b[0] : !1, f = 1 < b.length ? b[1] : b[0], b = c("<div/>").addClass("hint").appendTo("body");
            e && c("<div/>").addClass("hint-title").html(e).appendTo(b);
            c("<div/>").addClass("hint-text").html(f).appendTo(b);
            b.addClass(d.position);
            d.shadow && b.addClass("shadow");
            d.background && b.css("background-color", d.background);
            d.border && b.css("border-color", d.border);
            "top" == d.position ? b.css({top: a.offset().top - c(window).scrollTop() - b.outerHeight() - 20, left: a.offset().left - c(window).scrollLeft()}) : "bottom" == d.position ? b.css({top: a.offset().top - c(window).scrollTop() + a.outerHeight(), left: a.offset().left - c(window).scrollLeft()}) : "right" == d.position ? b.css({top: a.offset().top -
                        10 - c(window).scrollTop(), left: a.offset().left + a.outerWidth() + 10 - c(window).scrollLeft()}) : "left" == d.position && b.css({top: a.offset().top - 10 - c(window).scrollTop(), left: a.offset().left - b.outerWidth() - 10 - c(window).scrollLeft()});
            d._hint = b
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function($) {
    $.widget("metro.accordion", {
        version: "1.0.0",
        options: {
            closeAny: true,
            open: function(frame) {
            },
            action: function(frame) {
            }
        },
        _frames: {},
        _create: function() {
            var element = this.element;
            if (element.data('closeany') != undefined)
                this.options.closeAny = element.data('closeany');
            this.init();
        },
        init: function() {
            var that = this;
            that.element.on('click', '.accordion-frame > .heading', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).attr('disabled') || $(this).data('action') == 'none')
                    return;
                if (that.options.closeAny)
                    that._closeFrames();
                var frame = $(this).parent(), content = frame.children('.contentx2');
                console.log(this);
                if ($(content).is(":hidden")) {
                    //$(content).slideDown();
                    $(this).removeClass("collapsed");
                    that._trigger("frame", e, {frame: frame});
                    that.options.open(frame);
                } else {
                    //$(content).slideUp();
                    $(this).addClass("collapsed");
                }
                that.options.action(frame);
            });
            var frames = this.element.children('.accordion-frame');
            frames.each(function() {
                var frame = this,
                        a = $(this).children(".heading"),
                        content = $(this).children(".contentx2");
                if ($(frame).hasClass("active") && !$(frame).attr('disabled') && $(frame).data('action') != 'none') {
                    //$(content).show();
                    $(a).removeClass("collapsed");
                } else {
                    $(a).addClass("collapsed");
                }
            });
        },
        _closeFrames: function() {
            var frames = this.element.children('.accordion-frame');
            $.each(frames, function() {
                var frame = $(this);
                frame.children('.heading').addClass('collapsed');
                // frame.children('.contentx2').slideUp();
            });
            //this._frames.children(".content").slideUp().parent().children('.heading').addClass("collapsed");
        },
        _destroy: function() {
        },
        _setOption: function(key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);
(function($) {
    $.widget("metro.panel", {
        version: "1.0.0",
        options: {
            onCollapse: function() {
            },
            onExpand: function() {
            }
        },
        _create: function() {
            var element = this.element, o = this.options,
                    header = element.children('.panel-header'),
                    content = element.children('.panel-content');
            header.on('click', function() {
                content.slideToggle(
                        'fast',
                        function() {
                            element.toggleClass('collapsed');
                            if (element.hasClass('collapsed')) {
                                o.onCollapse();
                            } else {
                                o.onExpand();
                            }
                        }
                );
            });
            if (element.hasClass('start-collapsed')) {
                header.click();
            }
        },
        _destroy: function() {

        },
        _setOption: function(key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);
(function($) {
    /*
     * Init or ReInit components
     * */
    $.Metro = function(params) {
        params = $.extend({
        }, params);
    };
    $.Metro.initTabs = function(area) {
        if (area != undefined) {
            $(area).find('[data-role=tab-control]').tabcontrol();
        } else {
            $('[data-role=tab-control]').tabcontrol();
        }
    };
    $.Metro.initHints = function(a) {
        void 0 != a ? $(a).find("[data-hint]").hint() : $("[data-hint]").hint()
    };
    $.Metro.initAccordions = function(area) {
        if (area != undefined) {
            $(area).find('[data-role=accordion]').accordion();
        } else {
            $('[data-role=accordion]').accordion();
        }
    };
    $.Metro.initPanels = function(area) {
        if (area != undefined) {
            $(area).find('[data-role=panel]').panel();
        }
        {
            $('[data-role=panel]').panel();
        }
    };
    $.Metro.initAll = function(area) {
        $.Metro.initTabs(area);
        $.Metro.initHints(area);
        $.Metro.initPanels(area);
        //$.Metro.initAccordions(area);

    }
})(jQuery);
$(function() {
    $.Metro.initAll();
});
METRO_AUTO_REINIT = false;
$(function() {
    if (METRO_AUTO_REINIT) {
        //$(".metro").bind('DOMSubtreeModified', function(){            $.Metro.initAll();        });
        var originalDOM = $('.metro').html(),
                actualDOM;
        setInterval(function() {
            actualDOM = $('.metro').html();
            if (originalDOM !== actualDOM) {
                originalDOM = actualDOM;
                $.Metro.initAll();
            }
        }, 500);
    }
});
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="perfect-scrollbar">
(function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
})(function(e) {
    "use strict";
    var t = {wheelSpeed: 1, wheelPropagation: !1, minScrollbarLength: null, maxScrollbarLength: null, useBothWheelAxes: !1, useKeyboard: !0, suppressScrollX: !1, suppressScrollY: !1, scrollXMarginOffset: 0, scrollYMarginOffset: 0, includePadding: !1}, o = function() {
        var e = 0;
        return function() {
            var t = e;
            return e += 1, ".perfect-scrollbar-" + t
        }
    }();
    e.fn.perfectScrollbar = function(n, r) {
        return this.each(function() {
            var l = e.extend(!0, {}, t), a = e(this);
            if ("object" == typeof n ? e.extend(!0, l, n) : r = n, "update" === r)
                return a.data("perfect-scrollbar-update") && a.data("perfect-scrollbar-update")(), a;
            if ("destroy" === r)
                return a.data("perfect-scrollbar-destroy") && a.data("perfect-scrollbar-destroy")(), a;
            if (a.data("perfect-scrollbar"))
                return a.data("perfect-scrollbar");
            a.addClass("ps-container");
            var s, i, c, d, u, p, f, v, h, b, g = e("<div class='ps-scrollbar-x-rail'></div>").appendTo(a), m = e("<div class='ps-scrollbar-y-rail'></div>").appendTo(a), w = e("<div class='ps-scrollbar-x'></div>").appendTo(g), T = e("<div class='ps-scrollbar-y'></div>").appendTo(m), L = parseInt(g.css("bottom"), 10), y = L === L, I = y ? null : parseInt(g.css("top"), 10), S = parseInt(m.css("right"), 10), C = S === S, x = C ? null : parseInt(m.css("left"), 10), D = "rtl" === a.css("direction"), X = o(), Y = parseInt(g.css("borderLeftWidth"), 10) + parseInt(g.css("borderRightWidth"), 10), P = parseInt(g.css("borderTopWidth"), 10) + parseInt(g.css("borderBottomWidth"), 10), k = function(e, t) {
                var o = e + t, n = d - h;
                b = 0 > o ? 0 : o > n ? n : o;
                var r = parseInt(b * (p - d) / (d - h), 10);
                a.scrollTop(r)
            }, E = function(e, t) {
                var o = e + t, n = c - f;
                v = 0 > o ? 0 : o > n ? n : o;
                var r = parseInt(v * (u - c) / (c - f), 10);
                a.scrollLeft(r)
            }, M = function(e) {
                return l.minScrollbarLength && (e = Math.max(e, l.minScrollbarLength)), l.maxScrollbarLength && (e = Math.min(e, l.maxScrollbarLength)), e
            }, W = function() {
                var e = {width: c, display: s ? "inherit" : "none"};
                e.left = D ? a.scrollLeft() + c - u : a.scrollLeft(), y ? e.bottom = L - a.scrollTop() : e.top = I + a.scrollTop(), g.css(e);
                var t = {top: a.scrollTop(), height: d, display: i ? "inherit" : "none"};
                C ? t.right = D ? u - a.scrollLeft() - S - T.outerWidth() : S - a.scrollLeft() : t.left = D ? a.scrollLeft() + 2 * c - u - x - T.outerWidth() : x + a.scrollLeft(), m.css(t), w.css({left: v, width: f - Y}), T.css({top: b, height: h - P}), s ? a.addClass("ps-active-x") : a.removeClass("ps-active-x"), i ? a.addClass("ps-active-y") : a.removeClass("ps-active-y")
            }, j = function() {
                g.hide(), m.hide(), c = l.includePadding ? a.innerWidth() : a.width(), d = l.includePadding ? a.innerHeight() : a.height(), u = a.prop("scrollWidth"), p = a.prop("scrollHeight"), !l.suppressScrollX && u > c + l.scrollXMarginOffset ? (s = !0, f = M(parseInt(c * c / u, 10)), v = parseInt(a.scrollLeft() * (c - f) / (u - c), 10)) : (s = !1, f = 0, v = 0, a.scrollLeft(0)), !l.suppressScrollY && p > d + l.scrollYMarginOffset ? (i = !0, h = M(parseInt(d * d / p, 10)), b = parseInt(a.scrollTop() * (d - h) / (p - d), 10)) : (i = !1, h = 0, b = 0, a.scrollTop(0)), b >= d - h && (b = d - h), v >= c - f && (v = c - f), W(), l.suppressScrollX || g.show(), l.suppressScrollY || m.show()
            }, O = function() {
                var t, o;
                w.bind("mousedown" + X, function(e) {
                    o = e.pageX, t = w.position().left, g.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
                }), e(document).bind("mousemove" + X, function(e) {
                    g.hasClass("in-scrolling") && (E(t, e.pageX - o), j(), e.stopPropagation(), e.preventDefault())
                }), e(document).bind("mouseup" + X, function() {
                    g.hasClass("in-scrolling") && g.removeClass("in-scrolling")
                }), t = o = null
            }, q = function() {
                var t, o;
                T.bind("mousedown" + X, function(e) {
                    o = e.pageY, t = T.position().top, m.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
                }), e(document).bind("mousemove" + X, function(e) {
                    m.hasClass("in-scrolling") && (k(t, e.pageY - o), j(), e.stopPropagation(), e.preventDefault())
                }), e(document).bind("mouseup" + X, function() {
                    m.hasClass("in-scrolling") && m.removeClass("in-scrolling")
                }), t = o = null
            }, A = function(e, t) {
                var o = a.scrollTop();
                if (0 === e) {
                    if (!i)
                        return!1;
                    if (0 === o && t > 0 || o >= p - d && 0 > t)
                        return!l.wheelPropagation
                }
                var n = a.scrollLeft();
                if (0 === t) {
                    if (!s)
                        return!1;
                    if (0 === n && 0 > e || n >= u - c && e > 0)
                        return!l.wheelPropagation
                }
                return!0
            }, B = function() {
                var e = !1, t = function(e) {
                    var t = e.originalEvent.deltaX, o = -1 * e.originalEvent.deltaY;
                    return(t === void 0 || o === void 0) && (t = -1 * e.originalEvent.wheelDeltaX / 6, o = e.originalEvent.wheelDeltaY / 6), e.originalEvent.deltaMode && 1 === e.originalEvent.deltaMode && (t *= 10, o *= 10), t !== t && o !== o && (t = 0, o = e.originalEvent.wheelDelta), [t, o]
                }, o = function(o) {
                    var n = t(o), r = n[0], c = n[1];
                    e = !1, l.useBothWheelAxes ? i && !s ? (c ? a.scrollTop(a.scrollTop() - c * l.wheelSpeed) : a.scrollTop(a.scrollTop() + r * l.wheelSpeed), e = !0) : s && !i && (r ? a.scrollLeft(a.scrollLeft() + r * l.wheelSpeed) : a.scrollLeft(a.scrollLeft() - c * l.wheelSpeed), e = !0) : (a.scrollTop(a.scrollTop() - c * l.wheelSpeed), a.scrollLeft(a.scrollLeft() + r * l.wheelSpeed)), j(), e = e || A(r, c), e && (o.stopPropagation(), o.preventDefault())
                };
                window.onwheel !== void 0 ? a.bind("wheel" + X, o) : window.onmousewheel !== void 0 && a.bind("mousewheel" + X, o)
            }, H = function() {
                var t = !1;
                a.bind("mouseenter" + X, function() {
                    t = !0
                }), a.bind("mouseleave" + X, function() {
                    t = !1
                });
                var o = !1;
                e(document).bind("keydown" + X, function(n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || !t || e(document.activeElement).is(":input,[contenteditable]"))) {
                        var r = 0, l = 0;
                        switch (n.which) {
                            case 37:
                                r = -30;
                                break;
                            case 38:
                                l = 30;
                                break;
                            case 39:
                                r = 30;
                                break;
                            case 40:
                                l = -30;
                                break;
                            case 33:
                                l = 90;
                                break;
                            case 32:
                            case 34:
                                l = -90;
                                break;
                            case 35:
                                l = -d;
                                break;
                            case 36:
                                l = d;
                                break;
                            default:
                                return
                        }
                        a.scrollTop(a.scrollTop() - l), a.scrollLeft(a.scrollLeft() + r), o = A(r, l), o && n.preventDefault()
                    }
                })
            }, K = function() {
                var e = function(e) {
                    e.stopPropagation()
                };
                T.bind("click" + X, e), m.bind("click" + X, function(e) {
                    var t = parseInt(h / 2, 10), o = e.pageY - m.offset().top - t, n = d - h, r = o / n;
                    0 > r ? r = 0 : r > 1 && (r = 1), a.scrollTop((p - d) * r)
                }), w.bind("click" + X, e), g.bind("click" + X, function(e) {
                    var t = parseInt(f / 2, 10), o = e.pageX - g.offset().left - t, n = c - f, r = o / n;
                    0 > r ? r = 0 : r > 1 && (r = 1), a.scrollLeft((u - c) * r)
                })
            }, Q = function() {
                var t = function(e, t) {
                    a.scrollTop(a.scrollTop() - t), a.scrollLeft(a.scrollLeft() - e), j()
                }, o = {}, n = 0, r = {}, l = null, s = !1;
                e(window).bind("touchstart" + X, function() {
                    s = !0
                }), e(window).bind("touchend" + X, function() {
                    s = !1
                }), a.bind("touchstart" + X, function(e) {
                    var t = e.originalEvent.targetTouches[0];
                    o.pageX = t.pageX, o.pageY = t.pageY, n = (new Date).getTime(), null !== l && clearInterval(l), e.stopPropagation()
                }), a.bind("touchmove" + X, function(e) {
                    if (!s && 1 === e.originalEvent.targetTouches.length) {
                        var l = e.originalEvent.targetTouches[0], a = {};
                        a.pageX = l.pageX, a.pageY = l.pageY;
                        var i = a.pageX - o.pageX, c = a.pageY - o.pageY;
                        t(i, c), o = a;
                        var d = (new Date).getTime(), u = d - n;
                        u > 0 && (r.x = i / u, r.y = c / u, n = d), e.preventDefault()
                    }
                }), a.bind("touchend" + X, function() {
                    clearInterval(l), l = setInterval(function() {
                        return.01 > Math.abs(r.x) && .01 > Math.abs(r.y) ? (clearInterval(l), void 0) : (t(30 * r.x, 30 * r.y), r.x *= .8, r.y *= .8, void 0)
                    }, 10)
                })
            }, R = function() {
                a.bind("scroll" + X, function() {
                    j()
                })
            }, z = function() {
                a.unbind(X), e(window).unbind(X), e(document).unbind(X), a.data("perfect-scrollbar", null), a.data("perfect-scrollbar-update", null), a.data("perfect-scrollbar-destroy", null), w.remove(), T.remove(), g.remove(), m.remove(), g = m = w = T = s = i = c = d = u = p = f = v = L = y = I = h = b = S = C = x = D = X = null
            }, F = function(t) {
                a.addClass("ie").addClass("ie" + t);
                var o = function() {
                    var t = function() {
                        e(this).addClass("hover")
                    }, o = function() {
                        e(this).removeClass("hover")
                    };
                    a.bind("mouseenter" + X, t).bind("mouseleave" + X, o), g.bind("mouseenter" + X, t).bind("mouseleave" + X, o), m.bind("mouseenter" + X, t).bind("mouseleave" + X, o), w.bind("mouseenter" + X, t).bind("mouseleave" + X, o), T.bind("mouseenter" + X, t).bind("mouseleave" + X, o)
                }, n = function() {
                    W = function() {
                        var e = {left: v + a.scrollLeft(), width: f};
                        y ? e.bottom = L : e.top = I, w.css(e);
                        var t = {top: b + a.scrollTop(), height: h};
                        C ? t.right = S : t.left = x, T.css(t), w.hide().show(), T.hide().show()
                    }
                };
                6 === t && (o(), n())
            }, G = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch, J = function() {
                var e = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
                e && "msie" === e[1] && F(parseInt(e[2], 10)), j(), R(), O(), q(), K(), B(), G && Q(), l.useKeyboard && H(), a.data("perfect-scrollbar", a), a.data("perfect-scrollbar-update", j), a.data("perfect-scrollbar-destroy", z)
            };
            return J(), a
        })
    }
});
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Scroll Spy, current:checkviewport">

/*
 Version 1.5.0
 The MIT License (MIT)
 
 Copyright (c) 2014 Dirk Groenen
 
 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 */

(function($) {
    $.fn.viewportChecker = function(useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            repeat: false,
            callbackFunction: function(elem, action) {
            },
            scrollHorizontal: false
        };
        $.extend(options, useroptions);
        // Cache the given element and height of the browser
        var $elem = this,
                windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
                scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        this.checkElements = function() {

            var viewportTop = $(scrollElem).scrollTop(),
                    viewportBottom = (viewportTop + windowSize);

            $elem.each(function() {
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd) && !options.repeat) {
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = (!options.scrollHorizontal) ? Math.round($obj.offset().top) + options.offset : Math.round($obj.offset().left) + options.offset,
                        elemBottom = elemTop + ($obj.height());
                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
                    $obj.addClass(options.classToAdd);
                    // Do the callback function. Callback wil send the jQuery object as parameter
                    options.callbackFunction($obj, "add");
                    // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(options.classToAdd) && (options.repeat)) {
                    $obj.removeClass(options.classToAdd);
                    // Do the callback function.
                    options.callbackFunction($obj, "remove");
                }
            });
        };
        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", this.checkElements);
        // On resize change the height var
        $(window).resize(function(e) {
            windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        });
        // trigger inital check if elements already visible
        this.checkElements();
        return this;
    };
})(jQuery);
(function($) {
    $.fn.slideCheck = function(useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'active',
            offset: 200,
            repeat: true,
            callbackFunction: function(elem, action) {
            },
            scrollHorizontal: false
        };
        $.extend(options, useroptions);
        // Cache the given element and height of the browser
        var $elem = this,
                windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
                scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        this.checkSlides = function() {

            var viewportTop = $(scrollElem).scrollTop(),
                    viewportBottom = (viewportTop + windowSize);

            $elem.each(function() {
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd) && !options.repeat) {
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = (!options.scrollHorizontal) ? Math.round($obj.offset().top) + options.offset : Math.round($obj.offset().left) + options.offset,
                        elemBottom = elemTop + ($obj.height());
                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
                    $obj.addClass(options.classToAdd);
                    $('a.toSlide').parent().removeClass("current");
                    $('#navigation li a[data-slide="' + $obj.data("slide") + '"]').parent().addClass('current');
                    // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(options.classToAdd) && (options.repeat)) {
                    $obj.removeClass(options.classToAdd);

                }
            });
        };
        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", this.checkSlides);
        // On resize change the height var
        $(window).resize(function(e) {
            windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        });
        // trigger inital check if elements already visible
        this.checkSlides();
        return this;
    };
})(jQuery);
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="parallax skrollr">
//</editor-fold>

$(window).load(function() {
//scroll pagination
    if (window.location.search.indexOf("page=") > -1) {
        var q = $('.slide[data-slide="' + 2 + '"]').offset().top;
        htmlbody.animate({
            scrollTop: q
        }, 3000, 'easeInOutBack');
    }
//featured isotope
    var $container3 = jQuery('div.isofeatured'), $colnum;
    $container3.isotope({
        // options
        itemSelector: '.isobrick',
        layoutMode: 'masonry', masonry: {
            columnWidth: 5, isFitWidth: true
        }
    });

    jQuery(window).resize(function() {
        $container3.isotope({
            // options
            itemSelector: '.isobrick',
            layoutMode: 'masonry', masonry: {
                columnWidth: 5, isFitWidth: true
            }
        });

        $('.va-container').css({width: $($('.one_col.half .featuredinner')[0]).width(), height: $('.va-container').height()});

    });
    $(function() {
        $('.va-container').vaccordion({
            expandedHeight: 270,
            //animSpeed: 400,
            animOpacity: 0.7,
            visibleSlices: 4,
            accordionW: $('.va-container').outerWidth(),
            accordionH: $('.va-container').outerHeight(),
        });
        /* destroyCrappyPlugin($('.va-container'),'vaccordion');
         destroyCrappyPlugin($('.va-container'),'clic.vaccordion');
         destroyCrappyPlugin($('.va-container'),'mousewheel.vaccordion');
         */
    });

    $(function() {
        Boxgrid.init();
    });

    $('.has-full-view').each(function() {
        var $overlay = $($(this).attr('href'));
        var $window = $(window);
        var w = $window.width(), h = $window.height();
        var winsize = {width: w, height: h};
        var $body = $('BODY');
        var clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
        $(this).click(function(e) {
            e.preventDefault();
            $overlay.css({
                clip: clipPropLast,
                opacity: 1,
                zIndex: 9999,
                pointerEvents: 'auto'
            });
            $body.css('overflow-y', 'hidden');
            $overlay.removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css({width: '100%', height: '100%'});
        });
        $($overlay.find('span.rb-close')).click(function(e) {
            //alert(' mayra');
            $overlay.removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css({width: '0px', height: '0px'});
            $body.css('overflow-y', 'auto');
            clipPropLast = 'auto';
            $overlay.css({
                clip: clipPropLast,
                opacity: 0,
                pointerEvents: 'none'
            });
            $overlay.css('z-index', -1);
        });
    });
    $('.full-content').each(function() {
        $(this).perfectScrollbar();
    });
    ///*
    if (!isMobileBrowser()) {
        //animated on scroll
        $('.isobrick2 img').addClass("oculto").viewportChecker({
            classToAdd: 'visible scale', // Class to add to the elements when they are visible
            offset: 100, // The offset of the elements (let them appear earlier or later)
            repeat: false, // Add the possibility to remove the class if the elements are not visible
            callbackFunction: function(elem, action) {
                //$(window).unbind("load scroll touchmove", elem);
            }, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
            scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.        
        });
        //animate noticies
        $('.noticiesWrap').each(function() {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
                offset: 300, // The offset of the elements (let them appear earlier or later)
                repeat: false, // Add the possibility to remove the class if the elements are not visible
                callbackFunction: function(elem, action) {
                }, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
                scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
            });
        });
        //

        //radio
        if (!!document.createElement('audio').canPlayType) {
            $('<audio id="radioplay" class="oculto" src="http://s3.myradiostream.com:7258/;"></audio>').appendTo('#page');
            $('#radiox').click(function(e) {
                e.preventDefault();
                var ra = $('#radioplay');
                if (ra.get(0).paused) {
                    ra.trigger("play");
                } else {
                    ra.trigger("pause");
                }
            });
        } else {
            $('#radiox').remove();
        }
        //slides check
        $('.slide').addClass("u").slideCheck({
        });
        /*                                                             
         $('.homeslider.on').each(function() {
         var $this = jQuery(this);
         $this.nivoSlider({effect: 'fade', slices: 15, boxCols: 8, boxRows: 4, animSpeed: 800, pauseTime: Math.floor(Math.random() * 10001) + 3000, startSlide: 0, directionNav: false, directionNavHide: true, controlNav: false, controlNavThumbs: false, pauseOnHover: true, manualAdvance: false, prevText: 'Prev', nextText: 'Next', randomStart: false, beforeChange: function() {
         }, afterChange: function() {
         }, slideshowEnd: function() {
         }, lastSlide: function() {
         }, afterLoad: function() {
         }});
         });
         //*/
    }
    //*/
    //parallax

});
$(document).ready(function() {
    if (debug && false) {
        //mm-menu
        $('#mm-nav-content').appendTo('#dcmmenu');
        $("#dcmmenu").mmenu({
            classes: "mm-slide"
        });
        innerNavigate();
    } else {
        ///*
        var len = $('[data-load]').length;
        $("[data-load]").each(function(index, element) {
            $(this).load($(this).data("load"), function() {
                if (index == len - 1) {
                    alert("xxx");
                    //mm-menu
                    $('#mm-nav-content').appendTo('#dcmmenu');
                    $("#dcmmenu").mmenu({
                        classes: "mm-slide"
                    });
                    innerNavigate();
                }
            });
        });
        //*/
//        $("#topBar").load($("#topBar").data("load"), function() {            
//                alert("xxx");
//                //mm-menu
//                $('#mm-nav-content').appendTo('#dcmmenu');
//                $("#dcmmenu").mmenu({
//                    classes: "mm-slide"
//                });
//                innerNavigate();           
//        });
    }


//liferay-user-login/admin
    $('#userlaunch').click(function(e) {
        var dockbar = $('#dcmdockbar');
        if (dockbar.css('display') === 'none') {
            dockbar.css('display', 'block');
            dockbar.addClass('animated fadeIn');
        } else {
            dockbar.addClass('fadeOut');
            dockbar.removeClass('animated fadeIn fadeOut');
            dockbar.css('display', 'none');
        }
        e.preventDefault();
    });


});
/* #Radial menu
 ================================================== */
//<editor-fold defaultstate="collapsed" desc="radial menu">

//</editor-fold>


/* #innerNavigate
 ================================================== */
//<editor-fold defaultstate="collapsed" desc="innerNavigate">
function innerNavigate() {
//  /*
    //var links = $('#navigation').find('li a');
    var links = $('a.toSlide');
    slide = $('.slide');
    button = $('.scrollbut');
    //mywindow = $('#wrapperscroll');
    mywindow = $(window);
    htmlbody = $('html,body');
    dataslide = 1;
    /*
     $(links).removeClass('current');
     //Setup waypoints plugin
     slide.waypoint(function(event, direction) {
     //cache the variable of the data-slide attribute associated with each slide
     dataslide = $(this).attr('data-slide');
     //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
     //remove the active class from the previous navigation link
     if (direction === 'down') {
     $('#navigation li a[data-slide="' + dataslide + '"]').parent().addClass('current').prev().removeClass('current');
     }
     // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
     //remove the active class from the next navigation link
     else {
     //alert(parseInt(dataslide));
     $('#navigation li a[data-slide="' + (parseInt(dataslide)) + '"]').parent().addClass('current').next().removeClass('current');
     if (mywindow.scrollTop() < 80) {
     //alert(" in if");
     $('#navigation li a[data-slide="1"]').parent().addClass('current');
     $('#navigation li a[data-slide="2"]').parent().removeClass('current');
     }
     }
     
     }, {
     offset: 0
     });
     //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
     //from navigation link slide 2 and adds it to navigation link slide 1.
     mywindow.scroll(function() {
     if (mywindow.scrollTop() < 80) {
     //alert(" in if");
     $('#navigation li a[data-slide="1"]').parent().addClass('current');
     $('#navigation li a[data-slide="2"]').parent().removeClass('current');
     }
     });
     */
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        //alert(dataslide);

        var q = $('.slide[data-slide="' + dataslide + '"]').offset().top;
        htmlbody.animate({
            scrollTop: q
        }, 2500, 'easeInOutBack');
        /*  htmlbody.animate({
         scrollTop: q                                                                  }, 1000, 'easeInOutExpo');*/
    }
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function(e) {
        e.preventDefault();
        jQuery('#dcmmenu').trigger('close.mm');
        //alert($(this).attr('data-slide'));        
        dataslide = $(this).attr('data-slide'); //alert(dataslide);
        goToByScroll(dataslide);
        return false;
    });
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function(e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    //  TweenMax.to($("#navBar"), 1.5, {delay: 0.2, scaleX: "-=0.02", scaleY: "-=0.02", repeat: -1, yoyo: true, ease: Linear.easeNone});
    //  TweenMax.to($(".one_col"), 1.5, {delay: 0.2, scaleX: "-=0.02", scaleY: "-=0.02", repeat: -1, yoyo: true, ease: Linear.easeNone});                                                                                                                                
    //  var scene = document.getElementById('scene');
    //var parallax = new Parallax(scene);
}
//</editor-fold>





///////////////////////////////
// Parallax
///////////////////////////////
$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;
    if (y_scroll_pos > scroll_pos_test) {
        jQuery('.top').fadeIn(1000);
//        jQuery('.iphone').children('.top').css('display', 'none !important');
    } else {
        jQuery('.top').fadeOut(500);
    }
    //headerPosition();

//parrallax
    /*
     scrollPos = jQuery(this).scrollTop();
     
     var x = jQuery('#slide3');
     //Scroll the background of the banner
     x.css({
     'background-position': 'center ' + ((-scrollPos + x.offset().top) / 7) + "px"
     });
     
     // */
});
jQuery('.top').click(function() {
    jQuery('html, body').animate({scrollTop: 0}, 1000, 'easeOutCubic'); //return false;
});
function hover_overlay() {
    jQuery('.featured h2, .featured div.one_col .featuredoverlay, .featured div.two_col .featuredoverlay, .featured .bubblewrap').each(function() {
        jQuery(this).hover(function() {
            var $this = jQuery(this).parent().children().next('.featuredoverlay');
            jQuery($this).stop().animate({opacity: 0.1}, 250, 'easeOutCubic');
        }, function() {
            var $this = jQuery(this).parent().children().next('.featuredoverlay');
            jQuery($this).stop().animate({opacity: 1}, 250, 'easeOutCubic');
        });
    });
}
hover_overlay();
function hover_overlay_recent() {
    jQuery('.relatedposts h2, .relatedposts a.one_col .featuredoverlay, .relatedposts .bubblewrap').each(function() {
        jQuery(this).hover(function() {
            var $this = jQuery(this).parent().children().next('.featuredoverlay');
            jQuery($this).stop().animate({opacity: 0.1}, 250, 'easeOutCubic');
        }, function() {
            var $this = jQuery(this).parent().children().next('.featuredoverlay');
            jQuery($this).stop().animate({opacity: 1}, 250, 'easeOutCubic');
        });
    });
}
hover_overlay_recent();
function hover_overlay_article() {
    jQuery('a.thumblink, a.rating').each(function() {
        jQuery(this).hover(function() {
            $selector = jQuery(this).parent().children('a.thumblink').children('img');
            $selector.stop().animate({opacity: .1}, 250, 'easeOutCubic');
        }, function() {
            $selector.stop().animate({opacity: 1}, 250, 'easeOutCubic');
        });
    });
}

hover_overlay();
function headerPosition() {
    if ($(window).scrollTop() > $('#topBar').height()) {
        $("#topBar").removeClass('bg-lightBlue bg-blue')
                .addClass("fixed-top bg-lightBlue")
                .addClass(" shadow");
    } else {
        $("#topBar").removeClass('bg-lightBlue bg-blue')
                .addClass("fixed-top bg-blue")
                .addClass(" shadow");
    }
}
function isMobileBrowser() {
    return false || debug;
}
var destroyCrappyPlugin = function($elem, eventNamespace) {
    var isInstantiated = !!$.data($elem.get(0));
    //alert(isInstantiated);
    if (isInstantiated) {
        $.removeData($elem.get(0));
        $elem.off(eventNamespace);
        $elem.unbind('.' + eventNamespace);
    }
    console.log(
            '$element events:',
            $._data($elem.get(0), 'events')
            );
};
/* #Override aui
 ======================================================*/
$(function() {
    //destroyCrappyPlugin($('.va-container'), 'vaccordion');

});
