function tkTemplate(t, e) {
    for (var n = $(t).html(), i = /<%([^%>]+)?%>/g, o = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, a = "var r = [];\n", r = 0, s = function (t, e) {
            return a += e ? t.match(o) ? t + "\n" : "r.push(" + t + ");\n" : "" != t ? 'r.push("' + t.replace(/"/g, '\\"') + '");\n' : "", s
        }; match = i.exec(n);) s(n.slice(r, match.index))(match[1], !0), r = match.index + match[0].length;
    return s(n.substr(r, n.length - r)), a += 'return r.join("");', new Function(a.replace(/[\r\t\n]/g, "")).apply(e)
}! function () {
    window.utils = {
        svgIcon: function (t, e) {
            var n = [];
            return n.push('<svg class="svg-icon ' + t + " "), e && n.push(e), n.push('"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'), n.push(t), n.push('"></use></svg>'), n.join("")
        }
    }
}(),
function () {
    var t = Object.keys,
        e = function (t, e, n) {
            if (void 0 === e) return t;
            switch (null == n ? 3 : n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function (n, i, o) {
                        return t.call(e, n, i, o)
                    };
                case 4:
                    return function (n, i, o, a) {
                        return t.call(e, n, i, o, a)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        n = function (t) {
            return new i(t)
        };
    n.isObject = function (t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, n.isFunction = function (t) {
        return "[object Function]" === Object.prototype.toString.call(t)
    }, n.extend = function (t) {
        if (!n.isObject(t)) return t;
        for (var e, i, o = 1, a = arguments.length; a > o; o++) {
            e = arguments[o];
            for (i in e) t[i] = e[i]
        }
        return t
    }, n.keys = function (e) {
        if (!n.isObject(e)) return [];
        if (t) return t(e);
        var i = [];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && i.push(o);
        return i
    }, n.each = n.forEach = function (t, i, o) {
        if (null == t) return t;
        i = e(i, o);
        var a, r = t.length;
        if (r === +r)
            for (a = 0; r > a; a++) i(t[a], a, t);
        else {
            var s = n.keys(t);
            for (a = 0, r = s.length; r > a; a++) i(t[s[a]], s[a], t)
        }
        return t
    };
    var i = function (t) {
        var e;
        e = "string" == typeof t ? document.querySelectorAll(t) : t.length ? t : [t], this.length = e.length;
        for (var n = 0; n < this.length; n++) this[n] = e[n];
        return this
    };
    i.prototype.find = function (t) {
        var e = this;
        return t ? 1 == this.length && (e = n(this[0].querySelectorAll(t))) : e = this, e
    }, i.prototype.children = function (t) {
        return this.find(t)
    }, i.prototype.indexOf = function (t) {
        var e = this.map(function (e, n) {
            return e === t ? n : void 0
        });
        return e.length > 0 ? e[0] : -1
    }, i.prototype.map = function (t) {
        for (var e = [], n = 0; n < this.length; n++) {
            var i = t.call(this, this[n], n);
            "undefined" != typeof i && e.push(i)
        }
        return e
    }, i.prototype.mapOne = function (t) {
        var e = this.map(t);
        return e.length > 1 ? e : e[0]
    }, i.prototype.each = function (t) {
        return this.map(t), this
    }, i.prototype.forEach = function (t) {
        return this.map(t), this
    }, i.prototype.text = function (t) {
        return "undefined" != typeof t ? this.forEach(function (e) {
            e.innerText = t
        }) : this.mapOne(function (t) {
            return t.innerText
        })
    }, i.prototype.html = function (t) {
        return "undefined" != typeof t ? this.forEach(function (e) {
            e.innerHTML = t
        }) : this.mapOne(function (t) {
            return t.innerHTML
        })
    }, i.prototype.addClass = function (t) {
        var e = [];
        return "string" != typeof t ? e.push(t) : t.split(/\s+/g).forEach(function (t) {
            this.hasClass(t) || e.push(t)
        }, this), e.length ? this.forEach(function (t) {
            t.className += " " + e.join(" ")
        }) : void 0
    }, i.prototype.removeClass = function (t) {
        return this.forEach(function (e) {
            for (var n, i = e.className.split(" ");
                (n = i.indexOf(t)) > -1;) i.splice(n, 1);
            e.className = i.join(" ")
        })
    }, i.prototype.hasClass = function (t) {
        var e = this[0].className.split(" ");
        return -1 !== e.indexOf(t)
    }, i.prototype.attr = function (t, e) {
        return "undefined" != typeof e ? this.forEach(function (n) {
            n.setAttribute(t, e)
        }) : this.mapOne(function (e) {
            return e.getAttribute(t)
        })
    }, i.prototype.css = function (t, e) {
        return this.forEach(function (n) {
            n.style[t] = e
        })
    }, i.prototype.getCss = function (t) {
        var e, n = this[0],
            i = (n.ownerDocument || document).defaultView;
        return i && i.getComputedStyle ? (t = t.replace(/([A-Z])/g, "-$1").toLowerCase(), i.getComputedStyle(n, null).getPropertyValue(t)) : n.currentStyle ? (t = t.replace(/\-(\w)/g, function (t, e) {
            return e.toUpperCase()
        }), e = n.currentStyle[t], /^\d+(em|pt|%|ex)?$/i.test(e) ? function (t) {
            var e = n.style.left,
                i = n.runtimeStyle.left;
            return n.runtimeStyle.left = n.currentStyle.left, n.style.left = t || 0, t = n.style.pixelLeft + "px", n.style.left = e, n.runtimeStyle.left = i, t
        }(e) : e) : void 0
    }, i.prototype.eq = function (t) {
        return n(this[t])
    }, i.prototype.append = function (t) {
        return this.forEach(function (e, n) {
            t.forEach(function (t) {
                n > 0 && (t = t.cloneNode(!0)), e.appendChild(t)
            })
        })
    }, i.prototype.offset = function () {
        return this.mapOne(function (t) {
            return {
                x: t.offsetLeft,
                y: t.offsetTop
            }
        })
    }, i.prototype.scrollTop = function (t) {
        return "undefined" != typeof t ? this.forEach(function (e) {
            e.scrollTop = t
        }) : this.mapOne(function (t) {
            return t.scrollTop
        })
    }, i.prototype.on = function () {
        return document.addEventListener ? function (t, e) {
            return this.forEach(function (n) {
                n.addEventListener(t, e, !1)
            })
        } : document.attachEvent ? function (t, e) {
            return this.forEach(function (n) {
                n.attachEvent("on" + t, e)
            })
        } : function (t, e) {
            return this.forEach(function (n) {
                n["on" + t] = e
            })
        }
    }(), i.prototype.off = function () {
        return document.addEventListener ? function (t, e) {
            return this.forEach(function (n) {
                n.removeEventListener(t, e, !1)
            })
        } : document.attachEvent ? function (t, e) {
            return this.forEach(function (n) {
                n.detachEvent("on" + t, e)
            })
        } : function (t, e) {
            return this.forEach(function (e) {
                e["on" + t] = null
            })
        }
    }(), "function" != typeof Array.prototype.indexOf && (Array.prototype.indexOf = function (t) {
        for (var e = 0; e < this.length; e++)
            if (this[e] === t) return e;
        return -1
    }), n.fn = i.prototype, window.T || (window.T = n), window.$ || (window.$ = n)
}(),
function () {
    "use strict";

    function t(e, i) {
        function o(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }
        var a;
        if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = e, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !t.notNeeded(e)) {
            for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, c = 0, l = r.length; l > c; c++) s[r[c]] = o(s[r[c]], s);
            n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, i) {
                var o = Node.prototype.removeEventListener;
                "click" === t ? o.call(e, t, n.hijacked || n, i) : o.call(e, t, n, i)
            }, e.addEventListener = function (t, n, i) {
                var o = Node.prototype.addEventListener;
                "click" === t ? o.call(e, t, n.hijacked || (n.hijacked = function (t) {
                    t.propagationStopped || n(t)
                }), i) : o.call(e, t, n, i)
            }), "function" == typeof e.onclick && (a = e.onclick, e.addEventListener("click", function (t) {
                a(t)
            }, !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !e,
        i = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
        o = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        a = i && /OS [6-7]_\d/.test(navigator.userAgent),
        r = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (i && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, t.prototype.needsFocus = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, t.prototype.sendClick = function (t, e) {
        var n, i;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
    }, t.prototype.determineEventType = function (t) {
        return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, t.prototype.focus = function (t) {
        var e;
        i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, t.prototype.updateScrollParent = function (t) {
        var e, n;
        if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
            n = t;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    e = n, t.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }, t.prototype.getTargetElementFromEventTarget = function (t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, t.prototype.onTouchStart = function (t) {
        var e, n, a;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], i) {
            if (a = window.getSelection(), a.rangeCount && !a.isCollapsed) return !0;
            if (!o) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, t.prototype.touchHasMoved = function (t) {
        var e = t.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1
    }, t.prototype.onTouchMove = function (t) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, t.prototype.findControl = function (t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, t.prototype.onTouchEnd = function (t) {
        var e, r, s, c, l, u = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, r = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (l = t.changedTouches[0], u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = u.tagName.toLowerCase(), "label" === s) {
            if (e = this.findControl(u)) {
                if (this.focus(u), n) return !1;
                u = e
            }
        } else if (this.needsFocus(u)) return t.timeStamp - r > 100 || i && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), i && "select" === s || (this.targetElement = null, t.preventDefault()), !1);
        return i && !o && (c = u.fastClickScrollParent, c && c.fastClickLastScrollTop !== c.scrollTop) ? !0 : (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
    }, t.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, t.prototype.onMouse = function (t) {
        return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
    }, t.prototype.onClick = function (t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
    }, t.prototype.destroy = function () {
        var t = this.layer;
        n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, t.notNeeded = function (t) {
        var e, i, o, a;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (r && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (a = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], a >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
    }, t.attach = function (e, n) {
        return new t(e, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}(),
function (t) {
    "use strict";
    t(T)
}(function (t) {
    "use strict";
    t.fn.scrollTo = function (e, n) {
        var i, o = this.scrollTop();
        if ("number" == typeof e) i = e;
        else if ("string" == typeof e) {
            var a = t(e);
            if (!a) return;
            i = t(e).offset().y
        }
        this.doScroll(o, i, n || 300)
    }, t.fn.doScroll = function (t, e, n) {
        if (!(0 > n)) {
            var i = 10,
                o = e - t,
                a = 0 == n ? o : o / n * i,
                r = this;
            setTimeout(function () {
                r.scrollTop(r.scrollTop() + a), r.scrollTop() != e && 0 !== r.scrollTop() && r.doScroll(r.scrollTop(), e, n - 10)
            }, i)
        }
    }
}),
function (t) {
    return t ? (t.Unslider = function (e, n) {
        var i = this;
        return i._ = "unslider", i.defaults = {
            autoplay: !0,
            delay: 5e3,
            nav: !0,
            animation: "horizontal",
            selectors: {
                container: "ul",
                slides: "li"
            },
            activeClass: i._ + "-active"
        }, i.$context = e, i.options = {}, i.$parent = null, i.$container = null, i.$slides = null, i.$nav = null, i.total = 0, i.current = 0, i.prefix = i._ + "-", i.eventSuffix = "." + i.prefix + ~~(2e3 * Math.random()), i.interval = null, i.init = function (e) {
            return i.options = t.extend({}, i.defaults, e), i.$container = i.$context.find(i.options.selectors.container).addClass(i.prefix + "wrap"), i.$slides = i.$container.children(i.options.selectors.slides), i.setup(), t.each(["nav"], function (e, n) {
                i.options[e] && i["init" + t._ucfirst(e)]()
            }), i.options.autoplay && i.start(), i.calculateSlides(), i.animate(i.options.index || i.current, "init")
        }, i.setup = function () {
            i.$parent = t(".unslider");
            var e = i.$context.css("position");
            "static" === e && i.$context.css("position", "relative")
        }, i.calculateSlides = function () {
            if (i.total = i.$slides.length, "fade" !== i.options.animation) {
                var t = "width";
                i.$container.css(t, 100 * i.total + "%").addClass(i.prefix + "carousel"), i.$slides.css(t, 100 / i.total + "%")
            }
        }, i.start = function () {
            return i.interval = setTimeout(function () {
                i.next()
            }, i.options.delay), i
        }, i.stop = function () {
            return clearTimeout(i.interval), i
        }, i.initNav = function () {
            i.$nav = t(".unslider-nav");
            i.$slides.each(function (t, e) {
                var n = t.getAttribute("data-nav") || e + 1;
                "function" == typeof i.options.nav && (n = i.options.nav.call(i.$slides.eq(e), e, n))
            }), i.$nav.find("li").on("click", function () {
                t(this)._active(i.$nav, i.options.activeClass), i.animate(t(this).attr("data-slide"))
            })
        }, i.setIndex = function (t) {
            return 0 > t && (t = i.total - 1), i.current = Math.min(Math.max(0, t), i.total - 1), i.options.nav && i.$nav.find('[data-slide="' + i.current + '"]')._active(i.$nav, i.options.activeClass), i.$slides.eq(i.current)._active(i.$slides, i.options.activeClass), i
        }, i.animate = function (e, n) {
            if ("first" === e && (e = 0), "last" === e && (e = i.total), isNaN(e)) return i;
            i.options.autoplay && i.stop().start(), i.setIndex(e);
            var o = "animate" + t._ucfirst(i.options.animation);
            return t.isFunction(i[o]) && i[o](i.current, n), i
        }, i.next = function () {
            var t = i.current + 1;
            return t >= i.total && (t = 0), i.animate(t, "next")
        }, i.prev = function () {
            return i.animate(i.current - 1, "prev")
        }, i.animateHorizontal = function (t) {
            var e = "left";
            return i.slide(e, t)
        }, i.slide = function (t, e) {
            return i._move(t, e)
        }, i._move = function (t, e) {
            i.options.movecb && i.options.movecb(e)
        }, i.init(n)
    }, t.fn._active = function (t, e) {
        return t.children("li").removeClass(e), this.addClass(e)
    }, t._ucfirst = function (t) {
        return (t + "").toLowerCase().replace(/^./, function (t) {
            return t.toUpperCase()
        })
    }, void(t.fn.unslider = function (e) {
        return this.each(function () {
            var n = t(this);
            return new t.Unslider(n, e)
        })
    })) : console.warn("Unslider needs $")
}(window.$),
function () {
    var t = {
        $el: $("#nav-menu"),
        listen: function () {
            var t = this;
            $("#toggle-menu").on("click", function (e) {
                var e = e || window.event;
                e.stopPropagation && e.stopPropagation(), t.$el.hasClass("open") ? t.$el.removeClass("open") : t.$el.addClass("open")
            }), $("body").on("click", function () {
                t.$el.removeClass("open")
            })
        }
    };
    t.listen()
}(),
function (t) {
    var e = navigator.userAgent.toLowerCase().match(/safari/) && null === navigator.userAgent.toLowerCase().match(/chrome/);
    e && $("body").addClass("safari")
}(),
function () {
    $('a[href="/signin"],a[href="/signup"]').each(function (t) {
        t.href += location.hash, t.href += location.search
    })
}(),
function (t) {
    function e(t, e, n) {
        var i = t.split("/"),
            o = e;
        if (l ? /com/.test(i[i.length - 2]) || (i[i.length - 2] = "feature") : r && (i[i.length - 2] = i[i.length - 2] + "@2", o = n), o) {
            var s = i.pop(),
                c = s.split(".");
            c.splice(c.length - 1, 0, o), s = c.join("."), i.push(s)
        }
        return t = i.join("/"), a(t)
    }

    function n(t, n) {
        var i = new Image,
            o = t.getAttribute("data-src");
        if ("true" === window.isProductMode || "true" === window.isPackageMode) {
            var a = t.getAttribute("data-md5"),
                s = t.getAttribute("data-md52");
            o = e(o, a, s)
        } else o = e(o);
        i.onload = function () {
            var e = i.width,
                a = 200;
            t.parent ? t.parent.replaceChild(i, t) : t.src = o, !l && r && (t.width = e / 2), l && (a = 1), setTimeout(function () {
                u(t)
            }, a), n ? n() : null
        }, i.src = o
    }

    function i(t) {
        var e = t.getBoundingClientRect();
        return e.top >= -100 && e.top - 100 <= (window.innerHeight || document.documentElement.clientHeight)
    }
    for (var o = {
            dev: "/static/sites/homepage/dist/dev/img",
            build: "/static/build/homepage/img"
        }, a = function (t) {
            return "true" === window.isProductMode || "true" === window.isPackageMode ? "//" + window.SiteStatus.cdn + o.build + t : o.dev + t
        }, r = window.devicePixelRatio > 1, s = !!navigator.userAgent.match(/iPhone|iPad|iPod/), c = !!navigator.userAgent.match(/Android/i), l = (s || c) && window.matchMedia("(max-width: 480px)").matches, u = function (e) {
            for (var n = ["bounce", "bounceIn", "rotate", "fadeIn", "slideInDown"], i = t(e), o = 0; o < n.length; o++)
                if (i.hasClass(n[o])) {
                    i.addClass("do-" + n[o]);
                    break
                }
        }, d = new Array, p = t("img.lazy"), h = 0, f = function () {
            for (var t = 0; t < d.length; t++) i(d[t].el) && !d[t].loading && (d[t].loading = !0, n(d[t].el, function () {
                h++, d.splice(t, 1), h >= d.length && window.removeEventListener("scroll", f)
            }))
        }, m = 0; m < p.length; m++) d.push({
        loading: !1,
        el: p[m]
    });
    for (var g = t("img.retina"), m = 0; m < g.length; m++) n(g[m]);
    f(), window.addEventListener("scroll", f)
}(window.$),
function () {
    var t = function (t) {
            for (var e = [], n = 0; n < t.length; n++) t[n].key && e.push(t[n].key);
            return e
        },
        e = [{
            key: "en_US",
            value: "English"
        }, {
            key: "zh_CN",
            value: "中文"
        }],
        n = SiteStatus.language,
        i = -1 !== t(e).indexOf(n) ? n : "en_US",
        o = {
            $pick: $(".language-picker"),
            el: '<ul class="lang-menu">',
            init: function () {
                this.create(), this.listen()
            },
            create: function () {
                for (var t = '<a class="cur-lang">' + e[0].value + "</a>", n = 0; n < e.length; n++) {
                    var o = "";
                    i === e[n].key ? (o = '<li data-lang="' + e[n].key + '"class="option selected">' + e[n].value + "</li>", t = '<a class="cur-lang">' + e[n].value + "</a>") : o = '<li data-lang="' + e[n].key + '"class="option">' + e[n].value + "</li>", this.el += o
                }
                this.el += "</ul>", this.el += t, this.$pick.html(this.el)
            },
            listen: function () {
                var t = this;
                $(".language-picker .option").on("click", function (e) {
                    t["switch"]($(this).attr("data-lang"))
                }), $(".language-picker").on("click", function (e) {
                    var e = e || window.event;
                    e.stopPropagation && e.stopPropagation(), t.$pick.addClass("open")
                }), $("body").on("click", function () {
                    t.$pick.removeClass("open")
                })
            },
            "switch": function (t) {
                var e = "?language=" + t;
                window.location.href = window.location.origin + window.location.pathname + e
            }
        };
    o.init()
}(),
function () {
    var t = this,
        e = function () {
            medias.on("mouseover", function (t) {
                n(this), i(medias.indexOf(this))
            }), medias.on("click", function (t) {
                n(this), i(medias.indexOf(this))
            })
        },
        n = function (e) {
            var n = e.offsetLeft + (e.offsetWidth / 2 - 14);
            point.css("left", n + "px"), t.medias.removeClass("active"), $(e).addClass("active")
        },
        i = function (t) {
            var e = "active";
            comments.removeClass(e), comments.eq(t).addClass(e)
        },
        o = function () {
            m(), a(), e(), n(medias[0]), i(0)
        },
        a = function () {
            t.medias = $(".slides>.s-controls li"), t.comments = $(".slides>.s-items li"), t.point = $(".line>.handle")
        },
        r = ["wandoujia", "csdn", "xiaozhong", "shaoshupai", "zuimei", "yiciyuan"],
        s = ["lifehack", "theapptimes", "gtdlog", "softpedia", "shaoshupai_tick"],
        c = {
            wandoujia: "wandoujia",
            csdn: "csdn",
            xiaozhong: "xiaozhong",
            shaoshupai: "shaoshupai",
            zuimei: "zuimei",
            yiciyuan: "yiciyuan",
            lifehack: "lifehack",
            theapptimes: "theapptimes",
            gtdlog: "gtdlog",
            softpedia: "softpedia",
            shaoshupai_tick: "shaoshupai"
        },
        l = {
            wandoujia: "http://www.wandoujia.com/award/blog/cn.ticktick.task",
            csdn: "http://www.csdn.net/article/2015-04-28/2824575-interview-dida-ceo-yuanjun",
            xiaozhong: "http://www.appinn.com/dida365-version-2/",
            shaoshupai: "http://sspai.com/29277#html-top",
            zuimei: "http://zuimeia.com/app/3625/?&platform=1",
            yiciyuan: "http://www.iplaysoft.com/ticktick.html",
            theapptimes: "http://theapptimes.com/ticktick-todo-task-list-android-review/",
            lifehack: "http://lifehacker.com/ticktick-is-a-syncing-to-do-app-with-flexible-schedulin-724481016",
            gtdlog: "http://nmain.tistory.com/104",
            softpedia: "http://mobile.softpedia.com/android/TickTick-Android-Review-3584.html",
            shaoshupai_tick: "http://sspai.com/27496"
        },
        u = function (t) {
            return {
                icon: h(t),
                content: p(t),
                url: d(t),
                key: t
            }
        },
        d = function (t) {
            return l[t]
        },
        p = function (t) {
            return language["m_" + t + "_comment"]
        },
        h = function (t) {
            return utils.svgIcon("icon-" + c[t], "c-3")
        },
        f = function () {
            var t = s,
                e = "",
                n = "";
            SiteStatus.isCnSites && (t = r);
            for (var i = 0; i < t.length; i++) e += tkTemplate("#medias-item", u(t[i])), n += tkTemplate("#comment-item", u(t[i]));
            return {
                medias: e,
                comments: n
            }
        },
        m = function () {
            var t = f();
            $(".slides>.s-controls").html(t.medias), $(".slides>.s-items").html(t.comments)
        };
    o()
}(),
function () {
    var t = ["android", "android_tablets", "iphone", "ipad", "web", "mac", "windows", "chrome", "firefox", "apple_watch"],
        e = ["android", "android_tablets", "iphone", "ipad", "web", "mac", "windows", "chrome", "firefox", "android_wear", "apple_watch"],
        n = {
            android: "Android",
            android_tablets: "Android\nTablet",
            android_wear: "Android\nWear",
            iphone: "iPhone",
            ipad: "iPad",
            apple_watch: "Apple\nWatch",
            mac: "Mac",
            windows: "Windows\n<span>" + language.windows_trial_homepage + "</span>",
            web: "Web",
            chrome: "Chrome",
            firefox: "Firefox",
            safari: "Safari",
            more: language.h_intro_download_more
        },
        i = {
            windows: "Windows"
        },
        o = {
            android: "/static/getApp/download?type=apk",
            android_tablets: "/static/getApp/download?type=apk",
            iphone: "https://itunes.apple.com/cn/app/di-da-qing-dan-dai-ban-shi/id626144601?mt=8",
            ipad: "https://itunes.apple.com/cn/app/di-da-qing-dan-dai-ban-shi/id626144601?mt=8",
            apple_watch: "https://itunes.apple.com/cn/app/di-da-qing-dan-dai-ban-shi/id626144601?mt=8",
            windows: "/about/windows"
        },
        a = {
            android: "https://play.google.com/store/apps/details?id=com.ticktick.task",
            android_tablets: "https://play.google.com/store/apps/details?id=com.ticktick.task",
            iphone: "https://itunes.apple.com/app/tick-tick/id626144601",
            ipad: "https://itunes.apple.com/app/tick-tick/id626144601",
            apple_watch: "https://itunes.apple.com/cn/app/ticktick-remember-to-do-lists/id626144601",
            android_wear: "https://play.google.com/store/apps/details?id=com.ticktick.task.microapp",
            windows: "/about/windows"
        },
        r = {
            mac: "/about/mac",
            web: "/signin",
            firefox: "https://addons.mozilla.org/firefox/addon/ticktick-todo/",
            safari: "https://safari-extensions.apple.com/details/?id=com.ticktick.task.extension.safari-75TY9UT8AY",
            chrome: "https://chrome.google.com/webstore/detail/ticktick-todo-task-list/diankknpkndanachmlckaikddgcehkod"
        },
        s = {
            android: "android",
            android_tablets: "android-tablet",
            android_wear: "android-wear",
            iphone: "iphone",
            ipad: "ipad",
            apple_watch: "watch",
            mac: "imac",
            windows: "windows",
            web: "web",
            chrome: "chrome",
            safari: "safari",
            firefox: "firefox"
        },
        c = {
            windows: SiteStatus.isCnSites ? language.platform_desc_windows_dida : language.platform_desc_windows_tick
        },
        l = ["android", "iphone", "windows", "mac", "more"],
        u = {
            android: "download-android",
            iphone: "download-iphone",
            windows: "windows",
            mac: "imac",
            more: "download-more"
        },
        d = {
            android: "msg-android",
            iphone: "msg-ios",
            windows: "msg-windows",
            more: "msg-more scroll-to"
        },
        p = {
            more: "#download-link"
        },
        h = function (t, e) {
            return utils.svgIcon("icon-" + t, e)
        },
        f = function (t) {
            $(".p-slide-wrapper>ul").html(t)
        },
        m = function (t) {
            $(".msg-pop").html(t)
        },
        g = function () {
            for (var n = "", i = SiteStatus.isCnSites ? e : t, o = 0; o < i.length; o++) n += tkTemplate("#platform-item", C(i[o]));
            return n
        },
        v = function () {
            for (var t = "", e = l, n = 0; n < e.length; n++) t += tkTemplate("#msg-item", _(e[n]));
            return t
        },
        w = function (t) {
            var e;
            return e = SiteStatus.isCnSites ? o[t] : a[t], e = e ? e : r[t], e ? e : "javascript:void(0)"
        },
        k = function (t) {
            return n[t]
        },
        y = function (t) {
            return i[t] || n[t]
        },
        b = function (t) {
            return c[t]
        },
        C = function (t) {
            return {
                key: t,
                url: w(t),
                name: k(t),
                icon: h(s[t], "s-s-tny c-2"),
                desc: b(t)
            }
        },
        _ = function (t) {
            return {
                key: t,
                url: w(t),
                name: y(t),
                icon: h(u[t], "s-msg c-4"),
                className: d[t],
                scrollTo: p[t] ? p[t] : ""
            }
        },
        S = function () {
            f(g()), m(v())
        };
    S()
}(),
function () {
    var t = $(".pop-download"),
        e = $(".pop-cover"),
        n = $(".pop-btn"),
        i = $(".msg-close"),
        o = $(window),
        a = $("body"),
        r = function () {
            t.removeClass("hidden"), e.removeClass("hidden"), a.removeClass("download-show"), setTimeout(function () {
                a.removeClass("download-hide"), a.addClass("download-show")
            }, 100), o.on("scroll", s)
        },
        s = function () {
            a.addClass("download-hide"), setTimeout(function () {
                t.addClass("hidden"), e.addClass("hidden"), a.removeClass("download-show"), a.removeClass("download-hide")
            }, 600), o.off("scroll", s)
        },
        c = function () {
            n.on("click", r), i.on("click", s), e.on("click", s)
        };
    c()
}(),
function () {
    var t = window.$,
        e = t(".scroll-to"),
        n = t("body"),
        i = t("html"),
        o = t(".intro"),
        a = t(".header"),
        r = function () {
            e.on("click", function (t) {
                c(s(this))
            }), t(".arrow-down").on("click", function () {
                c(s(t(".nav-link a")[0]))
            })
        },
        s = function (e) {
            var n = t(e).attr("scroll-to");
            if (n) {
                if (t("#header").addClass("stuck s-click"), n.match("download")) {
                    var i = t(n).offset().y,
                        r = t(n)[0].offsetHeight;
                    return i + r
                }
                return o[0].offsetHeight + t(n).offset().y - a[0].offsetHeight
            }
        },
        c = function (e) {
            setTimeout(function () {
                var t = e / 5;
                t = t > 150 ? 10 : t, n.scrollTo(e, t), i.scrollTo(e, t)
            }, 90), setTimeout(function () {
                t("#header").removeClass("s-click")
            }, 200)
        };
    r()
}(),
function (t) {
    var e = document.getElementById("header"),
        n = t(".intro-text"),
        i = (t(window), e.offsetHeight),
        o = n.offset().y,
        a = function () {
            window.addEventListener("scroll", function () {
                r()
            }), /iPhone|iPad|iPod/i.test(navigator.userAgent) && window.addEventListener("touchmove", function () {
                r()
            })
        },
        r = function () {
            var n = document.body.scrollTop || document.documentElement.scrollTop;
            n + 150 > o - i ? t(e).addClass("stuck") : t(e).removeClass("stuck")
        };
    r(), a(
}(window.$),
function () {
    var t = ["wechat", "folder", "nlp", "voice_input", "subtask", "more_reminders", "priority", "tag", "data_backup", "lunar", "print", "search", "csl", "subscribe_calendar", "duration", "siri"],
        e = ["data_backup", "folder", "nlp", "voice_input", "subtask", "more_reminders", "priority", "location_reminder", "tag", "sync", "create_by_email", "repeat", "csl", "subscribe_calendar", "duration", "siri"],
        n = ["wechat", "folder", "more_reminders", "voice_input", "priority", "data_backup"],
        i = ["folder", "more_reminders", "voice_input", "priority", "tag", "data_backup"],
        o = {
            folder: "folder",
            more_reminders: "reminders",
            voice_input: "voice",
            priority: "priority",
            tag: "tag",
            data_backup: "backup",
            subscribe_calendar: "subscribe",
            location_reminder: "location",
            siri: "siri",
            create_by_email: "email",
            search: "search",
            print: "print",
            lunar: "lunar",
            wechat: "wechat-create",
            nlp: "smart-parse",
            csl: "custom-smart-project",
            subtask: "subtask",
            duration: "duration",
            sync: "data-synchronization",
            repeat: "repeat"
        },
        a = ["csl", "subscribe_calendar", "duration", "siri"],
        r = function (t) {
            return {
                title: language["f_feature_" + t + "_title"],
                content: language["f_feature_" + t + "_content"]
            }
        },
        s = function (t) {
            return "icon-" + o[t]
        },
        c = function (t) {
            return !!~a.indexOf(t)
        },
        l = function (t, e) {
            var n = r(t);
            return {
                title: n.title,
                content: n.content,
                icon: utils.svgIcon(s(t), "c-1"),
                proIcon: utils.svgIcon("icon-pro", "c-5"),
                isPro: c(t)
            }
        },
        u = function () {
            var o = [],
                a = document.body.clientWidth < 640;
            return o = SiteStatus.isCnSites ? a ? n : t : a ? i : e
        },
        d = function () {
            for (var t = "", e = u(), n = 0; n < e.length; n++) t += tkTemplate("#feature-item", l(e[n]));
            return t
        },
        p = function (t) {
            $(".feature-grid").html(t)
        },
        h = function () {
            p(d())
        };
    h()
}(),
function () {
    var t = $(".themes");
    $(".slider").unslider({
        movecb: function (e) {
            t.attr("data-theme", e + 1)
        }
    })
}(),
function () {
    var t = {
            isAndroid: /Android/i.test(navigator.userAgent),
            isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent),
            isWechat: /MicroMessenger/i.test(navigator.userAgent),
            isSmall: function () {
                return document.body.clientWidth < 640
            }
        },
        e = {
            $el: $(".mb-btn"),
            iosLink_dd: "https://itunes.apple.com/cn/app/di-da-qing-dan-dai-ban-shi/id626144601?mt=8",
            iosLink_tt: "https://itunes.apple.com/app/tick-tick/id626144601",
            playLink: "https://play.google.com/store/apps/details?id=com.ticktick.task",
            apkLink: "/static/getApp/download?type=apk",
            setHref: function () {
                if (SiteStatus.isCnSites && !t.isWechat) var e = this.apkLink;
                else var e = this.playLink;
                t.isIOS ? e = SiteStatus.isCnSites ? this.iosLink_dd : this.iosLink_tt : t.isAndroid && (e = SiteStatus.isCnSites && !t.isWechat ? this.apkLink : this.playLink), this.$el.attr("href", e)
            }
        };
    e.setHref();
    var n = {
        wrap: $(".intro-container"),
        height: window.innerHeight > 0 ? window.innerHeight : screen.height,
        setHeight: function () {
            document.body.clientWidth < 640 && this.wrap.css("height", this.height + "px")
        }
    };
    n.setHeight(), t.isIOS && FastClick && FastClick.attach && FastClick.attach(document.body)
}(),
function () {
    var t = function (t) {
            SiteStatus.isCnSites ? (t.unshift("_trackEvent"), _czc.push(t)) : (t.unshift("send", "event"), window.gaProxy(t))
        },
        e = {
            web: "web_sign_in",
            chrome: "chrome_addon",
            chromebook: "chrome_app",
            firefox: "firefox_addon",
            android: "android",
            android_tablets: "android_tablets",
            iphone: "iphone",
            android_wear: "android_wear",
            mac: "mac",
            apple_watch: "apple_watch",
            ipad: "ipad",
            weibo: "weibo",
            douban: "douban"
        },
        n = {
            wandoujia: "wandoujia",
            csdn: "csdn",
            xiaozhong: "xiaozhong",
            shaoshupai: "shaoshupai",
            zuimei: "zuimei",
            lifehack: "lifehack",
            theapptimes: "theapptimes",
            gtdlog: "gtdlog",
            softpedia: "softpedia",
            shaoshupai_tick: "shaoshupai_tick"
        },
        i = {
            intro_signup: "intro_signup",
            intro_download: "intro_download"
        };
    $(".analy").on("click", function () {
        var o = ["homepage"],
            a = $(this).attr("data-analy"),
            r = a;
        e[a] ? (o.push("download"), r = e[a]) : n[a] ? (o.push("media"), r = n[a]) : i[a] && (o.push("intro"), r = i[a]), o.push(r), t(o)
    })
}(), window.isCnSites = (window.Appest || window.SiteStatus).isCnSites,
    function () {
        "use strict";
        var t = function () {
                var t = Array.prototype.slice.call(arguments);
                window.isCnSites ? (t.unshift("_trackEvent"), _czc.push(t)) : (t.unshift("send", "event"), window.gaProxy(t))
            },
            e = function () {
                t("phone_home_bar", arguments[0])
            },
            n = function () {
                var e, n = /(chrome|safari|firefox|msie|oupeng|opera|baidubrowser|LieBaoFast|mqqbrowser|ucbrowser|SogouMobileBrowser)\/?\s*(\.?\d+(\.\d+)*)/i,
                    i = navigator.appName,
                    o = navigator.userAgent,
                    a = o.match(n);
                a && null != (e = o.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"];
                var r = a.join(": ");
                t("phone_home_bar", "open_browser", r)
            },
            i = {
                isAndroid: /Android/i.test(navigator.userAgent),
                isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
            },
            o = {
                isSafari: /iPhone|iPad|iPod/i.test(navigator.userAgent) && /Safari/.test(navigator.userAgent) && /CriOS/.test(navigator.userAgent) === !1,
                isChrome: /Chrome/.test(navigator.userAgent),
                isOpera: /Opera/.test(navigator.userAgent),
                isWechat: /MicroMessenger/i.test(navigator.userAgent)
            },
            a = {
                browser: o,
                platform: i,
                query: function (t, e) {
                    var n = new RegExp("(^|\\?|&)" + t + "=([^&^#]*)(\\s|&|#|$)", "i");
                    return e = e || location.href, n.test(e) ? unescape(RegExp.$2.replace(/\+/g, " ")) : ""
                },
                banner: {
                    icon: null,
                    title: null,
                    author: null,
                    appStore: null,
                    marketUrl: null,
                    schemeIOS: null,
                    schemeAndroid: null,
                    intentUrl: null,
                    button: "OPEN"
                },
                init: function (t) {
                    window.localStorage && "true" === window.localStorage.getItem("closedsb") || this.browser.isSafari || (this.platform.isAndroid || this.platform.isIOS) && (this.banner = t, this._create(), this._show(), this._listen())
                },
                _create: function () {
                    var t = this.sb = document.createElement("div");
                    t.setAttribute("id", "js-smartbanner"), t.setAttribute("class", "smartbanner hide"), t.innerHTML = "<div class=sb-container><span id=js-close class=sb-close>×</span><img src=" + this.banner.icon + " class=sb-icon /><div class=sb-info><p>" + this.banner.title + "</p><p>" + this.banner.author + '</p><p class="rating">★★★★★</p></div><span id=js-open class=sb-button><span>' + this.banner.button + "</span></span></div>",
                        document.body.appendChild(t)
                },
                _show: function () {
                    var t = this.sb.className.replace("hide", "show");
                    this.sb.className = t
                },
                _hide: function () {
                    var t = this.sb.className.replace("show", "hide");
                    this.sb.className = t
                },
                _close: function () {
                    this._hide(), window.localStorage && window.localStorage.setItem("closedsb", "true")
                },
                _open: function () {
                    this._try()
                },
                _listen: function () {
                    var t = this.btnClose = document.getElementById("js-close"),
                        n = this.btnOpen = document.getElementById("js-open"),
                        i = this;
                    t.onclick = function () {
                        e("close"), i._close()
                    }, n.onclick = function () {
                        i._open()
                    }
                },
                _try: function () {
                    var t = this;
                    if (this.platform.isAndroid) {
                        var e = navigator.userAgent.match(/Chrome\/(\d+)/);
                        if (25 <= (e && e[1])) window.location = this.banner.intentUrl;
                        else {
                            var i = document.createElement("iframe");
                            i.style.display = "none", i.src = this.banner.schemeAndroid, document.body.appendChild(i);
                            var o = new Date;
                            window.setTimeout(function () {
                                600 > new Date - o && (window.location = t.banner.marketUrl)
                            }, 400)
                        }
                    } else this.platform.isIOS && (window.location = this.banner.schemeIOS, window.setTimeout(function () {
                        window.location = t.banner.appStore
                    }, 250));
                    n()
                }
            };
        window.smartbanner = a
    }(),
    function () {
        var t = "//" + window.SiteStatus.cdn + "/static/img/icon_128.png",
            e = "https://itunes.apple.com/app/tick-tick/id626144601",
            n = "https://play.google.com/store/apps/details?id=com.ticktick.task",
            i = "/static/getApp/download?type=apk",
            o = "ticktick://all.show.all",
            a = "ticktick://view/task/",
            r = "intent://scan/#Intent;scheme=ticktick;package=com.ticktick.task;end",
            s = "intent://scan/#Intent;scheme=ticktick;package=cn.ticktick.task;end",
            c = "http://a.app.qq.com/o/simple.jsp?pkgname=cn.ticktick.task&g_f=991653",
            l = smartbanner.browser.isWechat;
        if (window.isCnSites) {
            l && (e = c, i = c);
            var u = {
                icon: t,
                title: "滴答清单 - Todo & 任务提醒",
                author: "Appest Limited",
                appStore: e,
                marketUrl: i,
                schemeIOS: o,
                schemeAndroid: a,
                intentUrl: s,
                button: "打开"
            }
        } else var u = {
            icon: t,
            title: "TickTick - Todo & Task List",
            author: "Appest Limited",
            appStore: e,
            marketUrl: n,
            schemeIOS: o,
            schemeAndroid: a,
            intentUrl: r,
            button: "OPEN"
        };
        if (smartbanner.init(u), l && window.isCnSites)
            for (var d = function () {
                    if ("1" != smartbanner.query("isappinstalled").toString()) return void(location.href = smartbanner.platform.isIOS ? c : c);
                    try {
                        smartbanner._try()
                    } catch (t) {
                        location.href = c
                    }
                }, p = document.getElementsByClassName("wechat-download"), h = 0; h < p.length; h++) p[h].onclick = function (t) {
                t = t || window.event, t.preventDefault(), d()
            }
    }();