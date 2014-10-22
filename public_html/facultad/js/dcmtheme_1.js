//<editor-fold defaultstate="collapsed" desc="isotope">//
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
        return-1
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
        return-1
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
        return-1
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
        return-1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);
//</editor-fold>//

//<editor-fold defaultstate="collapsed" desc="TimeJS animation">//
(function($) {

    $.superscrollorama = function(options) {

        var superscrollorama = this;
        var defaults = {
            isVertical: true, // are we scrolling vertically or horizontally?
            triggerAtCenter: true, // the animation triggers when the respective Element's origin is in the center of the scrollarea. This can be changed here to be at the edge (-> false)
            playoutAnimations: true, // when scrolling past the animation should they be played out (true) or just be jumped to the respective last frame (false)? Does not affect animations where duration = 0
            reverse: true			// make reverse configurable so you don't have to pass it in for every tween to reverse globally
        };
        superscrollorama.settings = $.extend({}, defaults, options);
        var $window = $(window);

        // PRIVATE VARS

        var animObjects = [],
                pinnedObjects = [],
                scrollContainerOffset = {x: 0, y: 0},
        doUpdateOnNextTick = false,
                targetOffset,
                i;

        // PRIVATE FUNCTIONS

        function init() {
            // set event handlers
            $window.scroll(function() {
                doUpdateOnNextTick = true;
            });
            TweenLite.ticker.addEventListener("tick", tickHandler);
        }

        function cssNumericPosition($elem) { // return 0 when value is auto
            var obj = {
                top: parseFloat($elem.css("top")),
                left: parseFloat($elem.css("left"))
            };
            if (isNaN(obj.top)) {
                obj.top = 0;
            }
            if (isNaN(obj.left)) {
                obj.left = 0;
            }
            return obj;
        }

        function tickHandler() {
            if (doUpdateOnNextTick) {
                checkScrollAnim();
                doUpdateOnNextTick = false;
            }
        }

        // reset a pin Object
        function resetPinObj(pinObj) {
            pinObj.el.css('position', pinObj.origPositioning.pos);
            pinObj.el.css('top', pinObj.origPositioning.top);
            pinObj.el.css('left', pinObj.origPositioning.left);
        }
        // set a Tween Progress (use totalProgress for TweenMax and TimelineMax to include repeats)
        function setTweenProgress(tween, progress) {
            if (tween) {
                if (tween.totalProgress) {
                    tween.totalProgress(progress).pause();
                } else {
                    tween.progress(progress).pause();
                }
            }
        }

        function checkScrollAnim() {

            var currScrollPoint = superscrollorama.settings.isVertical ? $window.scrollTop() + scrollContainerOffset.y : $window.scrollLeft() + scrollContainerOffset.x;
            var offsetAdjust = superscrollorama.settings.triggerAtCenter ? (superscrollorama.settings.isVertical ? -$window.height() / 2 : -$window.width() / 2) : 0;
            var i, startPoint, endPoint;

            // check all animObjects
            var numAnim = animObjects.length;
            for (i = 0; i < numAnim; i++) {
                var animObj = animObjects[i],
                        target = animObj.target,
                        offset = animObj.offset;

                if (typeof (target) === 'string') {
                    targetOffset = $(target).offset() || {};
                    startPoint = superscrollorama.settings.isVertical ? targetOffset.top + scrollContainerOffset.y : targetOffset.left + scrollContainerOffset.x;
                    offset += offsetAdjust;
                } else if (typeof (target) === 'number') {
                    startPoint = target;
                } else if ($.isFunction(target)) {
                    startPoint = target.call(this);
                } else {
                    targetOffset = target.offset();
                    startPoint = superscrollorama.settings.isVertical ? targetOffset.top + scrollContainerOffset.y : targetOffset.left + scrollContainerOffset.x;
                    offset += offsetAdjust;
                }

                startPoint += offset;
                endPoint = startPoint + animObj.dur; // if the duration is 0 the animation should autoplay (forward going from BEFORE to AFTER and reverse going from AFTER to BEFORE)

                if ((currScrollPoint > startPoint && currScrollPoint < endPoint) && animObj.state !== 'TWEENING') {
                    // if it should be TWEENING and isn't..
                    animObj.state = 'TWEENING';
                    animObj.start = startPoint;
                    animObj.end = endPoint;
                }
                if (currScrollPoint < startPoint && animObj.state !== 'BEFORE' && animObj.reverse) {
                    // if it should be at the BEFORE tween state and isn't..
                    if (superscrollorama.settings.playoutAnimations || animObj.dur === 0) {
                        animObj.tween.reverse();
                    } else {
                        setTweenProgress(animObj.tween, 0);
                    }
                    animObj.state = 'BEFORE';
                } else if (currScrollPoint > endPoint && animObj.state !== 'AFTER') {
                    // if it should be at the AFTER tween state and isn't..
                    if (superscrollorama.settings.playoutAnimations || animObj.dur === 0) {
                        animObj.tween.play();
                    } else {
                        setTweenProgress(animObj.tween, 1);
                    }
                    animObj.state = 'AFTER';
                } else if (animObj.state === 'TWEENING') {
                    // if it is TWEENING..
                    var repeatIndefinitely = false;
                    if (animObj.tween.repeat) {
                        // does the tween have the repeat option (TweenMax / TimelineMax)
                        repeatIndefinitely = (animObj.tween.repeat() === -1);
                    }

                    if (repeatIndefinitely) { // if the animation loops indefinitely it will just play for the time of the duration
                        var playheadPosition = animObj.tween.totalProgress(); // there is no "isPlaying" value so we need to save the playhead to determine whether the animation is running
                        if (animObj.playeadLastPosition === null || playheadPosition === animObj.playeadLastPosition) {
                            if (playheadPosition === 1) {
                                if (animObj.tween.yoyo()) {
                                    // reverse Playback with infinitely looped tweens only works with yoyo true
                                    animObj.tween.reverse();
                                } else {
                                    animObj.tween.totalProgress(0).play();
                                }
                            } else {
                                animObj.tween.play();
                            }
                        }
                        animObj.playeadLastPosition = playheadPosition;
                    } else {
                        setTweenProgress(animObj.tween, (currScrollPoint - animObj.start) / (animObj.end - animObj.start));
                    }
                }
            }

            // check all pinned elements
            var numPinned = pinnedObjects.length;
            for (i = 0; i < numPinned; i++) {
                var pinObj = pinnedObjects[i];
                var el = pinObj.el;

                // should object be pinned (or updated)?
                if (pinObj.state !== 'PINNED') {

                    var pinObjSpacerOffset = pinObj.spacer.offset();

                    if (pinObj.state === 'UPDATE') {
                        resetPinObj(pinObj); // revert to original Position so startPoint and endPoint will be calculated to the correct values
                    }

                    startPoint = superscrollorama.settings.isVertical ? pinObjSpacerOffset.top + scrollContainerOffset.y : pinObjSpacerOffset.left + scrollContainerOffset.x;
                    startPoint += pinObj.offset;
                    endPoint = startPoint + pinObj.dur;

                    var jumpedPast = ((currScrollPoint > endPoint && pinObj.state === 'BEFORE') || (currScrollPoint < startPoint && pinObj.state === 'AFTER')); // if we jumped past a pinarea (i.e. when refreshing or using a function) we need to temporarily pin the element so it gets positioned to start or end respectively
                    var inPinAra = (currScrollPoint > startPoint && currScrollPoint < endPoint);
                    if (inPinAra || jumpedPast) {
                        // set original position values for unpinning
                        if (pinObj.pushFollowers && el.css('position') === "static") { // this can't be. If we want to pass following elements we need to at least allow relative positioning
                            el.css('position', "relative");
                        }
                        // save original positioning
                        pinObj.origPositioning = {
                            pos: el.css('position'),
                            top: pinObj.spacer.css('top'),
                            left: pinObj.spacer.css('left')
                        };
                        // change to fixed position
                        pinObj.fixedPositioning = {
                            top: superscrollorama.settings.isVertical ? -pinObj.offset : pinObjSpacerOffset.top,
                            left: superscrollorama.settings.isVertical ? pinObjSpacerOffset.left : -pinObj.offset
                        };
                        el.css('position', 'fixed');
                        el.css('top', pinObj.fixedPositioning.top);
                        el.css('left', pinObj.fixedPositioning.left);

                        // save values
                        pinObj.pinStart = startPoint;
                        pinObj.pinEnd = endPoint;

                        // If we want to push down following Items we need a spacer to do it, while and after our element is fixed.
                        if (pinObj.pushFollowers) {
                            if (superscrollorama.settings.isVertical) {
                                pinObj.spacer.height(pinObj.dur + el.outerHeight(true));
                            } else {
                                pinObj.spacer.width(pinObj.dur + el.outerWidth(true));
                            }
                        } else {
                            if (pinObj.origPositioning.pos === "absolute") { // no spacer
                                pinObj.spacer.width(0);
                                pinObj.spacer.height(0);
                            } else { // spacer needs to reserve the elements space, while pinned
                                if (superscrollorama.settings.isVertical) {
                                    pinObj.spacer.height(el.outerHeight(true));
                                } else {
                                    pinObj.spacer.width(el.outerWidth(true));
                                }
                            }
                        }


                        if (pinObj.state === "UPDATE") {
                            if (pinObj.anim) {
                                setTweenProgress(pinObj.anim, 0); // reset the progress, otherwise the animation won't be updated to the new position
                            }
                        } else if (pinObj.onPin) {
                            pinObj.onPin(pinObj.state === "AFTER");
                        }

                        // pin it!
                        pinObj.state = 'PINNED';
                    }
                }
                // If state changed to pinned (or already was) we need to position the element
                if (pinObj.state === 'PINNED') {
                    // Check to see if object should be unpinned
                    if (currScrollPoint < pinObj.pinStart || currScrollPoint > pinObj.pinEnd) {
                        // unpin it
                        var before = currScrollPoint < pinObj.pinStart;
                        pinObj.state = before ? 'BEFORE' : 'AFTER';
                        // set Animation to end or beginning
                        setTweenProgress(pinObj.anim, before ? 0 : 1);

                        var spacerSize = before ? 0 : pinObj.dur;

                        if (superscrollorama.settings.isVertical) {
                            pinObj.spacer.height(pinObj.pushFollowers ? spacerSize : 0);
                        } else {
                            pinObj.spacer.width(pinObj.pushFollowers ? spacerSize : 0);
                        }

                        // correct values if pin Object was moved (animated) during PIN (pinObj.el.css values will never be auto as they are set by the class)
                        var deltay = pinObj.fixedPositioning.top - cssNumericPosition(pinObj.el).top;
                        var deltax = pinObj.fixedPositioning.left - cssNumericPosition(pinObj.el).left;

                        // first revert to start values
                        resetPinObj(pinObj);

                        // position element correctly
                        if (!pinObj.pushFollowers || pinObj.origPositioning.pos === "absolute") {
                            var pinOffset;

                            if (pinObj.origPositioning.pos === "relative") { // position relative and pushFollowers = false
                                pinOffset = superscrollorama.settings.isVertical ?
                                        parseFloat(pinObj.origPositioning.top) :
                                        parseFloat(pinObj.origPositioning.left);
                                if (isNaN(pinOffset)) { // if Position was "auto" parseFloat will result in NaN
                                    pinOffset = 0;
                                }
                            } else {
                                pinOffset = superscrollorama.settings.isVertical ?
                                        pinObj.spacer.position().top :
                                        pinObj.spacer.position().left;
                            }

                            var direction = superscrollorama.settings.isVertical ?
                                    "top" :
                                    "left";

                            pinObj.el.css(direction, pinOffset + spacerSize);
                        } // if position relative and pushFollowers is true the element remains untouched.

                        // now correct values if they have been changed during pin
                        if (deltay !== 0) {
                            pinObj.el.css("top", cssNumericPosition(pinObj.el).top - deltay);
                        }
                        if (deltax !== 0) {
                            pinObj.el.css("left", cssNumericPosition(pinObj.el).left - deltax);
                        }
                        if (pinObj.onUnpin) {
                            pinObj.onUnpin(!before);
                        }
                    } else if (pinObj.anim) {
                        // do animation
                        setTweenProgress(pinObj.anim, (currScrollPoint - pinObj.pinStart) / (pinObj.pinEnd - pinObj.pinStart));
                    }
                }
            }
        }

        // PUBLIC FUNCTIONS
        superscrollorama.addTween = function(target, tween, dur, offset, reverse) {

            tween.pause();

            animObjects.push({
                target: target,
                tween: tween,
                offset: offset || 0,
                dur: dur || 0,
                reverse: (typeof reverse !== "undefined") ? reverse : superscrollorama.settings.reverse, // determine if reverse animation has been disabled
                state: 'BEFORE'
            });

            return superscrollorama;
        };

        superscrollorama.pin = function(el, dur, vars) {
            if (typeof (el) === 'string') {
                el = $(el);
            }
            var defaults = {
                offset: 0,
                pushFollowers: true		// if true following elements will be "pushed" down, if false the pinned element will just scroll past them
            };
            vars = $.extend({}, defaults, vars);
            if (vars.anim) {
                vars.anim.pause();
            }

            var spacer = $('<div class="superscrollorama-pin-spacer"></div>');
            spacer.css("position", "relative");
            spacer.css("top", el.css("top"));
            spacer.css("left", el.css("left"));
            el.before(spacer);

            pinnedObjects.push({
                el: el,
                state: 'BEFORE',
                dur: dur,
                offset: vars.offset,
                anim: vars.anim,
                pushFollowers: vars.pushFollowers,
                spacer: spacer,
                onPin: vars.onPin,
                onUnpin: vars.onUnpin
            });
            return superscrollorama;
        };

        superscrollorama.updatePin = function(el, dur, vars) { // Update a Pinned object. dur and vars are optional to only change vars and keep dur just pass NULL for dur
            if (typeof (el) === 'string') {
                el = $(el);
            }
            if (vars.anim) {
                vars.anim.pause();
            }

            var numPinned = pinnedObjects.length;

            for (i = 0; i < numPinned; i++) {
                var pinObj = pinnedObjects[i];
                if (el.get(0) === pinObj.el.get(0)) {

                    if (dur) {
                        pinObj.dur = dur;
                    }
                    if (vars.anim) {
                        pinObj.anim = vars.anim;
                    }
                    if (vars.offset) {
                        pinObj.offset = vars.offset;
                    }
                    if (typeof vars.pushFollowers !== "undefined") {
                        pinObj.pushFollowers = vars.pushFollowers;
                    }
                    if (vars.onPin) {
                        pinObj.onPin = vars.onPin;
                    }
                    if (vars.onUnpin) {
                        pinObj.onUnpin = vars.onUnpin;
                    }
                    if ((dur || vars.anim || vars.offset) && pinObj.state === 'PINNED') { // this calls for an immediate update!
                        pinObj.state = 'UPDATE';
                        checkScrollAnim();
                    }
                }
            }
            return superscrollorama;
        };

        superscrollorama.removeTween = function(target, tween, reset) {
            var count = animObjects.length;
            if (typeof reset === "undefined") {
                reset = true;
            }
            for (var index = 0; index < count; index++) {
                var value = animObjects[index];
                if (value.target === target &&
                        (!tween || value.tween === tween)) { // tween is optional. if not set just remove element
                    animObjects.splice(index, 1);
                    if (reset) {
                        setTweenProgress(value.tween, 0);
                    }
                    count--;
                    index--;
                }
            }
            return superscrollorama;
        };

        superscrollorama.removePin = function(el, reset) {
            if (typeof (el) === 'string') {
                el = $(el);
            }
            if (typeof reset === "undefined") {
                reset = true;
            }
            var count = pinnedObjects.length;
            for (var index = 0; index < count; index++) {
                var value = pinnedObjects[index];
                if (value.el.is(el)) {
                    pinnedObjects.splice(index, 1);
                    if (reset) {
                        value.spacer.remove();
                        resetPinObj(value);
                        if (value.anim) {
                            setTweenProgress(value.anim, 0);
                        }
                    }
                    count--;
                    index--;
                }
            }
            return superscrollorama;
        };

        superscrollorama.setScrollContainerOffset = function(x, y) {
            scrollContainerOffset.x = x;
            scrollContainerOffset.y = y;
            return superscrollorama;
        };

        superscrollorama.triggerCheckAnim = function(immediately) { // if immedeately is true it will be updated right now, if false it will wait until next tweenmax tick. default is false
            if (immediately) {
                checkScrollAnim();
            } else {
                doUpdateOnNextTick = true;
            }
            return superscrollorama;
        };


        // INIT
        init();

        return superscrollorama;
    };

})(jQuery);

