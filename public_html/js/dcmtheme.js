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

//<editor-fold defaultstate="collapsed" desc="scrollama">//
/*
 SUPERSCROLLORAMA - The jQuery plugin for doing scroll animations
 by John Polacek (@johnpolacek)
 
 Powered by the Greensock Tweening Platform
 http://www.greensock.com
 Greensock License info at http://www.greensock.com/licensing/
 
 Dual licensed under MIT and GPL.
 
 Thanks to Jan Paepke (@janpaepke) for making many nice improvements
 */
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


//<editor-fold defaultstate="collapse" desc="metroui.org.ua js">
var METRO_AUTO_REINIT, METRO_LOCALE, METRO_WEEK_START, METRO_DIALOG = !1;
(function(c) {
    c.Metro = function(a) {
        c.extend({}, a)
    };
    c.Metro.getDeviceSize = function() {
        return{width: 0 < window.innerWidth ? window.innerWidth : screen.width, height: 0 < window.innerHeight ? window.innerHeight : screen.height}
    }
})(jQuery);
$(function() {
    $("html").on("click", function(c) {
        $(".fixnavbar.dropdown-menu").each(function(a, b) {
            $(b).hasClass("keep-open") || "block" != $(b).css("display") || $(b).hide()
        })
    })
});
$(function() {
    $(window).on("resize", function() {
        if (METRO_DIALOG) {
            var c = ($(window).height() - METRO_DIALOG.outerHeight()) / 2, a = ($(window).width() - METRO_DIALOG.outerWidth()) / 2;
            METRO_DIALOG.css({top: c, left: a})
        }
    })
});
(function(c) {
    c.Metro.currentLocale = "en";
    c.Metro.currentLocale = void 0 != METRO_LOCALE ? METRO_LOCALE : "en";
    c.Metro.Locale = {en: {months: "January February March April May June July August September October November December Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Su Mo Tu We Th Fr Sa".split(" "), buttons: "Today Clear Cancel Help Prior Next Finish".split(" ")}, fr: {months: "Janvier F\u00e9vrier Mars Avril Mai Juin Juillet Ao\u00fbt Septembre Octobre Novembre D\u00e9cembre Jan F\u00e9v Mars Avr Mai Juin Juil Ao\u00fbt Sept Oct Nov D\u00e9c".split(" "),
            days: "Dimanche Lundi Mardi Mercredi Jeudi Vendredi Samedi Di Lu Ma Me Je Ve Sa".split(" "), buttons: "Aujourd'hui Effacer Annuler Aide Pr\u00e9cedent Suivant Fin".split(" ")}, nl: {months: "Januari Februari Maart April Mei Juni Juli Augustus September Oktober November December Jan Feb Mrt Apr Mei Jun Jul Aug Sep Okt Nov Dec".split(" "), days: "Zondag Maandag Dinsdag Woensdag Donderdag Vrijdag Zaterdag Zo Ma Di Wo Do Vr Za".split(" "), buttons: "Vandaag Verwijderen Annuleren Hulp Vorige Volgende Einde".split(" ")},
        ua: {months: "\u0421\u0456\u0447\u0435\u043d\u044c \u041b\u044e\u0442\u0438\u0439 \u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c \u041a\u0432\u0456\u0442\u0435\u043d\u044c \u0422\u0440\u0430\u0432\u0435\u043d\u044c \u0427\u0435\u0440\u0432\u0435\u043d\u044c \u041b\u0438\u043f\u0435\u043d\u044c \u0421\u0435\u0440\u043f\u0435\u043d\u044c \u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c \u0416\u043e\u0432\u0442\u0435\u043d\u044c \u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434 \u0413\u0440\u0443\u0434\u0435\u043d\u044c \u0421\u0456\u0447 \u041b\u044e\u0442 \u0411\u0435\u0440 \u041a\u0432\u0456 \u0422\u0440\u0430 \u0427\u0435\u0440 \u041b\u0438\u043f \u0421\u0435\u0440 \u0412\u0435\u0440 \u0416\u043e\u0432 \u041b\u0438\u0441 \u0413\u0440\u0443".split(" "),
            days: "\u041d\u0435\u0434\u0456\u043b\u044f \u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0421\u0435\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440 \u041f\u2019\u044f\u0442\u043d\u0438\u0446\u044f \u0421\u0443\u0431\u043e\u0442\u0430 \u041d\u0434 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "), buttons: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0414\u043e\u043f\u043e\u043c\u043e\u0433\u0430 \u041d\u0430\u0437\u0430\u0434 \u0412\u043f\u0435\u0440\u0435\u0434 \u0413\u043e\u0442\u043e\u0432\u043e".split(" ")},
        ru: {months: "\u042f\u043d\u0432\u0430\u0440\u044c \u0424\u0435\u0432\u0440\u0430\u043b\u044c \u041c\u0430\u0440\u0442 \u0410\u043f\u0440\u0435\u043b\u044c \u041c\u0430\u0439 \u0418\u044e\u043d\u044c \u0418\u044e\u043b\u044c \u0410\u0432\u0433\u0443\u0441\u0442 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u041e\u043a\u0442\u044f\u0431\u0440\u044c \u041d\u043e\u044f\u0431\u0440\u044c \u0414\u0435\u043a\u0430\u0431\u0440\u044c \u042f\u043d\u0432 \u0424\u0435\u0432 \u041c\u0430\u0440 \u0410\u043f\u0440 \u041c\u0430\u0439 \u0418\u044e\u043d \u0418\u044e\u043b \u0410\u0432\u0433 \u0421\u0435\u043d \u041e\u043a\u0442 \u041d\u043e\u044f \u0414\u0435\u043a".split(" "),
            days: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043e\u0442\u0430 \u0412\u0441 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "), buttons: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u041f\u043e\u043c\u043e\u0449\u044c \u041d\u0430\u0437\u0430\u0434 \u0412\u043f\u0435\u0440\u0435\u0434 \u0413\u043e\u0442\u043e\u0432\u043e".split(" ")},
        zhCN: {months: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708 \u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "), days: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d \u65e5 \u4e00 \u4e8c \u4e09 \u56db \u4e94 \u516d".split(" "),
            buttons: "\u4eca\u65e5 \u6e05\u9664 Cancel Help Prior Next Finish".split(" ")}, it: {months: "Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gen; Feb;Mar;Apr;Mag;Giu;Lug;Ago;Set;Ott;Nov;Dic".split(";"), days: "Luned\u00ec Marted\u00ec Mercoled\u00ec Gioved\u00ec Venerd\u00ec Sabato Domenica Lun Mar Mer Gio Ven Sab Dom".split(" "), buttons: "Oggi Cancella Cancel Help Prior Next Finish".split(" ")}, de: {months: "Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember Jan Feb Mrz Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
            days: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag So Mo Di Mi Do Fr Sa".split(" "), buttons: "Heute Zur\u00fccksetzen Abbrechen Hilfe Fr\u00fcher Sp\u00e4ter Fertig".split(" ")}, es: {months: "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre Ene Feb Mar Abr May Jun Jul Ago Sept Oct Nov Dic".split(" "), days: "Domingo Lunes Martes Mi\u00e9rcoles Jueves Viernes S\u00e1bado Do Lu Mar Mi\u00e9 Jue Vi S\u00e1b".split(" "), buttons: "Hoy Limpiar Cancel Help Prior Next Finish".split(" ")}};
    c.Metro.setLocale = function(a, b) {
        c.Metro.Locale[a] = b
    }
})(jQuery);
var hasTouch = "ontouchend"in window, eventTimer, moveDirection = "undefined", startX, startY, deltaX, deltaY, mouseDown = !1;
function addTouchEvents(c) {
    hasTouch && (c.addEventListener("touchstart", touch2Mouse, !0), c.addEventListener("touchmove", touch2Mouse, !0), c.addEventListener("touchend", touch2Mouse, !0))
}
function touch2Mouse(c) {
    var a = c.changedTouches[0], b;
    switch (c.type) {
        case "touchstart":
            b = "mousedown";
            break;
        case "touchend":
            b = "mouseup";
            break;
        case "touchmove":
            b = "mousemove";
            break;
        default:
            return
    }
    "mousedown" == b && (eventTimer = (new Date).getTime(), startX = a.clientX, startY = a.clientY, mouseDown = !0);
    "mouseup" == b && (500 >= (new Date).getTime() - eventTimer ? b = "click" : 1E3 < (new Date).getTime() - eventTimer && (b = "longclick"), eventTimer = 0, mouseDown = !1);
    "mousemove" == b && mouseDown && (deltaX = a.clientX - startX, deltaY = a.clientY - startY,
            moveDirection = deltaX > deltaY ? "horizontal" : "vertical");
    var d = document.createEvent("MouseEvent");
    d.initMouseEvent(b, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null);
    a.target.dispatchEvent(d);
    c.preventDefault()
}
;
(function(c) {
    c.widget("metro.accordion", {version: "1.0.0", options: {closeAny: !0, open: function(a) {
            }, action: function(a) {
            }}, _frames: {}, _create: function() {
            var a = this.element;
            void 0 != a.data("closeany") && (this.options.closeAny = a.data("closeany"));
            this._frames = a.children(".accordion-frame");
            this.init()
        }, init: function() {
            var a = this;
            this._frames.each(function() {
                var b = this, d = c(this).children(".heading"), e = c(this).children(".content");
                c(d).hasClass("active") && !c(d).attr("disabled") && "none" != c(d).data("action") ?
                        (c(e).show(), c(d).removeClass("collapsed")) : c(d).addClass("collapsed");
                d.on("click", function(d) {
                    d.preventDefault();
                    c(this).attr("disabled") || "none" == c(this).data("action") || (a.options.closeAny && a._closeFrames(), c(e).is(":hidden") ? (c(e).slideDown(), c(this).removeClass("collapsed"), a._trigger("frame", d, {frame: b}), a.options.open(b)) : (c(e).slideUp(), c(this).addClass("collapsed")), a.options.action(b))
                })
            })
        }, _closeFrames: function() {
            this._frames.children(".content").slideUp().parent().children(".heading").addClass("collapsed")
        },
        _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.buttonset", {version: "1.0.0", options: {click: function(a, b) {
            }}, _buttons: {}, _create: function() {
            this._buttons = this.element.find("button, .button");
            this.init()
        }, init: function() {
            var a = this;
            this._buttons.each(function() {
                var b = c(this);
                b.on("click", function(d) {
                    d.preventDefault();
                    b.toggleClass("active");
                    a.options.click(b, b.hasClass("active"));
                    a._trigger("click", null, {button: b, on: b.hasClass("active")})
                })
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a,
                    b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.buttongroup", {version: "1.0.0", options: {click: function(a, b) {
            }}, _buttons: {}, _create: function() {
            this._buttons = this.element.find("button, .button");
            this.init()
        }, init: function() {
            var a = this;
            this._buttons.each(function() {
                var b = c(this);
                b.on("click", function(d) {
                    d.preventDefault();
                    a._buttons.removeClass("active");
                    b.addClass("active");
                    a.options.click(b, b.hasClass("active"));
                    a._trigger("click", null, {button: b, on: b.hasClass("active")})
                })
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption",
                    a, b)
        }})
})(jQuery);
var dateFormat = function() {
    var c = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, a = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, b = /[^-+\dA-Z]/g, d = function(a, b) {
        a = String(a);
        for (b = b || 2; a.length < b; )
            a = "0" + a;
        return a
    };
    return function(e, f, g) {
        var h = dateFormat;
        1 != arguments.length || ("[object String]" != Object.prototype.toString.call(e) || /\d/.test(e)) || (f = e, e = void 0);
        e = e ? new Date(e) : new Date;
        f = String(h.masks[f] ||
                f || h.masks["default"]);
        "UTC:" == f.slice(0, 4) && (f = f.slice(4), g = !0);
        locale = $.Metro.currentLocale;
        var k = g ? "getUTC" : "get", h = e[k + "Date"](), l = e[k + "Day"](), n = e[k + "Month"](), p = e[k + "FullYear"](), m = e[k + "Hours"](), q = e[k + "Minutes"](), u = e[k + "Seconds"](), k = e[k + "Milliseconds"](), r = g ? 0 : e.getTimezoneOffset(), s = {d: h, dd: d(h), ddd: $.Metro.Locale[locale].days[l], dddd: $.Metro.Locale[locale].days[l + 7], m: n + 1, mm: d(n + 1), mmm: $.Metro.Locale[locale].months[n], mmmm: $.Metro.Locale[locale].months[n + 12], yy: String(p).slice(2), yyyy: p,
            h: m % 12 || 12, hh: d(m % 12 || 12), H: m, HH: d(m), M: q, MM: d(q), s: u, ss: d(u), l: d(k, 3), L: d(99 < k ? Math.round(k / 10) : k), t: 12 > m ? "a" : "p", tt: 12 > m ? "am" : "pm", T: 12 > m ? "A" : "P", TT: 12 > m ? "AM" : "PM", Z: g ? "UTC" : (String(e).match(a) || [""]).pop().replace(b, ""), o: (0 < r ? "-" : "+") + d(100 * Math.floor(Math.abs(r) / 60) + Math.abs(r) % 60, 4), S: ["th", "st", "nd", "rd"][3 < h % 10 ? 0 : (10 != h % 100 - h % 10) * h % 10]};
        return f.replace(c, function(a) {
            return a in s ? s[a] : a.slice(1, a.length - 1)
        })
    }
}();
dateFormat.masks = {"default": "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:ss", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};
dateFormat.i18n = {dayNames: "Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), monthNames: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")};
Date.prototype.format = function(c, a) {
    return dateFormat(this, c, a)
};
(function(c) {
    c.widget("metro.calendar", {version: "1.0.0", options: {format: "yyyy-mm-dd", multiSelect: !1, startMode: "day", weekStart: void 0 != METRO_WEEK_START ? METRO_WEEK_START : 0, otherDays: !1, date: new Date, buttons: !0, locale: c.Metro.currentLocale, getDates: function(a) {
            }, click: function(a, b) {
            }, _storage: []}, _year: 0, _month: 0, _day: 0, _today: new Date, _event: "", _mode: "day", _distance: 0, _events: [], _create: function() {
            var a = this.element;
            void 0 != a.data("multiSelect") && (this.options.multiSelect = a.data("multiSelect"));
            void 0 !=
                    a.data("format") && (this.options.format = a.data("format"));
            void 0 != a.data("date") && (this.options.date = new Date(a.data("date")));
            void 0 != a.data("locale") && (this.options.locale = a.data("locale"));
            void 0 != a.data("startMode") && (this.options.startMode = a.data("startMode"));
            void 0 != a.data("weekStart") && (this.options.weekStart = a.data("weekStart"));
            void 0 != a.data("otherDays") && (this.options.otherDays = a.data("otherDays"));
            this._year = this.options.date.getFullYear();
            this._distance = parseInt(this.options.date.getFullYear()) -
                    4;
            this._month = this.options.date.getMonth();
            this._day = this.options.date.getDate();
            this._mode = this.options.startMode;
            a.data("_storage", []);
            this._renderCalendar()
        }, _renderMonth: function() {
            var a = this._year, b = this._month, d = 28;
            1 == b && (0 != a % 100 && 0 == a % 4 || 0 == a % 400) && (d = 29);
            var e = ["31", "" + d + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"], f = e[b], g = (new Date(a, b, 1)).getDay(), h, k;
            this.element.html("");
            d = c("<table/>").addClass("bordered");
            h = c("<tr/>");
            c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-previous'></i></a>").appendTo(h);
            c("<td/>").addClass("text-center").html("<a class='btn-previous-month' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(h);
            c("<td/>").attr("colspan", 3).addClass("text-center").html("<a class='btn-select-month' href='#'>" + c.Metro.Locale[this.options.locale].months[b] + " " + a + "</a>").appendTo(h);
            c("<td/>").addClass("text-center").html("<a class='btn-next-month' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(h);
            c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-next'></i></a>").appendTo(h);
            h.addClass("calendar-header").appendTo(d);
            var l;
            h = c("<tr/>");
            for (k = 0; 7 > k; k++)
                this.options.weekStart ? (l = k + 1, 7 == l && (l = 0), c("<td/>").addClass("text-center day-of-week").html(c.Metro.Locale[this.options.locale].days[l + 7]).appendTo(h)) : c("<td/>").addClass("text-center day-of-week").html(c.Metro.Locale[this.options.locale].days[k + 7]).appendTo(h);
            h.addClass("calendar-subheader").appendTo(d);
            h = this._month - 1;
            0 > h && (h = 11);
            e = e[h];
            l = (this.options.weekStart ? g + 6 : g) % 7;
            var n = "";
            h = c("<tr/>");
            for (k = 0; k < l; k++)
                this.options.otherDays &&
                        (n = e - (l - k - 1)), c("<td/>").addClass("empty").html("<small class='other-day'>" + n + "</small>").appendTo(h);
            g = (this.options.weekStart ? g + 6 : g) % 7;
            for (k = 1; k <= f; k++)
                g %= 7, 0 == g && (h.appendTo(d), h = c("<tr/>")), e = c("<td/>").addClass("text-center day").html("<a href='#'>" + k + "</a>"), a == this._today.getFullYear() && (b == this._today.getMonth() && this._today.getDate() == k) && e.addClass("today"), l = (new Date(this._year, this._month, k)).format("yyyy-mm-dd"), 0 <= this.element.data("_storage").indexOf(l) && e.find("a").addClass("selected"),
                        e.appendTo(h), g++;
            a = "";
            for (k = g + 1; 7 >= k; k++)
                this.options.otherDays && (a = k - g), c("<td/>").addClass("empty").html("<small class='other-day'>" + a + "</small>").appendTo(h);
            h.appendTo(d);
            this.options.buttons && (h = c("<tr/>").addClass("calendar-actions"), e = c("<td/>").attr("colspan", 7).addClass("text-left").html("<button class='button calendar-btn-today small success'>" + c.Metro.Locale[this.options.locale].buttons[0] + "</button>&nbsp;<button class='button calendar-btn-clear small warning'>" + c.Metro.Locale[this.options.locale].buttons[1] +
                    "</button>"), e.appendTo(h), h.appendTo(d));
            d.appendTo(this.element);
            this.options.getDates(this.element.data("_storage"))
        }, _renderMonths: function() {
            var a, b, d, e, f;
            this.element.html("");
            a = c("<table/>").addClass("bordered");
            b = c("<tr/>");
            c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(b);
            c("<td/>").attr("colspan", 2).addClass("text-center").html("<a class='btn-select-year' href='#'>" + this._year + "</a>").appendTo(b);
            c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(b);
            b.addClass("calendar-header").appendTo(a);
            b = c("<tr/>");
            for (e = f = 0; 12 > e; e++)
                d = c("<td/>").addClass("text-center month").html("<a href='#' data-month='" + e + "'>" + c.Metro.Locale[this.options.locale].months[e + 12] + "</a>"), this._month == e && (new Date).getFullYear() == this._year && d.addClass("today"), d.appendTo(b), 0 == (f + 1) % 4 && (b.appendTo(a), b = c("<tr/>")), f += 1;
            a.appendTo(this.element)
        }, _renderYears: function() {
            var a, b, d, e, f;
            this.element.html("");
            a = c("<table/>").addClass("bordered");
            b = c("<tr/>");
            c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(b);
            c("<td/>").attr("colspan", 2).addClass("text-center").html(this._distance + "-" + (this._distance + 11)).appendTo(b);
            c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(b);
            b.addClass("calendar-header").appendTo(a);
            b = c("<tr/>");
            f = 0;
            for (e = this._distance; e < this._distance + 12; e++)
                d = c("<td/>").addClass("text-center year").html("<a href='#' data-year='" + e + "'>" + e + "</a>"), (new Date).getFullYear() == e && d.addClass("today"), d.appendTo(b), 0 == (f +
                        1) % 4 && (b.appendTo(a), b = c("<tr/>")), f += 1;
            a.appendTo(this.element)
        }, _renderCalendar: function() {
            switch (this._mode) {
                case "year":
                    this._renderYears();
                    break;
                case "month":
                    this._renderMonths();
                    break;
                default:
                    this._renderMonth()
            }
            this._initButtons()
        }, _initButtons: function() {
            var a = this, b = this.element.find("table");
            "day" == this._mode ? (b.find(".btn-select-month").on("click", function(b) {
                b.preventDefault();
                b.stopPropagation();
                a._mode = "month";
                a._renderCalendar()
            }), b.find(".btn-previous-month").on("click", function(b) {
                a._event =
                        "eventPrevious";
                b.preventDefault();
                b.stopPropagation();
                a._month -= 1;
                0 > a._month && (a._year -= 1, a._month = 11);
                a._renderCalendar()
            }), b.find(".btn-next-month").on("click", function(b) {
                a._event = "eventNext";
                b.preventDefault();
                b.stopPropagation();
                a._month += 1;
                12 == a._month && (a._year += 1, a._month = 0);
                a._renderCalendar()
            }), b.find(".btn-previous-year").on("click", function(b) {
                a._event = "eventPrevious";
                b.preventDefault();
                b.stopPropagation();
                a._year -= 1;
                a._renderCalendar()
            }), b.find(".btn-next-year").on("click", function(b) {
                a._event =
                        "eventNext";
                b.preventDefault();
                b.stopPropagation();
                a._year += 1;
                a._renderCalendar()
            }), b.find(".calendar-btn-today").on("click", function(b) {
                a._event = "eventNext";
                b.preventDefault();
                b.stopPropagation();
                a.options.date = new Date;
                a._year = a.options.date.getFullYear();
                a._month = a.options.date.getMonth();
                a._day = a.options.date.getDate();
                a._renderCalendar()
            }), b.find(".calendar-btn-clear").on("click", function(b) {
                b.preventDefault();
                b.stopPropagation();
                a.options.date = new Date;
                a._year = a.options.date.getFullYear();
                a._month =
                        a.options.date.getMonth();
                a._day = a.options.date.getDate();
                a.element.data("_storage", []);
                a._renderCalendar()
            }), b.find(".day a").on("click", function(d) {
                d.preventDefault();
                d.stopPropagation();
                d = (new Date(a._year, a._month, parseInt(c(this).html()))).format(a.options.format, null);
                var e = new Date(a._year, a._month, parseInt(c(this).html()));
                a.options.multiSelect ? (c(this).toggleClass("selected"), c(this).hasClass("selected") ? a._addDate(d) : a._removeDate(d)) : (b.find(".day a").removeClass("selected"), c(this).addClass("selected"),
                        a.element.data("_storage", []), a._addDate(d));
                a.options.getDates(a.element.data("_storage"));
                a.options.click(d, e)
            })) : "month" == this._mode ? (b.find(".month a").on("click", function(b) {
                a._event = "eventNext";
                b.preventDefault();
                b.stopPropagation();
                a._month = parseInt(c(this).data("month"));
                a._mode = "day";
                a._renderCalendar()
            }), b.find(".btn-previous-year").on("click", function(b) {
                a._event = "eventPrevious";
                b.preventDefault();
                b.stopPropagation();
                a._year -= 1;
                a._renderCalendar()
            }), b.find(".btn-next-year").on("click",
                    function(b) {
                        a._event = "eventNext";
                        b.preventDefault();
                        b.stopPropagation();
                        a._year += 1;
                        a._renderCalendar()
                    }), b.find(".btn-select-year").on("click", function(b) {
                a._event = "eventNext";
                b.preventDefault();
                b.stopPropagation();
                a._mode = "year";
                a._renderCalendar()
            })) : (b.find(".year a").on("click", function(b) {
                a._event = "eventNext";
                b.preventDefault();
                b.stopPropagation();
                a._year = parseInt(c(this).data("year"));
                a._mode = "month";
                a._renderCalendar()
            }), b.find(".btn-previous-year").on("click", function(b) {
                a._event = "eventPrevious";
                b.preventDefault();
                b.stopPropagation();
                a._distance -= 10;
                a._renderCalendar()
            }), b.find(".btn-next-year").on("click", function(b) {
                a._event = "eventNext";
                b.preventDefault();
                b.stopPropagation();
                a._distance += 10;
                a._renderCalendar()
            }))
        }, _addDate: function(a) {
            0 > this.element.data("_storage").indexOf(a) && this.element.data("_storage").push(a)
        }, _removeDate: function(a) {
            a = this.element.data("_storage").indexOf(a);
            this.element.data("_storage").splice(a, 1)
        }, setDate: function(a) {
            a = new Date(a);
            a = (new Date(a.getFullYear() +
                    "/" + (a.getMonth() + 1) + "/" + a.getDate())).format("yyyy-mm-dd");
            this._addDate(a);
            this._renderCalendar()
        }, getDate: function(a) {
            return(new Date(void 0 != a ? this.element.data("_storage")[a] : this.element.data("_storage")[0])).format(this.options.format)
        }, getDates: function() {
            return this.element.data("_storage")
        }, unsetDate: function(a) {
            a = new Date(a);
            a = (new Date(a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate())).format("yyyy-mm-dd");
            this._removeDate(a);
            this._renderCalendar()
        }, _destroy: function() {
        }, _setOption: function(a,
                b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.datepicker", {version: "1.0.0", options: {format: "dd.mm.yyyy", date: void 0, effect: "none", position: "bottom", locale: c.Metro.currentLocale, weekStart: void 0 != METRO_WEEK_START ? METRO_WEEK_START : 0, otherDays: !1, selected: function(a, b) {
            }, _calendar: void 0}, _create: function() {
            var a = this, b = this.element, d = b.children("input"), e = b.children("button.btn-date");
            void 0 != b.data("date") && (this.options.date = b.data("date"));
            void 0 != b.data("format") && (this.options.format = b.data("format"));
            void 0 !=
                    b.data("effect") && (this.options.effect = b.data("effect"));
            void 0 != b.data("position") && (this.options.position = b.data("position"));
            void 0 != b.data("locale") && (this.options.locale = b.data("locale"));
            void 0 != b.data("weekStart") && (this.options.weekStart = b.data("weekStart"));
            void 0 != b.data("otherDays") && (this.options.otherDays = b.data("otherDays"));
            this._createCalendar(b, this.options.date);
            d.attr("readonly", !0);
            e.on("click", function(b) {
                b.stopPropagation();
                "none" == a.options._calendar.css("display") ? a._show() :
                        a._hide()
            });
            b.on("click", function(b) {
                b.stopPropagation();
                "none" == a.options._calendar.css("display") ? a._show() : a._hide()
            });
            c("html").on("click", function(a) {
                c(".calendar-dropdown").hide()
            })
        }, _createCalendar: function(a, b) {
            var d, e = this;
            d = c("<div/>").css({position: "absolute", display: "none", "max-width": 260, "z-index": 1E3}).addClass("calendar calendar-dropdown").appendTo(a);
            void 0 != e.options.date && d.data("date", e.options.date);
            d.calendar({multiSelect: !1, format: e.options.format, buttons: !1, locale: e.options.locale,
                otherDays: e.options.otherDays, weekStart: e.options.weekStart, click: function(b, c) {
                    d.calendar("setDate", c);
                    a.children("input[type=text]").val(b);
                    e.options.selected(b, c);
                    e._hide()
                }});
            void 0 != b && (d.calendar("setDate", b), a.children("input[type=text]").val(d.calendar("getDate")));
            switch (this.options.position) {
                case "top":
                    d.css({top: 0 - d.height(), left: 0});
                    break;
                default:
                    d.css({top: "100%", left: 0})
            }
            this.options._calendar = d
        }, _show: function() {
            "slide" == this.options.effect ? (c(".calendar-dropdown").slideUp("fast"),
                    this.options._calendar.slideDown("fast")) : "fade" == this.options.effect ? (c(".calendar-dropdown").fadeOut("fast"), this.options._calendar.fadeIn("fast")) : (c(".calendar-dropdown").hide(), this.options._calendar.show())
        }, _hide: function() {
            "slide" == this.options.effect ? this.options._calendar.slideUp("fast") : "fade" == this.options.effect ? this.options._calendar.fadeOut("fast") : this.options._calendar.hide()
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.carousel", {version: "1.0.0", options: {auto: !0, period: 2E3, duration: 500, effect: "slowdown", direction: "left", markers: {show: !0, type: "default", position: "left"}, controls: !0, stop: !0, width: "100%", height: 300}, _slides: {}, _currentIndex: 0, _interval: 0, _outPosition: 0, _create: function() {
            var a = this, b = this.options, c = carousel = this.element, e = carousel.find(".controls");
            void 0 != c.data("auto") && (b.auto = c.data("auto"));
            void 0 != c.data("period") && (b.period = c.data("period"));
            void 0 != c.data("duration") &&
                    (b.duration = c.data("duration"));
            void 0 != c.data("effect") && (b.effect = c.data("effect"));
            void 0 != c.data("direction") && (b.direction = c.data("direction"));
            void 0 != c.data("width") && (b.width = c.data("width"));
            void 0 != c.data("height") && (b.height = c.data("height"));
            void 0 != c.data("stop") && (b.stop = c.data("stop"));
            void 0 != c.data("controls") && (b.controls = c.data("controls"));
            void 0 != c.data("markersShow") && (b.markers.show = c.data("markersShow"));
            void 0 != c.data("markersType") && (b.markers.type = c.data("markersType"));
            void 0 != c.data("markersPosition") && (b.markers.position = c.data("markersPosition"));
            carousel.css({width: this.options.width, height: this.options.height});
            this._slides = carousel.find(".slide");
            if (!(1 >= this._slides.length)) {
                !1 !== this.options.markers && (this.options.markers.show && 1 < this._slides.length) && this._markers(a);
                this.options.controls && 1 < this._slides.length ? (carousel.find(".controls.left").on("click", function() {
                    a._slideTo("prior")
                }), carousel.find(".controls.right").on("click", function() {
                    a._slideTo("next")
                })) :
                        e.hide();
                if (this.options.stop)
                    carousel.on("mouseenter", function() {
                        clearInterval(a._interval)
                    }).on("mouseleave", function() {
                        a.options.auto && (a._autoStart(), a.options.period)
                    });
                this.options.auto && this._autoStart()
            }
        }, _autoStart: function() {
            var a = this;
            this._interval = setInterval(function() {
                "left" == a.options.direction ? a._slideTo("next") : a._slideTo("prior")
            }, this.options.period)
        }, _slideTo: function(a) {
            var b = this._slides[this._currentIndex];
            void 0 == a && (a = "next");
            "prior" === a ? (this._currentIndex -= 1, 0 > this._currentIndex &&
                    (this._currentIndex = this._slides.length - 1), this._outPosition = this.element.width()) : "next" === a && (this._currentIndex += 1, this._currentIndex >= this._slides.length && (this._currentIndex = 0), this._outPosition = -this.element.width());
            a = this._slides[this._currentIndex];
            switch (this.options.effect) {
                case "switch":
                    this._effectSwitch(b, a);
                    break;
                case "slowdown":
                    this._effectSlowdown(b, a, this.options.duration);
                    break;
                case "fade":
                    this._effectFade(b, a, this.options.duration);
                    break;
                default:
                    this._effectSlide(b, a, this.options.duration)
            }
            var d =
                    this;
            this.element.find(".markers ul li a").each(function() {
                c(this).data("num") === d._currentIndex ? c(this).parent().addClass("active") : c(this).parent().removeClass("active")
            })
        }, _slideToSlide: function(a) {
            var b = this._slides[this._currentIndex], c = this._slides[a];
            this._outPosition = a > this._currentIndex ? -this.element.width() : this.element.width();
            switch (this.options.effect) {
                case "switch":
                    this._effectSwitch(b, c);
                    break;
                case "slowdown":
                    this._effectSlowdown(b, c, this.options.duration);
                    break;
                case "fade":
                    this._effectFade(b,
                            c, this.options.duration);
                    break;
                default:
                    this._effectSlide(b, c, this.options.duration)
            }
            this._currentIndex = a
        }, _markers: function(a) {
            var b, d, e, f;
            b = c('<div class="markers ' + this.options.markers.type + '" />');
            d = c("<ul></ul>").appendTo(b);
            for (f = 0; f < this._slides.length; f++)
                e = c('<li><a href="javascript:void(0)" data-num="' + f + '"></a></li>'), 0 === f && e.addClass("active"), e.appendTo(d);
            d.find("li a").removeClass("active").on("click", function() {
                var b = c(this), e = b.data("num");
                d.find("li").removeClass("active");
                b.parent().addClass("active");
                if (e == a._currentIndex)
                    return!0;
                a._slideToSlide(e);
                return!0
            });
            b.appendTo(this.element);
            switch (this.options.markers.position) {
                case "top-left":
                    b.css({left: "10px", right: "auto", bottom: "auto", top: "10px"});
                    break;
                case "top-right":
                    b.css({left: "auto", right: "10px", bottom: "auto", top: "0px"});
                    break;
                case "top-center":
                    b.css({left: this.element.width() / 2 - b.width() / 2, right: "auto", bottom: "auto", top: "0px"});
                    break;
                case "bottom-left":
                    b.css({left: "10px", right: "auto"});
                    break;
                case "bottom-right":
                    b.css({right: "10px", left: "auto"});
                    break;
                case "bottom-center":
                    b.css({left: this.element.width() / 2 - b.width() / 2, right: "auto"})
            }
        }, _effectSwitch: function(a, b) {
            c(a).hide();
            c(b).css({left: 0}).show()
        }, _effectSlide: function(a, b, d) {
            c(a).animate({left: this._outPosition}, d);
            c(b).css("left", -1 * this._outPosition).show().animate({left: 0}, d)
        }, _effectSlowdown: function(a, b, d) {
            d = {duration: d, easing: "doubleSqrt"};
            c.easing.doubleSqrt = function(a) {
                return Math.sqrt(Math.sqrt(a))
            };
            c(a).animate({left: this._outPosition}, d);
            c(b).css("left", -1 * this._outPosition).show().animate({left: 0},
            d)
        }, _effectFade: function(a, b, d) {
            c(a).fadeOut(d);
            c(b).css({left: 0}).fadeIn(d)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.countdown", {version: "1.0.0", options: {style: {background: "bg-dark", foreground: "fg-white", divider: "fg-dark"}, blink: !0, days: 1, stoptimer: 0, ontick: function(a, b, c, e) {
            }, onstop: function() {
            }}, wrappers: {}, _interval: 0, _create: function() {
            var a = this, b = this.element;
            c.each(["Days", "Hours", "Minutes", "Seconds"], function() {
                c('<span class="count' + this + '">').html('<span class="digit-wrapper">                        <span class="digit">0</span>                    </span>                    <span class="digit-wrapper">                        <span class="digit">0</span>                    </span>').appendTo(b);
                "Seconds" != this && b.append('<span class="divider"></span>')
            });
            this.wrappers = this.element.find(".digit-wrapper");
            void 0 != b.data("blink") && (this.options.blink = b.data("blick"));
            void 0 != b.data("styleBackground") && (this.options.style.background = b.data("styleBackground"));
            void 0 != b.data("styleForeground") && (this.options.style.foreground = b.data("styleForeground"));
            void 0 != b.data("styleDivider") && (this.options.style.divider = b.data("styleDivider"));
            "default" != this.options.style.background && this.element.find(".digit").addClass(this.options.style.background);
            "default" != this.options.style.foreground && this.element.find(".digit").addClass(this.options.style.foreground);
            "default" != this.options.style.divider && this.element.find(".divider").addClass(this.options.style.divider);
            void 0 != b.data("stoptimer") && (this.options.stoptimer = new Date(b.data("stoptimer")));
            0 == this.options.stoptimer && (this.options.stoptimer = (new Date).getTime() + 864E5 * this.options.days);
            setTimeout(function() {
                a.tick()
            }, 1E3)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption",
                    a, b)
        }, tick: function() {
            var a = this;
            this._interval = setInterval(function() {
                var b, c, e, f;
                b = Math.floor((a.options.stoptimer - new Date) / 1E3);
                0 > b && (b = 0);
                c = Math.floor(b / 86400);
                a.updateDuo(0, 1, c);
                b -= 86400 * c;
                e = Math.floor(b / 3600);
                a.updateDuo(2, 3, e);
                b -= 3600 * e;
                f = Math.floor(b / 60);
                a.updateDuo(4, 5, f);
                b -= 60 * f;
                a.updateDuo(6, 7, b);
                a.options.ontick(c, e, f, b);
                a.blinkDivider();
                0 === c && (0 === e && 0 === f && 0 === b) && (a.options.onstop(), a.stopDigit(), a._trigger("alarm"), clearInterval(a._interval))
            }, 1E3)
        }, blinkDivider: function() {
            this.options.blink &&
                    this.element.find(".divider").toggleClass("no-visible")
        }, stopDigit: function() {
            this.wrappers.each(function() {
                c(this).children(".digit").addClass("stop")
            })
        }, updateDuo: function(a, b, c) {
            this.switchDigit(this.wrappers.eq(a), Math.floor(c / 10) % 10);
            this.switchDigit(this.wrappers.eq(b), c % 10)
        }, switchDigit: function(a, b) {
            var d = a.find(".digit");
            if (d.is(":animated") || a.data("digit") == b)
                return!1;
            a.data("digit", b);
            var e = c("<span>", {"class": "digit", css: {top: "-2.1em", opacity: 0}, html: b});
            e.addClass(this.options.style.background);
            e.addClass(this.options.style.foreground);
            d.before(e).removeClass("static").animate({top: "2.5em"}, "fast", function() {
                d.remove()
            });
            e.delay(100).animate({top: 0, opacity: 1}, "fast");
            return!0
        }})
})(jQuery);
(function(c) {
    c.widget("metro.dropdown", {version: "1.0.1", options: {effect: "slide", toggleElement: !1}, _create: function() {
            var a = this, b = this.element, d = this.name, e = this.element.parent(), e = this.options.toggleElement || e.children(".dropdown-toggle");
            void 0 != b.data("effect") && (this.options.effect = b.data("effect"));
            e.on("click." + d, function(d) {
                d.preventDefault();
                d.stopPropagation();
                "block" != b.css("display") || b.hasClass("keep-open") ? (c(".fixnavbar.dropdown-menu").each(function(d, e) {
                    b.parents(".fixnavbar.dropdown-menu").is(e) || (c(e).hasClass("keep-open") ||
                            "block" != c(e).css("display")) || a._close(e)
                }), a._open(b)) : a._close(b)
            });
            c(b).find("li.disabled a").on("click", function(a) {
                a.preventDefault()
            })
        }, _open: function(a) {
            switch (this.options.effect) {
                case "fade":
                    c(a).fadeIn("fast");
                    break;
                case "slide":
                    c(a).slideDown("fast");
                    break;
                default:
                    c(a).hide()
            }
            this._trigger("onOpen", null, a)
        }, _close: function(a) {
            switch (this.options.effect) {
                case "fade":
                    c(a).fadeOut("fast");
                    break;
                case "slide":
                    c(a).slideUp("fast");
                    break;
                default:
                    c(a).hide()
            }
            this._trigger("onClose", null, a)
        }, _destroy: function() {
        },
        _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.inputControl", {version: "1.0.0", options: {}, _create: function() {
            var a = this.element;
            a.hasClass("text") ? this.initTextInput(a, this) : a.hasClass("password") ? this.initPasswordInput(a, this) : a.hasClass("checkbox") || a.hasClass("radio") || a.hasClass("switch") ? this.initCheckboxInput(a, this) : a.hasClass("file") && this.initFileInput(a, this)
        }, initCheckboxInput: function(a, b) {
        }, initFileInput: function(a, b) {
            var d, e, f;
            f = c("<input type='text' id='__input_file_wrapper__' readonly style='z-index: 1; cursor: default;'>");
            d = a.children(".btn-file");
            e = a.children('input[type="file"]');
            e.css("z-index", 0);
            f.insertAfter(e);
            e.attr("tabindex", "-1");
            d.attr("type", "button");
            e.on("change", function() {
                var a = c(this).val();
                "" != a && f.val(a)
            });
            d.on("click", function() {
                e.trigger("click")
            })
        }, initTextInput: function(a, b) {
            var d = a.children(".btn-clear"), e = a.children("input[type=text]");
            if (0 != d.length && (d.attr("tabindex", "-1"), d.attr("type", "button"), d.on("click", function() {
                e = a.children("input");
                e.prop("readonly") || (e.val(""), e.focus(), b._trigger("onClear",
                        null, a))
            }), !e.attr("disabled")))
                e.on("click", function() {
                    c(this).focus()
                })
        }, initPasswordInput: function(a, b) {
            var d = a.children(".btn-reveal"), e = a.children("input[type=password]");
            if (0 != d.length && (d.attr("tabindex", "-1"), d.attr("type", "button"), d.on("mousedown", function(a) {
                e.attr("type", "text")
            }), d.on("mouseup, mouseleave, blur", function(a) {
                e.attr("type", "password").focus()
            }), !e.attr("disabled")))
                e.on("click", function() {
                    c(this).focus()
                })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption",
                    a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.inputTransform", {version: "1.0.0", options: {transformType: "text"}, _create: function() {
            var a = this.element, b;
            if (!a.parent().hasClass("input-control")) {
                b = a.get(0).tagName.toLowerCase();
                "textarea" == b ? this.options.transformType = "textarea" : "select" == b ? this.options.transformType = "select" : void 0 != a.data("transformType") ? this.options.transformType = a.data("transformType") : this.options.transformType = a.attr("type");
                a = void 0;
                switch (this.options.transformType) {
                    case "password":
                        a = this._createInputPassword();
                        break;
                    case "file":
                        a = this._createInputFile();
                        break;
                    case "checkbox":
                        a = this._createInputCheckbox();
                        break;
                    case "radio":
                        a = this._createInputRadio();
                        break;
                    case "switch":
                        a = this._createInputSwitch();
                        break;
                    case "select":
                        a = this._createInputSelect();
                        break;
                    case "textarea":
                        a = this._createInputTextarea();
                        break;
                    case "search":
                        a = this._createInputSearch();
                        break;
                    case "email":
                        a = this._createInputEmail();
                        break;
                    case "tel":
                        a = this._createInputTel();
                        break;
                    case "number":
                        a = this._createInputNum();
                        break;
                    default:
                        a = this._createInputText()
                }
                a.inputControl()
            }
        },
        _createInputTextarea: function() {
            var a = this.element, b = c("<div/>").addClass("input-control").addClass("textarea"), d = a.clone(!0);
            a.parent();
            d.appendTo(b);
            b.insertBefore(a);
            a.remove();
            return b
        }, _createInputSelect: function() {
            var a = this.element, b = c("<div/>").addClass("input-control").addClass("select"), d = a.clone(!0);
            a.parent();
            d.val(a.val()).appendTo(b);
            b.insertBefore(a);
            a.remove();
            return b
        }, _createInputSwitch: function() {
            var a = this.element, b = c("<div/>").addClass("input-control").addClass("switch"), d = c("<label/>"),
                    e = c("<span/>").addClass("check"), f = a.clone(!0);
            a.parent();
            var g = c("<span/>").addClass("caption").html(void 0 != a.data("caption") ? a.data("caption") : "");
            d.appendTo(b);
            f.appendTo(d);
            e.appendTo(d);
            g.appendTo(d);
            b.insertBefore(a);
            a.remove();
            return b
        }, _createInputCheckbox: function() {
            var a = this.element, b = c("<div/>").addClass("input-control").addClass("checkbox"), d = c("<label/>"), e = c("<span/>").addClass("check"), f = a.clone(!0);
            a.parent();
            var g = c("<span/>").addClass("caption").html(void 0 != a.data("caption") ?
                    a.data("caption") : "");
            d.appendTo(b);
            f.appendTo(d);
            e.appendTo(d);
            g.appendTo(d);
            b.insertBefore(a);
            a.remove();
            return b
        }, _createInputRadio: function() {
            var a = this.element, b = c("<div/>").addClass("input-control").addClass("radio"), d = c("<label/>"), e = c("<span/>").addClass("check"), f = a.clone(!0);
            a.parent();
            var g = c("<span/>").addClass("caption").html(void 0 != a.data("caption") ? a.data("caption") : "");
            d.appendTo(b);
            f.appendTo(d);
            e.appendTo(d);
            g.appendTo(d);
            b.insertBefore(a);
            a.remove();
            return b
        }, _createInputSearch: function() {
            return this._createInputVal("text",
                    "btn-search")
        }, _createInputNum: function() {
            return this._createInputVal("number", "btn-clear")
        }, _createInputTel: function() {
            return this._createInputVal("tel", "btn-clear")
        }, _createInputEmail: function() {
            return this._createInputVal("email", "btn-clear")
        }, _createInputText: function() {
            return this._createInputVal("text", "btn-clear")
        }, _createInputPassword: function() {
            return this._createInputVal("password", "btn-reveal")
        }, _createInputFile: function() {
            return this._createInputVal("file", "btn-file")
        }, _createInputVal: function(a,
                b) {
            var d = this.element, e = c("<div/>").addClass("input-control").addClass(a), f = c("<button/>").addClass(b), g = d.clone(!0);
            d.parent();
            g.appendTo(e);
            f.appendTo(e);
            e.insertBefore(d);
            d.remove();
            return e
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.livetile", {version: "1.0.0", options: {effect: "slideLeft", period: 4E3, duration: 700, easing: "doubleSqrt"}, _frames: {}, _currentIndex: 0, _interval: 0, _outPosition: 0, _size: {}, _create: function() {
            var a = this, b = this.element;
            void 0 != b.data("effect") && (this.options.effect = b.data("effect"));
            void 0 != b.data("direction") && (this.options.direction = b.data("direction"));
            void 0 != b.data("period") && (this.options.period = b.data("period"));
            void 0 != b.data("duration") && (this.options.duration = b.data("duration"));
            void 0 != b.data("easing") && (this.options.easing = b.data("easing"));
            this._frames = b.children("[class*='-content']");
            1 >= this._frames.length || (c.easing.doubleSqrt = function(a) {
                return Math.sqrt(Math.sqrt(a))
            }, this._size = {width: b.width(), height: b.height()}, b.on("mouseenter", function() {
                a.stop()
            }), b.on("mouseleave", function() {
                a.start()
            }), this.start())
        }, start: function() {
            var a = this;
            this._interval = setInterval(function() {
                a._animate()
            }, this.options.period)
        }, stop: function() {
            clearInterval(this._interval)
        }, _animate: function() {
            var a =
                    this._frames[this._currentIndex], b;
            this._currentIndex += 1;
            this._currentIndex >= this._frames.length && (this._currentIndex = 0);
            b = this._frames[this._currentIndex];
            switch (this.options.effect) {
                case "slideLeft":
                    this._effectSlideLeft(a, b);
                    break;
                case "slideRight":
                    this._effectSlideRight(a, b);
                    break;
                case "slideDown":
                    this._effectSlideDown(a, b);
                    break;
                case "slideUpDown":
                    this._effectSlideUpDown(a, b);
                    break;
                case "slideLeftRight":
                    this._effectSlideLeftRight(a, b);
                    break;
                default:
                    this._effectSlideUp(a, b)
            }
        }, _effectSlideLeftRight: function(a,
                b) {
            0 == this._currentIndex % 2 ? this._effectSlideLeft(a, b) : this._effectSlideRight(a, b)
        }, _effectSlideUpDown: function(a, b) {
            0 == this._currentIndex % 2 ? this._effectSlideUp(a, b) : this._effectSlideDown(a, b)
        }, _effectSlideUp: function(a, b) {
            var d = this._size.height, e = {duration: this.options.duration, easing: this.options.easing};
            c(a).animate({top: -d}, e);
            c(b).css({top: d}).show().animate({top: 0}, e)
        }, _effectSlideDown: function(a, b) {
            var d = this._size.height, e = {duration: this.options.duration, easing: this.options.easing};
            c(a).animate({top: d},
            e);
            c(b).css({top: -d}).show().animate({top: 0}, e)
        }, _effectSlideLeft: function(a, b) {
            var d = this._size.width, e = {duration: this.options.duration, easing: this.options.easing};
            c(a).animate({left: -1 * d}, e);
            c(b).css({left: d}).show().animate({left: 0}, e)
        }, _effectSlideRight: function(a, b) {
            var d = this._size.width, e = {duration: this.options.duration, easing: this.options.easing};
            c(a).animate({left: d}, e);
            c(b).css({left: -d}).show().animate({left: 0}, e)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption",
                    a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.dragtile", {version: "1.0.0", options: {}, _create: function() {
            var a = (tile = this.element).parents(".tile-area");
            a.find(".tile");
            a.find(".tile-group");
            tile.attr("draggable", "true");
            addTouchEvents(tile[0]);
            tile[0].addEventListener("dragstart", this._dragStart, !1);
            tile[0].addEventListener("dragend", this._dragEnd, !1);
            tile.on("mousedown", function(a) {
            });
            tile.on("mouseup", function(a) {
            })
        }, _dragStart: function(a) {
            c(this).css("opacity", 0.4)
        }, _dragEnd: function(a) {
            c(this).css("opacity", 1)
        },
        _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.progressbar", {version: "1.0.1", options: {value: 0, color: "bg-cyan", animate: !1, max: 100, onchange: function(a) {
            }}, _create: function() {
            var a = this.element, b = this.options;
            void 0 != a.data("value") && this.value(a.data("value") + "%");
            void 0 != a.data("color") && (b.color = a.data("color"));
            void 0 != a.data("animate") && (b.animate = a.data("animate"));
            void 0 != a.data("max") && (b.max = a.data("max"));
            b.max = 0 > b.max ? 0 : b.max;
            b.max = 100 < b.max ? 100 : b.max;
            this._showBar()
        }, _showBar: function(a) {
            a = a || this.options.value;
            var b = this.element;
            b.html("");
            var d = c("<div />");
            d.addClass("bar");
            this.options.color.indexOf("bg-") + 1 ? d.addClass(this.options.color) : d.css("background", this.options.color);
            d.appendTo(b);
            this.options.animate ? d.css("width", this.value() + "%").animate({width: a + "%"}) : d.css("width", a + "%");
            this.options.onchange(this.value())
        }, value: function(a) {
            if (void 0 != a)
                a = parseInt(a), a = a > this.max ? this.max : a, a = 0 > a ? 0 : a, this._showBar(a), this.options.value = a;
            else
                return parseInt(this.options.value)
        }, color: function(a) {
            this.options.color =
                    a;
            this.options.color.indexOf("bg-") + 1 ? this.element.find(".bar").addClass(this.options.color) : this.element.find(".bar").css("background", this.options.color);
            this._showBar()
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.rating", {version: "1.0.0", options: {score: 0, half: !1, stars: 5, "static": !0, hints: ["bad", "poor", "regular", "good", "gorgeous"], showHint: !1, showScore: !1, scoreHint: "Current score: ", click: function(a, b) {
            }}, _create: function() {
            var a = this.element;
            void 0 != a.data("score") && (this.options.score = a.data("score"));
            void 0 != a.data("half") && (this.options.half = a.data("half"));
            void 0 != a.data("stars") && (this.options.stars = a.data("stars"));
            void 0 != a.data("showHint") && (this.options.showHint = a.data("showHint"));
            void 0 != a.data("static") && (this.options.static = a.data("static"));
            void 0 != a.data("showScore") && (this.options.showScore = a.data("showScore"));
            void 0 != a.data("scoreHint") && (this.options.scoreHint = a.data("scoreHint"));
            this._showRating()
        }, rate: function(a) {
            this.options.score = a;
            this._showRating()
        }, _showRating: function() {
            var a = this, b = this.element, d = this.options, e, f;
            b.addClass("rating");
            b.html("");
            e = c("<ul/>");
            d.static || b.addClass("active");
            for (var g = 0; g < d.stars; g++)
                f = c("<li/>"), f.data("value", g + 1), d.showHint &&
                        f.attr("title", d.hints[g]), g <= d.score - 1 && f.addClass("rated"), f.on("click", function() {
                    d.click(c(this).data("value"), a)
                }), f.appendTo(e);
            e.appendTo(b);
            d.showScore ? (c("<span/>").addClass("score-hint").html(d.scoreHint + d.score).appendTo(b), b.css("height", "auto")) : b.find("ul").css("margin-bottom", 0)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.slider", {version: "1.0.2", options: {position: 0, accuracy: 0, color: "default", completeColor: "default", markerColor: "default", colors: [], showHint: !1, change: function(a, b) {
            }, changed: function(a, b) {
            }, min: 0, max: 100, animate: !0, _slider: {vertical: !1, offset: 0, length: 0, marker: 0, ppp: 0, start: 0, stop: 0}}, _create: function() {
            var a = this, b = this.element, c = this.options, e = this.options._slider;
            void 0 != b.data("accuracy") && (c.accuracy = 0 < b.data("accuracy") ? b.data("accuracy") : 0);
            void 0 != b.data("animate") &&
                    (c.animate = b.data("animate"));
            void 0 != b.data("min") && (c.min = b.data("min"));
            c.min = 0 > c.min ? 0 : c.min;
            c.min = c.min > c.max ? c.max : c.min;
            void 0 != b.data("max") && (c.max = b.data("max"));
            c.max = 100 < c.max ? 100 : c.max;
            c.max = c.max < c.min ? c.min : c.max;
            void 0 != b.data("position") && (c.position = this._correctValue(b.data("position") > this.options.min ? b.data("position") > this.options.max ? this.options.max : b.data("position") : this.options.min));
            void 0 != b.data("color") && (c.color = b.data("color"));
            void 0 != b.data("completeColor") && (c.completeColor =
                    b.data("completeColor"));
            void 0 != b.data("markerColor") && (c.markerColor = b.data("markerColor"));
            void 0 != b.data("colors") && (c.colors = b.data("colors").split(","));
            void 0 != b.data("showHint") && (c.showHint = b.data("showHint"));
            e.vertical = b.hasClass("vertical");
            this._createSlider();
            this._initPoints();
            this._placeMarker(c.position);
            addTouchEvents(b[0]);
            b.children(".marker").on("mousedown", function(b) {
                b.preventDefault();
                a._startMoveMarker(b)
            });
            b.on("mousedown", function(b) {
                b.preventDefault();
                a._startMoveMarker(b)
            })
        },
        _startMoveMarker: function(a) {
            var b = this.element, d = this.options, e = this, f = b.children(".hint");
            c(document).mousemove(function(a) {
                e._movingMarker(a);
                b.hasClass("permanent-hint") || f.css("display", "block")
            });
            c(document).mouseup(function() {
                c(document).off("mousemove");
                c(document).off("mouseup");
                b.data("value", e.options.position);
                b.trigger("changed", e.options.position);
                d.changed(e.options.position, b);
                b.hasClass("permanent-hint") || f.css("display", "none")
            });
            this._initPoints();
            this._movingMarker(a)
        }, _movingMarker: function(a) {
            var b;
            b = this.options._slider.vertical;
            var c = this.options._slider.offset, e = this.options._slider.start, f = this.options._slider.stop, g = this.options._slider.length, h = this.options._slider.marker;
            a = b ? a.pageY - c : a.pageX - c;
            a < e ? a = e : a > f && (a = f);
            b = this._pixToPerc(b ? g - a - h / 2 : a - h / 2);
            this._placeMarker(b);
            this.options.position = b;
            this.options.change(Math.round(b), this.element)
        }, _placeMarker: function(a) {
            var b, c, e = this.options, f = 0, g = f = 0, h = this.element.children(".marker"), k = this.element.children(".complete"), l = this.element.children(".hint");
            c = this._percToPix(this.options.position);
            f = e.colors.length;
            g = e._slider.length / f;
            if (this.options._slider.vertical) {
                var n = this._percToPix(this.options.position) + this.options._slider.marker, p = this.options._slider.length - n;
                b = this._percToPix(a) + this.options._slider.marker;
                c = this.options._slider.length - b;
                this._animate(h.css("top", p), {top: c});
                this._animate(k.css("height", n), {height: b});
                f && (f = Math.round(b / g) - 1, k.css("background-color", e.colors[0 > f ? 0 : f]));
                e.showHint && l.html(Math.round(a)).css("top", c - l.height() /
                        2)
            } else
                b = this._percToPix(a), this._animate(h.css("left", c), {left: b}), this._animate(k.css("width", c), {width: b}), f && (f = Math.round(b / g) - 1, k.css("background-color", e.colors[0 > f ? 0 : f])), e.showHint && this._animate(l.html(Math.round(a)).css("left", c - l.width() / 2), {left: b - l.width() / 2})
        }, _animate: function(a, b) {
            this.options.animate ? a.stop(!0).animate(b) : a.css(b)
        }, _pixToPerc: function(a) {
            return this._correctValue(a * this.options._slider.ppp)
        }, _percToPix: function(a) {
            return 0 === this.options._slider.ppp ? 0 : a / this.options._slider.ppp
        },
        _correctValue: function(a) {
            var b = this.options.accuracy, c = this.options.max, e = this.options.min;
            if (0 === b)
                return a;
            if (a === c)
                return c;
            if (a === e)
                return e;
            a = Math.floor(a / b) * b + Math.round(a % b / b) * b;
            return a > c ? c : a < e ? e : a
        }, _initPoints: function() {
            var a = this.options._slider, b = this.element;
            a.vertical ? (a.offset = b.offset().top, a.length = b.height(), a.marker = b.children(".marker").height()) : (a.offset = b.offset().left, a.length = b.width(), a.marker = b.children(".marker").width());
            a.ppp = this.options.max / (a.length - a.marker);
            a.start =
                    a.marker / 2;
            a.stop = a.length - a.marker / 2
        }, _createSlider: function() {
            var a = this.element, b = this.options, d, e;
            a.html("");
            d = c("<div/>").addClass("complete").appendTo(a);
            e = c("<a/>").addClass("marker").appendTo(a);
            b.showHint && c("<span/>").addClass("hint").appendTo(a);
            "default" != b.color && a.css("background-color", b.color);
            "default" != b.completeColor && d.css("background-color", b.completeColor);
            "default" != b.markerColor && e.css("background-color", b.markerColor)
        }, value: function(a) {
            a = a > this.options.max ? this.options.max :
                    a;
            a = a < this.options.min ? this.options.min : a;
            return"undefined" !== typeof a ? (this._placeMarker(parseInt(a)), this.options.position = parseInt(a), this.options.change(Math.round(parseInt(a)), this.element), this) : Math.round(this.options.position)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
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

                    h.find('a').removeClass(e2)

                    h.find('a').addClass(e2);
                    setTimeout(function() {
                        h.find('a').removeClass(e2)
                    }, 1000);





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
    c.widget("metro.tablecontrol", {version: "1.0.0", options: {width: "100%", height: "auto", cls: "table", checkRow: !1, colModel: [], data: []}, _create: function() {
            var a = this.element;
            a.css({width: this.options.width, height: this.options.height});
            a = this.createTable(a);
            this.addHeader(a, this.options.colModel);
            this.addTableData(a, this.options.data);
            a.addClass(this.options.cls)
        }, addHeader: function(a, b) {
            var d = c("<thead/>").appendTo(a), e = c("<tr/>").appendTo(d);
            c.each(b, function(a, b) {
                c("<th/>").addClass(b.hcls).html(b.caption).appendTo(e)
            })
        },
        createTable: function(a) {
            return c("<table/>").appendTo(a)
        }, addTableData: function(a, b) {
            var d = this, e = c("<tbody/>").appendTo(a);
            c.each(b, function(a, b) {
                d.addRowData(e, b)
            })
        }, addRowData: function(a, b) {
            var d = c("<tr/>").appendTo(a);
            void 0 != b.__row_class && d.addClass(b.__row_class);
            c.each(this.options.colModel, function(a, f) {
                c("<td/>").css("width", f.width).addClass(f.cls).html(b[f.field]).appendTo(d)
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
$(function() {
    $("[data-role=table]").tablecontrol()
});
(function(c) {
    c.widget("metro.times", {version: "1.0.0", options: {style: {background: "bg-dark", foreground: "fg-white", divider: "fg-dark"}, blink: !0, alarm: {h: 0, m: 0, s: 0}, ontick: function(a, b, c) {
            }, onalarm: function() {
            }}, wrappers: {}, _interval: 0, _create: function() {
            var a = this, b = this.element;
            c.each(["Hours", "Minutes", "Seconds"], function() {
                c('<span class="count' + this + '">').html('<span class="digit-wrapper">                        <span class="digit">0</span>                    </span>                    <span class="digit-wrapper">                        <span class="digit">0</span>                    </span>').appendTo(b);
                "Seconds" != this && b.append('<span class="divider"></span>')
            });
            this.wrappers = this.element.find(".digit-wrapper");
            void 0 != b.data("blink") && (this.options.blink = b.data("blick"));
            void 0 != b.data("styleBackground") && (this.options.style.background = b.data("styleBackground"));
            void 0 != b.data("styleForeground") && (this.options.style.foreground = b.data("styleForeground"));
            void 0 != b.data("styleDivider") && (this.options.style.divider = b.data("styleDivider"));
            "default" != this.options.style.background && this.element.find(".digit").addClass(this.options.style.background);
            "default" != this.options.style.foreground && this.element.find(".digit").addClass(this.options.style.foreground);
            "default" != this.options.style.divider && this.element.find(".divider").addClass(this.options.style.divider);
            if (void 0 != b.data("alarm")) {
                var d = b.data("alarm").split(":");
                this.options.alarm.h = void 0 != d[0] ? d[0] : 0;
                this.options.alarm.m = void 0 != d[1] ? d[1] : 0;
                this.options.alarm.s = void 0 != d[2] ? d[2] : 0
            }
            b.data("onalarm");
            setTimeout(function() {
                a.tick()
            }, 1E3)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption",
                    a, b)
        }, tick: function() {
            var a = this;
            this._interval = setInterval(function() {
                var b = new Date, c, e;
                c = b.getHours();
                a.updateDuo(0, 1, c);
                e = b.getMinutes();
                a.updateDuo(2, 3, e);
                b = b.getSeconds();
                a.updateDuo(4, 5, b);
                a.options.ontick(c, e, b);
                a.blinkDivider();
                var f = a.options.alarm;
                f && (void 0 != f.h && f.h == c && void 0 != f.m && f.m == e && void 0 != f.s && f.s == b) && (a.options.onalarm(), a._trigger("alarm"))
            }, 1E3)
        }, blinkDivider: function() {
            this.options.blink && this.element.find(".divider").toggleClass("no-visible")
        }, updateDuo: function(a, b, c) {
            this.switchDigit(this.wrappers.eq(a),
                    Math.floor(c / 10) % 10);
            this.switchDigit(this.wrappers.eq(b), c % 10)
        }, switchDigit: function(a, b) {
            var d = a.find(".digit");
            if (d.is(":animated") || a.data("digit") == b)
                return!1;
            a.data("digit", b);
            var e = c("<span>", {"class": "digit", css: {top: "-2.1em", opacity: 0}, html: b});
            e.addClass(this.options.style.background);
            e.addClass(this.options.style.foreground);
            d.before(e).removeClass("static").animate({top: "2.5em", opacity: 0}, "fast", function() {
                d.remove()
            });
            e.delay(100).animate({top: 0, opacity: 1}, "fast");
            return!0
        }})
})(jQuery);
(function(c) {
    c.Dialog = function(a) {
        if (c.Dialog.opened)
            return METRO_DIALOG;
        c.Dialog.opened = !0;
        c.Dialog.settings = a;
        a = c.extend({icon: !1, title: "", content: "", flat: !1, shadow: !1, overlay: !1, width: "auto", height: "auto", position: "default", padding: !1, overlayClickClose: !0, sysButtons: {btnClose: !0}, onShow: function(a) {
            }, sysBtnCloseClick: function(a) {
            }, sysBtnMinClick: function(a) {
            }, sysBtnMaxClick: function(a) {
            }}, a);
        var b, d, e, f;
        b = c("<div/>").addClass("metro window-overlay");
        a.overlay && b.css({backgroundColor: "rgba(0,0,0,.7)"});
        d = c("<div/>").addClass("window");
        a.flat && d.addClass("flat");
        a.shadow && d.addClass("shadow").css("overflow", "hidden");
        e = c("<div/>").addClass("caption");
        f = c("<div/>").addClass("content");
        f.css({paddingTop: 32 + a.padding, paddingLeft: a.padding, paddingRight: a.padding, paddingBottom: a.padding});
        a.sysButtons && (a.sysButtons.btnClose && c("<button/>").addClass("btn-close").on("click", function(b) {
            b.preventDefault();
            b.stopPropagation();
            c.Dialog.close();
            a.sysBtnCloseClick(b)
        }).appendTo(e), a.sysButtons.btnMax && c("<button/>").addClass("btn-max").on("click",
                function(b) {
                    b.preventDefault();
                    b.stopPropagation();
                    a.sysBtnMaxClick(b)
                }).appendTo(e), a.sysButtons.btnMin && c("<button/>").addClass("btn-min").on("click", function(b) {
            b.preventDefault();
            b.stopPropagation();
            a.sysBtnMinClick(b)
        }).appendTo(e));
        a.icon && c(a.icon).addClass("icon").appendTo(e);
        c("<div/>").addClass("title").html(a.title).appendTo(e);
        f.html(a.content);
        e.appendTo(d);
        f.appendTo(d);
        d.appendTo(b);
        "auto" != a.width && d.css("min-width", a.width);
        "auto" != a.height && d.css("min-height", a.height);
        b.hide().appendTo("body").fadeIn("fast");
        METRO_DIALOG = d;
        d.css("position", "fixed").css("z-index", parseInt(b.css("z-index")) + 1).css("top", (c(window).height() - METRO_DIALOG.outerHeight()) / 2).css("left", (c(window).width() - d.outerWidth()) / 2);
        addTouchEvents(d[0]);
        if (a.draggable)
            e.on("mousedown", function(a) {
                c.Dialog.drag = !0;
                e.css("cursor", "move");
                d.css("z-index");
                var b = d.outerHeight(), f = d.outerWidth(), l = d.offset().top + b - a.pageY, n = d.offset().left + f - a.pageX;
                d.css("z-index", 99999).parents().on("mousemove", function(a) {
                    var e = 0 < a.pageY ? a.pageY + l - b : 0;
                    a = 0 < a.pageX ? a.pageX + n - f : 0;
                    c.Dialog.drag && (0 <= e && e <= window.innerHeight - d.outerHeight() && d.offset({top: e}), 0 <= a && a <= window.innerWidth - d.outerWidth() && d.offset({left: a}))
                });
                a.preventDefault()
            }).on("mouseup", function() {
                d.removeClass("draggable");
                c.Dialog.drag = !1;
                e.css("cursor", "default")
            });
        d.on("click", function(a) {
            a.stopPropagation()
        });
        if (a.overlayClickClose)
            b.on("click", function(a) {
                a.preventDefault();
                c.Dialog.close()
            });
        a.onShow(METRO_DIALOG);
        c.Dialog.autoResize();
        return METRO_DIALOG
    };
    c.Dialog.content =
            function(a) {
                return c.Dialog.opened && void 0 != METRO_DIALOG ? a ? (METRO_DIALOG.children(".content").html(a), c.Dialog.autoResize(), !0) : METRO_DIALOG.children(".content").html() : !1
            };
    c.Dialog.title = function(a) {
        if (!c.Dialog.opened || void 0 == METRO_DIALOG)
            return!1;
        var b = METRO_DIALOG.children(".caption").children(".title");
        a ? b.html(a) : b.html();
        return!0
    };
    c.Dialog.autoResize = function() {
        if (!c.Dialog.opened || void 0 == METRO_DIALOG)
            return!1;
        var a = METRO_DIALOG.children(".content"), b = (c(window).height() - METRO_DIALOG.outerHeight()) /
                2, d = (c(window).width() - METRO_DIALOG.outerWidth()) / 2;
        METRO_DIALOG.css({width: a.outerWidth(), height: a.outerHeight(), top: b, left: d});
        return!0
    };
    c.Dialog.close = function() {
        if (!c.Dialog.opened || void 0 == METRO_DIALOG)
            return!1;
        c.Dialog.opened = !1;
        METRO_DIALOG.parent(".window-overlay").fadeOut(function() {
            c(this).remove()
        });
        return!1
    }
})(jQuery);
(function(c) {
    var a = !1, b = [], d = {_container: null, _notify: null, _timer: null, options: {icon: "", caption: "", content: "", shadow: !0, width: "auto", height: "auto", style: !1, position: "right", timeout: 3E3}, init: function(a) {
            this.options = c.extend({}, this.options, a);
            this._build();
            return this
        }, _build: function() {
            a = this._container = a || c("<div/>").addClass("metro notify-container").appendTo("body");
            var d = this.options;
            if ("" == d.content || void 0 == d.content)
                return!1;
            this._notify = c("<div/>").addClass("notify");
            d.shadow && this._notify.addClass("shadow");
            d.style && void 0 != d.style.background && this._notify.css("background-color", d.style.background);
            d.style && void 0 != d.style.color && this._notify.css("color", d.style.color);
            "" != d.caption && void 0 != d.caption && c("<div/>").addClass("caption").html(d.caption).appendTo(this._notify);
            "" != d.content && void 0 != d.content && c("<div/>").addClass("content").html(d.content).appendTo(this._notify);
            "auto" != d.width && this._notify.css("min-width", d.width);
            "auto" != d.height && this._notify.css("min-height", d.height);
            this._notify.hide().appendTo(this._container).fadeIn("slow");
            b.push(this._notify);
            this.close(d.timeout)
        }, close: function(a) {
            this.clear();
            if (a == parseInt(a)) {
                var b = this;
                this._timer = setTimeout(function() {
                    b._timer = null;
                    b._hide()
                }, a)
            } else if (void 0 == a)
                return this._hide();
            return this
        }, clear: function() {
            return null != this._timer ? (clearTimeout(this._timer), this._timer = null, this) : !1
        }, _hide: function() {
            this.clear();
            return void 0 != this._notify ? (this._notify.hide("slow", function() {
                this.remove();
                b.splice(b.indexOf(this._notify), 1)
            }), this) : !1
        }, closeAll: function() {
            b.forEach(function(a) {
                a.hide("slow",
                        function() {
                            a.remove();
                            b.splice(b.indexOf(a), 1)
                        })
            });
            return this
        }};
    c.Notify = function(a) {
        return Object.create(d).init(a)
    };
    c.Notify.show = function(a, b) {
        return c.Notify({content: a, caption: b})
    }
})(jQuery);
(function(c) {
    c.widget("metro.listview", {version: "1.0.0", options: {onGroupExpand: function(a) {
            }, onGroupCollapse: function(a) {
            }, onListClick: function(a) {
            }}, _create: function() {
            var a = this, b = this.element;
            b.children(".collapsed").children(".group-content").hide();
            b.find(".group-title").on("click", function(b) {
                var e = c(this).parent(".list-group"), f = e.children(".group-content");
                e.toggleClass("collapsed");
                e.hasClass("collapsed") ? (f.slideUp(), a.options.onGroupCollapse(e)) : (f.slideDown(), a.options.onGroupExpand(e));
                b.preventDefault()
            });
            b.find(".list").on("click", function(d) {
                b.find(".list").removeClass("active");
                c(this).toggleClass("active");
                a.options.onListClick(c(this));
                //d.preventDefault()
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.treeview", {version: "1.0.0", options: {onNodeClick: function(a) {
            }, onNodeCollapsed: function(a) {
            }, onNodeExpanded: function(a) {
            }}, _create: function() {
            var a = this, b = this.element;
            b.find(".node.collapsed").find("ul").hide();
            b.find(".node-toggle").on("click", function(b) {
                var e = c(this).parent().parent("li");
                e.hasClass("keep-open") || (e.toggleClass("collapsed"), e.hasClass("collapsed") ? (e.children("ul").fadeOut("fast"), a.options.onNodeCollapsed(e)) : (e.children("ul").fadeIn("fast"), a.options.onNodeExpanded(e)),
                        a.options.onNodeClick(e), b.preventDefault(), b.stopPropagation())
            });
            b.find("a").each(function() {
                var a = c(this);
                a.css({paddingLeft: 10 * (a.parents("ul").length - 1)})
            });
            b.find("a").on("click", function(d) {
                var e = c(this), f = e.parent("li");
                b.find("a").removeClass("active");
                e.toggleClass("active");
                a.options.onNodeClick(f);
                d.preventDefault()
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.fluentmenu", {version: "1.0.0", options: {onSpecialClick: function(a, b) {
            }, onTabClick: function(a, b) {
            }}, _create: function() {
            var a = this, b = this.element, d = this.options, e = b.find(".tabs-holder > li > a");
            this._hidePanels();
            this._showPanel();
            e.on("click", function(e) {
                if (c(this).parent("li").hasClass("special"))
                    d.onSpecialClick(e, c(this));
                else {
                    var g = c(c(this).attr("href"));
                    a._hidePanels();
                    a._showPanel(g);
                    b.find(".tabs-holder > li").removeClass("active");
                    c(this).parent("li").addClass("active");
                    d.onTabClick(e, c(this))
                }
                e.preventDefault()
            })
        }, _hidePanels: function() {
            this.element.find(".tab-panel").hide()
        }, _showPanel: function(a) {
            void 0 == a && (a = this.element.find(".tabs-holder li.active a").attr("href"));
            c(a).show()
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
(function(c) {
    c.widget("metro.streamer", {version: "1.0.0", options: {scrollBar: !1, meter: {start: 9, stop: 19, interval: 20}, slideToGroup: 1, slideToTime: "10:20", slideSleep: 1E3, slideSpeed: 1E3, onClick: function(a) {
            }, onLongClick: function(a) {
            }}, _create: function() {
            var a = this, b = this.element, d = this.options, e = b.find(".stream"), f = b.find(".event"), g = b.find(".events"), h = b.find(".events-area"), k = b.find(".event-group"), l = b.find(".event-stream");
            void 0 != b.data("scrollBar") && (d.scrollBar = b.data("scrollBar"));
            void 0 != b.data("meterStart") &&
                    (d.meter.start = parseInt(b.data("meterStart")));
            void 0 != b.data("meterStop") && (d.meter.stop = parseInt(b.data("meterStop")));
            void 0 != b.data("meterInterval") && (d.meter.interval = b.data("meterInterval"));
            void 0 != b.data("slideToGroup") && (d.slideToGroup = parseInt(b.data("slideToGroup")));
            void 0 != b.data("slideSleep") && (d.slideSleep = parseInt(b.data("slideSleep")));
            void 0 != b.data("slideSpeed") && (d.slideSpeed = parseInt(b.data("slideSpeed")));
            b.data("streamSelect", -1);
            var n = c("<ul/>").addClass("meter"), p, m, q, u = d.meter.stop,
                    r = d.meter.interval, s = [];
            for (p = d.meter.start; p < u; p++)
                for (m = 0; 60 > m; m += r)
                    q = (10 > p ? "0" + p : p) + ":" + (10 > m ? "0" + m : m), c("<li/>").addClass("js-interval-" + q.replace(":", "-")).html("<em>" + q + "</em>").appendTo(n), s.push(q);
            b.data("intervals", s);
            n.insertBefore(b.find(".events-grid"));
            b.find(".event-stream").each(function(a, b) {
                var d = 0, f = c(b).find(".event");
                f.each(function(a, b) {
                    d += c(b).outerWidth()
                });
                c(b).css({width: d + 2 * (f.length - 1) + 1});
                c(b).find(".time").css("background-color", c(e[a]).css("background-color"))
            });
            g.css({"overflow-x": d.scrollBar ?
                        "scroll" : "hidden"});
            b.css({height: b.find(".streams").outerHeight() + (d.scrollBar ? 20 : 0)});
            var t = 0;
            k.each(function(a, b) {
                t += c(b).outerWidth()
            });
            t += 2 * (k.length - 1) + 10;
            h.css("width", t);
            f.each(function(a, b) {
                addTouchEvents(b)
            });
            f.mousedown(function(a) {
                a.altKey && c(this).toggleClass("selected")
            });
            b.mousewheel(function(a, b) {
                var c = 50 * b;
                g.scrollLeft(g.scrollLeft() - c);
                return!1
            });
            e.each(function(a, d) {
                c(d).mousedown(function(d) {
                    b.data("streamSelect") == a ? (f.removeClass("event-disable"), b.data("streamSelect", -1)) : (b.data("streamSelect",
                            a), f.addClass("event-disable"), c(l[a]).find(".event").removeClass("event-disable"))
                })
            });
            f.on("click", function(a) {
                a.preventDefault();
                d.onClick(c(this))
            });
            f.on("longclick", function(a) {
                c(this).toggleClass("selected");
                a.preventDefault();
                d.onLongClick(c(this))
            });
            b.find(".js-go-previous-time").on("click", function(c) {
                c = b.data("intervals").indexOf(b.data("current-time"));
                0 != c && (c--, c = b.data("intervals")[c], a.slideToTime(c, 0, d.slideSpeed))
            });
            b.find(".js-go-next-time").on("click", function(c) {
                c = b.data("intervals").indexOf(b.data("current-time"));
                c != b.data("intervals").length - 1 && (c++, c = b.data("intervals")[c], a.slideToTime(c, 0, d.slideSpeed))
            });
            b.find(".js-show-all-streams").on("click", function(a) {
                b.find(".event").removeClass("event-disable");
                b.data("streamSelect", -1);
                a.preventDefault()
            });
            b.find(".js-schedule-mode").on("click", function(a) {
                c(this).toggleClass("inverse");
                b.data("schedule-mode", c(this).hasClass("inverse"));
                a.preventDefault()
            });
            d.slideToTime ? this.slideToTime(d.slideToTime, d.slideSleep, d.slideSpeed) : this.slideToGroup(d.slideToGroup,
                    d.slideSleep, d.slideSpeed)
        }, slideToTime: function(a, b, c) {
            var e = this, f = this.element, g = f.find(".meter li.js-interval-" + a.replace(":", "-"))[0], h = f.find(".streams").outerWidth() + 2;
            setTimeout(function() {
                f.find(".events").animate({scrollLeft: "+=" + (g.offsetLeft - h)}, c, function() {
                    e._afterSlide()
                })
            }, b);
            f.data("current-time", a)
        }, slideToGroup: function(a, b, c) {
            var e = this, f = this.element, g = f.find(".event-group"), h = f.find(".streams").outerWidth() + 2;
            setTimeout(function() {
                f.find(".events").animate({scrollLeft: "+=" + (g[a -
                            1].offsetLeft - h)}, c, function() {
                    e._afterSlide()
                })
            }, b)
        }, _afterSlide: function() {
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.scrollbar", {version: "1.0.0", options: {height: "100%", width: "100%", axis: ["x", "y"], wheel: 55}, startSize: {width: null, height: null}, elemPadding: !1, bothScroll: !1, scrollbar: null, contentHeight: 0, contentWidth: 0, contentMinHeight: 0, contentMinWidth: 0, dragElem: null, dragStart: !1, startCoords: {x: 0, y: 0}, currCoords: {x: 0, y: 0}, handlers: !1, _create: function() {
            var a = this.element, b = this;
            if (void 0 != a.data("scroll")) {
                var d = a.data("scroll");
                "vertical" == d && (this.options.axis = "y");
                "horizontal" == d && (this.options.axis =
                        "x");
                "both" == d && (this.options.axis = ["x", "y"])
            }
            void 0 != a.data("height") && (this.options.height = a.data("height"));
            void 0 != a.data("width") && (this.options.width = a.data("width"));
            void 0 != a.data("wheel") && (this.options.wheel = a.data("wheel"));
            a.css({position: "relative"});
            var d = a.outerWidth(), e = a.outerHeight();
            this.contentMinWidth = d;
            this.contentMinHeight = e;
            this.startSize.width = this.options.width;
            this.startSize.height = this.options.height;
            var f = this.startSize.width == parseInt(this.startSize.width) ? this.startSize.width +
                    "px" : this.startSize.width, g = this.startSize.height == parseInt(this.startSize.height) ? this.startSize.height + "px" : this.startSize.height;
            a.wrap('<div class="scrollbar" style="width: ' + f + "; height: " + g + ';"></div>');
            this.scrollbar = a.parents(".scrollbar").first();
            this.scrollbar.parents().first().css({overflow: "hidden"});
            this._build(d, e);
            c(window).resize(function() {
                b._resize()
            })
        }, _resize: function() {
            var a = this.element;
            if (!isNaN(parseInt(this.element.css("left"))) && 0 != parseInt(this.element.css("left")) || !isNaN(parseInt(this.element.css("top"))) &&
                    parseInt(this.element.css("top"))) {
                var b = Math.abs(parseInt(this.element.css("left"))), c = Math.abs(parseInt(this.element.css("top"))), e = this.scrollbar.width(), f = this.scrollbar.height();
                this.contentWidth - b < e && (b -= e - (this.contentWidth - b), 0 > b && (b = 0), this.element.css("left", -1 * b));
                this.element.css("left", -1 * b);
                this.contentHeight - c < f && (c -= f - (this.contentHeight - c), 0 > c && (c = 0), this.element.css("top", -1 * c))
            }
            this.options.width = this.startSize.width;
            this.options.height = this.startSize.height;
            this.scrollbar.css({padding: 0});
            this.elemPadding && (this.element.css({paddingRight: "-=5", paddingBottom: "-=5"}), this.elemPadding = !1);
            0 < this.scrollbar.find(".scrollbar-v").length && this.scrollbar.find(".scrollbar-v").remove();
            0 < this.scrollbar.find(".scrollbar-h").length && this.scrollbar.find(".scrollbar-h").remove();
            0 < this.scrollbar.find(".scrollbar-both").length && this.scrollbar.find(".scrollbar-both").remove();
            b = a.outerWidth();
            a = a.outerHeight();
            this.contentWidth = b;
            this.contentHeight = a;
            this._removeHandlers();
            this._build(b, a)
        }, _build: function(a,
                b) {
            var c = this.element;
            this.options.width = "100%" == this.options.width ? this.scrollbar.outerWidth() : this.options.width;
            this.options.height = "100%" == this.options.height ? this.scrollbar.outerHeight() : this.options.height;
            this.scrollbar.css({width: this.startSize.width, height: this.startSize.height});
            this.contentWidth = a;
            this.contentHeight = b;
            "y" == this.options.axis ? this.contentHeight > this.options.height ? (this.scrollbar.css({paddingRight: 20, paddingBottom: 0}), a = c.outerWidth(), b = c.outerHeight(), this.contentWidth =
                    a, this.contentHeight = b, this._verticalScrollbar(), this._startHandlers()) : (0 < this.scrollbar.find(".scrollbar-v").length && this.scrollbar.find(".scrollbar-v").hide(), this.scrollbar.css({paddingRight: 0, paddingBottom: 0})) : "x" == this.options.axis ? this.contentWidth > this.options.width ? ("100%" == this.startSize.height && (this.scrollbar.css({paddingBottom: 20, paddingRight: 0}), a = c.outerWidth(), b = c.outerHeight(), this.contentWidth = a, this.contentHeight = b), this._horizontalScrollbar(), this._startHandlers()) : (0 < this.scrollbar.find(".scrollbar-h").length &&
                    this.scrollbar.find(".scrollbar-h").hide(), this.scrollbar.css({paddingBottom: 0, paddingRight: 0})) : this.contentHeight > this.options.height && this.contentWidth > this.options.width ? (this.bothScroll = !0, 0 < this.scrollbar.find(".scrollbar-both").length ? this.scrollbar.find(".scrollbar-both").show() : this.scrollbar.append('<div class="scrollbar-both"></div>'), this.elemPadding || (this.element.css({paddingRight: "+=5", paddingBottom: "+=5"}), this.elemPadding = !0), a = c.outerWidth(), b = c.outerHeight(), this.contentWidth = a,
                    this.contentHeight = b, this._verticalScrollbar(), this._horizontalScrollbar(), this._startHandlers()) : (this.bothScroll = !1, 0 < this.scrollbar.find(".scrollbar-both").length && this.scrollbar.find(".scrollbar-both").hide(), this.elemPadding && (this.element.css({paddingRight: "-=5", paddingBottom: "-=5"}), this.elemPadding = !1), this.contentWidth > this.options.width ? ("100%" == this.startSize.height && (this.scrollbar.css({paddingBottom: 20, paddingRight: 0}), a = c.outerWidth(), b = c.outerHeight(), this.contentWidth = a, this.contentHeight =
                    b), this._horizontalScrollbar(), this._startHandlers()) : (0 < this.scrollbar.find(".scrollbar-h").length && this.scrollbar.find(".scrollbar-h").hide(), this.scrollbar.css({paddingBottom: 0, paddingRight: 0})), this.contentHeight > this.options.height ? (this.scrollbar.css({paddingRight: 20, paddingBottom: 0}), a = c.outerWidth(), b = c.outerHeight(), this.contentWidth = a, this.contentHeight = b, this._verticalScrollbar(), this._startHandlers()) : (0 < this.scrollbar.find(".scrollbar-v").length && this.scrollbar.find(".scrollbar-v").hide(),
                    this.scrollbar.css({paddingRight: 0, paddingBottom: 0})))
        }, _verticalScrollbar: function() {
            if (1 > this.scrollbar.find(".scrollbar-v").length) {
                var a = [];
                a[a.length] = '<div class="scrollbar-v">';
                a[a.length] = '<div class="scrollbar-v-up"></div>';
                a[a.length] = '<div class="scrollbar-v-down"></div>';
                a[a.length] = '<div class="scrollbar-line-v">';
                a[a.length] = '<div class="scrollbar-line-v-btn"></div>';
                a[a.length] = "</div>";
                a[a.length] = "</div>";
                a = a.join("");
                this.scrollbar.append(a)
            } else
                this.scrollbar.find(".scrollbar-v").show();
            var b = this.scrollbar.find(".scrollbar-line-v"), a = this.scrollbar.find(".scrollbar-line-v-btn"), c = this.scrollbar.find(".scrollbar-v");
            if (this.bothScroll) {
                c.height(this.options.height);
                var e = c.height() - 15;
                this.options.height = e;
                c.height(e)
            } else
                c.height(this.options.height);
            c = this.options.height - 32;
            e = c / this.contentHeight;
            b.height(c);
            e >= (this.contentHeight - 32) / this.contentHeight ? a.hide() : (b = e * this.options.height, a.show().height(b))
        }, _horizontalScrollbar: function() {
            if (1 > this.scrollbar.find(".scrollbar-h").length) {
                var a =
                        [];
                a[a.length] = '<div class="scrollbar-h">';
                a[a.length] = '<div class="scrollbar-h-up"></div>';
                a[a.length] = '<div class="scrollbar-h-down"></div>';
                a[a.length] = '<div class="scrollbar-line-h">';
                a[a.length] = '<div class="scrollbar-line-h-btn"></div>';
                a[a.length] = "</div>";
                a[a.length] = "</div>";
                a = a.join("");
                this.scrollbar.append(a)
            } else
                this.scrollbar.find(".scrollbar-h").show();
            var a = this.scrollbar.find(".scrollbar-line-h"), b = this.scrollbar.find(".scrollbar-line-h-btn"), c = this.scrollbar.find(".scrollbar-h");
            if (this.bothScroll) {
                c.width(this.options.width);
                var e = c.width() - 15;
                this.options.width = e;
                c.width(e)
            } else
                c.width(this.options.width);
            var c = this.options.width - 32, e = c / this.contentWidth, f = e * this.options.width, g = isNaN(parseInt(this.element.css("left"))) ? 0 : parseInt(this.element.css("left")), g = Math.abs(g) * e;
            a.width(c);
            e >= (this.contentWidth - 32) / this.contentWidth ? b.hide() : b.show().width(f).css({left: g})
        }, _startHandlers: function() {
            if (this.handlers)
                return!1;
            this.handlers = !0;
            var a = this;
            c(document).mousemove(function(b) {
                a._drag(b)
            });
            c(document).mouseup(function(b) {
                a._dragEnd(b)
            });
            this.scrollbar.find(".scrollbar-line-v-btn,.scrollbar-line-h-btn").on("mousedown", function(b) {
                a._dragStart(b, c(this))
            });
            this.scrollbar.find(".scrollbar-line-v,.scrollbar-line-h").on("click", function(b) {
                a._clickPos(b, c(this))
            });
            this.scrollbar.find(".scrollbar-v-up,.scrollbar-h-up").on("click", function(b) {
                a._fixScroll(1, c(this))
            });
            this.scrollbar.find(".scrollbar-v-down,.scrollbar-h-down").on("click", function(b) {
                a._fixScroll(-1, c(this))
            });
            this.scrollbar.mousewheel(function(b,
                    c) {
                a._fixScroll(c);
                return!1
            })
        }, _removeHandlers: function() {
            if (!this.handlers)
                return!1;
            this.handlers = !1;
            c(document).mousemove(function(a) {
                return!1
            });
            c(document).mouseup(function(a) {
                return!1
            });
            this.scrollbar.find(".scrollbar-line-v-btn,.scrollbar-line-h-btn").off("mousedown");
            this.scrollbar.find(".scrollbar-line-v,.scrollbar-line-h").off("click");
            this.scrollbar.find(".scrollbar-v-up,.scrollbar-h-up").off("click");
            this.scrollbar.find(".scrollbar-v-down,.scrollbar-h-down").off("click")
        }, _clickPos: function(a,
                b) {
            if ("scrollbar-line-v" == c(a.target).attr("class") || "scrollbar-line-h" == c(a.target).attr("class")) {
                var d = b.offset();
                if ("scrollbar-line-v" == c(a.target).attr("class")) {
                    var e = a.pageY - d.top, f = b.find(".scrollbar-line-v-btn");
                    this.dragElem = {elem: f, width: f.width(), height: f.height(), parent: b, parentWidth: b.width(), parentHeight: b.height(), parentOffset: d};
                    this._scrollTo(0, e, "y")
                } else
                    e = a.pageX - d.left, f = b.find(".scrollbar-line-h-btn"), this.dragElem = {elem: f, width: f.width(), height: f.height(), parent: b, parentWidth: b.width(),
                        parentHeight: b.height(), parentOffset: d}, this._scrollTo(e, 0, "x");
                this.dragElem = null
            }
        }, _fixScroll: function(a, b) {
            var c, e, f, g = this.options.wheel;
            if (void 0 !== b && (b.hasClass("scrollbar-h-up") || b.hasClass("scrollbar-h-down")) || "x" == this.options.axis || "x" != this.options.axis && "y" != this.options.axis && 1 > this.scrollbar.find(".scrollbar-v").length) {
                var h = 100 * (g / this.contentWidth);
                e = (this.options.width - 32) / 100 * h;
                h = parseInt(this.element.css("left"));
                f = isNaN(h) ? 0 : Math.abs(h);
                h = this.scrollbar.find(".scrollbar-line-h-btn");
                c = this.scrollbar.find(".scrollbar-line-h");
                var k = parseFloat(h.css("left")), k = isNaN(k) ? 0 : k;
                0 < a ? (g = f - g, f = k - e) : (g = f + g, f = k + e);
                0 > g && (g = 0);
                g > this.contentWidth - this.options.width && (g = this.contentWidth - this.options.width);
                e = c.width();
                c.height();
                c = h.width();
                h.height();
                0 > f && (f = 0);
                f + c > e && (f = e - c);
                this.element.css({left: -1 * g});
                h.css({left: f})
            } else
                h = 100 * (g / this.contentHeight), e = (this.options.height - 32) / 100 * h, h = parseInt(this.element.css("top")), f = isNaN(h) ? 0 : Math.abs(h), h = this.scrollbar.find(".scrollbar-line-v-btn"),
                        c = this.scrollbar.find(".scrollbar-line-v"), k = parseFloat(h.css("top")), k = isNaN(k) ? 0 : k, 0 < a ? (g = f - g, e = k - e) : (g = f + g, e = k + e), 0 > g && (g = 0), g > this.contentHeight - this.options.height && (g = this.contentHeight - this.options.height), c.width(), f = c.height(), h.width(), c = h.height(), 0 > e && (e = 0), e + c > f && (e = f - c), this.element.css({top: -1 * g}), h.css({top: e})
        }, _scrollTo: function(a, b, c) {
            "x" == c ? (c = (this.options.width - 32) / this.contentWidth, b = a / c, 0 > b && (b = 0), b > this.contentWidth - this.options.width && (b = this.contentWidth - this.options.width),
                    0 > a && (a = 0), a > this.dragElem.parentWidth - this.dragElem.width && (a = this.dragElem.parentWidth - this.dragElem.width), this.dragElem.elem.css({left: a}), this.element.css({left: -1 * b})) : (c = (this.options.height - 32) / this.contentHeight, a = b / c, 0 > a && (a = 0), a > this.contentHeight - this.options.height && (a = this.contentHeight - this.options.height), 0 > b && (b = 0), b > this.dragElem.parentHeight - this.dragElem.height && (b = this.dragElem.parentHeight - this.dragElem.height), this.dragElem.elem.css({top: b}), this.element.css({top: -1 * a}))
        }, _scroll: function() {
            if (this.dragElem.elem.hasClass("scrollbar-line-h-btn")) {
                var a =
                        (this.options.width - 32) / this.contentWidth, b = parseInt(this.dragElem.elem.css("left")), a = (isNaN(b) ? 0 : Math.abs(b)) / a;
                0 > a && (a = 0);
                a > this.contentWidth - this.options.width && (a = this.contentWidth - this.options.width);
                this.element.css({left: -1 * a})
            } else
                a = (this.options.height - 32) / this.contentHeight, b = parseInt(this.dragElem.elem.css("top")), a = (isNaN(b) ? 0 : Math.abs(b)) / a, 0 > a && (a = 0), a > this.contentHeight - this.options.height && (a = this.contentHeight - this.options.height), this.element.css({top: -1 * a})
        }, _startCoordsDiff: function(a) {
            var b =
                    this.dragElem.elem.offset();
            this.startCoords.x = a.pageX - b.left;
            this.startCoords.y = a.pageY - b.top
        }, _dragStart: function(a, b) {
            var c = b.parents().first();
            this.dragElem = {elem: b, width: b.width(), height: b.height(), parent: c, parentWidth: c.width(), parentHeight: c.height(), parentOffset: c.offset()};
            this.dragStart = !0;
            this.currCoords.x = a.pageX;
            this.currCoords.y = a.pageY;
            this._startCoordsDiff(a)
        }, _drag: function(a) {
            if (this.dragStart) {
                this.currCoords.x = a.pageX;
                this.currCoords.y = a.pageY;
                a = this.currCoords.x - this.startCoords.x -
                        this.dragElem.parentOffset.left;
                var b = this.currCoords.y - this.startCoords.y - this.dragElem.parentOffset.top;
                0 > a && (a = 0);
                a + this.dragElem.width >= this.dragElem.parentWidth && (a = this.dragElem.parentWidth - this.dragElem.width);
                0 > b && (b = 0);
                b + this.dragElem.height > this.dragElem.parentHeight && (b = this.dragElem.parentHeight - this.dragElem.height);
                this.dragElem.elem.css({left: a, top: b});
                this._scroll()
            }
        }, _dragEnd: function(a) {
            this.dragStart && (this.dragElem = null, this.dragStart = !1, this.startCoords.x = 0, this.startCoords.y =
                    0, this.currCoords.x = null, this.currCoords.y = null)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.stepper", {version: "1.0.0", options: {steps: 3, start: 1, onStep: function(a, b) {
            }}, _create: function() {
            var a = this.element, b = this.options;
            void 0 != a.data("steps") && (b.steps = a.data("steps"));
            void 0 != a.data("start") && (b.start = a.data("start"));
            this._createStepper();
            this._positioningSteps();
            this._stepTo(b.start)
        }, _createStepper: function() {
            var a = this.element, b = this.options, d, e;
            e = c("<ul/>");
            for (d = 0; d < b.steps; d++)
                c("<li/>").appendTo(e);
            e.appendTo(a)
        }, _positioningSteps: function() {
            var a =
                    this.element, b = a.find("li"), d = a.width(), e = b.length - 1, f = c(b[0]).width();
            c.each(b, function(a, b) {
                var k = 0 == a ? 0 : (d - f) / e * a;
                c(b).animate({left: k})
            })
        }, _stepTo: function(a) {
            var b = this.options, d = this.element.find("li");
            d.removeClass("current").removeClass("complete");
            c.each(d, function(d, f) {
                d < a - 1 && c(f).addClass("complete");
                d == a - 1 && (c(f).addClass("current"), b.onStep(d + 1, f))
            })
        }, first: function() {
            var a = this.options;
            a.start = 1;
            this._stepTo(a.start)
        }, last: function() {
            var a = this.options, b = this.element.find("li");
            a.start =
                    b.length;
            this._stepTo(a.start)
        }, next: function() {
            var a = this.options, b = this.element.find("li");
            a.start + 1 > b.length || (a.start++, this._stepTo(a.start))
        }, prior: function() {
            var a = this.options;
            0 != a.start - 1 && (a.start--, this._stepTo(a.start))
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.pullmenu", {version: "1.0.0", options: {}, _create: function() {
            var a = this.element, b = void 0 != a.data("relation") ? a.data("relation") : a.parent().children(".element-menu, .horizontal-menu");
            addTouchEvents(a[0]);
            a.on("click", function(a) {
                b.slideToggle();
                a.preventDefault();
                a.stopPropagation()
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
$(window).resize(function() {
    800 < (0 < window.innerWidth ? window.innerWidth : screen.width) ? $(".element-menu").show() : $(".element-menu").hide()
});
(function(c) {
    c.widget("metro.wizard", {version: "1.0.0", options: {stepper: !0, stepperType: "default", locale: c.Metro.currentLocale, finishStep: "default", buttons: {cancel: !0, help: !1, prior: !0, next: !0, finish: !0}, onCancel: function(a, b) {
            }, onHelp: function(a, b) {
            }, onPrior: function(a, b) {
                return!0
            }, onNext: function(a, b) {
                return!0
            }, onFinish: function(a, b) {
            }, onPage: function(a, b) {
            }}, _stepper: void 0, _currentStep: 0, _steps: void 0, _create: function() {
            var a = this.element, b = this.options, c = a.find(".step");
            this._steps = c;
            b.stepper &&
                    (this._stepper = this._createStepper(c.length).insertBefore(a.find(".steps")));
            void 0 != a.data("locale") && (b.locale = a.data("locale"));
            this._createEvents();
            this.options.onPage(this._currentStep + 1, a)
        }, _createStepper: function(a) {
            var b = this.options;
            a = c("<div/>").addClass("stepper").attr("data-role", "stepper").attr("data-steps", a);
            "default" != b.stepperType && a.addClass(b.stepperType);
            return a
        }, _createEvents: function() {
            var a = this, b = this.element, d = this.options;
            if (d.buttons) {
                var e = c("<div/>").addClass("actions").appendTo(b),
                        f = c("<div/>").addClass("group-left").appendTo(e), e = c("<div/>").addClass("group-right").appendTo(e);
                if (d.buttons.cancel)
                    c("<button type='button'/>").addClass("btn-cancel").html(c.Metro.Locale[d.locale].buttons[2]).appendTo(f).on("click", function() {
                        d.onCancel(a._currentStep + 1, b)
                    });
                if (d.buttons.help)
                    c("<button type='button'/>").addClass("btn-help").html(c.Metro.Locale[d.locale].buttons[3]).appendTo(e).on("click", function() {
                        d.onHelp(a._currentStep + 1, b)
                    });
                if (d.buttons.prior)
                    c("<button type='button'/>").addClass("btn-prior").html(c.Metro.Locale[d.locale].buttons[4]).appendTo(e).on("click",
                            function() {
                                d.onPrior(a._currentStep + 1, b) && a.prior()
                            });
                if (d.buttons.next)
                    c("<button type='button'/>").addClass("btn-next").html(c.Metro.Locale[d.locale].buttons[5]).appendTo(e).on("click", function() {
                        d.onNext(a._currentStep + 1, b) && a.next()
                    });
                if (d.buttons.finish)
                    c("<button type='button' disabled/>").addClass("btn-finish").html(c.Metro.Locale[d.locale].buttons[6]).appendTo(e).on("click", function() {
                        d.onFinish(a._currentStep + 1, b)
                    })
            }
        }, next: function() {
            var a = this._currentStep + 1;
            if (a == this._steps.length)
                return!1;
            this._currentStep = a;
            this._steps.hide();
            c(this._steps[a]).show();
            this.options.onPage(this._currentStep + 1, this.element);
            this._stepper.stepper("next");
            var b = parseInt("default" == this.options.finishStep ? this._steps.length - 1 : this.options.finishStep);
            a == b ? this.element.find(".btn-finish").attr("disabled", !1) : this.element.find(".btn-finish").attr("disabled", !0);
            return!0
        }, prior: function() {
            var a = this._currentStep - 1;
            if (0 > a)
                return!1;
            this._currentStep = a;
            this._steps.hide();
            c(this._steps[a]).show();
            this.options.onPage(this._currentStep +
                    1, this.element);
            this._stepper.stepper("prior");
            var b = parseInt("default" == this.options.finishStep ? this._steps.length - 1 : this.options.finishStep);
            a == b ? this.element.find(".btn-finish").attr("disabled", !1) : this.element.find(".btn-finish").attr("disabled", !0);
            return!0
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.panel", {version: "1.0.0", options: {onCollapse: function() {
            }, onExpand: function() {
            }}, _create: function() {
            var a = this.element, b = this.options, c = a.children(".panel-header"), e = a.children(".panel-content");
            c.on("click", function() {
                e.slideToggle("fast", function() {
                    a.toggleClass("collapsed");
                    if (a.hasClass("collapsed"))
                        b.onCollapse();
                    else
                        b.onExpand()
                })
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.widget("metro.tileTransform", {version: "1.0.0", options: {}, _create: function() {
            var a = this.element, b = a.width(), d = a.height();
            a.on("click", function(a) {
            });
            a.on("mousedown", function(e) {
                var f = e.pageX - c(this).offset().left;
                e = e.pageY - c(this).offset().top;
                var g = "top";
                f < 1 * b / 3 && (e < 1 * d / 2 || e > 1 * d / 2) ? g = "left" : f > 2 * b / 3 && (e < 1 * d / 2 || e > 1 * d / 2) ? g = "right" : f > 1 * b / 3 && (f < 2 * b / 3 && e > d / 2) && (g = "bottom");
                c(this).addClass("tile-transform-" + g);
                "A" == a[0].tagName && a.attr("href") && setTimeout(function() {
                    document.location.href =
                            a.attr("href")
                }, 500)
            });
            a.on("mouseup", function() {
                c(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")
            });
            a.on("mouseleave", function() {
                c(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
})(jQuery);
(function(c) {
    c.Metro.initAccordions = function(a) {
        void 0 != a ? c(a).find("[data-role=accordion]").accordion() : c("[data-role=accordion]").accordion()
    };
    c.Metro.initButtonSets = function(a) {
        void 0 != a ? (c(a).find("[data-role=button-set]").buttonset(), c(a).find("[data-role=button-group]").buttongroup()) : (c("[data-role=button-set]").buttonset(), c("[data-role=button-group]").buttongroup())
    };
    c.Metro.initCalendars = function(a) {
        void 0 != a ? c(a).find("[data-role=calendar]").calendar() : c("[data-role=calendar]").calendar()
    };
    c.Metro.initCarousels = function(a) {
        void 0 != a ? c(a).find("[data-role=carousel]").carousel() : c("[data-role=carousel]").carousel()
    };
    c.Metro.initCountdowns = function(a) {
        void 0 != a ? c(a).find("[data-role=countdown]").countdown() : c("[data-role=countdown]").countdown()
    };
    c.Metro.initDatepickers = function(a) {
        void 0 != a ? c(a).find("[data-role=datepicker]").datepicker() : c("[data-role=datepicker]").datepicker()
    };
    c.Metro.initDropdowns = function(a) {
        void 0 != a ? c(a).find("[data-role=dropdown]").dropdown() : c("[data-role=dropdown]").dropdown()
    };
    c.Metro.initFluentMenus = function(a) {
        void 0 != a ? c(a).find("[data-role=fluentmenu]").fluentmenu() : c("[data-role=fluentmenu]").fluentmenu()
    };
    c.Metro.initHints = function(a) {
        void 0 != a ? c(a).find("[data-hint]").hint() : c("[data-hint]").hint()
    };
    c.Metro.initInputs = function(a) {
        void 0 != a ? c(a).find("[data-role=input-control], .input-control").inputControl() : c("[data-role=input-control], .input-control").inputControl()
    };
    c.Metro.transformInputs = function(a) {
        void 0 != a ? c(a).find("[data-transform=input-control]").inputTransform() :
                c("[data-transform=input-control]").inputTransform()
    };
    c.Metro.initListViews = function(a) {
        void 0 != a ? c(a).find("[data-role=listview]").listview() : c("[data-role=listview]").listview()
    };
    c.Metro.initLives = function(a) {
        void 0 != a ? c(a).find("[data-role=live-tile], [data-role=live]").livetile() : c("[data-role=live-tile], [data-role=live]").livetile()
    };
    c.Metro.initProgreeBars = function(a) {
        void 0 != a ? c(a).find("[data-role=progress-bar]").progressbar() : c("[data-role=progress-bar]").progressbar()
    };
    c.Metro.initRatings =
            function(a) {
                void 0 != a ? c(a).find("[data-role=rating]").rating() : c("[data-role=rating]").rating()
            };
    c.Metro.initScrolls = function(a) {
        void 0 != a ? c(a).find("[data-role=scrollbox]").scrollbar() : c("[data-role=scrollbox]").scrollbar()
    };
    c.Metro.initSliders = function(a) {
        void 0 != a ? c(a).find("[data-role=slider]").slider() : c("[data-role=slider]").slider()
    };
    c.Metro.initTabs = function(a) {
        void 0 != a ? c(a).find("[data-role=tab-control]").tabcontrol() : c("[data-role=tab-control]").tabcontrol()
    };
    c.Metro.initTimes = function(a) {
        void 0 !=
                a ? c(a).find("[data-role=times]").times() : c("[data-role=times]").times()
    };
    c.Metro.initTrees = function(a) {
        void 0 != a ? c(a).find("[data-role=treeview]").treeview() : c("[data-role=treeview]").treeview()
    };
    c.Metro.initSteppers = function(a) {
        void 0 != a ? c(a).find("[data-role=stepper]").stepper() : c("[data-role=stepper]").stepper()
    };
    c.Metro.initStreamers = function(a) {
        void 0 != a ? c(a).find("[data-role=streamer]").streamer() : c("[data-role=streamer]").streamer()
    };
    c.Metro.initDragTiles = function(a) {
        void 0 != a ? c(a).find("[data-role=drag-drop]").dragtile() :
                c("[data-role=drag-drop]").dragtile()
    };
    c.Metro.initPulls = function(a) {
        void 0 != a && c(a).find("[data-role=pull-menu], .pull-menu").pullmenu();
        c("[data-role=pull-menu], .pull-menu").pullmenu()
    };
    c.Metro.initPanels = function(a) {
        void 0 != a && c(a).find("[data-role=panel]").panel();
        c("[data-role=panel]").panel()
    };
    c.Metro.initTileTransform = function(a) {
        void 0 != a && c(a).find("[data-click=transform]").tileTransform();
        c("[data-click=transform]").tileTransform()
    };
    c.Metro.initAll = function(a) {
        c.Metro.initAccordions(a);
        c.Metro.initButtonSets(a);
        c.Metro.initCalendars(a);
        c.Metro.initCarousels(a);
        c.Metro.initCountdowns(a);
        c.Metro.initDatepickers(a);
        c.Metro.initDropdowns(a);
        c.Metro.initFluentMenus(a);
        c.Metro.initHints(a);
        c.Metro.initInputs(a);
        c.Metro.transformInputs(a);
        c.Metro.initListViews(a);
        c.Metro.initLives(a);
        c.Metro.initProgreeBars(a);
        c.Metro.initRatings(a);
        c.Metro.initScrolls(a);
        c.Metro.initSliders(a);
        c.Metro.initTabs(a);
        c.Metro.initTimes(a);
        c.Metro.initTrees(a);
        c.Metro.initSteppers(a);
        c.Metro.initStreamers(a);
        c.Metro.initDragTiles(a);
        c.Metro.initPulls(a);
        c.Metro.initPanels(a);
        c.Metro.initTileTransform(a)
    }
})(jQuery);
$(function() {
    $.Metro.initAll()
});
$(function() {
    if (METRO_AUTO_REINIT) {
        var c = $(".metro").html(), a;
        setInterval(function() {
            a = $(".metro").html();
            c !== a && (c = a, $.Metro.initAll())
        }, 500)
    }
});
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="jquery easing">
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    }, easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    }, easeOutQuad: function(a, b, c, d, e) {
        return-d * (b /= e) * (b - 2) + c
    }, easeInOutQuad: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1)
            return d / 2 * b * b + c;
        return-d / 2 * (--b * (b - 2) - 1) + c
    }, easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    }, easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    }, easeInOutCubic: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1)
            return d / 2 * b * b * b + c;
        return d / 2 * ((b -= 2) * b * b + 2) + c
    }, easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    }, easeOutQuart: function(a, b, c, d, e) {
        return-d * ((b = b / e - 1) * b * b * b - 1) + c
    }, easeInOutQuart: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1)
            return d / 2 * b * b * b * b + c;
        return-d / 2 * ((b -= 2) * b * b * b - 2) + c
    }, easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    }, easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    }, easeInOutQuint: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1)
            return d / 2 * b * b * b * b * b + c;
        return d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    }, easeInSine: function(a, b, c, d, e) {
        return-d * Math.cos(b / e * (Math.PI / 2)) + d + c
    }, easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    }, easeInOutSine: function(a, b, c, d, e) {
        return-d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    }, easeInExpo: function(a, b, c, d, e) {
        return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    }, easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    }, easeInOutExpo: function(a, b, c, d, e) {
        if (b == 0)
            return c;
        if (b == e)
            return c + d;
        if ((b /= e / 2) < 1)
            return d / 2 * Math.pow(2, 10 * (b - 1)) + c;
        return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    }, easeInCirc: function(a, b, c, d, e) {
        return-d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    }, easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    }, easeInOutCirc: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1)
            return-d / 2 * (Math.sqrt(1 - b * b) - 1) + c;
        return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    }, easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0)
            return c;
        if ((b /= e) == 1)
            return c + d;
        if (!g)
            g = e * .3;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return-(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
    }, easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0)
            return c;
        if ((b /= e) == 1)
            return c + d;
        if (!g)
            g = e * .3;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    }, easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0)
            return c;
        if ((b /= e / 2) == 2)
            return c + d;
        if (!g)
            g = e * .3 * 1.5;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        if (b < 1)
            return-.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c;
        return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
    }, easeInBack: function(a, b, c, d, e, f) {
        if (f == undefined)
            f = 1.70158;
        return d * (b /= e) * b * ((f + 1) * b - f) + c
    }, easeOutBack: function(a, b, c, d, e, f) {
        if (f == undefined)
            f = 1.70158;
        return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    }, easeInOutBack: function(a, b, c, d, e, f) {
        if (f == undefined)
            f = 1.70158;
        if ((b /= e / 2) < 1)
            return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c;
        return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    }, easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    }, easeOutBounce: function(a, b, c, d, e) {
        if ((b /= e) < 1 / 2.75) {
            return d * 7.5625 * b * b + c
        } else if (b < 2 / 2.75) {
            return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c
        } else if (b < 2.5 / 2.75) {
            return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c
        } else {
            return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        }
    }, easeInOutBounce: function(a, b, c, d, e) {
        if (b < e / 2)
            return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c;
        return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c
    }})
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
// </editor-fold>//


$(window).load(function() {
// bubble isotope feature 2
    var $container = $('#containerBuuble');

    $container.isotope({
        // options
        itemSelector: '.bubbleF',
        layoutMode: 'fitRows',
        gutterWidth: 30
    });
    
    
//featured isotope
    var $container3 = jQuery('div#isofeatured'), $colnum, $colnum2;
    if ($container3.width() < 500) {
        $colnum = 2;
    } else {
        $colnum = 3;
    }
    $container3.isotope({masonry: {columnWidth: $container3.width() / $colnum}, itemSelector: '.isobrick', layoutMode: 'masonry'});
    jQuery(window).resize(function() {
        if ($container3.width() < 500) {
            $colnum = 2;
        } else {
            $colnum = 3;
        }

        $container3.isotope({masonry: {columnWidth: $container3.width() / $colnum}, itemSelector: '.isobrick', layoutMode: 'masonry'});
    });


    var controller = $.superscrollorama({
// triggerAtCenter: false//,
        playoutAnimations: false
    });
    $('#containerBuuble a').each(function() {

        controller.addTween($(this), TweenMax.from($(this), .5, {css: {opacity: 0}}), 0, -100, true);
    });
    $('#feature1 .fadein').each(function() {

        controller.addTween($(this), TweenMax.from($(this), .5, {css: {opacity: 0}}), 0, -150, true);
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
$(document).ready(function() {

    $("body").addClass("js");
    $("a.scrollto").click(function(e) {
        e.preventDefault();
        var t = $($(this).attr("href"));
        $("html, body").animate({scrollTop: t.offset().top - 53}, 1e3)
    });
    $("#select-options a").click(function(e) {
        $("#select-options li").removeClass("active");
        $(this).parent().addClass("active");
        $("body").attr("class", "");
        $("body").addClass("fus-" + $(this).attr("href").substring(1))
    });

});

///////////////////////////////
// Parallax
///////////////////////////////
$(window).scroll(function() {
    scrollBanner();

    headerPosition();
    //top scroll
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
    jQuery('html, body').animate({scrollTop: 0}, 500, 'easeOutCubic');//return false;
});
// Calcualte the home banner parallax scrolling
function scrollBanner() {
    //Get the scoll position of the page
    scrollPos = jQuery(this).scrollTop();
    //Scroll and fade out the banner text
    jQuery('#bannerText').css({'margin-top': -(scrollPos / 150) + "px", 'opacity': 1 - (scrollPos / window.outerHeight)
    });
    //Scroll the background of the banner
    jQuery('#homeBanner').css({
        'background-position': 'center ' + (-scrollPos / 5) + "px"
    });
}


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

METRO_AUTO_REINIT = true;

/* #Override aui
 ======================================================*/
$(function() {


});