/*!
 * VERSION: beta 1.9.7
 * DATE: 2013-05-16
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = [].slice, r = function(t, e, s) {
            i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0
        }, n = function(t) {
            return t.jquery || t.length && t[0] && t[0].nodeType && t[0].style
        }, a = r.prototype = i.to({}, .1, {}), o = [];
        r.version = "1.9.7", a.constructor = r, a.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, a.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, a.updateTo = function(t, e) {
            var s, r = this.ratio;
            e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t)
                this.vars[s] = t[s];
            if (this._initted)
                if (e)
                    this._initted = !1;
                else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var n = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                } else if (this._time > 0) {
                    this._initted = !1, this._init();
                    for (var a, o = 1 / (1 - r), h = this._firstPT; h; )
                        a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                }
            return this
        }, a.render = function(t, e, i) {
            var s, r, n, a, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._totalTime, c = this._cycle;
            if (t >= u ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / this._duration, l = this._easeType, _ = this._easePower, (1 === l || 3 === l && h >= .5) && (h = 1 - h), 3 === l && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === l ? 1 - h : 2 === l ? h : .5 > this._time / this._duration ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), p === this._time && !i)
                return f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted)
                    return;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || this._paused || (this._active = !0), 0 === f && (this._startAt && (t >= 0?this._startAt.render(t, e, i):r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o))), n = this._firstPT; n; )
                n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), this._cycle !== c && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || o)))
        }, r.to = function(t, e, i) {
            return new r(t, e, i)
        }, r.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
        }, r.staggerTo = r.allTo = function(t, e, a, h, l, _, u) {
            h = h || 0;
            var p, f, c, m, d = a.delay || 0, g = [], v = function() {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, a.onCompleteParams || o), l.apply(u || this, _ || o)
            };
            for (t instanceof Array || ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s.call(t, 0))), p = t.length, c = 0; p > c; c++) {
                f = {};
                for (m in a)
                    f[m] = a[m];
                f.delay = d, c === p - 1 && l && (f.onComplete = v), g[c] = new r(t[c], e, f), d += h
            }
            return g
        }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
        }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
        }, r.delayedCall = function(t, e, i, s, n) {
            return new r(e, 0, {delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: n, overwrite: 0})
        }, r.set = function(t, e) {
            return new r(t, 0, e)
        }, r.isTweening = function(t) {
            for (var e, s = i.getTweensOf(t), r = s.length; --r > - 1; )
                if (e = s[r], e._active || e._startTime === e._timeline._time && e._timeline._active)
                    return!0;
            return!1
        };
        var h = function(t, e) {
            for (var s = [], r = 0, n = t._first; n; )
                n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(h(n, e)), r = s.length), n = n._next;
            return s
        }, l = r.getAllTweens = function(e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
        };
        r.killAll = function(t, i, s, r) {
            null == i && (i = !0), null == s && (s = !0);
            var n, a, o, h = l(0 != r), _ = h.length, u = i && s && r;
            for (o = 0; _ > o; o++)
                a = h[o], (u || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
        }, r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var a, o, h, l, _, u = i._tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s(t, 0)), t instanceof Array)
                    for (l = t.length; --l > - 1; )
                        r.killChildTweensOf(t[l], e);
                else {
                    a = [];
                    for (h in u)
                        for (o = u[h].target.parentNode; o; )
                            o === t && (a = a.concat(u[h].tweens)), o = o.parentNode;
                    for (_ = a.length, l = 0; _ > l; l++)
                        e && a[l].totalTime(a[l].totalDuration()), a[l]._enabled(!1, !1)
                }
            }
        };
        var _ = function(t, i, s, r) {
            void 0 === i && (i = !0), void 0 === s && (s = !0);
            for (var n, a, o = l(r), h = i && s && r, _ = o.length; --_ > - 1; )
                a = o[_], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            _(!0, t, e, i)
        }, r.resumeAll = function(t, e, i) {
            _(!1, t, e, i)
        }, a.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, a.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, a.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, a.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, a.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, a.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, a.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, a.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
    }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            for (var i, s, n = this.vars, a = r.length; --a > - 1; )
                if (s = n[r[a]])
                    for (i = s.length; --i > - 1; )
                        "{self}" === s[i] && (s = n[r[a]] = s.concat(), s[i] = this);
            n.tweens instanceof Array && this.add(n.tweens, 0, n.align, n.stagger)
        }, r = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"], n = [], a = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }, o = n.slice, h = s.prototype = new e;
        return s.version = "1.9.7", h.constructor = s, h.kill()._gc = !1, h.to = function(t, e, s, r) {
            return e ? this.add(new i(t, e, s), r) : this.set(t, s, r)
        }, h.from = function(t, e, s, r) {
            return this.add(i.from(t, e, s), r)
        }, h.fromTo = function(t, e, s, r, n) {
            return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }, h.staggerTo = function(t, e, r, n, h, l, _, u) {
            var p, f = new s({onComplete: l, onCompleteParams: _, onCompleteScope: u});
            for ("string" == typeof t && (t = i.selector(t) || t), !(t instanceof Array) && t.length && t[0] && t[0].nodeType && t[0].style && (t = o.call(t, 0)), n = n || 0, p = 0; t.length > p; p++)
                r.startAt && (r.startAt = a(r.startAt)), f.to(t[p], e, a(r), p * n);
            return this.add(f, h)
        }, h.staggerFrom = function(t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
        }, h.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
        }, h.call = function(t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        }, h.set = function(t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
        }, s.exportRoot = function(t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t), o = a._timeline;
            for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r; )
                n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
            return o.add(a, 0), a
        }, h.add = function(r, n, a, o) {
            var h, l, _, u, p;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array) {
                    for (a = a || "normal", o = o || 0, h = n, l = r.length, _ = 0; l > _; _++)
                        (u = r[_])instanceof Array && (u = new s({tweens: u})), this.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === a ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === a && (u._startTime -= u.delay())), h += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, n);
                if ("function" != typeof r)
                    throw"Cannot add " + r + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                for (p = this; p._gc && p._timeline; )
                    p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
            return this
        }, h.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array) {
                for (var i = e.length; --i > - 1; )
                    this.remove(e[i]);
                return this
            }
            return"string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, h.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, h.insert = h.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }, h.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }, h.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, h.removeLabel = function(t) {
            return delete this._labels[t], this
        }, h.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, h._parseTimeOrLabel = function(e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r instanceof Array)
                for (n = r.length; --n > - 1; )
                    r[n]instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (n = e.indexOf("="), -1 === n)
                    return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        }, h.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, h.stop = function() {
            return this.paused(!0)
        }, h.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }, h.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }, h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var s, r, a, o, h, l = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._time, u = this._startTime, p = this._timeScale, f = this._paused;
            if (t >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, t = l + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (o = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0)) : this._initted || (h = !0), this._rawPrevTime = t, t = 0) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== _ && this._first || i || h) {
                if (this._initted || (this._initted = !0), 0 === _ && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= _)
                    for (s = this._first; s && (a = s._next, !this._paused || f); )
                        (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                else
                    for (s = this._last; s && (a = s._prev, !this._paused || f); )
                        (s._active || _ >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), o && (this._gc || (u === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || n)))
            }
        }, h._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof s && t._hasPausedChild())
                    return!0;
                t = t._next
            }
            return!1
        }, h.getChildren = function(t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
                r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
            return n
        }, h.getTweensOf = function(t, e) {
            for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > - 1; )
                (s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
            return n
        }, h._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return!0;
                e = e.timeline
            }
            return!1
        }, h.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
                r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)
                for (s in n)
                    n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        }, h._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > - 1; )
                i[s]._kill(t, e) && (r = !0);
            return r
        }, h.clear = function(t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > - 1; )
                e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, h.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(), t = t._next;
            return this
        }, h._enabled = function(t, i) {
            if (t === this._gc)
                for (var s = this._first; s; )
                    s._enabled(t, !0), s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }, h.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * t, !1) : this._time / this.duration()
        }, h.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, h.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                        e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                    this._duration = this._totalDuration = s, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, h.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }, h.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, s
    }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var s = function(e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, r = [], n = new i(null, null, 1, 0), a = function(t) {
            for (; t; ) {
                if (t._paused)
                    return!0;
                t = t._timeline
            }
            return!1
        }, o = s.prototype = new t;
        return o.constructor = s, o.kill()._gc = !1, s.version = "1.9.7", o.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, o.addCallback = function(t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        }, o.removeCallback = function(t, e) {
            if (null == e)
                this._kill(null, t);
            else
                for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > - 1; )
                    i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        }, o.tweenTo = function(t, i) {
            i = i || {};
            var s, a, o = {ease: n, overwrite: 2, useFrames: this.usesFrames(), immediateRender: !1};
            for (s in i)
                o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t), a = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || .001, o), o.onStart = function() {
                a.target.paused(!0), a.vars.time !== a.target.time() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
            }, a
        }, o.tweenFromTo = function(t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {onComplete: this.seek, onCompleteParams: [t], onCompleteScope: this}, i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }, o.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var s, n, a, o, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration, u = this._duration, p = this._time, f = this._totalTime, c = this._startTime, m = this._timeScale, d = this._rawPrevTime, g = this._paused, v = this._cycle;
            if (t >= _ ? (this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === u && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = u, t = u + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === u && this._rawPrevTime > 0 && !this._locked) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === u && this._rawPrevTime >= 0 && this._first && (h = !0)) : this._initted || (h = !0), this._rawPrevTime = t, t = 0) : (this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = u + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = u - this._time), this._time > u ? (this._time = u, t = u + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== v && !this._locked) {
                var y = this._yoyo && 0 !== (1 & v), T = y === (this._yoyo && 0 !== (1 & this._cycle)), w = this._totalTime, x = this._cycle, b = this._rawPrevTime, P = this._time;
                this._totalTime = v * u, v > this._cycle ? y = !y : this._totalTime += u, this._time = p, this._rawPrevTime = 0 === u ? d - 1e-5 : d, this._cycle = v, this._locked = !0, p = y ? 0 : u, this.render(p, e, 0 === u), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (p = y ? u + 1e-6 : -1e-6, this.render(p, !0, !1)), this._time = P, this._totalTime = w, this._cycle = x, this._rawPrevTime = b, this._locked = !1
            }
            if (!(this._time !== p && this._first || i || h))
                return f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), void 0;
            if (this._initted || (this._initted = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= p)
                for (s = this._first; s && (a = s._next, !this._paused || g); )
                    (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
            else
                for (s = this._last; s && (a = s._prev, !this._paused || g); )
                    (s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
            this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._locked || this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
        }, o.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var s, r, n = [], o = this.getChildren(t, e, i), h = 0, l = o.length;
            for (s = 0; l > s; s++)
                r = o[s], r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (a(r._timeline) || (n[h++] = r));
            return n
        }, o.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; s > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }, o.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > - 1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }, o.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {time: this._labels[t], name: t};
            return e.sort(function(t, e) {
                return t.time - e.time
            }), e
        }, o.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, o.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, o.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, o.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, o.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, o.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, o.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, s
    }, !0), function() {
        var t = 180 / Math.PI, e = Math.PI / 180, i = [], s = [], r = [], n = {}, a = function(t, e, i, s) {
            this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
        }, o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", h = function(t, e, i, s) {
            var r = {a: t}, n = {}, a = {}, o = {c: s}, h = (t + e) / 2, l = (e + i) / 2, _ = (i + s) / 2, u = (h + l) / 2, p = (l + _) / 2, f = (p - u) / 8;
            return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
        }, l = function(t, e, n, a, o) {
            var l, _, u, p, f, c, m, d, g, v, y, T, w, x = t.length - 1, b = 0, P = t[0].a;
            for (l = 0; x > l; l++)
                f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, o ? (y = i[l], T = s[l], w = .25 * (T + y) * e / (a ? .5 : r[l] || .5), c = u - (u - _) * (a ? .5 * e : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * e : 0 !== T ? w / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * e, m = u + .5 * (p - u) * e, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
            f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }, _ = function(t, e, r, n) {
            var o, h, l, _, u, p, f = [];
            if (n)
                for (t = [n].concat(t), h = t.length; --h > - 1; )
                    "string" == typeof (p = t[h][e]) && "=" === p.charAt(1) && (t[h][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
            if (o = t.length - 2, 0 > o)
                return f[0] = new a(t[0][e], 0, 0, t[-1 > o ? 0 : 1][e]), f;
            for (h = 0; o > h; h++)
                l = t[h][e], _ = t[h + 1][e], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][e], i[h] = (i[h] || 0) + (_ - l) * (_ - l), s[h] = (s[h] || 0) + (u - _) * (u - _));
            return f[h] = new a(t[h][e], 0, 0, t[h + 1][e]), f
        }, u = function(t, e, a, h, u, p) {
            var f, c, m, d, g, v, y, T, w = {}, x = [], b = p || t[0];
            u = "string" == typeof u ? "," + u + "," : o, null == e && (e = 1);
            for (c in t[0])
                x.push(c);
            if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, f = x.length; --f > - 1; )
                    if (c = x[f], Math.abs(b[c] - T[c]) > .05) {
                        y = !1;
                        break
                    }
                y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
            }
            for (i.length = s.length = r.length = 0, f = x.length; --f > - 1; )
                c = x[f], n[c] = -1 !== u.indexOf("," + c + ","), w[c] = _(t, c, n[c], p);
            for (f = i.length; --f > - 1; )
                i[f] = Math.sqrt(i[f]), s[f] = Math.sqrt(s[f]);
            if (!h) {
                for (f = x.length; --f > - 1; )
                    if (n[c])
                        for (m = w[x[f]], v = m.length - 1, d = 0; v > d; d++)
                            g = m[d + 1].da / s[d] + m[d].da / i[d], r[d] = (r[d] || 0) + g * g;
                for (f = r.length; --f > - 1; )
                    r[f] = Math.sqrt(r[f])
            }
            for (f = x.length, d = a?4:1; --f > - 1; )
                c = x[f], m = w[c], l(m, e, a, h, n[c]), y && (m.splice(0, d), m.splice(m.length - d, d));
            return w
        }, p = function(t, e, i) {
            e = e || "soft";
            var s, r, n, o, h, l, _, u, p, f, c, m = {}, d = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length)
                throw"invalid Bezier data";
            for (p in t[0])
                v.push(p);
            for (l = v.length; --l > -1; ) {
                for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++)
                    s = null == i ? t[_][p] : "string" == typeof (c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d)
                    s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                h.length = f
            }
            return m
        }, f = function(t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > - 1; )
                for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++)
                    l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
        }, c = function(t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [], o = [], h = 0, l = 0, _ = e - 1, u = [], p = [];
            for (i in t)
                f(t[i], a, e);
            for (r = a.length, s = 0; r > s; s++)
                h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
            return{length: l, lengths: o, segments: u}
        }, m = window._gsDefine.plugin({propName: "bezier", priority: -1, API: 2, global: !0, init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, h = e.values || [], l = {}, _ = h[0], f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
                for (s in _)
                    this._props.push(s);
                for (n = this._props.length; --n > - 1; )
                    s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                    var m = c(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (f[0]instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > - 1; )
                        for (a = 0; 3 > a; a++)
                            s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                return!0
            }, set: function(e) {
                var i, s, r, n, a, o, h, l, _, u, p = this._segCount, f = this._func, c = this._target;
                if (this._timeRes) {
                    if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                        for (l = p - 1; l > r && e >= (this._l2 = _[++r]); )
                            ;
                        this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e; )
                            ;
                        0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                        for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]); )
                            ;
                        this._s1 = u[r - 1], this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e; )
                            ;
                        0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                for (s = 1 - o, r = this._props.length; --r > - 1; )
                    n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0), f[n] ? c[n](h) : c[n] = h;
                if (this._autoRotate) {
                    var m, d, g, v, y, T, w, x = this._autoRotate;
                    for (r = x.length; --r > - 1; )
                        n = x[r][2], T = x[r][3] || 0, w = x[r][4] === !0 ? 1 : t, a = this._beziers[x[r][0]], m = this._beziers[x[r][1]], a && m && (a = a[i], m = m[i], d = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, d += (v - d) * o, v += (a.c + (a.d - a.c) * o - v) * o, g = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, g += (y - g) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = Math.atan2(y - g, v - d) * w + T, f[n] ? c[n](h) : c[n] = h)
                }
            }}), d = m.prototype;
        m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
            var t = window._gsDefine.globals.CSSPlugin;
            if (t) {
                var i = t._internals, s = i._parseToProxy, r = i._setPluginRatio, n = i.CSSPropTween;
                i._registerComplexSpecialProp("bezier", {parser: function(t, i, a, o, h, l) {
                        i instanceof Array && (i = {values: i}), l = new m;
                        var _, u, p, f = i.values, c = f.length - 1, d = [], g = {};
                        if (0 > c)
                            return h;
                        for (_ = 0; c >= _; _++)
                            p = s(t, f[_], o, h, l, c !== _), d[_] = p.end;
                        for (u in i)
                            g[u] = i[u];
                        return g.values = d, h = new n(t, "bezier", 0, 0, p.pt, 2), h.data = p, h.plugin = l, h.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (_ = g.autoRotate === !0 ? 0 : Number(g.autoRotate) * e, g.autoRotate = null != p.end.left ? [["left", "top", "rotation", _, !0]] : null != p.end.x ? [["x", "y", "rotation", _, !0]] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), p.autoRotate = o._target._gsTransform), l._onInitTween(p.proxy, g, o._tween), h
                    }})
            }
        }, d._roundProps = function(t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > - 1; )
                (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }, d._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = s.length; --i > - 1; )
                        s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"), this._overwriteProps.length = 0
        }, o = {}, h = a.prototype = new t("css");
        h.constructor = a, a.version = "1.9.7", a.API = 2, a.defaultTransformPerspective = 0, h = "px", a.suffixMap = {top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h};
        var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /[^\d\-\.]/g, y = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/, w = /opacity:([^;]*)/, x = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, P = /([A-Z])/g, k = /-([a-z])/gi, R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, S = function(t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, M = Math.PI / 180, I = 180 / Math.PI, F = {}, E = document, N = E.createElement("div"), L = E.createElement("img"), X = a._internals = {_specialProps: o}, U = navigator.userAgent, z = function() {
            var t, e = U.indexOf("Android"), i = E.createElement("div");
            return u = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === e || Number(U.substr(e + 8, 1)) > 3), f = u && 6 > Number(U.substr(U.indexOf("Version/") + 8, 1)), p = -1 !== U.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U), c = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
        }(), Y = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, B = function(t) {
            window.console && console.log(t)
        }, j = "", q = "", V = function(t, e) {
            e = e || N;
            var i, s, r = e.style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > - 1 && void 0 === r[i[s] + t]; )
                ;
            return s >= 0 ? (q = 3 === s ? "ms" : i[s], j = "-" + q.toLowerCase() + "-", q + t) : null
        }, Z = E.defaultView ? E.defaultView.getComputedStyle : function() {
        }, G = a.getStyle = function(t, e, i, s, r) {
            var n;
            return z || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, n = i[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Y(t)
        }, $ = function(t, e, i, s, r) {
            if ("px" === s || !s)
                return i;
            if ("auto" === s || !i)
                return 0;
            var n, a = A.test(e), o = t, h = N.style, l = 0 > i;
            return l && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || E.body, h[a ? "width" : "height"] = i + s), o.appendChild(N), n = parseFloat(N[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(N), 0 !== n || r || (n = $(t, e, i, s, !0))), l ? -n : n
        }, Q = function(t, e, i) {
            if ("absolute" !== G(t, "position", i))
                return 0;
            var s = "left" === e ? "Left" : "Top", r = G(t, "margin" + s, i);
            return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
        }, W = function(t, e) {
            var i, s, r = {};
            if (e = e || Z(t, null))
                if (i = e.length)
                    for (; --i > - 1; )
                        r[e[i].replace(k, S)] = e.getPropertyValue(e[i]);
                else
                    for (i in e)
                        r[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    r[i.replace(k, S)] = e[i];
            return z || (r.opacity = Y(t)), s = be(t, e, !1), r.rotation = s.rotation * I, r.skewX = s.skewX * I, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, xe && (r.z = s.z, r.rotationX = s.rotationX * I, r.rotationY = s.rotationY * I, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
        }, H = function(t, e, i, s, r) {
            var n, a, o, h = {}, l = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Q(t, a), void 0 !== l[a] && (o = new ue(l, a, l[a], o)));
            if (s)
                for (a in s)
                    "className" !== a && (h[a] = s[a]);
            return{difs: h, firstMPT: o}
        }, K = {width: ["Left", "Right"], height: ["Top", "Bottom"]}, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = K[e], n = r.length;
            for (i = i || Z(t, null); --n > - 1; )
                s -= parseFloat(G(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(G(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        }, ee = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s))) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
        }, ie = function(t, e) {
            return"string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, se = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
        }, re = function(t, e, i, s) {
            var r, n, a, o, h = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t * M : (r = 2 * Math.PI, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? M : 1) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
        }, ne = {aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0]}, ae = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, oe = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(m) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
        }, he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in ne)
            he += "|" + h + "\\b";
        he = RegExp(he + ")", "gi");
        var le = function(t, e, i, s) {
            if (null == t)
                return function(t) {
                    return t
                };
            var r, n = e ? (t.match(he) || [""])[0] : "", a = t.split(n).join("").match(g) || [], o = t.substr(0, t.indexOf(a[0])), h = ")" === t.charAt(t.length - 1) ? ")" : "", l = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(m, "") : "";
            return _ ? r = e ? function(t) {
                var e, p, f, c;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (c = t.replace(D, "|").split("|"), f = 0; c.length > f; f++)
                        c[f] = r(c[f]);
                    return c.join(",")
                }
                if (e = (t.match(he) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, _ > f--)
                    for (; _ > ++f; )
                        p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function(t) {
                var e, n, p;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++)
                        n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(g) || [], p = e.length, _ > p--)
                    for (; _ > ++p; )
                        e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(l) + h
            } : function(t) {
                return t
            }
        }, _e = function(t) {
            return t = t.split(","), function(e, i, s, r, n, a, o) {
                var h, l = (i + "").split(" ");
                for (o = {}, h = 0; 4 > h; h++)
                    o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        }, ue = (X._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o; )
                e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                for (o = n.firstMPT; o; ) {
                    if (i = o.t, i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++)
                                r += i["xn" + s] + i["xs" + (s + 1)];
                            i.e = r
                        }
                    } else
                        i.e = i.s + i.xs0;
                    o = o._next
                }
        }, function(t, e, i, s, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
        }), pe = (X._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u = s, p = {}, f = {}, c = i._transform, m = F;
            for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u; ) {
                if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new ue(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                    for (a = s.l; --a > 0; )
                        h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new ue(s, h, o, l, s.rxp[h]));
                s = s._next
            }
            return{proxy: p, end: f, firstMPT: l, pt: _}
        }, X.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
            this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || "css_" + e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
        }), fe = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
            i = i || n || "", a = new pe(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s), s += "";
            var u, p, f, c, g, v, y, T, w, x, P, k, R = i.split(", ").join(",").split(" "), S = s.split(", ").join(",").split(" "), A = R.length, C = l !== !1;
            for (( - 1 !== s.indexOf(",") || - 1 !== i.indexOf(",")) && (R = R.join(" ").replace(D, ", ").split(" "), S = S.join(" ").replace(D, ", ").split(" "), A = R.length), A !== S.length && (R = (n || "").split(" "), A = R.length), a.plugin = h, a.setRatio = _, u = 0; A > u; u++)
                if (c = R[u], g = S[u], T = parseFloat(c), T || 0 === T)
                    a.appendXtra("", T, ie(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
                else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c)))
                    k = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), w = c.length + g.length > 6, w && !z && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(S[u]).join("transparent")) : (z || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], w ? "," : k, !0), w && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, k, !1)));
                else if (v = c.match(m)) {
                    if (y = g.match(d), !y || y.length !== v.length)
                        return a;
                    for (f = 0, p = 0; v.length > p; p++)
                        P = v[p], x = c.indexOf(P, f), a.appendXtra(c.substr(f, x - f), Number(P), ie(y[p], P), "", C && "px" === c.substr(x + P.length, 2), 0 === p), f = x + P.length;
                    a["xs" + a.l] += c.substr(f)
                } else
                    a["xs" + a.l] += a.l ? " " + c : c;
            if (-1 !== s.indexOf("=") && a.data) {
                for (k = a.xs0 + a.data.s, u = 1; a.l > u; u++)
                    k += a["xs" + u] + a.data["xn" + u];
                a.e = k + a["xs" + u]
            }
            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
        }, ce = 9;
        for (h = pe.prototype, h.l = h.pr = 0; --ce > 0; )
            h["xn" + ce] = 0, h["xs" + ce] = "";
        h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
            var a = this, o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {s: e + i}, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var me = function(t, e) {
            e = e || {}, this.p = e.prefix ? V(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, de = X._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var s, r, n = t.split(","), a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++)
                e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new me(n[s], e)
        }, ge = function(t) {
            if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                de(t, {parser: function(t, i, s, r, n, a, h) {
                        var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                        return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (B("Error: " + e + " js file not loaded."), n)
                    }})
            }
        };
        h = me.prototype, h.parseComplex = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), h = i.replace(D, "|").split("|")) : p && (o = [e], h = [i])), h) {
                for (l = h.length > o.length?h.length:o.length, a = 0; l > a; a++)
                    e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                e = o.join(", "), i = h.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, h.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }, a.registerSpecialProp = function(t, e, i) {
            de(t, {parser: function(t, s, r, n, a, o) {
                    var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                    return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                }, priority: i})
        };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","), ye = V("transform"), Te = j + "transform", we = V("transformOrigin"), xe = null !== V("perspective"), be = function(t, e, i) {
            var s, r, n, o, h, l, _, u, p, f, c, m, d, g = i ? t._gsTransform || {skewY: 0} : {skewY: 0}, v = 0 > g.scaleX, y = 2e-5, T = 1e5, w = -Math.PI + 1e-4, x = Math.PI - 1e-4, b = xe ? parseFloat(G(t, we, e, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0;
            if (ye)
                s = G(t, Te, e, !0);
            else if (t.currentStyle)
                if (s = t.currentStyle.filter.match(C), s && 4 === s.length)
                    s = [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), g.x || 0, g.y || 0].join(",");
                else {
                    if (null != g.x)
                        return g;
                    s = ""
                }
            for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], n = r.length; --n > - 1; )
                o = Number(r[n]), r[n] = (h = o - (o |= 0)) ? (0 | h * T + (0 > h ? -.5 : .5)) / T + o : o;
            if (16 === r.length) {
                var P = r[8], k = r[9], R = r[10], S = r[12], A = r[13], O = r[14];
                if (g.zOrigin && (O = -g.zOrigin, S = P * O - r[12], A = k * O - r[13], O = R * O + g.zOrigin - r[14]), !i || null == g.rotationX) {
                    var D, M, I, F, E, N, L, X = r[0], U = r[1], z = r[2], Y = r[3], B = r[4], j = r[5], q = r[6], V = r[7], Z = r[11], $ = g.rotationX = Math.atan2(q, R), Q = w > $ || $ > x;
                    $ && (F = Math.cos(-$), E = Math.sin(-$), D = B * F + P * E, M = j * F + k * E, I = q * F + R * E, P = B * -E + P * F, k = j * -E + k * F, R = q * -E + R * F, Z = V * -E + Z * F, B = D, j = M, q = I), $ = g.rotationY = Math.atan2(P, X), $ && (N = w > $ || $ > x, F = Math.cos(-$), E = Math.sin(-$), D = X * F - P * E, M = U * F - k * E, I = z * F - R * E, k = U * E + k * F, R = z * E + R * F, Z = Y * E + Z * F, X = D, U = M, z = I), $ = g.rotation = Math.atan2(U, j), $ && (L = w > $ || $ > x, F = Math.cos(-$), E = Math.sin(-$), X = X * F + B * E, M = U * F + j * E, j = U * -E + j * F, q = z * -E + q * F, U = M), L && Q ? g.rotation = g.rotationX = 0 : L && N ? g.rotation = g.rotationY = 0 : N && Q && (g.rotationY = g.rotationX = 0), g.scaleX = (0 | Math.sqrt(X * X + U * U) * T + .5) / T, g.scaleY = (0 | Math.sqrt(j * j + k * k) * T + .5) / T, g.scaleZ = (0 | Math.sqrt(q * q + R * R) * T + .5) / T, g.skewX = 0, g.perspective = Z ? 1 / (0 > Z ? -Z : Z) : 0, g.x = S, g.y = A, g.z = O
                }
            } else if (!(xe && 0 !== r.length && g.x === r[4] && g.y === r[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === G(t, "display", e))) {
                var W = r.length >= 6, H = W ? r[0] : 1, K = r[1] || 0, J = r[2] || 0, te = W ? r[3] : 1;
                g.x = r[4] || 0, g.y = r[5] || 0, l = Math.sqrt(H * H + K * K), _ = Math.sqrt(te * te + J * J), u = H || K ? Math.atan2(K, H) : g.rotation || 0, p = J || te ? Math.atan2(J, te) + u : g.skewX || 0, f = l - Math.abs(g.scaleX || 0), c = _ - Math.abs(g.scaleY || 0), Math.abs(p) > Math.PI / 2 && Math.abs(p) < 1.5 * Math.PI && (v ? (l *= -1, p += 0 >= u ? Math.PI : -Math.PI, u += 0 >= u ? Math.PI : -Math.PI) : (_ *= -1, p += 0 >= p ? Math.PI : -Math.PI)), m = (u - g.rotation) % Math.PI, d = (p - g.skewX) % Math.PI, (void 0 === g.skewX || f > y || -y > f || c > y || -y > c || m > w && x > m && false | m * T || d > w && x > d && false | d * T) && (g.scaleX = l, g.scaleY = _, g.rotation = u, g.skewX = p), xe && (g.rotationX = g.rotationY = g.z = 0, g.perspective = parseFloat(a.defaultTransformPerspective) || 0, g.scaleZ = 1)
            }
            g.zOrigin = b;
            for (n in g)
                y > g[n] && g[n] > -y && (g[n] = 0);
            return i && (t._gsTransform = g), g
        }, Pe = function(t) {
            var e, i, s = this.data, r = -s.rotation, n = r + s.skewX, a = 1e5, o = (0 | Math.cos(r) * s.scaleX * a) / a, h = (0 | Math.sin(r) * s.scaleX * a) / a, l = (0 | Math.sin(n) * -s.scaleY * a) / a, _ = (0 | Math.cos(n) * s.scaleY * a) / a, u = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                var f, m, d = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _, x = s.x, b = s.y;
                if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += f - (f * o + m * h), b += m - (f * l + m * _)), v)
                    f = d / 2, m = g / 2, w += ", Dx=" + (f - (f * o + m * h) + x) + ", Dy=" + (m - (f * l + m * _) + b) + ")";
                else {
                    var P, k, R, S = 8 > c ? 1 : -1;
                    for (f = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o? - o:o) * d + (0 > h? - h:h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _? - _:_) * g + (0 > l? - l:l) * d)) / 2 + b), ce = 0; 4 > ce; ce++)
                        k = J[ce], P = p[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(y, "")) || 0, R = i !== s[k] ? 2 > ce ? -s.ieOffsetX : -s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : m - s.ieOffsetY, u[k] = (s[k] = Math.round(i - R * (0 === ce || 2 === ce ? 1 : S))) + "px";
                    w += ", sizingMethod='auto expand')"
                }
                u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
            }
        }, ke = function() {
            var t, e, i, s, r, n, a, o, h, l = this.data, _ = this.t.style, u = l.perspective, f = l.scaleX, c = 0, m = 0, d = 0, g = 0, v = l.scaleY, y = 0, T = 0, w = 0, x = 0, b = l.scaleZ, P = 0, k = 0, R = 0, S = u ? -1 / u : 0, A = l.rotation, C = l.zOrigin, O = 1e5;
            p && (a = _.top ? "top" : _.bottom ? "bottom" : parseFloat(G(this.t, "top", null, !1)) ? "bottom" : "top", i = G(this.t, a, null, !1), o = parseFloat(i) || 0, h = i.substr((o + "").length) || "px", l._ffFix = !l._ffFix, _[a] = (l._ffFix ? o + .05 : o - .05) + h), (A || l.skewX) && (i = f * Math.cos(A), s = v * Math.sin(A), A -= l.skewX, c = f * -Math.sin(A), v *= Math.cos(A), f = i, g = s), A = l.rotationY, A && (t = Math.cos(A), e = Math.sin(A), i = f * t, s = g * t, r = b * -e, n = S * -e, m = f * e, y = g * e, b *= t, S *= t, f = i, g = s, w = r, k = n), A = l.rotationX, A && (t = Math.cos(A), e = Math.sin(A), i = c * t + m * e, s = v * t + y * e, r = x * t + b * e, n = R * t + S * e, m = c * -e + m * t, y = v * -e + y * t, b = x * -e + b * t, S = R * -e + S * t, c = i, v = s, x = r, R = n), C && (P -= C, d = m * P, T = y * P, P = b * P + C), d = (i = (d += l.x) - (d |= 0)) ? (0 | i * O + (0 > i ? -.5 : .5)) / O + d : d, T = (i = (T += l.y) - (T |= 0)) ? (0 | i * O + (0 > i ? -.5 : .5)) / O + T : T, P = (i = (P += l.z) - (P |= 0)) ? (0 | i * O + (0 > i ? -.5 : .5)) / O + P : P, _[ye] = "matrix3d(" + [(0 | f * O) / O, (0 | g * O) / O, (0 | w * O) / O, (0 | k * O) / O, (0 | c * O) / O, (0 | v * O) / O, (0 | x * O) / O, (0 | R * O) / O, (0 | m * O) / O, (0 | y * O) / O, (0 | b * O) / O, (0 | S * O) / O, d, T, P, u ? 1 + -P / u : 1].join(",") + ")"
        }, Re = function() {
            var t, e, i, s, r, n, a, o, h, l = this.data, _ = this.t, u = _.style;
            p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(G(_, "top", null, !1)) ? "bottom" : "top", e = G(_, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + s), l.rotation || l.skewX ? (r = l.rotation, n = r - l.skewX, a = 1e5, o = l.scaleX * a, h = l.scaleY * a, u[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ye] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
        };
        de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {parser: function(t, e, i, s, n, a, o) {
                if (s._transform)
                    return n;
                var h, l, _, u, p, f, c, m = s._transform = be(t, r, !0), d = t.style, g = 1e-6, v = ve.length, y = o, T = {};
                if ("string" == typeof y.transform && ye)
                    _ = d.cssText, d[ye] = y.transform, d.display = "block", h = be(t, null, !1), d.cssText = _;
                else if ("object" == typeof y) {
                    if (h = {scaleX: se(null != y.scaleX ? y.scaleX : y.scale, m.scaleX), scaleY: se(null != y.scaleY ? y.scaleY : y.scale, m.scaleY), scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, m.scaleZ), x: se(y.x, m.x), y: se(y.y, m.y), z: se(y.z, m.z), perspective: se(y.transformPerspective, m.perspective)}, c = y.directionalRotation, null != c)
                        if ("object" == typeof c)
                            for (_ in c)
                                y[_] = c[_];
                        else
                            y.rotation = c;
                    h.rotation = re("rotation"in y ? y.rotation : "shortRotation"in y ? y.shortRotation + "_short" : "rotationZ"in y ? y.rotationZ : m.rotation * I, m.rotation, "rotation", T), xe && (h.rotationX = re("rotationX"in y ? y.rotationX : "shortRotationX"in y ? y.shortRotationX + "_short" : m.rotationX * I || 0, m.rotationX, "rotationX", T), h.rotationY = re("rotationY"in y ? y.rotationY : "shortRotationY"in y ? y.shortRotationY + "_short" : m.rotationY * I || 0, m.rotationY, "rotationY", T)), h.skewX = null == y.skewX ? m.skewX : re(y.skewX, m.skewX), h.skewY = null == y.skewY ? m.skewY : re(y.skewY, m.skewY), (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                }
                for (p = m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == y.scale || (h.scaleZ = 1); --v > - 1; )
                    i = ve[v], u = h[i] - m[i], (u > g || -g > u || null != F[i]) && (f = !0, n = new pe(m, i, m[i], u, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                return u = y.transformOrigin, (u || xe && p && m.zOrigin) && (ye ? (f = !0, u = (u || G(t, i, r, !1, "50% 50%")) + "", i = we, n = new pe(d, i, 0, 0, n, -1, "css_transformOrigin"), n.b = d[i], n.plugin = a, xe ? (_ = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 ? parseFloat(u[2]) : _) || 0, n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px", n = new pe(m, "zOrigin", 0, 0, n, -1, n.n), n.b = _, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : ee(u + "", m)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
            }, prefix: !0}), de("boxShadow", {defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset"}), de("borderRadius", {defaultValue: "0px", parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, h, l, _, u, p, f, c, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++)
                    this.p.indexOf("border") && (b[h] = V(b[h])), u = _ = G(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), w = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = fe(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                return a
            }, prefix: !0, formatter: le("0px 0px 0px 0px", !1, !0)}), de("backgroundPosition", {defaultValue: "0 0", parser: function(t, e, i, s, n, a) {
                var o, h, l, _, u, p, f = "background-position", m = r || Z(t, null), d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = G(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                    for (o = d.split(" "), h = g.split(" "), L.setAttribute("src", p), l = 2; --l > - 1; )
                        d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - L.width : t.offsetHeight - L.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, g, n, a)
            }, formatter: ee}), de("backgroundSize", {defaultValue: "0 0", formatter: ee}), de("perspective", {defaultValue: "0px", prefix: !0}), de("perspectiveOrigin", {defaultValue: "50% 50%", prefix: !0}), de("transformStyle", {prefix: !0}), de("backfaceVisibility", {prefix: !0}), de("margin", {parser: _e("marginTop,marginRight,marginBottom,marginLeft")}), de("padding", {parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")}), de("clip", {defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, s, n, a) {
                var o, h, l;
                return 9 > c ? (h = t.currentStyle, l = 8 > c ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
            }}), de("textShadow", {defaultValue: "0px 0px 0px #999", color: !0, multi: !0}), de("autoRound,strictUnits", {parser: function(t, e, i, s, r) {
                return r
            }}), de("border", {defaultValue: "0px solid #000", parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            }, color: !0, formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
            }}), de("float,cssFloat,styleFloat", {parser: function(t, e, i, s, r) {
                var n = t.style, a = "cssFloat"in n ? "cssFloat" : "styleFloat";
                return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
            }});
        var Se = function(t) {
            var e, i = this.t, s = i.filter, r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = s.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=100)"), -1 === s.indexOf("opacity") ? i.filter += " alpha(opacity=" + r + ")" : i.filter = s.replace(T, "opacity=" + r))
        };
        de("opacity,alpha,autoAlpha", {defaultValue: "1", parser: function(t, e, i, s, n, a) {
                var o, h = parseFloat(G(t, "opacity", r, !1, "1")), l = t.style;
                return e = parseFloat(e), "autoAlpha" === i && (o = G(t, "visibility", r), 1 === h && "hidden" === o && 0 !== e && (h = 0), n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== h ? "visible" : "hidden", 0 === e ? "hidden" : "visible"), n.xs0 = "visible", s._overwriteProps.push(n.n)), z ? n = new pe(l, "opacity", h, e - h, n) : (n = new pe(l, "opacity", 100 * h, 100 * (e - h), n), n.xn1 = "autoAlpha" === i ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Se), n
            }});
        var Ae = function(t, e) {
            e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
        }, Ce = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.className = 0 === t ? this.b : this.e;
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Ae(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.className !== this.e && (this.t.className = this.e)
        };
        de("className", {parser: function(t, e, s, n, a, o, h) {
                var l, _, u, p, f, c = t.className, m = t.style.cssText;
                if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ce, a.pr = -11, i = !0, a.b = c, _ = W(t, r), u = t._gsClassPT) {
                    for (p = {}, f = u.data; f; )
                        p[f.p] = 1, f = f._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, l = H(t, _, W(t), h, p), t.className = c, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
            }});
        var Oe = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration)
                for (var e, i = "all" === this.e, s = this.t.style, r = i ? s.cssText.split(";") : this.e.split(","), n = r.length, a = o.transform.parse; --n > - 1; )
                    e = r[n], i && (e = e.substr(0, e.indexOf(":")).split(" ").join("")), o[e] && (e = o[e].parse === a ? ye : o[e].p), Ae(s, e)
        };
        for (de("clearProps", {parser:function(t, e, s, r, n) {
            return n = new pe(t, s, 0, 0, n, 2), n.setRatio = Oe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
        }}), h = "bezier,throwProps,physicsProps,physics2D".split(","), ce = h.length; ce--; )
            ge(h[ce]);
        h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return!1;
            this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
            var h, p, c, m, d, g, v, y, T, x = t.style;
            if (_ && "" === x.zIndex && (h = G(t, "zIndex", r), ("auto" === h || "" === h) && (x.zIndex = 0)), "string" == typeof e && (m = x.cssText, h = W(t, r), x.cssText = m + ";" + e, h = H(t, h, W(t)).difs, !z && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, x.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye?u && (_ = !0, "" === x.zIndex && (v = G(t, "zIndex", r), ("auto" === v || "" === v) && (x.zIndex = 0)), f && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T?"visible":"hidden"))):x.zoom = 1, c = p; c && c._next; )
                    c = c._next;
                y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && xe ? ke : ye ? Re : Pe, y.data = this._transform || be(t, r, !0), n.pop()
            }
            if (i) {
                for (; p; ) {
                    for (g = p._next, c = m; c && c.pr > p.pr; )
                        c = c._next;
                    (p._prev = c ? c._prev : d) ? p._prev._next = p : m = p, (p._next = c) ? c._prev = p : d = p, p = g
                }
                this._firstPT = m
            }
            return!0
        }, h.parse = function(t, e, i, n) {
            var a, h, _, u, p, f, c, m, d, g, v = t.style;
            for (a in e)
                f = e[a], h = o[a], h ? i = h.parse(t, f, a, this, i, n, e) : (p = G(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(f) ? (d || (f = oe(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p), c = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r), c = "px") : "left" === a || "top" === a ? (_ = Q(t, a, r), c = "px") : (_ = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = d ? f.substr((u + "").length) || "" : ""), "" === m && (m = s[a] || c), f = u || 0 === u ? (g ? u + _ : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = $(t, a, _, c), "%" === m ? (_ /= $(t, a, 100, "%") / 100, _ > 100 && (_ = 100), e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= $(t, a, 1, "em") : (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, u || _ || 0, 0, i, -1, "css_" + a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : B("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, _, u - _, i, 0, "css_" + a, l !== !1 && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = fe(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
            return i
        }, h.setRatio = function(t) {
            var e, i, s, r = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r; ) {
                        if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0), r.type)
                            if (1 === r.type)
                                if (s = r.l, 2 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)
                                        i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else
                for (; r; )
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, h._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2
        }, h._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next), t._next = e, t._prev = i), t
        }, h._kill = function(e) {
            var i, s, r, n = e;
            if (e.css_autoAlpha || e.css_alpha) {
                n = {};
                for (s in e)
                    n[s] = e[s];
                n.css_opacity = 1, n.css_autoAlpha && (n.css_visibility = 1)
            }
            return e.css_className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r > - 1; )
                    De(t[r], e, i);
            else
                for (s = t.childNodes, r = s.length; --r > - 1; )
                    n = s[r], a = n.type, n.style && (e.push(W(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s), h = [o], l = [], _ = [], u = [], p = e._internals.reservedProps;
            for (t = o._targets || o.target, De(t, l, u), o.render(i, !0), De(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > - 1; )
                if (n = H(u[r], l[r], _[r]), n.firstMPT) {
                    n = n.difs;
                    for (a in s)
                        p[a] && (n[a] = s[a]);
                    h.push(e.to(u[r], i, n))
                }
            return h
        }, t.activate([a]), a
    }, !0), function() {
        var t = window._gsDefine.plugin({propName: "roundProps", priority: -1, API: 2, init: function(t, e, i) {
                return this._tween = i, !0
            }}), e = t.prototype;
        e._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > - 1; )
                a[r[n]] = 1;
            for (n = r.length; --n > - 1; )
                for (t = r[n], e = s._firstPT; e; )
                    i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
            return!1
        }, e._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
        }
    }(), window._gsDefine.plugin({propName: "attr", API: 2, init: function(t, e) {
            var i;
            if ("function" != typeof t.setAttribute)
                return!1;
            this._target = t, this._proxy = {};
            for (i in e)
                this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i), this._overwriteProps.push(i);
            return!0
        }, set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, s = i.length; --s > - 1; )
                e = i[s], this._target.setAttribute(e, this._proxy[e] + "")
        }}), window._gsDefine.plugin({propName: "directionalRotation", API: 2, init: function(t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
            for (i in e)
                "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
            return!0
        }, set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }})._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = window.GreenSockGlobals || window, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function(e, i) {
            var s = h("easing." + e, function() {
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, s
        }, _ = t.register || function() {
        }, u = function(t, e, i, s) {
            var r = h("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new s}, !0);
            return _(r, t), r
        }, p = function(t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, f = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, r.config = function(t) {
                return new s(t)
            }, s
        }, c = u("Back", f("BackOut", function(t) {
            return(t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > - 1; )
                i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {x: i, y: s};
            for (l.sort(function(t, e) {
                return t.x - e.x
            }), o = new p(1, 1, null), f = u; --f > - 1; )
                a = l[f], o = new p(a.x, a.y, o);
            this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return-(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0), n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return-(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return-Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return-.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {find: function(e) {
                return t.map[e]
            }}, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), c
    }, !0)
}), function(t) {
    "use strict";
    var e, i, s, r, n, a = t.GreenSockGlobals || t, o = function(t) {
        var e, i = t.split("."), s = a;
        for (e = 0; i.length > e; e++)
            s[i[e]] = s = s[i[e]] || {};
        return s
    }, h = o("com.greensock"), l = [].slice, _ = function() {
    }, u = {}, p = function(e, i, s, r) {
        this.sc = u[e] ? u[e].sc : [], u[e] = this, this.gsClass = null, this.func = s;
        var n = [];
        this.check = function(h) {
            for (var l, _, f, c, m = i.length, d = m; --m > - 1; )
                (l = u[i[m]] || new p(i[m], [])).gsClass ? (n[m] = l.gsClass, d--) : h && l.sc.push(this);
            if (0 === d && s)
                for (_ = ("com.greensock." + e).split("."), f = _.pop(), c = o(_.join("."))[f] = this.gsClass = s.apply(s, n), r && (a[f] = c, "function" == typeof define && define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath + "/":"") + e.split(".").join("/"), [], function() {
                    return c
                }):"undefined" != typeof module && module.exports && (module.exports = c)), m = 0; this.sc.length > m; m++)
                    this.sc[m].check()
        }, this.check(!0)
    }, f = t._gsDefine = function(t, e, i, s) {
        return new p(t, e, i, s)
    }, c = h._class = function(t, e, i) {
        return e = e || function() {
        }, f(t, [], function() {
            return e
        }, i), e
    };
    f.globals = a;
    var m = [0, 0, 1, 1], d = [], g = c("easing.Ease", function(t, e, i, s) {
        this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? m.concat(e) : m
    }, !0), v = g.map = {}, y = g.register = function(t, e, i, s) {
        for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > - 1; )
            for (n = l[_], r = s?c("easing." + n, null, !0):h.easing[n] || {}, a = u.length; --a > - 1; )
                o = u[a], v[n + "." + o] = v[o + n] = r[o] = t.getRatio ? t : t[o] || new t
    };
    for (s = g.prototype, s._calcEnd = !1, s.getRatio = function(t) {
        if (this._func)
            return this._params[0] = t, this._func.apply(null, this._params);
        var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
    }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > - 1; )
        s = e[i] + ",Power" + i, y(new g(null, null, 1, i), s, "easeOut", !0), y(new g(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")), y(new g(null, null, 3, i), s, "easeInOut");
    v.linear = h.easing.Linear.easeIn, v.swing = h.easing.Quad.easeInOut;
    var T = c("events.EventDispatcher", function(t) {
        this._listeners = {}, this._eventTarget = t || this
    });
    s = T.prototype, s.addEventListener = function(t, e, i, s, a) {
        a = a || 0;
        var o, h, l = this._listeners[t], _ = 0;
        for (null == l && (this._listeners[t] = l = []), h = l.length; --h > - 1; )
            o = l[h], o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && a > o.pr && (_ = h + 1);
        l.splice(_, 0, {c: e, s: i, up: s, pr: a}), this !== r || n || r.wake()
    }, s.removeEventListener = function(t, e) {
        var i, s = this._listeners[t];
        if (s)
            for (i = s.length; --i > - 1; )
                if (s[i].c === e)
                    return s.splice(i, 1), void 0
    }, s.dispatchEvent = function(t) {
        var e, i, s, r = this._listeners[t];
        if (r)
            for (e = r.length, i = this._eventTarget; --e > - 1; )
                s = r[e], s.up ? s.c.call(s.s || i, {type: t, target: i}) : s.c.call(s.s || i)
    };
    var w = t.requestAnimationFrame, x = t.cancelAnimationFrame, b = Date.now || function() {
        return(new Date).getTime()
    };
    for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > - 1 && !w; )
        w = t[e[i] + "RequestAnimationFrame"], x = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
    c("Ticker", function(t, e) {
        var i, s, a, o, h, l = this, u = b(), p = e !== !1 && w, f = function(t) {
            l.time = (b() - u) / 1e3;
            var e = a, r = l.time - h;
            (!i || r > 0 || t === !0) && (l.frame++, h += r + (r >= o ? .004 : o - r), l.dispatchEvent("tick")), t !== !0 && e === a && (a = s(f))
        };
        T.call(l), this.time = this.frame = 0, this.tick = function() {
            f(!0)
        }, this.sleep = function() {
            null != a && (p && x ? x(a) : clearTimeout(a), s = _, a = null, l === r && (n = !1))
        }, this.wake = function() {
            null !== a && l.sleep(), s = 0 === i ? _ : p && w ? w : function(t) {
                return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
            }, l === r && (n = !0), f(2)
        }, this.fps = function(t) {
            return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, l.wake(), void 0) : i
        }, this.useRAF = function(t) {
            return arguments.length ? (l.sleep(), p = t, l.fps(i), void 0) : p
        }, l.fps(t), setTimeout(function() {
            p && (!a || 5 > l.frame) && l.useRAF(!1)
        }, 1500)
    }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
    var P = c("core.Animation", function(t, e) {
        if (this.vars = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0, N) {
            n || r.wake();
            var i = this.vars.useFrames ? E : N;
            i.add(this, i._time), this.vars.paused && this.paused(!0)
        }
    });
    r = P.ticker = new h.Ticker, s = P.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1, s.play = function(t, e) {
        return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
    }, s.pause = function(t, e) {
        return arguments.length && this.seek(t, e), this.paused(!0)
    }, s.resume = function(t, e) {
        return arguments.length && this.seek(t, e), this.paused(!1)
    }, s.seek = function(t, e) {
        return this.totalTime(Number(t), e !== !1)
    }, s.restart = function(t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }, s.reverse = function(t, e) {
        return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, s.render = function() {
    }, s.invalidate = function() {
        return this
    }, s._enabled = function(t, e) {
        return n || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, s._kill = function() {
        return this._enabled(!1, !1)
    }, s.kill = function(t, e) {
        return this._kill(t, e), this
    }, s._uncache = function(t) {
        for (var e = t ? this : this.timeline; e; )
            e._dirty = !0, e = e.timeline;
        return this
    }, s.eventCallback = function(t, e, i, s) {
        if (null == t)
            return null;
        if ("on" === t.substr(0, 2)) {
            var r, n = this.vars;
            if (1 === arguments.length)
                return n[t];
            if (null == e)
                delete n[t];
            else if (n[t] = e, n[t + "Params"] = i, n[t + "Scope"] = s, i)
                for (r = i.length; --r > - 1; )
                    "{self}" === i[r] && (i = n[t + "Params"] = i.concat(), i[r] = this);
            "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }, s.delay = function(t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, s.duration = function(t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, s.totalDuration = function(t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, s.time = function(t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, s.totalTime = function(t, e, i) {
        if (n || r.wake(), !arguments.length)
            return this._totalTime;
        if (this._timeline) {
            if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var s = this._totalDuration, a = this._timeline;
                if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), !a._active)
                    for (; a._timeline; )
                        a.totalTime(a._totalTime, !0), a = a._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
        }
        return this
    }, s.startTime = function(t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, s.timeScale = function(t) {
        if (!arguments.length)
            return this._timeScale;
        if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - (i - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
    }, s.reversed = function(t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, s.paused = function(t) {
        if (!arguments.length)
            return this._paused;
        if (t != this._paused && this._timeline) {
            n || t || r.wake();
            var e = this._timeline.rawTime(), i = e - this._pauseTime;
            !t && this._timeline.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === i || 0 === this._duration || this.render(this._totalTime, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
    };
    var k = c("core.SimpleTimeline", function(t) {
        P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    s = k.prototype = new P, s.constructor = k, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
        var i, s;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
            for (s = t._startTime; i && i._startTime > s; )
                i = i._prev;
        return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
    }, s._remove = function(t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
    }, s.render = function(t, e, i) {
        var s, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
    }, s.rawTime = function() {
        return n || r.wake(), this._totalTime
    };
    var R = c("TweenLite", function(t, e, i) {
        if (P.call(this, e, i), null == t)
            throw"Cannot tween a null target.";
        this.target = t = "string" != typeof t ? t : R.selector(t) || t;
        var s, r, n, a = t.jquery || t.length && t[0] && t[0].nodeType && t[0].style, o = this.vars.overwrite;
        if (this._overwrite = o = null == o ? F[R.defaultOverwrite] : "number" == typeof o ? o >> 0 : F[o], (a || t instanceof Array) && "number" != typeof t[0])
            for (this._targets = n = l.call(t, 0), this._propLookup = [], this._siblings = [], s = 0; n.length > s; s++)
                r = n[s], r ? "string" != typeof r ? r.length && r[0] && r[0].nodeType && r[0].style ? (n.splice(s--, 1), this._targets = n = n.concat(l.call(r, 0))) : (this._siblings[s] = L(r, this, !1), 1 === o && this._siblings[s].length > 1 && X(r, this, null, 1, this._siblings[s])) : (r = n[s--] = R.selector(r), "string" == typeof r && n.splice(s + 1, 1)) : n.splice(s--, 1);
        else
            this._propLookup = {}, this._siblings = L(t, this, !1), 1 === o && this._siblings.length > 1 && X(t, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
    }, !0), S = function(t) {
        return t.length && t[0] && t[0].nodeType && t[0].style
    }, A = function(t, e) {
        var i, s = {};
        for (i in t)
            I[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i || !(!O[i] || O[i] && O[i]._autoCSS) || (s[i] = t[i], delete t[i]);
        t.css = s
    };
    s = R.prototype = new P, s.constructor = R, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, R.version = "1.9.7", R.defaultEase = s._ease = new g(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = r, R.autoSleep = !0, R.selector = t.$ || t.jQuery || function(e) {
        return t.$ ? (R.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    };
    var C = R._internals = {}, O = R._plugins = {}, D = R._tweenLookup = {}, M = 0, I = C.reservedProps = {ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1}, F = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0}, E = P._rootFramesTimeline = new k, N = P._rootTimeline = new k;
    N._startTime = r.time, E._startTime = r.frame, N._active = E._active = !0, P._updateRoot = function() {
        if (N.render((r.time - N._startTime) * N._timeScale, !1, !1), E.render((r.frame - E._startTime) * E._timeScale, !1, !1), !(r.frame % 120)) {
            var t, e, i;
            for (i in D) {
                for (e = D[i].tweens, t = e.length; --t > - 1; )
                    e[t]._gc && e.splice(t, 1);
                0 === e.length && delete D[i]
            }
            if (i = N._first, (!i || i._paused) && R.autoSleep && !E._first && 1 === r._listeners.tick.length) {
                for (; i && i._paused; )
                    i = i._next;
                i || r.sleep()
            }
        }
    }, r.addEventListener("tick", P._updateRoot);
    var L = function(t, e, i) {
        var s, r, n = t._gsTweenID;
        if (D[n || (t._gsTweenID = n = "t" + M++)] || (D[n] = {target: t, tweens: []}), e && (s = D[n].tweens, s[r = s.length] = e, i))
            for (; --r > - 1; )
                s[r] === e && s.splice(r, 1);
        return D[n].tweens
    }, X = function(t, e, i, s, r) {
        var n, a, o, h;
        if (1 === s || s >= 4) {
            for (h = r.length, n = 0; h > n; n++)
                if ((o = r[n]) !== e)
                    o._gc || o._enabled(!1, !1) && (a = !0);
                else if (5 === s)
                    break;
            return a
        }
        var l, _ = e._startTime + 1e-10, u = [], p = 0, f = 0 === e._duration;
        for (n = r.length; --n > - 1; )
            (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || U(e, 0, f), 0 === U(o, l, f) && (u[p++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[p++] = o)));
        for (n = p; --n > - 1; )
            o = u[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
        return a
    }, U = function(t, e, i) {
        for (var s = t._timeline, r = s._timeScale, n = t._startTime, a = 1e-10; s._timeline; ) {
            if (n += s._startTime, r *= s._timeScale, s._paused)
                return-100;
            s = s._timeline
        }
        return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * a > n - e ? a : (n += t.totalDuration() / t._timeScale / r) > e + a ? 0 : n - e - a
    };
    s._init = function() {
        var t, e, i, s, r = this.vars, n = this._overwrittenProps, a = this._duration, o = r.ease;
        if (r.startAt) {
            if (r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = R.to(this.target, 0, r.startAt), r.immediateRender && (this._startAt = null, 0 === this._time && 0 !== a))
                return
        } else if (r.runBackwards && r.immediateRender && 0 !== a)
            if (this._startAt)
                this._startAt.render(-1, !0), this._startAt = null;
            else if (0 === this._time) {
                i = {};
                for (s in r)
                    I[s] && "autoCSS" !== s || (i[s] = r[s]);
                return i.overwrite = 0, this._startAt = R.to(this.target, 0, i), void 0
            }
        if (this._ease = o ? o instanceof g ? r.easeParams instanceof Array ? o.config.apply(o, r.easeParams) : o : "function" == typeof o ? new g(o, r.easeParams) : v[o] || R.defaultEase : R.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (t = this._targets.length; --t > - 1; )
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
        else
            e = this._initProps(this.target, this._propLookup, this._siblings, n);
        if (e && R._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
            for (i = this._firstPT; i; )
                i.s += i.c, i.c = -i.c, i = i._next;
        this._onUpdate = r.onUpdate, this._initted = !0
    }, s._initProps = function(t, e, i, s) {
        var r, n, a, o, h, l, _;
        if (null == t)
            return!1;
        this.vars.css || t.style && t.nodeType && O.css && this.vars.autoCSS !== !1 && A(this.vars, t);
        for (r in this.vars) {
            if (I[r]) {
                if (("onStartParams" === r || "onUpdateParams" === r || "onCompleteParams" === r || "onReverseCompleteParams" === r || "onRepeatParams" === r) && (h = this.vars[r]))
                    for (n = h.length; --n > - 1; )
                        "{self}" === h[n] && (h = this.vars[r] = h.concat(), h[n] = this)
            } else if (O[r] && (o = new O[r])._onInitTween(t, this.vars[r], this)) {
                for (this._firstPT = l = {_next:this._firstPT, t:o, p:"setRatio", s:0, c:1, f:!0, n:r, pg:!0, pr:o._priority}, n = o._overwriteProps.length; --n > - 1; )
                    e[o._overwriteProps[n]] = this._firstPT;
                (o._priority || o._onInitAllProps) && (a = !0), (o._onDisable || o._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else
                this._firstPT = e[r] = l = {_next: this._firstPT, t: t, p: r, f: "function" == typeof t[r], n: r, pg: !1, pr: 0}, l.s = l.f ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), _ = this.vars[r], l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
            l && l._next && (l._next._prev = l)
        }
        return s && this._kill(s, t) ? this._initProps(t, e, i, s) : this._overwrite > 1 && this._firstPT && i.length > 1 && X(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, s)) : a
    }, s.render = function(t, e, i) {
        var s, r, n, a = this._time;
        if (t >= this._duration)
            this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
        else if (1e-7 > t)
            this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
            var o = t / this._duration, h = this._easeType, l = this._easePower;
            (1 === h || 3 === h && o >= .5) && (o = 1 - o), 3 === h && (o *= 2), 1 === l ? o *= o : 2 === l ? o *= o * o : 3 === l ? o *= o * o * o : 4 === l && (o *= o * o * o * o), this.ratio = 1 === h ? 1 - o : 2 === h ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
        } else
            this.ratio = this._ease.getRatio(t / this._duration);
        if (this._time !== a || i) {
            if (!this._initted) {
                if (this._init(), !this._initted)
                    return;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || this._paused || (this._active = !0), 0 === a && (this._startAt && (t >= 0?this._startAt.render(t, e, i):r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))), n = this._firstPT; n; )
                n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || d)))
        }
    }, s._kill = function(t, e) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target))
            return this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
        var i, s, r, n, a, o, h, l;
        if ((e instanceof Array || S(e)) && "number" != typeof e[0])
            for (i = e.length; --i > - 1; )
                this._kill(t, e[i]) && (o = !0);
        else {
            if (this._targets) {
                for (i = this._targets.length; --i > - 1; )
                    if (e === this._targets[i]) {
                        a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target)
                    return!1;
                a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (a) {
                h = t || a, l = t !== s && "all" !== s && t !== a && (null == t || t._tempKill !== !0);
                for (r in h)
                    (n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return o
    }, s.invalidate = function() {
        return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, s._enabled = function(t, e) {
        if (n || r.wake(), t && this._gc) {
            var i, s = this._targets;
            if (s)
                for (i = s.length; --i > - 1; )
                    this._siblings[i] = L(s[i], this, !0);
            else
                this._siblings = L(this.target, this, !0)
        }
        return P.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? R._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
    }, R.to = function(t, e, i) {
        return new R(t, e, i)
    }, R.from = function(t, e, i) {
        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
    }, R.fromTo = function(t, e, i, s) {
        return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new R(t, e, s)
    }, R.delayedCall = function(t, e, i, s, r) {
        return new R(e, 0, {delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: r, overwrite: 0})
    }, R.set = function(t, e) {
        return new R(t, 0, e)
    }, R.killTweensOf = R.killDelayedCallsTo = function(t, e) {
        for (var i = R.getTweensOf(t), s = i.length; --s > - 1; )
            i[s]._kill(e, t)
    }, R.getTweensOf = function(t) {
        if (null == t)
            return[];
        t = "string" != typeof t ? t : R.selector(t) || t;
        var e, i, s, r;
        if ((t instanceof Array || S(t)) && "number" != typeof t[0]) {
            for (e = t.length, i = []; --e > - 1; )
                i = i.concat(R.getTweensOf(t[e]));
            for (e = i.length; --e > - 1; )
                for (r = i[e], s = e; --s > - 1; )
                    r === i[s] && i.splice(e, 1)
        } else
            for (i = L(t).concat(), e = i.length; --e > - 1; )
                i[e]._gc && i.splice(e, 1);
        return i
    };
    var z = c("plugins.TweenPlugin", function(t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = z.prototype
    }, !0);
    if (s = z.prototype, z.version = "1.9.1", z.API = 2, s._firstPT = null, s._addTween = function(t, e, i, s, r, n) {
        var a, o;
        null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) && (this._firstPT = o = {_next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n}, o._next && (o._next._prev = o))
    }, s.setRatio = function(t) {
        for (var e, i = this._firstPT, s = 1e-6; i; )
            e = i.c * t + i.s, i.r ? e = e + (e > 0 ? .5 : -.5) >> 0 : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
    }, s._kill = function(t) {
        var e, i = this._overwriteProps, s = this._firstPT;
        if (null != t[this._propName])
            this._overwriteProps = [];
        else
            for (e = i.length; --e > - 1; )
                null != t[i[e]] && i.splice(e, 1);
        for (; s; )
            null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
        return!1
    }, s._roundProps = function(t, e) {
        for (var i = this._firstPT; i; )
            (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
    }, R._onPluginEvent = function(t, e) {
        var i, s, r, n, a, o = e._firstPT;
        if ("_onInitAllProps" === t) {
            for (; o; ) {
                for (a = o._next, s = r; s && s.pr > o.pr; )
                    s = s._next;
                (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
            }
            o = e._firstPT = r
        }
        for (; o; )
            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
        return i
    }, z.activate = function(t) {
        for (var e = t.length; --e > - 1; )
            t[e].API === z.API && (O[(new t[e])._propName] = t[e]);
        return!0
    }, f.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API))
            throw"illegal plugin definition.";
        var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps"}, a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
            z.call(this, i, s), this._overwriteProps = r || []
        }, t.global === !0), o = a.prototype = new z(i);
        o.constructor = a, a.API = t.API;
        for (e in n)
            "function" == typeof t[e] && (o[n[e]] = t[e]);
        return a.version = t.version, z.activate([a]), a
    }, e = t._gsQueue) {
        for (i = 0; e.length > i; i++)
            e[i]();
        for (s in u)
            u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
    }
    n = !1
}(window);

//</editor-fold>

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

//<editor-fold defaultstate="collapsed" desc="stellar js">
(function(e, t, n, r) {
    function d(t, n) {
        this.element = t, this.options = e.extend({}, s, n), this._defaults = s, this._name = i, this.init()
    }
    var i = "stellar", s = {scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function(e) {
            e.hide()
        }, showElement: function(e) {
            e.show()
        }}, o = {scroll: {getLeft: function(e) {
                return e.scrollLeft()
            }, setLeft: function(e, t) {
                e.scrollLeft(t)
            }, getTop: function(e) {
                return e.scrollTop()
            }, setTop: function(e, t) {
                e.scrollTop(t)
            }}, position: {getLeft: function(e) {
                return parseInt(e.css("left"), 10) * -1
            }, getTop: function(e) {
                return parseInt(e.css("top"), 10) * -1
            }}, margin: {getLeft: function(e) {
                return parseInt(e.css("margin-left"), 10) * -1
            }, getTop: function(e) {
                return parseInt(e.css("margin-top"), 10) * -1
            }}, transform: {getLeft: function(e) {
                var t = getComputedStyle(e[0])[f];
                return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
            }, getTop: function(e) {
                var t = getComputedStyle(e[0])[f];
                return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
            }}}, u = {position: {setLeft: function(e, t) {
                e.css("left", t)
            }, setTop: function(e, t) {
                e.css("top", t)
            }}, transform: {setPosition: function(e, t, n, r, i) {
                e[0].style[f] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
            }}}, a = function() {
        var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, n = e("script")[0].style, r = "", i;
        for (i in n)
            if (t.test(i)) {
                r = i.match(t)[0];
                break
            }
        return"WebkitOpacity"in n && (r = "Webkit"), "KhtmlOpacity"in n && (r = "Khtml"), function(e) {
            return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
        }
    }(), f = a("transform"), l = e("<div />", {style: "background:#fff"}).css("background-position-x") !== r, c = l ? function(e, t, n) {
        e.css({"background-position-x": t, "background-position-y": n})
    } : function(e, t, n) {
        e.css("background-position", t + " " + n)
    }, h = l ? function(e) {
        return[e.css("background-position-x"), e.css("background-position-y")]
    } : function(e) {
        return e.css("background-position").split(" ")
    }, p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
        setTimeout(e, 1e3 / 60)
    };
    d.prototype = {init: function() {
            this.options.name = i + "_" + Math.floor(Math.random() * 1e9), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), this.options.scrollProperty === "scroll" ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements: function() {
            this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters: function() {
            var e = this, t = o[e.options.scrollProperty];
            this._getScrollLeft = function() {
                return t.getLeft(e.$scrollElement)
            }, this._getScrollTop = function() {
                return t.getTop(e.$scrollElement)
            }
        }, _defineSetters: function() {
            var t = this, n = o[t.options.scrollProperty], r = u[t.options.positionProperty], i = n.setLeft, s = n.setTop;
            this._setScrollLeft = typeof i == "function" ? function(e) {
                i(t.$scrollElement, e)
            } : e.noop, this._setScrollTop = typeof s == "function" ? function(e) {
                s(t.$scrollElement, e)
            } : e.noop, this._setPosition = r.setPosition || function(e, n, i, s, o) {
                t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o)
            }
        }, _handleWindowLoadAndResize: function() {
            var n = this, r = e(t);
            n.options.responsive && r.bind("load." + this.name, function() {
                n.refresh()
            }), r.bind("resize." + this.name, function() {
                n._detectViewport(), n.options.responsive && n.refresh()
            })
        }, refresh: function(n) {
            var r = this, i = r._getScrollLeft(), s = r._getScrollTop();
            (!n || !n.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function() {
                var e = r._getScrollLeft(), t = r._getScrollTop();
                r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
            }), this._setScrollLeft(i), this._setScrollTop(s)
        }, _detectViewport: function() {
            var e = this.$viewportElement.offset(), t = e !== null && e !== r;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
        }, _findParticles: function() {
            var t = this, n = this._getScrollLeft(), i = this._getScrollTop();
            if (this.particles !== r)
                for (var s = this.particles.length - 1; s >= 0; s--)
                    this.particles[s].$element.data("stellar-elementIsActive", r);
            this.particles = [];
            if (!this.options.parallaxElements)
                return;
            this.$element.find("[data-stellar-ratio]").each(function(n) {
                var i = e(this), s, o, u, a, f, l, c, h, p, d = 0, v = 0, m = 0, g = 0;
                if (!i.data("stellar-elementIsActive"))
                    i.data("stellar-elementIsActive", this);
                else if (i.data("stellar-elementIsActive") !== this)
                    return;
                t.options.showElement(i), i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top"))), u = i.position().left, a = i.position().top, f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10), l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10), h = i.offset().left - f, p = i.offset().top - l, i.parents().each(function() {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0)
                        return d = m, v = g, c = t, !1;
                    m += t.position().left, g += t.position().top
                }), s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset, o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({$element: i, $offsetParent: c, isFixed: i.css("position") === "fixed", horizontalOffset: s, verticalOffset: o, startingPositionLeft: u, startingPositionTop: a, startingOffsetLeft: h, startingOffsetTop: p, parentOffsetLeft: d, parentOffsetTop: v, stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1, width: i.outerWidth(!0), height: i.outerHeight(!0), isHidden: !1})
            })
        }, _findBackgrounds: function() {
            var t = this, n = this._getScrollLeft(), i = this._getScrollTop(), s;
            this.backgrounds = [];
            if (!this.options.parallaxBackgrounds)
                return;
            s = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (s = s.add(this.$element)), s.each(function() {
                var s = e(this), o = h(s), u, a, f, l, p, d, v, m, g, y = 0, b = 0, w = 0, E = 0;
                if (!s.data("stellar-backgroundIsActive"))
                    s.data("stellar-backgroundIsActive", this);
                else if (s.data("stellar-backgroundIsActive") !== this)
                    return;
                s.data("stellar-backgroundStartingLeft") ? c(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop")) : (s.data("stellar-backgroundStartingLeft", o[0]), s.data("stellar-backgroundStartingTop", o[1])), p = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10), d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10), v = s.offset().left - p - n, m = s.offset().top - d - i, s.parents().each(function() {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0)
                        return y = w, b = E, g = t, !1;
                    w += t.position().left, E += t.position().top
                }), u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset, a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset, t.backgrounds.push({$element: s, $offsetParent: g, isFixed: s.css("background-attachment") === "fixed", horizontalOffset: u, verticalOffset: a, startingValueLeft: o[0], startingValueTop: o[1], startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10), startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10), startingPositionLeft: s.position().left, startingPositionTop: s.position().top, startingOffsetLeft: v, startingOffsetTop: m, parentOffsetLeft: y, parentOffsetTop: b, stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio")})
            })
        }, _reset: function() {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--)
                e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (i = this.backgrounds.length - 1; i >= 0; i--)
                r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), c(r.$element, r.startingValueLeft, r.startingValueTop)
        }, destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets: function() {
            var n = this, r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), typeof this.options.horizontalOffset == "function" ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function() {
                n.horizontalOffset = n.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, typeof this.options.verticalOffset == "function" ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function() {
                n.verticalOffset = n.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements: function() {
            var e = this._getScrollLeft(), t = this._getScrollTop(), n, r, i, s, o, u, a, f = !0, l = !0, h, p, d, v, m;
            if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight)
                return;
            this.currentScrollLeft = e, this.currentScrollTop = t, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight;
            for (m = this.particles.length - 1; m >= 0; m--)
                i = this.particles[m], s = i.isFixed ? 1 : 0, this.options.horizontalScrolling ? (h = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft, d = h - i.startingPositionLeft + i.startingOffsetLeft) : (h = i.startingPositionLeft, d = i.startingOffsetLeft), this.options.verticalScrolling ? (p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop, v = p - i.startingPositionTop + i.startingOffsetTop) : (p = i.startingPositionTop, v = i.startingOffsetTop), this.options.hideDistantElements && (l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop), l && f ? (i.isHidden && (this.options.showElement(i.$element), i.isHidden = !1), this._setPosition(i.$element, h, i.startingPositionLeft, p, i.startingPositionTop)) : i.isHidden || (this.options.hideElement(i.$element), i.isHidden = !0);
            for (m = this.backgrounds.length - 1; m >= 0; m--)
                o = this.backgrounds[m], s = o.isFixed ? 0 : 1, u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft, a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop, c(o.$element, u, a)
        }, _handleScrollEvent: function() {
            var e = this, t = !1, n = function() {
                e._repositionElements(), t = !1
            }, r = function() {
                t || (p(n), t = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, r), r()
        }, _startAnimationLoop: function() {
            var e = this;
            this._animationLoop = function() {
                p(e._animationLoop), e._repositionElements()
            }, this._animationLoop()
        }}, e.fn[i] = function(t) {
        var n = arguments;
        if (t === r || typeof t == "object")
            return this.each(function() {
                e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new d(this, t))
            });
        if (typeof t == "string" && t[0] !== "_" && t !== "init")
            return this.each(function() {
                var r = e.data(this, "plugin_" + i);
                r instanceof d && typeof r[t] == "function" && r[t].apply(r, Array.prototype.slice.call(n, 1)), t === "destroy" && e.data(this, "plugin_" + i, null)
            })
    }, e[i] = function(n) {
        var r = e(t);
        return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
    }, e[i].scrollProperty = o, e[i].positionProperty = u, t.Stellar = d
})(jQuery, this, document);
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

$(window).load(function() {


});
$(document).ready(function() {
    $("#dcmmenu").mmenu({
        classes: "mm-slide"
    });

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


/* #Title
 ================================================== */
//<editor-fold defaultstate="collapsed" desc="title">

//</editor-fold>





///////////////////////////////
// Parallax
///////////////////////////////
$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;
    if (y_scroll_pos > scroll_pos_test) {
        jQuery('.top').fadeIn(1000);
        jQuery('.iphone').children('.top').css('display', 'none !important');
    } else {
        jQuery('.top').fadeOut(500);
    }
});
jQuery('.top').click(function() {
    jQuery('html, body').animate({scrollTop: 0}, 1000, 'easeOutCubic');//return false;
});

function hover_overlay() {
    jQuery('.featured h2, .featured a.one_col .featuredoverlay, .featured a.two_col .featuredoverlay, .featured .bubblewrap').each(function() {
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
    if ($(window).scrollTop() > $('header').height()) {
        $("header .navigation-bar")
                .addClass("fixed-top")
                .addClass(" shadow")
                ;
    } else {
        $("header .navigation-bar")
                //  .removeClass("fixed-top")
                // .removeClass(" shadow")
                ;
    }
}


/* #Override aui
 ======================================================*/
$(function() {


});