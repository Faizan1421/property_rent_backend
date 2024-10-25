var d1 = Object.defineProperty;
var Hh = (e) => {
  throw TypeError(e);
};
var f1 = (e, t, n) =>
  t in e
    ? d1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var h1 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Cu = (e, t, n) => f1(e, typeof t != "symbol" ? t + "" : t, n),
  Pu = (e, t, n) => t.has(e) || Hh("Cannot " + n);
var _ = (e, t, n) => (
    Pu(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Y = (e, t, n) =>
    t.has(e)
      ? Hh("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  F = (e, t, n, r) => (
    Pu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  K = (e, t, n) => (Pu(e, t, "access private method"), n);
var Za = (e, t, n, r) => ({
  set _(s) {
    F(e, t, s, n);
  },
  get _() {
    return _(e, t, r);
  },
});
var eR = h1((rR, Jo) => {
  function p1(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const s in r)
          if (s !== "default" && !(s in e)) {
            const i = Object.getOwnPropertyDescriptor(r, s);
            i &&
              Object.defineProperty(
                e,
                s,
                i.get ? i : { enumerable: !0, get: () => r[s] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      r(s);
    new MutationObserver((s) => {
      for (const i of s)
        if (i.type === "childList")
          for (const a of i.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
      const i = {};
      return (
        s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials"
          ? (i.credentials = "include")
          : s.crossOrigin === "anonymous"
            ? (i.credentials = "omit")
            : (i.credentials = "same-origin"),
        i
      );
    }
    function r(s) {
      if (s.ep) return;
      s.ep = !0;
      const i = n(s);
      fetch(s.href, i);
    }
  })();
  var eo =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
  function wg(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Sg = { exports: {} },
    Ul = {},
    xg = { exports: {} },
    X = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var La = Symbol.for("react.element"),
    m1 = Symbol.for("react.portal"),
    g1 = Symbol.for("react.fragment"),
    v1 = Symbol.for("react.strict_mode"),
    y1 = Symbol.for("react.profiler"),
    w1 = Symbol.for("react.provider"),
    S1 = Symbol.for("react.context"),
    x1 = Symbol.for("react.forward_ref"),
    E1 = Symbol.for("react.suspense"),
    _1 = Symbol.for("react.memo"),
    b1 = Symbol.for("react.lazy"),
    Bh = Symbol.iterator;
  function T1(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Bh && e[Bh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Eg = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _g = Object.assign,
    bg = {};
  function mi(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = bg),
      (this.updater = n || Eg);
  }
  mi.prototype.isReactComponent = {};
  mi.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  mi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Tg() {}
  Tg.prototype = mi.prototype;
  function rf(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = bg),
      (this.updater = n || Eg);
  }
  var sf = (rf.prototype = new Tg());
  sf.constructor = rf;
  _g(sf, mi.prototype);
  sf.isPureReactComponent = !0;
  var Wh = Array.isArray,
    kg = Object.prototype.hasOwnProperty,
    af = { current: null },
    Cg = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pg(e, t, n) {
    var r,
      s = {},
      i = null,
      a = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        kg.call(t, r) && !Cg.hasOwnProperty(r) && (s[r] = t[r]);
    var o = arguments.length - 2;
    if (o === 1) s.children = n;
    else if (1 < o) {
      for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
      s.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((o = e.defaultProps), o)) s[r] === void 0 && (s[r] = o[r]);
    return {
      $$typeof: La,
      type: e,
      key: i,
      ref: a,
      props: s,
      _owner: af.current,
    };
  }
  function k1(e, t) {
    return {
      $$typeof: La,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function of(e) {
    return typeof e == "object" && e !== null && e.$$typeof === La;
  }
  function C1(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Yh = /\/+/g;
  function Ou(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? C1("" + e.key)
      : t.toString(36);
  }
  function Oo(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
      switch (i) {
        case "string":
        case "number":
          a = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case La:
            case m1:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (s = s(a)),
        (e = r === "" ? "." + Ou(a, 0) : r),
        Wh(s)
          ? ((n = ""),
            e != null && (n = e.replace(Yh, "$&/") + "/"),
            Oo(s, t, n, "", function (u) {
              return u;
            }))
          : s != null &&
            (of(s) &&
              (s = k1(
                s,
                n +
                  (!s.key || (a && a.key === s.key)
                    ? ""
                    : ("" + s.key).replace(Yh, "$&/") + "/") +
                  e
              )),
            t.push(s)),
        1
      );
    if (((a = 0), (r = r === "" ? "." : r + ":"), Wh(e)))
      for (var o = 0; o < e.length; o++) {
        i = e[o];
        var l = r + Ou(i, o);
        a += Oo(i, t, n, l, s);
      }
    else if (((l = T1(e)), typeof l == "function"))
      for (e = l.call(e), o = 0; !(i = e.next()).done; )
        (i = i.value), (l = r + Ou(i, o++)), (a += Oo(i, t, n, l, s));
    else if (i === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return a;
  }
  function to(e, t, n) {
    if (e == null) return e;
    var r = [],
      s = 0;
    return (
      Oo(e, r, "", "", function (i) {
        return t.call(n, i, s++);
      }),
      r
    );
  }
  function P1(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var st = { current: null },
    Mo = { transition: null },
    O1 = {
      ReactCurrentDispatcher: st,
      ReactCurrentBatchConfig: Mo,
      ReactCurrentOwner: af,
    };
  function Og() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  X.Children = {
    map: to,
    forEach: function (e, t, n) {
      to(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        to(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        to(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!of(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  X.Component = mi;
  X.Fragment = g1;
  X.Profiler = y1;
  X.PureComponent = rf;
  X.StrictMode = v1;
  X.Suspense = E1;
  X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O1;
  X.act = Og;
  X.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = _g({}, e.props),
      s = e.key,
      i = e.ref,
      a = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((i = t.ref), (a = af.current)),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var o = e.type.defaultProps;
      for (l in t)
        kg.call(t, l) &&
          !Cg.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      o = Array(l);
      for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
      r.children = o;
    }
    return { $$typeof: La, type: e.type, key: s, ref: i, props: r, _owner: a };
  };
  X.createContext = function (e) {
    return (
      (e = {
        $$typeof: S1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: w1, _context: e }),
      (e.Consumer = e)
    );
  };
  X.createElement = Pg;
  X.createFactory = function (e) {
    var t = Pg.bind(null, e);
    return (t.type = e), t;
  };
  X.createRef = function () {
    return { current: null };
  };
  X.forwardRef = function (e) {
    return { $$typeof: x1, render: e };
  };
  X.isValidElement = of;
  X.lazy = function (e) {
    return { $$typeof: b1, _payload: { _status: -1, _result: e }, _init: P1 };
  };
  X.memo = function (e, t) {
    return { $$typeof: _1, type: e, compare: t === void 0 ? null : t };
  };
  X.startTransition = function (e) {
    var t = Mo.transition;
    Mo.transition = {};
    try {
      e();
    } finally {
      Mo.transition = t;
    }
  };
  X.unstable_act = Og;
  X.useCallback = function (e, t) {
    return st.current.useCallback(e, t);
  };
  X.useContext = function (e) {
    return st.current.useContext(e);
  };
  X.useDebugValue = function () {};
  X.useDeferredValue = function (e) {
    return st.current.useDeferredValue(e);
  };
  X.useEffect = function (e, t) {
    return st.current.useEffect(e, t);
  };
  X.useId = function () {
    return st.current.useId();
  };
  X.useImperativeHandle = function (e, t, n) {
    return st.current.useImperativeHandle(e, t, n);
  };
  X.useInsertionEffect = function (e, t) {
    return st.current.useInsertionEffect(e, t);
  };
  X.useLayoutEffect = function (e, t) {
    return st.current.useLayoutEffect(e, t);
  };
  X.useMemo = function (e, t) {
    return st.current.useMemo(e, t);
  };
  X.useReducer = function (e, t, n) {
    return st.current.useReducer(e, t, n);
  };
  X.useRef = function (e) {
    return st.current.useRef(e);
  };
  X.useState = function (e) {
    return st.current.useState(e);
  };
  X.useSyncExternalStore = function (e, t, n) {
    return st.current.useSyncExternalStore(e, t, n);
  };
  X.useTransition = function () {
    return st.current.useTransition();
  };
  X.version = "18.3.1";
  xg.exports = X;
  var T = xg.exports;
  const Me = wg(T),
    M1 = p1({ __proto__: null, default: Me }, [T]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var N1 = T,
    L1 = Symbol.for("react.element"),
    R1 = Symbol.for("react.fragment"),
    j1 = Object.prototype.hasOwnProperty,
    D1 =
      N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    I1 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Mg(e, t, n) {
    var r,
      s = {},
      i = null,
      a = null;
    n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (r in t) j1.call(t, r) && !I1.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
    return {
      $$typeof: L1,
      type: e,
      key: i,
      ref: a,
      props: s,
      _owner: D1.current,
    };
  }
  Ul.Fragment = R1;
  Ul.jsx = Mg;
  Ul.jsxs = Mg;
  Sg.exports = Ul;
  var y = Sg.exports,
    Ng = { exports: {} },
    bt = {},
    Lg = { exports: {} },
    Rg = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(I, U) {
      var H = I.length;
      I.push(U);
      e: for (; 0 < H; ) {
        var ue = (H - 1) >>> 1,
          we = I[ue];
        if (0 < s(we, U)) (I[ue] = U), (I[H] = we), (H = ue);
        else break e;
      }
    }
    function n(I) {
      return I.length === 0 ? null : I[0];
    }
    function r(I) {
      if (I.length === 0) return null;
      var U = I[0],
        H = I.pop();
      if (H !== U) {
        I[0] = H;
        e: for (var ue = 0, we = I.length, Ss = we >>> 1; ue < Ss; ) {
          var Sn = 2 * (ue + 1) - 1,
            G = I[Sn],
            oe = Sn + 1,
            Pt = I[oe];
          if (0 > s(G, H))
            oe < we && 0 > s(Pt, G)
              ? ((I[ue] = Pt), (I[oe] = H), (ue = oe))
              : ((I[ue] = G), (I[Sn] = H), (ue = Sn));
          else if (oe < we && 0 > s(Pt, H))
            (I[ue] = Pt), (I[oe] = H), (ue = oe);
          else break e;
        }
      }
      return U;
    }
    function s(I, U) {
      var H = I.sortIndex - U.sortIndex;
      return H !== 0 ? H : I.id - U.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var i = performance;
      e.unstable_now = function () {
        return i.now();
      };
    } else {
      var a = Date,
        o = a.now();
      e.unstable_now = function () {
        return a.now() - o;
      };
    }
    var l = [],
      u = [],
      c = 1,
      d = null,
      p = 3,
      S = !1,
      g = !1,
      v = !1,
      w = typeof setTimeout == "function" ? setTimeout : null,
      m = typeof clearTimeout == "function" ? clearTimeout : null,
      f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(I) {
      for (var U = n(u); U !== null; ) {
        if (U.callback === null) r(u);
        else if (U.startTime <= I)
          r(u), (U.sortIndex = U.expirationTime), t(l, U);
        else break;
        U = n(u);
      }
    }
    function E(I) {
      if (((v = !1), h(I), !g))
        if (n(l) !== null) (g = !0), te(x);
        else {
          var U = n(u);
          U !== null && Ve(E, U.startTime - I);
        }
    }
    function x(I, U) {
      (g = !1), v && ((v = !1), m(k), (k = -1)), (S = !0);
      var H = p;
      try {
        for (
          h(U), d = n(l);
          d !== null && (!(d.expirationTime > U) || (I && !R()));

        ) {
          var ue = d.callback;
          if (typeof ue == "function") {
            (d.callback = null), (p = d.priorityLevel);
            var we = ue(d.expirationTime <= U);
            (U = e.unstable_now()),
              typeof we == "function" ? (d.callback = we) : d === n(l) && r(l),
              h(U);
          } else r(l);
          d = n(l);
        }
        if (d !== null) var Ss = !0;
        else {
          var Sn = n(u);
          Sn !== null && Ve(E, Sn.startTime - U), (Ss = !1);
        }
        return Ss;
      } finally {
        (d = null), (p = H), (S = !1);
      }
    }
    var b = !1,
      O = null,
      k = -1,
      P = 5,
      M = -1;
    function R() {
      return !(e.unstable_now() - M < P);
    }
    function $() {
      if (O !== null) {
        var I = e.unstable_now();
        M = I;
        var U = !0;
        try {
          U = O(!0, I);
        } finally {
          U ? j() : ((b = !1), (O = null));
        }
      } else b = !1;
    }
    var j;
    if (typeof f == "function")
      j = function () {
        f($);
      };
    else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(),
        V = W.port2;
      (W.port1.onmessage = $),
        (j = function () {
          V.postMessage(null);
        });
    } else
      j = function () {
        w($, 0);
      };
    function te(I) {
      (O = I), b || ((b = !0), j());
    }
    function Ve(I, U) {
      k = w(function () {
        I(e.unstable_now());
      }, U);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (I) {
        I.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        g || S || ((g = !0), te(x));
      }),
      (e.unstable_forceFrameRate = function (I) {
        0 > I || 125 < I
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (P = 0 < I ? Math.floor(1e3 / I) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return p;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (I) {
        switch (p) {
          case 1:
          case 2:
          case 3:
            var U = 3;
            break;
          default:
            U = p;
        }
        var H = p;
        p = U;
        try {
          return I();
        } finally {
          p = H;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (I, U) {
        switch (I) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            I = 3;
        }
        var H = p;
        p = I;
        try {
          return U();
        } finally {
          p = H;
        }
      }),
      (e.unstable_scheduleCallback = function (I, U, H) {
        var ue = e.unstable_now();
        switch (
          (typeof H == "object" && H !== null
            ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? ue + H : ue))
            : (H = ue),
          I)
        ) {
          case 1:
            var we = -1;
            break;
          case 2:
            we = 250;
            break;
          case 5:
            we = 1073741823;
            break;
          case 4:
            we = 1e4;
            break;
          default:
            we = 5e3;
        }
        return (
          (we = H + we),
          (I = {
            id: c++,
            callback: U,
            priorityLevel: I,
            startTime: H,
            expirationTime: we,
            sortIndex: -1,
          }),
          H > ue
            ? ((I.sortIndex = H),
              t(u, I),
              n(l) === null &&
                I === n(u) &&
                (v ? (m(k), (k = -1)) : (v = !0), Ve(E, H - ue)))
            : ((I.sortIndex = we), t(l, I), g || S || ((g = !0), te(x))),
          I
        );
      }),
      (e.unstable_shouldYield = R),
      (e.unstable_wrapCallback = function (I) {
        var U = p;
        return function () {
          var H = p;
          p = U;
          try {
            return I.apply(this, arguments);
          } finally {
            p = H;
          }
        };
      });
  })(Rg);
  Lg.exports = Rg;
  var F1 = Lg.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var A1 = T,
    _t = F1;
  function N(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var jg = new Set(),
    ra = {};
  function ms(e, t) {
    oi(e, t), oi(e + "Capture", t);
  }
  function oi(e, t) {
    for (ra[e] = t, e = 0; e < t.length; e++) jg.add(t[e]);
  }
  var Fn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _c = Object.prototype.hasOwnProperty,
    z1 =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vh = {},
    Gh = {};
  function $1(e) {
    return _c.call(Gh, e)
      ? !0
      : _c.call(Vh, e)
        ? !1
        : z1.test(e)
          ? (Gh[e] = !0)
          : ((Vh[e] = !0), !1);
  }
  function U1(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function H1(e, t, n, r) {
    if (t === null || typeof t > "u" || U1(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function it(e, t, n, r, s, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a);
  }
  var Ye = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Ye[e] = new it(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    Ye[t] = new it(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ye[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    Ye[e] = new it(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      Ye[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ye[e] = new it(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    Ye[e] = new it(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    Ye[e] = new it(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    Ye[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var lf = /[\-:]([a-z])/g;
  function uf(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(lf, uf);
      Ye[t] = new it(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(lf, uf);
      Ye[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(lf, uf);
    Ye[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    Ye[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Ye.xlinkHref = new it(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    Ye[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function cf(e, t, n, r) {
    var s = Ye.hasOwnProperty(t) ? Ye[t] : null;
    (s !== null
      ? s.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (H1(t, n, s, r) && (n = null),
      r || s === null
        ? $1(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : s.mustUseProperty
          ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
          : ((t = s.attributeName),
            (r = s.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((s = s.type),
                (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Bn = A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    no = Symbol.for("react.element"),
    bs = Symbol.for("react.portal"),
    Ts = Symbol.for("react.fragment"),
    df = Symbol.for("react.strict_mode"),
    bc = Symbol.for("react.profiler"),
    Dg = Symbol.for("react.provider"),
    Ig = Symbol.for("react.context"),
    ff = Symbol.for("react.forward_ref"),
    Tc = Symbol.for("react.suspense"),
    kc = Symbol.for("react.suspense_list"),
    hf = Symbol.for("react.memo"),
    er = Symbol.for("react.lazy"),
    Fg = Symbol.for("react.offscreen"),
    qh = Symbol.iterator;
  function Pi(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (qh && e[qh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var be = Object.assign,
    Mu;
  function $i(e) {
    if (Mu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Mu = (t && t[1]) || "";
      }
    return (
      `
` +
      Mu +
      e
    );
  }
  var Nu = !1;
  function Lu(e, t) {
    if (!e || Nu) return "";
    Nu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var s = u.stack.split(`
`),
            i = r.stack.split(`
`),
            a = s.length - 1,
            o = i.length - 1;
          1 <= a && 0 <= o && s[a] !== i[o];

        )
          o--;
        for (; 1 <= a && 0 <= o; a--, o--)
          if (s[a] !== i[o]) {
            if (a !== 1 || o !== 1)
              do
                if ((a--, o--, 0 > o || s[a] !== i[o])) {
                  var l =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= a && 0 <= o);
            break;
          }
      }
    } finally {
      (Nu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? $i(e) : "";
  }
  function B1(e) {
    switch (e.tag) {
      case 5:
        return $i(e.type);
      case 16:
        return $i("Lazy");
      case 13:
        return $i("Suspense");
      case 19:
        return $i("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Lu(e.type, !1)), e;
      case 11:
        return (e = Lu(e.type.render, !1)), e;
      case 1:
        return (e = Lu(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Cc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ts:
        return "Fragment";
      case bs:
        return "Portal";
      case bc:
        return "Profiler";
      case df:
        return "StrictMode";
      case Tc:
        return "Suspense";
      case kc:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ig:
          return (e.displayName || "Context") + ".Consumer";
        case Dg:
          return (e._context.displayName || "Context") + ".Provider";
        case ff:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case hf:
          return (
            (t = e.displayName || null), t !== null ? t : Cc(e.type) || "Memo"
          );
        case er:
          (t = e._payload), (e = e._init);
          try {
            return Cc(e(t));
          } catch {}
      }
    return null;
  }
  function W1(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Cc(t);
      case 8:
        return t === df ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Nr(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ag(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Y1(e) {
    var t = Ag(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (a) {
            (r = "" + a), i.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ro(e) {
    e._valueTracker || (e._valueTracker = Y1(e));
  }
  function zg(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Ag(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Zo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pc(e, t) {
    var n = t.checked;
    return be({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Qh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Nr(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function $g(e, t) {
    (t = t.checked), t != null && cf(e, "checked", t, !1);
  }
  function Oc(e, t) {
    $g(e, t);
    var n = Nr(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Mc(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Mc(e, t.type, Nr(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Kh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Mc(e, t, n) {
    (t !== "number" || Zo(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ui = Array.isArray;
  function Fs(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        (s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Nr(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          (e[s].selected = !0), r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return be({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Xh(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(N(92));
        if (Ui(n)) {
          if (1 < n.length) throw Error(N(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Nr(n) };
  }
  function Ug(e, t) {
    var n = Nr(t.value),
      r = Nr(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Jh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Hg(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Lc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Hg(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var so,
    Bg = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          so = so || document.createElement("div"),
            so.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = so.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function sa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Vi = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    V1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Vi).forEach(function (e) {
    V1.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vi[t] = Vi[e]);
    });
  });
  function Wg(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Vi.hasOwnProperty(e) && Vi[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Yg(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          s = Wg(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
      }
  }
  var G1 = be(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Rc(e, t) {
    if (t) {
      if (G1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(N(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(N(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(N(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(N(62));
    }
  }
  function jc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dc = null;
  function pf(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ic = null,
    As = null,
    zs = null;
  function Zh(e) {
    if ((e = Da(e))) {
      if (typeof Ic != "function") throw Error(N(280));
      var t = e.stateNode;
      t && ((t = Vl(t)), Ic(e.stateNode, e.type, t));
    }
  }
  function Vg(e) {
    As ? (zs ? zs.push(e) : (zs = [e])) : (As = e);
  }
  function Gg() {
    if (As) {
      var e = As,
        t = zs;
      if (((zs = As = null), Zh(e), t)) for (e = 0; e < t.length; e++) Zh(t[e]);
    }
  }
  function qg(e, t) {
    return e(t);
  }
  function Qg() {}
  var Ru = !1;
  function Kg(e, t, n) {
    if (Ru) return e(t, n);
    Ru = !0;
    try {
      return qg(e, t, n);
    } finally {
      (Ru = !1), (As !== null || zs !== null) && (Qg(), Gg());
    }
  }
  function ia(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Vl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(N(231, t, typeof n));
    return n;
  }
  var Fc = !1;
  if (Fn)
    try {
      var Oi = {};
      Object.defineProperty(Oi, "passive", {
        get: function () {
          Fc = !0;
        },
      }),
        window.addEventListener("test", Oi, Oi),
        window.removeEventListener("test", Oi, Oi);
    } catch {
      Fc = !1;
    }
  function q1(e, t, n, r, s, i, a, o, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var Gi = !1,
    el = null,
    tl = !1,
    Ac = null,
    Q1 = {
      onError: function (e) {
        (Gi = !0), (el = e);
      },
    };
  function K1(e, t, n, r, s, i, a, o, l) {
    (Gi = !1), (el = null), q1.apply(Q1, arguments);
  }
  function X1(e, t, n, r, s, i, a, o, l) {
    if ((K1.apply(this, arguments), Gi)) {
      if (Gi) {
        var u = el;
        (Gi = !1), (el = null);
      } else throw Error(N(198));
      tl || ((tl = !0), (Ac = u));
    }
  }
  function gs(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xg(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ep(e) {
    if (gs(e) !== e) throw Error(N(188));
  }
  function J1(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = gs(e)), t === null)) throw Error(N(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var i = s.alternate;
      if (i === null) {
        if (((r = s.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === i.child) {
        for (i = s.child; i; ) {
          if (i === n) return ep(s), e;
          if (i === r) return ep(s), t;
          i = i.sibling;
        }
        throw Error(N(188));
      }
      if (n.return !== r.return) (n = s), (r = i);
      else {
        for (var a = !1, o = s.child; o; ) {
          if (o === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          if (o === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!a) {
          for (o = i.child; o; ) {
            if (o === n) {
              (a = !0), (n = i), (r = s);
              break;
            }
            if (o === r) {
              (a = !0), (r = i), (n = s);
              break;
            }
            o = o.sibling;
          }
          if (!a) throw Error(N(189));
        }
      }
      if (n.alternate !== r) throw Error(N(190));
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t;
  }
  function Jg(e) {
    return (e = J1(e)), e !== null ? Zg(e) : null;
  }
  function Zg(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Zg(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ev = _t.unstable_scheduleCallback,
    tp = _t.unstable_cancelCallback,
    Z1 = _t.unstable_shouldYield,
    eS = _t.unstable_requestPaint,
    Ne = _t.unstable_now,
    tS = _t.unstable_getCurrentPriorityLevel,
    mf = _t.unstable_ImmediatePriority,
    tv = _t.unstable_UserBlockingPriority,
    nl = _t.unstable_NormalPriority,
    nS = _t.unstable_LowPriority,
    nv = _t.unstable_IdlePriority,
    Hl = null,
    hn = null;
  function rS(e) {
    if (hn && typeof hn.onCommitFiberRoot == "function")
      try {
        hn.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Qt = Math.clz32 ? Math.clz32 : aS,
    sS = Math.log,
    iS = Math.LN2;
  function aS(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((sS(e) / iS) | 0)) | 0;
  }
  var io = 64,
    ao = 4194304;
  function Hi(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function rl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      s = e.suspendedLanes,
      i = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var o = a & ~s;
      o !== 0 ? (r = Hi(o)) : ((i &= a), i !== 0 && (r = Hi(i)));
    } else (a = n & ~s), a !== 0 ? (r = Hi(a)) : i !== 0 && (r = Hi(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & s) &&
      ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Qt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
    return r;
  }
  function oS(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function lS(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        s = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var a = 31 - Qt(i),
        o = 1 << a,
        l = s[a];
      l === -1
        ? (!(o & n) || o & r) && (s[a] = oS(o, t))
        : l <= t && (e.expiredLanes |= o),
        (i &= ~o);
    }
  }
  function zc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function rv() {
    var e = io;
    return (io <<= 1), !(io & 4194240) && (io = 64), e;
  }
  function ju(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ra(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Qt(t)),
      (e[t] = n);
  }
  function uS(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Qt(n),
        i = 1 << s;
      (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
    }
  }
  function gf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Qt(n),
        s = 1 << r;
      (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
    }
  }
  var ae = 0;
  function sv(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var iv,
    vf,
    av,
    ov,
    lv,
    $c = !1,
    oo = [],
    xr = null,
    Er = null,
    _r = null,
    aa = new Map(),
    oa = new Map(),
    nr = [],
    cS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function np(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        xr = null;
        break;
      case "dragenter":
      case "dragleave":
        Er = null;
        break;
      case "mouseover":
      case "mouseout":
        _r = null;
        break;
      case "pointerover":
      case "pointerout":
        aa.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oa.delete(t.pointerId);
    }
  }
  function Mi(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [s],
        }),
        t !== null && ((t = Da(t)), t !== null && vf(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function dS(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return (xr = Mi(xr, e, t, n, r, s)), !0;
      case "dragenter":
        return (Er = Mi(Er, e, t, n, r, s)), !0;
      case "mouseover":
        return (_r = Mi(_r, e, t, n, r, s)), !0;
      case "pointerover":
        var i = s.pointerId;
        return aa.set(i, Mi(aa.get(i) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return (
          (i = s.pointerId), oa.set(i, Mi(oa.get(i) || null, e, t, n, r, s)), !0
        );
    }
    return !1;
  }
  function uv(e) {
    var t = Wr(e.target);
    if (t !== null) {
      var n = gs(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xg(n)), t !== null)) {
            (e.blockedOn = t),
              lv(e.priority, function () {
                av(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function No(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Dc = r), n.target.dispatchEvent(r), (Dc = null);
      } else return (t = Da(n)), t !== null && vf(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function rp(e, t, n) {
    No(e) && n.delete(t);
  }
  function fS() {
    ($c = !1),
      xr !== null && No(xr) && (xr = null),
      Er !== null && No(Er) && (Er = null),
      _r !== null && No(_r) && (_r = null),
      aa.forEach(rp),
      oa.forEach(rp);
  }
  function Ni(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      $c ||
        (($c = !0),
        _t.unstable_scheduleCallback(_t.unstable_NormalPriority, fS)));
  }
  function la(e) {
    function t(s) {
      return Ni(s, e);
    }
    if (0 < oo.length) {
      Ni(oo[0], e);
      for (var n = 1; n < oo.length; n++) {
        var r = oo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      xr !== null && Ni(xr, e),
        Er !== null && Ni(Er, e),
        _r !== null && Ni(_r, e),
        aa.forEach(t),
        oa.forEach(t),
        n = 0;
      n < nr.length;
      n++
    )
      (r = nr[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
      uv(n), n.blockedOn === null && nr.shift();
  }
  var $s = Bn.ReactCurrentBatchConfig,
    sl = !0;
  function hS(e, t, n, r) {
    var s = ae,
      i = $s.transition;
    $s.transition = null;
    try {
      (ae = 1), yf(e, t, n, r);
    } finally {
      (ae = s), ($s.transition = i);
    }
  }
  function pS(e, t, n, r) {
    var s = ae,
      i = $s.transition;
    $s.transition = null;
    try {
      (ae = 4), yf(e, t, n, r);
    } finally {
      (ae = s), ($s.transition = i);
    }
  }
  function yf(e, t, n, r) {
    if (sl) {
      var s = Uc(e, t, n, r);
      if (s === null) Wu(e, t, r, il, n), np(e, r);
      else if (dS(s, e, t, n, r)) r.stopPropagation();
      else if ((np(e, r), t & 4 && -1 < cS.indexOf(e))) {
        for (; s !== null; ) {
          var i = Da(s);
          if (
            (i !== null && iv(i),
            (i = Uc(e, t, n, r)),
            i === null && Wu(e, t, r, il, n),
            i === s)
          )
            break;
          s = i;
        }
        s !== null && r.stopPropagation();
      } else Wu(e, t, r, null, n);
    }
  }
  var il = null;
  function Uc(e, t, n, r) {
    if (((il = null), (e = pf(r)), (e = Wr(e)), e !== null))
      if (((t = gs(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xg(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (il = e), null;
  }
  function cv(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (tS()) {
          case mf:
            return 1;
          case tv:
            return 4;
          case nl:
          case nS:
            return 16;
          case nv:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mr = null,
    wf = null,
    Lo = null;
  function dv() {
    if (Lo) return Lo;
    var e,
      t = wf,
      n = t.length,
      r,
      s = "value" in mr ? mr.value : mr.textContent,
      i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === s[i - r]; r++);
    return (Lo = s.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ro(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function lo() {
    return !0;
  }
  function sp() {
    return !1;
  }
  function Tt(e) {
    function t(n, r, s, i, a) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? lo
          : sp),
        (this.isPropagationStopped = sp),
        this
      );
    }
    return (
      be(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = lo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = lo));
        },
        persist: function () {},
        isPersistent: lo,
      }),
      t
    );
  }
  var gi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Sf = Tt(gi),
    ja = be({}, gi, { view: 0, detail: 0 }),
    mS = Tt(ja),
    Du,
    Iu,
    Li,
    Bl = be({}, ja, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xf,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Li &&
              (Li && e.type === "mousemove"
                ? ((Du = e.screenX - Li.screenX), (Iu = e.screenY - Li.screenY))
                : (Iu = Du = 0),
              (Li = e)),
            Du);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Iu;
      },
    }),
    ip = Tt(Bl),
    gS = be({}, Bl, { dataTransfer: 0 }),
    vS = Tt(gS),
    yS = be({}, ja, { relatedTarget: 0 }),
    Fu = Tt(yS),
    wS = be({}, gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    SS = Tt(wS),
    xS = be({}, gi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ES = Tt(xS),
    _S = be({}, gi, { data: 0 }),
    ap = Tt(_S),
    bS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    TS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    kS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function CS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = kS[e])
        ? !!t[e]
        : !1;
  }
  function xf() {
    return CS;
  }
  var PS = be({}, ja, {
      key: function (e) {
        if (e.key) {
          var t = bS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? TS[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xf,
      charCode: function (e) {
        return e.type === "keypress" ? Ro(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ro(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    OS = Tt(PS),
    MS = be({}, Bl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    op = Tt(MS),
    NS = be({}, ja, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xf,
    }),
    LS = Tt(NS),
    RS = be({}, gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jS = Tt(RS),
    DS = be({}, Bl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    IS = Tt(DS),
    FS = [9, 13, 27, 32],
    Ef = Fn && "CompositionEvent" in window,
    qi = null;
  Fn && "documentMode" in document && (qi = document.documentMode);
  var AS = Fn && "TextEvent" in window && !qi,
    fv = Fn && (!Ef || (qi && 8 < qi && 11 >= qi)),
    lp = " ",
    up = !1;
  function hv(e, t) {
    switch (e) {
      case "keyup":
        return FS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pv(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ks = !1;
  function zS(e, t) {
    switch (e) {
      case "compositionend":
        return pv(t);
      case "keypress":
        return t.which !== 32 ? null : ((up = !0), lp);
      case "textInput":
        return (e = t.data), e === lp && up ? null : e;
      default:
        return null;
    }
  }
  function $S(e, t) {
    if (ks)
      return e === "compositionend" || (!Ef && hv(e, t))
        ? ((e = dv()), (Lo = wf = mr = null), (ks = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return fv && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var US = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!US[e.type] : t === "textarea";
  }
  function mv(e, t, n, r) {
    Vg(r),
      (t = al(t, "onChange")),
      0 < t.length &&
        ((n = new Sf("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Qi = null,
    ua = null;
  function HS(e) {
    kv(e, 0);
  }
  function Wl(e) {
    var t = Os(e);
    if (zg(t)) return e;
  }
  function BS(e, t) {
    if (e === "change") return t;
  }
  var gv = !1;
  if (Fn) {
    var Au;
    if (Fn) {
      var zu = "oninput" in document;
      if (!zu) {
        var dp = document.createElement("div");
        dp.setAttribute("oninput", "return;"),
          (zu = typeof dp.oninput == "function");
      }
      Au = zu;
    } else Au = !1;
    gv = Au && (!document.documentMode || 9 < document.documentMode);
  }
  function fp() {
    Qi && (Qi.detachEvent("onpropertychange", vv), (ua = Qi = null));
  }
  function vv(e) {
    if (e.propertyName === "value" && Wl(ua)) {
      var t = [];
      mv(t, ua, e, pf(e)), Kg(HS, t);
    }
  }
  function WS(e, t, n) {
    e === "focusin"
      ? (fp(), (Qi = t), (ua = n), Qi.attachEvent("onpropertychange", vv))
      : e === "focusout" && fp();
  }
  function YS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wl(ua);
  }
  function VS(e, t) {
    if (e === "click") return Wl(t);
  }
  function GS(e, t) {
    if (e === "input" || e === "change") return Wl(t);
  }
  function qS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Xt = typeof Object.is == "function" ? Object.is : qS;
  function ca(e, t) {
    if (Xt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!_c.call(t, s) || !Xt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function hp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function pp(e, t) {
    var n = hp(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = hp(n);
    }
  }
  function yv(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? yv(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function wv() {
    for (var e = window, t = Zo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Zo(e.document);
    }
    return t;
  }
  function _f(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function QS(e) {
    var t = wv(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      yv(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && _f(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var s = n.textContent.length,
            i = Math.min(r.start, s);
          (r = r.end === void 0 ? i : Math.min(r.end, s)),
            !e.extend && i > r && ((s = r), (r = i), (i = s)),
            (s = pp(n, i));
          var a = pp(n, r);
          s &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var KS = Fn && "documentMode" in document && 11 >= document.documentMode,
    Cs = null,
    Hc = null,
    Ki = null,
    Bc = !1;
  function mp(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Bc ||
      Cs == null ||
      Cs !== Zo(r) ||
      ((r = Cs),
      "selectionStart" in r && _f(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Ki && ca(Ki, r)) ||
        ((Ki = r),
        (r = al(Hc, "onSelect")),
        0 < r.length &&
          ((t = new Sf("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Cs))));
  }
  function uo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ps = {
      animationend: uo("Animation", "AnimationEnd"),
      animationiteration: uo("Animation", "AnimationIteration"),
      animationstart: uo("Animation", "AnimationStart"),
      transitionend: uo("Transition", "TransitionEnd"),
    },
    $u = {},
    Sv = {};
  Fn &&
    ((Sv = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ps.animationend.animation,
      delete Ps.animationiteration.animation,
      delete Ps.animationstart.animation),
    "TransitionEvent" in window || delete Ps.transitionend.transition);
  function Yl(e) {
    if ($u[e]) return $u[e];
    if (!Ps[e]) return e;
    var t = Ps[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Sv) return ($u[e] = t[n]);
    return e;
  }
  var xv = Yl("animationend"),
    Ev = Yl("animationiteration"),
    _v = Yl("animationstart"),
    bv = Yl("transitionend"),
    Tv = new Map(),
    gp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Rr(e, t) {
    Tv.set(e, t), ms(t, [e]);
  }
  for (var Uu = 0; Uu < gp.length; Uu++) {
    var Hu = gp[Uu],
      XS = Hu.toLowerCase(),
      JS = Hu[0].toUpperCase() + Hu.slice(1);
    Rr(XS, "on" + JS);
  }
  Rr(xv, "onAnimationEnd");
  Rr(Ev, "onAnimationIteration");
  Rr(_v, "onAnimationStart");
  Rr("dblclick", "onDoubleClick");
  Rr("focusin", "onFocus");
  Rr("focusout", "onBlur");
  Rr(bv, "onTransitionEnd");
  oi("onMouseEnter", ["mouseout", "mouseover"]);
  oi("onMouseLeave", ["mouseout", "mouseover"]);
  oi("onPointerEnter", ["pointerout", "pointerover"]);
  oi("onPointerLeave", ["pointerout", "pointerover"]);
  ms(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  ms(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  ms("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  ms(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  ms(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  ms(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Bi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ZS = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Bi)
    );
  function vp(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), X1(r, t, void 0, e), (e.currentTarget = null);
  }
  function kv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        s = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var o = r[a],
              l = o.instance,
              u = o.currentTarget;
            if (((o = o.listener), l !== i && s.isPropagationStopped()))
              break e;
            vp(s, o, u), (i = l);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((o = r[a]),
              (l = o.instance),
              (u = o.currentTarget),
              (o = o.listener),
              l !== i && s.isPropagationStopped())
            )
              break e;
            vp(s, o, u), (i = l);
          }
      }
    }
    if (tl) throw ((e = Ac), (tl = !1), (Ac = null), e);
  }
  function fe(e, t) {
    var n = t[qc];
    n === void 0 && (n = t[qc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Cv(t, e, 2, !1), n.add(r));
  }
  function Bu(e, t, n) {
    var r = 0;
    t && (r |= 4), Cv(n, e, r, t);
  }
  var co = "_reactListening" + Math.random().toString(36).slice(2);
  function da(e) {
    if (!e[co]) {
      (e[co] = !0),
        jg.forEach(function (n) {
          n !== "selectionchange" && (ZS.has(n) || Bu(n, !1, e), Bu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[co] || ((t[co] = !0), Bu("selectionchange", !1, t));
    }
  }
  function Cv(e, t, n, r) {
    switch (cv(t)) {
      case 1:
        var s = hS;
        break;
      case 4:
        s = pS;
        break;
      default:
        s = yf;
    }
    (n = s.bind(null, t, n, e)),
      (s = void 0),
      !Fc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      r
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1);
  }
  function Wu(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var o = r.stateNode.containerInfo;
          if (o === s || (o.nodeType === 8 && o.parentNode === s)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = a.stateNode.containerInfo),
                l === s || (l.nodeType === 8 && l.parentNode === s))
              )
                return;
              a = a.return;
            }
          for (; o !== null; ) {
            if (((a = Wr(o)), a === null)) return;
            if (((l = a.tag), l === 5 || l === 6)) {
              r = i = a;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Kg(function () {
      var u = i,
        c = pf(n),
        d = [];
      e: {
        var p = Tv.get(e);
        if (p !== void 0) {
          var S = Sf,
            g = e;
          switch (e) {
            case "keypress":
              if (Ro(n) === 0) break e;
            case "keydown":
            case "keyup":
              S = OS;
              break;
            case "focusin":
              (g = "focus"), (S = Fu);
              break;
            case "focusout":
              (g = "blur"), (S = Fu);
              break;
            case "beforeblur":
            case "afterblur":
              S = Fu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = ip;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = vS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = LS;
              break;
            case xv:
            case Ev:
            case _v:
              S = SS;
              break;
            case bv:
              S = jS;
              break;
            case "scroll":
              S = mS;
              break;
            case "wheel":
              S = IS;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = ES;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = op;
          }
          var v = (t & 4) !== 0,
            w = !v && e === "scroll",
            m = v ? (p !== null ? p + "Capture" : null) : p;
          v = [];
          for (var f = u, h; f !== null; ) {
            h = f;
            var E = h.stateNode;
            if (
              (h.tag === 5 &&
                E !== null &&
                ((h = E),
                m !== null &&
                  ((E = ia(f, m)), E != null && v.push(fa(f, E, h)))),
              w)
            )
              break;
            f = f.return;
          }
          0 < v.length &&
            ((p = new S(p, g, null, n, c)), d.push({ event: p, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((p = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            p &&
              n !== Dc &&
              (g = n.relatedTarget || n.fromElement) &&
              (Wr(g) || g[An]))
          )
            break e;
          if (
            (S || p) &&
            ((p =
              c.window === c
                ? c
                : (p = c.ownerDocument)
                  ? p.defaultView || p.parentWindow
                  : window),
            S
              ? ((g = n.relatedTarget || n.toElement),
                (S = u),
                (g = g ? Wr(g) : null),
                g !== null &&
                  ((w = gs(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((S = null), (g = u)),
            S !== g)
          ) {
            if (
              ((v = ip),
              (E = "onMouseLeave"),
              (m = "onMouseEnter"),
              (f = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((v = op),
                (E = "onPointerLeave"),
                (m = "onPointerEnter"),
                (f = "pointer")),
              (w = S == null ? p : Os(S)),
              (h = g == null ? p : Os(g)),
              (p = new v(E, f + "leave", S, n, c)),
              (p.target = w),
              (p.relatedTarget = h),
              (E = null),
              Wr(c) === u &&
                ((v = new v(m, f + "enter", g, n, c)),
                (v.target = h),
                (v.relatedTarget = w),
                (E = v)),
              (w = E),
              S && g)
            )
              t: {
                for (v = S, m = g, f = 0, h = v; h; h = xs(h)) f++;
                for (h = 0, E = m; E; E = xs(E)) h++;
                for (; 0 < f - h; ) (v = xs(v)), f--;
                for (; 0 < h - f; ) (m = xs(m)), h--;
                for (; f--; ) {
                  if (v === m || (m !== null && v === m.alternate)) break t;
                  (v = xs(v)), (m = xs(m));
                }
                v = null;
              }
            else v = null;
            S !== null && yp(d, p, S, v, !1),
              g !== null && w !== null && yp(d, w, g, v, !0);
          }
        }
        e: {
          if (
            ((p = u ? Os(u) : window),
            (S = p.nodeName && p.nodeName.toLowerCase()),
            S === "select" || (S === "input" && p.type === "file"))
          )
            var x = BS;
          else if (cp(p))
            if (gv) x = GS;
            else {
              x = YS;
              var b = WS;
            }
          else
            (S = p.nodeName) &&
              S.toLowerCase() === "input" &&
              (p.type === "checkbox" || p.type === "radio") &&
              (x = VS);
          if (x && (x = x(e, u))) {
            mv(d, x, n, c);
            break e;
          }
          b && b(e, p, u),
            e === "focusout" &&
              (b = p._wrapperState) &&
              b.controlled &&
              p.type === "number" &&
              Mc(p, "number", p.value);
        }
        switch (((b = u ? Os(u) : window), e)) {
          case "focusin":
            (cp(b) || b.contentEditable === "true") &&
              ((Cs = b), (Hc = u), (Ki = null));
            break;
          case "focusout":
            Ki = Hc = Cs = null;
            break;
          case "mousedown":
            Bc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Bc = !1), mp(d, n, c);
            break;
          case "selectionchange":
            if (KS) break;
          case "keydown":
          case "keyup":
            mp(d, n, c);
        }
        var O;
        if (Ef)
          e: {
            switch (e) {
              case "compositionstart":
                var k = "onCompositionStart";
                break e;
              case "compositionend":
                k = "onCompositionEnd";
                break e;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break e;
            }
            k = void 0;
          }
        else
          ks
            ? hv(e, n) && (k = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (k = "onCompositionStart");
        k &&
          (fv &&
            n.locale !== "ko" &&
            (ks || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && ks && (O = dv())
              : ((mr = c),
                (wf = "value" in mr ? mr.value : mr.textContent),
                (ks = !0))),
          (b = al(u, k)),
          0 < b.length &&
            ((k = new ap(k, e, null, n, c)),
            d.push({ event: k, listeners: b }),
            O ? (k.data = O) : ((O = pv(n)), O !== null && (k.data = O)))),
          (O = AS ? zS(e, n) : $S(e, n)) &&
            ((u = al(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new ap("onBeforeInput", "beforeinput", null, n, c)),
              d.push({ event: c, listeners: u }),
              (c.data = O)));
      }
      kv(d, t);
    });
  }
  function fa(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function al(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e,
        i = s.stateNode;
      s.tag === 5 &&
        i !== null &&
        ((s = i),
        (i = ia(e, n)),
        i != null && r.unshift(fa(e, i, s)),
        (i = ia(e, t)),
        i != null && r.push(fa(e, i, s))),
        (e = e.return);
    }
    return r;
  }
  function xs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function yp(e, t, n, r, s) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var o = n,
        l = o.alternate,
        u = o.stateNode;
      if (l !== null && l === r) break;
      o.tag === 5 &&
        u !== null &&
        ((o = u),
        s
          ? ((l = ia(n, i)), l != null && a.unshift(fa(n, l, o)))
          : s || ((l = ia(n, i)), l != null && a.push(fa(n, l, o)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var ex = /\r\n?/g,
    tx = /\u0000|\uFFFD/g;
  function wp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ex,
        `
`
      )
      .replace(tx, "");
  }
  function fo(e, t, n) {
    if (((t = wp(t)), wp(e) !== t && n)) throw Error(N(425));
  }
  function ol() {}
  var Wc = null,
    Yc = null;
  function Vc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gc = typeof setTimeout == "function" ? setTimeout : void 0,
    nx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sp = typeof Promise == "function" ? Promise : void 0,
    rx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Sp < "u"
          ? function (e) {
              return Sp.resolve(null).then(e).catch(sx);
            }
          : Gc;
  function sx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Yu(e, t) {
    var n = t,
      r = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(s), la(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = s;
    } while (n);
    la(t);
  }
  function br(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function xp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vi = Math.random().toString(36).slice(2),
    dn = "__reactFiber$" + vi,
    ha = "__reactProps$" + vi,
    An = "__reactContainer$" + vi,
    qc = "__reactEvents$" + vi,
    ix = "__reactListeners$" + vi,
    ax = "__reactHandles$" + vi;
  function Wr(e) {
    var t = e[dn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[An] || n[dn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = xp(e); e !== null; ) {
            if ((n = e[dn])) return n;
            e = xp(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Da(e) {
    return (
      (e = e[dn] || e[An]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Os(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33));
  }
  function Vl(e) {
    return e[ha] || null;
  }
  var Qc = [],
    Ms = -1;
  function jr(e) {
    return { current: e };
  }
  function he(e) {
    0 > Ms || ((e.current = Qc[Ms]), (Qc[Ms] = null), Ms--);
  }
  function ce(e, t) {
    Ms++, (Qc[Ms] = e.current), (e.current = t);
  }
  var Lr = {},
    Je = jr(Lr),
    dt = jr(!1),
    as = Lr;
  function li(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Lr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      i;
    for (i in n) s[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function ft(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ll() {
    he(dt), he(Je);
  }
  function Ep(e, t, n) {
    if (Je.current !== Lr) throw Error(N(168));
    ce(Je, t), ce(dt, n);
  }
  function Pv(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(N(108, W1(e) || "Unknown", s));
    return be({}, n, r);
  }
  function ul(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Lr),
      (as = Je.current),
      ce(Je, e),
      ce(dt, dt.current),
      !0
    );
  }
  function _p(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n
      ? ((e = Pv(e, t, as)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        he(dt),
        he(Je),
        ce(Je, e))
      : he(dt),
      ce(dt, n);
  }
  var Cn = null,
    Gl = !1,
    Vu = !1;
  function Ov(e) {
    Cn === null ? (Cn = [e]) : Cn.push(e);
  }
  function ox(e) {
    (Gl = !0), Ov(e);
  }
  function Dr() {
    if (!Vu && Cn !== null) {
      Vu = !0;
      var e = 0,
        t = ae;
      try {
        var n = Cn;
        for (ae = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Cn = null), (Gl = !1);
      } catch (s) {
        throw (Cn !== null && (Cn = Cn.slice(e + 1)), ev(mf, Dr), s);
      } finally {
        (ae = t), (Vu = !1);
      }
    }
    return null;
  }
  var Ns = [],
    Ls = 0,
    cl = null,
    dl = 0,
    Nt = [],
    Lt = 0,
    os = null,
    On = 1,
    Mn = "";
  function Hr(e, t) {
    (Ns[Ls++] = dl), (Ns[Ls++] = cl), (cl = e), (dl = t);
  }
  function Mv(e, t, n) {
    (Nt[Lt++] = On), (Nt[Lt++] = Mn), (Nt[Lt++] = os), (os = e);
    var r = On;
    e = Mn;
    var s = 32 - Qt(r) - 1;
    (r &= ~(1 << s)), (n += 1);
    var i = 32 - Qt(t) + s;
    if (30 < i) {
      var a = s - (s % 5);
      (i = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (s -= a),
        (On = (1 << (32 - Qt(t) + s)) | (n << s) | r),
        (Mn = i + e);
    } else (On = (1 << i) | (n << s) | r), (Mn = e);
  }
  function bf(e) {
    e.return !== null && (Hr(e, 1), Mv(e, 1, 0));
  }
  function Tf(e) {
    for (; e === cl; )
      (cl = Ns[--Ls]), (Ns[Ls] = null), (dl = Ns[--Ls]), (Ns[Ls] = null);
    for (; e === os; )
      (os = Nt[--Lt]),
        (Nt[Lt] = null),
        (Mn = Nt[--Lt]),
        (Nt[Lt] = null),
        (On = Nt[--Lt]),
        (Nt[Lt] = null);
  }
  var xt = null,
    St = null,
    ye = !1,
    Yt = null;
  function Nv(e, t) {
    var n = jt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function bp(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (xt = e), (St = br(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (xt = e), (St = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = os !== null ? { id: On, overflow: Mn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = jt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (xt = e),
              (St = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Kc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Xc(e) {
    if (ye) {
      var t = St;
      if (t) {
        var n = t;
        if (!bp(e, t)) {
          if (Kc(e)) throw Error(N(418));
          t = br(n.nextSibling);
          var r = xt;
          t && bp(e, t)
            ? Nv(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (xt = e));
        }
      } else {
        if (Kc(e)) throw Error(N(418));
        (e.flags = (e.flags & -4097) | 2), (ye = !1), (xt = e);
      }
    }
  }
  function Tp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    xt = e;
  }
  function ho(e) {
    if (e !== xt) return !1;
    if (!ye) return Tp(e), (ye = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Vc(e.type, e.memoizedProps))),
      t && (t = St))
    ) {
      if (Kc(e)) throw (Lv(), Error(N(418)));
      for (; t; ) Nv(e, t), (t = br(t.nextSibling));
    }
    if ((Tp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(N(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                St = br(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = xt ? br(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Lv() {
    for (var e = St; e; ) e = br(e.nextSibling);
  }
  function ui() {
    (St = xt = null), (ye = !1);
  }
  function kf(e) {
    Yt === null ? (Yt = [e]) : Yt.push(e);
  }
  var lx = Bn.ReactCurrentBatchConfig;
  function Ri(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(N(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(N(147, e));
        var s = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var o = s.refs;
              a === null ? delete o[i] : (o[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(N(284));
      if (!n._owner) throw Error(N(290, e));
    }
    return e;
  }
  function po(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        N(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function kp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Rv(e) {
    function t(m, f) {
      if (e) {
        var h = m.deletions;
        h === null ? ((m.deletions = [f]), (m.flags |= 16)) : h.push(f);
      }
    }
    function n(m, f) {
      if (!e) return null;
      for (; f !== null; ) t(m, f), (f = f.sibling);
      return null;
    }
    function r(m, f) {
      for (m = new Map(); f !== null; )
        f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
      return m;
    }
    function s(m, f) {
      return (m = Pr(m, f)), (m.index = 0), (m.sibling = null), m;
    }
    function i(m, f, h) {
      return (
        (m.index = h),
        e
          ? ((h = m.alternate),
            h !== null
              ? ((h = h.index), h < f ? ((m.flags |= 2), f) : h)
              : ((m.flags |= 2), f))
          : ((m.flags |= 1048576), f)
      );
    }
    function a(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function o(m, f, h, E) {
      return f === null || f.tag !== 6
        ? ((f = Zu(h, m.mode, E)), (f.return = m), f)
        : ((f = s(f, h)), (f.return = m), f);
    }
    function l(m, f, h, E) {
      var x = h.type;
      return x === Ts
        ? c(m, f, h.props.children, E, h.key)
        : f !== null &&
            (f.elementType === x ||
              (typeof x == "object" &&
                x !== null &&
                x.$$typeof === er &&
                kp(x) === f.type))
          ? ((E = s(f, h.props)), (E.ref = Ri(m, f, h)), (E.return = m), E)
          : ((E = $o(h.type, h.key, h.props, null, m.mode, E)),
            (E.ref = Ri(m, f, h)),
            (E.return = m),
            E);
    }
    function u(m, f, h, E) {
      return f === null ||
        f.tag !== 4 ||
        f.stateNode.containerInfo !== h.containerInfo ||
        f.stateNode.implementation !== h.implementation
        ? ((f = ec(h, m.mode, E)), (f.return = m), f)
        : ((f = s(f, h.children || [])), (f.return = m), f);
    }
    function c(m, f, h, E, x) {
      return f === null || f.tag !== 7
        ? ((f = rs(h, m.mode, E, x)), (f.return = m), f)
        : ((f = s(f, h)), (f.return = m), f);
    }
    function d(m, f, h) {
      if ((typeof f == "string" && f !== "") || typeof f == "number")
        return (f = Zu("" + f, m.mode, h)), (f.return = m), f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case no:
            return (
              (h = $o(f.type, f.key, f.props, null, m.mode, h)),
              (h.ref = Ri(m, null, f)),
              (h.return = m),
              h
            );
          case bs:
            return (f = ec(f, m.mode, h)), (f.return = m), f;
          case er:
            var E = f._init;
            return d(m, E(f._payload), h);
        }
        if (Ui(f) || Pi(f))
          return (f = rs(f, m.mode, h, null)), (f.return = m), f;
        po(m, f);
      }
      return null;
    }
    function p(m, f, h, E) {
      var x = f !== null ? f.key : null;
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return x !== null ? null : o(m, f, "" + h, E);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case no:
            return h.key === x ? l(m, f, h, E) : null;
          case bs:
            return h.key === x ? u(m, f, h, E) : null;
          case er:
            return (x = h._init), p(m, f, x(h._payload), E);
        }
        if (Ui(h) || Pi(h)) return x !== null ? null : c(m, f, h, E, null);
        po(m, h);
      }
      return null;
    }
    function S(m, f, h, E, x) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (m = m.get(h) || null), o(f, m, "" + E, x);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case no:
            return (
              (m = m.get(E.key === null ? h : E.key) || null), l(f, m, E, x)
            );
          case bs:
            return (
              (m = m.get(E.key === null ? h : E.key) || null), u(f, m, E, x)
            );
          case er:
            var b = E._init;
            return S(m, f, h, b(E._payload), x);
        }
        if (Ui(E) || Pi(E)) return (m = m.get(h) || null), c(f, m, E, x, null);
        po(f, E);
      }
      return null;
    }
    function g(m, f, h, E) {
      for (
        var x = null, b = null, O = f, k = (f = 0), P = null;
        O !== null && k < h.length;
        k++
      ) {
        O.index > k ? ((P = O), (O = null)) : (P = O.sibling);
        var M = p(m, O, h[k], E);
        if (M === null) {
          O === null && (O = P);
          break;
        }
        e && O && M.alternate === null && t(m, O),
          (f = i(M, f, k)),
          b === null ? (x = M) : (b.sibling = M),
          (b = M),
          (O = P);
      }
      if (k === h.length) return n(m, O), ye && Hr(m, k), x;
      if (O === null) {
        for (; k < h.length; k++)
          (O = d(m, h[k], E)),
            O !== null &&
              ((f = i(O, f, k)),
              b === null ? (x = O) : (b.sibling = O),
              (b = O));
        return ye && Hr(m, k), x;
      }
      for (O = r(m, O); k < h.length; k++)
        (P = S(O, m, k, h[k], E)),
          P !== null &&
            (e && P.alternate !== null && O.delete(P.key === null ? k : P.key),
            (f = i(P, f, k)),
            b === null ? (x = P) : (b.sibling = P),
            (b = P));
      return (
        e &&
          O.forEach(function (R) {
            return t(m, R);
          }),
        ye && Hr(m, k),
        x
      );
    }
    function v(m, f, h, E) {
      var x = Pi(h);
      if (typeof x != "function") throw Error(N(150));
      if (((h = x.call(h)), h == null)) throw Error(N(151));
      for (
        var b = (x = null), O = f, k = (f = 0), P = null, M = h.next();
        O !== null && !M.done;
        k++, M = h.next()
      ) {
        O.index > k ? ((P = O), (O = null)) : (P = O.sibling);
        var R = p(m, O, M.value, E);
        if (R === null) {
          O === null && (O = P);
          break;
        }
        e && O && R.alternate === null && t(m, O),
          (f = i(R, f, k)),
          b === null ? (x = R) : (b.sibling = R),
          (b = R),
          (O = P);
      }
      if (M.done) return n(m, O), ye && Hr(m, k), x;
      if (O === null) {
        for (; !M.done; k++, M = h.next())
          (M = d(m, M.value, E)),
            M !== null &&
              ((f = i(M, f, k)),
              b === null ? (x = M) : (b.sibling = M),
              (b = M));
        return ye && Hr(m, k), x;
      }
      for (O = r(m, O); !M.done; k++, M = h.next())
        (M = S(O, m, k, M.value, E)),
          M !== null &&
            (e && M.alternate !== null && O.delete(M.key === null ? k : M.key),
            (f = i(M, f, k)),
            b === null ? (x = M) : (b.sibling = M),
            (b = M));
      return (
        e &&
          O.forEach(function ($) {
            return t(m, $);
          }),
        ye && Hr(m, k),
        x
      );
    }
    function w(m, f, h, E) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === Ts &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case no:
            e: {
              for (var x = h.key, b = f; b !== null; ) {
                if (b.key === x) {
                  if (((x = h.type), x === Ts)) {
                    if (b.tag === 7) {
                      n(m, b.sibling),
                        (f = s(b, h.props.children)),
                        (f.return = m),
                        (m = f);
                      break e;
                    }
                  } else if (
                    b.elementType === x ||
                    (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === er &&
                      kp(x) === b.type)
                  ) {
                    n(m, b.sibling),
                      (f = s(b, h.props)),
                      (f.ref = Ri(m, b, h)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                  n(m, b);
                  break;
                } else t(m, b);
                b = b.sibling;
              }
              h.type === Ts
                ? ((f = rs(h.props.children, m.mode, E, h.key)),
                  (f.return = m),
                  (m = f))
                : ((E = $o(h.type, h.key, h.props, null, m.mode, E)),
                  (E.ref = Ri(m, f, h)),
                  (E.return = m),
                  (m = E));
            }
            return a(m);
          case bs:
            e: {
              for (b = h.key; f !== null; ) {
                if (f.key === b)
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === h.containerInfo &&
                    f.stateNode.implementation === h.implementation
                  ) {
                    n(m, f.sibling),
                      (f = s(f, h.children || [])),
                      (f.return = m),
                      (m = f);
                    break e;
                  } else {
                    n(m, f);
                    break;
                  }
                else t(m, f);
                f = f.sibling;
              }
              (f = ec(h, m.mode, E)), (f.return = m), (m = f);
            }
            return a(m);
          case er:
            return (b = h._init), w(m, f, b(h._payload), E);
        }
        if (Ui(h)) return g(m, f, h, E);
        if (Pi(h)) return v(m, f, h, E);
        po(m, h);
      }
      return (typeof h == "string" && h !== "") || typeof h == "number"
        ? ((h = "" + h),
          f !== null && f.tag === 6
            ? (n(m, f.sibling), (f = s(f, h)), (f.return = m), (m = f))
            : (n(m, f), (f = Zu(h, m.mode, E)), (f.return = m), (m = f)),
          a(m))
        : n(m, f);
    }
    return w;
  }
  var ci = Rv(!0),
    jv = Rv(!1),
    fl = jr(null),
    hl = null,
    Rs = null,
    Cf = null;
  function Pf() {
    Cf = Rs = hl = null;
  }
  function Of(e) {
    var t = fl.current;
    he(fl), (e._currentValue = t);
  }
  function Jc(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Us(e, t) {
    (hl = e),
      (Cf = Rs = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (ct = !0), (e.firstContext = null));
  }
  function It(e) {
    var t = e._currentValue;
    if (Cf !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Rs === null)) {
        if (hl === null) throw Error(N(308));
        (Rs = e), (hl.dependencies = { lanes: 0, firstContext: e });
      } else Rs = Rs.next = e;
    return t;
  }
  var Yr = null;
  function Mf(e) {
    Yr === null ? (Yr = [e]) : Yr.push(e);
  }
  function Dv(e, t, n, r) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), Mf(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      zn(e, r)
    );
  }
  function zn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var tr = !1;
  function Nf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Iv(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Rn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Tr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ne & 2)) {
      var s = r.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (r.pending = t),
        zn(e, n)
      );
    }
    return (
      (s = r.interleaved),
      s === null ? ((t.next = t), Mf(r)) : ((t.next = s.next), (s.next = t)),
      (r.interleaved = t),
      zn(e, n)
    );
  }
  function jo(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gf(e, n);
    }
  }
  function Cp(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var s = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (s = i = a) : (i = i.next = a), (n = n.next);
        } while (n !== null);
        i === null ? (s = i = t) : (i = i.next = t);
      } else s = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function pl(e, t, n, r) {
    var s = e.updateQueue;
    tr = !1;
    var i = s.firstBaseUpdate,
      a = s.lastBaseUpdate,
      o = s.shared.pending;
    if (o !== null) {
      s.shared.pending = null;
      var l = o,
        u = l.next;
      (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (o = c.lastBaseUpdate),
        o !== a &&
          (o === null ? (c.firstBaseUpdate = u) : (o.next = u),
          (c.lastBaseUpdate = l)));
    }
    if (i !== null) {
      var d = s.baseState;
      (a = 0), (c = u = l = null), (o = i);
      do {
        var p = o.lane,
          S = o.eventTime;
        if ((r & p) === p) {
          c !== null &&
            (c = c.next =
              {
                eventTime: S,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var g = e,
              v = o;
            switch (((p = t), (S = n), v.tag)) {
              case 1:
                if (((g = v.payload), typeof g == "function")) {
                  d = g.call(S, d, p);
                  break e;
                }
                d = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = v.payload),
                  (p = typeof g == "function" ? g.call(S, d, p) : g),
                  p == null)
                )
                  break e;
                d = be({}, d, p);
                break e;
              case 2:
                tr = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (p = s.effects),
            p === null ? (s.effects = [o]) : p.push(o));
        } else
          (S = {
            eventTime: S,
            lane: p,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            c === null ? ((u = c = S), (l = d)) : (c = c.next = S),
            (a |= p);
        if (((o = o.next), o === null)) {
          if (((o = s.shared.pending), o === null)) break;
          (p = o),
            (o = p.next),
            (p.next = null),
            (s.lastBaseUpdate = p),
            (s.shared.pending = null);
        }
      } while (!0);
      if (
        (c === null && (l = d),
        (s.baseState = l),
        (s.firstBaseUpdate = u),
        (s.lastBaseUpdate = c),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do (a |= s.lane), (s = s.next);
        while (s !== t);
      } else i === null && (s.shared.lanes = 0);
      (us |= a), (e.lanes = a), (e.memoizedState = d);
    }
  }
  function Pp(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          s = r.callback;
        if (s !== null) {
          if (((r.callback = null), (r = n), typeof s != "function"))
            throw Error(N(191, s));
          s.call(r);
        }
      }
  }
  var Ia = {},
    pn = jr(Ia),
    pa = jr(Ia),
    ma = jr(Ia);
  function Vr(e) {
    if (e === Ia) throw Error(N(174));
    return e;
  }
  function Lf(e, t) {
    switch ((ce(ma, t), ce(pa, e), ce(pn, Ia), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Lc(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Lc(t, e));
    }
    he(pn), ce(pn, t);
  }
  function di() {
    he(pn), he(pa), he(ma);
  }
  function Fv(e) {
    Vr(ma.current);
    var t = Vr(pn.current),
      n = Lc(t, e.type);
    t !== n && (ce(pa, e), ce(pn, n));
  }
  function Rf(e) {
    pa.current === e && (he(pn), he(pa));
  }
  var Ee = jr(0);
  function ml(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Gu = [];
  function jf() {
    for (var e = 0; e < Gu.length; e++)
      Gu[e]._workInProgressVersionPrimary = null;
    Gu.length = 0;
  }
  var Do = Bn.ReactCurrentDispatcher,
    qu = Bn.ReactCurrentBatchConfig,
    ls = 0,
    _e = null,
    De = null,
    $e = null,
    gl = !1,
    Xi = !1,
    ga = 0,
    ux = 0;
  function Ge() {
    throw Error(N(321));
  }
  function Df(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function If(e, t, n, r, s, i) {
    if (
      ((ls = i),
      (_e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Do.current = e === null || e.memoizedState === null ? hx : px),
      (e = n(r, s)),
      Xi)
    ) {
      i = 0;
      do {
        if (((Xi = !1), (ga = 0), 25 <= i)) throw Error(N(301));
        (i += 1),
          ($e = De = null),
          (t.updateQueue = null),
          (Do.current = mx),
          (e = n(r, s));
      } while (Xi);
    }
    if (
      ((Do.current = vl),
      (t = De !== null && De.next !== null),
      (ls = 0),
      ($e = De = _e = null),
      (gl = !1),
      t)
    )
      throw Error(N(300));
    return e;
  }
  function Ff() {
    var e = ga !== 0;
    return (ga = 0), e;
  }
  function sn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return $e === null ? (_e.memoizedState = $e = e) : ($e = $e.next = e), $e;
  }
  function Ft() {
    if (De === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = $e === null ? _e.memoizedState : $e.next;
    if (t !== null) ($e = t), (De = e);
    else {
      if (e === null) throw Error(N(310));
      (De = e),
        (e = {
          memoizedState: De.memoizedState,
          baseState: De.baseState,
          baseQueue: De.baseQueue,
          queue: De.queue,
          next: null,
        }),
        $e === null ? (_e.memoizedState = $e = e) : ($e = $e.next = e);
    }
    return $e;
  }
  function va(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qu(e) {
    var t = Ft(),
      n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = De,
      s = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (s !== null) {
        var a = s.next;
        (s.next = i.next), (i.next = a);
      }
      (r.baseQueue = s = i), (n.pending = null);
    }
    if (s !== null) {
      (i = s.next), (r = r.baseState);
      var o = (a = null),
        l = null,
        u = i;
      do {
        var c = u.lane;
        if ((ls & c) === c)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var d = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((o = l = d), (a = r)) : (l = l.next = d),
            (_e.lanes |= c),
            (us |= c);
        }
        u = u.next;
      } while (u !== null && u !== i);
      l === null ? (a = r) : (l.next = o),
        Xt(r, t.memoizedState) || (ct = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do (i = s.lane), (_e.lanes |= i), (us |= i), (s = s.next);
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ku(e) {
    var t = Ft(),
      n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      s = n.pending,
      i = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var a = (s = s.next);
      do (i = e(i, a.action)), (a = a.next);
      while (a !== s);
      Xt(i, t.memoizedState) || (ct = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Av() {}
  function zv(e, t) {
    var n = _e,
      r = Ft(),
      s = t(),
      i = !Xt(r.memoizedState, s);
    if (
      (i && ((r.memoizedState = s), (ct = !0)),
      (r = r.queue),
      Af(Hv.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || ($e !== null && $e.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ya(9, Uv.bind(null, n, r, s, t), void 0, null),
        Ue === null)
      )
        throw Error(N(349));
      ls & 30 || $v(n, t, s);
    }
    return s;
  }
  function $v(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Uv(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Bv(t) && Wv(e);
  }
  function Hv(e, t, n) {
    return n(function () {
      Bv(t) && Wv(e);
    });
  }
  function Bv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Xt(e, n);
    } catch {
      return !0;
    }
  }
  function Wv(e) {
    var t = zn(e, 1);
    t !== null && Kt(t, e, 1, -1);
  }
  function Op(e) {
    var t = sn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = fx.bind(null, _e, e)),
      [t.memoizedState, e]
    );
  }
  function ya(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Yv() {
    return Ft().memoizedState;
  }
  function Io(e, t, n, r) {
    var s = sn();
    (_e.flags |= e),
      (s.memoizedState = ya(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ql(e, t, n, r) {
    var s = Ft();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (De !== null) {
      var a = De.memoizedState;
      if (((i = a.destroy), r !== null && Df(r, a.deps))) {
        s.memoizedState = ya(t, n, i, r);
        return;
      }
    }
    (_e.flags |= e), (s.memoizedState = ya(1 | t, n, i, r));
  }
  function Mp(e, t) {
    return Io(8390656, 8, e, t);
  }
  function Af(e, t) {
    return ql(2048, 8, e, t);
  }
  function Vv(e, t) {
    return ql(4, 2, e, t);
  }
  function Gv(e, t) {
    return ql(4, 4, e, t);
  }
  function qv(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Qv(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ql(4, 4, qv.bind(null, t, e), n)
    );
  }
  function zf() {}
  function Kv(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Df(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Xv(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Df(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Jv(e, t, n) {
    return ls & 21
      ? (Xt(n, t) ||
          ((n = rv()), (_e.lanes |= n), (us |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ct = !0)), (e.memoizedState = n));
  }
  function cx(e, t) {
    var n = ae;
    (ae = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = qu.transition;
    qu.transition = {};
    try {
      e(!1), t();
    } finally {
      (ae = n), (qu.transition = r);
    }
  }
  function Zv() {
    return Ft().memoizedState;
  }
  function dx(e, t, n) {
    var r = Cr(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ey(e))
    )
      ty(t, n);
    else if (((n = Dv(e, t, n, r)), n !== null)) {
      var s = rt();
      Kt(n, e, r, s), ny(n, t, r);
    }
  }
  function fx(e, t, n) {
    var r = Cr(e),
      s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ey(e)) ty(t, s);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var a = t.lastRenderedState,
            o = i(a, n);
          if (((s.hasEagerState = !0), (s.eagerState = o), Xt(o, a))) {
            var l = t.interleaved;
            l === null
              ? ((s.next = s), Mf(t))
              : ((s.next = l.next), (l.next = s)),
              (t.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (n = Dv(e, t, s, r)),
        n !== null && ((s = rt()), Kt(n, e, r, s), ny(n, t, r));
    }
  }
  function ey(e) {
    var t = e.alternate;
    return e === _e || (t !== null && t === _e);
  }
  function ty(e, t) {
    Xi = gl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ny(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gf(e, n);
    }
  }
  var vl = {
      readContext: It,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useInsertionEffect: Ge,
      useLayoutEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useMutableSource: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      unstable_isNewReconciler: !1,
    },
    hx = {
      readContext: It,
      useCallback: function (e, t) {
        return (sn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: It,
      useEffect: Mp,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Io(4194308, 4, qv.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Io(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Io(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = sn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = sn();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = dx.bind(null, _e, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = sn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Op,
      useDebugValue: zf,
      useDeferredValue: function (e) {
        return (sn().memoizedState = e);
      },
      useTransition: function () {
        var e = Op(!1),
          t = e[0];
        return (e = cx.bind(null, e[1])), (sn().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = _e,
          s = sn();
        if (ye) {
          if (n === void 0) throw Error(N(407));
          n = n();
        } else {
          if (((n = t()), Ue === null)) throw Error(N(349));
          ls & 30 || $v(r, t, n);
        }
        s.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (s.queue = i),
          Mp(Hv.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          ya(9, Uv.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = sn(),
          t = Ue.identifierPrefix;
        if (ye) {
          var n = Mn,
            r = On;
          (n = (r & ~(1 << (32 - Qt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ga++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = ux++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    px = {
      readContext: It,
      useCallback: Kv,
      useContext: It,
      useEffect: Af,
      useImperativeHandle: Qv,
      useInsertionEffect: Vv,
      useLayoutEffect: Gv,
      useMemo: Xv,
      useReducer: Qu,
      useRef: Yv,
      useState: function () {
        return Qu(va);
      },
      useDebugValue: zf,
      useDeferredValue: function (e) {
        var t = Ft();
        return Jv(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = Qu(va)[0],
          t = Ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Av,
      useSyncExternalStore: zv,
      useId: Zv,
      unstable_isNewReconciler: !1,
    },
    mx = {
      readContext: It,
      useCallback: Kv,
      useContext: It,
      useEffect: Af,
      useImperativeHandle: Qv,
      useInsertionEffect: Vv,
      useLayoutEffect: Gv,
      useMemo: Xv,
      useReducer: Ku,
      useRef: Yv,
      useState: function () {
        return Ku(va);
      },
      useDebugValue: zf,
      useDeferredValue: function (e) {
        var t = Ft();
        return De === null ? (t.memoizedState = e) : Jv(t, De.memoizedState, e);
      },
      useTransition: function () {
        var e = Ku(va)[0],
          t = Ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Av,
      useSyncExternalStore: zv,
      useId: Zv,
      unstable_isNewReconciler: !1,
    };
  function Ht(e, t) {
    if (e && e.defaultProps) {
      (t = be({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Zc(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : be({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ql = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? gs(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = rt(),
        s = Cr(e),
        i = Rn(r, s);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Tr(e, i, s)),
        t !== null && (Kt(t, e, s, r), jo(t, e, s));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = rt(),
        s = Cr(e),
        i = Rn(r, s);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Tr(e, i, s)),
        t !== null && (Kt(t, e, s, r), jo(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = rt(),
        r = Cr(e),
        s = Rn(n, r);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = Tr(e, s, r)),
        t !== null && (Kt(t, e, r, n), jo(t, e, r));
    },
  };
  function Np(e, t, n, r, s, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ca(n, r) || !ca(s, i)
          : !0
    );
  }
  function ry(e, t, n) {
    var r = !1,
      s = Lr,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = It(i))
        : ((s = ft(t) ? as : Je.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? li(e, s) : Lr)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ql),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Lp(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
  }
  function ed(e, t, n, r) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Nf(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (s.context = It(i))
      : ((i = ft(t) ? as : Je.current), (s.context = li(e, i))),
      (s.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Zc(e, t, i, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((t = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && Ql.enqueueReplaceState(s, s.state, null),
        pl(e, n, s, r),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fi(e, t) {
    try {
      var n = "",
        r = t;
      do (n += B1(r)), (r = r.return);
      while (r);
      var s = n;
    } catch (i) {
      s =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Xu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function td(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var gx = typeof WeakMap == "function" ? WeakMap : Map;
  function sy(e, t, n) {
    (n = Rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        wl || ((wl = !0), (dd = r)), td(e, t);
      }),
      n
    );
  }
  function iy(e, t, n) {
    (n = Rn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      (n.payload = function () {
        return r(s);
      }),
        (n.callback = function () {
          td(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          td(e, t),
            typeof r != "function" &&
              (kr === null ? (kr = new Set([this])) : kr.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function Rp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new gx();
      var s = new Set();
      r.set(t, s);
    } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
    s.has(n) || (s.add(n), (e = Mx.bind(null, e, t, n)), t.then(e, e));
  }
  function jp(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Dp(e, t, n, r, s) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = s), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Rn(-1, 1)), (t.tag = 2), Tr(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var vx = Bn.ReactCurrentOwner,
    ct = !1;
  function tt(e, t, n, r) {
    t.child = e === null ? jv(t, null, n, r) : ci(t, e.child, n, r);
  }
  function Ip(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return (
      Us(t, s),
      (r = If(e, t, n, r, i, s)),
      (n = Ff()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          $n(e, t, s))
        : (ye && n && bf(t), (t.flags |= 1), tt(e, t, r, s), t.child)
    );
  }
  function Fp(e, t, n, r, s) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Gf(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), ay(e, t, i, r, s))
        : ((e = $o(n.type, null, r, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & s))) {
      var a = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ca), n(a, r) && e.ref === t.ref)
      )
        return $n(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = Pr(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ay(e, t, n, r, s) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ca(i, r) && e.ref === t.ref)
        if (((ct = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
          e.flags & 131072 && (ct = !0);
        else return (t.lanes = e.lanes), $n(e, t, s);
    }
    return nd(e, t, n, r, s);
  }
  function oy(e, t, n) {
    var r = t.pendingProps,
      s = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(Ds, yt),
          (yt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(Ds, yt),
            (yt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          ce(Ds, yt),
          (yt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(Ds, yt),
        (yt |= r);
    return tt(e, t, s, n), t.child;
  }
  function ly(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function nd(e, t, n, r, s) {
    var i = ft(n) ? as : Je.current;
    return (
      (i = li(t, i)),
      Us(t, s),
      (n = If(e, t, n, r, i, s)),
      (r = Ff()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          $n(e, t, s))
        : (ye && r && bf(t), (t.flags |= 1), tt(e, t, n, s), t.child)
    );
  }
  function Ap(e, t, n, r, s) {
    if (ft(n)) {
      var i = !0;
      ul(t);
    } else i = !1;
    if ((Us(t, s), t.stateNode === null))
      Fo(e, t), ry(t, n, r), ed(t, n, r, s), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        o = t.memoizedProps;
      a.props = o;
      var l = a.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = It(u))
        : ((u = ft(n) ? as : Je.current), (u = li(t, u)));
      var c = n.getDerivedStateFromProps,
        d =
          typeof c == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      d ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((o !== r || l !== u) && Lp(t, a, r, u)),
        (tr = !1);
      var p = t.memoizedState;
      (a.state = p),
        pl(t, r, a, s),
        (l = t.memoizedState),
        o !== r || p !== l || dt.current || tr
          ? (typeof c == "function" && (Zc(t, n, c, r), (l = t.memoizedState)),
            (o = tr || Np(t, n, o, r, p, l, u))
              ? (d ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (a.props = r),
            (a.state = l),
            (a.context = u),
            (r = o))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        Iv(e, t),
        (o = t.memoizedProps),
        (u = t.type === t.elementType ? o : Ht(t.type, o)),
        (a.props = u),
        (d = t.pendingProps),
        (p = a.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = It(l))
          : ((l = ft(n) ? as : Je.current), (l = li(t, l)));
      var S = n.getDerivedStateFromProps;
      (c =
        typeof S == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((o !== d || p !== l) && Lp(t, a, r, l)),
        (tr = !1),
        (p = t.memoizedState),
        (a.state = p),
        pl(t, r, a, s);
      var g = t.memoizedState;
      o !== d || p !== g || dt.current || tr
        ? (typeof S == "function" && (Zc(t, n, S, r), (g = t.memoizedState)),
          (u = tr || Np(t, n, u, r, p, g, l) || !1)
            ? (c ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, g, l),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, g, l)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (o === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = g)),
          (a.props = r),
          (a.state = g),
          (a.context = l),
          (r = u))
        : (typeof a.componentDidUpdate != "function" ||
            (o === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return rd(e, t, n, r, i, s);
  }
  function rd(e, t, n, r, s, i) {
    ly(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return s && _p(t, n, !1), $n(e, t, i);
    (r = t.stateNode), (vx.current = t);
    var o =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = ci(t, e.child, null, i)), (t.child = ci(t, null, o, i)))
        : tt(e, t, o, i),
      (t.memoizedState = r.state),
      s && _p(t, n, !0),
      t.child
    );
  }
  function uy(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ep(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ep(e, t.context, !1),
      Lf(e, t.containerInfo);
  }
  function zp(e, t, n, r, s) {
    return ui(), kf(s), (t.flags |= 256), tt(e, t, n, r), t.child;
  }
  var sd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function id(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function cy(e, t, n) {
    var r = t.pendingProps,
      s = Ee.current,
      i = !1,
      a = (t.flags & 128) !== 0,
      o;
    if (
      ((o = a) ||
        (o = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      o
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      ce(Ee, s & 1),
      e === null)
    )
      return (
        Xc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((a = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (a = { mode: "hidden", children: a }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = a))
                  : (i = Jl(a, r, 0, null)),
                (e = rs(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = id(n)),
                (t.memoizedState = sd),
                e)
              : $f(t, a))
      );
    if (((s = e.memoizedState), s !== null && ((o = s.dehydrated), o !== null)))
      return yx(e, t, a, r, o, s, n);
    if (i) {
      (i = r.fallback), (a = t.mode), (s = e.child), (o = s.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(a & 1) && t.child !== s
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = Pr(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
        o !== null ? (i = Pr(o, i)) : ((i = rs(i, a, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? id(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = sd),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Pr(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function $f(e, t) {
    return (
      (t = Jl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function mo(e, t, n, r) {
    return (
      r !== null && kf(r),
      ci(t, e.child, null, n),
      (e = $f(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function yx(e, t, n, r, s, i, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Xu(Error(N(422)))), mo(e, t, a, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (s = t.mode),
            (r = Jl({ mode: "visible", children: r.children }, s, 0, null)),
            (i = rs(i, s, a, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            t.mode & 1 && ci(t, e.child, null, a),
            (t.child.memoizedState = id(a)),
            (t.memoizedState = sd),
            i);
    if (!(t.mode & 1)) return mo(e, t, a, null);
    if (s.data === "$!") {
      if (((r = s.nextSibling && s.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o), (i = Error(N(419))), (r = Xu(i, r, void 0)), mo(e, t, a, r)
      );
    }
    if (((o = (a & e.childLanes) !== 0), ct || o)) {
      if (((r = Ue), r !== null)) {
        switch (a & -a) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        (s = s & (r.suspendedLanes | a) ? 0 : s),
          s !== 0 &&
            s !== i.retryLane &&
            ((i.retryLane = s), zn(e, s), Kt(r, e, s, -1));
      }
      return Vf(), (r = Xu(Error(N(421)))), mo(e, t, a, r);
    }
    return s.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Nx.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (St = br(s.nextSibling)),
        (xt = t),
        (ye = !0),
        (Yt = null),
        e !== null &&
          ((Nt[Lt++] = On),
          (Nt[Lt++] = Mn),
          (Nt[Lt++] = os),
          (On = e.id),
          (Mn = e.overflow),
          (os = t)),
        (t = $f(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function $p(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Jc(e.return, t, n);
  }
  function Ju(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: s,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = s));
  }
  function dy(e, t, n) {
    var r = t.pendingProps,
      s = r.revealOrder,
      i = r.tail;
    if ((tt(e, t, r.children, n), (r = Ee.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $p(e, n, t);
          else if (e.tag === 19) $p(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ce(Ee, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (s) {
        case "forwards":
          for (n = t.child, s = null; n !== null; )
            (e = n.alternate),
              e !== null && ml(e) === null && (s = n),
              (n = n.sibling);
          (n = s),
            n === null
              ? ((s = t.child), (t.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            Ju(t, !1, s, n, i);
          break;
        case "backwards":
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && ml(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = n), (n = s), (s = e);
          }
          Ju(t, !0, n, null, i);
          break;
        case "together":
          Ju(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Fo(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $n(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (us |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Pr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Pr(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function wx(e, t, n) {
    switch (t.tag) {
      case 3:
        uy(t), ui();
        break;
      case 5:
        Fv(t);
        break;
      case 1:
        ft(t.type) && ul(t);
        break;
      case 4:
        Lf(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          s = t.memoizedProps.value;
        ce(fl, r._currentValue), (r._currentValue = s);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(Ee, Ee.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? cy(e, t, n)
              : (ce(Ee, Ee.current & 1),
                (e = $n(e, t, n)),
                e !== null ? e.sibling : null);
        ce(Ee, Ee.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return dy(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          ce(Ee, Ee.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), oy(e, t, n);
    }
    return $n(e, t, n);
  }
  var fy, ad, hy, py;
  fy = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  ad = function () {};
  hy = function (e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      (e = t.stateNode), Vr(pn.current);
      var i = null;
      switch (n) {
        case "input":
          (s = Pc(e, s)), (r = Pc(e, r)), (i = []);
          break;
        case "select":
          (s = be({}, s, { value: void 0 })),
            (r = be({}, r, { value: void 0 })),
            (i = []);
          break;
        case "textarea":
          (s = Nc(e, s)), (r = Nc(e, r)), (i = []);
          break;
        default:
          typeof s.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = ol);
      }
      Rc(n, r);
      var a;
      n = null;
      for (u in s)
        if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
          if (u === "style") {
            var o = s[u];
            for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (ra.hasOwnProperty(u)
                ? i || (i = [])
                : (i = i || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (
          ((o = s != null ? s[u] : void 0),
          r.hasOwnProperty(u) && l !== o && (l != null || o != null))
        )
          if (u === "style")
            if (o) {
              for (a in o)
                !o.hasOwnProperty(a) ||
                  (l && l.hasOwnProperty(a)) ||
                  (n || (n = {}), (n[a] = ""));
              for (a in l)
                l.hasOwnProperty(a) &&
                  o[a] !== l[a] &&
                  (n || (n = {}), (n[a] = l[a]));
            } else n || (i || (i = []), i.push(u, n)), (n = l);
          else
            u === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (o = o ? o.__html : void 0),
                l != null && o !== l && (i = i || []).push(u, l))
              : u === "children"
                ? (typeof l != "string" && typeof l != "number") ||
                  (i = i || []).push(u, "" + l)
                : u !== "suppressContentEditableWarning" &&
                  u !== "suppressHydrationWarning" &&
                  (ra.hasOwnProperty(u)
                    ? (l != null && u === "onScroll" && fe("scroll", e),
                      i || o === l || (i = []))
                    : (i = i || []).push(u, l));
      }
      n && (i = i || []).push("style", n);
      var u = i;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  py = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ji(e, t) {
    if (!ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags & 14680064),
          (r |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags),
          (r |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Sx(e, t, n) {
    var r = t.pendingProps;
    switch ((Tf(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qe(t), null;
      case 1:
        return ft(t.type) && ll(), qe(t), null;
      case 3:
        return (
          (r = t.stateNode),
          di(),
          he(dt),
          he(Je),
          jf(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ho(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Yt !== null && (pd(Yt), (Yt = null)))),
          ad(e, t),
          qe(t),
          null
        );
      case 5:
        Rf(t);
        var s = Vr(ma.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          hy(e, t, n, r, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(N(166));
            return qe(t), null;
          }
          if (((e = Vr(pn.current)), ho(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[dn] = t), (r[ha] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Bi.length; s++) fe(Bi[s], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                Qh(r, i), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                Xh(r, i), fe("invalid", r);
            }
            Rc(n, i), (s = null);
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var o = i[a];
                a === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (i.suppressHydrationWarning !== !0 &&
                        fo(r.textContent, o, e),
                      (s = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (i.suppressHydrationWarning !== !0 &&
                        fo(r.textContent, o, e),
                      (s = ["children", "" + o]))
                  : ra.hasOwnProperty(a) &&
                    o != null &&
                    a === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                ro(r), Kh(r, i, !0);
                break;
              case "textarea":
                ro(r), Jh(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ol);
            }
            (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = s.nodeType === 9 ? s : s.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Hg(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = a.createElement(n, { is: r.is }))
                    : ((e = a.createElement(n)),
                      n === "select" &&
                        ((a = e),
                        r.multiple
                          ? (a.multiple = !0)
                          : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[dn] = t),
              (e[ha] = r),
              fy(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = jc(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (s = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (s = r);
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Bi.length; s++) fe(Bi[s], e);
                  s = r;
                  break;
                case "source":
                  fe("error", e), (s = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (s = r);
                  break;
                case "details":
                  fe("toggle", e), (s = r);
                  break;
                case "input":
                  Qh(e, r), (s = Pc(e, r)), fe("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (s = be({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  Xh(e, r), (s = Nc(e, r)), fe("invalid", e);
                  break;
                default:
                  s = r;
              }
              Rc(n, s), (o = s);
              for (i in o)
                if (o.hasOwnProperty(i)) {
                  var l = o[i];
                  i === "style"
                    ? Yg(e, l)
                    : i === "dangerouslySetInnerHTML"
                      ? ((l = l ? l.__html : void 0), l != null && Bg(e, l))
                      : i === "children"
                        ? typeof l == "string"
                          ? (n !== "textarea" || l !== "") && sa(e, l)
                          : typeof l == "number" && sa(e, "" + l)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (ra.hasOwnProperty(i)
                            ? l != null && i === "onScroll" && fe("scroll", e)
                            : l != null && cf(e, i, l, a));
                }
              switch (n) {
                case "input":
                  ro(e), Kh(e, r, !1);
                  break;
                case "textarea":
                  ro(e), Jh(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Nr(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Fs(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        Fs(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = ol);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return qe(t), null;
      case 6:
        if (e && t.stateNode != null) py(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
          if (((n = Vr(ma.current)), Vr(pn.current), ho(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dn] = t),
              (i = r.nodeValue !== n) && ((e = xt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  fo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    fo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dn] = t),
              (t.stateNode = r);
        }
        return qe(t), null;
      case 13:
        if (
          (he(Ee),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ye && St !== null && t.mode & 1 && !(t.flags & 128))
            Lv(), ui(), (t.flags |= 98560), (i = !1);
          else if (((i = ho(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(N(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(N(317));
              i[dn] = t;
            } else
              ui(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            qe(t), (i = !1);
          } else Yt !== null && (pd(Yt), (Yt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ee.current & 1 ? Fe === 0 && (Fe = 3) : Vf())),
            t.updateQueue !== null && (t.flags |= 4),
            qe(t),
            null);
      case 4:
        return (
          di(),
          ad(e, t),
          e === null && da(t.stateNode.containerInfo),
          qe(t),
          null
        );
      case 10:
        return Of(t.type._context), qe(t), null;
      case 17:
        return ft(t.type) && ll(), qe(t), null;
      case 19:
        if ((he(Ee), (i = t.memoizedState), i === null)) return qe(t), null;
        if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (r) ji(i, !1);
          else {
            if (Fe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = ml(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      ji(i, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (a = i.alternate),
                      a === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = a.childLanes),
                          (i.lanes = a.lanes),
                          (i.child = a.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = a.memoizedProps),
                          (i.memoizedState = a.memoizedState),
                          (i.updateQueue = a.updateQueue),
                          (i.type = a.type),
                          (e = a.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ce(Ee, (Ee.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Ne() > hi &&
              ((t.flags |= 128), (r = !0), ji(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ml(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                ji(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !ye)
              )
                return qe(t), null;
            } else
              2 * Ne() - i.renderingStartTime > hi &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), ji(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = i.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (i.last = a));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Ne()),
            (t.sibling = null),
            (n = Ee.current),
            ce(Ee, r ? (n & 1) | 2 : n & 1),
            t)
          : (qe(t), null);
      case 22:
      case 23:
        return (
          Yf(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? yt & 1073741824 &&
              (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, t.tag));
  }
  function xx(e, t) {
    switch ((Tf(t), t.tag)) {
      case 1:
        return (
          ft(t.type) && ll(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          di(),
          he(dt),
          he(Je),
          jf(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Rf(t), null;
      case 13:
        if (
          (he(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(N(340));
          ui();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return he(Ee), null;
      case 4:
        return di(), null;
      case 10:
        return Of(t.type._context), null;
      case 22:
      case 23:
        return Yf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var go = !1,
    Ke = !1,
    Ex = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
  function js(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function od(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var Up = !1;
  function _x(e, t) {
    if (((Wc = sl), (e = wv()), _f(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var s = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              o = -1,
              l = -1,
              u = 0,
              c = 0,
              d = e,
              p = null;
            t: for (;;) {
              for (
                var S;
                d !== n || (s !== 0 && d.nodeType !== 3) || (o = a + s),
                  d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                  d.nodeType === 3 && (a += d.nodeValue.length),
                  (S = d.firstChild) !== null;

              )
                (p = d), (d = S);
              for (;;) {
                if (d === e) break t;
                if (
                  (p === n && ++u === s && (o = a),
                  p === i && ++c === r && (l = a),
                  (S = d.nextSibling) !== null)
                )
                  break;
                (d = p), (p = d.parentNode);
              }
              d = S;
            }
            n = o === -1 || l === -1 ? null : { start: o, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Yc = { focusedElem: e, selectionRange: n }, sl = !1, z = t;
      z !== null;

    )
      if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (z = e);
      else
        for (; z !== null; ) {
          t = z;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var v = g.memoizedProps,
                      w = g.memoizedState,
                      m = t.stateNode,
                      f = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? v : Ht(t.type, v),
                        w
                      );
                    m.__reactInternalSnapshotBeforeUpdate = f;
                  }
                  break;
                case 3:
                  var h = t.stateNode.containerInfo;
                  h.nodeType === 1
                    ? (h.textContent = "")
                    : h.nodeType === 9 &&
                      h.documentElement &&
                      h.removeChild(h.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(N(163));
              }
          } catch (E) {
            Ce(t, t.return, E);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (z = e);
            break;
          }
          z = t.return;
        }
    return (g = Up), (Up = !1), g;
  }
  function Ji(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var s = (r = r.next);
      do {
        if ((s.tag & e) === e) {
          var i = s.destroy;
          (s.destroy = void 0), i !== void 0 && od(t, n, i);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Kl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ld(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function my(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), my(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[dn],
          delete t[ha],
          delete t[qc],
          delete t[ix],
          delete t[ax])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function gy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Hp(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || gy(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ud(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ol));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ud(e, t, n), e = e.sibling; e !== null; )
        ud(e, t, n), (e = e.sibling);
  }
  function cd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (cd(e, t, n), e = e.sibling; e !== null; )
        cd(e, t, n), (e = e.sibling);
  }
  var Be = null,
    Wt = !1;
  function Qn(e, t, n) {
    for (n = n.child; n !== null; ) vy(e, t, n), (n = n.sibling);
  }
  function vy(e, t, n) {
    if (hn && typeof hn.onCommitFiberUnmount == "function")
      try {
        hn.onCommitFiberUnmount(Hl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ke || js(n, t);
      case 6:
        var r = Be,
          s = Wt;
        (Be = null),
          Qn(e, t, n),
          (Be = r),
          (Wt = s),
          Be !== null &&
            (Wt
              ? ((e = Be),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Be.removeChild(n.stateNode));
        break;
      case 18:
        Be !== null &&
          (Wt
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8
                ? Yu(e.parentNode, n)
                : e.nodeType === 1 && Yu(e, n),
              la(e))
            : Yu(Be, n.stateNode));
        break;
      case 4:
        (r = Be),
          (s = Wt),
          (Be = n.stateNode.containerInfo),
          (Wt = !0),
          Qn(e, t, n),
          (Be = r),
          (Wt = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ke &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          s = r = r.next;
          do {
            var i = s,
              a = i.destroy;
            (i = i.tag),
              a !== void 0 && (i & 2 || i & 4) && od(n, t, a),
              (s = s.next);
          } while (s !== r);
        }
        Qn(e, t, n);
        break;
      case 1:
        if (
          !Ke &&
          (js(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (o) {
            Ce(n, t, o);
          }
        Qn(e, t, n);
        break;
      case 21:
        Qn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ke = (r = Ke) || n.memoizedState !== null), Qn(e, t, n), (Ke = r))
          : Qn(e, t, n);
        break;
      default:
        Qn(e, t, n);
    }
  }
  function Bp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ex()),
        t.forEach(function (r) {
          var s = Lx.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(s, s));
        });
    }
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var s = n[r];
        try {
          var i = e,
            a = t,
            o = a;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                (Be = o.stateNode), (Wt = !1);
                break e;
              case 3:
                (Be = o.stateNode.containerInfo), (Wt = !0);
                break e;
              case 4:
                (Be = o.stateNode.containerInfo), (Wt = !0);
                break e;
            }
            o = o.return;
          }
          if (Be === null) throw Error(N(160));
          vy(i, a, s), (Be = null), (Wt = !1);
          var l = s.alternate;
          l !== null && (l.return = null), (s.return = null);
        } catch (u) {
          Ce(s, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) yy(t, e), (t = t.sibling);
  }
  function yy(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ut(t, e), nn(e), r & 4)) {
          try {
            Ji(3, e, e.return), Kl(3, e);
          } catch (v) {
            Ce(e, e.return, v);
          }
          try {
            Ji(5, e, e.return);
          } catch (v) {
            Ce(e, e.return, v);
          }
        }
        break;
      case 1:
        Ut(t, e), nn(e), r & 512 && n !== null && js(n, n.return);
        break;
      case 5:
        if (
          (Ut(t, e),
          nn(e),
          r & 512 && n !== null && js(n, n.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            sa(s, "");
          } catch (v) {
            Ce(e, e.return, v);
          }
        }
        if (r & 4 && ((s = e.stateNode), s != null)) {
          var i = e.memoizedProps,
            a = n !== null ? n.memoizedProps : i,
            o = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              o === "input" && i.type === "radio" && i.name != null && $g(s, i),
                jc(o, a);
              var u = jc(o, i);
              for (a = 0; a < l.length; a += 2) {
                var c = l[a],
                  d = l[a + 1];
                c === "style"
                  ? Yg(s, d)
                  : c === "dangerouslySetInnerHTML"
                    ? Bg(s, d)
                    : c === "children"
                      ? sa(s, d)
                      : cf(s, c, d, u);
              }
              switch (o) {
                case "input":
                  Oc(s, i);
                  break;
                case "textarea":
                  Ug(s, i);
                  break;
                case "select":
                  var p = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!i.multiple;
                  var S = i.value;
                  S != null
                    ? Fs(s, !!i.multiple, S, !1)
                    : p !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Fs(s, !!i.multiple, i.defaultValue, !0)
                        : Fs(s, !!i.multiple, i.multiple ? [] : "", !1));
              }
              s[ha] = i;
            } catch (v) {
              Ce(e, e.return, v);
            }
        }
        break;
      case 6:
        if ((Ut(t, e), nn(e), r & 4)) {
          if (e.stateNode === null) throw Error(N(162));
          (s = e.stateNode), (i = e.memoizedProps);
          try {
            s.nodeValue = i;
          } catch (v) {
            Ce(e, e.return, v);
          }
        }
        break;
      case 3:
        if (
          (Ut(t, e), nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            la(t.containerInfo);
          } catch (v) {
            Ce(e, e.return, v);
          }
        break;
      case 4:
        Ut(t, e), nn(e);
        break;
      case 13:
        Ut(t, e),
          nn(e),
          (s = e.child),
          s.flags & 8192 &&
            ((i = s.memoizedState !== null),
            (s.stateNode.isHidden = i),
            !i ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (Bf = Ne())),
          r & 4 && Bp(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ke = (u = Ke) || c), Ut(t, e), (Ke = u)) : Ut(t, e),
          nn(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
          )
            for (z = e, c = e.child; c !== null; ) {
              for (d = z = c; z !== null; ) {
                switch (((p = z), (S = p.child), p.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ji(4, p, p.return);
                    break;
                  case 1:
                    js(p, p.return);
                    var g = p.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (r = p), (n = p.return);
                      try {
                        (t = r),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (v) {
                        Ce(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    js(p, p.return);
                    break;
                  case 22:
                    if (p.memoizedState !== null) {
                      Yp(d);
                      continue;
                    }
                }
                S !== null ? ((S.return = p), (z = S)) : Yp(d);
              }
              c = c.sibling;
            }
          e: for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  (s = d.stateNode),
                    u
                      ? ((i = s.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((o = d.stateNode),
                        (l = d.memoizedProps.style),
                        (a =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (o.style.display = Wg("display", a)));
                } catch (v) {
                  Ce(e, e.return, v);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (v) {
                  Ce(e, e.return, v);
                }
            } else if (
              ((d.tag !== 22 && d.tag !== 23) ||
                d.memoizedState === null ||
                d === e) &&
              d.child !== null
            ) {
              (d.child.return = d), (d = d.child);
              continue;
            }
            if (d === e) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e) break e;
              c === d && (c = null), (d = d.return);
            }
            c === d && (c = null),
              (d.sibling.return = d.return),
              (d = d.sibling);
          }
        }
        break;
      case 19:
        Ut(t, e), nn(e), r & 4 && Bp(e);
        break;
      case 21:
        break;
      default:
        Ut(t, e), nn(e);
    }
  }
  function nn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (gy(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(N(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (sa(s, ""), (r.flags &= -33));
            var i = Hp(e);
            cd(e, i, s);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              o = Hp(e);
            ud(e, o, a);
            break;
          default:
            throw Error(N(161));
        }
      } catch (l) {
        Ce(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bx(e, t, n) {
    (z = e), wy(e);
  }
  function wy(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var s = z,
        i = s.child;
      if (s.tag === 22 && r) {
        var a = s.memoizedState !== null || go;
        if (!a) {
          var o = s.alternate,
            l = (o !== null && o.memoizedState !== null) || Ke;
          o = go;
          var u = Ke;
          if (((go = a), (Ke = l) && !u))
            for (z = s; z !== null; )
              (a = z),
                (l = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? Vp(s)
                  : l !== null
                    ? ((l.return = a), (z = l))
                    : Vp(s);
          for (; i !== null; ) (z = i), wy(i), (i = i.sibling);
          (z = s), (go = o), (Ke = u);
        }
        Wp(e);
      } else
        s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (z = i)) : Wp(e);
    }
  }
  function Wp(e) {
    for (; z !== null; ) {
      var t = z;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ke || Kl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ke)
                  if (n === null) r.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      s,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Pp(t, i, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Pp(t, a, n);
                }
                break;
              case 5:
                var o = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = o;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var d = c.dehydrated;
                      d !== null && la(d);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(N(163));
            }
          Ke || (t.flags & 512 && ld(t));
        } catch (p) {
          Ce(t, t.return, p);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function Yp(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function Vp(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Kl(4, t);
            } catch (l) {
              Ce(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                Ce(t, s, l);
              }
            }
            var i = t.return;
            try {
              ld(t);
            } catch (l) {
              Ce(t, i, l);
            }
            break;
          case 5:
            var a = t.return;
            try {
              ld(t);
            } catch (l) {
              Ce(t, a, l);
            }
        }
      } catch (l) {
        Ce(t, t.return, l);
      }
      if (t === e) {
        z = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        (o.return = t.return), (z = o);
        break;
      }
      z = t.return;
    }
  }
  var Tx = Math.ceil,
    yl = Bn.ReactCurrentDispatcher,
    Uf = Bn.ReactCurrentOwner,
    Dt = Bn.ReactCurrentBatchConfig,
    ne = 0,
    Ue = null,
    Re = null,
    We = 0,
    yt = 0,
    Ds = jr(0),
    Fe = 0,
    wa = null,
    us = 0,
    Xl = 0,
    Hf = 0,
    Zi = null,
    ut = null,
    Bf = 0,
    hi = 1 / 0,
    Tn = null,
    wl = !1,
    dd = null,
    kr = null,
    vo = !1,
    gr = null,
    Sl = 0,
    ea = 0,
    fd = null,
    Ao = -1,
    zo = 0;
  function rt() {
    return ne & 6 ? Ne() : Ao !== -1 ? Ao : (Ao = Ne());
  }
  function Cr(e) {
    return e.mode & 1
      ? ne & 2 && We !== 0
        ? We & -We
        : lx.transition !== null
          ? (zo === 0 && (zo = rv()), zo)
          : ((e = ae),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : cv(e.type))),
            e)
      : 1;
  }
  function Kt(e, t, n, r) {
    if (50 < ea) throw ((ea = 0), (fd = null), Error(N(185)));
    Ra(e, n, r),
      (!(ne & 2) || e !== Ue) &&
        (e === Ue && (!(ne & 2) && (Xl |= n), Fe === 4 && rr(e, We)),
        ht(e, r),
        n === 1 &&
          ne === 0 &&
          !(t.mode & 1) &&
          ((hi = Ne() + 500), Gl && Dr()));
  }
  function ht(e, t) {
    var n = e.callbackNode;
    lS(e, t);
    var r = rl(e, e === Ue ? We : 0);
    if (r === 0)
      n !== null && tp(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && tp(n), t === 1))
        e.tag === 0 ? ox(Gp.bind(null, e)) : Ov(Gp.bind(null, e)),
          rx(function () {
            !(ne & 6) && Dr();
          }),
          (n = null);
      else {
        switch (sv(r)) {
          case 1:
            n = mf;
            break;
          case 4:
            n = tv;
            break;
          case 16:
            n = nl;
            break;
          case 536870912:
            n = nv;
            break;
          default:
            n = nl;
        }
        n = Cy(n, Sy.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Sy(e, t) {
    if (((Ao = -1), (zo = 0), ne & 6)) throw Error(N(327));
    var n = e.callbackNode;
    if (Hs() && e.callbackNode !== n) return null;
    var r = rl(e, e === Ue ? We : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = xl(e, r);
    else {
      t = r;
      var s = ne;
      ne |= 2;
      var i = Ey();
      (Ue !== e || We !== t) && ((Tn = null), (hi = Ne() + 500), ns(e, t));
      do
        try {
          Px();
          break;
        } catch (o) {
          xy(e, o);
        }
      while (!0);
      Pf(),
        (yl.current = i),
        (ne = s),
        Re !== null ? (t = 0) : ((Ue = null), (We = 0), (t = Fe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = zc(e)), s !== 0 && ((r = s), (t = hd(e, s)))),
        t === 1)
      )
        throw ((n = wa), ns(e, 0), rr(e, r), ht(e, Ne()), n);
      if (t === 6) rr(e, r);
      else {
        if (
          ((s = e.current.alternate),
          !(r & 30) &&
            !kx(s) &&
            ((t = xl(e, r)),
            t === 2 && ((i = zc(e)), i !== 0 && ((r = i), (t = hd(e, i)))),
            t === 1))
        )
          throw ((n = wa), ns(e, 0), rr(e, r), ht(e, Ne()), n);
        switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            Br(e, ut, Tn);
            break;
          case 3:
            if (
              (rr(e, r),
              (r & 130023424) === r && ((t = Bf + 500 - Ne()), 10 < t))
            ) {
              if (rl(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & r) !== r)) {
                rt(), (e.pingedLanes |= e.suspendedLanes & s);
                break;
              }
              e.timeoutHandle = Gc(Br.bind(null, e, ut, Tn), t);
              break;
            }
            Br(e, ut, Tn);
            break;
          case 4:
            if ((rr(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var a = 31 - Qt(r);
              (i = 1 << a), (a = t[a]), a > s && (s = a), (r &= ~i);
            }
            if (
              ((r = s),
              (r = Ne() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Tx(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Gc(Br.bind(null, e, ut, Tn), r);
              break;
            }
            Br(e, ut, Tn);
            break;
          case 5:
            Br(e, ut, Tn);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return ht(e, Ne()), e.callbackNode === n ? Sy.bind(null, e) : null;
  }
  function hd(e, t) {
    var n = Zi;
    return (
      e.current.memoizedState.isDehydrated && (ns(e, t).flags |= 256),
      (e = xl(e, t)),
      e !== 2 && ((t = ut), (ut = n), t !== null && pd(t)),
      e
    );
  }
  function pd(e) {
    ut === null ? (ut = e) : ut.push.apply(ut, e);
  }
  function kx(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var s = n[r],
              i = s.getSnapshot;
            s = s.value;
            try {
              if (!Xt(i(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function rr(e, t) {
    for (
      t &= ~Hf,
        t &= ~Xl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Qt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Gp(e) {
    if (ne & 6) throw Error(N(327));
    Hs();
    var t = rl(e, 0);
    if (!(t & 1)) return ht(e, Ne()), null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = zc(e);
      r !== 0 && ((t = r), (n = hd(e, r)));
    }
    if (n === 1) throw ((n = wa), ns(e, 0), rr(e, t), ht(e, Ne()), n);
    if (n === 6) throw Error(N(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Br(e, ut, Tn),
      ht(e, Ne()),
      null
    );
  }
  function Wf(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && ((hi = Ne() + 500), Gl && Dr());
    }
  }
  function cs(e) {
    gr !== null && gr.tag === 0 && !(ne & 6) && Hs();
    var t = ne;
    ne |= 1;
    var n = Dt.transition,
      r = ae;
    try {
      if (((Dt.transition = null), (ae = 1), e)) return e();
    } finally {
      (ae = r), (Dt.transition = n), (ne = t), !(ne & 6) && Dr();
    }
  }
  function Yf() {
    (yt = Ds.current), he(Ds);
  }
  function ns(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), nx(n)), Re !== null))
      for (n = Re.return; n !== null; ) {
        var r = n;
        switch ((Tf(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ll();
            break;
          case 3:
            di(), he(dt), he(Je), jf();
            break;
          case 5:
            Rf(r);
            break;
          case 4:
            di();
            break;
          case 13:
            he(Ee);
            break;
          case 19:
            he(Ee);
            break;
          case 10:
            Of(r.type._context);
            break;
          case 22:
          case 23:
            Yf();
        }
        n = n.return;
      }
    if (
      ((Ue = e),
      (Re = e = Pr(e.current, null)),
      (We = yt = t),
      (Fe = 0),
      (wa = null),
      (Hf = Xl = us = 0),
      (ut = Zi = null),
      Yr !== null)
    ) {
      for (t = 0; t < Yr.length; t++)
        if (((n = Yr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var s = r.next,
            i = n.pending;
          if (i !== null) {
            var a = i.next;
            (i.next = s), (r.next = a);
          }
          n.pending = r;
        }
      Yr = null;
    }
    return e;
  }
  function xy(e, t) {
    do {
      var n = Re;
      try {
        if ((Pf(), (Do.current = vl), gl)) {
          for (var r = _e.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), (r = r.next);
          }
          gl = !1;
        }
        if (
          ((ls = 0),
          ($e = De = _e = null),
          (Xi = !1),
          (ga = 0),
          (Uf.current = null),
          n === null || n.return === null)
        ) {
          (Fe = 1), (wa = t), (Re = null);
          break;
        }
        e: {
          var i = e,
            a = n.return,
            o = n,
            l = t;
          if (
            ((t = We),
            (o.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              c = o,
              d = c.tag;
            if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
              var p = c.alternate;
              p
                ? ((c.updateQueue = p.updateQueue),
                  (c.memoizedState = p.memoizedState),
                  (c.lanes = p.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var S = jp(a);
            if (S !== null) {
              (S.flags &= -257),
                Dp(S, a, o, i, t),
                S.mode & 1 && Rp(i, u, t),
                (t = S),
                (l = u);
              var g = t.updateQueue;
              if (g === null) {
                var v = new Set();
                v.add(l), (t.updateQueue = v);
              } else g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Rp(i, u, t), Vf();
                break e;
              }
              l = Error(N(426));
            }
          } else if (ye && o.mode & 1) {
            var w = jp(a);
            if (w !== null) {
              !(w.flags & 65536) && (w.flags |= 256),
                Dp(w, a, o, i, t),
                kf(fi(l, o));
              break e;
            }
          }
          (i = l = fi(l, o)),
            Fe !== 4 && (Fe = 2),
            Zi === null ? (Zi = [i]) : Zi.push(i),
            (i = a);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var m = sy(i, l, t);
                Cp(i, m);
                break e;
              case 1:
                o = l;
                var f = i.type,
                  h = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof f.getDerivedStateFromError == "function" ||
                    (h !== null &&
                      typeof h.componentDidCatch == "function" &&
                      (kr === null || !kr.has(h))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var E = iy(i, o, t);
                  Cp(i, E);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        by(n);
      } catch (x) {
        (t = x), Re === n && n !== null && (Re = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ey() {
    var e = yl.current;
    return (yl.current = vl), e === null ? vl : e;
  }
  function Vf() {
    (Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4),
      Ue === null || (!(us & 268435455) && !(Xl & 268435455)) || rr(Ue, We);
  }
  function xl(e, t) {
    var n = ne;
    ne |= 2;
    var r = Ey();
    (Ue !== e || We !== t) && ((Tn = null), ns(e, t));
    do
      try {
        Cx();
        break;
      } catch (s) {
        xy(e, s);
      }
    while (!0);
    if ((Pf(), (ne = n), (yl.current = r), Re !== null)) throw Error(N(261));
    return (Ue = null), (We = 0), Fe;
  }
  function Cx() {
    for (; Re !== null; ) _y(Re);
  }
  function Px() {
    for (; Re !== null && !Z1(); ) _y(Re);
  }
  function _y(e) {
    var t = ky(e.alternate, e, yt);
    (e.memoizedProps = e.pendingProps),
      t === null ? by(e) : (Re = t),
      (Uf.current = null);
  }
  function by(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = xx(n, t)), n !== null)) {
          (n.flags &= 32767), (Re = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Fe = 6), (Re = null);
          return;
        }
      } else if (((n = Sx(n, t, yt)), n !== null)) {
        Re = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    Fe === 0 && (Fe = 5);
  }
  function Br(e, t, n) {
    var r = ae,
      s = Dt.transition;
    try {
      (Dt.transition = null), (ae = 1), Ox(e, t, n, r);
    } finally {
      (Dt.transition = s), (ae = r);
    }
    return null;
  }
  function Ox(e, t, n, r) {
    do Hs();
    while (gr !== null);
    if (ne & 6) throw Error(N(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(N(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (uS(e, i),
      e === Ue && ((Re = Ue = null), (We = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        vo ||
        ((vo = !0),
        Cy(nl, function () {
          return Hs(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Dt.transition), (Dt.transition = null);
      var a = ae;
      ae = 1;
      var o = ne;
      (ne |= 4),
        (Uf.current = null),
        _x(e, n),
        yy(n, e),
        QS(Yc),
        (sl = !!Wc),
        (Yc = Wc = null),
        (e.current = n),
        bx(n),
        eS(),
        (ne = o),
        (ae = a),
        (Dt.transition = i);
    } else e.current = n;
    if (
      (vo && ((vo = !1), (gr = e), (Sl = s)),
      (i = e.pendingLanes),
      i === 0 && (kr = null),
      rS(n.stateNode),
      ht(e, Ne()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
    if (wl) throw ((wl = !1), (e = dd), (dd = null), e);
    return (
      Sl & 1 && e.tag !== 0 && Hs(),
      (i = e.pendingLanes),
      i & 1 ? (e === fd ? ea++ : ((ea = 0), (fd = e))) : (ea = 0),
      Dr(),
      null
    );
  }
  function Hs() {
    if (gr !== null) {
      var e = sv(Sl),
        t = Dt.transition,
        n = ae;
      try {
        if (((Dt.transition = null), (ae = 16 > e ? 16 : e), gr === null))
          var r = !1;
        else {
          if (((e = gr), (gr = null), (Sl = 0), ne & 6)) throw Error(N(331));
          var s = ne;
          for (ne |= 4, z = e.current; z !== null; ) {
            var i = z,
              a = i.child;
            if (z.flags & 16) {
              var o = i.deletions;
              if (o !== null) {
                for (var l = 0; l < o.length; l++) {
                  var u = o[l];
                  for (z = u; z !== null; ) {
                    var c = z;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ji(8, c, i);
                    }
                    var d = c.child;
                    if (d !== null) (d.return = c), (z = d);
                    else
                      for (; z !== null; ) {
                        c = z;
                        var p = c.sibling,
                          S = c.return;
                        if ((my(c), c === u)) {
                          z = null;
                          break;
                        }
                        if (p !== null) {
                          (p.return = S), (z = p);
                          break;
                        }
                        z = S;
                      }
                  }
                }
                var g = i.alternate;
                if (g !== null) {
                  var v = g.child;
                  if (v !== null) {
                    g.child = null;
                    do {
                      var w = v.sibling;
                      (v.sibling = null), (v = w);
                    } while (v !== null);
                  }
                }
                z = i;
              }
            }
            if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (z = a);
            else
              e: for (; z !== null; ) {
                if (((i = z), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ji(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  (m.return = i.return), (z = m);
                  break e;
                }
                z = i.return;
              }
          }
          var f = e.current;
          for (z = f; z !== null; ) {
            a = z;
            var h = a.child;
            if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (z = h);
            else
              e: for (a = f; z !== null; ) {
                if (((o = z), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Kl(9, o);
                    }
                  } catch (x) {
                    Ce(o, o.return, x);
                  }
                if (o === a) {
                  z = null;
                  break e;
                }
                var E = o.sibling;
                if (E !== null) {
                  (E.return = o.return), (z = E);
                  break e;
                }
                z = o.return;
              }
          }
          if (
            ((ne = s),
            Dr(),
            hn && typeof hn.onPostCommitFiberRoot == "function")
          )
            try {
              hn.onPostCommitFiberRoot(Hl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ae = n), (Dt.transition = t);
      }
    }
    return !1;
  }
  function qp(e, t, n) {
    (t = fi(n, t)),
      (t = sy(e, t, 1)),
      (e = Tr(e, t, 1)),
      (t = rt()),
      e !== null && (Ra(e, 1, t), ht(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) qp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qp(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (kr === null || !kr.has(r)))
          ) {
            (e = fi(n, e)),
              (e = iy(t, e, 1)),
              (t = Tr(t, e, 1)),
              (e = rt()),
              t !== null && (Ra(t, 1, e), ht(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = rt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ue === e &&
        (We & n) === n &&
        (Fe === 4 || (Fe === 3 && (We & 130023424) === We && 500 > Ne() - Bf)
          ? ns(e, 0)
          : (Hf |= n)),
      ht(e, t);
  }
  function Ty(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = ao), (ao <<= 1), !(ao & 130023424) && (ao = 4194304))
        : (t = 1));
    var n = rt();
    (e = zn(e, t)), e !== null && (Ra(e, t, n), ht(e, n));
  }
  function Nx(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ty(e, n);
  }
  function Lx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(N(314));
    }
    r !== null && r.delete(t), Ty(e, n);
  }
  var ky;
  ky = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || dt.current) ct = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (ct = !1), wx(e, t, n);
        ct = !!(e.flags & 131072);
      }
    else (ct = !1), ye && t.flags & 1048576 && Mv(t, dl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Fo(e, t), (e = t.pendingProps);
        var s = li(t, Je.current);
        Us(t, n), (s = If(null, t, r, e, s, n));
        var i = Ff();
        return (
          (t.flags |= 1),
          typeof s == "object" &&
          s !== null &&
          typeof s.render == "function" &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ft(r) ? ((i = !0), ul(t)) : (i = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              Nf(t),
              (s.updater = Ql),
              (t.stateNode = s),
              (s._reactInternals = t),
              ed(t, r, e, n),
              (t = rd(null, t, r, !0, i, n)))
            : ((t.tag = 0), ye && i && bf(t), tt(null, t, s, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Fo(e, t),
            (e = t.pendingProps),
            (s = r._init),
            (r = s(r._payload)),
            (t.type = r),
            (s = t.tag = jx(r)),
            (e = Ht(r, e)),
            s)
          ) {
            case 0:
              t = nd(null, t, r, e, n);
              break e;
            case 1:
              t = Ap(null, t, r, e, n);
              break e;
            case 11:
              t = Ip(null, t, r, e, n);
              break e;
            case 14:
              t = Fp(null, t, r, Ht(r.type, e), n);
              break e;
          }
          throw Error(N(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          nd(e, t, r, s, n)
        );
      case 1:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          Ap(e, t, r, s, n)
        );
      case 3:
        e: {
          if ((uy(t), e === null)) throw Error(N(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (s = i.element),
            Iv(e, t),
            pl(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (s = fi(Error(N(423)), t)), (t = zp(e, t, r, n, s));
              break e;
            } else if (r !== s) {
              (s = fi(Error(N(424)), t)), (t = zp(e, t, r, n, s));
              break e;
            } else
              for (
                St = br(t.stateNode.containerInfo.firstChild),
                  xt = t,
                  ye = !0,
                  Yt = null,
                  n = jv(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((ui(), r === s)) {
              t = $n(e, t, n);
              break e;
            }
            tt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Fv(t),
          e === null && Xc(t),
          (r = t.type),
          (s = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = s.children),
          Vc(r, s) ? (a = null) : i !== null && Vc(r, i) && (t.flags |= 32),
          ly(e, t),
          tt(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && Xc(t), null;
      case 13:
        return cy(e, t, n);
      case 4:
        return (
          Lf(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = ci(t, null, r, n)) : tt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          Ip(e, t, r, s, n)
        );
      case 7:
        return tt(e, t, t.pendingProps, n), t.child;
      case 8:
        return tt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return tt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (s = t.pendingProps),
            (i = t.memoizedProps),
            (a = s.value),
            ce(fl, r._currentValue),
            (r._currentValue = a),
            i !== null)
          )
            if (Xt(i.value, a)) {
              if (i.children === s.children && !dt.current) {
                t = $n(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var o = i.dependencies;
                if (o !== null) {
                  a = i.child;
                  for (var l = o.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (i.tag === 1) {
                        (l = Rn(-1, n & -n)), (l.tag = 2);
                        var u = i.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null
                            ? (l.next = l)
                            : ((l.next = c.next), (c.next = l)),
                            (u.pending = l);
                        }
                      }
                      (i.lanes |= n),
                        (l = i.alternate),
                        l !== null && (l.lanes |= n),
                        Jc(i.return, n, t),
                        (o.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(N(341));
                  (a.lanes |= n),
                    (o = a.alternate),
                    o !== null && (o.lanes |= n),
                    Jc(a, n, t),
                    (a = i.sibling);
                } else a = i.child;
                if (a !== null) a.return = i;
                else
                  for (a = i; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((i = a.sibling), i !== null)) {
                      (i.return = a.return), (a = i);
                      break;
                    }
                    a = a.return;
                  }
                i = a;
              }
          tt(e, t, s.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (r = t.pendingProps.children),
          Us(t, n),
          (s = It(s)),
          (r = r(s)),
          (t.flags |= 1),
          tt(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (s = Ht(r, t.pendingProps)),
          (s = Ht(r.type, s)),
          Fp(e, t, r, s, n)
        );
      case 15:
        return ay(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (s = t.pendingProps),
          (s = t.elementType === r ? s : Ht(r, s)),
          Fo(e, t),
          (t.tag = 1),
          ft(r) ? ((e = !0), ul(t)) : (e = !1),
          Us(t, n),
          ry(t, r, s),
          ed(t, r, s, n),
          rd(null, t, r, !0, e, n)
        );
      case 19:
        return dy(e, t, n);
      case 22:
        return oy(e, t, n);
    }
    throw Error(N(156, t.tag));
  };
  function Cy(e, t) {
    return ev(e, t);
  }
  function Rx(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function jt(e, t, n, r) {
    return new Rx(e, t, n, r);
  }
  function Gf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function jx(e) {
    if (typeof e == "function") return Gf(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ff)) return 11;
      if (e === hf) return 14;
    }
    return 2;
  }
  function Pr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = jt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function $o(e, t, n, r, s, i) {
    var a = 2;
    if (((r = e), typeof e == "function")) Gf(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case Ts:
          return rs(n.children, s, i, t);
        case df:
          (a = 8), (s |= 8);
          break;
        case bc:
          return (
            (e = jt(12, n, t, s | 2)), (e.elementType = bc), (e.lanes = i), e
          );
        case Tc:
          return (e = jt(13, n, t, s)), (e.elementType = Tc), (e.lanes = i), e;
        case kc:
          return (e = jt(19, n, t, s)), (e.elementType = kc), (e.lanes = i), e;
        case Fg:
          return Jl(n, s, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Dg:
                a = 10;
                break e;
              case Ig:
                a = 9;
                break e;
              case ff:
                a = 11;
                break e;
              case hf:
                a = 14;
                break e;
              case er:
                (a = 16), (r = null);
                break e;
            }
          throw Error(N(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = jt(a, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function rs(e, t, n, r) {
    return (e = jt(7, e, r, t)), (e.lanes = n), e;
  }
  function Jl(e, t, n, r) {
    return (
      (e = jt(22, e, r, t)),
      (e.elementType = Fg),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Zu(e, t, n) {
    return (e = jt(6, e, null, t)), (e.lanes = n), e;
  }
  function ec(e, t, n) {
    return (
      (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Dx(e, t, n, r, s) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ju(0)),
      (this.expirationTimes = ju(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ju(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function qf(e, t, n, r, s, i, a, o, l) {
    return (
      (e = new Dx(e, t, n, o, l)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = jt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Nf(i),
      e
    );
  }
  function Ix(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: bs,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Py(e) {
    if (!e) return Lr;
    e = e._reactInternals;
    e: {
      if (gs(e) !== e || e.tag !== 1) throw Error(N(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ft(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(N(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ft(n)) return Pv(e, n, t);
    }
    return t;
  }
  function Oy(e, t, n, r, s, i, a, o, l) {
    return (
      (e = qf(n, r, !0, e, s, i, a, o, l)),
      (e.context = Py(null)),
      (n = e.current),
      (r = rt()),
      (s = Cr(n)),
      (i = Rn(r, s)),
      (i.callback = t ?? null),
      Tr(n, i, s),
      (e.current.lanes = s),
      Ra(e, s, r),
      ht(e, r),
      e
    );
  }
  function Zl(e, t, n, r) {
    var s = t.current,
      i = rt(),
      a = Cr(s);
    return (
      (n = Py(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Rn(i, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Tr(s, t, a)),
      e !== null && (Kt(e, s, a, i), jo(e, s, a)),
      a
    );
  }
  function El(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Qp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Qf(e, t) {
    Qp(e, t), (e = e.alternate) && Qp(e, t);
  }
  function Fx() {
    return null;
  }
  var My =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Kf(e) {
    this._internalRoot = e;
  }
  eu.prototype.render = Kf.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    Zl(e, t, null, null);
  };
  eu.prototype.unmount = Kf.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      cs(function () {
        Zl(null, e, null, null);
      }),
        (t[An] = null);
    }
  };
  function eu(e) {
    this._internalRoot = e;
  }
  eu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ov();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < nr.length && t !== 0 && t < nr[n].priority; n++);
      nr.splice(n, 0, e), n === 0 && uv(e);
    }
  };
  function Xf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function tu(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Kp() {}
  function Ax(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var u = El(a);
          i.call(u);
        };
      }
      var a = Oy(t, r, e, 0, null, !1, !1, "", Kp);
      return (
        (e._reactRootContainer = a),
        (e[An] = a.current),
        da(e.nodeType === 8 ? e.parentNode : e),
        cs(),
        a
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = El(l);
        o.call(u);
      };
    }
    var l = qf(e, 0, !1, null, null, !1, !1, "", Kp);
    return (
      (e._reactRootContainer = l),
      (e[An] = l.current),
      da(e.nodeType === 8 ? e.parentNode : e),
      cs(function () {
        Zl(t, l, n, r);
      }),
      l
    );
  }
  function nu(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof s == "function") {
        var o = s;
        s = function () {
          var l = El(a);
          o.call(l);
        };
      }
      Zl(t, a, e, s);
    } else a = Ax(n, t, e, s, r);
    return El(a);
  }
  iv = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Hi(t.pendingLanes);
          n !== 0 &&
            (gf(t, n | 1), ht(t, Ne()), !(ne & 6) && ((hi = Ne() + 500), Dr()));
        }
        break;
      case 13:
        cs(function () {
          var r = zn(e, 1);
          if (r !== null) {
            var s = rt();
            Kt(r, e, 1, s);
          }
        }),
          Qf(e, 1);
    }
  };
  vf = function (e) {
    if (e.tag === 13) {
      var t = zn(e, 134217728);
      if (t !== null) {
        var n = rt();
        Kt(t, e, 134217728, n);
      }
      Qf(e, 134217728);
    }
  };
  av = function (e) {
    if (e.tag === 13) {
      var t = Cr(e),
        n = zn(e, t);
      if (n !== null) {
        var r = rt();
        Kt(n, e, t, r);
      }
      Qf(e, t);
    }
  };
  ov = function () {
    return ae;
  };
  lv = function (e, t) {
    var n = ae;
    try {
      return (ae = e), t();
    } finally {
      ae = n;
    }
  };
  Ic = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Oc(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = Vl(r);
              if (!s) throw Error(N(90));
              zg(r), Oc(r, s);
            }
          }
        }
        break;
      case "textarea":
        Ug(e, n);
        break;
      case "select":
        (t = n.value), t != null && Fs(e, !!n.multiple, t, !1);
    }
  };
  qg = Wf;
  Qg = cs;
  var zx = { usingClientEntryPoint: !1, Events: [Da, Os, Vl, Vg, Gg, Wf] },
    Di = {
      findFiberByHostInstance: Wr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    $x = {
      bundleType: Di.bundleType,
      version: Di.version,
      rendererPackageName: Di.rendererPackageName,
      rendererConfig: Di.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Bn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Jg(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Di.findFiberByHostInstance || Fx,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yo.isDisabled && yo.supportsFiber)
      try {
        (Hl = yo.inject($x)), (hn = yo);
      } catch {}
  }
  bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zx;
  bt.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xf(t)) throw Error(N(200));
    return Ix(e, t, null, n);
  };
  bt.createRoot = function (e, t) {
    if (!Xf(e)) throw Error(N(299));
    var n = !1,
      r = "",
      s = My;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
      (t = qf(e, 1, !1, null, null, n, !1, r, s)),
      (e[An] = t.current),
      da(e.nodeType === 8 ? e.parentNode : e),
      new Kf(t)
    );
  };
  bt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(N(188))
        : ((e = Object.keys(e).join(",")), Error(N(268, e)));
    return (e = Jg(t)), (e = e === null ? null : e.stateNode), e;
  };
  bt.flushSync = function (e) {
    return cs(e);
  };
  bt.hydrate = function (e, t, n) {
    if (!tu(t)) throw Error(N(200));
    return nu(null, e, t, !0, n);
  };
  bt.hydrateRoot = function (e, t, n) {
    if (!Xf(e)) throw Error(N(405));
    var r = (n != null && n.hydratedSources) || null,
      s = !1,
      i = "",
      a = My;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (s = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
      (t = Oy(t, null, e, 1, n ?? null, s, !1, i, a)),
      (e[An] = t.current),
      da(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (s = n._getVersion),
          (s = s(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, s])
            : t.mutableSourceEagerHydrationData.push(n, s);
    return new eu(t);
  };
  bt.render = function (e, t, n) {
    if (!tu(t)) throw Error(N(200));
    return nu(null, e, t, !1, n);
  };
  bt.unmountComponentAtNode = function (e) {
    if (!tu(e)) throw Error(N(40));
    return e._reactRootContainer
      ? (cs(function () {
          nu(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[An] = null);
          });
        }),
        !0)
      : !1;
  };
  bt.unstable_batchedUpdates = Wf;
  bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!tu(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return nu(e, t, n, !1, r);
  };
  bt.version = "18.3.1-next-f1338f8080-20240426";
  function Ny() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ny);
      } catch (e) {
        console.error(e);
      }
  }
  Ny(), (Ng.exports = bt);
  var Ly = Ng.exports,
    Ry,
    Xp = Ly;
  (Ry = Xp.createRoot), Xp.hydrateRoot;
  /**
   * @remix-run/router v1.19.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Sa() {
    return (
      (Sa = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Sa.apply(this, arguments)
    );
  }
  var vr;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(vr || (vr = {}));
  const Jp = "popstate";
  function Ux(e) {
    e === void 0 && (e = {});
    function t(r, s) {
      let { pathname: i, search: a, hash: o } = r.location;
      return md(
        "",
        { pathname: i, search: a, hash: o },
        (s.state && s.state.usr) || null,
        (s.state && s.state.key) || "default"
      );
    }
    function n(r, s) {
      return typeof s == "string" ? s : _l(s);
    }
    return Bx(t, n, null, e);
  }
  function Le(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function jy(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function Hx() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Zp(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function md(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      Sa(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? yi(t) : t,
        { state: n, key: (t && t.key) || r || Hx() }
      )
    );
  }
  function _l(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function yi(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function Bx(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: s = document.defaultView, v5Compat: i = !1 } = r,
      a = s.history,
      o = vr.Pop,
      l = null,
      u = c();
    u == null && ((u = 0), a.replaceState(Sa({}, a.state, { idx: u }), ""));
    function c() {
      return (a.state || { idx: null }).idx;
    }
    function d() {
      o = vr.Pop;
      let w = c(),
        m = w == null ? null : w - u;
      (u = w), l && l({ action: o, location: v.location, delta: m });
    }
    function p(w, m) {
      o = vr.Push;
      let f = md(v.location, w, m);
      u = c() + 1;
      let h = Zp(f, u),
        E = v.createHref(f);
      try {
        a.pushState(h, "", E);
      } catch (x) {
        if (x instanceof DOMException && x.name === "DataCloneError") throw x;
        s.location.assign(E);
      }
      i && l && l({ action: o, location: v.location, delta: 1 });
    }
    function S(w, m) {
      o = vr.Replace;
      let f = md(v.location, w, m);
      u = c();
      let h = Zp(f, u),
        E = v.createHref(f);
      a.replaceState(h, "", E),
        i && l && l({ action: o, location: v.location, delta: 0 });
    }
    function g(w) {
      let m =
          s.location.origin !== "null" ? s.location.origin : s.location.href,
        f = typeof w == "string" ? w : _l(w);
      return (
        (f = f.replace(/ $/, "%20")),
        Le(
          m,
          "No window.location.(origin|href) available to create URL for href: " +
            f
        ),
        new URL(f, m)
      );
    }
    let v = {
      get action() {
        return o;
      },
      get location() {
        return e(s, a);
      },
      listen(w) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          s.addEventListener(Jp, d),
          (l = w),
          () => {
            s.removeEventListener(Jp, d), (l = null);
          }
        );
      },
      createHref(w) {
        return t(s, w);
      },
      createURL: g,
      encodeLocation(w) {
        let m = g(w);
        return { pathname: m.pathname, search: m.search, hash: m.hash };
      },
      push: p,
      replace: S,
      go(w) {
        return a.go(w);
      },
    };
    return v;
  }
  var em;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(em || (em = {}));
  function Wx(e, t, n) {
    return n === void 0 && (n = "/"), Yx(e, t, n, !1);
  }
  function Yx(e, t, n, r) {
    let s = typeof t == "string" ? yi(t) : t,
      i = Jf(s.pathname || "/", n);
    if (i == null) return null;
    let a = Dy(e);
    Vx(a);
    let o = null;
    for (let l = 0; o == null && l < a.length; ++l) {
      let u = rE(i);
      o = tE(a[l], u, r);
    }
    return o;
  }
  function Dy(e, t, n, r) {
    t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = "");
    let s = (i, a, o) => {
      let l = {
        relativePath: o === void 0 ? i.path || "" : o,
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: a,
        route: i,
      };
      l.relativePath.startsWith("/") &&
        (Le(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = Or([r, l.relativePath]),
        c = n.concat(l);
      i.children &&
        i.children.length > 0 &&
        (Le(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".')
        ),
        Dy(i.children, t, c, u)),
        !(i.path == null && !i.index) &&
          t.push({ path: u, score: Zx(u, i.index), routesMeta: c });
    };
    return (
      e.forEach((i, a) => {
        var o;
        if (i.path === "" || !((o = i.path) != null && o.includes("?")))
          s(i, a);
        else for (let l of Iy(i.path)) s(i, a, l);
      }),
      t
    );
  }
  function Iy(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      s = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (r.length === 0) return s ? [i, ""] : [i];
    let a = Iy(r.join("/")),
      o = [];
    return (
      o.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
      s && o.push(...a),
      o.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function Vx(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : eE(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
          )
    );
  }
  const Gx = /^:[\w-]+$/,
    qx = 3,
    Qx = 2,
    Kx = 1,
    Xx = 10,
    Jx = -2,
    tm = (e) => e === "*";
  function Zx(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(tm) && (r += Jx),
      t && (r += Qx),
      n
        .filter((s) => !tm(s))
        .reduce((s, i) => s + (Gx.test(i) ? qx : i === "" ? Kx : Xx), r)
    );
  }
  function eE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function tE(e, t, n) {
    let { routesMeta: r } = e,
      s = {},
      i = "/",
      a = [];
    for (let o = 0; o < r.length; ++o) {
      let l = r[o],
        u = o === r.length - 1,
        c = i === "/" ? t : t.slice(i.length) || "/",
        d = nm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
          c
        ),
        p = l.route;
      if (
        (!d &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (d = nm(
            { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
            c
          )),
        !d)
      )
        return null;
      Object.assign(s, d.params),
        a.push({
          params: s,
          pathname: Or([i, d.pathname]),
          pathnameBase: oE(Or([i, d.pathnameBase])),
          route: p,
        }),
        d.pathnameBase !== "/" && (i = Or([i, d.pathnameBase]));
    }
    return a;
  }
  function nm(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = nE(e.path, e.caseSensitive, e.end),
      s = t.match(n);
    if (!s) return null;
    let i = s[0],
      a = i.replace(/(.)\/+$/, "$1"),
      o = s.slice(1);
    return {
      params: r.reduce((u, c, d) => {
        let { paramName: p, isOptional: S } = c;
        if (p === "*") {
          let v = o[d] || "";
          a = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const g = o[d];
        return (
          S && !g ? (u[p] = void 0) : (u[p] = (g || "").replace(/%2F/g, "/")), u
        );
      }, {}),
      pathname: i,
      pathnameBase: a,
      pattern: e,
    };
  }
  function nE(e, t, n) {
    t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      jy(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
      );
    let r = [],
      s =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (a, o, l) => (
              r.push({ paramName: o, isOptional: l != null }),
              l ? "/?([^\\/]+)?" : "/([^\\/]+)"
            )
          );
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
          ? (s += "\\/*$")
          : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
      [new RegExp(s, t ? void 0 : "i"), r]
    );
  }
  function rE(e) {
    try {
      return e
        .split("/")
        .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        jy(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ").")
        ),
        e
      );
    }
  }
  function Jf(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function sE(e, t) {
    t === void 0 && (t = "/");
    let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof e == "string" ? yi(e) : e;
    return {
      pathname: n ? (n.startsWith("/") ? n : iE(n, t)) : t,
      search: lE(r),
      hash: uE(s),
    };
  }
  function iE(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((s) => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
      }),
      n.length > 1 ? n.join("/") : "/"
    );
  }
  function tc(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." +
        t +
        "` field [" +
        JSON.stringify(r) +
        "].  Please separate it out to the ") +
      ("`to." +
        n +
        "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function aE(e) {
    return e.filter(
      (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    );
  }
  function Zf(e, t) {
    let n = aE(e);
    return t
      ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
      : n.map((r) => r.pathnameBase);
  }
  function eh(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string"
      ? (s = yi(e))
      : ((s = Sa({}, e)),
        Le(
          !s.pathname || !s.pathname.includes("?"),
          tc("?", "pathname", "search", s)
        ),
        Le(
          !s.pathname || !s.pathname.includes("#"),
          tc("#", "pathname", "hash", s)
        ),
        Le(!s.search || !s.search.includes("#"), tc("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "",
      a = i ? "/" : s.pathname,
      o;
    if (a == null) o = n;
    else {
      let d = t.length - 1;
      if (!r && a.startsWith("..")) {
        let p = a.split("/");
        for (; p[0] === ".."; ) p.shift(), (d -= 1);
        s.pathname = p.join("/");
      }
      o = d >= 0 ? t[d] : "/";
    }
    let l = sE(s, o),
      u = a && a !== "/" && a.endsWith("/"),
      c = (i || a === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
  }
  const Or = (e) => e.join("/").replace(/\/\/+/g, "/"),
    oE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    lE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    uE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function cE(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  const Fy = ["post", "put", "patch", "delete"];
  new Set(Fy);
  const dE = ["get", ...Fy];
  new Set(dE);
  /**
   * React Router v6.26.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function xa() {
    return (
      (xa = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      xa.apply(this, arguments)
    );
  }
  const th = T.createContext(null),
    fE = T.createContext(null),
    Ir = T.createContext(null),
    ru = T.createContext(null),
    Wn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Ay = T.createContext(null);
  function hE(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    wi() || Le(!1);
    let { basename: r, navigator: s } = T.useContext(Ir),
      { hash: i, pathname: a, search: o } = $y(e, { relative: n }),
      l = a;
    return (
      r !== "/" && (l = a === "/" ? r : Or([r, a])),
      s.createHref({ pathname: l, search: o, hash: i })
    );
  }
  function wi() {
    return T.useContext(ru) != null;
  }
  function Fa() {
    return wi() || Le(!1), T.useContext(ru).location;
  }
  function zy(e) {
    T.useContext(Ir).static || T.useLayoutEffect(e);
  }
  function Yn() {
    let { isDataRoute: e } = T.useContext(Wn);
    return e ? kE() : pE();
  }
  function pE() {
    wi() || Le(!1);
    let e = T.useContext(th),
      { basename: t, future: n, navigator: r } = T.useContext(Ir),
      { matches: s } = T.useContext(Wn),
      { pathname: i } = Fa(),
      a = JSON.stringify(Zf(s, n.v7_relativeSplatPath)),
      o = T.useRef(!1);
    return (
      zy(() => {
        o.current = !0;
      }),
      T.useCallback(
        function (u, c) {
          if ((c === void 0 && (c = {}), !o.current)) return;
          if (typeof u == "number") {
            r.go(u);
            return;
          }
          let d = eh(u, JSON.parse(a), i, c.relative === "path");
          e == null &&
            t !== "/" &&
            (d.pathname = d.pathname === "/" ? t : Or([t, d.pathname])),
            (c.replace ? r.replace : r.push)(d, c.state, c);
        },
        [t, r, a, i, e]
      )
    );
  }
  function Si() {
    let { matches: e } = T.useContext(Wn),
      t = e[e.length - 1];
    return t ? t.params : {};
  }
  function $y(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
      { future: r } = T.useContext(Ir),
      { matches: s } = T.useContext(Wn),
      { pathname: i } = Fa(),
      a = JSON.stringify(Zf(s, r.v7_relativeSplatPath));
    return T.useMemo(() => eh(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
  }
  function mE(e, t) {
    return gE(e, t);
  }
  function gE(e, t, n, r) {
    wi() || Le(!1);
    let { navigator: s } = T.useContext(Ir),
      { matches: i } = T.useContext(Wn),
      a = i[i.length - 1],
      o = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = Fa(),
      c;
    if (t) {
      var d;
      let w = typeof t == "string" ? yi(t) : t;
      l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || Le(!1),
        (c = w);
    } else c = u;
    let p = c.pathname || "/",
      S = p;
    if (l !== "/") {
      let w = l.replace(/^\//, "").split("/");
      S = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/");
    }
    let g = Wx(e, { pathname: S }),
      v = xE(
        g &&
          g.map((w) =>
            Object.assign({}, w, {
              params: Object.assign({}, o, w.params),
              pathname: Or([
                l,
                s.encodeLocation
                  ? s.encodeLocation(w.pathname).pathname
                  : w.pathname,
              ]),
              pathnameBase:
                w.pathnameBase === "/"
                  ? l
                  : Or([
                      l,
                      s.encodeLocation
                        ? s.encodeLocation(w.pathnameBase).pathname
                        : w.pathnameBase,
                    ]),
            })
          ),
        i,
        n,
        r
      );
    return t && v
      ? T.createElement(
          ru.Provider,
          {
            value: {
              location: xa(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                c
              ),
              navigationType: vr.Pop,
            },
          },
          v
        )
      : v;
  }
  function vE() {
    let e = TE(),
      t = cE(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? T.createElement("pre", { style: s }, n) : null,
      null
    );
  }
  const yE = T.createElement(vE, null);
  class wE extends T.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error(
        "React Router caught the following error during render",
        t,
        n
      );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            Wn.Provider,
            { value: this.props.routeContext },
            T.createElement(Ay.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function SE(e) {
    let { routeContext: t, match: n, children: r } = e,
      s = T.useContext(th);
    return (
      s &&
        s.static &&
        s.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (s.staticContext._deepestRenderedBoundaryId = n.route.id),
      T.createElement(Wn.Provider, { value: t }, r)
    );
  }
  function xE(e, t, n, r) {
    var s;
    if (
      (t === void 0 && (t = []),
      n === void 0 && (n = null),
      r === void 0 && (r = null),
      e == null)
    ) {
      var i;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if (
        (i = r) != null &&
        i.v7_partialHydration &&
        t.length === 0 &&
        !n.initialized &&
        n.matches.length > 0
      )
        e = n.matches;
      else return null;
    }
    let a = e,
      o = (s = n) == null ? void 0 : s.errors;
    if (o != null) {
      let c = a.findIndex(
        (d) => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0
      );
      c >= 0 || Le(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
    }
    let l = !1,
      u = -1;
    if (n && r && r.v7_partialHydration)
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (
          ((d.route.HydrateFallback || d.route.hydrateFallbackElement) &&
            (u = c),
          d.route.id)
        ) {
          let { loaderData: p, errors: S } = n,
            g =
              d.route.loader &&
              p[d.route.id] === void 0 &&
              (!S || S[d.route.id] === void 0);
          if (d.route.lazy || g) {
            (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
            break;
          }
        }
      }
    return a.reduceRight((c, d, p) => {
      let S,
        g = !1,
        v = null,
        w = null;
      n &&
        ((S = o && d.route.id ? o[d.route.id] : void 0),
        (v = d.route.errorElement || yE),
        l &&
          (u < 0 && p === 0
            ? ((g = !0), (w = null))
            : u === p &&
              ((g = !0), (w = d.route.hydrateFallbackElement || null))));
      let m = t.concat(a.slice(0, p + 1)),
        f = () => {
          let h;
          return (
            S
              ? (h = v)
              : g
                ? (h = w)
                : d.route.Component
                  ? (h = T.createElement(d.route.Component, null))
                  : d.route.element
                    ? (h = d.route.element)
                    : (h = c),
            T.createElement(SE, {
              match: d,
              routeContext: { outlet: c, matches: m, isDataRoute: n != null },
              children: h,
            })
          );
        };
      return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
        ? T.createElement(wE, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: S,
            children: f(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : f();
    }, null);
  }
  var Uy = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(Uy || {}),
    bl = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(bl || {});
  function EE(e) {
    let t = T.useContext(th);
    return t || Le(!1), t;
  }
  function _E(e) {
    let t = T.useContext(fE);
    return t || Le(!1), t;
  }
  function bE(e) {
    let t = T.useContext(Wn);
    return t || Le(!1), t;
  }
  function Hy(e) {
    let t = bE(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || Le(!1), n.route.id;
  }
  function TE() {
    var e;
    let t = T.useContext(Ay),
      n = _E(bl.UseRouteError),
      r = Hy(bl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
  }
  function kE() {
    let { router: e } = EE(Uy.UseNavigateStable),
      t = Hy(bl.UseNavigateStable),
      n = T.useRef(!1);
    return (
      zy(() => {
        n.current = !0;
      }),
      T.useCallback(
        function (s, i) {
          i === void 0 && (i = {}),
            n.current &&
              (typeof s == "number"
                ? e.navigate(s)
                : e.navigate(s, xa({ fromRouteId: t }, i)));
        },
        [e, t]
      )
    );
  }
  function zr(e) {
    let { to: t, replace: n, state: r, relative: s } = e;
    wi() || Le(!1);
    let { future: i, static: a } = T.useContext(Ir),
      { matches: o } = T.useContext(Wn),
      { pathname: l } = Fa(),
      u = Yn(),
      c = eh(t, Zf(o, i.v7_relativeSplatPath), l, s === "path"),
      d = JSON.stringify(c);
    return (
      T.useEffect(
        () => u(JSON.parse(d), { replace: n, state: r, relative: s }),
        [u, d, s, n, r]
      ),
      null
    );
  }
  function rn(e) {
    Le(!1);
  }
  function CE(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: s = vr.Pop,
      navigator: i,
      static: a = !1,
      future: o,
    } = e;
    wi() && Le(!1);
    let l = t.replace(/^\/*/, "/"),
      u = T.useMemo(
        () => ({
          basename: l,
          navigator: i,
          static: a,
          future: xa({ v7_relativeSplatPath: !1 }, o),
        }),
        [l, o, i, a]
      );
    typeof r == "string" && (r = yi(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: p = "",
        state: S = null,
        key: g = "default",
      } = r,
      v = T.useMemo(() => {
        let w = Jf(c, l);
        return w == null
          ? null
          : {
              location: { pathname: w, search: d, hash: p, state: S, key: g },
              navigationType: s,
            };
      }, [l, c, d, p, S, g, s]);
    return v == null
      ? null
      : T.createElement(
          Ir.Provider,
          { value: u },
          T.createElement(ru.Provider, { children: n, value: v })
        );
  }
  function PE(e) {
    let { children: t, location: n } = e;
    return mE(gd(t), n);
  }
  new Promise(() => {});
  function gd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      T.Children.forEach(e, (r, s) => {
        if (!T.isValidElement(r)) return;
        let i = [...t, s];
        if (r.type === T.Fragment) {
          n.push.apply(n, gd(r.props.children, i));
          return;
        }
        r.type !== rn && Le(!1), !r.props.index || !r.props.children || Le(!1);
        let a = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
        r.props.children && (a.children = gd(r.props.children, i)), n.push(a);
      }),
      n
    );
  }
  /**
   * React Router DOM v6.26.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function vd() {
    return (
      (vd = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      vd.apply(this, arguments)
    );
  }
  function OE(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      s,
      i;
    for (i = 0; i < r.length; i++)
      (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n;
  }
  function ME(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function NE(e, t) {
    return e.button === 0 && (!t || t === "_self") && !ME(e);
  }
  const LE = [
      "onClick",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
      "unstable_viewTransition",
    ],
    RE = "6";
  try {
    window.__reactRouterVersion = RE;
  } catch {}
  const jE = "startTransition",
    rm = M1[jE];
  function DE(e) {
    let { basename: t, children: n, future: r, window: s } = e,
      i = T.useRef();
    i.current == null && (i.current = Ux({ window: s, v5Compat: !0 }));
    let a = i.current,
      [o, l] = T.useState({ action: a.action, location: a.location }),
      { v7_startTransition: u } = r || {},
      c = T.useCallback(
        (d) => {
          u && rm ? rm(() => l(d)) : l(d);
        },
        [l, u]
      );
    return (
      T.useLayoutEffect(() => a.listen(c), [a, c]),
      T.createElement(CE, {
        basename: t,
        children: n,
        location: o.location,
        navigationType: o.action,
        navigator: a,
        future: r,
      })
    );
  }
  const IE =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u",
    FE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    sr = T.forwardRef(function (t, n) {
      let {
          onClick: r,
          relative: s,
          reloadDocument: i,
          replace: a,
          state: o,
          target: l,
          to: u,
          preventScrollReset: c,
          unstable_viewTransition: d,
        } = t,
        p = OE(t, LE),
        { basename: S } = T.useContext(Ir),
        g,
        v = !1;
      if (typeof u == "string" && FE.test(u) && ((g = u), IE))
        try {
          let h = new URL(window.location.href),
            E = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
            x = Jf(E.pathname, S);
          E.origin === h.origin && x != null
            ? (u = x + E.search + E.hash)
            : (v = !0);
        } catch {}
      let w = hE(u, { relative: s }),
        m = AE(u, {
          replace: a,
          state: o,
          target: l,
          preventScrollReset: c,
          relative: s,
          unstable_viewTransition: d,
        });
      function f(h) {
        r && r(h), h.defaultPrevented || m(h);
      }
      return T.createElement(
        "a",
        vd({}, p, { href: g || w, onClick: v || i ? r : f, ref: n, target: l })
      );
    });
  var sm;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(sm || (sm = {}));
  var im;
  (function (e) {
    (e.UseFetcher = "useFetcher"),
      (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(im || (im = {}));
  function AE(e, t) {
    let {
        target: n,
        replace: r,
        state: s,
        preventScrollReset: i,
        relative: a,
        unstable_viewTransition: o,
      } = t === void 0 ? {} : t,
      l = Yn(),
      u = Fa(),
      c = $y(e, { relative: a });
    return T.useCallback(
      (d) => {
        if (NE(d, n)) {
          d.preventDefault();
          let p = r !== void 0 ? r : _l(u) === _l(c);
          l(e, {
            replace: p,
            state: s,
            preventScrollReset: i,
            relative: a,
            unstable_viewTransition: o,
          });
        }
      },
      [u, l, c, r, s, n, e, i, a, o]
    );
  }
  var xi = class {
      constructor() {
        (this.listeners = new Set()),
          (this.subscribe = this.subscribe.bind(this));
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          this.onSubscribe(),
          () => {
            this.listeners.delete(e), this.onUnsubscribe();
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    },
    ds = typeof window > "u" || "Deno" in globalThis;
  function Mt() {}
  function zE(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function yd(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  }
  function By(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  }
  function Bs(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Vt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function am(e, t) {
    const {
      type: n = "all",
      exact: r,
      fetchStatus: s,
      predicate: i,
      queryKey: a,
      stale: o,
    } = e;
    if (a) {
      if (r) {
        if (t.queryHash !== nh(a, t.options)) return !1;
      } else if (!Ea(t.queryKey, a)) return !1;
    }
    if (n !== "all") {
      const l = t.isActive();
      if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
    }
    return !(
      (typeof o == "boolean" && t.isStale() !== o) ||
      (s && s !== t.state.fetchStatus) ||
      (i && !i(t))
    );
  }
  function om(e, t) {
    const { exact: n, status: r, predicate: s, mutationKey: i } = e;
    if (i) {
      if (!t.options.mutationKey) return !1;
      if (n) {
        if (fs(t.options.mutationKey) !== fs(i)) return !1;
      } else if (!Ea(t.options.mutationKey, i)) return !1;
    }
    return !((r && t.state.status !== r) || (s && !s(t)));
  }
  function nh(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || fs)(e);
  }
  function fs(e) {
    return JSON.stringify(e, (t, n) =>
      wd(n)
        ? Object.keys(n)
            .sort()
            .reduce((r, s) => ((r[s] = n[s]), r), {})
        : n
    );
  }
  function Ea(e, t) {
    return e === t
      ? !0
      : typeof e != typeof t
        ? !1
        : e && t && typeof e == "object" && typeof t == "object"
          ? !Object.keys(t).some((n) => !Ea(e[n], t[n]))
          : !1;
  }
  function Wy(e, t) {
    if (e === t) return e;
    const n = lm(e) && lm(t);
    if (n || (wd(e) && wd(t))) {
      const r = n ? e : Object.keys(e),
        s = r.length,
        i = n ? t : Object.keys(t),
        a = i.length,
        o = n ? [] : {};
      let l = 0;
      for (let u = 0; u < a; u++) {
        const c = n ? u : i[u];
        ((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
          ? ((o[c] = void 0), l++)
          : ((o[c] = Wy(e[c], t[c])), o[c] === e[c] && e[c] !== void 0 && l++);
      }
      return s === a && l === s ? e : o;
    }
    return t;
  }
  function Tl(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (e[n] !== t[n]) return !1;
    return !0;
  }
  function lm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
  }
  function wd(e) {
    if (!um(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(
      !um(n) ||
      !n.hasOwnProperty("isPrototypeOf") ||
      Object.getPrototypeOf(e) !== Object.prototype
    );
  }
  function um(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function $E(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  function Sd(e, t, n) {
    return typeof n.structuralSharing == "function"
      ? n.structuralSharing(e, t)
      : n.structuralSharing !== !1
        ? Wy(e, t)
        : t;
  }
  function UE(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
  }
  function HE(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
  }
  var Yy = Symbol();
  function Vy(e, t) {
    return !e.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : !e.queryFn || e.queryFn === Yy
        ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
        : e.queryFn;
  }
  var Qr,
    ar,
    qs,
    ug,
    BE =
      ((ug = class extends xi {
        constructor() {
          super();
          Y(this, Qr);
          Y(this, ar);
          Y(this, qs);
          F(this, qs, (t) => {
            if (!ds && window.addEventListener) {
              const n = () => t();
              return (
                window.addEventListener("visibilitychange", n, !1),
                () => {
                  window.removeEventListener("visibilitychange", n);
                }
              );
            }
          });
        }
        onSubscribe() {
          _(this, ar) || this.setEventListener(_(this, qs));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = _(this, ar)) == null || t.call(this), F(this, ar, void 0));
        }
        setEventListener(t) {
          var n;
          F(this, qs, t),
            (n = _(this, ar)) == null || n.call(this),
            F(
              this,
              ar,
              t((r) => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
              })
            );
        }
        setFocused(t) {
          _(this, Qr) !== t && (F(this, Qr, t), this.onFocus());
        }
        onFocus() {
          const t = this.isFocused();
          this.listeners.forEach((n) => {
            n(t);
          });
        }
        isFocused() {
          var t;
          return typeof _(this, Qr) == "boolean"
            ? _(this, Qr)
            : ((t = globalThis.document) == null
                ? void 0
                : t.visibilityState) !== "hidden";
        }
      }),
      (Qr = new WeakMap()),
      (ar = new WeakMap()),
      (qs = new WeakMap()),
      ug),
    rh = new BE(),
    Qs,
    or,
    Ks,
    cg,
    WE =
      ((cg = class extends xi {
        constructor() {
          super();
          Y(this, Qs, !0);
          Y(this, or);
          Y(this, Ks);
          F(this, Ks, (t) => {
            if (!ds && window.addEventListener) {
              const n = () => t(!0),
                r = () => t(!1);
              return (
                window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                  window.removeEventListener("online", n),
                    window.removeEventListener("offline", r);
                }
              );
            }
          });
        }
        onSubscribe() {
          _(this, or) || this.setEventListener(_(this, Ks));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = _(this, or)) == null || t.call(this), F(this, or, void 0));
        }
        setEventListener(t) {
          var n;
          F(this, Ks, t),
            (n = _(this, or)) == null || n.call(this),
            F(this, or, t(this.setOnline.bind(this)));
        }
        setOnline(t) {
          _(this, Qs) !== t &&
            (F(this, Qs, t),
            this.listeners.forEach((r) => {
              r(t);
            }));
        }
        isOnline() {
          return _(this, Qs);
        }
      }),
      (Qs = new WeakMap()),
      (or = new WeakMap()),
      (Ks = new WeakMap()),
      cg),
    kl = new WE();
  function xd() {
    let e, t;
    const n = new Promise((s, i) => {
      (e = s), (t = i);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(s) {
      Object.assign(n, s), delete n.resolve, delete n.reject;
    }
    return (
      (n.resolve = (s) => {
        r({ status: "fulfilled", value: s }), e(s);
      }),
      (n.reject = (s) => {
        r({ status: "rejected", reason: s }), t(s);
      }),
      n
    );
  }
  function YE(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
  }
  function Gy(e) {
    return (e ?? "online") === "online" ? kl.isOnline() : !0;
  }
  var qy = class extends Error {
    constructor(e) {
      super("CancelledError"),
        (this.revert = e == null ? void 0 : e.revert),
        (this.silent = e == null ? void 0 : e.silent);
    }
  };
  function nc(e) {
    return e instanceof qy;
  }
  function Qy(e) {
    let t = !1,
      n = 0,
      r = !1,
      s;
    const i = xd(),
      a = (v) => {
        var w;
        r || (p(new qy(v)), (w = e.abort) == null || w.call(e));
      },
      o = () => {
        t = !0;
      },
      l = () => {
        t = !1;
      },
      u = () =>
        rh.isFocused() &&
        (e.networkMode === "always" || kl.isOnline()) &&
        e.canRun(),
      c = () => Gy(e.networkMode) && e.canRun(),
      d = (v) => {
        var w;
        r ||
          ((r = !0),
          (w = e.onSuccess) == null || w.call(e, v),
          s == null || s(),
          i.resolve(v));
      },
      p = (v) => {
        var w;
        r ||
          ((r = !0),
          (w = e.onError) == null || w.call(e, v),
          s == null || s(),
          i.reject(v));
      },
      S = () =>
        new Promise((v) => {
          var w;
          (s = (m) => {
            (r || u()) && v(m);
          }),
            (w = e.onPause) == null || w.call(e);
        }).then(() => {
          var v;
          (s = void 0), r || (v = e.onContinue) == null || v.call(e);
        }),
      g = () => {
        if (r) return;
        let v;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
          v = w ?? e.fn();
        } catch (m) {
          v = Promise.reject(m);
        }
        Promise.resolve(v)
          .then(d)
          .catch((m) => {
            var b;
            if (r) return;
            const f = e.retry ?? (ds ? 0 : 3),
              h = e.retryDelay ?? YE,
              E = typeof h == "function" ? h(n, m) : h,
              x =
                f === !0 ||
                (typeof f == "number" && n < f) ||
                (typeof f == "function" && f(n, m));
            if (t || !x) {
              p(m);
              return;
            }
            n++,
              (b = e.onFail) == null || b.call(e, n, m),
              $E(E)
                .then(() => (u() ? void 0 : S()))
                .then(() => {
                  t ? p(m) : g();
                });
          });
      };
    return {
      promise: i,
      cancel: a,
      continue: () => (s == null || s(), i),
      cancelRetry: o,
      continueRetry: l,
      canStart: c,
      start: () => (c() ? g() : S().then(g), i),
    };
  }
  function VE() {
    let e = [],
      t = 0,
      n = (o) => {
        o();
      },
      r = (o) => {
        o();
      },
      s = (o) => setTimeout(o, 0);
    const i = (o) => {
        t
          ? e.push(o)
          : s(() => {
              n(o);
            });
      },
      a = () => {
        const o = e;
        (e = []),
          o.length &&
            s(() => {
              r(() => {
                o.forEach((l) => {
                  n(l);
                });
              });
            });
      };
    return {
      batch: (o) => {
        let l;
        t++;
        try {
          l = o();
        } finally {
          t--, t || a();
        }
        return l;
      },
      batchCalls:
        (o) =>
        (...l) => {
          i(() => {
            o(...l);
          });
        },
      schedule: i,
      setNotifyFunction: (o) => {
        n = o;
      },
      setBatchNotifyFunction: (o) => {
        r = o;
      },
      setScheduler: (o) => {
        s = o;
      },
    };
  }
  var Ie = VE(),
    Kr,
    dg,
    Ky =
      ((dg = class {
        constructor() {
          Y(this, Kr);
        }
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            yd(this.gcTime) &&
              F(
                this,
                Kr,
                setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime)
              );
        }
        updateGcTime(e) {
          this.gcTime = Math.max(
            this.gcTime || 0,
            e ?? (ds ? 1 / 0 : 5 * 60 * 1e3)
          );
        }
        clearGcTimeout() {
          _(this, Kr) && (clearTimeout(_(this, Kr)), F(this, Kr, void 0));
        }
      }),
      (Kr = new WeakMap()),
      dg),
    Xs,
    Js,
    Ot,
    Qe,
    Pa,
    Xr,
    Bt,
    _n,
    fg,
    GE =
      ((fg = class extends Ky {
        constructor(t) {
          super();
          Y(this, Bt);
          Y(this, Xs);
          Y(this, Js);
          Y(this, Ot);
          Y(this, Qe);
          Y(this, Pa);
          Y(this, Xr);
          F(this, Xr, !1),
            F(this, Pa, t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            F(this, Ot, t.cache),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            F(this, Xs, qE(this.options)),
            (this.state = t.state ?? _(this, Xs)),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          var t;
          return (t = _(this, Qe)) == null ? void 0 : t.promise;
        }
        setOptions(t) {
          (this.options = { ..._(this, Pa), ...t }),
            this.updateGcTime(this.options.gcTime);
        }
        optionalRemove() {
          !this.observers.length &&
            this.state.fetchStatus === "idle" &&
            _(this, Ot).remove(this);
        }
        setData(t, n) {
          const r = Sd(this.state.data, t, this.options);
          return (
            K(this, Bt, _n).call(this, {
              data: r,
              type: "success",
              dataUpdatedAt: n == null ? void 0 : n.updatedAt,
              manual: n == null ? void 0 : n.manual,
            }),
            r
          );
        }
        setState(t, n) {
          K(this, Bt, _n).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n,
          });
        }
        cancel(t) {
          var r, s;
          const n = (r = _(this, Qe)) == null ? void 0 : r.promise;
          return (
            (s = _(this, Qe)) == null || s.cancel(t),
            n ? n.then(Mt).catch(Mt) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(_(this, Xs));
        }
        isActive() {
          return this.observers.some((t) => Vt(t.options.enabled, this) !== !1);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return this.state.isInvalidated
            ? !0
            : this.getObserversCount() > 0
              ? this.observers.some((t) => t.getCurrentResult().isStale)
              : this.state.data === void 0;
        }
        isStaleByTime(t = 0) {
          return (
            this.state.isInvalidated ||
            this.state.data === void 0 ||
            !By(this.state.dataUpdatedAt, t)
          );
        }
        onFocus() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
          t == null || t.refetch({ cancelRefetch: !1 }),
            (n = _(this, Qe)) == null || n.continue();
        }
        onOnline() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnReconnect());
          t == null || t.refetch({ cancelRefetch: !1 }),
            (n = _(this, Qe)) == null || n.continue();
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            _(this, Ot).notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((n) => n !== t)),
            this.observers.length ||
              (_(this, Qe) &&
                (_(this, Xr)
                  ? _(this, Qe).cancel({ revert: !0 })
                  : _(this, Qe).cancelRetry()),
              this.scheduleGc()),
            _(this, Ot).notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated ||
            K(this, Bt, _n).call(this, { type: "invalidate" });
        }
        fetch(t, n) {
          var l, u, c;
          if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && n != null && n.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (_(this, Qe))
              return _(this, Qe).continueRetry(), _(this, Qe).promise;
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            const d = this.observers.find((p) => p.options.queryFn);
            d && this.setOptions(d.options);
          }
          const r = new AbortController(),
            s = (d) => {
              Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (F(this, Xr, !0), r.signal),
              });
            },
            i = () => {
              const d = Vy(this.options, n),
                p = { queryKey: this.queryKey, meta: this.meta };
              return (
                s(p),
                F(this, Xr, !1),
                this.options.persister
                  ? this.options.persister(d, p, this)
                  : d(p)
              );
            },
            a = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: i,
            };
          s(a),
            (l = this.options.behavior) == null || l.onFetch(a, this),
            F(this, Js, this.state),
            (this.state.fetchStatus === "idle" ||
              this.state.fetchMeta !==
                ((u = a.fetchOptions) == null ? void 0 : u.meta)) &&
              K(this, Bt, _n).call(this, {
                type: "fetch",
                meta: (c = a.fetchOptions) == null ? void 0 : c.meta,
              });
          const o = (d) => {
            var p, S, g, v;
            (nc(d) && d.silent) ||
              K(this, Bt, _n).call(this, { type: "error", error: d }),
              nc(d) ||
                ((S = (p = _(this, Ot).config).onError) == null ||
                  S.call(p, d, this),
                (v = (g = _(this, Ot).config).onSettled) == null ||
                  v.call(g, this.state.data, d, this)),
              this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            F(
              this,
              Qe,
              Qy({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (d) => {
                  var p, S, g, v;
                  if (d === void 0) {
                    o(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(d);
                  } catch (w) {
                    o(w);
                    return;
                  }
                  (S = (p = _(this, Ot).config).onSuccess) == null ||
                    S.call(p, d, this),
                    (v = (g = _(this, Ot).config).onSettled) == null ||
                      v.call(g, d, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError: o,
                onFail: (d, p) => {
                  K(this, Bt, _n).call(this, {
                    type: "failed",
                    failureCount: d,
                    error: p,
                  });
                },
                onPause: () => {
                  K(this, Bt, _n).call(this, { type: "pause" });
                },
                onContinue: () => {
                  K(this, Bt, _n).call(this, { type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })
            ),
            _(this, Qe).start()
          );
        }
      }),
      (Xs = new WeakMap()),
      (Js = new WeakMap()),
      (Ot = new WeakMap()),
      (Qe = new WeakMap()),
      (Pa = new WeakMap()),
      (Xr = new WeakMap()),
      (Bt = new WeakSet()),
      (_n = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...r, fetchStatus: "paused" };
            case "continue":
              return { ...r, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...r,
                ...Xy(r.data, this.options),
                fetchMeta: t.meta ?? null,
              };
            case "success":
              return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
            case "error":
              const s = t.error;
              return nc(s) && s.revert && _(this, Js)
                ? { ..._(this, Js), fetchStatus: "idle" }
                : {
                    ...r,
                    error: s,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: "idle",
                    status: "error",
                  };
            case "invalidate":
              return { ...r, isInvalidated: !0 };
            case "setState":
              return { ...r, ...t.state };
          }
        };
        (this.state = n(this.state)),
          Ie.batch(() => {
            this.observers.forEach((r) => {
              r.onQueryUpdate();
            }),
              _(this, Ot).notify({ query: this, type: "updated", action: t });
          });
      }),
      fg);
  function Xy(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: Gy(t.networkMode) ? "fetching" : "paused",
      ...(e === void 0 && { error: null, status: "pending" }),
    };
  }
  function qE(e) {
    const t =
        typeof e.initialData == "function" ? e.initialData() : e.initialData,
      n = t !== void 0,
      r = n
        ? typeof e.initialDataUpdatedAt == "function"
          ? e.initialDataUpdatedAt()
          : e.initialDataUpdatedAt
        : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? (r ?? Date.now()) : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: n ? "success" : "pending",
      fetchStatus: "idle",
    };
  }
  var an,
    hg,
    QE =
      ((hg = class extends xi {
        constructor(t = {}) {
          super();
          Y(this, an);
          (this.config = t), F(this, an, new Map());
        }
        build(t, n, r) {
          const s = n.queryKey,
            i = n.queryHash ?? nh(s, n);
          let a = this.get(i);
          return (
            a ||
              ((a = new GE({
                cache: this,
                queryKey: s,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(s),
              })),
              this.add(a)),
            a
          );
        }
        add(t) {
          _(this, an).has(t.queryHash) ||
            (_(this, an).set(t.queryHash, t),
            this.notify({ type: "added", query: t }));
        }
        remove(t) {
          const n = _(this, an).get(t.queryHash);
          n &&
            (t.destroy(),
            n === t && _(this, an).delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
        }
        clear() {
          Ie.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        get(t) {
          return _(this, an).get(t);
        }
        getAll() {
          return [..._(this, an).values()];
        }
        find(t) {
          const n = { exact: !0, ...t };
          return this.getAll().find((r) => am(n, r));
        }
        findAll(t = {}) {
          const n = this.getAll();
          return Object.keys(t).length > 0 ? n.filter((r) => am(t, r)) : n;
        }
        notify(t) {
          Ie.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        onFocus() {
          Ie.batch(() => {
            this.getAll().forEach((t) => {
              t.onFocus();
            });
          });
        }
        onOnline() {
          Ie.batch(() => {
            this.getAll().forEach((t) => {
              t.onOnline();
            });
          });
        }
      }),
      (an = new WeakMap()),
      hg),
    on,
    Ze,
    Jr,
    ln,
    Zn,
    pg,
    KE =
      ((pg = class extends Ky {
        constructor(t) {
          super();
          Y(this, ln);
          Y(this, on);
          Y(this, Ze);
          Y(this, Jr);
          (this.mutationId = t.mutationId),
            F(this, Ze, t.mutationCache),
            F(this, on, []),
            (this.state = t.state || Jy()),
            this.setOptions(t.options),
            this.scheduleGc();
        }
        setOptions(t) {
          (this.options = t), this.updateGcTime(this.options.gcTime);
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(t) {
          _(this, on).includes(t) ||
            (_(this, on).push(t),
            this.clearGcTimeout(),
            _(this, Ze).notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          F(
            this,
            on,
            _(this, on).filter((n) => n !== t)
          ),
            this.scheduleGc(),
            _(this, Ze).notify({
              type: "observerRemoved",
              mutation: this,
              observer: t,
            });
        }
        optionalRemove() {
          _(this, on).length ||
            (this.state.status === "pending"
              ? this.scheduleGc()
              : _(this, Ze).remove(this));
        }
        continue() {
          var t;
          return (
            ((t = _(this, Jr)) == null ? void 0 : t.continue()) ??
            this.execute(this.state.variables)
          );
        }
        async execute(t) {
          var s, i, a, o, l, u, c, d, p, S, g, v, w, m, f, h, E, x, b, O;
          F(
            this,
            Jr,
            Qy({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (k, P) => {
                K(this, ln, Zn).call(this, {
                  type: "failed",
                  failureCount: k,
                  error: P,
                });
              },
              onPause: () => {
                K(this, ln, Zn).call(this, { type: "pause" });
              },
              onContinue: () => {
                K(this, ln, Zn).call(this, { type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => _(this, Ze).canRun(this),
            })
          );
          const n = this.state.status === "pending",
            r = !_(this, Jr).canStart();
          try {
            if (!n) {
              K(this, ln, Zn).call(this, {
                type: "pending",
                variables: t,
                isPaused: r,
              }),
                await ((i = (s = _(this, Ze).config).onMutate) == null
                  ? void 0
                  : i.call(s, t, this));
              const P = await ((o = (a = this.options).onMutate) == null
                ? void 0
                : o.call(a, t));
              P !== this.state.context &&
                K(this, ln, Zn).call(this, {
                  type: "pending",
                  context: P,
                  variables: t,
                  isPaused: r,
                });
            }
            const k = await _(this, Jr).start();
            return (
              await ((u = (l = _(this, Ze).config).onSuccess) == null
                ? void 0
                : u.call(l, k, t, this.state.context, this)),
              await ((d = (c = this.options).onSuccess) == null
                ? void 0
                : d.call(c, k, t, this.state.context)),
              await ((S = (p = _(this, Ze).config).onSettled) == null
                ? void 0
                : S.call(
                    p,
                    k,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((v = (g = this.options).onSettled) == null
                ? void 0
                : v.call(g, k, null, t, this.state.context)),
              K(this, ln, Zn).call(this, { type: "success", data: k }),
              k
            );
          } catch (k) {
            try {
              throw (
                (await ((m = (w = _(this, Ze).config).onError) == null
                  ? void 0
                  : m.call(w, k, t, this.state.context, this)),
                await ((h = (f = this.options).onError) == null
                  ? void 0
                  : h.call(f, k, t, this.state.context)),
                await ((x = (E = _(this, Ze).config).onSettled) == null
                  ? void 0
                  : x.call(
                      E,
                      void 0,
                      k,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await ((O = (b = this.options).onSettled) == null
                  ? void 0
                  : O.call(b, void 0, k, t, this.state.context)),
                k)
              );
            } finally {
              K(this, ln, Zn).call(this, { type: "error", error: k });
            }
          } finally {
            _(this, Ze).runNext(this);
          }
        }
      }),
      (on = new WeakMap()),
      (Ze = new WeakMap()),
      (Jr = new WeakMap()),
      (ln = new WeakSet()),
      (Zn = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...r, isPaused: !0 };
            case "continue":
              return { ...r, isPaused: !1 };
            case "pending":
              return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error",
              };
          }
        };
        (this.state = n(this.state)),
          Ie.batch(() => {
            _(this, on).forEach((r) => {
              r.onMutationUpdate(t);
            }),
              _(this, Ze).notify({
                mutation: this,
                type: "updated",
                action: t,
              });
          });
      }),
      pg);
  function Jy() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0,
    };
  }
  var vt,
    Oa,
    mg,
    XE =
      ((mg = class extends xi {
        constructor(t = {}) {
          super();
          Y(this, vt);
          Y(this, Oa);
          (this.config = t), F(this, vt, new Map()), F(this, Oa, Date.now());
        }
        build(t, n, r) {
          const s = new KE({
            mutationCache: this,
            mutationId: ++Za(this, Oa)._,
            options: t.defaultMutationOptions(n),
            state: r,
          });
          return this.add(s), s;
        }
        add(t) {
          const n = wo(t),
            r = _(this, vt).get(n) ?? [];
          r.push(t),
            _(this, vt).set(n, r),
            this.notify({ type: "added", mutation: t });
        }
        remove(t) {
          var r;
          const n = wo(t);
          if (_(this, vt).has(n)) {
            const s =
              (r = _(this, vt).get(n)) == null
                ? void 0
                : r.filter((i) => i !== t);
            s &&
              (s.length === 0 ? _(this, vt).delete(n) : _(this, vt).set(n, s));
          }
          this.notify({ type: "removed", mutation: t });
        }
        canRun(t) {
          var r;
          const n =
            (r = _(this, vt).get(wo(t))) == null
              ? void 0
              : r.find((s) => s.state.status === "pending");
          return !n || n === t;
        }
        runNext(t) {
          var r;
          const n =
            (r = _(this, vt).get(wo(t))) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
        }
        clear() {
          Ie.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        getAll() {
          return [..._(this, vt).values()].flat();
        }
        find(t) {
          const n = { exact: !0, ...t };
          return this.getAll().find((r) => om(n, r));
        }
        findAll(t = {}) {
          return this.getAll().filter((n) => om(t, n));
        }
        notify(t) {
          Ie.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        resumePausedMutations() {
          const t = this.getAll().filter((n) => n.state.isPaused);
          return Ie.batch(() =>
            Promise.all(t.map((n) => n.continue().catch(Mt)))
          );
        }
      }),
      (vt = new WeakMap()),
      (Oa = new WeakMap()),
      mg);
  function wo(e) {
    var t;
    return (
      ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
    );
  }
  function Cl(e) {
    return {
      onFetch: (t, n) => {
        var c, d, p, S, g;
        const r = t.options,
          s =
            (p =
              (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
                ? void 0
                : d.fetchMore) == null
              ? void 0
              : p.direction,
          i = ((S = t.state.data) == null ? void 0 : S.pages) || [],
          a = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
        let o = { pages: [], pageParams: [] },
          l = 0;
        const u = async () => {
          let v = !1;
          const w = (h) => {
              Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (v = !0)
                    : t.signal.addEventListener("abort", () => {
                        v = !0;
                      }),
                  t.signal
                ),
              });
            },
            m = Vy(t.options, t.fetchOptions),
            f = async (h, E, x) => {
              if (v) return Promise.reject();
              if (E == null && h.pages.length) return Promise.resolve(h);
              const b = {
                queryKey: t.queryKey,
                pageParam: E,
                direction: x ? "backward" : "forward",
                meta: t.options.meta,
              };
              w(b);
              const O = await m(b),
                { maxPages: k } = t.options,
                P = x ? HE : UE;
              return {
                pages: P(h.pages, O, k),
                pageParams: P(h.pageParams, E, k),
              };
            };
          if (s && i.length) {
            const h = s === "backward",
              E = h ? Zy : Ed,
              x = { pages: i, pageParams: a },
              b = E(r, x);
            o = await f(x, b, h);
          } else {
            const h = e ?? i.length;
            do {
              const E = l === 0 ? (a[0] ?? r.initialPageParam) : Ed(r, o);
              if (l > 0 && E == null) break;
              (o = await f(o, E)), l++;
            } while (l < h);
          }
          return o;
        };
        t.options.persister
          ? (t.fetchFn = () => {
              var v, w;
              return (w = (v = t.options).persister) == null
                ? void 0
                : w.call(
                    v,
                    u,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n
                  );
            })
          : (t.fetchFn = u);
      },
    };
  }
  function Ed(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
  }
  function Zy(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0
      ? (r = e.getPreviousPageParam) == null
        ? void 0
        : r.call(e, t[0], t, n[0], n)
      : void 0;
  }
  function JE(e, t) {
    return t ? Ed(e, t) != null : !1;
  }
  function ZE(e, t) {
    return !t || !e.getPreviousPageParam ? !1 : Zy(e, t) != null;
  }
  var Te,
    lr,
    ur,
    Zs,
    ei,
    cr,
    ti,
    ni,
    gg,
    e_ =
      ((gg = class {
        constructor(e = {}) {
          Y(this, Te);
          Y(this, lr);
          Y(this, ur);
          Y(this, Zs);
          Y(this, ei);
          Y(this, cr);
          Y(this, ti);
          Y(this, ni);
          F(this, Te, e.queryCache || new QE()),
            F(this, lr, e.mutationCache || new XE()),
            F(this, ur, e.defaultOptions || {}),
            F(this, Zs, new Map()),
            F(this, ei, new Map()),
            F(this, cr, 0);
        }
        mount() {
          Za(this, cr)._++,
            _(this, cr) === 1 &&
              (F(
                this,
                ti,
                rh.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(), _(this, Te).onFocus());
                })
              ),
              F(
                this,
                ni,
                kl.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(),
                    _(this, Te).onOnline());
                })
              ));
        }
        unmount() {
          var e, t;
          Za(this, cr)._--,
            _(this, cr) === 0 &&
              ((e = _(this, ti)) == null || e.call(this),
              F(this, ti, void 0),
              (t = _(this, ni)) == null || t.call(this),
              F(this, ni, void 0));
        }
        isFetching(e) {
          return _(this, Te).findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return _(this, lr).findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = _(this, Te).get(t.queryHash)) == null
            ? void 0
            : n.state.data;
        }
        ensureQueryData(e) {
          const t = this.getQueryData(e.queryKey);
          if (t === void 0) return this.fetchQuery(e);
          {
            const n = this.defaultQueryOptions(e),
              r = _(this, Te).build(this, n);
            return (
              e.revalidateIfStale &&
                r.isStaleByTime(Bs(n.staleTime, r)) &&
                this.prefetchQuery(n),
              Promise.resolve(t)
            );
          }
        }
        getQueriesData(e) {
          return _(this, Te)
            .findAll(e)
            .map(({ queryKey: t, state: n }) => {
              const r = n.data;
              return [t, r];
            });
        }
        setQueryData(e, t, n) {
          const r = this.defaultQueryOptions({ queryKey: e }),
            s = _(this, Te).get(r.queryHash),
            i = s == null ? void 0 : s.state.data,
            a = zE(t, i);
          if (a !== void 0)
            return _(this, Te)
              .build(this, r)
              .setData(a, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return Ie.batch(() =>
            _(this, Te)
              .findAll(e)
              .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
          );
        }
        getQueryState(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = _(this, Te).get(t.queryHash)) == null ? void 0 : n.state;
        }
        removeQueries(e) {
          const t = _(this, Te);
          Ie.batch(() => {
            t.findAll(e).forEach((n) => {
              t.remove(n);
            });
          });
        }
        resetQueries(e, t) {
          const n = _(this, Te),
            r = { type: "active", ...e };
          return Ie.batch(
            () => (
              n.findAll(e).forEach((s) => {
                s.reset();
              }),
              this.refetchQueries(r, t)
            )
          );
        }
        cancelQueries(e = {}, t = {}) {
          const n = { revert: !0, ...t },
            r = Ie.batch(() =>
              _(this, Te)
                .findAll(e)
                .map((s) => s.cancel(n))
            );
          return Promise.all(r).then(Mt).catch(Mt);
        }
        invalidateQueries(e = {}, t = {}) {
          return Ie.batch(() => {
            if (
              (_(this, Te)
                .findAll(e)
                .forEach((r) => {
                  r.invalidate();
                }),
              e.refetchType === "none")
            )
              return Promise.resolve();
            const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
            return this.refetchQueries(n, t);
          });
        }
        refetchQueries(e = {}, t) {
          const n = {
              ...t,
              cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
            },
            r = Ie.batch(() =>
              _(this, Te)
                .findAll(e)
                .filter((s) => !s.isDisabled())
                .map((s) => {
                  let i = s.fetch(void 0, n);
                  return (
                    n.throwOnError || (i = i.catch(Mt)),
                    s.state.fetchStatus === "paused" ? Promise.resolve() : i
                  );
                })
            );
          return Promise.all(r).then(Mt);
        }
        fetchQuery(e) {
          const t = this.defaultQueryOptions(e);
          t.retry === void 0 && (t.retry = !1);
          const n = _(this, Te).build(this, t);
          return n.isStaleByTime(Bs(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(Mt).catch(Mt);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = Cl(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(Mt).catch(Mt);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = Cl(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return kl.isOnline()
            ? _(this, lr).resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return _(this, Te);
        }
        getMutationCache() {
          return _(this, lr);
        }
        getDefaultOptions() {
          return _(this, ur);
        }
        setDefaultOptions(e) {
          F(this, ur, e);
        }
        setQueryDefaults(e, t) {
          _(this, Zs).set(fs(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          const t = [..._(this, Zs).values()];
          let n = {};
          return (
            t.forEach((r) => {
              Ea(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          _(this, ei).set(fs(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          const t = [..._(this, ei).values()];
          let n = {};
          return (
            t.forEach((r) => {
              Ea(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          const t = {
            ..._(this, ur).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = nh(t.queryKey, t)),
            t.refetchOnReconnect === void 0 &&
              (t.refetchOnReconnect = t.networkMode !== "always"),
            t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.enabled !== !0 && t.queryFn === Yy && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e != null && e._defaulted
            ? e
            : {
                ..._(this, ur).mutations,
                ...((e == null ? void 0 : e.mutationKey) &&
                  this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          _(this, Te).clear(), _(this, lr).clear();
        }
      }),
      (Te = new WeakMap()),
      (lr = new WeakMap()),
      (ur = new WeakMap()),
      (Zs = new WeakMap()),
      (ei = new WeakMap()),
      (cr = new WeakMap()),
      (ti = new WeakMap()),
      (ni = new WeakMap()),
      gg),
    ot,
    Z,
    Ma,
    et,
    Zr,
    ri,
    dr,
    un,
    Na,
    si,
    ii,
    es,
    ts,
    fr,
    ai,
    ie,
    Wi,
    _d,
    bd,
    Td,
    kd,
    Cd,
    Pd,
    Od,
    t0,
    vg,
    e0 =
      ((vg = class extends xi {
        constructor(t, n) {
          super();
          Y(this, ie);
          Y(this, ot);
          Y(this, Z);
          Y(this, Ma);
          Y(this, et);
          Y(this, Zr);
          Y(this, ri);
          Y(this, dr);
          Y(this, un);
          Y(this, Na);
          Y(this, si);
          Y(this, ii);
          Y(this, es);
          Y(this, ts);
          Y(this, fr);
          Y(this, ai, new Set());
          (this.options = n),
            F(this, ot, t),
            F(this, un, null),
            F(this, dr, xd()),
            this.options.experimental_prefetchInRender ||
              _(this, dr).reject(
                new Error(
                  "experimental_prefetchInRender feature flag is not enabled"
                )
              ),
            this.bindMethods(),
            this.setOptions(n);
        }
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          this.listeners.size === 1 &&
            (_(this, Z).addObserver(this),
            cm(_(this, Z), this.options)
              ? K(this, ie, Wi).call(this)
              : this.updateResult(),
            K(this, ie, kd).call(this));
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return Md(_(this, Z), this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return Md(
            _(this, Z),
            this.options,
            this.options.refetchOnWindowFocus
          );
        }
        destroy() {
          (this.listeners = new Set()),
            K(this, ie, Cd).call(this),
            K(this, ie, Pd).call(this),
            _(this, Z).removeObserver(this);
        }
        setOptions(t, n) {
          const r = this.options,
            s = _(this, Z);
          if (
            ((this.options = _(this, ot).defaultQueryOptions(t)),
            this.options.enabled !== void 0 &&
              typeof this.options.enabled != "boolean" &&
              typeof this.options.enabled != "function" &&
              typeof Vt(this.options.enabled, _(this, Z)) != "boolean")
          )
            throw new Error(
              "Expected enabled to be a boolean or a callback that returns a boolean"
            );
          K(this, ie, Od).call(this),
            _(this, Z).setOptions(this.options),
            r._defaulted &&
              !Tl(this.options, r) &&
              _(this, ot)
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: _(this, Z),
                  observer: this,
                });
          const i = this.hasListeners();
          i && dm(_(this, Z), s, this.options, r) && K(this, ie, Wi).call(this),
            this.updateResult(n),
            i &&
              (_(this, Z) !== s ||
                Vt(this.options.enabled, _(this, Z)) !==
                  Vt(r.enabled, _(this, Z)) ||
                Bs(this.options.staleTime, _(this, Z)) !==
                  Bs(r.staleTime, _(this, Z))) &&
              K(this, ie, _d).call(this);
          const a = K(this, ie, bd).call(this);
          i &&
            (_(this, Z) !== s ||
              Vt(this.options.enabled, _(this, Z)) !==
                Vt(r.enabled, _(this, Z)) ||
              a !== _(this, fr)) &&
            K(this, ie, Td).call(this, a);
        }
        getOptimisticResult(t) {
          const n = _(this, ot).getQueryCache().build(_(this, ot), t),
            r = this.createResult(n, t);
          return (
            n_(this, r) &&
              (F(this, et, r),
              F(this, ri, this.options),
              F(this, Zr, _(this, Z).state)),
            r
          );
        }
        getCurrentResult() {
          return _(this, et);
        }
        trackResult(t, n) {
          const r = {};
          return (
            Object.keys(t).forEach((s) => {
              Object.defineProperty(r, s, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(s), n == null || n(s), t[s]),
              });
            }),
            r
          );
        }
        trackProp(t) {
          _(this, ai).add(t);
        }
        getCurrentQuery() {
          return _(this, Z);
        }
        refetch({ ...t } = {}) {
          return this.fetch({ ...t });
        }
        fetchOptimistic(t) {
          const n = _(this, ot).defaultQueryOptions(t),
            r = _(this, ot).getQueryCache().build(_(this, ot), n);
          return (
            (r.isFetchingOptimistic = !0),
            r.fetch().then(() => this.createResult(r, n))
          );
        }
        fetch(t) {
          return K(this, ie, Wi)
            .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
            .then(() => (this.updateResult(), _(this, et)));
        }
        createResult(t, n) {
          var O;
          const r = _(this, Z),
            s = this.options,
            i = _(this, et),
            a = _(this, Zr),
            o = _(this, ri),
            u = t !== r ? t.state : _(this, Ma),
            { state: c } = t;
          let d = { ...c },
            p = !1,
            S;
          if (n._optimisticResults) {
            const k = this.hasListeners(),
              P = !k && cm(t, n),
              M = k && dm(t, r, n, s);
            (P || M) && (d = { ...d, ...Xy(c.data, t.options) }),
              n._optimisticResults === "isRestoring" &&
                (d.fetchStatus = "idle");
          }
          let { error: g, errorUpdatedAt: v, status: w } = d;
          if (n.select && d.data !== void 0)
            if (
              i &&
              d.data === (a == null ? void 0 : a.data) &&
              n.select === _(this, Na)
            )
              S = _(this, si);
            else
              try {
                F(this, Na, n.select),
                  (S = n.select(d.data)),
                  (S = Sd(i == null ? void 0 : i.data, S, n)),
                  F(this, si, S),
                  F(this, un, null);
              } catch (k) {
                F(this, un, k);
              }
          else S = d.data;
          if (n.placeholderData !== void 0 && S === void 0 && w === "pending") {
            let k;
            if (
              i != null &&
              i.isPlaceholderData &&
              n.placeholderData === (o == null ? void 0 : o.placeholderData)
            )
              k = i.data;
            else if (
              ((k =
                typeof n.placeholderData == "function"
                  ? n.placeholderData(
                      (O = _(this, ii)) == null ? void 0 : O.state.data,
                      _(this, ii)
                    )
                  : n.placeholderData),
              n.select && k !== void 0)
            )
              try {
                (k = n.select(k)), F(this, un, null);
              } catch (P) {
                F(this, un, P);
              }
            k !== void 0 &&
              ((w = "success"),
              (S = Sd(i == null ? void 0 : i.data, k, n)),
              (p = !0));
          }
          _(this, un) &&
            ((g = _(this, un)),
            (S = _(this, si)),
            (v = Date.now()),
            (w = "error"));
          const m = d.fetchStatus === "fetching",
            f = w === "pending",
            h = w === "error",
            E = f && m,
            x = S !== void 0;
          return {
            status: w,
            fetchStatus: d.fetchStatus,
            isPending: f,
            isSuccess: w === "success",
            isError: h,
            isInitialLoading: E,
            isLoading: E,
            data: S,
            dataUpdatedAt: d.dataUpdatedAt,
            error: g,
            errorUpdatedAt: v,
            failureCount: d.fetchFailureCount,
            failureReason: d.fetchFailureReason,
            errorUpdateCount: d.errorUpdateCount,
            isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
            isFetchedAfterMount:
              d.dataUpdateCount > u.dataUpdateCount ||
              d.errorUpdateCount > u.errorUpdateCount,
            isFetching: m,
            isRefetching: m && !f,
            isLoadingError: h && !x,
            isPaused: d.fetchStatus === "paused",
            isPlaceholderData: p,
            isRefetchError: h && x,
            isStale: sh(t, n),
            refetch: this.refetch,
            promise: _(this, dr),
          };
        }
        updateResult(t) {
          const n = _(this, et),
            r = this.createResult(_(this, Z), this.options);
          if (
            (F(this, Zr, _(this, Z).state),
            F(this, ri, this.options),
            _(this, Zr).data !== void 0 && F(this, ii, _(this, Z)),
            Tl(r, n))
          )
            return;
          if (this.options.experimental_prefetchInRender) {
            const a = (u) => {
                r.status === "error"
                  ? u.reject(r.error)
                  : r.data !== void 0 && u.resolve(r.data);
              },
              o = () => {
                const u = F(this, dr, (r.promise = xd()));
                a(u);
              },
              l = _(this, dr);
            switch (l.status) {
              case "pending":
                a(l);
                break;
              case "fulfilled":
                (r.status === "error" || r.data !== l.value) && o();
                break;
              case "rejected":
                (r.status !== "error" || r.error !== l.reason) && o();
                break;
            }
          }
          F(this, et, r);
          const s = {},
            i = () => {
              if (!n) return !0;
              const { notifyOnChangeProps: a } = this.options,
                o = typeof a == "function" ? a() : a;
              if (o === "all" || (!o && !_(this, ai).size)) return !0;
              const l = new Set(o ?? _(this, ai));
              return (
                this.options.throwOnError && l.add("error"),
                Object.keys(_(this, et)).some((u) => {
                  const c = u;
                  return _(this, et)[c] !== n[c] && l.has(c);
                })
              );
            };
          (t == null ? void 0 : t.listeners) !== !1 &&
            i() &&
            (s.listeners = !0),
            K(this, ie, t0).call(this, { ...s, ...t });
        }
        onQueryUpdate() {
          this.updateResult(),
            this.hasListeners() && K(this, ie, kd).call(this);
        }
      }),
      (ot = new WeakMap()),
      (Z = new WeakMap()),
      (Ma = new WeakMap()),
      (et = new WeakMap()),
      (Zr = new WeakMap()),
      (ri = new WeakMap()),
      (dr = new WeakMap()),
      (un = new WeakMap()),
      (Na = new WeakMap()),
      (si = new WeakMap()),
      (ii = new WeakMap()),
      (es = new WeakMap()),
      (ts = new WeakMap()),
      (fr = new WeakMap()),
      (ai = new WeakMap()),
      (ie = new WeakSet()),
      (Wi = function (t) {
        K(this, ie, Od).call(this);
        let n = _(this, Z).fetch(this.options, t);
        return (t != null && t.throwOnError) || (n = n.catch(Mt)), n;
      }),
      (_d = function () {
        K(this, ie, Cd).call(this);
        const t = Bs(this.options.staleTime, _(this, Z));
        if (ds || _(this, et).isStale || !yd(t)) return;
        const r = By(_(this, et).dataUpdatedAt, t) + 1;
        F(
          this,
          es,
          setTimeout(() => {
            _(this, et).isStale || this.updateResult();
          }, r)
        );
      }),
      (bd = function () {
        return (
          (typeof this.options.refetchInterval == "function"
            ? this.options.refetchInterval(_(this, Z))
            : this.options.refetchInterval) ?? !1
        );
      }),
      (Td = function (t) {
        K(this, ie, Pd).call(this),
          F(this, fr, t),
          !(
            ds ||
            Vt(this.options.enabled, _(this, Z)) === !1 ||
            !yd(_(this, fr)) ||
            _(this, fr) === 0
          ) &&
            F(
              this,
              ts,
              setInterval(
                () => {
                  (this.options.refetchIntervalInBackground ||
                    rh.isFocused()) &&
                    K(this, ie, Wi).call(this);
                },
                _(this, fr)
              )
            );
      }),
      (kd = function () {
        K(this, ie, _d).call(this),
          K(this, ie, Td).call(this, K(this, ie, bd).call(this));
      }),
      (Cd = function () {
        _(this, es) && (clearTimeout(_(this, es)), F(this, es, void 0));
      }),
      (Pd = function () {
        _(this, ts) && (clearInterval(_(this, ts)), F(this, ts, void 0));
      }),
      (Od = function () {
        const t = _(this, ot).getQueryCache().build(_(this, ot), this.options);
        if (t === _(this, Z)) return;
        const n = _(this, Z);
        F(this, Z, t),
          F(this, Ma, t.state),
          this.hasListeners() &&
            (n == null || n.removeObserver(this), t.addObserver(this));
      }),
      (t0 = function (t) {
        Ie.batch(() => {
          t.listeners &&
            this.listeners.forEach((n) => {
              n(_(this, et));
            }),
            _(this, ot)
              .getQueryCache()
              .notify({ query: _(this, Z), type: "observerResultsUpdated" });
        });
      }),
      vg);
  function t_(e, t) {
    return (
      Vt(t.enabled, e) !== !1 &&
      e.state.data === void 0 &&
      !(e.state.status === "error" && t.retryOnMount === !1)
    );
  }
  function cm(e, t) {
    return t_(e, t) || (e.state.data !== void 0 && Md(e, t, t.refetchOnMount));
  }
  function Md(e, t, n) {
    if (Vt(t.enabled, e) !== !1) {
      const r = typeof n == "function" ? n(e) : n;
      return r === "always" || (r !== !1 && sh(e, t));
    }
    return !1;
  }
  function dm(e, t, n, r) {
    return (
      (e !== t || Vt(r.enabled, e) === !1) &&
      (!n.suspense || e.state.status !== "error") &&
      sh(e, n)
    );
  }
  function sh(e, t) {
    return Vt(t.enabled, e) !== !1 && e.isStaleByTime(Bs(t.staleTime, e));
  }
  function n_(e, t) {
    return !Tl(e.getCurrentResult(), t);
  }
  var r_ = class extends e0 {
      constructor(e, t) {
        super(e, t);
      }
      bindMethods() {
        super.bindMethods(),
          (this.fetchNextPage = this.fetchNextPage.bind(this)),
          (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
      }
      setOptions(e, t) {
        super.setOptions({ ...e, behavior: Cl() }, t);
      }
      getOptimisticResult(e) {
        return (e.behavior = Cl()), super.getOptimisticResult(e);
      }
      fetchNextPage(e) {
        return this.fetch({
          ...e,
          meta: { fetchMore: { direction: "forward" } },
        });
      }
      fetchPreviousPage(e) {
        return this.fetch({
          ...e,
          meta: { fetchMore: { direction: "backward" } },
        });
      }
      createResult(e, t) {
        var g, v;
        const { state: n } = e,
          r = super.createResult(e, t),
          { isFetching: s, isRefetching: i, isError: a, isRefetchError: o } = r,
          l =
            (v = (g = n.fetchMeta) == null ? void 0 : g.fetchMore) == null
              ? void 0
              : v.direction,
          u = a && l === "forward",
          c = s && l === "forward",
          d = a && l === "backward",
          p = s && l === "backward";
        return {
          ...r,
          fetchNextPage: this.fetchNextPage,
          fetchPreviousPage: this.fetchPreviousPage,
          hasNextPage: JE(t, n.data),
          hasPreviousPage: ZE(t, n.data),
          isFetchNextPageError: u,
          isFetchingNextPage: c,
          isFetchPreviousPageError: d,
          isFetchingPreviousPage: p,
          isRefetchError: o && !u && !d,
          isRefetching: i && !c && !p,
        };
      }
    },
    hr,
    pr,
    lt,
    Pn,
    In,
    Uo,
    Nd,
    yg,
    s_ =
      ((yg = class extends xi {
        constructor(n, r) {
          super();
          Y(this, In);
          Y(this, hr);
          Y(this, pr);
          Y(this, lt);
          Y(this, Pn);
          F(this, hr, n),
            this.setOptions(r),
            this.bindMethods(),
            K(this, In, Uo).call(this);
        }
        bindMethods() {
          (this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this));
        }
        setOptions(n) {
          var s;
          const r = this.options;
          (this.options = _(this, hr).defaultMutationOptions(n)),
            Tl(this.options, r) ||
              _(this, hr)
                .getMutationCache()
                .notify({
                  type: "observerOptionsUpdated",
                  mutation: _(this, lt),
                  observer: this,
                }),
            r != null &&
            r.mutationKey &&
            this.options.mutationKey &&
            fs(r.mutationKey) !== fs(this.options.mutationKey)
              ? this.reset()
              : ((s = _(this, lt)) == null ? void 0 : s.state.status) ===
                  "pending" && _(this, lt).setOptions(this.options);
        }
        onUnsubscribe() {
          var n;
          this.hasListeners() ||
            (n = _(this, lt)) == null ||
            n.removeObserver(this);
        }
        onMutationUpdate(n) {
          K(this, In, Uo).call(this), K(this, In, Nd).call(this, n);
        }
        getCurrentResult() {
          return _(this, pr);
        }
        reset() {
          var n;
          (n = _(this, lt)) == null || n.removeObserver(this),
            F(this, lt, void 0),
            K(this, In, Uo).call(this),
            K(this, In, Nd).call(this);
        }
        mutate(n, r) {
          var s;
          return (
            F(this, Pn, r),
            (s = _(this, lt)) == null || s.removeObserver(this),
            F(
              this,
              lt,
              _(this, hr).getMutationCache().build(_(this, hr), this.options)
            ),
            _(this, lt).addObserver(this),
            _(this, lt).execute(n)
          );
        }
      }),
      (hr = new WeakMap()),
      (pr = new WeakMap()),
      (lt = new WeakMap()),
      (Pn = new WeakMap()),
      (In = new WeakSet()),
      (Uo = function () {
        var r;
        const n = ((r = _(this, lt)) == null ? void 0 : r.state) ?? Jy();
        F(this, pr, {
          ...n,
          isPending: n.status === "pending",
          isSuccess: n.status === "success",
          isError: n.status === "error",
          isIdle: n.status === "idle",
          mutate: this.mutate,
          reset: this.reset,
        });
      }),
      (Nd = function (n) {
        Ie.batch(() => {
          var r, s, i, a, o, l, u, c;
          if (_(this, Pn) && this.hasListeners()) {
            const d = _(this, pr).variables,
              p = _(this, pr).context;
            (n == null ? void 0 : n.type) === "success"
              ? ((s = (r = _(this, Pn)).onSuccess) == null ||
                  s.call(r, n.data, d, p),
                (a = (i = _(this, Pn)).onSettled) == null ||
                  a.call(i, n.data, null, d, p))
              : (n == null ? void 0 : n.type) === "error" &&
                ((l = (o = _(this, Pn)).onError) == null ||
                  l.call(o, n.error, d, p),
                (c = (u = _(this, Pn)).onSettled) == null ||
                  c.call(u, void 0, n.error, d, p));
          }
          this.listeners.forEach((d) => {
            d(_(this, pr));
          });
        });
      }),
      yg),
    n0 = T.createContext(void 0),
    gn = (e) => {
      const t = T.useContext(n0);
      if (!t)
        throw new Error(
          "No QueryClient set, use QueryClientProvider to set one"
        );
      return t;
    },
    i_ = ({ client: e, children: t }) => (
      T.useEffect(
        () => (
          e.mount(),
          () => {
            e.unmount();
          }
        ),
        [e]
      ),
      y.jsx(n0.Provider, { value: e, children: t })
    ),
    r0 = T.createContext(!1),
    a_ = () => T.useContext(r0);
  r0.Provider;
  function o_() {
    let e = !1;
    return {
      clearReset: () => {
        e = !1;
      },
      reset: () => {
        e = !0;
      },
      isReset: () => e,
    };
  }
  var l_ = T.createContext(o_()),
    u_ = () => T.useContext(l_);
  function s0(e, t) {
    return typeof e == "function" ? e(...t) : !!e;
  }
  function i0() {}
  var c_ = (e, t) => {
      (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
    },
    d_ = (e) => {
      T.useEffect(() => {
        e.clearReset();
      }, [e]);
    },
    f_ = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
      e.isError && !t.isReset() && !e.isFetching && r && s0(n, [e.error, r]),
    h_ = (e) => {
      e.suspense &&
        (typeof e.staleTime != "number" && (e.staleTime = 1e3),
        typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
    },
    p_ = (e, t) => e.isLoading && e.isFetching && !t,
    m_ = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
    fm = (e, t, n) =>
      t.fetchOptimistic(e).catch(() => {
        n.clearReset();
      });
  function a0(e, t, n) {
    var c, d, p, S, g;
    const r = gn(),
      s = a_(),
      i = u_(),
      a = r.defaultQueryOptions(e);
    (d =
      (c = r.getDefaultOptions().queries) == null
        ? void 0
        : c._experimental_beforeQuery) == null || d.call(c, a),
      (a._optimisticResults = s ? "isRestoring" : "optimistic"),
      h_(a),
      c_(a, i),
      d_(i);
    const o = !r.getQueryState(e.queryKey),
      [l] = T.useState(() => new t(r, a)),
      u = l.getOptimisticResult(a);
    if (
      (T.useSyncExternalStore(
        T.useCallback(
          (v) => {
            const w = s ? () => {} : l.subscribe(Ie.batchCalls(v));
            return l.updateResult(), w;
          },
          [l, s]
        ),
        () => l.getCurrentResult(),
        () => l.getCurrentResult()
      ),
      T.useEffect(() => {
        l.setOptions(a, { listeners: !1 });
      }, [a, l]),
      m_(a, u))
    )
      throw fm(a, l, i);
    if (
      f_({
        result: u,
        errorResetBoundary: i,
        throwOnError: a.throwOnError,
        query: r.getQueryCache().get(a.queryHash),
      })
    )
      throw u.error;
    if (
      ((S =
        (p = r.getDefaultOptions().queries) == null
          ? void 0
          : p._experimental_afterQuery) == null || S.call(p, a, u),
      a.experimental_prefetchInRender && !ds && p_(u, s))
    ) {
      const v = o
        ? fm(a, l, i)
        : (g = r.getQueryCache().get(a.queryHash)) == null
          ? void 0
          : g.promise;
      v == null ||
        v.catch(i0).finally(() => {
          l.hasListeners() || l.updateResult();
        });
    }
    return a.notifyOnChangeProps ? u : l.trackResult(u);
  }
  function He(e, t) {
    return a0(e, e0);
  }
  function At(e, t) {
    const n = gn(),
      [r] = T.useState(() => new s_(n, e));
    T.useEffect(() => {
      r.setOptions(e);
    }, [r, e]);
    const s = T.useSyncExternalStore(
        T.useCallback((a) => r.subscribe(Ie.batchCalls(a)), [r]),
        () => r.getCurrentResult(),
        () => r.getCurrentResult()
      ),
      i = T.useCallback(
        (a, o) => {
          r.mutate(a, o).catch(i0);
        },
        [r]
      );
    if (s.error && s0(r.options.throwOnError, [s.error])) throw s.error;
    return { ...s, mutate: i, mutateAsync: s.mutate };
  }
  function g_(e, t) {
    return a0(e, r_);
  }
  function o0(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: v_ } = Object.prototype,
    { getPrototypeOf: ih } = Object,
    su = ((e) => (t) => {
      const n = v_.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    en = (e) => ((e = e.toLowerCase()), (t) => su(t) === e),
    iu = (e) => (t) => typeof t === e,
    { isArray: Ei } = Array,
    _a = iu("undefined");
  function y_(e) {
    return (
      e !== null &&
      !_a(e) &&
      e.constructor !== null &&
      !_a(e.constructor) &&
      Et(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const l0 = en("ArrayBuffer");
  function w_(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && l0(e.buffer)),
      t
    );
  }
  const S_ = iu("string"),
    Et = iu("function"),
    u0 = iu("number"),
    au = (e) => e !== null && typeof e == "object",
    x_ = (e) => e === !0 || e === !1,
    Ho = (e) => {
      if (su(e) !== "object") return !1;
      const t = ih(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    E_ = en("Date"),
    __ = en("File"),
    b_ = en("Blob"),
    T_ = en("FileList"),
    k_ = (e) => au(e) && Et(e.pipe),
    C_ = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (Et(e.append) &&
            ((t = su(e)) === "formdata" ||
              (t === "object" &&
                Et(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    P_ = en("URLSearchParams"),
    [O_, M_, N_, L_] = ["ReadableStream", "Request", "Response", "Headers"].map(
      en
    ),
    R_ = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function Aa(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, s;
    if ((typeof e != "object" && (e = [e]), Ei(e)))
      for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
    else {
      const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        a = i.length;
      let o;
      for (r = 0; r < a; r++) (o = i[r]), t.call(null, e[o], o, e);
    }
  }
  function c0(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
      s;
    for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
    return null;
  }
  const Gr =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : global,
    d0 = (e) => !_a(e) && e !== Gr;
  function Ld() {
    const { caseless: e } = (d0(this) && this) || {},
      t = {},
      n = (r, s) => {
        const i = (e && c0(t, s)) || s;
        Ho(t[i]) && Ho(r)
          ? (t[i] = Ld(t[i], r))
          : Ho(r)
            ? (t[i] = Ld({}, r))
            : Ei(r)
              ? (t[i] = r.slice())
              : (t[i] = r);
      };
    for (let r = 0, s = arguments.length; r < s; r++)
      arguments[r] && Aa(arguments[r], n);
    return t;
  }
  const j_ = (e, t, n, { allOwnKeys: r } = {}) => (
      Aa(
        t,
        (s, i) => {
          n && Et(s) ? (e[i] = o0(s, n)) : (e[i] = s);
        },
        { allOwnKeys: r }
      ),
      e
    ),
    D_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    I_ = (e, t, n, r) => {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n);
    },
    F_ = (e, t, n, r) => {
      let s, i, a;
      const o = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
          (a = s[i]),
            (!r || r(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0));
        e = n !== !1 && ih(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    A_ = (e, t, n) => {
      (e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length);
      const r = e.indexOf(t, n);
      return r !== -1 && r === n;
    },
    z_ = (e) => {
      if (!e) return null;
      if (Ei(e)) return e;
      let t = e.length;
      if (!u0(t)) return null;
      const n = new Array(t);
      for (; t-- > 0; ) n[t] = e[t];
      return n;
    },
    $_ = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && ih(Uint8Array)),
    U_ = (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let s;
      for (; (s = r.next()) && !s.done; ) {
        const i = s.value;
        t.call(e, i[0], i[1]);
      }
    },
    H_ = (e, t) => {
      let n;
      const r = [];
      for (; (n = e.exec(t)) !== null; ) r.push(n);
      return r;
    },
    B_ = en("HTMLFormElement"),
    W_ = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
        return r.toUpperCase() + s;
      }),
    hm = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    Y_ = en("RegExp"),
    f0 = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Aa(n, (s, i) => {
        let a;
        (a = t(s, i, e)) !== !1 && (r[i] = a || s);
      }),
        Object.defineProperties(e, r);
    },
    V_ = (e) => {
      f0(e, (t, n) => {
        if (Et(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
          return !1;
        const r = e[n];
        if (Et(r)) {
          if (((t.enumerable = !1), "writable" in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'");
            });
        }
      });
    },
    G_ = (e, t) => {
      const n = {},
        r = (s) => {
          s.forEach((i) => {
            n[i] = !0;
          });
        };
      return Ei(e) ? r(e) : r(String(e).split(t)), n;
    },
    q_ = () => {},
    Q_ = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
    rc = "abcdefghijklmnopqrstuvwxyz",
    pm = "0123456789",
    h0 = { DIGIT: pm, ALPHA: rc, ALPHA_DIGIT: rc + rc.toUpperCase() + pm },
    K_ = (e = 16, t = h0.ALPHA_DIGIT) => {
      let n = "";
      const { length: r } = t;
      for (; e--; ) n += t[(Math.random() * r) | 0];
      return n;
    };
  function X_(e) {
    return !!(
      e &&
      Et(e.append) &&
      e[Symbol.toStringTag] === "FormData" &&
      e[Symbol.iterator]
    );
  }
  const J_ = (e) => {
      const t = new Array(10),
        n = (r, s) => {
          if (au(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[s] = r;
              const i = Ei(r) ? [] : {};
              return (
                Aa(r, (a, o) => {
                  const l = n(a, s + 1);
                  !_a(l) && (i[o] = l);
                }),
                (t[s] = void 0),
                i
              );
            }
          }
          return r;
        };
      return n(e, 0);
    },
    Z_ = en("AsyncFunction"),
    eb = (e) => e && (au(e) || Et(e)) && Et(e.then) && Et(e.catch),
    p0 = ((e, t) =>
      e
        ? setImmediate
        : t
          ? ((n, r) => (
              Gr.addEventListener(
                "message",
                ({ source: s, data: i }) => {
                  s === Gr && i === n && r.length && r.shift()();
                },
                !1
              ),
              (s) => {
                r.push(s), Gr.postMessage(n, "*");
              }
            ))(`axios@${Math.random()}`, [])
          : (n) => setTimeout(n))(
      typeof setImmediate == "function",
      Et(Gr.postMessage)
    ),
    tb =
      typeof queueMicrotask < "u"
        ? queueMicrotask.bind(Gr)
        : (typeof process < "u" && process.nextTick) || p0,
    C = {
      isArray: Ei,
      isArrayBuffer: l0,
      isBuffer: y_,
      isFormData: C_,
      isArrayBufferView: w_,
      isString: S_,
      isNumber: u0,
      isBoolean: x_,
      isObject: au,
      isPlainObject: Ho,
      isReadableStream: O_,
      isRequest: M_,
      isResponse: N_,
      isHeaders: L_,
      isUndefined: _a,
      isDate: E_,
      isFile: __,
      isBlob: b_,
      isRegExp: Y_,
      isFunction: Et,
      isStream: k_,
      isURLSearchParams: P_,
      isTypedArray: $_,
      isFileList: T_,
      forEach: Aa,
      merge: Ld,
      extend: j_,
      trim: R_,
      stripBOM: D_,
      inherits: I_,
      toFlatObject: F_,
      kindOf: su,
      kindOfTest: en,
      endsWith: A_,
      toArray: z_,
      forEachEntry: U_,
      matchAll: H_,
      isHTMLForm: B_,
      hasOwnProperty: hm,
      hasOwnProp: hm,
      reduceDescriptors: f0,
      freezeMethods: V_,
      toObjectSet: G_,
      toCamelCase: W_,
      noop: q_,
      toFiniteNumber: Q_,
      findKey: c0,
      global: Gr,
      isContextDefined: d0,
      ALPHABET: h0,
      generateString: K_,
      isSpecCompliantForm: X_,
      toJSONObject: J_,
      isAsyncFn: Z_,
      isThenable: eb,
      setImmediate: p0,
      asap: tb,
    };
  function q(e, t, n, r, s) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      s && ((this.response = s), (this.status = s.status ? s.status : null));
  }
  C.inherits(q, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: C.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const m0 = q.prototype,
    g0 = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    g0[e] = { value: e };
  });
  Object.defineProperties(q, g0);
  Object.defineProperty(m0, "isAxiosError", { value: !0 });
  q.from = (e, t, n, r, s, i) => {
    const a = Object.create(m0);
    return (
      C.toFlatObject(
        e,
        a,
        function (l) {
          return l !== Error.prototype;
        },
        (o) => o !== "isAxiosError"
      ),
      q.call(a, e.message, t, n, r, s),
      (a.cause = e),
      (a.name = e.name),
      i && Object.assign(a, i),
      a
    );
  };
  const nb = null;
  function Rd(e) {
    return C.isPlainObject(e) || C.isArray(e);
  }
  function v0(e) {
    return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function mm(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (s, i) {
            return (s = v0(s)), !n && i ? "[" + s + "]" : s;
          })
          .join(n ? "." : "")
      : t;
  }
  function rb(e) {
    return C.isArray(e) && !e.some(Rd);
  }
  const sb = C.toFlatObject(C, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function ou(e, t, n) {
    if (!C.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
      (n = C.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (v, w) {
          return !C.isUndefined(w[v]);
        }
      ));
    const r = n.metaTokens,
      s = n.visitor || c,
      i = n.dots,
      a = n.indexes,
      l = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
    if (!C.isFunction(s)) throw new TypeError("visitor must be a function");
    function u(g) {
      if (g === null) return "";
      if (C.isDate(g)) return g.toISOString();
      if (!l && C.isBlob(g))
        throw new q("Blob is not supported. Use a Buffer instead.");
      return C.isArrayBuffer(g) || C.isTypedArray(g)
        ? l && typeof Blob == "function"
          ? new Blob([g])
          : Buffer.from(g)
        : g;
    }
    function c(g, v, w) {
      let m = g;
      if (g && !w && typeof g == "object") {
        if (C.endsWith(v, "{}"))
          (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
        else if (
          (C.isArray(g) && rb(g)) ||
          ((C.isFileList(g) || C.endsWith(v, "[]")) && (m = C.toArray(g)))
        )
          return (
            (v = v0(v)),
            m.forEach(function (h, E) {
              !(C.isUndefined(h) || h === null) &&
                t.append(
                  a === !0 ? mm([v], E, i) : a === null ? v : v + "[]",
                  u(h)
                );
            }),
            !1
          );
      }
      return Rd(g) ? !0 : (t.append(mm(w, v, i), u(g)), !1);
    }
    const d = [],
      p = Object.assign(sb, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: Rd,
      });
    function S(g, v) {
      if (!C.isUndefined(g)) {
        if (d.indexOf(g) !== -1)
          throw Error("Circular reference detected in " + v.join("."));
        d.push(g),
          C.forEach(g, function (m, f) {
            (!(C.isUndefined(m) || m === null) &&
              s.call(t, m, C.isString(f) ? f.trim() : f, v, p)) === !0 &&
              S(m, v ? v.concat(f) : [f]);
          }),
          d.pop();
      }
    }
    if (!C.isObject(e)) throw new TypeError("data must be an object");
    return S(e), t;
  }
  function gm(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
      return t[r];
    });
  }
  function ah(e, t) {
    (this._pairs = []), e && ou(e, this, t);
  }
  const y0 = ah.prototype;
  y0.append = function (t, n) {
    this._pairs.push([t, n]);
  };
  y0.toString = function (t) {
    const n = t
      ? function (r) {
          return t.call(this, r, gm);
        }
      : gm;
    return this._pairs
      .map(function (s) {
        return n(s[0]) + "=" + n(s[1]);
      }, "")
      .join("&");
  };
  function ib(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function w0(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || ib,
      s = n && n.serialize;
    let i;
    if (
      (s
        ? (i = s(t, n))
        : (i = C.isURLSearchParams(t)
            ? t.toString()
            : new ah(t, n).toString(r)),
      i)
    ) {
      const a = e.indexOf("#");
      a !== -1 && (e = e.slice(0, a)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
    }
    return e;
  }
  class vm {
    constructor() {
      this.handlers = [];
    }
    use(t, n, r) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: n,
          synchronous: r ? r.synchronous : !1,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      C.forEach(this.handlers, function (r) {
        r !== null && t(r);
      });
    }
  }
  const S0 = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    ab = typeof URLSearchParams < "u" ? URLSearchParams : ah,
    ob = typeof FormData < "u" ? FormData : null,
    lb = typeof Blob < "u" ? Blob : null,
    ub = {
      isBrowser: !0,
      classes: { URLSearchParams: ab, FormData: ob, Blob: lb },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    oh = typeof window < "u" && typeof document < "u",
    jd = (typeof navigator == "object" && navigator) || void 0,
    cb =
      oh &&
      (!jd || ["ReactNative", "NativeScript", "NS"].indexOf(jd.product) < 0),
    db =
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function",
    fb = (oh && window.location.href) || "http://localhost",
    hb = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          hasBrowserEnv: oh,
          hasStandardBrowserEnv: cb,
          hasStandardBrowserWebWorkerEnv: db,
          navigator: jd,
          origin: fb,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    pt = { ...hb, ...ub };
  function pb(e, t) {
    return ou(
      e,
      new pt.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (n, r, s, i) {
            return pt.isNode && C.isBuffer(n)
              ? (this.append(r, n.toString("base64")), !1)
              : i.defaultVisitor.apply(this, arguments);
          },
        },
        t
      )
    );
  }
  function mb(e) {
    return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
      t[0] === "[]" ? "" : t[1] || t[0]
    );
  }
  function gb(e) {
    const t = {},
      n = Object.keys(e);
    let r;
    const s = n.length;
    let i;
    for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
    return t;
  }
  function x0(e) {
    function t(n, r, s, i) {
      let a = n[i++];
      if (a === "__proto__") return !0;
      const o = Number.isFinite(+a),
        l = i >= n.length;
      return (
        (a = !a && C.isArray(s) ? s.length : a),
        l
          ? (C.hasOwnProp(s, a) ? (s[a] = [s[a], r]) : (s[a] = r), !o)
          : ((!s[a] || !C.isObject(s[a])) && (s[a] = []),
            t(n, r, s[a], i) && C.isArray(s[a]) && (s[a] = gb(s[a])),
            !o)
      );
    }
    if (C.isFormData(e) && C.isFunction(e.entries)) {
      const n = {};
      return (
        C.forEachEntry(e, (r, s) => {
          t(mb(r), s, n, 0);
        }),
        n
      );
    }
    return null;
  }
  function vb(e, t, n) {
    if (C.isString(e))
      try {
        return (t || JSON.parse)(e), C.trim(e);
      } catch (r) {
        if (r.name !== "SyntaxError") throw r;
      }
    return (0, JSON.stringify)(e);
  }
  const za = {
    transitional: S0,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (t, n) {
        const r = n.getContentType() || "",
          s = r.indexOf("application/json") > -1,
          i = C.isObject(t);
        if ((i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
          return s ? JSON.stringify(x0(t)) : t;
        if (
          C.isArrayBuffer(t) ||
          C.isBuffer(t) ||
          C.isStream(t) ||
          C.isFile(t) ||
          C.isBlob(t) ||
          C.isReadableStream(t)
        )
          return t;
        if (C.isArrayBufferView(t)) return t.buffer;
        if (C.isURLSearchParams(t))
          return (
            n.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        let o;
        if (i) {
          if (r.indexOf("application/x-www-form-urlencoded") > -1)
            return pb(t, this.formSerializer).toString();
          if ((o = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
            const l = this.env && this.env.FormData;
            return ou(
              o ? { "files[]": t } : t,
              l && new l(),
              this.formSerializer
            );
          }
        }
        return i || s ? (n.setContentType("application/json", !1), vb(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const n = this.transitional || za.transitional,
          r = n && n.forcedJSONParsing,
          s = this.responseType === "json";
        if (C.isResponse(t) || C.isReadableStream(t)) return t;
        if (t && C.isString(t) && ((r && !this.responseType) || s)) {
          const a = !(n && n.silentJSONParsing) && s;
          try {
            return JSON.parse(t);
          } catch (o) {
            if (a)
              throw o.name === "SyntaxError"
                ? q.from(o, q.ERR_BAD_RESPONSE, this, null, this.response)
                : o;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: pt.classes.FormData, Blob: pt.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    za.headers[e] = {};
  });
  const yb = C.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    wb = (e) => {
      const t = {};
      let n, r, s;
      return (
        e &&
          e
            .split(
              `
`
            )
            .forEach(function (a) {
              (s = a.indexOf(":")),
                (n = a.substring(0, s).trim().toLowerCase()),
                (r = a.substring(s + 1).trim()),
                !(!n || (t[n] && yb[n])) &&
                  (n === "set-cookie"
                    ? t[n]
                      ? t[n].push(r)
                      : (t[n] = [r])
                    : (t[n] = t[n] ? t[n] + ", " + r : r));
            }),
        t
      );
    },
    ym = Symbol("internals");
  function Ii(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Bo(e) {
    return e === !1 || e == null ? e : C.isArray(e) ? e.map(Bo) : String(e);
  }
  function Sb(e) {
    const t = Object.create(null),
      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
  }
  const xb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function sc(e, t, n, r, s) {
    if (C.isFunction(r)) return r.call(this, t, n);
    if ((s && (t = n), !!C.isString(t))) {
      if (C.isString(r)) return t.indexOf(r) !== -1;
      if (C.isRegExp(r)) return r.test(t);
    }
  }
  function Eb(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
  }
  function _b(e, t) {
    const n = C.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((r) => {
      Object.defineProperty(e, r + n, {
        value: function (s, i, a) {
          return this[r].call(this, t, s, i, a);
        },
        configurable: !0,
      });
    });
  }
  class mt {
    constructor(t) {
      t && this.set(t);
    }
    set(t, n, r) {
      const s = this;
      function i(o, l, u) {
        const c = Ii(l);
        if (!c) throw new Error("header name must be a non-empty string");
        const d = C.findKey(s, c);
        (!d || s[d] === void 0 || u === !0 || (u === void 0 && s[d] !== !1)) &&
          (s[d || l] = Bo(o));
      }
      const a = (o, l) => C.forEach(o, (u, c) => i(u, c, l));
      if (C.isPlainObject(t) || t instanceof this.constructor) a(t, n);
      else if (C.isString(t) && (t = t.trim()) && !xb(t)) a(wb(t), n);
      else if (C.isHeaders(t)) for (const [o, l] of t.entries()) i(l, o, r);
      else t != null && i(n, t, r);
      return this;
    }
    get(t, n) {
      if (((t = Ii(t)), t)) {
        const r = C.findKey(this, t);
        if (r) {
          const s = this[r];
          if (!n) return s;
          if (n === !0) return Sb(s);
          if (C.isFunction(n)) return n.call(this, s, r);
          if (C.isRegExp(n)) return n.exec(s);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, n) {
      if (((t = Ii(t)), t)) {
        const r = C.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || sc(this, this[r], r, n)));
      }
      return !1;
    }
    delete(t, n) {
      const r = this;
      let s = !1;
      function i(a) {
        if (((a = Ii(a)), a)) {
          const o = C.findKey(r, a);
          o && (!n || sc(r, r[o], o, n)) && (delete r[o], (s = !0));
        }
      }
      return C.isArray(t) ? t.forEach(i) : i(t), s;
    }
    clear(t) {
      const n = Object.keys(this);
      let r = n.length,
        s = !1;
      for (; r--; ) {
        const i = n[r];
        (!t || sc(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
      }
      return s;
    }
    normalize(t) {
      const n = this,
        r = {};
      return (
        C.forEach(this, (s, i) => {
          const a = C.findKey(r, i);
          if (a) {
            (n[a] = Bo(s)), delete n[i];
            return;
          }
          const o = t ? Eb(i) : String(i).trim();
          o !== i && delete n[i], (n[o] = Bo(s)), (r[o] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const n = Object.create(null);
      return (
        C.forEach(this, (r, s) => {
          r != null &&
            r !== !1 &&
            (n[s] = t && C.isArray(r) ? r.join(", ") : r);
        }),
        n
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
      const r = new this(t);
      return n.forEach((s) => r.set(s)), r;
    }
    static accessor(t) {
      const r = (this[ym] = this[ym] = { accessors: {} }).accessors,
        s = this.prototype;
      function i(a) {
        const o = Ii(a);
        r[o] || (_b(s, a), (r[o] = !0));
      }
      return C.isArray(t) ? t.forEach(i) : i(t), this;
    }
  }
  mt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]);
  C.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(r) {
        this[n] = r;
      },
    };
  });
  C.freezeMethods(mt);
  function ic(e, t) {
    const n = this || za,
      r = t || n,
      s = mt.from(r.headers);
    let i = r.data;
    return (
      C.forEach(e, function (o) {
        i = o.call(n, i, s.normalize(), t ? t.status : void 0);
      }),
      s.normalize(),
      i
    );
  }
  function E0(e) {
    return !!(e && e.__CANCEL__);
  }
  function _i(e, t, n) {
    q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  C.inherits(_i, q, { __CANCEL__: !0 });
  function _0(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
      ? e(n)
      : t(
          new q(
            "Request failed with status code " + n.status,
            [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        );
  }
  function bb(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }
  function Tb(e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let s = 0,
      i = 0,
      a;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (l) {
        const u = Date.now(),
          c = r[i];
        a || (a = u), (n[s] = l), (r[s] = u);
        let d = i,
          p = 0;
        for (; d !== s; ) (p += n[d++]), (d = d % e);
        if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), u - a < t))
          return;
        const S = c && u - c;
        return S ? Math.round((p * 1e3) / S) : void 0;
      }
    );
  }
  function kb(e, t) {
    let n = 0,
      r = 1e3 / t,
      s,
      i;
    const a = (u, c = Date.now()) => {
      (n = c), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
    };
    return [
      (...u) => {
        const c = Date.now(),
          d = c - n;
        d >= r
          ? a(u, c)
          : ((s = u),
            i ||
              (i = setTimeout(() => {
                (i = null), a(s);
              }, r - d)));
      },
      () => s && a(s),
    ];
  }
  const Pl = (e, t, n = 3) => {
      let r = 0;
      const s = Tb(50, 250);
      return kb((i) => {
        const a = i.loaded,
          o = i.lengthComputable ? i.total : void 0,
          l = a - r,
          u = s(l),
          c = a <= o;
        r = a;
        const d = {
          loaded: a,
          total: o,
          progress: o ? a / o : void 0,
          bytes: l,
          rate: u || void 0,
          estimated: u && o && c ? (o - a) / u : void 0,
          event: i,
          lengthComputable: o != null,
          [t ? "download" : "upload"]: !0,
        };
        e(d);
      }, n);
    },
    wm = (e, t) => {
      const n = e != null;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    Sm =
      (e) =>
      (...t) =>
        C.asap(() => e(...t)),
    Cb = pt.hasStandardBrowserEnv
      ? (function () {
          const t =
              pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent),
            n = document.createElement("a");
          let r;
          function s(i) {
            let a = i;
            return (
              t && (n.setAttribute("href", a), (a = n.href)),
              n.setAttribute("href", a),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (r = s(window.location.href)),
            function (a) {
              const o = C.isString(a) ? s(a) : a;
              return o.protocol === r.protocol && o.host === r.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })(),
    Pb = pt.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, s, i) {
            const a = [e + "=" + encodeURIComponent(t)];
            C.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
              C.isString(r) && a.push("path=" + r),
              C.isString(s) && a.push("domain=" + s),
              i === !0 && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };
  function Ob(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function Mb(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function b0(e, t) {
    return e && !Ob(t) ? Mb(e, t) : t;
  }
  const xm = (e) => (e instanceof mt ? { ...e } : e);
  function hs(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, d) {
      return C.isPlainObject(u) && C.isPlainObject(c)
        ? C.merge.call({ caseless: d }, u, c)
        : C.isPlainObject(c)
          ? C.merge({}, c)
          : C.isArray(c)
            ? c.slice()
            : c;
    }
    function s(u, c, d) {
      if (C.isUndefined(c)) {
        if (!C.isUndefined(u)) return r(void 0, u, d);
      } else return r(u, c, d);
    }
    function i(u, c) {
      if (!C.isUndefined(c)) return r(void 0, c);
    }
    function a(u, c) {
      if (C.isUndefined(c)) {
        if (!C.isUndefined(u)) return r(void 0, u);
      } else return r(void 0, c);
    }
    function o(u, c, d) {
      if (d in t) return r(u, c);
      if (d in e) return r(void 0, u);
    }
    const l = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      withXSRFToken: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: o,
      headers: (u, c) => s(xm(u), xm(c), !0),
    };
    return (
      C.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
        const d = l[c] || s,
          p = d(e[c], t[c], c);
        (C.isUndefined(p) && d !== o) || (n[c] = p);
      }),
      n
    );
  }
  const T0 = (e) => {
      const t = hs({}, e);
      let {
        data: n,
        withXSRFToken: r,
        xsrfHeaderName: s,
        xsrfCookieName: i,
        headers: a,
        auth: o,
      } = t;
      (t.headers = a = mt.from(a)),
        (t.url = w0(b0(t.baseURL, t.url), e.params, e.paramsSerializer)),
        o &&
          a.set(
            "Authorization",
            "Basic " +
              btoa(
                (o.username || "") +
                  ":" +
                  (o.password ? unescape(encodeURIComponent(o.password)) : "")
              )
          );
      let l;
      if (C.isFormData(n)) {
        if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
          a.setContentType(void 0);
        else if ((l = a.getContentType()) !== !1) {
          const [u, ...c] = l
            ? l
                .split(";")
                .map((d) => d.trim())
                .filter(Boolean)
            : [];
          a.setContentType([u || "multipart/form-data", ...c].join("; "));
        }
      }
      if (
        pt.hasStandardBrowserEnv &&
        (r && C.isFunction(r) && (r = r(t)), r || (r !== !1 && Cb(t.url)))
      ) {
        const u = s && i && Pb.read(i);
        u && a.set(s, u);
      }
      return t;
    },
    Nb = typeof XMLHttpRequest < "u",
    Lb =
      Nb &&
      function (e) {
        return new Promise(function (n, r) {
          const s = T0(e);
          let i = s.data;
          const a = mt.from(s.headers).normalize();
          let {
              responseType: o,
              onUploadProgress: l,
              onDownloadProgress: u,
            } = s,
            c,
            d,
            p,
            S,
            g;
          function v() {
            S && S(),
              g && g(),
              s.cancelToken && s.cancelToken.unsubscribe(c),
              s.signal && s.signal.removeEventListener("abort", c);
          }
          let w = new XMLHttpRequest();
          w.open(s.method.toUpperCase(), s.url, !0), (w.timeout = s.timeout);
          function m() {
            if (!w) return;
            const h = mt.from(
                "getAllResponseHeaders" in w && w.getAllResponseHeaders()
              ),
              x = {
                data:
                  !o || o === "text" || o === "json"
                    ? w.responseText
                    : w.response,
                status: w.status,
                statusText: w.statusText,
                headers: h,
                config: e,
                request: w,
              };
            _0(
              function (O) {
                n(O), v();
              },
              function (O) {
                r(O), v();
              },
              x
            ),
              (w = null);
          }
          "onloadend" in w
            ? (w.onloadend = m)
            : (w.onreadystatechange = function () {
                !w ||
                  w.readyState !== 4 ||
                  (w.status === 0 &&
                    !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(m);
              }),
            (w.onabort = function () {
              w &&
                (r(new q("Request aborted", q.ECONNABORTED, e, w)), (w = null));
            }),
            (w.onerror = function () {
              r(new q("Network Error", q.ERR_NETWORK, e, w)), (w = null);
            }),
            (w.ontimeout = function () {
              let E = s.timeout
                ? "timeout of " + s.timeout + "ms exceeded"
                : "timeout exceeded";
              const x = s.transitional || S0;
              s.timeoutErrorMessage && (E = s.timeoutErrorMessage),
                r(
                  new q(
                    E,
                    x.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
                    e,
                    w
                  )
                ),
                (w = null);
            }),
            i === void 0 && a.setContentType(null),
            "setRequestHeader" in w &&
              C.forEach(a.toJSON(), function (E, x) {
                w.setRequestHeader(x, E);
              }),
            C.isUndefined(s.withCredentials) ||
              (w.withCredentials = !!s.withCredentials),
            o && o !== "json" && (w.responseType = s.responseType),
            u && (([p, g] = Pl(u, !0)), w.addEventListener("progress", p)),
            l &&
              w.upload &&
              (([d, S] = Pl(l)),
              w.upload.addEventListener("progress", d),
              w.upload.addEventListener("loadend", S)),
            (s.cancelToken || s.signal) &&
              ((c = (h) => {
                w &&
                  (r(!h || h.type ? new _i(null, e, w) : h),
                  w.abort(),
                  (w = null));
              }),
              s.cancelToken && s.cancelToken.subscribe(c),
              s.signal &&
                (s.signal.aborted
                  ? c()
                  : s.signal.addEventListener("abort", c)));
          const f = bb(s.url);
          if (f && pt.protocols.indexOf(f) === -1) {
            r(new q("Unsupported protocol " + f + ":", q.ERR_BAD_REQUEST, e));
            return;
          }
          w.send(i || null);
        });
      },
    Rb = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let r = new AbortController(),
          s;
        const i = function (u) {
          if (!s) {
            (s = !0), o();
            const c = u instanceof Error ? u : this.reason;
            r.abort(
              c instanceof q ? c : new _i(c instanceof Error ? c.message : c)
            );
          }
        };
        let a =
          t &&
          setTimeout(() => {
            (a = null), i(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
          }, t);
        const o = () => {
          e &&
            (a && clearTimeout(a),
            (a = null),
            e.forEach((u) => {
              u.unsubscribe
                ? u.unsubscribe(i)
                : u.removeEventListener("abort", i);
            }),
            (e = null));
        };
        e.forEach((u) => u.addEventListener("abort", i));
        const { signal: l } = r;
        return (l.unsubscribe = () => C.asap(o)), l;
      }
    },
    jb = function* (e, t) {
      let n = e.byteLength;
      if (n < t) {
        yield e;
        return;
      }
      let r = 0,
        s;
      for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
    },
    Db = async function* (e, t) {
      for await (const n of Ib(e)) yield* jb(n, t);
    },
    Ib = async function* (e) {
      if (e[Symbol.asyncIterator]) {
        yield* e;
        return;
      }
      const t = e.getReader();
      try {
        for (;;) {
          const { done: n, value: r } = await t.read();
          if (n) break;
          yield r;
        }
      } finally {
        await t.cancel();
      }
    },
    Em = (e, t, n, r) => {
      const s = Db(e, t);
      let i = 0,
        a,
        o = (l) => {
          a || ((a = !0), r && r(l));
        };
      return new ReadableStream(
        {
          async pull(l) {
            try {
              const { done: u, value: c } = await s.next();
              if (u) {
                o(), l.close();
                return;
              }
              let d = c.byteLength;
              if (n) {
                let p = (i += d);
                n(p);
              }
              l.enqueue(new Uint8Array(c));
            } catch (u) {
              throw (o(u), u);
            }
          },
          cancel(l) {
            return o(l), s.return();
          },
        },
        { highWaterMark: 2 }
      );
    },
    lu =
      typeof fetch == "function" &&
      typeof Request == "function" &&
      typeof Response == "function",
    k0 = lu && typeof ReadableStream == "function",
    Fb =
      lu &&
      (typeof TextEncoder == "function"
        ? (
            (e) => (t) =>
              e.encode(t)
          )(new TextEncoder())
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    C0 = (e, ...t) => {
      try {
        return !!e(...t);
      } catch {
        return !1;
      }
    },
    Ab =
      k0 &&
      C0(() => {
        let e = !1;
        const t = new Request(pt.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      }),
    _m = 64 * 1024,
    Dd = k0 && C0(() => C.isReadableStream(new Response("").body)),
    Ol = { stream: Dd && ((e) => e.body) };
  lu &&
    ((e) => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
        !Ol[t] &&
          (Ol[t] = C.isFunction(e[t])
            ? (n) => n[t]()
            : (n, r) => {
                throw new q(
                  `Response type '${t}' is not supported`,
                  q.ERR_NOT_SUPPORT,
                  r
                );
              });
      });
    })(new Response());
  const zb = async (e) => {
      if (e == null) return 0;
      if (C.isBlob(e)) return e.size;
      if (C.isSpecCompliantForm(e))
        return (
          await new Request(pt.origin, {
            method: "POST",
            body: e,
          }).arrayBuffer()
        ).byteLength;
      if (C.isArrayBufferView(e) || C.isArrayBuffer(e)) return e.byteLength;
      if ((C.isURLSearchParams(e) && (e = e + ""), C.isString(e)))
        return (await Fb(e)).byteLength;
    },
    $b = async (e, t) => {
      const n = C.toFiniteNumber(e.getContentLength());
      return n ?? zb(t);
    },
    Ub =
      lu &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: s,
          cancelToken: i,
          timeout: a,
          onDownloadProgress: o,
          onUploadProgress: l,
          responseType: u,
          headers: c,
          withCredentials: d = "same-origin",
          fetchOptions: p,
        } = T0(e);
        u = u ? (u + "").toLowerCase() : "text";
        let S = Rb([s, i && i.toAbortSignal()], a),
          g;
        const v =
          S &&
          S.unsubscribe &&
          (() => {
            S.unsubscribe();
          });
        let w;
        try {
          if (
            l &&
            Ab &&
            n !== "get" &&
            n !== "head" &&
            (w = await $b(c, r)) !== 0
          ) {
            let x = new Request(t, { method: "POST", body: r, duplex: "half" }),
              b;
            if (
              (C.isFormData(r) &&
                (b = x.headers.get("content-type")) &&
                c.setContentType(b),
              x.body)
            ) {
              const [O, k] = wm(w, Pl(Sm(l)));
              r = Em(x.body, _m, O, k);
            }
          }
          C.isString(d) || (d = d ? "include" : "omit");
          const m = "credentials" in Request.prototype;
          g = new Request(t, {
            ...p,
            signal: S,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: m ? d : void 0,
          });
          let f = await fetch(g);
          const h = Dd && (u === "stream" || u === "response");
          if (Dd && (o || (h && v))) {
            const x = {};
            ["status", "statusText", "headers"].forEach((P) => {
              x[P] = f[P];
            });
            const b = C.toFiniteNumber(f.headers.get("content-length")),
              [O, k] = (o && wm(b, Pl(Sm(o), !0))) || [];
            f = new Response(
              Em(f.body, _m, O, () => {
                k && k(), v && v();
              }),
              x
            );
          }
          u = u || "text";
          let E = await Ol[C.findKey(Ol, u) || "text"](f, e);
          return (
            !h && v && v(),
            await new Promise((x, b) => {
              _0(x, b, {
                data: E,
                headers: mt.from(f.headers),
                status: f.status,
                statusText: f.statusText,
                config: e,
                request: g,
              });
            })
          );
        } catch (m) {
          throw (
            (v && v(),
            m && m.name === "TypeError" && /fetch/i.test(m.message)
              ? Object.assign(new q("Network Error", q.ERR_NETWORK, e, g), {
                  cause: m.cause || m,
                })
              : q.from(m, m && m.code, e, g))
          );
        }
      }),
    Id = { http: nb, xhr: Lb, fetch: Ub };
  C.forEach(Id, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const bm = (e) => `- ${e}`,
    Hb = (e) => C.isFunction(e) || e === null || e === !1,
    P0 = {
      getAdapter: (e) => {
        e = C.isArray(e) ? e : [e];
        const { length: t } = e;
        let n, r;
        const s = {};
        for (let i = 0; i < t; i++) {
          n = e[i];
          let a;
          if (
            ((r = n),
            !Hb(n) && ((r = Id[(a = String(n)).toLowerCase()]), r === void 0))
          )
            throw new q(`Unknown adapter '${a}'`);
          if (r) break;
          s[a || "#" + i] = r;
        }
        if (!r) {
          const i = Object.entries(s).map(
            ([o, l]) =>
              `adapter ${o} ` +
              (l === !1
                ? "is not supported by the environment"
                : "is not available in the build")
          );
          let a = t
            ? i.length > 1
              ? `since :
` +
                i.map(bm).join(`
`)
              : " " + bm(i[0])
            : "as no adapter specified";
          throw new q(
            "There is no suitable adapter to dispatch the request " + a,
            "ERR_NOT_SUPPORT"
          );
        }
        return r;
      },
      adapters: Id,
    };
  function ac(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new _i(null, e);
  }
  function Tm(e) {
    return (
      ac(e),
      (e.headers = mt.from(e.headers)),
      (e.data = ic.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      P0.getAdapter(e.adapter || za.adapter)(e).then(
        function (r) {
          return (
            ac(e),
            (r.data = ic.call(e, e.transformResponse, r)),
            (r.headers = mt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            E0(r) ||
              (ac(e),
              r &&
                r.response &&
                ((r.response.data = ic.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = mt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
    );
  }
  const O0 = "1.7.7",
    lh = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      lh[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const km = {};
  lh.transitional = function (t, n, r) {
    function s(i, a) {
      return (
        "[Axios v" +
        O0 +
        "] Transitional option '" +
        i +
        "'" +
        a +
        (r ? ". " + r : "")
      );
    }
    return (i, a, o) => {
      if (t === !1)
        throw new q(
          s(a, " has been removed" + (n ? " in " + n : "")),
          q.ERR_DEPRECATED
        );
      return (
        n &&
          !km[a] &&
          ((km[a] = !0),
          console.warn(
            s(
              a,
              " has been deprecated since v" +
                n +
                " and will be removed in the near future"
            )
          )),
        t ? t(i, a, o) : !0
      );
    };
  };
  function Bb(e, t, n) {
    if (typeof e != "object")
      throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0; ) {
      const i = r[s],
        a = t[i];
      if (a) {
        const o = e[i],
          l = o === void 0 || a(o, i, e);
        if (l !== !0)
          throw new q("option " + i + " must be " + l, q.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (n !== !0) throw new q("Unknown option " + i, q.ERR_BAD_OPTION);
    }
  }
  const Fd = { assertOptions: Bb, validators: lh },
    Kn = Fd.validators;
  class ss {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new vm(), response: new vm() });
    }
    async request(t, n) {
      try {
        return await this._request(t, n);
      } catch (r) {
        if (r instanceof Error) {
          let s;
          Error.captureStackTrace
            ? Error.captureStackTrace((s = {}))
            : (s = new Error());
          const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
          try {
            r.stack
              ? i &&
                !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
                (r.stack +=
                  `
` + i)
              : (r.stack = i);
          } catch {}
        }
        throw r;
      }
    }
    _request(t, n) {
      typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
        (n = hs(this.defaults, n));
      const { transitional: r, paramsSerializer: s, headers: i } = n;
      r !== void 0 &&
        Fd.assertOptions(
          r,
          {
            silentJSONParsing: Kn.transitional(Kn.boolean),
            forcedJSONParsing: Kn.transitional(Kn.boolean),
            clarifyTimeoutError: Kn.transitional(Kn.boolean),
          },
          !1
        ),
        s != null &&
          (C.isFunction(s)
            ? (n.paramsSerializer = { serialize: s })
            : Fd.assertOptions(
                s,
                { encode: Kn.function, serialize: Kn.function },
                !0
              )),
        (n.method = (n.method || this.defaults.method || "get").toLowerCase());
      let a = i && C.merge(i.common, i[n.method]);
      i &&
        C.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (g) => {
            delete i[g];
          }
        ),
        (n.headers = mt.concat(a, i));
      const o = [];
      let l = !0;
      this.interceptors.request.forEach(function (v) {
        (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
          ((l = l && v.synchronous), o.unshift(v.fulfilled, v.rejected));
      });
      const u = [];
      this.interceptors.response.forEach(function (v) {
        u.push(v.fulfilled, v.rejected);
      });
      let c,
        d = 0,
        p;
      if (!l) {
        const g = [Tm.bind(this), void 0];
        for (
          g.unshift.apply(g, o),
            g.push.apply(g, u),
            p = g.length,
            c = Promise.resolve(n);
          d < p;

        )
          c = c.then(g[d++], g[d++]);
        return c;
      }
      p = o.length;
      let S = n;
      for (d = 0; d < p; ) {
        const g = o[d++],
          v = o[d++];
        try {
          S = g(S);
        } catch (w) {
          v.call(this, w);
          break;
        }
      }
      try {
        c = Tm.call(this, S);
      } catch (g) {
        return Promise.reject(g);
      }
      for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
      return c;
    }
    getUri(t) {
      t = hs(this.defaults, t);
      const n = b0(t.baseURL, t.url);
      return w0(n, t.params, t.paramsSerializer);
    }
  }
  C.forEach(["delete", "get", "head", "options"], function (t) {
    ss.prototype[t] = function (n, r) {
      return this.request(
        hs(r || {}, { method: t, url: n, data: (r || {}).data })
      );
    };
  });
  C.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
      return function (i, a, o) {
        return this.request(
          hs(o || {}, {
            method: t,
            headers: r ? { "Content-Type": "multipart/form-data" } : {},
            url: i,
            data: a,
          })
        );
      };
    }
    (ss.prototype[t] = n()), (ss.prototype[t + "Form"] = n(!0));
  });
  class uh {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function (i) {
        n = i;
      });
      const r = this;
      this.promise.then((s) => {
        if (!r._listeners) return;
        let i = r._listeners.length;
        for (; i-- > 0; ) r._listeners[i](s);
        r._listeners = null;
      }),
        (this.promise.then = (s) => {
          let i;
          const a = new Promise((o) => {
            r.subscribe(o), (i = o);
          }).then(s);
          return (
            (a.cancel = function () {
              r.unsubscribe(i);
            }),
            a
          );
        }),
        t(function (i, a, o) {
          r.reason || ((r.reason = new _i(i, a, o)), n(r.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const n = this._listeners.indexOf(t);
      n !== -1 && this._listeners.splice(n, 1);
    }
    toAbortSignal() {
      const t = new AbortController(),
        n = (r) => {
          t.abort(r);
        };
      return (
        this.subscribe(n),
        (t.signal.unsubscribe = () => this.unsubscribe(n)),
        t.signal
      );
    }
    static source() {
      let t;
      return {
        token: new uh(function (s) {
          t = s;
        }),
        cancel: t,
      };
    }
  }
  function Wb(e) {
    return function (n) {
      return e.apply(null, n);
    };
  }
  function Yb(e) {
    return C.isObject(e) && e.isAxiosError === !0;
  }
  const Ad = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Ad).forEach(([e, t]) => {
    Ad[t] = e;
  });
  function M0(e) {
    const t = new ss(e),
      n = o0(ss.prototype.request, t);
    return (
      C.extend(n, ss.prototype, t, { allOwnKeys: !0 }),
      C.extend(n, t, null, { allOwnKeys: !0 }),
      (n.create = function (s) {
        return M0(hs(e, s));
      }),
      n
    );
  }
  const je = M0(za);
  je.Axios = ss;
  je.CanceledError = _i;
  je.CancelToken = uh;
  je.isCancel = E0;
  je.VERSION = O0;
  je.toFormData = ou;
  je.AxiosError = q;
  je.Cancel = je.CanceledError;
  je.all = function (t) {
    return Promise.all(t);
  };
  je.spread = Wb;
  je.isAxiosError = Yb;
  je.mergeConfig = hs;
  je.AxiosHeaders = mt;
  je.formToJSON = (e) => x0(C.isHTMLForm(e) ? new FormData(e) : e);
  je.getAdapter = P0.getAdapter;
  je.HttpStatusCode = Ad;
  je.default = je;
  const Pe = je.create({
    baseURL: "http://localhost:3512/api/v1",
    withCredentials: !0,
  });
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Vb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    N0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var Gb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const qb = T.forwardRef(
    (
      {
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: s = "",
        children: i,
        iconNode: a,
        ...o
      },
      l
    ) =>
      T.createElement(
        "svg",
        {
          ref: l,
          ...Gb,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: N0("lucide", s),
          ...o,
        },
        [
          ...a.map(([u, c]) => T.createElement(u, c)),
          ...(Array.isArray(i) ? i : [i]),
        ]
      )
  );
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Vn = (e, t) => {
    const n = T.forwardRef(({ className: r, ...s }, i) =>
      T.createElement(qb, {
        ref: i,
        iconNode: t,
        className: N0(`lucide-${Vb(e)}`, r),
        ...s,
      })
    );
    return (n.displayName = `${e}`), n;
  };
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Qb = Vn("CircleArrowDown", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 8v8", key: "napkw2" }],
    ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Kb = Vn("CircleArrowRight", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 12h8", key: "1wcyev" }],
    ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Xb = Vn("CircleX", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Cm = Vn("EllipsisVertical", [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
    ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Jb = Vn("Heart", [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Fr = Vn("Loader", [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Zb = Vn("LogOut", [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const eT = Vn("MapPin", [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ]);
  /**
   * @license lucide-react v0.447.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const tT = Vn("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]),
    nT = () => {
      var s;
      const { data: e } = He({ queryKey: ["authUser"] }),
        t = gn(),
        n = Yn(),
        { mutate: r } = At({
          mutationFn: () => Pe.post("/users/logout"),
          onSuccess: () => {
            t.invalidateQueries({ queryKey: ["authUser"] }), location.reload();
          },
        });
      return y.jsx("nav", {
        className: "bg-white shadow-md sticky top-0 z-50",
        children: y.jsx("div", {
          className: "max-w-7xl mx-auto px-4",
          children: y.jsxs("div", {
            className: "flex justify-between items-center py-3",
            children: [
              y.jsx("div", {
                className: "flex items-center space-x-4",
                children: y.jsx(sr, {
                  to: "/",
                  children: y.jsx("img", {
                    className: "h-8 rounded",
                    src: "/small-logo.png",
                    alt: "Rent Property",
                  }),
                }),
              }),
              y.jsx("div", {
                className: "flex items-center gap-2 md:gap-6",
                children: e
                  ? y.jsxs("div", {
                      className: "flex justify-end gap-3 items-center",
                      children: [
                        ((s = e == null ? void 0 : e.data) == null
                          ? void 0
                          : s.role) == "user" &&
                          y.jsx(sr, {
                            to: "/admin/dashboard",
                            className:
                              "btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600",
                            children: "Become A Seller",
                          }),
                        y.jsxs("button", {
                          className:
                            "flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600",
                          onClick: () => r(),
                          children: [
                            y.jsx(Zb, { size: 20 }),
                            y.jsx("span", {
                              className: "hidden font-semibold md:inline",
                              children: "Logout",
                            }),
                          ],
                        }),
                        y.jsxs("div", {
                          className: "dropdown dropdown-bottom dropdown-end",
                          children: [
                            y.jsx("div", {
                              tabIndex: 0,
                              role: "button",
                              className:
                                " btn h-9 min-h-9 w-9 min-w-9 bg-transparent border-0 shadow-none hover:bg-blue-600 hover:text-white p-0 m-0",
                              children: y.jsx(tT, { className: " p-0 m-0 " }),
                            }),
                            y.jsxs("ul", {
                              tabIndex: 0,
                              className:
                                "menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-4",
                              children: [
                                y.jsx("li", {
                                  className:
                                    "hover:bg-blue-600 rounded-lg hover:text-white",
                                  onClick: () => n("/wishlist"),
                                  children: y.jsx("a", {
                                    children: "Wishlist",
                                  }),
                                }),
                                y.jsx("li", {
                                  className:
                                    "hover:bg-blue-600 rounded-lg hover:text-white",
                                  onClick: () => n("/messenger"),
                                  children: y.jsx("a", {
                                    children: "Messages",
                                  }),
                                }),
                                y.jsx("li", {
                                  children: y.jsx(sr, {
                                    to: `/profile/${e.data.username}`,
                                    className:
                                      "hover:bg-blue-600 rounded-lg hover:text-white",
                                    children: "Profile",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : y.jsxs(y.Fragment, {
                      children: [
                        y.jsx(sr, {
                          to: "/login",
                          className: "btn btn-ghost",
                          children: "Sign In",
                        }),
                        y.jsx(sr, {
                          to: "/signup",
                          className: "btn btn-primary",
                          children: "Join now",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        }),
      });
    },
    rT = ({ children: e }) =>
      y.jsxs("div", {
        className: "min-h-screen bg-base-100",
        children: [y.jsx(nT, {}), y.jsx("main", { children: e })],
      });
  let sT = { data: "" },
    iT = (e) =>
      typeof window == "object"
        ? (
            (e ? e.querySelector("#_goober") : window._goober) ||
            Object.assign(
              (e || document.head).appendChild(document.createElement("style")),
              { innerHTML: " ", id: "_goober" }
            )
          ).firstChild
        : e || sT,
    aT = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    oT = /\/\*[^]*?\*\/|  +/g,
    Pm = /\n+/g,
    ir = (e, t) => {
      let n = "",
        r = "",
        s = "";
      for (let i in e) {
        let a = e[i];
        i[0] == "@"
          ? i[1] == "i"
            ? (n = i + " " + a + ";")
            : (r +=
                i[1] == "f"
                  ? ir(a, i)
                  : i + "{" + ir(a, i[1] == "k" ? "" : t) + "}")
          : typeof a == "object"
            ? (r += ir(
                a,
                t
                  ? t.replace(/([^,])+/g, (o) =>
                      i.replace(/(^:.*)|([^,])+/g, (l) =>
                        /&/.test(l) ? l.replace(/&/g, o) : o ? o + " " + l : l
                      )
                    )
                  : i
              ))
            : a != null &&
              ((i = /^--/.test(i)
                ? i
                : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
              (s += ir.p ? ir.p(i, a) : i + ":" + a + ";"));
      }
      return n + (t && s ? t + "{" + s + "}" : s) + r;
    },
    xn = {},
    L0 = (e) => {
      if (typeof e == "object") {
        let t = "";
        for (let n in e) t += n + L0(e[n]);
        return t;
      }
      return e;
    },
    lT = (e, t, n, r, s) => {
      let i = L0(e),
        a =
          xn[i] ||
          (xn[i] = ((l) => {
            let u = 0,
              c = 11;
            for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
            return "go" + c;
          })(i));
      if (!xn[a]) {
        let l =
          i !== e
            ? e
            : ((u) => {
                let c,
                  d,
                  p = [{}];
                for (; (c = aT.exec(u.replace(oT, ""))); )
                  c[4]
                    ? p.shift()
                    : c[3]
                      ? ((d = c[3].replace(Pm, " ").trim()),
                        p.unshift((p[0][d] = p[0][d] || {})))
                      : (p[0][c[1]] = c[2].replace(Pm, " ").trim());
                return p[0];
              })(e);
        xn[a] = ir(s ? { ["@keyframes " + a]: l } : l, n ? "" : "." + a);
      }
      let o = n && xn.g ? xn.g : null;
      return (
        n && (xn.g = xn[a]),
        ((l, u, c, d) => {
          d
            ? (u.data = u.data.replace(d, l))
            : u.data.indexOf(l) === -1 &&
              (u.data = c ? l + u.data : u.data + l);
        })(xn[a], t, r, o),
        a
      );
    },
    uT = (e, t, n) =>
      e.reduce((r, s, i) => {
        let a = t[i];
        if (a && a.call) {
          let o = a(n),
            l = (o && o.props && o.props.className) || (/^go/.test(o) && o);
          a = l
            ? "." + l
            : o && typeof o == "object"
              ? o.props
                ? ""
                : ir(o, "")
              : o === !1
                ? ""
                : o;
        }
        return r + s + (a ?? "");
      }, "");
  function uu(e) {
    let t = this || {},
      n = e.call ? e(t.p) : e;
    return lT(
      n.unshift
        ? n.raw
          ? uT(n, [].slice.call(arguments, 1), t.p)
          : n.reduce((r, s) => Object.assign(r, s && s.call ? s(t.p) : s), {})
        : n,
      iT(t.target),
      t.g,
      t.o,
      t.k
    );
  }
  let R0, zd, $d;
  uu.bind({ g: 1 });
  let Un = uu.bind({ k: 1 });
  function cT(e, t, n, r) {
    (ir.p = t), (R0 = e), (zd = n), ($d = r);
  }
  function Ar(e, t) {
    let n = this || {};
    return function () {
      let r = arguments;
      function s(i, a) {
        let o = Object.assign({}, i),
          l = o.className || s.className;
        (n.p = Object.assign({ theme: zd && zd() }, o)),
          (n.o = / *go\d+/.test(l)),
          (o.className = uu.apply(n, r) + (l ? " " + l : ""));
        let u = e;
        return (
          e[0] && ((u = o.as || e), delete o.as), $d && u[0] && $d(o), R0(u, o)
        );
      }
      return s;
    };
  }
  var dT = (e) => typeof e == "function",
    Ml = (e, t) => (dT(e) ? e(t) : e),
    fT = (() => {
      let e = 0;
      return () => (++e).toString();
    })(),
    j0 = (() => {
      let e;
      return () => {
        if (e === void 0 && typeof window < "u") {
          let t = matchMedia("(prefers-reduced-motion: reduce)");
          e = !t || t.matches;
        }
        return e;
      };
    })(),
    hT = 20,
    Wo = new Map(),
    pT = 1e3,
    Om = (e) => {
      if (Wo.has(e)) return;
      let t = setTimeout(() => {
        Wo.delete(e), vs({ type: 4, toastId: e });
      }, pT);
      Wo.set(e, t);
    },
    mT = (e) => {
      let t = Wo.get(e);
      t && clearTimeout(t);
    },
    Ud = (e, t) => {
      switch (t.type) {
        case 0:
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, hT) };
        case 1:
          return (
            t.toast.id && mT(t.toast.id),
            {
              ...e,
              toasts: e.toasts.map((i) =>
                i.id === t.toast.id ? { ...i, ...t.toast } : i
              ),
            }
          );
        case 2:
          let { toast: n } = t;
          return e.toasts.find((i) => i.id === n.id)
            ? Ud(e, { type: 1, toast: n })
            : Ud(e, { type: 0, toast: n });
        case 3:
          let { toastId: r } = t;
          return (
            r
              ? Om(r)
              : e.toasts.forEach((i) => {
                  Om(i.id);
                }),
            {
              ...e,
              toasts: e.toasts.map((i) =>
                i.id === r || r === void 0 ? { ...i, visible: !1 } : i
              ),
            }
          );
        case 4:
          return t.toastId === void 0
            ? { ...e, toasts: [] }
            : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
        case 5:
          return { ...e, pausedAt: t.time };
        case 6:
          let s = t.time - (e.pausedAt || 0);
          return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map((i) => ({
              ...i,
              pauseDuration: i.pauseDuration + s,
            })),
          };
      }
    },
    Yo = [],
    Vo = { toasts: [], pausedAt: void 0 },
    vs = (e) => {
      (Vo = Ud(Vo, e)),
        Yo.forEach((t) => {
          t(Vo);
        });
    },
    gT = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
    vT = (e = {}) => {
      let [t, n] = T.useState(Vo);
      T.useEffect(
        () => (
          Yo.push(n),
          () => {
            let s = Yo.indexOf(n);
            s > -1 && Yo.splice(s, 1);
          }
        ),
        [t]
      );
      let r = t.toasts.map((s) => {
        var i, a;
        return {
          ...e,
          ...e[s.type],
          ...s,
          duration:
            s.duration ||
            ((i = e[s.type]) == null ? void 0 : i.duration) ||
            (e == null ? void 0 : e.duration) ||
            gT[s.type],
          style: {
            ...e.style,
            ...((a = e[s.type]) == null ? void 0 : a.style),
            ...s.style,
          },
        };
      });
      return { ...t, toasts: r };
    },
    yT = (e, t = "blank", n) => ({
      createdAt: Date.now(),
      visible: !0,
      type: t,
      ariaProps: { role: "status", "aria-live": "polite" },
      message: e,
      pauseDuration: 0,
      ...n,
      id: (n == null ? void 0 : n.id) || fT(),
    }),
    $a = (e) => (t, n) => {
      let r = yT(t, e, n);
      return vs({ type: 2, toast: r }), r.id;
    },
    nt = (e, t) => $a("blank")(e, t);
  nt.error = $a("error");
  nt.success = $a("success");
  nt.loading = $a("loading");
  nt.custom = $a("custom");
  nt.dismiss = (e) => {
    vs({ type: 3, toastId: e });
  };
  nt.remove = (e) => vs({ type: 4, toastId: e });
  nt.promise = (e, t, n) => {
    let r = nt.loading(t.loading, {
      ...n,
      ...(n == null ? void 0 : n.loading),
    });
    return (
      e
        .then(
          (s) => (
            nt.success(Ml(t.success, s), {
              id: r,
              ...n,
              ...(n == null ? void 0 : n.success),
            }),
            s
          )
        )
        .catch((s) => {
          nt.error(Ml(t.error, s), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.error),
          });
        }),
      e
    );
  };
  var wT = (e, t) => {
      vs({ type: 1, toast: { id: e, height: t } });
    },
    ST = () => {
      vs({ type: 5, time: Date.now() });
    },
    xT = (e) => {
      let { toasts: t, pausedAt: n } = vT(e);
      T.useEffect(() => {
        if (n) return;
        let i = Date.now(),
          a = t.map((o) => {
            if (o.duration === 1 / 0) return;
            let l = (o.duration || 0) + o.pauseDuration - (i - o.createdAt);
            if (l < 0) {
              o.visible && nt.dismiss(o.id);
              return;
            }
            return setTimeout(() => nt.dismiss(o.id), l);
          });
        return () => {
          a.forEach((o) => o && clearTimeout(o));
        };
      }, [t, n]);
      let r = T.useCallback(() => {
          n && vs({ type: 6, time: Date.now() });
        }, [n]),
        s = T.useCallback(
          (i, a) => {
            let {
                reverseOrder: o = !1,
                gutter: l = 8,
                defaultPosition: u,
              } = a || {},
              c = t.filter(
                (S) => (S.position || u) === (i.position || u) && S.height
              ),
              d = c.findIndex((S) => S.id === i.id),
              p = c.filter((S, g) => g < d && S.visible).length;
            return c
              .filter((S) => S.visible)
              .slice(...(o ? [p + 1] : [0, p]))
              .reduce((S, g) => S + (g.height || 0) + l, 0);
          },
          [t]
        );
      return {
        toasts: t,
        handlers: {
          updateHeight: wT,
          startPause: ST,
          endPause: r,
          calculateOffset: s,
        },
      };
    },
    ET = Un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    _T = Un`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    bT = Un`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    TT = Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ET} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${bT} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    kT = Un`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    CT = Ar("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${kT} 1s linear infinite;
`,
    PT = Un`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    OT = Un`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
    MT = Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${PT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${OT} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
    NT = Ar("div")`
  position: absolute;
`,
    LT = Ar("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    RT = Un`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    jT = Ar("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${RT} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    DT = ({ toast: e }) => {
      let { icon: t, type: n, iconTheme: r } = e;
      return t !== void 0
        ? typeof t == "string"
          ? T.createElement(jT, null, t)
          : t
        : n === "blank"
          ? null
          : T.createElement(
              LT,
              null,
              T.createElement(CT, { ...r }),
              n !== "loading" &&
                T.createElement(
                  NT,
                  null,
                  n === "error"
                    ? T.createElement(TT, { ...r })
                    : T.createElement(MT, { ...r })
                )
            );
    },
    IT = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
    FT = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
    AT = "0%{opacity:0;} 100%{opacity:1;}",
    zT = "0%{opacity:1;} 100%{opacity:0;}",
    $T = Ar("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
    UT = Ar("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    HT = (e, t) => {
      let n = e.includes("top") ? 1 : -1,
        [r, s] = j0() ? [AT, zT] : [IT(n), FT(n)];
      return {
        animation: t
          ? `${Un(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
          : `${Un(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
      };
    },
    BT = T.memo(({ toast: e, position: t, style: n, children: r }) => {
      let s = e.height
          ? HT(e.position || t || "top-center", e.visible)
          : { opacity: 0 },
        i = T.createElement(DT, { toast: e }),
        a = T.createElement(UT, { ...e.ariaProps }, Ml(e.message, e));
      return T.createElement(
        $T,
        { className: e.className, style: { ...s, ...n, ...e.style } },
        typeof r == "function"
          ? r({ icon: i, message: a })
          : T.createElement(T.Fragment, null, i, a)
      );
    });
  cT(T.createElement);
  var WT = ({
      id: e,
      className: t,
      style: n,
      onHeightUpdate: r,
      children: s,
    }) => {
      let i = T.useCallback(
        (a) => {
          if (a) {
            let o = () => {
              let l = a.getBoundingClientRect().height;
              r(e, l);
            };
            o(),
              new MutationObserver(o).observe(a, {
                subtree: !0,
                childList: !0,
                characterData: !0,
              });
          }
        },
        [e, r]
      );
      return T.createElement("div", { ref: i, className: t, style: n }, s);
    },
    YT = (e, t) => {
      let n = e.includes("top"),
        r = n ? { top: 0 } : { bottom: 0 },
        s = e.includes("center")
          ? { justifyContent: "center" }
          : e.includes("right")
            ? { justifyContent: "flex-end" }
            : {};
      return {
        left: 0,
        right: 0,
        display: "flex",
        position: "absolute",
        transition: j0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
        transform: `translateY(${t * (n ? 1 : -1)}px)`,
        ...r,
        ...s,
      };
    },
    VT = uu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    So = 16,
    GT = ({
      reverseOrder: e,
      position: t = "top-center",
      toastOptions: n,
      gutter: r,
      children: s,
      containerStyle: i,
      containerClassName: a,
    }) => {
      let { toasts: o, handlers: l } = xT(n);
      return T.createElement(
        "div",
        {
          style: {
            position: "fixed",
            zIndex: 9999,
            top: So,
            left: So,
            right: So,
            bottom: So,
            pointerEvents: "none",
            ...i,
          },
          className: a,
          onMouseEnter: l.startPause,
          onMouseLeave: l.endPause,
        },
        o.map((u) => {
          let c = u.position || t,
            d = l.calculateOffset(u, {
              reverseOrder: e,
              gutter: r,
              defaultPosition: t,
            }),
            p = YT(c, d);
          return T.createElement(
            WT,
            {
              id: u.id,
              key: u.id,
              onHeightUpdate: l.updateHeight,
              className: u.visible ? VT : "",
              style: p,
            },
            u.type === "custom"
              ? Ml(u.message, u)
              : s
                ? s(u)
                : T.createElement(BT, { toast: u, position: c })
          );
        })
      );
    },
    de = nt;
  const qT = () => {
    var i;
    const e = gn(),
      { data: t } = He({
        queryKey: ["selectedCategory"],
        initialData: { name: "all" },
      }),
      {
        data: n,
        isLoading: r,
        isSuccess: s,
      } = He({
        queryKey: ["categories"],
        queryFn: async () => {
          try {
            return (await Pe.get("/category")).data;
          } catch (a) {
            de.error(a.response.data.message || "Something went wrong");
          }
        },
      });
    return (
      s && e.invalidateQueries({ queryKey: ["listings"] }),
      r
        ? y.jsxs("div", {
            className: "flex justify-center items-center h-screen ",
            children: [
              y.jsx(Fr, { className: "size-10 animate-spin text-blue-700" }),
              " ",
            ],
          })
        : y.jsxs("div", {
            className:
              " flex flex-col justify-center items-center mt-10 md:mt-24 gap-5 md:gap-10 px-10 ",
            children: [
              y.jsx("h1", {
                className:
                  " text-center font-semibold text-3xl md:text-5xl  text-blue-600 ",
                children: "Explore Top Categories",
              }),
              y.jsx("p", {
                className:
                  "pb-12 max-w-[700px] text-sm md:text-lg font-semibold text-gray-600  mx-auto text-justify md:text-center",
                children:
                  "Explore our wide range of vacation rentals that cater to all types of travelers. Immerse yourself in the local culture, enjoy the comforts of home, and create unforgettable memories in your dream destination.",
              }),
              y.jsxs("div", {
                className:
                  " flex gap-2 justify-center overflow-hidden  flex-wrap ",
                children: [
                  y.jsx("button", {
                    className: `btn btn-outline btn-primary ${t.name === "all" && "btn-active "}`,
                    onClick: () => {
                      e.setQueryData(["selectedCategory"], () => ({
                        name: "all",
                      }));
                    },
                    children: "All",
                  }),
                  (i = n.data) == null
                    ? void 0
                    : i.map((a, o) =>
                        y.jsx(
                          "div",
                          {
                            className: "flex pb-20 ",
                            children: y.jsx("button", {
                              className: ` btn btn-outline btn-primary  ${t.name === a.name && "btn-active"}`,
                              onClick: () => {
                                e.setQueryData(["selectedCategory"], () => ({
                                  name: a.name,
                                }));
                              },
                              children: a.name,
                            }),
                          },
                          o
                        )
                      ),
                ],
              }),
            ],
          })
    );
  };
  var D0 = { exports: {} },
    QT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    KT = QT,
    XT = KT;
  function I0() {}
  function F0() {}
  F0.resetWarningCache = I0;
  var JT = function () {
    function e(r, s, i, a, o, l) {
      if (l !== XT) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((u.name = "Invariant Violation"), u);
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: F0,
      resetWarningCache: I0,
    };
    return (n.PropTypes = n), n;
  };
  D0.exports = JT();
  var Ua = D0.exports;
  const gt = wg(Ua);
  class Hd extends T.Component {
    constructor(t) {
      super(t),
        (this.scrollListener = this.scrollListener.bind(this)),
        (this.eventListenerOptions = this.eventListenerOptions.bind(this)),
        (this.mousewheelListener = this.mousewheelListener.bind(this));
    }
    componentDidMount() {
      (this.pageLoaded = this.props.pageStart),
        (this.options = this.eventListenerOptions()),
        this.attachScrollListener();
    }
    componentDidUpdate() {
      if (this.props.isReverse && this.loadMore) {
        const t = this.getParentElement(this.scrollComponent);
        (t.scrollTop =
          t.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop),
          (this.loadMore = !1);
      }
      this.attachScrollListener();
    }
    componentWillUnmount() {
      this.detachScrollListener(), this.detachMousewheelListener();
    }
    isPassiveSupported() {
      let t = !1;
      const n = {
        get passive() {
          t = !0;
        },
      };
      try {
        document.addEventListener("test", null, n),
          document.removeEventListener("test", null, n);
      } catch {}
      return t;
    }
    eventListenerOptions() {
      let t = this.props.useCapture;
      return (
        this.isPassiveSupported()
          ? (t = { useCapture: this.props.useCapture, passive: !0 })
          : (t = { passive: !1 }),
        t
      );
    }
    setDefaultLoader(t) {
      this.defaultLoader = t;
    }
    detachMousewheelListener() {
      let t = window;
      this.props.useWindow === !1 && (t = this.scrollComponent.parentNode),
        t.removeEventListener(
          "mousewheel",
          this.mousewheelListener,
          this.options ? this.options : this.props.useCapture
        );
    }
    detachScrollListener() {
      let t = window;
      this.props.useWindow === !1 &&
        (t = this.getParentElement(this.scrollComponent)),
        t.removeEventListener(
          "scroll",
          this.scrollListener,
          this.options ? this.options : this.props.useCapture
        ),
        t.removeEventListener(
          "resize",
          this.scrollListener,
          this.options ? this.options : this.props.useCapture
        );
    }
    getParentElement(t) {
      const n = this.props.getScrollParent && this.props.getScrollParent();
      return n ?? (t && t.parentNode);
    }
    filterProps(t) {
      return t;
    }
    attachScrollListener() {
      const t = this.getParentElement(this.scrollComponent);
      if (!this.props.hasMore || !t) return;
      let n = window;
      this.props.useWindow === !1 && (n = t),
        n.addEventListener(
          "mousewheel",
          this.mousewheelListener,
          this.options ? this.options : this.props.useCapture
        ),
        n.addEventListener(
          "scroll",
          this.scrollListener,
          this.options ? this.options : this.props.useCapture
        ),
        n.addEventListener(
          "resize",
          this.scrollListener,
          this.options ? this.options : this.props.useCapture
        ),
        this.props.initialLoad && this.scrollListener();
    }
    mousewheelListener(t) {
      t.deltaY === 1 && !this.isPassiveSupported() && t.preventDefault();
    }
    scrollListener() {
      const t = this.scrollComponent,
        n = window,
        r = this.getParentElement(t);
      let s;
      if (this.props.useWindow) {
        const i =
            document.documentElement ||
            document.body.parentNode ||
            document.body,
          a = n.pageYOffset !== void 0 ? n.pageYOffset : i.scrollTop;
        this.props.isReverse ? (s = a) : (s = this.calculateOffset(t, a));
      } else
        this.props.isReverse
          ? (s = r.scrollTop)
          : (s = t.scrollHeight - r.scrollTop - r.clientHeight);
      s < Number(this.props.threshold) &&
        t &&
        t.offsetParent !== null &&
        (this.detachScrollListener(),
        (this.beforeScrollHeight = r.scrollHeight),
        (this.beforeScrollTop = r.scrollTop),
        typeof this.props.loadMore == "function" &&
          (this.props.loadMore((this.pageLoaded += 1)), (this.loadMore = !0)));
    }
    calculateOffset(t, n) {
      return t
        ? this.calculateTopPosition(t) +
            (t.offsetHeight - n - window.innerHeight)
        : 0;
    }
    calculateTopPosition(t) {
      return t ? t.offsetTop + this.calculateTopPosition(t.offsetParent) : 0;
    }
    render() {
      const t = this.filterProps(this.props),
        {
          children: n,
          element: r,
          hasMore: s,
          initialLoad: i,
          isReverse: a,
          loader: o,
          loadMore: l,
          pageStart: u,
          ref: c,
          threshold: d,
          useCapture: p,
          useWindow: S,
          getScrollParent: g,
          ...v
        } = t;
      v.ref = (m) => {
        (this.scrollComponent = m), c && c(m);
      };
      const w = [n];
      return (
        s &&
          (o
            ? a
              ? w.unshift(o)
              : w.push(o)
            : this.defaultLoader &&
              (a ? w.unshift(this.defaultLoader) : w.push(this.defaultLoader))),
        Me.createElement(r, v, w)
      );
    }
  }
  Cu(Hd, "propTypes", {
    children: gt.node.isRequired,
    element: gt.node,
    hasMore: gt.bool,
    initialLoad: gt.bool,
    isReverse: gt.bool,
    loader: gt.node,
    loadMore: gt.func.isRequired,
    pageStart: gt.number,
    ref: gt.func,
    getScrollParent: gt.func,
    threshold: gt.number,
    useCapture: gt.bool,
    useWindow: gt.bool,
  }),
    Cu(Hd, "defaultProps", {
      element: "div",
      hasMore: !1,
      initialLoad: !0,
      pageStart: 0,
      ref: null,
      threshold: 250,
      useWindow: !0,
      isReverse: !1,
      useCapture: !1,
      loader: null,
      getScrollParent: null,
    });
  const A0 = (e) => {
      var s, i, a, o, l, u, c, d, p, S;
      e, "data";
      const t = e == null ? void 0 : e.item,
        n = Yn(),
        r = (g) => {
          n(`/listings/${g}`);
        };
      return (
        (t, "item"),
        y.jsxs("div", {
          className:
            "card bg-base-100 w-80 h-80 shadow-lg m-5 cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl",
          onClick: () => {
            r(t == null ? void 0 : t._id);
          },
          children: [
            y.jsx("figure", {
              children: y.jsx("img", {
                src:
                  ((s = t.images) == null ? void 0 : s.length) > 0
                    ? (a =
                        (i = t == null ? void 0 : t.images) == null
                          ? void 0
                          : i[0]) == null
                      ? void 0
                      : a.url
                    : "/public/assets/images/5.jpg",
                alt: "House",
              }),
            }),
            y.jsxs("div", {
              className: "card-body p-5",
              children: [
                y.jsxs("h2", {
                  className: "card-title text-blue-600",
                  children: [
                    (o = t == null ? void 0 : t.title) == null
                      ? void 0
                      : o.substring(0, 15),
                    `${((l = t == null ? void 0 : t.title) == null ? void 0 : l.length) > 15 ? "..." : ""}`,
                  ],
                }),
                y.jsxs("p", {
                  className: "text-gray-600",
                  children: [
                    (u = t.description) == null ? void 0 : u.substring(0, 30),
                    `${((c = t == null ? void 0 : t.description) == null ? void 0 : c.length) > 30 ? "..." : ""}`,
                  ],
                }),
                y.jsxs("div", {
                  className: "relative w-full max-w-md",
                  children: [
                    y.jsx("div", {
                      className: "absolute inset-0 flex items-center",
                      "aria-hidden": "true",
                      children: y.jsx("div", {
                        className: "w-full border-t border-gray-300",
                      }),
                    }),
                    y.jsx("div", {
                      className: "relative flex justify-center",
                      children: y.jsx("span", {
                        className: "bg-white px-3 text-sm text-gray-600",
                        children: "Details",
                      }),
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "card-actions justify-end mt-3",
                  children: [
                    y.jsx("span", {
                      className:
                        " text-blue-600 text-xs font-[400] me-1 px-2.5 py-0.5 rounded shadow-inner",
                      children:
                        (d = t == null ? void 0 : t.location) == null
                          ? void 0
                          : d.city,
                    }),
                    y.jsx("span", {
                      className:
                        " text-blue-600 text-xs font-[400] me-1 px-2.5 py-0.5 rounded shadow-inner ",
                      children:
                        ((p = t == null ? void 0 : t.categories) == null
                          ? void 0
                          : p.name) ||
                        ((S = t == null ? void 0 : t.categories[0]) == null
                          ? void 0
                          : S.name),
                    }),
                    y.jsx("span", {
                      className:
                        "bg-blue-600 text-white text-xs font-[500] me-1 px-2.5 py-1 rounded ",
                      children: new Intl.NumberFormat("en-PK", {
                        style: "currency",
                        currency: "PKR",
                      }).format(t == null ? void 0 : t.price),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    },
    ZT = () => {
      const [e, t] = T.useState(!1),
        n = gn(),
        { data: r } = He({
          queryKey: ["selectedCategory"],
          initialData: { name: "all" },
        });
      T.useEffect(() => {
        "render again", r && t(!0);
      }, [r]),
        e && (n.invalidateQueries({ queryKey: ["listings"] }), t(!1));
      const s = async ({ pageParam: p = 1 }) => {
          const { data: S } = await Pe.get(
            `listings/c/${r.name}?page=${p}&limit=12`
          );
          return S, S.data;
        },
        {
          data: i = {},
          error: a,
          fetchNextPage: o,
          hasNextPage: l,
          isFetching: u,
          isLoading: c,
          isError: d,
        } = g_({
          queryKey: ["listings"],
          queryFn: s,
          initialPageParam: 1,
          getNextPageParam: (p) => {
            if (p.hasNextPage) return p.page + 1;
          },
          keepPreviousData: !0,
          refetchOnWindowFocus: !1,
        });
      return c
        ? y.jsx("div", {
            className: "text-center w-full",
            children: "Loading...",
          })
        : (i,
          !i && !c
            ? y.jsx("div", {
                className: "text-center w-full",
                children: "No data",
              })
            : d
              ? y.jsx("div", {
                  className: "text-center w-full",
                  children: a.message,
                })
              : y.jsxs("div", {
                  className: "mb-48",
                  children: [
                    y.jsx(Hd, {
                      loadMore: () => {
                        u || o();
                      },
                      hasMore: l,
                      children: i.pages.map((p, S) =>
                        y.jsx(
                          "div",
                          {
                            className:
                              "flex flex-wrap justify-center items-center px-10",
                            children: p.docs.map((g, v) =>
                              y.jsx(A0, { item: g }, v)
                            ),
                          },
                          S
                        )
                      ),
                    }),
                    u &&
                      y.jsxs("div", {
                        className: "flex justify-center items-center h-screen",
                        children: [
                          y.jsx(Fr, {
                            className: "size-10 animate-spin text-blue-700",
                          }),
                          " ",
                        ],
                      }),
                    !l &&
                      !u &&
                      y.jsx("div", {
                        className: "text-center w-full mt-20",
                        children: "No More Data",
                      }),
                  ],
                }));
    },
    ek = () =>
      y.jsx("div", {
        className:
          "hidden md:block w-[100%] h-[80vh] bg-gradient-to-b from-black via-black to-black bg-opacity-50 bg-contain md:bg-cover bg-no-repeat md:bg-center  ",
        style: { backgroundImage: "url(/assets/images/slide.jpg)" },
        children: y.jsxs("h1", {
          className:
            "px-[30px] py-[30px] md:px-[20px] md:py-[40px] text-[15px] md:text-[40px] text-center text-[white]",
          children: [
            "Welcome Home! Anywhere you roam ",
            y.jsx("br", {}),
            " Stay in the moment. Make your memories",
          ],
        }),
      }),
    tk = () =>
      y.jsxs(y.Fragment, {
        children: [y.jsx(ek, {}), y.jsx(qT, {}), y.jsx(ZT, {})],
      }),
    nk = () => {
      const [e, t] = T.useState(""),
        [n, r] = T.useState(""),
        [s, i] = T.useState(""),
        [a, o] = T.useState(""),
        [l, u] = T.useState(""),
        c = Yn(),
        { mutate: d, isPending: p } = At({
          mutationFn: async (v) => (await Pe.post("/users/register", v)).data,
          onSuccess: () => {
            nt.success("Account created successfully"), c("/login");
          },
          onError: (v) => {
            nt.error(v.response.data.message || "Something went wrong");
          },
        }),
        S = "+92" + a,
        g = (v) => {
          v.preventDefault(),
            d({ fullName: e, username: s, email: n, phone: S, password: l });
        };
      return y.jsxs("form", {
        onSubmit: g,
        className: "flex flex-col gap-4",
        children: [
          y.jsx("input", {
            type: "text",
            placeholder: "Full name",
            value: e,
            onChange: (v) => t(v.target.value),
            className: "input input-bordered w-full",
            required: !0,
          }),
          y.jsx("input", {
            type: "text",
            placeholder: "Username",
            value: s,
            onChange: (v) => i(v.target.value),
            className: "input input-bordered w-full",
            required: !0,
          }),
          y.jsx("input", {
            type: "email",
            placeholder: "Email",
            value: n,
            onChange: (v) => r(v.target.value),
            className: "input input-bordered w-full",
            required: !0,
          }),
          y.jsx("input", {
            type: "phone",
            placeholder: "Phone Ex: 3125649693",
            value: a,
            onChange: (v) => o(v.target.value),
            className: "input input-bordered w-full",
            required: !0,
          }),
          y.jsx("input", {
            type: "password",
            placeholder: "Password (6+ characters)",
            value: l,
            onChange: (v) => u(v.target.value),
            className: "input input-bordered w-full",
            required: !0,
          }),
          y.jsx("button", {
            type: "submit",
            disabled: p,
            className: "btn btn-primary w-full text-white",
            children: p
              ? y.jsx(Fr, { className: "size-5 animate-spin" })
              : "Agree & Join",
          }),
        ],
      });
    },
    rk = () =>
      y.jsxs("div", {
        className:
          "min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
        children: [
          y.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-md",
            children: [
              y.jsx("img", {
                className: "mx-auto h-36 w-auto",
                src: "/logo.svg",
                alt: "LinkedIn",
              }),
              y.jsx("h2", {
                className: "text-center text-3xl font-extrabold text-gray-900",
                children: "Make the most of your professional life",
              }),
            ],
          }),
          y.jsx("div", {
            className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md",
            children: y.jsxs("div", {
              className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
              children: [
                y.jsx(nk, {}),
                y.jsxs("div", {
                  className: "mt-6",
                  children: [
                    y.jsxs("div", {
                      className: "relative",
                      children: [
                        y.jsx("div", {
                          className: "absolute inset-0 flex items-center",
                          children: y.jsx("div", {
                            className: "w-full border-t border-gray-300",
                          }),
                        }),
                        y.jsx("div", {
                          className: "relative flex justify-center text-sm",
                          children: y.jsx("span", {
                            className: "px-2 bg-white text-gray-500",
                            children: "Already on Property Rent?",
                          }),
                        }),
                      ],
                    }),
                    y.jsx("div", {
                      className: "mt-6",
                      children: y.jsx(sr, {
                        to: "/login",
                        className:
                          "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50",
                        children: "Sign in",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    sk = () => {
      const [e, t] = T.useState(""),
        [n, r] = T.useState(""),
        s = gn(),
        { mutate: i, isPending: a } = At({
          mutationFn: (l) => Pe.post("/users/login", l),
          onSuccess: () => {
            s.invalidateQueries({ queryKey: ["authUser"] }),
              de.success("Logged in successfully");
          },
          onError: (l) => {
            de.error(l.response.data.message || "Something went wrong");
          },
        }),
        o = (l) => {
          l.preventDefault(), i({ username: e, password: n });
        };
      return y.jsxs("form", {
        onSubmit: o,
        className: "space-y-4 w-full max-w-md",
        children: [
          y.jsx("input", {
            type: "text",
            placeholder: "Username",
            value: e,
            onChange: (l) => t(l.target.value),
            className: "input input-bordered w-full",
            disabled: a,
            required: !0,
          }),
          y.jsx("input", {
            type: "password",
            placeholder: "Password",
            value: n,
            onChange: (l) => r(l.target.value),
            className: "input input-bordered w-full",
            disabled: a,
            required: !0,
          }),
          y.jsx("button", {
            type: "submit",
            className: "btn btn-primary w-full",
            children: a
              ? y.jsx(Fr, { className: "size-5 animate-spin" })
              : "Login",
          }),
        ],
      });
    },
    ik = () =>
      y.jsxs("div", {
        className:
          "min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
        children: [
          y.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-md",
            children: [
              y.jsx("img", {
                className: "mx-auto h-40 w-auto",
                src: "/logo.svg",
                alt: "LinkedIn",
              }),
              y.jsx("h2", {
                className: " text-center text-3xl font-extrabold text-gray-900",
                children: "Sign in to your account",
              }),
            ],
          }),
          y.jsx("div", {
            className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md",
            children: y.jsxs("div", {
              className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
              children: [
                y.jsx(sk, {}),
                y.jsxs("div", {
                  className: "mt-6",
                  children: [
                    y.jsxs("div", {
                      className: "relative",
                      children: [
                        y.jsx("div", {
                          className: "absolute inset-0 flex items-center",
                          children: y.jsx("div", {
                            className: "w-full border-t border-gray-300",
                          }),
                        }),
                        y.jsx("div", {
                          className: "relative flex justify-center text-sm",
                          children: y.jsx("span", {
                            className: "px-2 bg-white text-gray-500",
                            children: "New to Property Rent?",
                          }),
                        }),
                      ],
                    }),
                    y.jsx("div", {
                      className: "mt-6",
                      children: y.jsx(sr, {
                        to: "/signup",
                        className:
                          "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50",
                        children: "Join now",
                      }),
                    }),
                    y.jsx("div", {
                      className: "mt-6",
                      children: y.jsx(sr, {
                        to: "/forgot-password",
                        className:
                          "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50",
                        children: "Forgotten password?",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ak = () => {
      const [e, t] = T.useState(""),
        [n, r] = T.useState(!1),
        { mutate: s, isPending: i } = At({
          mutationFn: (o) => Pe.post("/users/forgot-password", o),
          onSuccess: () => {
            r(!0), de.success("Password Recovery Email Sent successfully");
          },
          onError: (o) => {
            de.error(o.response.data.message || "Something went wrong");
          },
        }),
        a = (o) => {
          o.preventDefault(), s({ email: e });
        };
      return y.jsx(y.Fragment, {
        children: n
          ? y.jsx("h1", {
              className:
                "text-1xl font-bold flex justify-center items-center text-3x",
              children: " Email Sent Successfully",
            })
          : y.jsxs(y.Fragment, {
              children: [
                " ",
                y.jsxs("form", {
                  onSubmit: a,
                  className: "space-y-4 w-full max-w-md",
                  children: [
                    y.jsx("input", {
                      type: "email",
                      placeholder: "Email",
                      value: e,
                      onChange: (o) => t(o.target.value),
                      className: "input input-bordered w-full",
                      disabled: i,
                      required: !0,
                    }),
                    y.jsx("button", {
                      type: "submit",
                      className: "btn btn-primary w-full",
                      children: i
                        ? y.jsx(Fr, { className: "size-5 animate-spin" })
                        : "Submit",
                    }),
                  ],
                }),
              ],
            }),
      });
    },
    ok = () =>
      y.jsxs("div", {
        className:
          "min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
        children: [
          y.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-md",
            children: [
              y.jsx("img", {
                className: "mx-auto h-40 w-auto",
                src: "/logo.svg",
                alt: "LinkedIn",
              }),
              y.jsx("h2", {
                className: " text-center text-3xl font-extrabold text-gray-900",
                children: "Password Recovery",
              }),
            ],
          }),
          y.jsx("div", {
            className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md",
            children: y.jsxs("div", {
              className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
              children: [
                y.jsx(ak, {}),
                y.jsx("div", {
                  className: "mt-6",
                  children: y.jsx("div", {
                    className: "relative",
                    children: y.jsx("div", {
                      className: "absolute inset-0 flex items-center",
                      children: y.jsx("div", {
                        className: "w-full border-t border-gray-300",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    lk = () => {
      const [e, t] = T.useState(!1),
        [n, r] = T.useState(""),
        s = Yn(),
        { token: i } = Si(),
        { mutate: a, isPending: o } = At({
          mutationFn: (u) => Pe.post(`/users/reset-password/${i}`, u),
          onSuccess: () => {
            de.success("Password Changed Successfully"), s("/login");
          },
          onError: (u) => {
            u.response && u.response.status === 415 && t(!0),
              de.error(u.response.data.message || "Something went wrong");
          },
        });
      He({
        queryKey: ["checkResetPassToken"],
        queryFn: async () => {
          try {
            const u = await Pe.get(`/users/reset-password/${i}`);
            return (
              de.success("Token is Valid"),
              u.data.success == !0 && "true",
              u.data
            );
          } catch (u) {
            "here",
              u.response && u.response.status === 415 && t(!0),
              de.error(u.response.data.message || "Something went wrong");
          }
        },
      });
      const l = (u) => {
        u.preventDefault(), a({ password: n });
      };
      return y.jsx(y.Fragment, {
        children: e
          ? y.jsx("h1", {
              className:
                " text-1xl font-bold flex justify-center items-center text-3x",
              children: "Token is Invalid or Expired",
            })
          : y.jsx(y.Fragment, {
              children: y.jsxs("form", {
                onSubmit: l,
                className: "space-y-4 w-full max-w-md",
                children: [
                  y.jsx("input", {
                    type: "password",
                    placeholder: "Enter New Password",
                    value: n,
                    onChange: (u) => r(u.target.value),
                    className: "input input-bordered w-full",
                    disabled: o,
                    required: !0,
                  }),
                  y.jsx("button", {
                    type: "submit",
                    className: "btn btn-primary w-full",
                    children: o
                      ? y.jsx(Fr, { className: "size-5 animate-spin" })
                      : "Submit",
                  }),
                ],
              }),
            }),
      });
    },
    uk = () =>
      y.jsxs("div", {
        className:
          "min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8",
        children: [
          y.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-md",
            children: [
              y.jsx("img", {
                className: "mx-auto h-40 w-auto",
                src: "/logo.svg",
                alt: "LinkedIn",
              }),
              y.jsx("h2", {
                className: " text-center text-3xl font-extrabold text-gray-900",
                children: "Password Reset",
              }),
            ],
          }),
          y.jsx("div", {
            className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md",
            children: y.jsxs("div", {
              className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
              children: [
                y.jsx(lk, {}),
                y.jsx("div", {
                  className: "mt-6",
                  children: y.jsx("div", {
                    className: "relative",
                    children: y.jsx("div", {
                      className: "absolute inset-0 flex items-center",
                      children: y.jsx("div", {
                        className: "w-full border-t border-gray-300",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ck = () => {
      const e = Si(),
        { data: t } = He({
          queryKey: ["userProfile"],
          queryFn: async () => {
            try {
              return (
                await Pe.get(`/users/u/${e == null ? void 0 : e.username}`)
              ).data;
            } catch (n) {
              if (n.response && n.response.status === 401) return null;
              de.error(n.response.data.message || "Something went wrong");
            }
          },
          refetchOnWindowFocus: !1,
        });
      return ("user profile", t), y.jsx("div", { children: " ProfilePage" });
    };
  function Mm(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function ch(e, t) {
    e === void 0 && (e = {}),
      t === void 0 && (t = {}),
      Object.keys(t).forEach((n) => {
        typeof e[n] > "u"
          ? (e[n] = t[n])
          : Mm(t[n]) &&
            Mm(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            ch(e[n], t[n]);
      });
  }
  const z0 = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function ys() {
    const e = typeof document < "u" ? document : {};
    return ch(e, z0), e;
  }
  const dk = {
    document: z0,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };
  function kt() {
    const e = typeof window < "u" ? window : {};
    return ch(e, dk), e;
  }
  function fk(e) {
    return (
      e === void 0 && (e = ""),
      e
        .trim()
        .split(" ")
        .filter((t) => !!t.trim())
    );
  }
  function hk(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch {}
      try {
        delete t[n];
      } catch {}
    });
  }
  function Bd(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t);
  }
  function Nl() {
    return Date.now();
  }
  function pk(e) {
    const t = kt();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function mk(e, t) {
    t === void 0 && (t = "x");
    const n = kt();
    let r, s, i;
    const a = pk(e);
    return (
      n.WebKitCSSMatrix
        ? ((s = a.transform || a.webkitTransform),
          s.split(",").length > 6 &&
            (s = s
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (i = new n.WebKitCSSMatrix(s === "none" ? "" : s)))
        : ((i =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = i.toString().split(","))),
      t === "x" &&
        (n.WebKitCSSMatrix
          ? (s = i.m41)
          : r.length === 16
            ? (s = parseFloat(r[12]))
            : (s = parseFloat(r[4]))),
      t === "y" &&
        (n.WebKitCSSMatrix
          ? (s = i.m42)
          : r.length === 16
            ? (s = parseFloat(r[13]))
            : (s = parseFloat(r[5]))),
      s || 0
    );
  }
  function xo(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function gk(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function wt() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (r != null && !gk(r)) {
        const s = Object.keys(Object(r)).filter((i) => t.indexOf(i) < 0);
        for (let i = 0, a = s.length; i < a; i += 1) {
          const o = s[i],
            l = Object.getOwnPropertyDescriptor(r, o);
          l !== void 0 &&
            l.enumerable &&
            (xo(e[o]) && xo(r[o])
              ? r[o].__swiper__
                ? (e[o] = r[o])
                : wt(e[o], r[o])
              : !xo(e[o]) && xo(r[o])
                ? ((e[o] = {}),
                  r[o].__swiper__ ? (e[o] = r[o]) : wt(e[o], r[o]))
                : (e[o] = r[o]));
        }
      }
    }
    return e;
  }
  function Yi(e, t, n) {
    e.style.setProperty(t, n);
  }
  function $0(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const s = kt(),
      i = -t.translate;
    let a = null,
      o;
    const l = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      s.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > i ? "next" : "prev",
      c = (p, S) => (u === "next" && p >= S) || (u === "prev" && p <= S),
      d = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const p = Math.max(Math.min((o - a) / l, 1), 0),
          S = 0.5 - Math.cos(p * Math.PI) / 2;
        let g = i + S * (n - i);
        if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), c(g, n))) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [r]: g });
            }),
            s.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = s.requestAnimationFrame(d);
      };
    d();
  }
  function Gt(e, t) {
    t === void 0 && (t = "");
    const n = [...e.children];
    return (
      e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
      t ? n.filter((r) => r.matches(t)) : n
    );
  }
  function vk(e, t) {
    const n = t.contains(e);
    return !n && t instanceof HTMLSlotElement
      ? [...t.assignedElements()].includes(e)
      : n;
  }
  function Ll(e) {
    try {
      console.warn(e);
      return;
    } catch {}
  }
  function pi(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...(Array.isArray(t) ? t : fk(t))), n;
  }
  function yk(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
      const r = e.previousElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function wk(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
      const r = e.nextElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function yr(e, t) {
    return kt().getComputedStyle(e, null).getPropertyValue(t);
  }
  function Rl(e) {
    let t = e,
      n;
    if (t) {
      for (n = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (n += 1);
      return n;
    }
  }
  function U0(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; )
      t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
    return n;
  }
  function Wd(e, t, n) {
    const r = kt();
    return (
      e[t === "width" ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        r
          .getComputedStyle(e, null)
          .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        r
          .getComputedStyle(e, null)
          .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
      )
    );
  }
  function ze(e) {
    return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
  }
  function Sk(e) {
    let { swiper: t, extendParams: n, on: r, emit: s } = e;
    n({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    });
    let i;
    const a = ys();
    t.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    const o = a.createElement("div");
    function l(g, v) {
      const w = t.params.virtual;
      if (w.cache && t.virtual.cache[v]) return t.virtual.cache[v];
      let m;
      return (
        w.renderSlide
          ? ((m = w.renderSlide.call(t, g, v)),
            typeof m == "string" && ((o.innerHTML = m), (m = o.children[0])))
          : t.isElement
            ? (m = pi("swiper-slide"))
            : (m = pi("div", t.params.slideClass)),
        m.setAttribute("data-swiper-slide-index", v),
        w.renderSlide || (m.innerHTML = g),
        w.cache && (t.virtual.cache[v] = m),
        m
      );
    }
    function u(g, v) {
      const {
        slidesPerView: w,
        slidesPerGroup: m,
        centeredSlides: f,
        loop: h,
        initialSlide: E,
      } = t.params;
      if (v && !h && E > 0) return;
      const { addSlidesBefore: x, addSlidesAfter: b } = t.params.virtual,
        { from: O, to: k, slides: P, slidesGrid: M, offset: R } = t.virtual;
      t.params.cssMode || t.updateActiveIndex();
      const $ = t.activeIndex || 0;
      let j;
      t.rtlTranslate ? (j = "right") : (j = t.isHorizontal() ? "left" : "top");
      let W, V;
      f
        ? ((W = Math.floor(w / 2) + m + b), (V = Math.floor(w / 2) + m + x))
        : ((W = w + (m - 1) + b), (V = (h ? w : m) + x));
      let te = $ - V,
        Ve = $ + W;
      h || ((te = Math.max(te, 0)), (Ve = Math.min(Ve, P.length - 1)));
      let I = (t.slidesGrid[te] || 0) - (t.slidesGrid[0] || 0);
      h && $ >= V
        ? ((te -= V), f || (I += t.slidesGrid[0]))
        : h && $ < V && ((te = -V), f && (I += t.slidesGrid[0])),
        Object.assign(t.virtual, {
          from: te,
          to: Ve,
          offset: I,
          slidesGrid: t.slidesGrid,
          slidesBefore: V,
          slidesAfter: W,
        });
      function U() {
        t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          s("virtualUpdate");
      }
      if (O === te && k === Ve && !g) {
        t.slidesGrid !== M &&
          I !== R &&
          t.slides.forEach((G) => {
            G.style[j] = `${I - Math.abs(t.cssOverflowAdjustment())}px`;
          }),
          t.updateProgress(),
          s("virtualUpdate");
        return;
      }
      if (t.params.virtual.renderExternal) {
        t.params.virtual.renderExternal.call(t, {
          offset: I,
          from: te,
          to: Ve,
          slides: (function () {
            const oe = [];
            for (let Pt = te; Pt <= Ve; Pt += 1) oe.push(P[Pt]);
            return oe;
          })(),
        }),
          t.params.virtual.renderExternalUpdate ? U() : s("virtualUpdate");
        return;
      }
      const H = [],
        ue = [],
        we = (G) => {
          let oe = G;
          return (
            G < 0
              ? (oe = P.length + G)
              : oe >= P.length && (oe = oe - P.length),
            oe
          );
        };
      if (g)
        t.slides
          .filter((G) => G.matches(`.${t.params.slideClass}, swiper-slide`))
          .forEach((G) => {
            G.remove();
          });
      else
        for (let G = O; G <= k; G += 1)
          if (G < te || G > Ve) {
            const oe = we(G);
            t.slides
              .filter((Pt) =>
                Pt.matches(
                  `.${t.params.slideClass}[data-swiper-slide-index="${oe}"], swiper-slide[data-swiper-slide-index="${oe}"]`
                )
              )
              .forEach((Pt) => {
                Pt.remove();
              });
          }
      const Ss = h ? -P.length : 0,
        Sn = h ? P.length * 2 : P.length;
      for (let G = Ss; G < Sn; G += 1)
        if (G >= te && G <= Ve) {
          const oe = we(G);
          typeof k > "u" || g
            ? ue.push(oe)
            : (G > k && ue.push(oe), G < O && H.push(oe));
        }
      if (
        (ue.forEach((G) => {
          t.slidesEl.append(l(P[G], G));
        }),
        h)
      )
        for (let G = H.length - 1; G >= 0; G -= 1) {
          const oe = H[G];
          t.slidesEl.prepend(l(P[oe], oe));
        }
      else
        H.sort((G, oe) => oe - G),
          H.forEach((G) => {
            t.slidesEl.prepend(l(P[G], G));
          });
      Gt(t.slidesEl, ".swiper-slide, swiper-slide").forEach((G) => {
        G.style[j] = `${I - Math.abs(t.cssOverflowAdjustment())}px`;
      }),
        U();
    }
    function c(g) {
      if (typeof g == "object" && "length" in g)
        for (let v = 0; v < g.length; v += 1)
          g[v] && t.virtual.slides.push(g[v]);
      else t.virtual.slides.push(g);
      u(!0);
    }
    function d(g) {
      const v = t.activeIndex;
      let w = v + 1,
        m = 1;
      if (Array.isArray(g)) {
        for (let f = 0; f < g.length; f += 1)
          g[f] && t.virtual.slides.unshift(g[f]);
        (w = v + g.length), (m = g.length);
      } else t.virtual.slides.unshift(g);
      if (t.params.virtual.cache) {
        const f = t.virtual.cache,
          h = {};
        Object.keys(f).forEach((E) => {
          const x = f[E],
            b = x.getAttribute("data-swiper-slide-index");
          b && x.setAttribute("data-swiper-slide-index", parseInt(b, 10) + m),
            (h[parseInt(E, 10) + m] = x);
        }),
          (t.virtual.cache = h);
      }
      u(!0), t.slideTo(w, 0);
    }
    function p(g) {
      if (typeof g > "u" || g === null) return;
      let v = t.activeIndex;
      if (Array.isArray(g))
        for (let w = g.length - 1; w >= 0; w -= 1)
          t.params.virtual.cache &&
            (delete t.virtual.cache[g[w]],
            Object.keys(t.virtual.cache).forEach((m) => {
              m > g &&
                ((t.virtual.cache[m - 1] = t.virtual.cache[m]),
                t.virtual.cache[m - 1].setAttribute(
                  "data-swiper-slide-index",
                  m - 1
                ),
                delete t.virtual.cache[m]);
            })),
            t.virtual.slides.splice(g[w], 1),
            g[w] < v && (v -= 1),
            (v = Math.max(v, 0));
      else
        t.params.virtual.cache &&
          (delete t.virtual.cache[g],
          Object.keys(t.virtual.cache).forEach((w) => {
            w > g &&
              ((t.virtual.cache[w - 1] = t.virtual.cache[w]),
              t.virtual.cache[w - 1].setAttribute(
                "data-swiper-slide-index",
                w - 1
              ),
              delete t.virtual.cache[w]);
          })),
          t.virtual.slides.splice(g, 1),
          g < v && (v -= 1),
          (v = Math.max(v, 0));
      u(!0), t.slideTo(v, 0);
    }
    function S() {
      (t.virtual.slides = []),
        t.params.virtual.cache && (t.virtual.cache = {}),
        u(!0),
        t.slideTo(0, 0);
    }
    r("beforeInit", () => {
      if (!t.params.virtual.enabled) return;
      let g;
      if (typeof t.passedParams.virtual.slides > "u") {
        const v = [...t.slidesEl.children].filter((w) =>
          w.matches(`.${t.params.slideClass}, swiper-slide`)
        );
        v &&
          v.length &&
          ((t.virtual.slides = [...v]),
          (g = !0),
          v.forEach((w, m) => {
            w.setAttribute("data-swiper-slide-index", m),
              (t.virtual.cache[m] = w),
              w.remove();
          }));
      }
      g || (t.virtual.slides = t.params.virtual.slides),
        t.classNames.push(`${t.params.containerModifierClass}virtual`),
        (t.params.watchSlidesProgress = !0),
        (t.originalParams.watchSlidesProgress = !0),
        u(!1, !0);
    }),
      r("setTranslate", () => {
        t.params.virtual.enabled &&
          (t.params.cssMode && !t._immediateVirtual
            ? (clearTimeout(i),
              (i = setTimeout(() => {
                u();
              }, 100)))
            : u());
      }),
      r("init update resize", () => {
        t.params.virtual.enabled &&
          t.params.cssMode &&
          Yi(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
      }),
      Object.assign(t.virtual, {
        appendSlide: c,
        prependSlide: d,
        removeSlide: p,
        removeAllSlides: S,
        update: u,
      });
  }
  function H0(e, t, n, r) {
    return (
      e.params.createElements &&
        Object.keys(r).forEach((s) => {
          if (!n[s] && n.auto === !0) {
            let i = Gt(e.el, `.${r[s]}`)[0];
            i || ((i = pi("div", r[s])), (i.className = r[s]), e.el.append(i)),
              (n[s] = i),
              (t[s] = i);
          }
        }),
      n
    );
  }
  function xk(e) {
    let { swiper: t, extendParams: n, on: r, emit: s } = e;
    n({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (t.navigation = { nextEl: null, prevEl: null });
    function i(g) {
      let v;
      return g &&
        typeof g == "string" &&
        t.isElement &&
        ((v = t.el.querySelector(g) || t.hostEl.querySelector(g)), v)
        ? v
        : (g &&
            (typeof g == "string" && (v = [...document.querySelectorAll(g)]),
            t.params.uniqueNavElements &&
            typeof g == "string" &&
            v &&
            v.length > 1 &&
            t.el.querySelectorAll(g).length === 1
              ? (v = t.el.querySelector(g))
              : v && v.length === 1 && (v = v[0])),
          g && !v ? g : v);
    }
    function a(g, v) {
      const w = t.params.navigation;
      (g = ze(g)),
        g.forEach((m) => {
          m &&
            (m.classList[v ? "add" : "remove"](...w.disabledClass.split(" ")),
            m.tagName === "BUTTON" && (m.disabled = v),
            t.params.watchOverflow &&
              t.enabled &&
              m.classList[t.isLocked ? "add" : "remove"](w.lockClass));
        });
    }
    function o() {
      const { nextEl: g, prevEl: v } = t.navigation;
      if (t.params.loop) {
        a(v, !1), a(g, !1);
        return;
      }
      a(v, t.isBeginning && !t.params.rewind),
        a(g, t.isEnd && !t.params.rewind);
    }
    function l(g) {
      g.preventDefault(),
        !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
          (t.slidePrev(), s("navigationPrev"));
    }
    function u(g) {
      g.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) &&
          (t.slideNext(), s("navigationNext"));
    }
    function c() {
      const g = t.params.navigation;
      if (
        ((t.params.navigation = H0(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(g.nextEl || g.prevEl))
      )
        return;
      let v = i(g.nextEl),
        w = i(g.prevEl);
      Object.assign(t.navigation, { nextEl: v, prevEl: w }),
        (v = ze(v)),
        (w = ze(w));
      const m = (f, h) => {
        f && f.addEventListener("click", h === "next" ? u : l),
          !t.enabled && f && f.classList.add(...g.lockClass.split(" "));
      };
      v.forEach((f) => m(f, "next")), w.forEach((f) => m(f, "prev"));
    }
    function d() {
      let { nextEl: g, prevEl: v } = t.navigation;
      (g = ze(g)), (v = ze(v));
      const w = (m, f) => {
        m.removeEventListener("click", f === "next" ? u : l),
          m.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      g.forEach((m) => w(m, "next")), v.forEach((m) => w(m, "prev"));
    }
    r("init", () => {
      t.params.navigation.enabled === !1 ? S() : (c(), o());
    }),
      r("toEdge fromEdge lock unlock", () => {
        o();
      }),
      r("destroy", () => {
        d();
      }),
      r("enable disable", () => {
        let { nextEl: g, prevEl: v } = t.navigation;
        if (((g = ze(g)), (v = ze(v)), t.enabled)) {
          o();
          return;
        }
        [...g, ...v]
          .filter((w) => !!w)
          .forEach((w) => w.classList.add(t.params.navigation.lockClass));
      }),
      r("click", (g, v) => {
        let { nextEl: w, prevEl: m } = t.navigation;
        (w = ze(w)), (m = ze(m));
        const f = v.target;
        let h = m.includes(f) || w.includes(f);
        if (t.isElement && !h) {
          const E = v.path || (v.composedPath && v.composedPath());
          E && (h = E.find((x) => w.includes(x) || m.includes(x)));
        }
        if (t.params.navigation.hideOnClick && !h) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === f || t.pagination.el.contains(f))
          )
            return;
          let E;
          w.length
            ? (E = w[0].classList.contains(t.params.navigation.hiddenClass))
            : m.length &&
              (E = m[0].classList.contains(t.params.navigation.hiddenClass)),
            s(E === !0 ? "navigationShow" : "navigationHide"),
            [...w, ...m]
              .filter((x) => !!x)
              .forEach((x) =>
                x.classList.toggle(t.params.navigation.hiddenClass)
              );
        }
      });
    const p = () => {
        t.el.classList.remove(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          c(),
          o();
      },
      S = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          d();
      };
    Object.assign(t.navigation, {
      enable: p,
      disable: S,
      update: o,
      init: c,
      destroy: d,
    });
  }
  function Fi(e) {
    return (
      e === void 0 && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function Ek(e) {
    let { swiper: t, extendParams: n, on: r, emit: s } = e;
    const i = "swiper-pagination";
    n({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (f) => f,
        formatFractionTotal: (f) => f,
        bulletClass: `${i}-bullet`,
        bulletActiveClass: `${i}-bullet-active`,
        modifierClass: `${i}-`,
        currentClass: `${i}-current`,
        totalClass: `${i}-total`,
        hiddenClass: `${i}-hidden`,
        progressbarFillClass: `${i}-progressbar-fill`,
        progressbarOppositeClass: `${i}-progressbar-opposite`,
        clickableClass: `${i}-clickable`,
        lockClass: `${i}-lock`,
        horizontalClass: `${i}-horizontal`,
        verticalClass: `${i}-vertical`,
        paginationDisabledClass: `${i}-disabled`,
      },
    }),
      (t.pagination = { el: null, bullets: [] });
    let a,
      o = 0;
    function l() {
      return (
        !t.params.pagination.el ||
        !t.pagination.el ||
        (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
      );
    }
    function u(f, h) {
      const { bulletActiveClass: E } = t.params.pagination;
      f &&
        ((f = f[`${h === "prev" ? "previous" : "next"}ElementSibling`]),
        f &&
          (f.classList.add(`${E}-${h}`),
          (f = f[`${h === "prev" ? "previous" : "next"}ElementSibling`]),
          f && f.classList.add(`${E}-${h}-${h}`)));
    }
    function c(f, h, E) {
      if (((f = f % E), (h = h % E), h === f + 1)) return "next";
      if (h === f - 1) return "previous";
    }
    function d(f) {
      const h = f.target.closest(Fi(t.params.pagination.bulletClass));
      if (!h) return;
      f.preventDefault();
      const E = Rl(h) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === E) return;
        const x = c(t.realIndex, E, t.slides.length);
        x === "next"
          ? t.slideNext()
          : x === "previous"
            ? t.slidePrev()
            : t.slideToLoop(E);
      } else t.slideTo(E);
    }
    function p() {
      const f = t.rtl,
        h = t.params.pagination;
      if (l()) return;
      let E = t.pagination.el;
      E = ze(E);
      let x, b;
      const O =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        k = t.params.loop
          ? Math.ceil(O / t.params.slidesPerGroup)
          : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((b = t.previousRealIndex || 0),
            (x =
              t.params.slidesPerGroup > 1
                ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                : t.realIndex))
          : typeof t.snapIndex < "u"
            ? ((x = t.snapIndex), (b = t.previousSnapIndex))
            : ((b = t.previousIndex || 0), (x = t.activeIndex || 0)),
        h.type === "bullets" &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const P = t.pagination.bullets;
        let M, R, $;
        if (
          (h.dynamicBullets &&
            ((a = Wd(P[0], t.isHorizontal() ? "width" : "height")),
            E.forEach((j) => {
              j.style[t.isHorizontal() ? "width" : "height"] =
                `${a * (h.dynamicMainBullets + 4)}px`;
            }),
            h.dynamicMainBullets > 1 &&
              b !== void 0 &&
              ((o += x - (b || 0)),
              o > h.dynamicMainBullets - 1
                ? (o = h.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (M = Math.max(x - o, 0)),
            (R = M + (Math.min(P.length, h.dynamicMainBullets) - 1)),
            ($ = (R + M) / 2)),
          P.forEach((j) => {
            const W = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((V) => `${h.bulletActiveClass}${V}`),
            ]
              .map((V) =>
                typeof V == "string" && V.includes(" ") ? V.split(" ") : V
              )
              .flat();
            j.classList.remove(...W);
          }),
          E.length > 1)
        )
          P.forEach((j) => {
            const W = Rl(j);
            W === x
              ? j.classList.add(...h.bulletActiveClass.split(" "))
              : t.isElement && j.setAttribute("part", "bullet"),
              h.dynamicBullets &&
                (W >= M &&
                  W <= R &&
                  j.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),
                W === M && u(j, "prev"),
                W === R && u(j, "next"));
          });
        else {
          const j = P[x];
          if (
            (j && j.classList.add(...h.bulletActiveClass.split(" ")),
            t.isElement &&
              P.forEach((W, V) => {
                W.setAttribute("part", V === x ? "bullet-active" : "bullet");
              }),
            h.dynamicBullets)
          ) {
            const W = P[M],
              V = P[R];
            for (let te = M; te <= R; te += 1)
              P[te] &&
                P[te].classList.add(
                  ...`${h.bulletActiveClass}-main`.split(" ")
                );
            u(W, "prev"), u(V, "next");
          }
        }
        if (h.dynamicBullets) {
          const j = Math.min(P.length, h.dynamicMainBullets + 4),
            W = (a * j - a) / 2 - $ * a,
            V = f ? "right" : "left";
          P.forEach((te) => {
            te.style[t.isHorizontal() ? V : "top"] = `${W}px`;
          });
        }
      }
      E.forEach((P, M) => {
        if (
          (h.type === "fraction" &&
            (P.querySelectorAll(Fi(h.currentClass)).forEach((R) => {
              R.textContent = h.formatFractionCurrent(x + 1);
            }),
            P.querySelectorAll(Fi(h.totalClass)).forEach((R) => {
              R.textContent = h.formatFractionTotal(k);
            })),
          h.type === "progressbar")
        ) {
          let R;
          h.progressbarOpposite
            ? (R = t.isHorizontal() ? "vertical" : "horizontal")
            : (R = t.isHorizontal() ? "horizontal" : "vertical");
          const $ = (x + 1) / k;
          let j = 1,
            W = 1;
          R === "horizontal" ? (j = $) : (W = $),
            P.querySelectorAll(Fi(h.progressbarFillClass)).forEach((V) => {
              (V.style.transform = `translate3d(0,0,0) scaleX(${j}) scaleY(${W})`),
                (V.style.transitionDuration = `${t.params.speed}ms`);
            });
        }
        h.type === "custom" && h.renderCustom
          ? ((P.innerHTML = h.renderCustom(t, x + 1, k)),
            M === 0 && s("paginationRender", P))
          : (M === 0 && s("paginationRender", P), s("paginationUpdate", P)),
          t.params.watchOverflow &&
            t.enabled &&
            P.classList[t.isLocked ? "add" : "remove"](h.lockClass);
      });
    }
    function S() {
      const f = t.params.pagination;
      if (l()) return;
      const h =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.grid && t.params.grid.rows > 1
            ? t.slides.length / Math.ceil(t.params.grid.rows)
            : t.slides.length;
      let E = t.pagination.el;
      E = ze(E);
      let x = "";
      if (f.type === "bullets") {
        let b = t.params.loop
          ? Math.ceil(h / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && b > h && (b = h);
        for (let O = 0; O < b; O += 1)
          f.renderBullet
            ? (x += f.renderBullet.call(t, O, f.bulletClass))
            : (x += `<${f.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${f.bulletClass}"></${f.bulletElement}>`);
      }
      f.type === "fraction" &&
        (f.renderFraction
          ? (x = f.renderFraction.call(t, f.currentClass, f.totalClass))
          : (x = `<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`)),
        f.type === "progressbar" &&
          (f.renderProgressbar
            ? (x = f.renderProgressbar.call(t, f.progressbarFillClass))
            : (x = `<span class="${f.progressbarFillClass}"></span>`)),
        (t.pagination.bullets = []),
        E.forEach((b) => {
          f.type !== "custom" && (b.innerHTML = x || ""),
            f.type === "bullets" &&
              t.pagination.bullets.push(
                ...b.querySelectorAll(Fi(f.bulletClass))
              );
        }),
        f.type !== "custom" && s("paginationRender", E[0]);
    }
    function g() {
      t.params.pagination = H0(
        t,
        t.originalParams.pagination,
        t.params.pagination,
        { el: "swiper-pagination" }
      );
      const f = t.params.pagination;
      if (!f.el) return;
      let h;
      typeof f.el == "string" && t.isElement && (h = t.el.querySelector(f.el)),
        !h &&
          typeof f.el == "string" &&
          (h = [...document.querySelectorAll(f.el)]),
        h || (h = f.el),
        !(!h || h.length === 0) &&
          (t.params.uniqueNavElements &&
            typeof f.el == "string" &&
            Array.isArray(h) &&
            h.length > 1 &&
            ((h = [...t.el.querySelectorAll(f.el)]),
            h.length > 1 &&
              (h = h.filter((E) => U0(E, ".swiper")[0] === t.el)[0])),
          Array.isArray(h) && h.length === 1 && (h = h[0]),
          Object.assign(t.pagination, { el: h }),
          (h = ze(h)),
          h.forEach((E) => {
            f.type === "bullets" &&
              f.clickable &&
              E.classList.add(...(f.clickableClass || "").split(" ")),
              E.classList.add(f.modifierClass + f.type),
              E.classList.add(
                t.isHorizontal() ? f.horizontalClass : f.verticalClass
              ),
              f.type === "bullets" &&
                f.dynamicBullets &&
                (E.classList.add(`${f.modifierClass}${f.type}-dynamic`),
                (o = 0),
                f.dynamicMainBullets < 1 && (f.dynamicMainBullets = 1)),
              f.type === "progressbar" &&
                f.progressbarOpposite &&
                E.classList.add(f.progressbarOppositeClass),
              f.clickable && E.addEventListener("click", d),
              t.enabled || E.classList.add(f.lockClass);
          }));
    }
    function v() {
      const f = t.params.pagination;
      if (l()) return;
      let h = t.pagination.el;
      h &&
        ((h = ze(h)),
        h.forEach((E) => {
          E.classList.remove(f.hiddenClass),
            E.classList.remove(f.modifierClass + f.type),
            E.classList.remove(
              t.isHorizontal() ? f.horizontalClass : f.verticalClass
            ),
            f.clickable &&
              (E.classList.remove(...(f.clickableClass || "").split(" ")),
              E.removeEventListener("click", d));
        })),
        t.pagination.bullets &&
          t.pagination.bullets.forEach((E) =>
            E.classList.remove(...f.bulletActiveClass.split(" "))
          );
    }
    r("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const f = t.params.pagination;
      let { el: h } = t.pagination;
      (h = ze(h)),
        h.forEach((E) => {
          E.classList.remove(f.horizontalClass, f.verticalClass),
            E.classList.add(
              t.isHorizontal() ? f.horizontalClass : f.verticalClass
            );
        });
    }),
      r("init", () => {
        t.params.pagination.enabled === !1 ? m() : (g(), S(), p());
      }),
      r("activeIndexChange", () => {
        typeof t.snapIndex > "u" && p();
      }),
      r("snapIndexChange", () => {
        p();
      }),
      r("snapGridLengthChange", () => {
        S(), p();
      }),
      r("destroy", () => {
        v();
      }),
      r("enable disable", () => {
        let { el: f } = t.pagination;
        f &&
          ((f = ze(f)),
          f.forEach((h) =>
            h.classList[t.enabled ? "remove" : "add"](
              t.params.pagination.lockClass
            )
          ));
      }),
      r("lock unlock", () => {
        p();
      }),
      r("click", (f, h) => {
        const E = h.target,
          x = ze(t.pagination.el);
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          x &&
          x.length > 0 &&
          !E.classList.contains(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && E === t.navigation.nextEl) ||
              (t.navigation.prevEl && E === t.navigation.prevEl))
          )
            return;
          const b = x[0].classList.contains(t.params.pagination.hiddenClass);
          s(b === !0 ? "paginationShow" : "paginationHide"),
            x.forEach((O) =>
              O.classList.toggle(t.params.pagination.hiddenClass)
            );
        }
      });
    const w = () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let { el: f } = t.pagination;
        f &&
          ((f = ze(f)),
          f.forEach((h) =>
            h.classList.remove(t.params.pagination.paginationDisabledClass)
          )),
          g(),
          S(),
          p();
      },
      m = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: f } = t.pagination;
        f &&
          ((f = ze(f)),
          f.forEach((h) =>
            h.classList.add(t.params.pagination.paginationDisabledClass)
          )),
          v();
      };
    Object.assign(t.pagination, {
      enable: w,
      disable: m,
      render: S,
      update: p,
      init: g,
      destroy: v,
    });
  }
  let oc;
  function _k() {
    const e = kt(),
      t = ys();
    return {
      smoothScroll:
        t.documentElement &&
        t.documentElement.style &&
        "scrollBehavior" in t.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof e.DocumentTouch)
      ),
    };
  }
  function B0() {
    return oc || (oc = _k()), oc;
  }
  let lc;
  function bk(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = B0(),
      r = kt(),
      s = r.navigator.platform,
      i = t || r.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = r.screen.width,
      l = r.screen.height,
      u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = i.match(/(iPad).*OS\s([\d_]+)/);
    const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
      p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      S = s === "Win32";
    let g = s === "MacIntel";
    const v = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !c &&
        g &&
        n.touch &&
        v.indexOf(`${o}x${l}`) >= 0 &&
        ((c = i.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (g = !1)),
      u && !S && ((a.os = "android"), (a.android = !0)),
      (c || p || d) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function W0(e) {
    return e === void 0 && (e = {}), lc || (lc = bk(e)), lc;
  }
  let uc;
  function Tk() {
    const e = kt(),
      t = W0();
    let n = !1;
    function r() {
      const o = e.navigator.userAgent.toLowerCase();
      return (
        o.indexOf("safari") >= 0 &&
        o.indexOf("chrome") < 0 &&
        o.indexOf("android") < 0
      );
    }
    if (r()) {
      const o = String(e.navigator.userAgent);
      if (o.includes("Version/")) {
        const [l, u] = o
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((c) => Number(c));
        n = l < 16 || (l === 16 && u < 2);
      }
    }
    const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent
      ),
      i = r(),
      a = i || (s && t.ios);
    return {
      isSafari: n || i,
      needPerspectiveFix: n,
      need3dFix: a,
      isWebView: s,
    };
  }
  function kk() {
    return uc || (uc = Tk()), uc;
  }
  function Ck(e) {
    let { swiper: t, on: n, emit: r } = e;
    const s = kt();
    let i = null,
      a = null;
    const o = () => {
        !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
      },
      l = () => {
        !t ||
          t.destroyed ||
          !t.initialized ||
          ((i = new ResizeObserver((d) => {
            a = s.requestAnimationFrame(() => {
              const { width: p, height: S } = t;
              let g = p,
                v = S;
              d.forEach((w) => {
                let { contentBoxSize: m, contentRect: f, target: h } = w;
                (h && h !== t.el) ||
                  ((g = f ? f.width : (m[0] || m).inlineSize),
                  (v = f ? f.height : (m[0] || m).blockSize));
              }),
                (g !== p || v !== S) && o();
            });
          })),
          i.observe(t.el));
      },
      u = () => {
        a && s.cancelAnimationFrame(a),
          i && i.unobserve && t.el && (i.unobserve(t.el), (i = null));
      },
      c = () => {
        !t || t.destroyed || !t.initialized || r("orientationchange");
      };
    n("init", () => {
      if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
        l();
        return;
      }
      s.addEventListener("resize", o),
        s.addEventListener("orientationchange", c);
    }),
      n("destroy", () => {
        u(),
          s.removeEventListener("resize", o),
          s.removeEventListener("orientationchange", c);
      });
  }
  function Pk(e) {
    let { swiper: t, extendParams: n, on: r, emit: s } = e;
    const i = [],
      a = kt(),
      o = function (c, d) {
        d === void 0 && (d = {});
        const p = a.MutationObserver || a.WebkitMutationObserver,
          S = new p((g) => {
            if (t.__preventObserver__) return;
            if (g.length === 1) {
              s("observerUpdate", g[0]);
              return;
            }
            const v = function () {
              s("observerUpdate", g[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(v)
              : a.setTimeout(v, 0);
          });
        S.observe(c, {
          attributes: typeof d.attributes > "u" ? !0 : d.attributes,
          childList:
            t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
          characterData: typeof d.characterData > "u" ? !0 : d.characterData,
        }),
          i.push(S);
      },
      l = () => {
        if (t.params.observer) {
          if (t.params.observeParents) {
            const c = U0(t.hostEl);
            for (let d = 0; d < c.length; d += 1) o(c[d]);
          }
          o(t.hostEl, { childList: t.params.observeSlideChildren }),
            o(t.wrapperEl, { attributes: !1 });
        }
      },
      u = () => {
        i.forEach((c) => {
          c.disconnect();
        }),
          i.splice(0, i.length);
      };
    n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      r("init", l),
      r("destroy", u);
  }
  var Ok = {
    on(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      const s = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((i) => {
          r.eventsListeners[i] || (r.eventsListeners[i] = []),
            r.eventsListeners[i][s](t);
        }),
        r
      );
    },
    once(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      function s() {
        r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
          a[o] = arguments[o];
        t.apply(r, a);
      }
      return (s.__emitterProxy = t), r.on(e, s, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      const r = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return (
        !n.eventsListeners ||
          n.destroyed ||
          !n.eventsListeners ||
          e.split(" ").forEach((r) => {
            typeof t > "u"
              ? (n.eventsListeners[r] = [])
              : n.eventsListeners[r] &&
                n.eventsListeners[r].forEach((s, i) => {
                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                    n.eventsListeners[r].splice(i, 1);
                });
          }),
        n
      );
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let t, n, r;
      for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++)
        i[a] = arguments[a];
      return (
        typeof i[0] == "string" || Array.isArray(i[0])
          ? ((t = i[0]), (n = i.slice(1, i.length)), (r = e))
          : ((t = i[0].events), (n = i[0].data), (r = i[0].context || e)),
        n.unshift(r),
        (Array.isArray(t) ? t : t.split(" ")).forEach((l) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((u) => {
              u.apply(r, [l, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[l] &&
              e.eventsListeners[l].forEach((u) => {
                u.apply(r, n);
              });
        }),
        e
      );
    },
  };
  function Mk() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null
      ? (t = e.params.width)
      : (t = r.clientWidth),
      typeof e.params.height < "u" && e.params.height !== null
        ? (n = e.params.height)
        : (n = r.clientHeight),
      !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
        ((t =
          t -
          parseInt(yr(r, "padding-left") || 0, 10) -
          parseInt(yr(r, "padding-right") || 0, 10)),
        (n =
          n -
          parseInt(yr(r, "padding-top") || 0, 10) -
          parseInt(yr(r, "padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n,
        }));
  }
  function Nk() {
    const e = this;
    function t(M, R) {
      return parseFloat(M.getPropertyValue(e.getDirectionLabel(R)) || 0);
    }
    const n = e.params,
      { wrapperEl: r, slidesEl: s, size: i, rtlTranslate: a, wrongRTL: o } = e,
      l = e.virtual && n.virtual.enabled,
      u = l ? e.virtual.slides.length : e.slides.length,
      c = Gt(s, `.${e.params.slideClass}, swiper-slide`),
      d = l ? e.virtual.slides.length : c.length;
    let p = [];
    const S = [],
      g = [];
    let v = n.slidesOffsetBefore;
    typeof v == "function" && (v = n.slidesOffsetBefore.call(e));
    let w = n.slidesOffsetAfter;
    typeof w == "function" && (w = n.slidesOffsetAfter.call(e));
    const m = e.snapGrid.length,
      f = e.slidesGrid.length;
    let h = n.spaceBetween,
      E = -v,
      x = 0,
      b = 0;
    if (typeof i > "u") return;
    typeof h == "string" && h.indexOf("%") >= 0
      ? (h = (parseFloat(h.replace("%", "")) / 100) * i)
      : typeof h == "string" && (h = parseFloat(h)),
      (e.virtualSize = -h),
      c.forEach((M) => {
        a ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
          (M.style.marginBottom = ""),
          (M.style.marginTop = "");
      }),
      n.centeredSlides &&
        n.cssMode &&
        (Yi(r, "--swiper-centered-offset-before", ""),
        Yi(r, "--swiper-centered-offset-after", ""));
    const O = n.grid && n.grid.rows > 1 && e.grid;
    O ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
    let k;
    const P =
      n.slidesPerView === "auto" &&
      n.breakpoints &&
      Object.keys(n.breakpoints).filter(
        (M) => typeof n.breakpoints[M].slidesPerView < "u"
      ).length > 0;
    for (let M = 0; M < d; M += 1) {
      k = 0;
      let R;
      if (
        (c[M] && (R = c[M]),
        O && e.grid.updateSlide(M, R, c),
        !(c[M] && yr(R, "display") === "none"))
      ) {
        if (n.slidesPerView === "auto") {
          P && (c[M].style[e.getDirectionLabel("width")] = "");
          const $ = getComputedStyle(R),
            j = R.style.transform,
            W = R.style.webkitTransform;
          if (
            (j && (R.style.transform = "none"),
            W && (R.style.webkitTransform = "none"),
            n.roundLengths)
          )
            k = e.isHorizontal() ? Wd(R, "width") : Wd(R, "height");
          else {
            const V = t($, "width"),
              te = t($, "padding-left"),
              Ve = t($, "padding-right"),
              I = t($, "margin-left"),
              U = t($, "margin-right"),
              H = $.getPropertyValue("box-sizing");
            if (H && H === "border-box") k = V + I + U;
            else {
              const { clientWidth: ue, offsetWidth: we } = R;
              k = V + te + Ve + I + U + (we - ue);
            }
          }
          j && (R.style.transform = j),
            W && (R.style.webkitTransform = W),
            n.roundLengths && (k = Math.floor(k));
        } else
          (k = (i - (n.slidesPerView - 1) * h) / n.slidesPerView),
            n.roundLengths && (k = Math.floor(k)),
            c[M] && (c[M].style[e.getDirectionLabel("width")] = `${k}px`);
        c[M] && (c[M].swiperSlideSize = k),
          g.push(k),
          n.centeredSlides
            ? ((E = E + k / 2 + x / 2 + h),
              x === 0 && M !== 0 && (E = E - i / 2 - h),
              M === 0 && (E = E - i / 2 - h),
              Math.abs(E) < 1 / 1e3 && (E = 0),
              n.roundLengths && (E = Math.floor(E)),
              b % n.slidesPerGroup === 0 && p.push(E),
              S.push(E))
            : (n.roundLengths && (E = Math.floor(E)),
              (b - Math.min(e.params.slidesPerGroupSkip, b)) %
                e.params.slidesPerGroup ===
                0 && p.push(E),
              S.push(E),
              (E = E + k + h)),
          (e.virtualSize += k + h),
          (x = k),
          (b += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, i) + w),
      a &&
        o &&
        (n.effect === "slide" || n.effect === "coverflow") &&
        (r.style.width = `${e.virtualSize + h}px`),
      n.setWrapperSize &&
        (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
      O && e.grid.updateWrapperSize(k, p),
      !n.centeredSlides)
    ) {
      const M = [];
      for (let R = 0; R < p.length; R += 1) {
        let $ = p[R];
        n.roundLengths && ($ = Math.floor($)),
          p[R] <= e.virtualSize - i && M.push($);
      }
      (p = M),
        Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 &&
          p.push(e.virtualSize - i);
    }
    if (l && n.loop) {
      const M = g[0] + h;
      if (n.slidesPerGroup > 1) {
        const R = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
          ),
          $ = M * n.slidesPerGroup;
        for (let j = 0; j < R; j += 1) p.push(p[p.length - 1] + $);
      }
      for (
        let R = 0;
        R < e.virtual.slidesBefore + e.virtual.slidesAfter;
        R += 1
      )
        n.slidesPerGroup === 1 && p.push(p[p.length - 1] + M),
          S.push(S[S.length - 1] + M),
          (e.virtualSize += M);
    }
    if ((p.length === 0 && (p = [0]), h !== 0)) {
      const M =
        e.isHorizontal() && a
          ? "marginLeft"
          : e.getDirectionLabel("marginRight");
      c.filter((R, $) =>
        !n.cssMode || n.loop ? !0 : $ !== c.length - 1
      ).forEach((R) => {
        R.style[M] = `${h}px`;
      });
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
      let M = 0;
      g.forEach(($) => {
        M += $ + (h || 0);
      }),
        (M -= h);
      const R = M > i ? M - i : 0;
      p = p.map(($) => ($ <= 0 ? -v : $ > R ? R + w : $));
    }
    if (n.centerInsufficientSlides) {
      let M = 0;
      g.forEach(($) => {
        M += $ + (h || 0);
      }),
        (M -= h);
      const R = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
      if (M + R < i) {
        const $ = (i - M - R) / 2;
        p.forEach((j, W) => {
          p[W] = j - $;
        }),
          S.forEach((j, W) => {
            S[W] = j + $;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: c,
        snapGrid: p,
        slidesGrid: S,
        slidesSizesGrid: g,
      }),
      n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
    ) {
      Yi(r, "--swiper-centered-offset-before", `${-p[0]}px`),
        Yi(
          r,
          "--swiper-centered-offset-after",
          `${e.size / 2 - g[g.length - 1] / 2}px`
        );
      const M = -e.snapGrid[0],
        R = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map(($) => $ + M)),
        (e.slidesGrid = e.slidesGrid.map(($) => $ + R));
    }
    if (
      (d !== u && e.emit("slidesLengthChange"),
      p.length !== m &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      S.length !== f && e.emit("slidesGridLengthChange"),
      n.watchSlidesProgress && e.updateSlidesOffset(),
      e.emit("slidesUpdated"),
      !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
    ) {
      const M = `${n.containerModifierClass}backface-hidden`,
        R = e.el.classList.contains(M);
      d <= n.maxBackfaceHiddenSlides
        ? R || e.el.classList.add(M)
        : R && e.el.classList.remove(M);
    }
  }
  function Lk(e) {
    const t = this,
      n = [],
      r = t.virtual && t.params.virtual.enabled;
    let s = 0,
      i;
    typeof e == "number"
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed);
    const a = (o) => (r ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || []).forEach((o) => {
          n.push(o);
        });
      else
        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          const o = t.activeIndex + i;
          if (o > t.slides.length && !r) break;
          n.push(a(o));
        }
    else n.push(a(t.activeIndex));
    for (i = 0; i < n.length; i += 1)
      if (typeof n[i] < "u") {
        const o = n[i].offsetHeight;
        s = o > s ? o : s;
      }
    (s || s === 0) && (t.wrapperEl.style.height = `${s}px`);
  }
  function Rk() {
    const e = this,
      t = e.slides,
      n = e.isElement
        ? e.isHorizontal()
          ? e.wrapperEl.offsetLeft
          : e.wrapperEl.offsetTop
        : 0;
    for (let r = 0; r < t.length; r += 1)
      t[r].swiperSlideOffset =
        (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
        n -
        e.cssOverflowAdjustment();
  }
  const Nm = (e, t, n) => {
    t && !e.classList.contains(n)
      ? e.classList.add(n)
      : !t && e.classList.contains(n) && e.classList.remove(n);
  };
  function jk(e) {
    e === void 0 && (e = (this && this.translate) || 0);
    const t = this,
      n = t.params,
      { slides: r, rtlTranslate: s, snapGrid: i } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let a = -e;
    s && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
    let o = n.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0
      ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
      : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < r.length; l += 1) {
      const u = r[l];
      let c = u.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
      const d =
          (a + (n.centeredSlides ? t.minTranslate() : 0) - c) /
          (u.swiperSlideSize + o),
        p =
          (a - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
          (u.swiperSlideSize + o),
        S = -(a - c),
        g = S + t.slidesSizesGrid[l],
        v = S >= 0 && S <= t.size - t.slidesSizesGrid[l],
        w =
          (S >= 0 && S < t.size - 1) ||
          (g > 1 && g <= t.size) ||
          (S <= 0 && g >= t.size);
      w && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(l)),
        Nm(u, w, n.slideVisibleClass),
        Nm(u, v, n.slideFullyVisibleClass),
        (u.progress = s ? -d : d),
        (u.originalProgress = s ? -p : p);
    }
  }
  function Dk(e) {
    const t = this;
    if (typeof e > "u") {
      const c = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * c) || 0;
    }
    const n = t.params,
      r = t.maxTranslate() - t.minTranslate();
    let { progress: s, isBeginning: i, isEnd: a, progressLoop: o } = t;
    const l = i,
      u = a;
    if (r === 0) (s = 0), (i = !0), (a = !0);
    else {
      s = (e - t.minTranslate()) / r;
      const c = Math.abs(e - t.minTranslate()) < 1,
        d = Math.abs(e - t.maxTranslate()) < 1;
      (i = c || s <= 0), (a = d || s >= 1), c && (s = 0), d && (s = 1);
    }
    if (n.loop) {
      const c = t.getSlideIndexByData(0),
        d = t.getSlideIndexByData(t.slides.length - 1),
        p = t.slidesGrid[c],
        S = t.slidesGrid[d],
        g = t.slidesGrid[t.slidesGrid.length - 1],
        v = Math.abs(e);
      v >= p ? (o = (v - p) / g) : (o = (v + g - S) / g), o > 1 && (o -= 1);
    }
    Object.assign(t, {
      progress: s,
      progressLoop: o,
      isBeginning: i,
      isEnd: a,
    }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        t.updateSlidesProgress(e),
      i && !l && t.emit("reachBeginning toEdge"),
      a && !u && t.emit("reachEnd toEdge"),
      ((l && !i) || (u && !a)) && t.emit("fromEdge"),
      t.emit("progress", s);
  }
  const cc = (e, t, n) => {
    t && !e.classList.contains(n)
      ? e.classList.add(n)
      : !t && e.classList.contains(n) && e.classList.remove(n);
  };
  function Ik() {
    const e = this,
      { slides: t, params: n, slidesEl: r, activeIndex: s } = e,
      i = e.virtual && n.virtual.enabled,
      a = e.grid && n.grid && n.grid.rows > 1,
      o = (d) => Gt(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
    let l, u, c;
    if (i)
      if (n.loop) {
        let d = s - e.virtual.slidesBefore;
        d < 0 && (d = e.virtual.slides.length + d),
          d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
          (l = o(`[data-swiper-slide-index="${d}"]`));
      } else l = o(`[data-swiper-slide-index="${s}"]`);
    else
      a
        ? ((l = t.filter((d) => d.column === s)[0]),
          (c = t.filter((d) => d.column === s + 1)[0]),
          (u = t.filter((d) => d.column === s - 1)[0]))
        : (l = t[s]);
    l &&
      (a ||
        ((c = wk(l, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c && (c = t[0]),
        (u = yk(l, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !u === 0 && (u = t[t.length - 1]))),
      t.forEach((d) => {
        cc(d, d === l, n.slideActiveClass),
          cc(d, d === c, n.slideNextClass),
          cc(d, d === u, n.slidePrevClass);
      }),
      e.emitSlidesClasses();
  }
  const Go = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const n = () =>
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        r = t.closest(n());
      if (r) {
        let s = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !s &&
          e.isElement &&
          (r.shadowRoot
            ? (s = r.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                r.shadowRoot &&
                  ((s = r.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  )),
                  s && s.remove());
              })),
          s && s.remove();
      }
    },
    dc = (e, t) => {
      if (!e.slides[t]) return;
      const n = e.slides[t].querySelector('[loading="lazy"]');
      n && n.removeAttribute("loading");
    },
    Yd = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const n = e.slides.length;
      if (!n || !t || t < 0) return;
      t = Math.min(t, n);
      const r =
          e.params.slidesPerView === "auto"
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        s = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const a = s,
          o = [a - t];
        o.push(...Array.from({ length: t }).map((l, u) => a + r + u)),
          e.slides.forEach((l, u) => {
            o.includes(l.column) && dc(e, u);
          });
        return;
      }
      const i = s + r - 1;
      if (e.params.rewind || e.params.loop)
        for (let a = s - t; a <= i + t; a += 1) {
          const o = ((a % n) + n) % n;
          (o < s || o > i) && dc(e, o);
        }
      else
        for (let a = Math.max(s - t, 0); a <= Math.min(i + t, n - 1); a += 1)
          a !== s && (a > i || a < s) && dc(e, a);
    };
  function Fk(e) {
    const { slidesGrid: t, params: n } = e,
      r = e.rtlTranslate ? e.translate : -e.translate;
    let s;
    for (let i = 0; i < t.length; i += 1)
      typeof t[i + 1] < "u"
        ? r >= t[i] && r < t[i + 1] - (t[i + 1] - t[i]) / 2
          ? (s = i)
          : r >= t[i] && r < t[i + 1] && (s = i + 1)
        : r >= t[i] && (s = i);
    return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
  }
  function Ak(e) {
    const t = this,
      n = t.rtlTranslate ? t.translate : -t.translate,
      {
        snapGrid: r,
        params: s,
        activeIndex: i,
        realIndex: a,
        snapIndex: o,
      } = t;
    let l = e,
      u;
    const c = (S) => {
      let g = S - t.virtual.slidesBefore;
      return (
        g < 0 && (g = t.virtual.slides.length + g),
        g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
        g
      );
    };
    if ((typeof l > "u" && (l = Fk(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
    else {
      const S = Math.min(s.slidesPerGroupSkip, l);
      u = S + Math.floor((l - S) / s.slidesPerGroup);
    }
    if ((u >= r.length && (u = r.length - 1), l === i && !t.params.loop)) {
      u !== o && ((t.snapIndex = u), t.emit("snapIndexChange"));
      return;
    }
    if (l === i && t.params.loop && t.virtual && t.params.virtual.enabled) {
      t.realIndex = c(l);
      return;
    }
    const d = t.grid && s.grid && s.grid.rows > 1;
    let p;
    if (t.virtual && s.virtual.enabled && s.loop) p = c(l);
    else if (d) {
      const S = t.slides.filter((v) => v.column === l)[0];
      let g = parseInt(S.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(t.slides.indexOf(S), 0)),
        (p = Math.floor(g / s.grid.rows));
    } else if (t.slides[l]) {
      const S = t.slides[l].getAttribute("data-swiper-slide-index");
      S ? (p = parseInt(S, 10)) : (p = l);
    } else p = l;
    Object.assign(t, {
      previousSnapIndex: o,
      snapIndex: u,
      previousRealIndex: a,
      realIndex: p,
      previousIndex: i,
      activeIndex: l,
    }),
      t.initialized && Yd(t),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) &&
        (a !== p && t.emit("realIndexChange"), t.emit("slideChange"));
  }
  function zk(e, t) {
    const n = this,
      r = n.params;
    let s = e.closest(`.${r.slideClass}, swiper-slide`);
    !s &&
      n.isElement &&
      t &&
      t.length > 1 &&
      t.includes(e) &&
      [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
        !s &&
          o.matches &&
          o.matches(`.${r.slideClass}, swiper-slide`) &&
          (s = o);
      });
    let i = !1,
      a;
    if (s) {
      for (let o = 0; o < n.slides.length; o += 1)
        if (n.slides[o] === s) {
          (i = !0), (a = o);
          break;
        }
    }
    if (s && i)
      (n.clickedSlide = s),
        n.virtual && n.params.virtual.enabled
          ? (n.clickedIndex = parseInt(
              s.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (n.clickedIndex = a);
    else {
      (n.clickedSlide = void 0), (n.clickedIndex = void 0);
      return;
    }
    r.slideToClickedSlide &&
      n.clickedIndex !== void 0 &&
      n.clickedIndex !== n.activeIndex &&
      n.slideToClickedSlide();
  }
  var $k = {
    updateSize: Mk,
    updateSlides: Nk,
    updateAutoHeight: Lk,
    updateSlidesOffset: Rk,
    updateSlidesProgress: jk,
    updateProgress: Dk,
    updateSlidesClasses: Ik,
    updateActiveIndex: Ak,
    updateClickedSlide: zk,
  };
  function Uk(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
      { params: n, rtlTranslate: r, translate: s, wrapperEl: i } = t;
    if (n.virtualTranslate) return r ? -s : s;
    if (n.cssMode) return s;
    let a = mk(i, e);
    return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0;
  }
  function Hk(e, t) {
    const n = this,
      { rtlTranslate: r, params: s, wrapperEl: i, progress: a } = n;
    let o = 0,
      l = 0;
    const u = 0;
    n.isHorizontal() ? (o = r ? -e : e) : (l = e),
      s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
      (n.previousTranslate = n.translate),
      (n.translate = n.isHorizontal() ? o : l),
      s.cssMode
        ? (i[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
            ? -o
            : -l)
        : s.virtualTranslate ||
          (n.isHorizontal()
            ? (o -= n.cssOverflowAdjustment())
            : (l -= n.cssOverflowAdjustment()),
          (i.style.transform = `translate3d(${o}px, ${l}px, ${u}px)`));
    let c;
    const d = n.maxTranslate() - n.minTranslate();
    d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
      c !== a && n.updateProgress(e),
      n.emit("setTranslate", n.translate, t);
  }
  function Bk() {
    return -this.snapGrid[0];
  }
  function Wk() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Yk(e, t, n, r, s) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      n === void 0 && (n = !0),
      r === void 0 && (r = !0);
    const i = this,
      { params: a, wrapperEl: o } = i;
    if (i.animating && a.preventInteractionOnTransition) return !1;
    const l = i.minTranslate(),
      u = i.maxTranslate();
    let c;
    if (
      (r && e > l ? (c = l) : r && e < u ? (c = u) : (c = e),
      i.updateProgress(c),
      a.cssMode)
    ) {
      const d = i.isHorizontal();
      if (t === 0) o[d ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!i.support.smoothScroll)
          return (
            $0({ swiper: i, targetPosition: -c, side: d ? "left" : "top" }), !0
          );
        o.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      t === 0
        ? (i.setTransition(0),
          i.setTranslate(c),
          n && (i.emit("beforeTransitionStart", t, s), i.emit("transitionEnd")))
        : (i.setTransition(t),
          i.setTranslate(c),
          n &&
            (i.emit("beforeTransitionStart", t, s), i.emit("transitionStart")),
          i.animating ||
            ((i.animating = !0),
            i.onTranslateToWrapperTransitionEnd ||
              (i.onTranslateToWrapperTransitionEnd = function (p) {
                !i ||
                  i.destroyed ||
                  (p.target === this &&
                    (i.wrapperEl.removeEventListener(
                      "transitionend",
                      i.onTranslateToWrapperTransitionEnd
                    ),
                    (i.onTranslateToWrapperTransitionEnd = null),
                    delete i.onTranslateToWrapperTransitionEnd,
                    (i.animating = !1),
                    n && i.emit("transitionEnd")));
              }),
            i.wrapperEl.addEventListener(
              "transitionend",
              i.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var Vk = {
    getTranslate: Uk,
    setTranslate: Hk,
    minTranslate: Bk,
    maxTranslate: Wk,
    translateTo: Yk,
  };
  function Gk(e, t) {
    const n = this;
    n.params.cssMode ||
      ((n.wrapperEl.style.transitionDuration = `${e}ms`),
      (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
      n.emit("setTransition", e, t);
  }
  function Y0(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: s } = e;
    const { activeIndex: i, previousIndex: a } = t;
    let o = r;
    if (
      (o || (i > a ? (o = "next") : i < a ? (o = "prev") : (o = "reset")),
      t.emit(`transition${s}`),
      n && i !== a)
    ) {
      if (o === "reset") {
        t.emit(`slideResetTransition${s}`);
        return;
      }
      t.emit(`slideChangeTransition${s}`),
        o === "next"
          ? t.emit(`slideNextTransition${s}`)
          : t.emit(`slidePrevTransition${s}`);
    }
  }
  function qk(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      Y0({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function Qk(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        Y0({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  var Kk = { setTransition: Gk, transitionStart: qk, transitionEnd: Qk };
  function Xk(e, t, n, r, s) {
    e === void 0 && (e = 0),
      n === void 0 && (n = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const i = this;
    let a = e;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: u,
      previousIndex: c,
      activeIndex: d,
      rtlTranslate: p,
      wrapperEl: S,
      enabled: g,
    } = i;
    if (
      (!g && !r && !s) ||
      i.destroyed ||
      (i.animating && o.preventInteractionOnTransition)
    )
      return !1;
    typeof t > "u" && (t = i.params.speed);
    const v = Math.min(i.params.slidesPerGroupSkip, a);
    let w = v + Math.floor((a - v) / i.params.slidesPerGroup);
    w >= l.length && (w = l.length - 1);
    const m = -l[w];
    if (o.normalizeSlideIndex)
      for (let x = 0; x < u.length; x += 1) {
        const b = -Math.floor(m * 100),
          O = Math.floor(u[x] * 100),
          k = Math.floor(u[x + 1] * 100);
        typeof u[x + 1] < "u"
          ? b >= O && b < k - (k - O) / 2
            ? (a = x)
            : b >= O && b < k && (a = x + 1)
          : b >= O && (a = x);
      }
    if (
      i.initialized &&
      a !== d &&
      ((!i.allowSlideNext &&
        (p
          ? m > i.translate && m > i.minTranslate()
          : m < i.translate && m < i.minTranslate())) ||
        (!i.allowSlidePrev &&
          m > i.translate &&
          m > i.maxTranslate() &&
          (d || 0) !== a))
    )
      return !1;
    a !== (c || 0) && n && i.emit("beforeSlideChangeStart"),
      i.updateProgress(m);
    let f;
    a > d ? (f = "next") : a < d ? (f = "prev") : (f = "reset");
    const h = i.virtual && i.params.virtual.enabled;
    if (!(h && s) && ((p && -m === i.translate) || (!p && m === i.translate)))
      return (
        i.updateActiveIndex(a),
        o.autoHeight && i.updateAutoHeight(),
        i.updateSlidesClasses(),
        o.effect !== "slide" && i.setTranslate(m),
        f !== "reset" && (i.transitionStart(n, f), i.transitionEnd(n, f)),
        !1
      );
    if (o.cssMode) {
      const x = i.isHorizontal(),
        b = p ? m : -m;
      if (t === 0)
        h &&
          ((i.wrapperEl.style.scrollSnapType = "none"),
          (i._immediateVirtual = !0)),
          h && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0
            ? ((i._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                S[x ? "scrollLeft" : "scrollTop"] = b;
              }))
            : (S[x ? "scrollLeft" : "scrollTop"] = b),
          h &&
            requestAnimationFrame(() => {
              (i.wrapperEl.style.scrollSnapType = ""),
                (i._immediateVirtual = !1);
            });
      else {
        if (!i.support.smoothScroll)
          return (
            $0({ swiper: i, targetPosition: b, side: x ? "left" : "top" }), !0
          );
        S.scrollTo({ [x ? "left" : "top"]: b, behavior: "smooth" });
      }
      return !0;
    }
    return (
      i.setTransition(t),
      i.setTranslate(m),
      i.updateActiveIndex(a),
      i.updateSlidesClasses(),
      i.emit("beforeTransitionStart", t, r),
      i.transitionStart(n, f),
      t === 0
        ? i.transitionEnd(n, f)
        : i.animating ||
          ((i.animating = !0),
          i.onSlideToWrapperTransitionEnd ||
            (i.onSlideToWrapperTransitionEnd = function (b) {
              !i ||
                i.destroyed ||
                (b.target === this &&
                  (i.wrapperEl.removeEventListener(
                    "transitionend",
                    i.onSlideToWrapperTransitionEnd
                  ),
                  (i.onSlideToWrapperTransitionEnd = null),
                  delete i.onSlideToWrapperTransitionEnd,
                  i.transitionEnd(n, f)));
            }),
          i.wrapperEl.addEventListener(
            "transitionend",
            i.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function Jk(e, t, n, r) {
    e === void 0 && (e = 0),
      n === void 0 && (n = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const s = this;
    if (s.destroyed) return;
    typeof t > "u" && (t = s.params.speed);
    const i = s.grid && s.params.grid && s.params.grid.rows > 1;
    let a = e;
    if (s.params.loop)
      if (s.virtual && s.params.virtual.enabled) a = a + s.virtual.slidesBefore;
      else {
        let o;
        if (i) {
          const p = a * s.params.grid.rows;
          o = s.slides.filter(
            (S) => S.getAttribute("data-swiper-slide-index") * 1 === p
          )[0].column;
        } else o = s.getSlideIndexByData(a);
        const l = i
            ? Math.ceil(s.slides.length / s.params.grid.rows)
            : s.slides.length,
          { centeredSlides: u } = s.params;
        let c = s.params.slidesPerView;
        c === "auto"
          ? (c = s.slidesPerViewDynamic())
          : ((c = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
            u && c % 2 === 0 && (c = c + 1));
        let d = l - o < c;
        if (
          (u && (d = d || o < Math.ceil(c / 2)),
          r && u && s.params.slidesPerView !== "auto" && !i && (d = !1),
          d)
        ) {
          const p = u
            ? o < s.activeIndex
              ? "prev"
              : "next"
            : o - s.activeIndex - 1 < s.params.slidesPerView
              ? "next"
              : "prev";
          s.loopFix({
            direction: p,
            slideTo: !0,
            activeSlideIndex: p === "next" ? o + 1 : o - l + 1,
            slideRealIndex: p === "next" ? s.realIndex : void 0,
          });
        }
        if (i) {
          const p = a * s.params.grid.rows;
          a = s.slides.filter(
            (S) => S.getAttribute("data-swiper-slide-index") * 1 === p
          )[0].column;
        } else a = s.getSlideIndexByData(a);
      }
    return (
      requestAnimationFrame(() => {
        s.slideTo(a, t, n, r);
      }),
      s
    );
  }
  function Zk(e, t, n) {
    t === void 0 && (t = !0);
    const r = this,
      { enabled: s, params: i, animating: a } = r;
    if (!s || r.destroyed) return r;
    typeof e > "u" && (e = r.params.speed);
    let o = i.slidesPerGroup;
    i.slidesPerView === "auto" &&
      i.slidesPerGroup === 1 &&
      i.slidesPerGroupAuto &&
      (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const l = r.activeIndex < i.slidesPerGroupSkip ? 1 : o,
      u = r.virtual && i.virtual.enabled;
    if (i.loop) {
      if (a && !u && i.loopPreventsSliding) return !1;
      if (
        (r.loopFix({ direction: "next" }),
        (r._clientLeft = r.wrapperEl.clientLeft),
        r.activeIndex === r.slides.length - 1 && i.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            r.slideTo(r.activeIndex + l, e, t, n);
          }),
          !0
        );
    }
    return i.rewind && r.isEnd
      ? r.slideTo(0, e, t, n)
      : r.slideTo(r.activeIndex + l, e, t, n);
  }
  function eC(e, t, n) {
    t === void 0 && (t = !0);
    const r = this,
      {
        params: s,
        snapGrid: i,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: l,
        animating: u,
      } = r;
    if (!l || r.destroyed) return r;
    typeof e > "u" && (e = r.params.speed);
    const c = r.virtual && s.virtual.enabled;
    if (s.loop) {
      if (u && !c && s.loopPreventsSliding) return !1;
      r.loopFix({ direction: "prev" }),
        (r._clientLeft = r.wrapperEl.clientLeft);
    }
    const d = o ? r.translate : -r.translate;
    function p(m) {
      return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
    }
    const S = p(d),
      g = i.map((m) => p(m));
    let v = i[g.indexOf(S) - 1];
    if (typeof v > "u" && s.cssMode) {
      let m;
      i.forEach((f, h) => {
        S >= f && (m = h);
      }),
        typeof m < "u" && (v = i[m > 0 ? m - 1 : m]);
    }
    let w = 0;
    if (
      (typeof v < "u" &&
        ((w = a.indexOf(v)),
        w < 0 && (w = r.activeIndex - 1),
        s.slidesPerView === "auto" &&
          s.slidesPerGroup === 1 &&
          s.slidesPerGroupAuto &&
          ((w = w - r.slidesPerViewDynamic("previous", !0) + 1),
          (w = Math.max(w, 0)))),
      s.rewind && r.isBeginning)
    ) {
      const m =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(m, e, t, n);
    } else if (s.loop && r.activeIndex === 0 && s.cssMode)
      return (
        requestAnimationFrame(() => {
          r.slideTo(w, e, t, n);
        }),
        !0
      );
    return r.slideTo(w, e, t, n);
  }
  function tC(e, t, n) {
    t === void 0 && (t = !0);
    const r = this;
    if (!r.destroyed)
      return (
        typeof e > "u" && (e = r.params.speed),
        r.slideTo(r.activeIndex, e, t, n)
      );
  }
  function nC(e, t, n, r) {
    t === void 0 && (t = !0), r === void 0 && (r = 0.5);
    const s = this;
    if (s.destroyed) return;
    typeof e > "u" && (e = s.params.speed);
    let i = s.activeIndex;
    const a = Math.min(s.params.slidesPerGroupSkip, i),
      o = a + Math.floor((i - a) / s.params.slidesPerGroup),
      l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[o]) {
      const u = s.snapGrid[o],
        c = s.snapGrid[o + 1];
      l - u > (c - u) * r && (i += s.params.slidesPerGroup);
    } else {
      const u = s.snapGrid[o - 1],
        c = s.snapGrid[o];
      l - u <= (c - u) * r && (i -= s.params.slidesPerGroup);
    }
    return (
      (i = Math.max(i, 0)),
      (i = Math.min(i, s.slidesGrid.length - 1)),
      s.slideTo(i, e, t, n)
    );
  }
  function rC() {
    const e = this;
    if (e.destroyed) return;
    const { params: t, slidesEl: n } = e,
      r =
        t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let s = e.clickedIndex,
      i;
    const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
      if (e.animating) return;
      (i = parseInt(
        e.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        t.centeredSlides
          ? s < e.loopedSlides - r / 2 ||
            s > e.slides.length - e.loopedSlides + r / 2
            ? (e.loopFix(),
              (s = e.getSlideIndex(
                Gt(n, `${a}[data-swiper-slide-index="${i}"]`)[0]
              )),
              Bd(() => {
                e.slideTo(s);
              }))
            : e.slideTo(s)
          : s > e.slides.length - r
            ? (e.loopFix(),
              (s = e.getSlideIndex(
                Gt(n, `${a}[data-swiper-slide-index="${i}"]`)[0]
              )),
              Bd(() => {
                e.slideTo(s);
              }))
            : e.slideTo(s);
    } else e.slideTo(s);
  }
  var sC = {
    slideTo: Xk,
    slideToLoop: Jk,
    slideNext: Zk,
    slidePrev: eC,
    slideReset: tC,
    slideToClosest: nC,
    slideToClickedSlide: rC,
  };
  function iC(e) {
    const t = this,
      { params: n, slidesEl: r } = t;
    if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
    const s = () => {
        Gt(r, `.${n.slideClass}, swiper-slide`).forEach((d, p) => {
          d.setAttribute("data-swiper-slide-index", p);
        });
      },
      i = t.grid && n.grid && n.grid.rows > 1,
      a = n.slidesPerGroup * (i ? n.grid.rows : 1),
      o = t.slides.length % a !== 0,
      l = i && t.slides.length % n.grid.rows !== 0,
      u = (c) => {
        for (let d = 0; d < c; d += 1) {
          const p = t.isElement
            ? pi("swiper-slide", [n.slideBlankClass])
            : pi("div", [n.slideClass, n.slideBlankClass]);
          t.slidesEl.append(p);
        }
      };
    if (o) {
      if (n.loopAddBlankSlides) {
        const c = a - (t.slides.length % a);
        u(c), t.recalcSlides(), t.updateSlides();
      } else
        Ll(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else if (l) {
      if (n.loopAddBlankSlides) {
        const c = n.grid.rows - (t.slides.length % n.grid.rows);
        u(c), t.recalcSlides(), t.updateSlides();
      } else
        Ll(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else s();
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
  }
  function aC(e) {
    let {
      slideRealIndex: t,
      slideTo: n = !0,
      direction: r,
      setTranslate: s,
      activeSlideIndex: i,
      byController: a,
      byMousewheel: o,
    } = e === void 0 ? {} : e;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
        slides: u,
        allowSlidePrev: c,
        allowSlideNext: d,
        slidesEl: p,
        params: S,
      } = l,
      { centeredSlides: g } = S;
    if (
      ((l.allowSlidePrev = !0),
      (l.allowSlideNext = !0),
      l.virtual && S.virtual.enabled)
    ) {
      n &&
        (!S.centeredSlides && l.snapIndex === 0
          ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
          : S.centeredSlides && l.snapIndex < S.slidesPerView
            ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
            : l.snapIndex === l.snapGrid.length - 1 &&
              l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        (l.allowSlidePrev = c),
        (l.allowSlideNext = d),
        l.emit("loopFix");
      return;
    }
    let v = S.slidesPerView;
    v === "auto"
      ? (v = l.slidesPerViewDynamic())
      : ((v = Math.ceil(parseFloat(S.slidesPerView, 10))),
        g && v % 2 === 0 && (v = v + 1));
    const w = S.slidesPerGroupAuto ? v : S.slidesPerGroup;
    let m = w;
    m % w !== 0 && (m += w - (m % w)),
      (m += S.loopAdditionalSlides),
      (l.loopedSlides = m);
    const f = l.grid && S.grid && S.grid.rows > 1;
    u.length < v + m
      ? Ll(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : f &&
        S.grid.fill === "row" &&
        Ll(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const h = [],
      E = [];
    let x = l.activeIndex;
    typeof i > "u"
      ? (i = l.getSlideIndex(
          u.filter((j) => j.classList.contains(S.slideActiveClass))[0]
        ))
      : (x = i);
    const b = r === "next" || !r,
      O = r === "prev" || !r;
    let k = 0,
      P = 0;
    const M = f ? Math.ceil(u.length / S.grid.rows) : u.length,
      $ = (f ? u[i].column : i) + (g && typeof s > "u" ? -v / 2 + 0.5 : 0);
    if ($ < m) {
      k = Math.max(m - $, w);
      for (let j = 0; j < m - $; j += 1) {
        const W = j - Math.floor(j / M) * M;
        if (f) {
          const V = M - W - 1;
          for (let te = u.length - 1; te >= 0; te -= 1)
            u[te].column === V && h.push(te);
        } else h.push(M - W - 1);
      }
    } else if ($ + v > M - m) {
      P = Math.max($ - (M - m * 2), w);
      for (let j = 0; j < P; j += 1) {
        const W = j - Math.floor(j / M) * M;
        f
          ? u.forEach((V, te) => {
              V.column === W && E.push(te);
            })
          : E.push(W);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      O &&
        h.forEach((j) => {
          (u[j].swiperLoopMoveDOM = !0),
            p.prepend(u[j]),
            (u[j].swiperLoopMoveDOM = !1);
        }),
      b &&
        E.forEach((j) => {
          (u[j].swiperLoopMoveDOM = !0),
            p.append(u[j]),
            (u[j].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      S.slidesPerView === "auto"
        ? l.updateSlides()
        : f &&
          ((h.length > 0 && O) || (E.length > 0 && b)) &&
          l.slides.forEach((j, W) => {
            l.grid.updateSlide(W, j, l.slides);
          }),
      S.watchSlidesProgress && l.updateSlidesOffset(),
      n)
    ) {
      if (h.length > 0 && O) {
        if (typeof t > "u") {
          const j = l.slidesGrid[x],
            V = l.slidesGrid[x + k] - j;
          o
            ? l.setTranslate(l.translate - V)
            : (l.slideTo(x + Math.ceil(k), 0, !1, !0),
              s &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - V),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - V)));
        } else if (s) {
          const j = f ? h.length / S.grid.rows : h.length;
          l.slideTo(l.activeIndex + j, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (E.length > 0 && b)
        if (typeof t > "u") {
          const j = l.slidesGrid[x],
            V = l.slidesGrid[x - P] - j;
          o
            ? l.setTranslate(l.translate - V)
            : (l.slideTo(x - P, 0, !1, !0),
              s &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - V),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - V)));
        } else {
          const j = f ? E.length / S.grid.rows : E.length;
          l.slideTo(l.activeIndex - j, 0, !1, !0);
        }
    }
    if (
      ((l.allowSlidePrev = c),
      (l.allowSlideNext = d),
      l.controller && l.controller.control && !a)
    ) {
      const j = {
        slideRealIndex: t,
        direction: r,
        setTranslate: s,
        activeSlideIndex: i,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((W) => {
            !W.destroyed &&
              W.params.loop &&
              W.loopFix({
                ...j,
                slideTo: W.params.slidesPerView === S.slidesPerView ? n : !1,
              });
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix({
            ...j,
            slideTo:
              l.controller.control.params.slidesPerView === S.slidesPerView
                ? n
                : !1,
          });
    }
    l.emit("loopFix");
  }
  function oC() {
    const e = this,
      { params: t, slidesEl: n } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach((s) => {
      const i =
        typeof s.swiperSlideIndex > "u"
          ? s.getAttribute("data-swiper-slide-index") * 1
          : s.swiperSlideIndex;
      r[i] = s;
    }),
      e.slides.forEach((s) => {
        s.removeAttribute("data-swiper-slide-index");
      }),
      r.forEach((s) => {
        n.append(s);
      }),
      e.recalcSlides(),
      e.slideTo(e.realIndex, 0);
  }
  var lC = { loopCreate: iC, loopFix: aC, loopDestroy: oC };
  function uC(e) {
    const t = this;
    if (
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode
    )
      return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
      (n.style.cursor = "move"),
      (n.style.cursor = e ? "grabbing" : "grab"),
      t.isElement &&
        requestAnimationFrame(() => {
          t.__preventObserver__ = !1;
        });
  }
  function cC() {
    const e = this;
    (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e.isElement && (e.__preventObserver__ = !0),
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        }));
  }
  var dC = { setGrabCursor: uC, unsetGrabCursor: cC };
  function fC(e, t) {
    t === void 0 && (t = this);
    function n(r) {
      if (!r || r === ys() || r === kt()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const s = r.closest(e);
      return !s && !r.getRootNode ? null : s || n(r.getRootNode().host);
    }
    return n(t);
  }
  function Lm(e, t, n) {
    const r = kt(),
      { params: s } = e,
      i = s.edgeSwipeDetection,
      a = s.edgeSwipeThreshold;
    return i && (n <= a || n >= r.innerWidth - a)
      ? i === "prevent"
        ? (t.preventDefault(), !0)
        : !1
      : !0;
  }
  function hC(e) {
    const t = this,
      n = ys();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    const s = t.touchEventsData;
    if (r.type === "pointerdown") {
      if (s.pointerId !== null && s.pointerId !== r.pointerId) return;
      s.pointerId = r.pointerId;
    } else
      r.type === "touchstart" &&
        r.targetTouches.length === 1 &&
        (s.touchId = r.targetTouches[0].identifier);
    if (r.type === "touchstart") {
      Lm(t, r, r.targetTouches[0].pageX);
      return;
    }
    const { params: i, touches: a, enabled: o } = t;
    if (
      !o ||
      (!i.simulateTouch && r.pointerType === "mouse") ||
      (t.animating && i.preventInteractionOnTransition)
    )
      return;
    !t.animating && i.cssMode && i.loop && t.loopFix();
    let l = r.target;
    if (
      (i.touchEventsTarget === "wrapper" && !vk(l, t.wrapperEl)) ||
      ("which" in r && r.which === 3) ||
      ("button" in r && r.button > 0) ||
      (s.isTouched && s.isMoved)
    )
      return;
    const u = !!i.noSwipingClass && i.noSwipingClass !== "",
      c = r.composedPath ? r.composedPath() : r.path;
    u && r.target && r.target.shadowRoot && c && (l = c[0]);
    const d = i.noSwipingSelector
        ? i.noSwipingSelector
        : `.${i.noSwipingClass}`,
      p = !!(r.target && r.target.shadowRoot);
    if (i.noSwiping && (p ? fC(d, l) : l.closest(d))) {
      t.allowClick = !0;
      return;
    }
    if (i.swipeHandler && !l.closest(i.swipeHandler)) return;
    (a.currentX = r.pageX), (a.currentY = r.pageY);
    const S = a.currentX,
      g = a.currentY;
    if (!Lm(t, r, S)) return;
    Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = S),
      (a.startY = g),
      (s.touchStartTime = Nl()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      i.threshold > 0 && (s.allowThresholdMove = !1);
    let v = !0;
    l.matches(s.focusableElements) &&
      ((v = !1), l.nodeName === "SELECT" && (s.isTouched = !1)),
      n.activeElement &&
        n.activeElement.matches(s.focusableElements) &&
        n.activeElement !== l &&
        (r.pointerType === "mouse" ||
          (r.pointerType !== "mouse" && !l.matches(s.focusableElements))) &&
        n.activeElement.blur();
    const w = v && t.allowTouchMove && i.touchStartPreventDefault;
    (i.touchStartForcePreventDefault || w) &&
      !l.isContentEditable &&
      r.preventDefault(),
      i.freeMode &&
        i.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !i.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", r);
  }
  function pC(e) {
    const t = ys(),
      n = this,
      r = n.touchEventsData,
      { params: s, touches: i, rtlTranslate: a, enabled: o } = n;
    if (!o || (!s.simulateTouch && e.pointerType === "mouse")) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (r.touchId !== null || l.pointerId !== r.pointerId))
    )
      return;
    let u;
    if (l.type === "touchmove") {
      if (
        ((u = [...l.changedTouches].filter(
          (b) => b.identifier === r.touchId
        )[0]),
        !u || u.identifier !== r.touchId)
      )
        return;
    } else u = l;
    if (!r.isTouched) {
      r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
      return;
    }
    const c = u.pageX,
      d = u.pageY;
    if (l.preventedByNestedSwiper) {
      (i.startX = c), (i.startY = d);
      return;
    }
    if (!n.allowTouchMove) {
      l.target.matches(r.focusableElements) || (n.allowClick = !1),
        r.isTouched &&
          (Object.assign(i, { startX: c, startY: d, currentX: c, currentY: d }),
          (r.touchStartTime = Nl()));
      return;
    }
    if (s.touchReleaseOnEdges && !s.loop) {
      if (n.isVertical()) {
        if (
          (d < i.startY && n.translate <= n.maxTranslate()) ||
          (d > i.startY && n.translate >= n.minTranslate())
        ) {
          (r.isTouched = !1), (r.isMoved = !1);
          return;
        }
      } else if (
        (c < i.startX && n.translate <= n.maxTranslate()) ||
        (c > i.startX && n.translate >= n.minTranslate())
      )
        return;
    }
    if (
      (t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        t.activeElement.blur(),
      t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(r.focusableElements))
    ) {
      (r.isMoved = !0), (n.allowClick = !1);
      return;
    }
    r.allowTouchCallbacks && n.emit("touchMove", l),
      (i.previousX = i.currentX),
      (i.previousY = i.currentY),
      (i.currentX = c),
      (i.currentY = d);
    const p = i.currentX - i.startX,
      S = i.currentY - i.startY;
    if (n.params.threshold && Math.sqrt(p ** 2 + S ** 2) < n.params.threshold)
      return;
    if (typeof r.isScrolling > "u") {
      let b;
      (n.isHorizontal() && i.currentY === i.startY) ||
      (n.isVertical() && i.currentX === i.startX)
        ? (r.isScrolling = !1)
        : p * p + S * S >= 25 &&
          ((b = (Math.atan2(Math.abs(S), Math.abs(p)) * 180) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? b > s.touchAngle
            : 90 - b > s.touchAngle));
    }
    if (
      (r.isScrolling && n.emit("touchMoveOpposite", l),
      typeof r.startMoving > "u" &&
        (i.currentX !== i.startX || i.currentY !== i.startY) &&
        (r.startMoving = !0),
      r.isScrolling ||
        (l.type === "touchmove" && r.preventTouchMoveFromPointerMove))
    ) {
      r.isTouched = !1;
      return;
    }
    if (!r.startMoving) return;
    (n.allowClick = !1),
      !s.cssMode && l.cancelable && l.preventDefault(),
      s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let g = n.isHorizontal() ? p : S,
      v = n.isHorizontal()
        ? i.currentX - i.previousX
        : i.currentY - i.previousY;
    s.oneWayMovement &&
      ((g = Math.abs(g) * (a ? 1 : -1)), (v = Math.abs(v) * (a ? 1 : -1))),
      (i.diff = g),
      (g *= s.touchRatio),
      a && ((g = -g), (v = -v));
    const w = n.touchesDirection;
    (n.swipeDirection = g > 0 ? "prev" : "next"),
      (n.touchesDirection = v > 0 ? "prev" : "next");
    const m = n.params.loop && !s.cssMode,
      f =
        (n.touchesDirection === "next" && n.allowSlideNext) ||
        (n.touchesDirection === "prev" && n.allowSlidePrev);
    if (!r.isMoved) {
      if (
        (m && f && n.loopFix({ direction: n.swipeDirection }),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating)
      ) {
        const b = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        n.wrapperEl.dispatchEvent(b);
      }
      (r.allowMomentumBounce = !1),
        s.grabCursor &&
          (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", l);
    }
    let h;
    if (
      (new Date().getTime(),
      r.isMoved &&
        r.allowThresholdMove &&
        w !== n.touchesDirection &&
        m &&
        f &&
        Math.abs(g) >= 1)
    ) {
      Object.assign(i, {
        startX: c,
        startY: d,
        currentX: c,
        currentY: d,
        startTranslate: r.currentTranslate,
      }),
        (r.loopSwapReset = !0),
        (r.startTranslate = r.currentTranslate);
      return;
    }
    n.emit("sliderMove", l),
      (r.isMoved = !0),
      (r.currentTranslate = g + r.startTranslate);
    let E = !0,
      x = s.resistanceRatio;
    if (
      (s.touchReleaseOnEdges && (x = 0),
      g > 0
        ? (m &&
            f &&
            !h &&
            r.allowThresholdMove &&
            r.currentTranslate >
              (s.centeredSlides
                ? n.minTranslate() -
                  n.slidesSizesGrid[n.activeIndex + 1] -
                  (s.slidesPerView !== "auto" &&
                  n.slides.length - s.slidesPerView >= 2
                    ? n.slidesSizesGrid[n.activeIndex + 1] +
                      n.params.spaceBetween
                    : 0) -
                  n.params.spaceBetween
                : n.minTranslate()) &&
            n.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          r.currentTranslate > n.minTranslate() &&
            ((E = !1),
            s.resistance &&
              (r.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + r.startTranslate + g) ** x)))
        : g < 0 &&
          (m &&
            f &&
            !h &&
            r.allowThresholdMove &&
            r.currentTranslate <
              (s.centeredSlides
                ? n.maxTranslate() +
                  n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                  n.params.spaceBetween +
                  (s.slidesPerView !== "auto" &&
                  n.slides.length - s.slidesPerView >= 2
                    ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                      n.params.spaceBetween
                    : 0)
                : n.maxTranslate()) &&
            n.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                n.slides.length -
                (s.slidesPerView === "auto"
                  ? n.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(s.slidesPerView, 10))),
            }),
          r.currentTranslate < n.maxTranslate() &&
            ((E = !1),
            s.resistance &&
              (r.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - r.startTranslate - g) ** x))),
      E && (l.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        n.swipeDirection === "next" &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        n.swipeDirection === "prev" &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        !n.allowSlideNext &&
        (r.currentTranslate = r.startTranslate),
      s.threshold > 0)
    )
      if (Math.abs(g) > s.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
          (r.allowThresholdMove = !0),
            (i.startX = i.currentX),
            (i.startY = i.currentY),
            (r.currentTranslate = r.startTranslate),
            (i.diff = n.isHorizontal()
              ? i.currentX - i.startX
              : i.currentY - i.startY);
          return;
        }
      } else {
        r.currentTranslate = r.startTranslate;
        return;
      }
    !s.followFinger ||
      s.cssMode ||
      (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
        s.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      s.freeMode &&
        s.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function mC(e) {
    const t = this,
      n = t.touchEventsData;
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    let s;
    if (r.type === "touchend" || r.type === "touchcancel") {
      if (
        ((s = [...r.changedTouches].filter(
          (x) => x.identifier === n.touchId
        )[0]),
        !s || s.identifier !== n.touchId)
      )
        return;
    } else {
      if (n.touchId !== null || r.pointerId !== n.pointerId) return;
      s = r;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        r.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(r.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      )
    )
      return;
    (n.pointerId = null), (n.touchId = null);
    const {
      params: a,
      touches: o,
      rtlTranslate: l,
      slidesGrid: u,
      enabled: c,
    } = t;
    if (!c || (!a.simulateTouch && r.pointerType === "mouse")) return;
    if (
      (n.allowTouchCallbacks && t.emit("touchEnd", r),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    a.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    const d = Nl(),
      p = d - n.touchStartTime;
    if (t.allowClick) {
      const x = r.path || (r.composedPath && r.composedPath());
      t.updateClickedSlide((x && x[0]) || r.target, x),
        t.emit("tap click", r),
        p < 300 &&
          d - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", r);
    }
    if (
      ((n.lastClickTime = Nl()),
      Bd(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        (o.diff === 0 && !n.loopSwapReset) ||
        (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
    ) {
      (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
      return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let S;
    if (
      (a.followFinger
        ? (S = l ? t.translate : -t.translate)
        : (S = -n.currentTranslate),
      a.cssMode)
    )
      return;
    if (a.freeMode && a.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: S });
      return;
    }
    const g = S >= -t.maxTranslate() && !t.params.loop;
    let v = 0,
      w = t.slidesSizesGrid[0];
    for (
      let x = 0;
      x < u.length;
      x += x < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const b = x < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof u[x + b] < "u"
        ? (g || (S >= u[x] && S < u[x + b])) && ((v = x), (w = u[x + b] - u[x]))
        : (g || S >= u[x]) &&
          ((v = x), (w = u[u.length - 1] - u[u.length - 2]));
    }
    let m = null,
      f = null;
    a.rewind &&
      (t.isBeginning
        ? (f =
            a.virtual && a.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (m = 0));
    const h = (S - u[v]) / w,
      E = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (p > a.longSwipesMs) {
      if (!a.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" &&
        (h >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? m : v + E)
          : t.slideTo(v)),
        t.swipeDirection === "prev" &&
          (h > 1 - a.longSwipesRatio
            ? t.slideTo(v + E)
            : f !== null && h < 0 && Math.abs(h) > a.longSwipesRatio
              ? t.slideTo(f)
              : t.slideTo(v));
    } else {
      if (!a.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation &&
      (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
        ? r.target === t.navigation.nextEl
          ? t.slideTo(v + E)
          : t.slideTo(v)
        : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : v + E),
          t.swipeDirection === "prev" && t.slideTo(f !== null ? f : v));
    }
  }
  function Rm() {
    const e = this,
      { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: s, snapGrid: i } = e,
      a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const o = a && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides &&
    !o
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.params.loop && !a
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = s),
      (e.allowSlideNext = r),
      e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
  }
  function gC(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function vC() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let s;
    const i = e.maxTranslate() - e.minTranslate();
    i === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / i),
      s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function yC(e) {
    const t = this;
    Go(t, e.target),
      !(
        t.params.cssMode ||
        (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
      ) && t.update();
  }
  function wC() {
    const e = this;
    e.documentTouchHandlerProceeded ||
      ((e.documentTouchHandlerProceeded = !0),
      e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const V0 = (e, t) => {
    const n = ys(),
      { params: r, el: s, wrapperEl: i, device: a } = e,
      o = !!r.nested,
      l = t === "on" ? "addEventListener" : "removeEventListener",
      u = t;
    !s ||
      typeof s == "string" ||
      (n[l]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
      s[l]("touchstart", e.onTouchStart, { passive: !1 }),
      s[l]("pointerdown", e.onTouchStart, { passive: !1 }),
      n[l]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
      n[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      n[l]("touchend", e.onTouchEnd, { passive: !0 }),
      n[l]("pointerup", e.onTouchEnd, { passive: !0 }),
      n[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
      n[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
      n[l]("pointerout", e.onTouchEnd, { passive: !0 }),
      n[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
      n[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) &&
        s[l]("click", e.onClick, !0),
      r.cssMode && i[l]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[u](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Rm,
            !0
          )
        : e[u]("observerUpdate", Rm, !0),
      s[l]("load", e.onLoad, { capture: !0 }));
  };
  function SC() {
    const e = this,
      { params: t } = e;
    (e.onTouchStart = hC.bind(e)),
      (e.onTouchMove = pC.bind(e)),
      (e.onTouchEnd = mC.bind(e)),
      (e.onDocumentTouchStart = wC.bind(e)),
      t.cssMode && (e.onScroll = vC.bind(e)),
      (e.onClick = gC.bind(e)),
      (e.onLoad = yC.bind(e)),
      V0(e, "on");
  }
  function xC() {
    V0(this, "off");
  }
  var EC = { attachEvents: SC, detachEvents: xC };
  const jm = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function _C() {
    const e = this,
      { realIndex: t, initialized: n, params: r, el: s } = e,
      i = r.breakpoints;
    if (!i || (i && Object.keys(i).length === 0)) return;
    const a = e.getBreakpoint(i, e.params.breakpointsBase, e.el);
    if (!a || e.currentBreakpoint === a) return;
    const l = (a in i ? i[a] : void 0) || e.originalParams,
      u = jm(e, r),
      c = jm(e, l),
      d = e.params.grabCursor,
      p = l.grabCursor,
      S = r.enabled;
    u && !c
      ? (s.classList.remove(
          `${r.containerModifierClass}grid`,
          `${r.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !u &&
        c &&
        (s.classList.add(`${r.containerModifierClass}grid`),
        ((l.grid.fill && l.grid.fill === "column") ||
          (!l.grid.fill && r.grid.fill === "column")) &&
          s.classList.add(`${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      d && !p ? e.unsetGrabCursor() : !d && p && e.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((h) => {
        if (typeof l[h] > "u") return;
        const E = r[h] && r[h].enabled,
          x = l[h] && l[h].enabled;
        E && !x && e[h].disable(), !E && x && e[h].enable();
      });
    const g = l.direction && l.direction !== r.direction,
      v = r.loop && (l.slidesPerView !== r.slidesPerView || g),
      w = r.loop;
    g && n && e.changeDirection(), wt(e.params, l);
    const m = e.params.enabled,
      f = e.params.loop;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      S && !m ? e.disable() : !S && m && e.enable(),
      (e.currentBreakpoint = a),
      e.emit("_beforeBreakpoint", l),
      n &&
        (v
          ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
          : !w && f
            ? (e.loopCreate(t), e.updateSlides())
            : w && !f && e.loopDestroy()),
      e.emit("breakpoint", l);
  }
  function bC(e, t, n) {
    if ((t === void 0 && (t = "window"), !e || (t === "container" && !n)))
      return;
    let r = !1;
    const s = kt(),
      i = t === "window" ? s.innerHeight : n.clientHeight,
      a = Object.keys(e).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const l = parseFloat(o.substr(1));
          return { value: i * l, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: l, value: u } = a[o];
      t === "window"
        ? s.matchMedia(`(min-width: ${u}px)`).matches && (r = l)
        : u <= n.clientWidth && (r = l);
    }
    return r || "max";
  }
  var TC = { setBreakpoint: _C, getBreakpoint: bC };
  function kC(e, t) {
    const n = [];
    return (
      e.forEach((r) => {
        typeof r == "object"
          ? Object.keys(r).forEach((s) => {
              r[s] && n.push(t + s);
            })
          : typeof r == "string" && n.push(t + r);
      }),
      n
    );
  }
  function CC() {
    const e = this,
      { classNames: t, params: n, rtl: r, el: s, device: i } = e,
      a = kC(
        [
          "initialized",
          n.direction,
          { "free-mode": e.params.freeMode && n.freeMode.enabled },
          { autoheight: n.autoHeight },
          { rtl: r },
          { grid: n.grid && n.grid.rows > 1 },
          {
            "grid-column":
              n.grid && n.grid.rows > 1 && n.grid.fill === "column",
          },
          { android: i.android },
          { ios: i.ios },
          { "css-mode": n.cssMode },
          { centered: n.cssMode && n.centeredSlides },
          { "watch-progress": n.watchSlidesProgress },
        ],
        n.containerModifierClass
      );
    t.push(...a), s.classList.add(...t), e.emitContainerClasses();
  }
  function PC() {
    const e = this,
      { el: t, classNames: n } = e;
    !t ||
      typeof t == "string" ||
      (t.classList.remove(...n), e.emitContainerClasses());
  }
  var OC = { addClasses: CC, removeClasses: PC };
  function MC() {
    const e = this,
      { isLocked: t, params: n } = e,
      { slidesOffsetBefore: r } = n;
    if (r) {
      const s = e.slides.length - 1,
        i = e.slidesGrid[s] + e.slidesSizesGrid[s] + r * 2;
      e.isLocked = e.size > i;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  var NC = { checkOverflow: MC },
    Vd = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function LC(e, t) {
    return function (r) {
      r === void 0 && (r = {});
      const s = Object.keys(r)[0],
        i = r[s];
      if (typeof i != "object" || i === null) {
        wt(t, r);
        return;
      }
      if (
        (e[s] === !0 && (e[s] = { enabled: !0 }),
        s === "navigation" &&
          e[s] &&
          e[s].enabled &&
          !e[s].prevEl &&
          !e[s].nextEl &&
          (e[s].auto = !0),
        ["pagination", "scrollbar"].indexOf(s) >= 0 &&
          e[s] &&
          e[s].enabled &&
          !e[s].el &&
          (e[s].auto = !0),
        !(s in e && "enabled" in i))
      ) {
        wt(t, r);
        return;
      }
      typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0),
        e[s] || (e[s] = { enabled: !1 }),
        wt(t, r);
    };
  }
  const fc = {
      eventsEmitter: Ok,
      update: $k,
      translate: Vk,
      transition: Kk,
      slide: sC,
      loop: lC,
      grabCursor: dC,
      events: EC,
      breakpoints: TC,
      checkOverflow: NC,
      classes: OC,
    },
    hc = {};
  let dh = class bn {
    constructor() {
      let t, n;
      for (var r = arguments.length, s = new Array(r), i = 0; i < r; i++)
        s[i] = arguments[i];
      s.length === 1 &&
      s[0].constructor &&
      Object.prototype.toString.call(s[0]).slice(8, -1) === "Object"
        ? (n = s[0])
        : ([t, n] = s),
        n || (n = {}),
        (n = wt({}, n)),
        t && !n.el && (n.el = t);
      const a = ys();
      if (
        n.el &&
        typeof n.el == "string" &&
        a.querySelectorAll(n.el).length > 1
      ) {
        const c = [];
        return (
          a.querySelectorAll(n.el).forEach((d) => {
            const p = wt({}, n, { el: d });
            c.push(new bn(p));
          }),
          c
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = B0()),
        (o.device = W0({ userAgent: n.userAgent })),
        (o.browser = kk()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
      const l = {};
      o.modules.forEach((c) => {
        c({
          params: n,
          swiper: o,
          extendParams: LC(n, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const u = wt({}, Vd, l);
      return (
        (o.params = wt({}, u, hc, n)),
        (o.originalParams = wt({}, o.params)),
        (o.passedParams = wt({}, n)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((c) => {
            o.on(c, o.params.on[c]);
          }),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
          enabled: o.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return o.params.direction === "horizontal";
          },
          isVertical() {
            return o.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: o.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
      );
    }
    getDirectionLabel(t) {
      return this.isHorizontal()
        ? t
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[t];
    }
    getSlideIndex(t) {
      const { slidesEl: n, params: r } = this,
        s = Gt(n, `.${r.slideClass}, swiper-slide`),
        i = Rl(s[0]);
      return Rl(t) - i;
    }
    getSlideIndexByData(t) {
      return this.getSlideIndex(
        this.slides.filter(
          (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
        )[0]
      );
    }
    recalcSlides() {
      const t = this,
        { slidesEl: n, params: r } = t;
      t.slides = Gt(n, `.${r.slideClass}, swiper-slide`);
    }
    enable() {
      const t = this;
      t.enabled ||
        ((t.enabled = !0),
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled &&
        ((t.enabled = !1),
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"));
    }
    setProgress(t, n) {
      const r = this;
      t = Math.min(Math.max(t, 0), 1);
      const s = r.minTranslate(),
        a = (r.maxTranslate() - s) * t + s;
      r.translateTo(a, typeof n > "u" ? 0 : n),
        r.updateActiveIndex(),
        r.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = t.el.className
        .split(" ")
        .filter(
          (r) =>
            r.indexOf("swiper") === 0 ||
            r.indexOf(t.params.containerModifierClass) === 0
        );
      t.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(t) {
      const n = this;
      return n.destroyed
        ? ""
        : t.className
            .split(" ")
            .filter(
              (r) =>
                r.indexOf("swiper-slide") === 0 ||
                r.indexOf(n.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = [];
      t.slides.forEach((r) => {
        const s = t.getSlideClasses(r);
        n.push({ slideEl: r, classNames: s }), t.emit("_slideClass", r, s);
      }),
        t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t, n) {
      t === void 0 && (t = "current"), n === void 0 && (n = !1);
      const r = this,
        {
          params: s,
          slides: i,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: l,
          activeIndex: u,
        } = r;
      let c = 1;
      if (typeof s.slidesPerView == "number") return s.slidesPerView;
      if (s.centeredSlides) {
        let d = i[u] ? Math.ceil(i[u].swiperSlideSize) : 0,
          p;
        for (let S = u + 1; S < i.length; S += 1)
          i[S] &&
            !p &&
            ((d += Math.ceil(i[S].swiperSlideSize)),
            (c += 1),
            d > l && (p = !0));
        for (let S = u - 1; S >= 0; S -= 1)
          i[S] &&
            !p &&
            ((d += i[S].swiperSlideSize), (c += 1), d > l && (p = !0));
      } else if (t === "current")
        for (let d = u + 1; d < i.length; d += 1)
          (n ? a[d] + o[d] - a[u] < l : a[d] - a[u] < l) && (c += 1);
      else for (let d = u - 1; d >= 0; d -= 1) a[u] - a[d] < l && (c += 1);
      return c;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: n, params: r } = t;
      r.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && Go(t, a);
        }),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
      function s() {
        const a = t.rtlTranslate ? t.translate * -1 : t.translate,
          o = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
        t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let i;
      if (r.freeMode && r.freeMode.enabled && !r.cssMode)
        s(), r.autoHeight && t.updateAutoHeight();
      else {
        if (
          (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
          t.isEnd &&
          !r.centeredSlides
        ) {
          const a =
            t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
          i = t.slideTo(a.length - 1, 0, !1, !0);
        } else i = t.slideTo(t.activeIndex, 0, !1, !0);
        i || s();
      }
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update");
    }
    changeDirection(t, n) {
      n === void 0 && (n = !0);
      const r = this,
        s = r.params.direction;
      return (
        t || (t = s === "horizontal" ? "vertical" : "horizontal"),
        t === s ||
          (t !== "horizontal" && t !== "vertical") ||
          (r.el.classList.remove(`${r.params.containerModifierClass}${s}`),
          r.el.classList.add(`${r.params.containerModifierClass}${t}`),
          r.emitContainerClasses(),
          (r.params.direction = t),
          r.slides.forEach((i) => {
            t === "vertical" ? (i.style.width = "") : (i.style.height = "");
          }),
          r.emit("changeDirection"),
          n && r.update()),
        r
      );
    }
    changeLanguageDirection(t) {
      const n = this;
      (n.rtl && t === "rtl") ||
        (!n.rtl && t === "ltr") ||
        ((n.rtl = t === "rtl"),
        (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
        n.rtl
          ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "rtl"))
          : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "ltr")),
        n.update());
    }
    mount(t) {
      const n = this;
      if (n.mounted) return !0;
      let r = t || n.params.el;
      if ((typeof r == "string" && (r = document.querySelector(r)), !r))
        return !1;
      (r.swiper = n),
        r.parentNode &&
          r.parentNode.host &&
          r.parentNode.host.nodeName ===
            n.params.swiperElementNodeName.toUpperCase() &&
          (n.isElement = !0);
      const s = () =>
        `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a =
        r && r.shadowRoot && r.shadowRoot.querySelector
          ? r.shadowRoot.querySelector(s())
          : Gt(r, s())[0];
      return (
        !a &&
          n.params.createElements &&
          ((a = pi("div", n.params.wrapperClass)),
          r.append(a),
          Gt(r, `.${n.params.slideClass}`).forEach((o) => {
            a.append(o);
          })),
        Object.assign(n, {
          el: r,
          wrapperEl: a,
          slidesEl:
            n.isElement && !r.parentNode.host.slideSlots
              ? r.parentNode.host
              : a,
          hostEl: n.isElement ? r.parentNode.host : r,
          mounted: !0,
          rtl: r.dir.toLowerCase() === "rtl" || yr(r, "direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (r.dir.toLowerCase() === "rtl" || yr(r, "direction") === "rtl"),
          wrongRTL: yr(a, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(t) {
      const n = this;
      if (n.initialized || n.mount(t) === !1) return n;
      n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents();
      const s = [...n.el.querySelectorAll('[loading="lazy"]')];
      return (
        n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach((i) => {
          i.complete
            ? Go(n, i)
            : i.addEventListener("load", (a) => {
                Go(n, a.target);
              });
        }),
        Yd(n),
        (n.initialized = !0),
        Yd(n),
        n.emit("init"),
        n.emit("afterInit"),
        n
      );
    }
    destroy(t, n) {
      t === void 0 && (t = !0), n === void 0 && (n = !0);
      const r = this,
        { params: s, el: i, wrapperEl: a, slides: o } = r;
      return (
        typeof r.params > "u" ||
          r.destroyed ||
          (r.emit("beforeDestroy"),
          (r.initialized = !1),
          r.detachEvents(),
          s.loop && r.loopDestroy(),
          n &&
            (r.removeClasses(),
            i && typeof i != "string" && i.removeAttribute("style"),
            a && a.removeAttribute("style"),
            o &&
              o.length &&
              o.forEach((l) => {
                l.classList.remove(
                  s.slideVisibleClass,
                  s.slideFullyVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          r.emit("destroy"),
          Object.keys(r.eventsListeners).forEach((l) => {
            r.off(l);
          }),
          t !== !1 &&
            (r.el && typeof r.el != "string" && (r.el.swiper = null), hk(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      wt(hc, t);
    }
    static get extendedDefaults() {
      return hc;
    }
    static get defaults() {
      return Vd;
    }
    static installModule(t) {
      bn.prototype.__modules__ || (bn.prototype.__modules__ = []);
      const n = bn.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((n) => bn.installModule(n)), bn)
        : (bn.installModule(t), bn);
    }
  };
  Object.keys(fc).forEach((e) => {
    Object.keys(fc[e]).forEach((t) => {
      dh.prototype[t] = fc[e][t];
    });
  });
  dh.use([Ck, Pk]);
  const G0 = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "swiperElementNodeName",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopAdditionalSlides",
    "loopAddBlankSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideFullyVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "slideBlankClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control",
  ];
  function ps(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
      !e.__swiper__
    );
  }
  function Ws(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
      .filter((r) => n.indexOf(r) < 0)
      .forEach((r) => {
        typeof e[r] > "u"
          ? (e[r] = t[r])
          : ps(t[r]) && ps(e[r]) && Object.keys(t[r]).length > 0
            ? t[r].__swiper__
              ? (e[r] = t[r])
              : Ws(e[r], t[r])
            : (e[r] = t[r]);
      });
  }
  function q0(e) {
    return (
      e === void 0 && (e = {}),
      e.navigation &&
        typeof e.navigation.nextEl > "u" &&
        typeof e.navigation.prevEl > "u"
    );
  }
  function Q0(e) {
    return (
      e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
    );
  }
  function K0(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
  }
  function X0(e) {
    e === void 0 && (e = "");
    const t = e
        .split(" ")
        .map((r) => r.trim())
        .filter((r) => !!r),
      n = [];
    return (
      t.forEach((r) => {
        n.indexOf(r) < 0 && n.push(r);
      }),
      n.join(" ")
    );
  }
  function RC(e) {
    return (
      e === void 0 && (e = ""),
      e
        ? e.includes("swiper-wrapper")
          ? e
          : `swiper-wrapper ${e}`
        : "swiper-wrapper"
    );
  }
  function jC(e) {
    let {
      swiper: t,
      slides: n,
      passedParams: r,
      changedParams: s,
      nextEl: i,
      prevEl: a,
      scrollbarEl: o,
      paginationEl: l,
    } = e;
    const u = s.filter(
        (P) => P !== "children" && P !== "direction" && P !== "wrapperClass"
      ),
      {
        params: c,
        pagination: d,
        navigation: p,
        scrollbar: S,
        virtual: g,
        thumbs: v,
      } = t;
    let w, m, f, h, E, x, b, O;
    s.includes("thumbs") &&
      r.thumbs &&
      r.thumbs.swiper &&
      c.thumbs &&
      !c.thumbs.swiper &&
      (w = !0),
      s.includes("controller") &&
        r.controller &&
        r.controller.control &&
        c.controller &&
        !c.controller.control &&
        (m = !0),
      s.includes("pagination") &&
        r.pagination &&
        (r.pagination.el || l) &&
        (c.pagination || c.pagination === !1) &&
        d &&
        !d.el &&
        (f = !0),
      s.includes("scrollbar") &&
        r.scrollbar &&
        (r.scrollbar.el || o) &&
        (c.scrollbar || c.scrollbar === !1) &&
        S &&
        !S.el &&
        (h = !0),
      s.includes("navigation") &&
        r.navigation &&
        (r.navigation.prevEl || a) &&
        (r.navigation.nextEl || i) &&
        (c.navigation || c.navigation === !1) &&
        p &&
        !p.prevEl &&
        !p.nextEl &&
        (E = !0);
    const k = (P) => {
      t[P] &&
        (t[P].destroy(),
        P === "navigation"
          ? (t.isElement && (t[P].prevEl.remove(), t[P].nextEl.remove()),
            (c[P].prevEl = void 0),
            (c[P].nextEl = void 0),
            (t[P].prevEl = void 0),
            (t[P].nextEl = void 0))
          : (t.isElement && t[P].el.remove(),
            (c[P].el = void 0),
            (t[P].el = void 0)));
    };
    s.includes("loop") &&
      t.isElement &&
      (c.loop && !r.loop ? (x = !0) : !c.loop && r.loop ? (b = !0) : (O = !0)),
      u.forEach((P) => {
        if (ps(c[P]) && ps(r[P]))
          Object.assign(c[P], r[P]),
            (P === "navigation" || P === "pagination" || P === "scrollbar") &&
              "enabled" in r[P] &&
              !r[P].enabled &&
              k(P);
        else {
          const M = r[P];
          (M === !0 || M === !1) &&
          (P === "navigation" || P === "pagination" || P === "scrollbar")
            ? M === !1 && k(P)
            : (c[P] = r[P]);
        }
      }),
      u.includes("controller") &&
        !m &&
        t.controller &&
        t.controller.control &&
        c.controller &&
        c.controller.control &&
        (t.controller.control = c.controller.control),
      s.includes("children") && n && g && c.virtual.enabled
        ? ((g.slides = n), g.update(!0))
        : s.includes("virtual") &&
          g &&
          c.virtual.enabled &&
          (n && (g.slides = n), g.update(!0)),
      s.includes("children") && n && c.loop && (O = !0),
      w && v.init() && v.update(!0),
      m && (t.controller.control = c.controller.control),
      f &&
        (t.isElement &&
          (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-pagination"),
          l.part.add("pagination"),
          t.el.appendChild(l)),
        l && (c.pagination.el = l),
        d.init(),
        d.render(),
        d.update()),
      h &&
        (t.isElement &&
          (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-scrollbar"),
          o.part.add("scrollbar"),
          t.el.appendChild(o)),
        o && (c.scrollbar.el = o),
        S.init(),
        S.updateSize(),
        S.setTranslate()),
      E &&
        (t.isElement &&
          ((!i || typeof i == "string") &&
            ((i = document.createElement("div")),
            i.classList.add("swiper-button-next"),
            (i.innerHTML = t.hostEl.constructor.nextButtonSvg),
            i.part.add("button-next"),
            t.el.appendChild(i)),
          (!a || typeof a == "string") &&
            ((a = document.createElement("div")),
            a.classList.add("swiper-button-prev"),
            (a.innerHTML = t.hostEl.constructor.prevButtonSvg),
            a.part.add("button-prev"),
            t.el.appendChild(a))),
        i && (c.navigation.nextEl = i),
        a && (c.navigation.prevEl = a),
        p.init(),
        p.update()),
      s.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
      s.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
      s.includes("direction") && t.changeDirection(r.direction, !1),
      (x || O) && t.loopDestroy(),
      (b || O) && t.loopCreate(),
      t.update();
  }
  function DC(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const n = { on: {} },
      r = {},
      s = {};
    Ws(n, Vd), (n._emitClasses = !0), (n.init = !1);
    const i = {},
      a = G0.map((l) => l.replace(/_/, "")),
      o = Object.assign({}, e);
    return (
      Object.keys(o).forEach((l) => {
        typeof e[l] > "u" ||
          (a.indexOf(l) >= 0
            ? ps(e[l])
              ? ((n[l] = {}), (s[l] = {}), Ws(n[l], e[l]), Ws(s[l], e[l]))
              : ((n[l] = e[l]), (s[l] = e[l]))
            : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
              ? t
                ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
              : (i[l] = e[l]));
      }),
      ["navigation", "pagination", "scrollbar"].forEach((l) => {
        n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
      }),
      { params: n, passedParams: s, rest: i, events: r }
    );
  }
  function IC(e, t) {
    let {
      el: n,
      nextEl: r,
      prevEl: s,
      paginationEl: i,
      scrollbarEl: a,
      swiper: o,
    } = e;
    q0(t) &&
      r &&
      s &&
      ((o.params.navigation.nextEl = r),
      (o.originalParams.navigation.nextEl = r),
      (o.params.navigation.prevEl = s),
      (o.originalParams.navigation.prevEl = s)),
      Q0(t) &&
        i &&
        ((o.params.pagination.el = i), (o.originalParams.pagination.el = i)),
      K0(t) &&
        a &&
        ((o.params.scrollbar.el = a), (o.originalParams.scrollbar.el = a)),
      o.init(n);
  }
  function FC(e, t, n, r, s) {
    const i = [];
    if (!t) return i;
    const a = (l) => {
      i.indexOf(l) < 0 && i.push(l);
    };
    if (n && r) {
      const l = r.map(s),
        u = n.map(s);
      l.join("") !== u.join("") && a("children"),
        r.length !== n.length && a("children");
    }
    return (
      G0.filter((l) => l[0] === "_")
        .map((l) => l.replace(/_/, ""))
        .forEach((l) => {
          if (l in e && l in t)
            if (ps(e[l]) && ps(t[l])) {
              const u = Object.keys(e[l]),
                c = Object.keys(t[l]);
              u.length !== c.length
                ? a(l)
                : (u.forEach((d) => {
                    e[l][d] !== t[l][d] && a(l);
                  }),
                  c.forEach((d) => {
                    e[l][d] !== t[l][d] && a(l);
                  }));
            } else e[l] !== t[l] && a(l);
        }),
      i
    );
  }
  const AC = (e) => {
    !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.parallax &&
        e.params.parallax &&
        e.params.parallax.enabled &&
        e.parallax.setTranslate());
  };
  function jl() {
    return (
      (jl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      jl.apply(this, arguments)
    );
  }
  function J0(e) {
    return (
      e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
    );
  }
  function Z0(e) {
    const t = [];
    return (
      Me.Children.toArray(e).forEach((n) => {
        J0(n)
          ? t.push(n)
          : n.props &&
            n.props.children &&
            Z0(n.props.children).forEach((r) => t.push(r));
      }),
      t
    );
  }
  function zC(e) {
    const t = [],
      n = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": [],
      };
    return (
      Me.Children.toArray(e).forEach((r) => {
        if (J0(r)) t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
          n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
          const s = Z0(r.props.children);
          s.length > 0
            ? s.forEach((i) => t.push(i))
            : n["container-end"].push(r);
        } else n["container-end"].push(r);
      }),
      { slides: t, slots: n }
    );
  }
  function $C(e, t, n) {
    if (!n) return null;
    const r = (c) => {
        let d = c;
        return (
          c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
        );
      },
      s = e.isHorizontal()
        ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
        : { top: `${n.offset}px` },
      { from: i, to: a } = n,
      o = e.params.loop ? -t.length : 0,
      l = e.params.loop ? t.length * 2 : t.length,
      u = [];
    for (let c = o; c < l; c += 1) c >= i && c <= a && u.push(t[r(c)]);
    return u.map((c, d) =>
      Me.cloneElement(c, {
        swiper: e,
        style: s,
        key: c.props.virtualIndex || c.key || `slide-${d}`,
      })
    );
  }
  function ta(e, t) {
    return typeof window > "u" ? T.useEffect(e, t) : T.useLayoutEffect(e, t);
  }
  const Dm = T.createContext(null),
    UC = T.createContext(null),
    ew = T.forwardRef(function (e, t) {
      let {
          className: n,
          tag: r = "div",
          wrapperTag: s = "div",
          children: i,
          onSwiper: a,
          ...o
        } = e === void 0 ? {} : e,
        l = !1;
      const [u, c] = T.useState("swiper"),
        [d, p] = T.useState(null),
        [S, g] = T.useState(!1),
        v = T.useRef(!1),
        w = T.useRef(null),
        m = T.useRef(null),
        f = T.useRef(null),
        h = T.useRef(null),
        E = T.useRef(null),
        x = T.useRef(null),
        b = T.useRef(null),
        O = T.useRef(null),
        { params: k, passedParams: P, rest: M, events: R } = DC(o),
        { slides: $, slots: j } = zC(i),
        W = () => {
          g(!S);
        };
      Object.assign(k.on, {
        _containerClasses(U, H) {
          c(H);
        },
      });
      const V = () => {
        Object.assign(k.on, R), (l = !0);
        const U = { ...k };
        if (
          (delete U.wrapperClass,
          (m.current = new dh(U)),
          m.current.virtual && m.current.params.virtual.enabled)
        ) {
          m.current.virtual.slides = $;
          const H = {
            cache: !1,
            slides: $,
            renderExternal: p,
            renderExternalUpdate: !1,
          };
          Ws(m.current.params.virtual, H),
            Ws(m.current.originalParams.virtual, H);
        }
      };
      w.current || V(), m.current && m.current.on("_beforeBreakpoint", W);
      const te = () => {
          l ||
            !R ||
            !m.current ||
            Object.keys(R).forEach((U) => {
              m.current.on(U, R[U]);
            });
        },
        Ve = () => {
          !R ||
            !m.current ||
            Object.keys(R).forEach((U) => {
              m.current.off(U, R[U]);
            });
        };
      T.useEffect(() => () => {
        m.current && m.current.off("_beforeBreakpoint", W);
      }),
        T.useEffect(() => {
          !v.current &&
            m.current &&
            (m.current.emitSlidesClasses(), (v.current = !0));
        }),
        ta(() => {
          if ((t && (t.current = w.current), !!w.current))
            return (
              m.current.destroyed && V(),
              IC(
                {
                  el: w.current,
                  nextEl: E.current,
                  prevEl: x.current,
                  paginationEl: b.current,
                  scrollbarEl: O.current,
                  swiper: m.current,
                },
                k
              ),
              a && !m.current.destroyed && a(m.current),
              () => {
                m.current && !m.current.destroyed && m.current.destroy(!0, !1);
              }
            );
        }, []),
        ta(() => {
          te();
          const U = FC(P, f.current, $, h.current, (H) => H.key);
          return (
            (f.current = P),
            (h.current = $),
            U.length &&
              m.current &&
              !m.current.destroyed &&
              jC({
                swiper: m.current,
                slides: $,
                passedParams: P,
                changedParams: U,
                nextEl: E.current,
                prevEl: x.current,
                scrollbarEl: O.current,
                paginationEl: b.current,
              }),
            () => {
              Ve();
            }
          );
        }),
        ta(() => {
          AC(m.current);
        }, [d]);
      function I() {
        return k.virtual
          ? $C(m.current, $, d)
          : $.map((U, H) =>
              Me.cloneElement(U, { swiper: m.current, swiperSlideIndex: H })
            );
      }
      return Me.createElement(
        r,
        jl({ ref: w, className: X0(`${u}${n ? ` ${n}` : ""}`) }, M),
        Me.createElement(
          UC.Provider,
          { value: m.current },
          j["container-start"],
          Me.createElement(
            s,
            { className: RC(k.wrapperClass) },
            j["wrapper-start"],
            I(),
            j["wrapper-end"]
          ),
          q0(k) &&
            Me.createElement(
              Me.Fragment,
              null,
              Me.createElement("div", {
                ref: x,
                className: "swiper-button-prev",
              }),
              Me.createElement("div", {
                ref: E,
                className: "swiper-button-next",
              })
            ),
          K0(k) &&
            Me.createElement("div", { ref: O, className: "swiper-scrollbar" }),
          Q0(k) &&
            Me.createElement("div", { ref: b, className: "swiper-pagination" }),
          j["container-end"]
        )
      );
    });
  ew.displayName = "Swiper";
  const tw = T.forwardRef(function (e, t) {
    let {
      tag: n = "div",
      children: r,
      className: s = "",
      swiper: i,
      zoom: a,
      lazy: o,
      virtualIndex: l,
      swiperSlideIndex: u,
      ...c
    } = e === void 0 ? {} : e;
    const d = T.useRef(null),
      [p, S] = T.useState("swiper-slide"),
      [g, v] = T.useState(!1);
    function w(E, x, b) {
      x === d.current && S(b);
    }
    ta(() => {
      if (
        (typeof u < "u" && (d.current.swiperSlideIndex = u),
        t && (t.current = d.current),
        !(!d.current || !i))
      ) {
        if (i.destroyed) {
          p !== "swiper-slide" && S("swiper-slide");
          return;
        }
        return (
          i.on("_slideClass", w),
          () => {
            i && i.off("_slideClass", w);
          }
        );
      }
    }),
      ta(() => {
        i && d.current && !i.destroyed && S(i.getSlideClasses(d.current));
      }, [i]);
    const m = {
        isActive: p.indexOf("swiper-slide-active") >= 0,
        isVisible: p.indexOf("swiper-slide-visible") >= 0,
        isPrev: p.indexOf("swiper-slide-prev") >= 0,
        isNext: p.indexOf("swiper-slide-next") >= 0,
      },
      f = () => (typeof r == "function" ? r(m) : r),
      h = () => {
        v(!0);
      };
    return Me.createElement(
      n,
      jl(
        {
          ref: d,
          className: X0(`${p}${s ? ` ${s}` : ""}`),
          "data-swiper-slide-index": l,
          onLoad: h,
        },
        c
      ),
      a &&
        Me.createElement(
          Dm.Provider,
          { value: m },
          Me.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof a == "number" ? a : void 0,
            },
            f(),
            o &&
              !g &&
              Me.createElement("div", { className: "swiper-lazy-preloader" })
          )
        ),
      !a &&
        Me.createElement(
          Dm.Provider,
          { value: m },
          f(),
          o &&
            !g &&
            Me.createElement("div", { className: "swiper-lazy-preloader" })
        )
    );
  });
  tw.displayName = "SwiperSlide";
  const HC = (e) => {
    var n, r;
    const t =
      (r =
        (n = e == null ? void 0 : e.listingDetails) == null
          ? void 0
          : n.data[0]) == null
        ? void 0
        : r.images;
    return y.jsx(y.Fragment, {
      children: y.jsx(ew, {
        modules: [Sk, xk, Ek],
        slidesPerView: 2,
        centeredSlides: !0,
        spaceBetween: 30,
        pagination: { type: "fraction" },
        navigation: !0,
        virtual: !0,
        className:
          "w-[100%] text-gray-100 text-sm font-semibold cursor-grabbing ",
        children:
          t == null
            ? void 0
            : t.map((s, i) =>
                y.jsxs(
                  tw,
                  {
                    virtualIndex: i,
                    className: "text-center text-[18px] items-center",
                    children: [
                      y.jsx("img", {
                        src: s == null ? void 0 : s.url,
                        className:
                          "block  h-[200px] lg:w-[400px] lg:h-[400px] object-cover",
                        onClick: () =>
                          document.getElementById(`index-${i}`).showModal(),
                      }),
                      y.jsx("dialog", {
                        id: `index-${i}`,
                        className:
                          "modal bg-black bg-opacity-50 backdrop-blur-lg",
                        children: y.jsxs("div", {
                          className: "modal-box p-0",
                          children: [
                            y.jsx("form", {
                              method: "dialog",
                              children: y.jsx("button", {
                                className:
                                  "btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-blue-600",
                                children: y.jsx(Xb, {}),
                              }),
                            }),
                            y.jsx("img", {
                              src: s == null ? void 0 : s.url,
                              alt: "",
                              className: "w-[100%] h-[100%] object-contain",
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  s
                )
              ),
      }),
    });
  }; //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var nw;
  function D() {
    return nw.apply(null, arguments);
  }
  function BC(e) {
    nw = e;
  }
  function Jt(e) {
    return (
      e instanceof Array ||
      Object.prototype.toString.call(e) === "[object Array]"
    );
  }
  function is(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function re(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function fh(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e) if (re(e, t)) return !1;
    return !0;
  }
  function at(e) {
    return e === void 0;
  }
  function Hn(e) {
    return (
      typeof e == "number" ||
      Object.prototype.toString.call(e) === "[object Number]"
    );
  }
  function Ha(e) {
    return (
      e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    );
  }
  function rw(e, t) {
    var n = [],
      r,
      s = e.length;
    for (r = 0; r < s; ++r) n.push(t(e[r], r));
    return n;
  }
  function wr(e, t) {
    for (var n in t) re(t, n) && (e[n] = t[n]);
    return (
      re(t, "toString") && (e.toString = t.toString),
      re(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function vn(e, t, n, r) {
    return kw(e, t, n, r, !0).utc();
  }
  function WC() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    };
  }
  function Q(e) {
    return e._pf == null && (e._pf = WC()), e._pf;
  }
  var Gd;
  Array.prototype.some
    ? (Gd = Array.prototype.some)
    : (Gd = function (e) {
        var t = Object(this),
          n = t.length >>> 0,
          r;
        for (r = 0; r < n; r++)
          if (r in t && e.call(this, t[r], r, t)) return !0;
        return !1;
      });
  function hh(e) {
    var t = null,
      n = !1,
      r = e._d && !isNaN(e._d.getTime());
    if (
      (r &&
        ((t = Q(e)),
        (n = Gd.call(t.parsedDateParts, function (s) {
          return s != null;
        })),
        (r =
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidEra &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n))),
        e._strict &&
          (r =
            r &&
            t.charsLeftOver === 0 &&
            t.unusedTokens.length === 0 &&
            t.bigHour === void 0)),
      Object.isFrozen == null || !Object.isFrozen(e))
    )
      e._isValid = r;
    else return r;
    return e._isValid;
  }
  function cu(e) {
    var t = vn(NaN);
    return e != null ? wr(Q(t), e) : (Q(t).userInvalidated = !0), t;
  }
  var Im = (D.momentProperties = []),
    pc = !1;
  function ph(e, t) {
    var n,
      r,
      s,
      i = Im.length;
    if (
      (at(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      at(t._i) || (e._i = t._i),
      at(t._f) || (e._f = t._f),
      at(t._l) || (e._l = t._l),
      at(t._strict) || (e._strict = t._strict),
      at(t._tzm) || (e._tzm = t._tzm),
      at(t._isUTC) || (e._isUTC = t._isUTC),
      at(t._offset) || (e._offset = t._offset),
      at(t._pf) || (e._pf = Q(t)),
      at(t._locale) || (e._locale = t._locale),
      i > 0)
    )
      for (n = 0; n < i; n++) (r = Im[n]), (s = t[r]), at(s) || (e[r] = s);
    return e;
  }
  function Ba(e) {
    ph(this, e),
      (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      pc === !1 && ((pc = !0), D.updateOffset(this), (pc = !1));
  }
  function Zt(e) {
    return e instanceof Ba || (e != null && e._isAMomentObject != null);
  }
  function sw(e) {
    D.suppressDeprecationWarnings === !1 &&
      typeof console < "u" &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function zt(e, t) {
    var n = !0;
    return wr(function () {
      if ((D.deprecationHandler != null && D.deprecationHandler(null, e), n)) {
        var r = [],
          s,
          i,
          a,
          o = arguments.length;
        for (i = 0; i < o; i++) {
          if (((s = ""), typeof arguments[i] == "object")) {
            s +=
              `
[` +
              i +
              "] ";
            for (a in arguments[0])
              re(arguments[0], a) && (s += a + ": " + arguments[0][a] + ", ");
            s = s.slice(0, -2);
          } else s = arguments[i];
          r.push(s);
        }
        sw(
          e +
            `
Arguments: ` +
            Array.prototype.slice.call(r).join("") +
            `
` +
            new Error().stack
        ),
          (n = !1);
      }
      return t.apply(this, arguments);
    }, t);
  }
  var Fm = {};
  function iw(e, t) {
    D.deprecationHandler != null && D.deprecationHandler(e, t),
      Fm[e] || (sw(t), (Fm[e] = !0));
  }
  D.suppressDeprecationWarnings = !1;
  D.deprecationHandler = null;
  function yn(e) {
    return (
      (typeof Function < "u" && e instanceof Function) ||
      Object.prototype.toString.call(e) === "[object Function]"
    );
  }
  function YC(e) {
    var t, n;
    for (n in e)
      re(e, n) && ((t = e[n]), yn(t) ? (this[n] = t) : (this["_" + n] = t));
    (this._config = e),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source
      ));
  }
  function qd(e, t) {
    var n = wr({}, e),
      r;
    for (r in t)
      re(t, r) &&
        (is(e[r]) && is(t[r])
          ? ((n[r] = {}), wr(n[r], e[r]), wr(n[r], t[r]))
          : t[r] != null
            ? (n[r] = t[r])
            : delete n[r]);
    for (r in e) re(e, r) && !re(t, r) && is(e[r]) && (n[r] = wr({}, n[r]));
    return n;
  }
  function mh(e) {
    e != null && this.set(e);
  }
  var Qd;
  Object.keys
    ? (Qd = Object.keys)
    : (Qd = function (e) {
        var t,
          n = [];
        for (t in e) re(e, t) && n.push(t);
        return n;
      });
  var VC = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  };
  function GC(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return yn(r) ? r.call(t, n) : r;
  }
  function mn(e, t, n) {
    var r = "" + Math.abs(e),
      s = t - r.length,
      i = e >= 0;
    return (
      (i ? (n ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, s)).toString().substr(1) +
      r
    );
  }
  var gh =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Eo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    mc = {},
    Ys = {};
  function B(e, t, n, r) {
    var s = r;
    typeof r == "string" &&
      (s = function () {
        return this[r]();
      }),
      e && (Ys[e] = s),
      t &&
        (Ys[t[0]] = function () {
          return mn(s.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (Ys[n] = function () {
          return this.localeData().ordinal(s.apply(this, arguments), e);
        });
  }
  function qC(e) {
    return e.match(/\[[\s\S]/)
      ? e.replace(/^\[|\]$/g, "")
      : e.replace(/\\/g, "");
  }
  function QC(e) {
    var t = e.match(gh),
      n,
      r;
    for (n = 0, r = t.length; n < r; n++)
      Ys[t[n]] ? (t[n] = Ys[t[n]]) : (t[n] = qC(t[n]));
    return function (s) {
      var i = "",
        a;
      for (a = 0; a < r; a++) i += yn(t[a]) ? t[a].call(s, e) : t[a];
      return i;
    };
  }
  function qo(e, t) {
    return e.isValid()
      ? ((t = aw(t, e.localeData())), (mc[t] = mc[t] || QC(t)), mc[t](e))
      : e.localeData().invalidDate();
  }
  function aw(e, t) {
    var n = 5;
    function r(s) {
      return t.longDateFormat(s) || s;
    }
    for (Eo.lastIndex = 0; n >= 0 && Eo.test(e); )
      (e = e.replace(Eo, r)), (Eo.lastIndex = 0), (n -= 1);
    return e;
  }
  var KC = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
  };
  function XC(e) {
    var t = this._longDateFormat[e],
      n = this._longDateFormat[e.toUpperCase()];
    return t || !n
      ? t
      : ((this._longDateFormat[e] = n
          .match(gh)
          .map(function (r) {
            return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd"
              ? r.slice(1)
              : r;
          })
          .join("")),
        this._longDateFormat[e]);
  }
  var JC = "Invalid date";
  function ZC() {
    return this._invalidDate;
  }
  var eP = "%d",
    tP = /\d{1,2}/;
  function nP(e) {
    return this._ordinal.replace("%d", e);
  }
  var rP = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  };
  function sP(e, t, n, r) {
    var s = this._relativeTime[n];
    return yn(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
  }
  function iP(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return yn(n) ? n(t) : n.replace(/%s/i, t);
  }
  var Am = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year",
  };
  function $t(e) {
    return typeof e == "string" ? Am[e] || Am[e.toLowerCase()] : void 0;
  }
  function vh(e) {
    var t = {},
      n,
      r;
    for (r in e) re(e, r) && ((n = $t(r)), n && (t[n] = e[r]));
    return t;
  }
  var aP = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1,
  };
  function oP(e) {
    var t = [],
      n;
    for (n in e) re(e, n) && t.push({ unit: n, priority: aP[n] });
    return (
      t.sort(function (r, s) {
        return r.priority - s.priority;
      }),
      t
    );
  }
  var ow = /\d/,
    Ct = /\d\d/,
    lw = /\d{3}/,
    yh = /\d{4}/,
    du = /[+-]?\d{6}/,
    me = /\d\d?/,
    uw = /\d\d\d\d?/,
    cw = /\d\d\d\d\d\d?/,
    fu = /\d{1,3}/,
    wh = /\d{1,4}/,
    hu = /[+-]?\d{1,6}/,
    bi = /\d+/,
    pu = /[+-]?\d+/,
    lP = /Z|[+-]\d\d:?\d\d/gi,
    mu = /Z|[+-]\d\d(?::?\d\d)?/gi,
    uP = /[+-]?\d+(\.\d{1,3})?/,
    Wa =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Ti = /^[1-9]\d?/,
    Sh = /^([1-9]\d|\d)/,
    Dl;
  Dl = {};
  function A(e, t, n) {
    Dl[e] = yn(t)
      ? t
      : function (r, s) {
          return r && n ? n : t;
        };
  }
  function cP(e, t) {
    return re(Dl, e) ? Dl[e](t._strict, t._locale) : new RegExp(dP(e));
  }
  function dP(e) {
    return jn(
      e
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (t, n, r, s, i) {
            return n || r || s || i;
          }
        )
    );
  }
  function jn(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function Rt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function J(e) {
    var t = +e,
      n = 0;
    return t !== 0 && isFinite(t) && (n = Rt(t)), n;
  }
  var Kd = {};
  function le(e, t) {
    var n,
      r = t,
      s;
    for (
      typeof e == "string" && (e = [e]),
        Hn(t) &&
          (r = function (i, a) {
            a[t] = J(i);
          }),
        s = e.length,
        n = 0;
      n < s;
      n++
    )
      Kd[e[n]] = r;
  }
  function Ya(e, t) {
    le(e, function (n, r, s, i) {
      (s._w = s._w || {}), t(n, s._w, s, i);
    });
  }
  function fP(e, t, n) {
    t != null && re(Kd, e) && Kd[e](t, n._a, n, e);
  }
  function gu(e) {
    return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
  }
  var Xe = 0,
    Nn = 1,
    fn = 2,
    Ae = 3,
    qt = 4,
    Ln = 5,
    qr = 6,
    hP = 7,
    pP = 8;
  B("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? mn(e, 4) : "+" + e;
  });
  B(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  B(0, ["YYYY", 4], 0, "year");
  B(0, ["YYYYY", 5], 0, "year");
  B(0, ["YYYYYY", 6, !0], 0, "year");
  A("Y", pu);
  A("YY", me, Ct);
  A("YYYY", wh, yh);
  A("YYYYY", hu, du);
  A("YYYYYY", hu, du);
  le(["YYYYY", "YYYYYY"], Xe);
  le("YYYY", function (e, t) {
    t[Xe] = e.length === 2 ? D.parseTwoDigitYear(e) : J(e);
  });
  le("YY", function (e, t) {
    t[Xe] = D.parseTwoDigitYear(e);
  });
  le("Y", function (e, t) {
    t[Xe] = parseInt(e, 10);
  });
  function na(e) {
    return gu(e) ? 366 : 365;
  }
  D.parseTwoDigitYear = function (e) {
    return J(e) + (J(e) > 68 ? 1900 : 2e3);
  };
  var dw = ki("FullYear", !0);
  function mP() {
    return gu(this.year());
  }
  function ki(e, t) {
    return function (n) {
      return n != null
        ? (fw(this, e, n), D.updateOffset(this, t), this)
        : ba(this, e);
    };
  }
  function ba(e, t) {
    if (!e.isValid()) return NaN;
    var n = e._d,
      r = e._isUTC;
    switch (t) {
      case "Milliseconds":
        return r ? n.getUTCMilliseconds() : n.getMilliseconds();
      case "Seconds":
        return r ? n.getUTCSeconds() : n.getSeconds();
      case "Minutes":
        return r ? n.getUTCMinutes() : n.getMinutes();
      case "Hours":
        return r ? n.getUTCHours() : n.getHours();
      case "Date":
        return r ? n.getUTCDate() : n.getDate();
      case "Day":
        return r ? n.getUTCDay() : n.getDay();
      case "Month":
        return r ? n.getUTCMonth() : n.getMonth();
      case "FullYear":
        return r ? n.getUTCFullYear() : n.getFullYear();
      default:
        return NaN;
    }
  }
  function fw(e, t, n) {
    var r, s, i, a, o;
    if (!(!e.isValid() || isNaN(n))) {
      switch (((r = e._d), (s = e._isUTC), t)) {
        case "Milliseconds":
          return void (s ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
        case "Seconds":
          return void (s ? r.setUTCSeconds(n) : r.setSeconds(n));
        case "Minutes":
          return void (s ? r.setUTCMinutes(n) : r.setMinutes(n));
        case "Hours":
          return void (s ? r.setUTCHours(n) : r.setHours(n));
        case "Date":
          return void (s ? r.setUTCDate(n) : r.setDate(n));
        case "FullYear":
          break;
        default:
          return;
      }
      (i = n),
        (a = e.month()),
        (o = e.date()),
        (o = o === 29 && a === 1 && !gu(i) ? 28 : o),
        s ? r.setUTCFullYear(i, a, o) : r.setFullYear(i, a, o);
    }
  }
  function gP(e) {
    return (e = $t(e)), yn(this[e]) ? this[e]() : this;
  }
  function vP(e, t) {
    if (typeof e == "object") {
      e = vh(e);
      var n = oP(e),
        r,
        s = n.length;
      for (r = 0; r < s; r++) this[n[r].unit](e[n[r].unit]);
    } else if (((e = $t(e)), yn(this[e]))) return this[e](t);
    return this;
  }
  function yP(e, t) {
    return ((e % t) + t) % t;
  }
  var Oe;
  Array.prototype.indexOf
    ? (Oe = Array.prototype.indexOf)
    : (Oe = function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
      });
  function xh(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n = yP(t, 12);
    return (
      (e += (t - n) / 12), n === 1 ? (gu(e) ? 29 : 28) : 31 - ((n % 7) % 2)
    );
  }
  B("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  B("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  });
  B("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  });
  A("M", me, Ti);
  A("MM", me, Ct);
  A("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  });
  A("MMMM", function (e, t) {
    return t.monthsRegex(e);
  });
  le(["M", "MM"], function (e, t) {
    t[Nn] = J(e) - 1;
  });
  le(["MMM", "MMMM"], function (e, t, n, r) {
    var s = n._locale.monthsParse(e, r, n._strict);
    s != null ? (t[Nn] = s) : (Q(n).invalidMonth = e);
  });
  var wP =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    hw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    pw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    SP = Wa,
    xP = Wa;
  function EP(e, t) {
    return e
      ? Jt(this._months)
        ? this._months[e.month()]
        : this._months[
            (this._months.isFormat || pw).test(t) ? "format" : "standalone"
          ][e.month()]
      : Jt(this._months)
        ? this._months
        : this._months.standalone;
  }
  function _P(e, t) {
    return e
      ? Jt(this._monthsShort)
        ? this._monthsShort[e.month()]
        : this._monthsShort[pw.test(t) ? "format" : "standalone"][e.month()]
      : Jt(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
  }
  function bP(e, t, n) {
    var r,
      s,
      i,
      a = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          r = 0;
        r < 12;
        ++r
      )
        (i = vn([2e3, r])),
          (this._shortMonthsParse[r] = this.monthsShort(
            i,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase());
    return n
      ? t === "MMM"
        ? ((s = Oe.call(this._shortMonthsParse, a)), s !== -1 ? s : null)
        : ((s = Oe.call(this._longMonthsParse, a)), s !== -1 ? s : null)
      : t === "MMM"
        ? ((s = Oe.call(this._shortMonthsParse, a)),
          s !== -1
            ? s
            : ((s = Oe.call(this._longMonthsParse, a)), s !== -1 ? s : null))
        : ((s = Oe.call(this._longMonthsParse, a)),
          s !== -1
            ? s
            : ((s = Oe.call(this._shortMonthsParse, a)), s !== -1 ? s : null));
  }
  function TP(e, t, n) {
    var r, s, i;
    if (this._monthsParseExact) return bP.call(this, e, t, n);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        r = 0;
      r < 12;
      r++
    ) {
      if (
        ((s = vn([2e3, r])),
        n &&
          !this._longMonthsParse[r] &&
          ((this._longMonthsParse[r] = new RegExp(
            "^" + this.months(s, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[r] = new RegExp(
            "^" + this.monthsShort(s, "").replace(".", "") + "$",
            "i"
          ))),
        !n &&
          !this._monthsParse[r] &&
          ((i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
          (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
        n && t === "MMMM" && this._longMonthsParse[r].test(e))
      )
        return r;
      if (n && t === "MMM" && this._shortMonthsParse[r].test(e)) return r;
      if (!n && this._monthsParse[r].test(e)) return r;
    }
  }
  function mw(e, t) {
    if (!e.isValid()) return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t)) t = J(t);
      else if (((t = e.localeData().monthsParse(t)), !Hn(t))) return e;
    }
    var n = t,
      r = e.date();
    return (
      (r = r < 29 ? r : Math.min(r, xh(e.year(), n))),
      e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r),
      e
    );
  }
  function gw(e) {
    return e != null
      ? (mw(this, e), D.updateOffset(this, !0), this)
      : ba(this, "Month");
  }
  function kP() {
    return xh(this.year(), this.month());
  }
  function CP(e) {
    return this._monthsParseExact
      ? (re(this, "_monthsRegex") || vw.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (re(this, "_monthsShortRegex") || (this._monthsShortRegex = SP),
        this._monthsShortStrictRegex && e
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex);
  }
  function PP(e) {
    return this._monthsParseExact
      ? (re(this, "_monthsRegex") || vw.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex)
      : (re(this, "_monthsRegex") || (this._monthsRegex = xP),
        this._monthsStrictRegex && e
          ? this._monthsStrictRegex
          : this._monthsRegex);
  }
  function vw() {
    function e(l, u) {
      return u.length - l.length;
    }
    var t = [],
      n = [],
      r = [],
      s,
      i,
      a,
      o;
    for (s = 0; s < 12; s++)
      (i = vn([2e3, s])),
        (a = jn(this.monthsShort(i, ""))),
        (o = jn(this.months(i, ""))),
        t.push(a),
        n.push(o),
        r.push(o),
        r.push(a);
    t.sort(e),
      n.sort(e),
      r.sort(e),
      (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  function OP(e, t, n, r, s, i, a) {
    var o;
    return (
      e < 100 && e >= 0
        ? ((o = new Date(e + 400, t, n, r, s, i, a)),
          isFinite(o.getFullYear()) && o.setFullYear(e))
        : (o = new Date(e, t, n, r, s, i, a)),
      o
    );
  }
  function Ta(e) {
    var t, n;
    return (
      e < 100 && e >= 0
        ? ((n = Array.prototype.slice.call(arguments)),
          (n[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, n))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    );
  }
  function Il(e, t, n) {
    var r = 7 + t - n,
      s = (7 + Ta(e, 0, r).getUTCDay() - t) % 7;
    return -s + r - 1;
  }
  function yw(e, t, n, r, s) {
    var i = (7 + n - r) % 7,
      a = Il(e, r, s),
      o = 1 + 7 * (t - 1) + i + a,
      l,
      u;
    return (
      o <= 0
        ? ((l = e - 1), (u = na(l) + o))
        : o > na(e)
          ? ((l = e + 1), (u = o - na(e)))
          : ((l = e), (u = o)),
      { year: l, dayOfYear: u }
    );
  }
  function ka(e, t, n) {
    var r = Il(e.year(), t, n),
      s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
      i,
      a;
    return (
      s < 1
        ? ((a = e.year() - 1), (i = s + Dn(a, t, n)))
        : s > Dn(e.year(), t, n)
          ? ((i = s - Dn(e.year(), t, n)), (a = e.year() + 1))
          : ((a = e.year()), (i = s)),
      { week: i, year: a }
    );
  }
  function Dn(e, t, n) {
    var r = Il(e, t, n),
      s = Il(e + 1, t, n);
    return (na(e) - r + s) / 7;
  }
  B("w", ["ww", 2], "wo", "week");
  B("W", ["WW", 2], "Wo", "isoWeek");
  A("w", me, Ti);
  A("ww", me, Ct);
  A("W", me, Ti);
  A("WW", me, Ct);
  Ya(["w", "ww", "W", "WW"], function (e, t, n, r) {
    t[r.substr(0, 1)] = J(e);
  });
  function MP(e) {
    return ka(e, this._week.dow, this._week.doy).week;
  }
  var NP = { dow: 0, doy: 6 };
  function LP() {
    return this._week.dow;
  }
  function RP() {
    return this._week.doy;
  }
  function jP(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function DP(e) {
    var t = ka(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  B("d", 0, "do", "day");
  B("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  });
  B("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  });
  B("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  });
  B("e", 0, 0, "weekday");
  B("E", 0, 0, "isoWeekday");
  A("d", me);
  A("e", me);
  A("E", me);
  A("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  });
  A("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  });
  A("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  });
  Ya(["dd", "ddd", "dddd"], function (e, t, n, r) {
    var s = n._locale.weekdaysParse(e, r, n._strict);
    s != null ? (t.d = s) : (Q(n).invalidWeekday = e);
  });
  Ya(["d", "e", "E"], function (e, t, n, r) {
    t[r] = J(e);
  });
  function IP(e, t) {
    return typeof e != "string"
      ? e
      : isNaN(e)
        ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
        : parseInt(e, 10);
  }
  function FP(e, t) {
    return typeof e == "string"
      ? t.weekdaysParse(e) % 7 || 7
      : isNaN(e)
        ? null
        : e;
  }
  function Eh(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var AP = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    ww = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    zP = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    $P = Wa,
    UP = Wa,
    HP = Wa;
  function BP(e, t) {
    var n = Jt(this._weekdays)
      ? this._weekdays
      : this._weekdays[
          e && e !== !0 && this._weekdays.isFormat.test(t)
            ? "format"
            : "standalone"
        ];
    return e === !0 ? Eh(n, this._week.dow) : e ? n[e.day()] : n;
  }
  function WP(e) {
    return e === !0
      ? Eh(this._weekdaysShort, this._week.dow)
      : e
        ? this._weekdaysShort[e.day()]
        : this._weekdaysShort;
  }
  function YP(e) {
    return e === !0
      ? Eh(this._weekdaysMin, this._week.dow)
      : e
        ? this._weekdaysMin[e.day()]
        : this._weekdaysMin;
  }
  function VP(e, t, n) {
    var r,
      s,
      i,
      a = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          r = 0;
        r < 7;
        ++r
      )
        (i = vn([2e3, 1]).day(r)),
          (this._minWeekdaysParse[r] = this.weekdaysMin(
            i,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[r] = this.weekdaysShort(
            i,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase());
    return n
      ? t === "dddd"
        ? ((s = Oe.call(this._weekdaysParse, a)), s !== -1 ? s : null)
        : t === "ddd"
          ? ((s = Oe.call(this._shortWeekdaysParse, a)), s !== -1 ? s : null)
          : ((s = Oe.call(this._minWeekdaysParse, a)), s !== -1 ? s : null)
      : t === "dddd"
        ? ((s = Oe.call(this._weekdaysParse, a)),
          s !== -1 || ((s = Oe.call(this._shortWeekdaysParse, a)), s !== -1)
            ? s
            : ((s = Oe.call(this._minWeekdaysParse, a)), s !== -1 ? s : null))
        : t === "ddd"
          ? ((s = Oe.call(this._shortWeekdaysParse, a)),
            s !== -1 || ((s = Oe.call(this._weekdaysParse, a)), s !== -1)
              ? s
              : ((s = Oe.call(this._minWeekdaysParse, a)), s !== -1 ? s : null))
          : ((s = Oe.call(this._minWeekdaysParse, a)),
            s !== -1 || ((s = Oe.call(this._weekdaysParse, a)), s !== -1)
              ? s
              : ((s = Oe.call(this._shortWeekdaysParse, a)),
                s !== -1 ? s : null));
  }
  function GP(e, t, n) {
    var r, s, i;
    if (this._weekdaysParseExact) return VP.call(this, e, t, n);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        r = 0;
      r < 7;
      r++
    ) {
      if (
        ((s = vn([2e3, 1]).day(r)),
        n &&
          !this._fullWeekdaysParse[r] &&
          ((this._fullWeekdaysParse[r] = new RegExp(
            "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._shortWeekdaysParse[r] = new RegExp(
            "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._minWeekdaysParse[r] = new RegExp(
            "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
            "i"
          ))),
        this._weekdaysParse[r] ||
          ((i =
            "^" +
            this.weekdays(s, "") +
            "|^" +
            this.weekdaysShort(s, "") +
            "|^" +
            this.weekdaysMin(s, "")),
          (this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i"))),
        n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      )
        return r;
      if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e)) return r;
      if (n && t === "dd" && this._minWeekdaysParse[r].test(e)) return r;
      if (!n && this._weekdaysParse[r].test(e)) return r;
    }
  }
  function qP(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = ba(this, "Day");
    return e != null
      ? ((e = IP(e, this.localeData())), this.add(e - t, "d"))
      : t;
  }
  function QP(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function KP(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      var t = FP(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else return this.day() || 7;
  }
  function XP(e) {
    return this._weekdaysParseExact
      ? (re(this, "_weekdaysRegex") || _h.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (re(this, "_weekdaysRegex") || (this._weekdaysRegex = $P),
        this._weekdaysStrictRegex && e
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex);
  }
  function JP(e) {
    return this._weekdaysParseExact
      ? (re(this, "_weekdaysRegex") || _h.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (re(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = UP),
        this._weekdaysShortStrictRegex && e
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex);
  }
  function ZP(e) {
    return this._weekdaysParseExact
      ? (re(this, "_weekdaysRegex") || _h.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (re(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = HP),
        this._weekdaysMinStrictRegex && e
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex);
  }
  function _h() {
    function e(c, d) {
      return d.length - c.length;
    }
    var t = [],
      n = [],
      r = [],
      s = [],
      i,
      a,
      o,
      l,
      u;
    for (i = 0; i < 7; i++)
      (a = vn([2e3, 1]).day(i)),
        (o = jn(this.weekdaysMin(a, ""))),
        (l = jn(this.weekdaysShort(a, ""))),
        (u = jn(this.weekdays(a, ""))),
        t.push(o),
        n.push(l),
        r.push(u),
        s.push(o),
        s.push(l),
        s.push(u);
    t.sort(e),
      n.sort(e),
      r.sort(e),
      s.sort(e),
      (this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + n.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  function bh() {
    return this.hours() % 12 || 12;
  }
  function eO() {
    return this.hours() || 24;
  }
  B("H", ["HH", 2], 0, "hour");
  B("h", ["hh", 2], 0, bh);
  B("k", ["kk", 2], 0, eO);
  B("hmm", 0, 0, function () {
    return "" + bh.apply(this) + mn(this.minutes(), 2);
  });
  B("hmmss", 0, 0, function () {
    return "" + bh.apply(this) + mn(this.minutes(), 2) + mn(this.seconds(), 2);
  });
  B("Hmm", 0, 0, function () {
    return "" + this.hours() + mn(this.minutes(), 2);
  });
  B("Hmmss", 0, 0, function () {
    return "" + this.hours() + mn(this.minutes(), 2) + mn(this.seconds(), 2);
  });
  function Sw(e, t) {
    B(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  Sw("a", !0);
  Sw("A", !1);
  function xw(e, t) {
    return t._meridiemParse;
  }
  A("a", xw);
  A("A", xw);
  A("H", me, Sh);
  A("h", me, Ti);
  A("k", me, Ti);
  A("HH", me, Ct);
  A("hh", me, Ct);
  A("kk", me, Ct);
  A("hmm", uw);
  A("hmmss", cw);
  A("Hmm", uw);
  A("Hmmss", cw);
  le(["H", "HH"], Ae);
  le(["k", "kk"], function (e, t, n) {
    var r = J(e);
    t[Ae] = r === 24 ? 0 : r;
  });
  le(["a", "A"], function (e, t, n) {
    (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
  });
  le(["h", "hh"], function (e, t, n) {
    (t[Ae] = J(e)), (Q(n).bigHour = !0);
  });
  le("hmm", function (e, t, n) {
    var r = e.length - 2;
    (t[Ae] = J(e.substr(0, r))), (t[qt] = J(e.substr(r))), (Q(n).bigHour = !0);
  });
  le("hmmss", function (e, t, n) {
    var r = e.length - 4,
      s = e.length - 2;
    (t[Ae] = J(e.substr(0, r))),
      (t[qt] = J(e.substr(r, 2))),
      (t[Ln] = J(e.substr(s))),
      (Q(n).bigHour = !0);
  });
  le("Hmm", function (e, t, n) {
    var r = e.length - 2;
    (t[Ae] = J(e.substr(0, r))), (t[qt] = J(e.substr(r)));
  });
  le("Hmmss", function (e, t, n) {
    var r = e.length - 4,
      s = e.length - 2;
    (t[Ae] = J(e.substr(0, r))),
      (t[qt] = J(e.substr(r, 2))),
      (t[Ln] = J(e.substr(s)));
  });
  function tO(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var nO = /[ap]\.?m?\.?/i,
    rO = ki("Hours", !0);
  function sO(e, t, n) {
    return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
  }
  var Ew = {
      calendar: VC,
      longDateFormat: KC,
      invalidDate: JC,
      ordinal: eP,
      dayOfMonthOrdinalParse: tP,
      relativeTime: rP,
      months: wP,
      monthsShort: hw,
      week: NP,
      weekdays: AP,
      weekdaysMin: zP,
      weekdaysShort: ww,
      meridiemParse: nO,
    },
    ve = {},
    Ai = {},
    Ca;
  function iO(e, t) {
    var n,
      r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
    return r;
  }
  function zm(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function aO(e) {
    for (var t = 0, n, r, s, i; t < e.length; ) {
      for (
        i = zm(e[t]).split("-"),
          n = i.length,
          r = zm(e[t + 1]),
          r = r ? r.split("-") : null;
        n > 0;

      ) {
        if (((s = vu(i.slice(0, n).join("-"))), s)) return s;
        if (r && r.length >= n && iO(i, r) >= n - 1) break;
        n--;
      }
      t++;
    }
    return Ca;
  }
  function oO(e) {
    return !!(e && e.match("^[^/\\\\]*$"));
  }
  function vu(e) {
    var t = null,
      n;
    if (ve[e] === void 0 && typeof Jo < "u" && Jo && Jo.exports && oO(e))
      try {
        (t = Ca._abbr), (n = require), n("./locale/" + e), Mr(t);
      } catch {
        ve[e] = null;
      }
    return ve[e];
  }
  function Mr(e, t) {
    var n;
    return (
      e &&
        (at(t) ? (n = Gn(e)) : (n = Th(e, t)),
        n
          ? (Ca = n)
          : typeof console < "u" &&
            console.warn &&
            console.warn(
              "Locale " + e + " not found. Did you forget to load it?"
            )),
      Ca._abbr
    );
  }
  function Th(e, t) {
    if (t !== null) {
      var n,
        r = Ew;
      if (((t.abbr = e), ve[e] != null))
        iw(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (r = ve[e]._config);
      else if (t.parentLocale != null)
        if (ve[t.parentLocale] != null) r = ve[t.parentLocale]._config;
        else if (((n = vu(t.parentLocale)), n != null)) r = n._config;
        else
          return (
            Ai[t.parentLocale] || (Ai[t.parentLocale] = []),
            Ai[t.parentLocale].push({ name: e, config: t }),
            null
          );
      return (
        (ve[e] = new mh(qd(r, t))),
        Ai[e] &&
          Ai[e].forEach(function (s) {
            Th(s.name, s.config);
          }),
        Mr(e),
        ve[e]
      );
    } else return delete ve[e], null;
  }
  function lO(e, t) {
    if (t != null) {
      var n,
        r,
        s = Ew;
      ve[e] != null && ve[e].parentLocale != null
        ? ve[e].set(qd(ve[e]._config, t))
        : ((r = vu(e)),
          r != null && (s = r._config),
          (t = qd(s, t)),
          r == null && (t.abbr = e),
          (n = new mh(t)),
          (n.parentLocale = ve[e]),
          (ve[e] = n)),
        Mr(e);
    } else
      ve[e] != null &&
        (ve[e].parentLocale != null
          ? ((ve[e] = ve[e].parentLocale), e === Mr() && Mr(e))
          : ve[e] != null && delete ve[e]);
    return ve[e];
  }
  function Gn(e) {
    var t;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return Ca;
    if (!Jt(e)) {
      if (((t = vu(e)), t)) return t;
      e = [e];
    }
    return aO(e);
  }
  function uO() {
    return Qd(ve);
  }
  function kh(e) {
    var t,
      n = e._a;
    return (
      n &&
        Q(e).overflow === -2 &&
        ((t =
          n[Nn] < 0 || n[Nn] > 11
            ? Nn
            : n[fn] < 1 || n[fn] > xh(n[Xe], n[Nn])
              ? fn
              : n[Ae] < 0 ||
                  n[Ae] > 24 ||
                  (n[Ae] === 24 && (n[qt] !== 0 || n[Ln] !== 0 || n[qr] !== 0))
                ? Ae
                : n[qt] < 0 || n[qt] > 59
                  ? qt
                  : n[Ln] < 0 || n[Ln] > 59
                    ? Ln
                    : n[qr] < 0 || n[qr] > 999
                      ? qr
                      : -1),
        Q(e)._overflowDayOfYear && (t < Xe || t > fn) && (t = fn),
        Q(e)._overflowWeeks && t === -1 && (t = hP),
        Q(e)._overflowWeekday && t === -1 && (t = pP),
        (Q(e).overflow = t)),
      e
    );
  }
  var cO =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    dO =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    fO = /Z|[+-]\d\d(?::?\d\d)?/,
    _o = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1],
    ],
    gc = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    hO = /^\/?Date\((-?\d+)/i,
    pO =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    mO = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60,
    };
  function _w(e) {
    var t,
      n,
      r = e._i,
      s = cO.exec(r) || dO.exec(r),
      i,
      a,
      o,
      l,
      u = _o.length,
      c = gc.length;
    if (s) {
      for (Q(e).iso = !0, t = 0, n = u; t < n; t++)
        if (_o[t][1].exec(s[1])) {
          (a = _o[t][0]), (i = _o[t][2] !== !1);
          break;
        }
      if (a == null) {
        e._isValid = !1;
        return;
      }
      if (s[3]) {
        for (t = 0, n = c; t < n; t++)
          if (gc[t][1].exec(s[3])) {
            o = (s[2] || " ") + gc[t][0];
            break;
          }
        if (o == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!i && o != null) {
        e._isValid = !1;
        return;
      }
      if (s[4])
        if (fO.exec(s[4])) l = "Z";
        else {
          e._isValid = !1;
          return;
        }
      (e._f = a + (o || "") + (l || "")), Ph(e);
    } else e._isValid = !1;
  }
  function gO(e, t, n, r, s, i) {
    var a = [
      vO(e),
      hw.indexOf(t),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(s, 10),
    ];
    return i && a.push(parseInt(i, 10)), a;
  }
  function vO(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function yO(e) {
    return e
      .replace(/\([^()]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");
  }
  function wO(e, t, n) {
    if (e) {
      var r = ww.indexOf(e),
        s = new Date(t[0], t[1], t[2]).getDay();
      if (r !== s) return (Q(n).weekdayMismatch = !0), (n._isValid = !1), !1;
    }
    return !0;
  }
  function SO(e, t, n) {
    if (e) return mO[e];
    if (t) return 0;
    var r = parseInt(n, 10),
      s = r % 100,
      i = (r - s) / 100;
    return i * 60 + s;
  }
  function bw(e) {
    var t = pO.exec(yO(e._i)),
      n;
    if (t) {
      if (((n = gO(t[4], t[3], t[2], t[5], t[6], t[7])), !wO(t[1], n, e)))
        return;
      (e._a = n),
        (e._tzm = SO(t[8], t[9], t[10])),
        (e._d = Ta.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (Q(e).rfc2822 = !0);
    } else e._isValid = !1;
  }
  function xO(e) {
    var t = hO.exec(e._i);
    if (t !== null) {
      e._d = new Date(+t[1]);
      return;
    }
    if ((_w(e), e._isValid === !1)) delete e._isValid;
    else return;
    if ((bw(e), e._isValid === !1)) delete e._isValid;
    else return;
    e._strict ? (e._isValid = !1) : D.createFromInputFallback(e);
  }
  D.createFromInputFallback = zt(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function _s(e, t, n) {
    return e ?? t ?? n;
  }
  function EO(e) {
    var t = new Date(D.now());
    return e._useUTC
      ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
      : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Ch(e) {
    var t,
      n,
      r = [],
      s,
      i,
      a;
    if (!e._d) {
      for (
        s = EO(e),
          e._w && e._a[fn] == null && e._a[Nn] == null && _O(e),
          e._dayOfYear != null &&
            ((a = _s(e._a[Xe], s[Xe])),
            (e._dayOfYear > na(a) || e._dayOfYear === 0) &&
              (Q(e)._overflowDayOfYear = !0),
            (n = Ta(a, 0, e._dayOfYear)),
            (e._a[Nn] = n.getUTCMonth()),
            (e._a[fn] = n.getUTCDate())),
          t = 0;
        t < 3 && e._a[t] == null;
        ++t
      )
        e._a[t] = r[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
      e._a[Ae] === 24 &&
        e._a[qt] === 0 &&
        e._a[Ln] === 0 &&
        e._a[qr] === 0 &&
        ((e._nextDay = !0), (e._a[Ae] = 0)),
        (e._d = (e._useUTC ? Ta : OP).apply(null, r)),
        (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[Ae] = 24),
        e._w &&
          typeof e._w.d < "u" &&
          e._w.d !== i &&
          (Q(e).weekdayMismatch = !0);
    }
  }
  function _O(e) {
    var t, n, r, s, i, a, o, l, u;
    (t = e._w),
      t.GG != null || t.W != null || t.E != null
        ? ((i = 1),
          (a = 4),
          (n = _s(t.GG, e._a[Xe], ka(pe(), 1, 4).year)),
          (r = _s(t.W, 1)),
          (s = _s(t.E, 1)),
          (s < 1 || s > 7) && (l = !0))
        : ((i = e._locale._week.dow),
          (a = e._locale._week.doy),
          (u = ka(pe(), i, a)),
          (n = _s(t.gg, e._a[Xe], u.year)),
          (r = _s(t.w, u.week)),
          t.d != null
            ? ((s = t.d), (s < 0 || s > 6) && (l = !0))
            : t.e != null
              ? ((s = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
              : (s = i)),
      r < 1 || r > Dn(n, i, a)
        ? (Q(e)._overflowWeeks = !0)
        : l != null
          ? (Q(e)._overflowWeekday = !0)
          : ((o = yw(n, r, s, i, a)),
            (e._a[Xe] = o.year),
            (e._dayOfYear = o.dayOfYear));
  }
  D.ISO_8601 = function () {};
  D.RFC_2822 = function () {};
  function Ph(e) {
    if (e._f === D.ISO_8601) {
      _w(e);
      return;
    }
    if (e._f === D.RFC_2822) {
      bw(e);
      return;
    }
    (e._a = []), (Q(e).empty = !0);
    var t = "" + e._i,
      n,
      r,
      s,
      i,
      a,
      o = t.length,
      l = 0,
      u,
      c;
    for (
      s = aw(e._f, e._locale).match(gh) || [], c = s.length, n = 0;
      n < c;
      n++
    )
      (i = s[n]),
        (r = (t.match(cP(i, e)) || [])[0]),
        r &&
          ((a = t.substr(0, t.indexOf(r))),
          a.length > 0 && Q(e).unusedInput.push(a),
          (t = t.slice(t.indexOf(r) + r.length)),
          (l += r.length)),
        Ys[i]
          ? (r ? (Q(e).empty = !1) : Q(e).unusedTokens.push(i), fP(i, r, e))
          : e._strict && !r && Q(e).unusedTokens.push(i);
    (Q(e).charsLeftOver = o - l),
      t.length > 0 && Q(e).unusedInput.push(t),
      e._a[Ae] <= 12 &&
        Q(e).bigHour === !0 &&
        e._a[Ae] > 0 &&
        (Q(e).bigHour = void 0),
      (Q(e).parsedDateParts = e._a.slice(0)),
      (Q(e).meridiem = e._meridiem),
      (e._a[Ae] = bO(e._locale, e._a[Ae], e._meridiem)),
      (u = Q(e).era),
      u !== null && (e._a[Xe] = e._locale.erasConvertYear(u, e._a[Xe])),
      Ch(e),
      kh(e);
  }
  function bO(e, t, n) {
    var r;
    return n == null
      ? t
      : e.meridiemHour != null
        ? e.meridiemHour(t, n)
        : (e.isPM != null &&
            ((r = e.isPM(n)),
            r && t < 12 && (t += 12),
            !r && t === 12 && (t = 0)),
          t);
  }
  function TO(e) {
    var t,
      n,
      r,
      s,
      i,
      a,
      o = !1,
      l = e._f.length;
    if (l === 0) {
      (Q(e).invalidFormat = !0), (e._d = new Date(NaN));
      return;
    }
    for (s = 0; s < l; s++)
      (i = 0),
        (a = !1),
        (t = ph({}, e)),
        e._useUTC != null && (t._useUTC = e._useUTC),
        (t._f = e._f[s]),
        Ph(t),
        hh(t) && (a = !0),
        (i += Q(t).charsLeftOver),
        (i += Q(t).unusedTokens.length * 10),
        (Q(t).score = i),
        o
          ? i < r && ((r = i), (n = t))
          : (r == null || i < r || a) && ((r = i), (n = t), a && (o = !0));
    wr(e, n || t);
  }
  function kO(e) {
    if (!e._d) {
      var t = vh(e._i),
        n = t.day === void 0 ? t.date : t.day;
      (e._a = rw(
        [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
        function (r) {
          return r && parseInt(r, 10);
        }
      )),
        Ch(e);
    }
  }
  function CO(e) {
    var t = new Ba(kh(Tw(e)));
    return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
  }
  function Tw(e) {
    var t = e._i,
      n = e._f;
    return (
      (e._locale = e._locale || Gn(e._l)),
      t === null || (n === void 0 && t === "")
        ? cu({ nullInput: !0 })
        : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
          Zt(t)
            ? new Ba(kh(t))
            : (Ha(t) ? (e._d = t) : Jt(n) ? TO(e) : n ? Ph(e) : PO(e),
              hh(e) || (e._d = null),
              e))
    );
  }
  function PO(e) {
    var t = e._i;
    at(t)
      ? (e._d = new Date(D.now()))
      : Ha(t)
        ? (e._d = new Date(t.valueOf()))
        : typeof t == "string"
          ? xO(e)
          : Jt(t)
            ? ((e._a = rw(t.slice(0), function (n) {
                return parseInt(n, 10);
              })),
              Ch(e))
            : is(t)
              ? kO(e)
              : Hn(t)
                ? (e._d = new Date(t))
                : D.createFromInputFallback(e);
  }
  function kw(e, t, n, r, s) {
    var i = {};
    return (
      (t === !0 || t === !1) && ((r = t), (t = void 0)),
      (n === !0 || n === !1) && ((r = n), (n = void 0)),
      ((is(e) && fh(e)) || (Jt(e) && e.length === 0)) && (e = void 0),
      (i._isAMomentObject = !0),
      (i._useUTC = i._isUTC = s),
      (i._l = n),
      (i._i = e),
      (i._f = t),
      (i._strict = r),
      CO(i)
    );
  }
  function pe(e, t, n, r) {
    return kw(e, t, n, r, !1);
  }
  var OO = zt(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = pe.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : cu();
      }
    ),
    MO = zt(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = pe.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e > this ? this : e) : cu();
      }
    );
  function Cw(e, t) {
    var n, r;
    if ((t.length === 1 && Jt(t[0]) && (t = t[0]), !t.length)) return pe();
    for (n = t[0], r = 1; r < t.length; ++r)
      (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
    return n;
  }
  function NO() {
    var e = [].slice.call(arguments, 0);
    return Cw("isBefore", e);
  }
  function LO() {
    var e = [].slice.call(arguments, 0);
    return Cw("isAfter", e);
  }
  var RO = function () {
      return Date.now ? Date.now() : +new Date();
    },
    zi = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  function jO(e) {
    var t,
      n = !1,
      r,
      s = zi.length;
    for (t in e)
      if (
        re(e, t) &&
        !(Oe.call(zi, t) !== -1 && (e[t] == null || !isNaN(e[t])))
      )
        return !1;
    for (r = 0; r < s; ++r)
      if (e[zi[r]]) {
        if (n) return !1;
        parseFloat(e[zi[r]]) !== J(e[zi[r]]) && (n = !0);
      }
    return !0;
  }
  function DO() {
    return this._isValid;
  }
  function IO() {
    return tn(NaN);
  }
  function yu(e) {
    var t = vh(e),
      n = t.year || 0,
      r = t.quarter || 0,
      s = t.month || 0,
      i = t.week || t.isoWeek || 0,
      a = t.day || 0,
      o = t.hour || 0,
      l = t.minute || 0,
      u = t.second || 0,
      c = t.millisecond || 0;
    (this._isValid = jO(t)),
      (this._milliseconds = +c + u * 1e3 + l * 6e4 + o * 1e3 * 60 * 60),
      (this._days = +a + i * 7),
      (this._months = +s + r * 3 + n * 12),
      (this._data = {}),
      (this._locale = Gn()),
      this._bubble();
  }
  function Qo(e) {
    return e instanceof yu;
  }
  function Xd(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function FO(e, t, n) {
    var r = Math.min(e.length, t.length),
      s = Math.abs(e.length - t.length),
      i = 0,
      a;
    for (a = 0; a < r; a++) J(e[a]) !== J(t[a]) && i++;
    return i + s;
  }
  function Pw(e, t) {
    B(e, 0, 0, function () {
      var n = this.utcOffset(),
        r = "+";
      return (
        n < 0 && ((n = -n), (r = "-")),
        r + mn(~~(n / 60), 2) + t + mn(~~n % 60, 2)
      );
    });
  }
  Pw("Z", ":");
  Pw("ZZ", "");
  A("Z", mu);
  A("ZZ", mu);
  le(["Z", "ZZ"], function (e, t, n) {
    (n._useUTC = !0), (n._tzm = Oh(mu, e));
  });
  var AO = /([\+\-]|\d\d)/gi;
  function Oh(e, t) {
    var n = (t || "").match(e),
      r,
      s,
      i;
    return n === null
      ? null
      : ((r = n[n.length - 1] || []),
        (s = (r + "").match(AO) || ["-", 0, 0]),
        (i = +(s[1] * 60) + J(s[2])),
        i === 0 ? 0 : s[0] === "+" ? i : -i);
  }
  function Mh(e, t) {
    var n, r;
    return t._isUTC
      ? ((n = t.clone()),
        (r = (Zt(e) || Ha(e) ? e.valueOf() : pe(e).valueOf()) - n.valueOf()),
        n._d.setTime(n._d.valueOf() + r),
        D.updateOffset(n, !1),
        n)
      : pe(e).local();
  }
  function Jd(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  D.updateOffset = function () {};
  function zO(e, t, n) {
    var r = this._offset || 0,
      s;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (((e = Oh(mu, e)), e === null)) return this;
      } else Math.abs(e) < 16 && !n && (e = e * 60);
      return (
        !this._isUTC && t && (s = Jd(this)),
        (this._offset = e),
        (this._isUTC = !0),
        s != null && this.add(s, "m"),
        r !== e &&
          (!t || this._changeInProgress
            ? Nw(this, tn(e - r, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              D.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    } else return this._isUTC ? r : Jd(this);
  }
  function $O(e, t) {
    return e != null
      ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
      : -this.utcOffset();
  }
  function UO(e) {
    return this.utcOffset(0, e);
  }
  function HO(e) {
    return (
      this._isUTC &&
        (this.utcOffset(0, e),
        (this._isUTC = !1),
        e && this.subtract(Jd(this), "m")),
      this
    );
  }
  function BO() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Oh(lP, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function WO(e) {
    return this.isValid()
      ? ((e = e ? pe(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
      : !1;
  }
  function YO() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function VO() {
    if (!at(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
      t;
    return (
      ph(e, this),
      (e = Tw(e)),
      e._a
        ? ((t = e._isUTC ? vn(e._a) : pe(e._a)),
          (this._isDSTShifted = this.isValid() && FO(e._a, t.toArray()) > 0))
        : (this._isDSTShifted = !1),
      this._isDSTShifted
    );
  }
  function GO() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function qO() {
    return this.isValid() ? this._isUTC : !1;
  }
  function Ow() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var QO = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    KO =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function tn(e, t) {
    var n = e,
      r = null,
      s,
      i,
      a;
    return (
      Qo(e)
        ? (n = { ms: e._milliseconds, d: e._days, M: e._months })
        : Hn(e) || !isNaN(+e)
          ? ((n = {}), t ? (n[t] = +e) : (n.milliseconds = +e))
          : (r = QO.exec(e))
            ? ((s = r[1] === "-" ? -1 : 1),
              (n = {
                y: 0,
                d: J(r[fn]) * s,
                h: J(r[Ae]) * s,
                m: J(r[qt]) * s,
                s: J(r[Ln]) * s,
                ms: J(Xd(r[qr] * 1e3)) * s,
              }))
            : (r = KO.exec(e))
              ? ((s = r[1] === "-" ? -1 : 1),
                (n = {
                  y: $r(r[2], s),
                  M: $r(r[3], s),
                  w: $r(r[4], s),
                  d: $r(r[5], s),
                  h: $r(r[6], s),
                  m: $r(r[7], s),
                  s: $r(r[8], s),
                }))
              : n == null
                ? (n = {})
                : typeof n == "object" &&
                  ("from" in n || "to" in n) &&
                  ((a = XO(pe(n.from), pe(n.to))),
                  (n = {}),
                  (n.ms = a.milliseconds),
                  (n.M = a.months)),
      (i = new yu(n)),
      Qo(e) && re(e, "_locale") && (i._locale = e._locale),
      Qo(e) && re(e, "_isValid") && (i._isValid = e._isValid),
      i
    );
  }
  tn.fn = yu.prototype;
  tn.invalid = IO;
  function $r(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function $m(e, t) {
    var n = {};
    return (
      (n.months = t.month() - e.month() + (t.year() - e.year()) * 12),
      e.clone().add(n.months, "M").isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, "M")),
      n
    );
  }
  function XO(e, t) {
    var n;
    return e.isValid() && t.isValid()
      ? ((t = Mh(t, e)),
        e.isBefore(t)
          ? (n = $m(e, t))
          : ((n = $m(t, e)),
            (n.milliseconds = -n.milliseconds),
            (n.months = -n.months)),
        n)
      : { milliseconds: 0, months: 0 };
  }
  function Mw(e, t) {
    return function (n, r) {
      var s, i;
      return (
        r !== null &&
          !isNaN(+r) &&
          (iw(
            t,
            "moment()." +
              t +
              "(period, number) is deprecated. Please use moment()." +
              t +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (i = n),
          (n = r),
          (r = i)),
        (s = tn(n, r)),
        Nw(this, s, e),
        this
      );
    };
  }
  function Nw(e, t, n, r) {
    var s = t._milliseconds,
      i = Xd(t._days),
      a = Xd(t._months);
    e.isValid() &&
      ((r = r ?? !0),
      a && mw(e, ba(e, "Month") + a * n),
      i && fw(e, "Date", ba(e, "Date") + i * n),
      s && e._d.setTime(e._d.valueOf() + s * n),
      r && D.updateOffset(e, i || a));
  }
  var JO = Mw(1, "add"),
    ZO = Mw(-1, "subtract");
  function Lw(e) {
    return typeof e == "string" || e instanceof String;
  }
  function eM(e) {
    return (
      Zt(e) ||
      Ha(e) ||
      Lw(e) ||
      Hn(e) ||
      nM(e) ||
      tM(e) ||
      e === null ||
      e === void 0
    );
  }
  function tM(e) {
    var t = is(e) && !fh(e),
      n = !1,
      r = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms",
      ],
      s,
      i,
      a = r.length;
    for (s = 0; s < a; s += 1) (i = r[s]), (n = n || re(e, i));
    return t && n;
  }
  function nM(e) {
    var t = Jt(e),
      n = !1;
    return (
      t &&
        (n =
          e.filter(function (r) {
            return !Hn(r) && Lw(e);
          }).length === 0),
      t && n
    );
  }
  function rM(e) {
    var t = is(e) && !fh(e),
      n = !1,
      r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
      s,
      i;
    for (s = 0; s < r.length; s += 1) (i = r[s]), (n = n || re(e, i));
    return t && n;
  }
  function sM(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6
      ? "sameElse"
      : n < -1
        ? "lastWeek"
        : n < 0
          ? "lastDay"
          : n < 1
            ? "sameDay"
            : n < 2
              ? "nextDay"
              : n < 7
                ? "nextWeek"
                : "sameElse";
  }
  function iM(e, t) {
    arguments.length === 1 &&
      (arguments[0]
        ? eM(arguments[0])
          ? ((e = arguments[0]), (t = void 0))
          : rM(arguments[0]) && ((t = arguments[0]), (e = void 0))
        : ((e = void 0), (t = void 0)));
    var n = e || pe(),
      r = Mh(n, this).startOf("day"),
      s = D.calendarFormat(this, r) || "sameElse",
      i = t && (yn(t[s]) ? t[s].call(this, n) : t[s]);
    return this.format(i || this.localeData().calendar(s, this, pe(n)));
  }
  function aM() {
    return new Ba(this);
  }
  function oM(e, t) {
    var n = Zt(e) ? e : pe(e);
    return this.isValid() && n.isValid()
      ? ((t = $t(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      : !1;
  }
  function lM(e, t) {
    var n = Zt(e) ? e : pe(e);
    return this.isValid() && n.isValid()
      ? ((t = $t(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      : !1;
  }
  function uM(e, t, n, r) {
    var s = Zt(e) ? e : pe(e),
      i = Zt(t) ? t : pe(t);
    return this.isValid() && s.isValid() && i.isValid()
      ? ((r = r || "()"),
        (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) &&
          (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n)))
      : !1;
  }
  function cM(e, t) {
    var n = Zt(e) ? e : pe(e),
      r;
    return this.isValid() && n.isValid()
      ? ((t = $t(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() === n.valueOf()
          : ((r = n.valueOf()),
            this.clone().startOf(t).valueOf() <= r &&
              r <= this.clone().endOf(t).valueOf()))
      : !1;
  }
  function dM(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function fM(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function hM(e, t, n) {
    var r, s, i;
    if (!this.isValid()) return NaN;
    if (((r = Mh(e, this)), !r.isValid())) return NaN;
    switch (((s = (r.utcOffset() - this.utcOffset()) * 6e4), (t = $t(t)), t)) {
      case "year":
        i = Ko(this, r) / 12;
        break;
      case "month":
        i = Ko(this, r);
        break;
      case "quarter":
        i = Ko(this, r) / 3;
        break;
      case "second":
        i = (this - r) / 1e3;
        break;
      case "minute":
        i = (this - r) / 6e4;
        break;
      case "hour":
        i = (this - r) / 36e5;
        break;
      case "day":
        i = (this - r - s) / 864e5;
        break;
      case "week":
        i = (this - r - s) / 6048e5;
        break;
      default:
        i = this - r;
    }
    return n ? i : Rt(i);
  }
  function Ko(e, t) {
    if (e.date() < t.date()) return -Ko(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
      r = e.clone().add(n, "months"),
      s,
      i;
    return (
      t - r < 0
        ? ((s = e.clone().add(n - 1, "months")), (i = (t - r) / (r - s)))
        : ((s = e.clone().add(n + 1, "months")), (i = (t - r) / (s - r))),
      -(n + i) || 0
    );
  }
  D.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  D.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function pM() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function mM(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
      n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999
      ? qo(
          n,
          t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        )
      : yn(Date.prototype.toISOString)
        ? t
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
              .toISOString()
              .replace("Z", qo(n, "Z"))
        : qo(
            n,
            t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
  }
  function gM() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
      t = "",
      n,
      r,
      s,
      i;
    return (
      this.isLocal() ||
        ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
        (t = "Z")),
      (n = "[" + e + '("]'),
      (r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
      (s = "-MM-DD[T]HH:mm:ss.SSS"),
      (i = t + '[")]'),
      this.format(n + r + s + i)
    );
  }
  function vM(e) {
    e || (e = this.isUtc() ? D.defaultFormatUtc : D.defaultFormat);
    var t = qo(this, e);
    return this.localeData().postformat(t);
  }
  function yM(e, t) {
    return this.isValid() && ((Zt(e) && e.isValid()) || pe(e).isValid())
      ? tn({ to: this, from: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function wM(e) {
    return this.from(pe(), e);
  }
  function SM(e, t) {
    return this.isValid() && ((Zt(e) && e.isValid()) || pe(e).isValid())
      ? tn({ from: this, to: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function xM(e) {
    return this.to(pe(), e);
  }
  function Rw(e) {
    var t;
    return e === void 0
      ? this._locale._abbr
      : ((t = Gn(e)), t != null && (this._locale = t), this);
  }
  var jw = zt(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function Dw() {
    return this._locale;
  }
  var Fl = 1e3,
    Vs = 60 * Fl,
    Al = 60 * Vs,
    Iw = (365 * 400 + 97) * 24 * Al;
  function Gs(e, t) {
    return ((e % t) + t) % t;
  }
  function Fw(e, t, n) {
    return e < 100 && e >= 0
      ? new Date(e + 400, t, n) - Iw
      : new Date(e, t, n).valueOf();
  }
  function Aw(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Iw : Date.UTC(e, t, n);
  }
  function EM(e) {
    var t, n;
    if (((e = $t(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((n = this._isUTC ? Aw : Fw), e)) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(this.year(), this.month() - (this.month() % 3), 1);
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t -= Gs(t + (this._isUTC ? 0 : this.utcOffset() * Vs), Al));
        break;
      case "minute":
        (t = this._d.valueOf()), (t -= Gs(t, Vs));
        break;
      case "second":
        (t = this._d.valueOf()), (t -= Gs(t, Fl));
        break;
    }
    return this._d.setTime(t), D.updateOffset(this, !0), this;
  }
  function _M(e) {
    var t, n;
    if (((e = $t(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((n = this._isUTC ? Aw : Fw), e)) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        t =
          n(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t += Al - Gs(t + (this._isUTC ? 0 : this.utcOffset() * Vs), Al) - 1);
        break;
      case "minute":
        (t = this._d.valueOf()), (t += Vs - Gs(t, Vs) - 1);
        break;
      case "second":
        (t = this._d.valueOf()), (t += Fl - Gs(t, Fl) - 1);
        break;
    }
    return this._d.setTime(t), D.updateOffset(this, !0), this;
  }
  function bM() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function TM() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function kM() {
    return new Date(this.valueOf());
  }
  function CM() {
    var e = this;
    return [
      e.year(),
      e.month(),
      e.date(),
      e.hour(),
      e.minute(),
      e.second(),
      e.millisecond(),
    ];
  }
  function PM() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds(),
    };
  }
  function OM() {
    return this.isValid() ? this.toISOString() : null;
  }
  function MM() {
    return hh(this);
  }
  function NM() {
    return wr({}, Q(this));
  }
  function LM() {
    return Q(this).overflow;
  }
  function RM() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  B("N", 0, 0, "eraAbbr");
  B("NN", 0, 0, "eraAbbr");
  B("NNN", 0, 0, "eraAbbr");
  B("NNNN", 0, 0, "eraName");
  B("NNNNN", 0, 0, "eraNarrow");
  B("y", ["y", 1], "yo", "eraYear");
  B("y", ["yy", 2], 0, "eraYear");
  B("y", ["yyy", 3], 0, "eraYear");
  B("y", ["yyyy", 4], 0, "eraYear");
  A("N", Nh);
  A("NN", Nh);
  A("NNN", Nh);
  A("NNNN", WM);
  A("NNNNN", YM);
  le(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
    var s = n._locale.erasParse(e, r, n._strict);
    s ? (Q(n).era = s) : (Q(n).invalidEra = e);
  });
  A("y", bi);
  A("yy", bi);
  A("yyy", bi);
  A("yyyy", bi);
  A("yo", VM);
  le(["y", "yy", "yyy", "yyyy"], Xe);
  le(["yo"], function (e, t, n, r) {
    var s;
    n._locale._eraYearOrdinalRegex &&
      (s = e.match(n._locale._eraYearOrdinalRegex)),
      n._locale.eraYearOrdinalParse
        ? (t[Xe] = n._locale.eraYearOrdinalParse(e, s))
        : (t[Xe] = parseInt(e, 10));
  });
  function jM(e, t) {
    var n,
      r,
      s,
      i = this._eras || Gn("en")._eras;
    for (n = 0, r = i.length; n < r; ++n) {
      switch (typeof i[n].since) {
        case "string":
          (s = D(i[n].since).startOf("day")), (i[n].since = s.valueOf());
          break;
      }
      switch (typeof i[n].until) {
        case "undefined":
          i[n].until = 1 / 0;
          break;
        case "string":
          (s = D(i[n].until).startOf("day").valueOf()),
            (i[n].until = s.valueOf());
          break;
      }
    }
    return i;
  }
  function DM(e, t, n) {
    var r,
      s,
      i = this.eras(),
      a,
      o,
      l;
    for (e = e.toUpperCase(), r = 0, s = i.length; r < s; ++r)
      if (
        ((a = i[r].name.toUpperCase()),
        (o = i[r].abbr.toUpperCase()),
        (l = i[r].narrow.toUpperCase()),
        n)
      )
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (o === e) return i[r];
            break;
          case "NNNN":
            if (a === e) return i[r];
            break;
          case "NNNNN":
            if (l === e) return i[r];
            break;
        }
      else if ([a, o, l].indexOf(e) >= 0) return i[r];
  }
  function IM(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    return t === void 0
      ? D(e.since).year()
      : D(e.since).year() + (t - e.offset) * n;
  }
  function FM() {
    var e,
      t,
      n,
      r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf("day").valueOf()),
        (r[e].since <= n && n <= r[e].until) ||
          (r[e].until <= n && n <= r[e].since))
      )
        return r[e].name;
    return "";
  }
  function AM() {
    var e,
      t,
      n,
      r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf("day").valueOf()),
        (r[e].since <= n && n <= r[e].until) ||
          (r[e].until <= n && n <= r[e].since))
      )
        return r[e].narrow;
    return "";
  }
  function zM() {
    var e,
      t,
      n,
      r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf("day").valueOf()),
        (r[e].since <= n && n <= r[e].until) ||
          (r[e].until <= n && n <= r[e].since))
      )
        return r[e].abbr;
    return "";
  }
  function $M() {
    var e,
      t,
      n,
      r,
      s = this.localeData().eras();
    for (e = 0, t = s.length; e < t; ++e)
      if (
        ((n = s[e].since <= s[e].until ? 1 : -1),
        (r = this.clone().startOf("day").valueOf()),
        (s[e].since <= r && r <= s[e].until) ||
          (s[e].until <= r && r <= s[e].since))
      )
        return (this.year() - D(s[e].since).year()) * n + s[e].offset;
    return this.year();
  }
  function UM(e) {
    return (
      re(this, "_erasNameRegex") || Lh.call(this),
      e ? this._erasNameRegex : this._erasRegex
    );
  }
  function HM(e) {
    return (
      re(this, "_erasAbbrRegex") || Lh.call(this),
      e ? this._erasAbbrRegex : this._erasRegex
    );
  }
  function BM(e) {
    return (
      re(this, "_erasNarrowRegex") || Lh.call(this),
      e ? this._erasNarrowRegex : this._erasRegex
    );
  }
  function Nh(e, t) {
    return t.erasAbbrRegex(e);
  }
  function WM(e, t) {
    return t.erasNameRegex(e);
  }
  function YM(e, t) {
    return t.erasNarrowRegex(e);
  }
  function VM(e, t) {
    return t._eraYearOrdinalRegex || bi;
  }
  function Lh() {
    var e = [],
      t = [],
      n = [],
      r = [],
      s,
      i,
      a,
      o,
      l,
      u = this.eras();
    for (s = 0, i = u.length; s < i; ++s)
      (a = jn(u[s].name)),
        (o = jn(u[s].abbr)),
        (l = jn(u[s].narrow)),
        t.push(a),
        e.push(o),
        n.push(l),
        r.push(a),
        r.push(o),
        r.push(l);
    (this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
      (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i"));
  }
  B(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  B(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function wu(e, t) {
    B(0, [e, e.length], 0, t);
  }
  wu("gggg", "weekYear");
  wu("ggggg", "weekYear");
  wu("GGGG", "isoWeekYear");
  wu("GGGGG", "isoWeekYear");
  A("G", pu);
  A("g", pu);
  A("GG", me, Ct);
  A("gg", me, Ct);
  A("GGGG", wh, yh);
  A("gggg", wh, yh);
  A("GGGGG", hu, du);
  A("ggggg", hu, du);
  Ya(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
    t[r.substr(0, 2)] = J(e);
  });
  Ya(["gg", "GG"], function (e, t, n, r) {
    t[r] = D.parseTwoDigitYear(e);
  });
  function GM(e) {
    return zw.call(
      this,
      e,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function qM(e) {
    return zw.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function QM() {
    return Dn(this.year(), 1, 4);
  }
  function KM() {
    return Dn(this.isoWeekYear(), 1, 4);
  }
  function XM() {
    var e = this.localeData()._week;
    return Dn(this.year(), e.dow, e.doy);
  }
  function JM() {
    var e = this.localeData()._week;
    return Dn(this.weekYear(), e.dow, e.doy);
  }
  function zw(e, t, n, r, s) {
    var i;
    return e == null
      ? ka(this, r, s).year
      : ((i = Dn(e, r, s)), t > i && (t = i), ZM.call(this, e, t, n, r, s));
  }
  function ZM(e, t, n, r, s) {
    var i = yw(e, t, n, r, s),
      a = Ta(i.year, 0, i.dayOfYear);
    return (
      this.year(a.getUTCFullYear()),
      this.month(a.getUTCMonth()),
      this.date(a.getUTCDate()),
      this
    );
  }
  B("Q", 0, "Qo", "quarter");
  A("Q", ow);
  le("Q", function (e, t) {
    t[Nn] = (J(e) - 1) * 3;
  });
  function eN(e) {
    return e == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((e - 1) * 3 + (this.month() % 3));
  }
  B("D", ["DD", 2], "Do", "date");
  A("D", me, Ti);
  A("DD", me, Ct);
  A("Do", function (e, t) {
    return e
      ? t._dayOfMonthOrdinalParse || t._ordinalParse
      : t._dayOfMonthOrdinalParseLenient;
  });
  le(["D", "DD"], fn);
  le("Do", function (e, t) {
    t[fn] = J(e.match(me)[0]);
  });
  var $w = ki("Date", !0);
  B("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  A("DDD", fu);
  A("DDDD", lw);
  le(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = J(e);
  });
  function tN(e) {
    var t =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  B("m", ["mm", 2], 0, "minute");
  A("m", me, Sh);
  A("mm", me, Ct);
  le(["m", "mm"], qt);
  var nN = ki("Minutes", !1);
  B("s", ["ss", 2], 0, "second");
  A("s", me, Sh);
  A("ss", me, Ct);
  le(["s", "ss"], Ln);
  var rN = ki("Seconds", !1);
  B("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  B(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  B(0, ["SSS", 3], 0, "millisecond");
  B(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });
  B(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });
  B(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3;
  });
  B(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4;
  });
  B(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5;
  });
  B(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6;
  });
  A("S", fu, ow);
  A("SS", fu, Ct);
  A("SSS", fu, lw);
  var Sr, Uw;
  for (Sr = "SSSS"; Sr.length <= 9; Sr += "S") A(Sr, bi);
  function sN(e, t) {
    t[qr] = J(("0." + e) * 1e3);
  }
  for (Sr = "S"; Sr.length <= 9; Sr += "S") le(Sr, sN);
  Uw = ki("Milliseconds", !1);
  B("z", 0, 0, "zoneAbbr");
  B("zz", 0, 0, "zoneName");
  function iN() {
    return this._isUTC ? "UTC" : "";
  }
  function aN() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var L = Ba.prototype;
  L.add = JO;
  L.calendar = iM;
  L.clone = aM;
  L.diff = hM;
  L.endOf = _M;
  L.format = vM;
  L.from = yM;
  L.fromNow = wM;
  L.to = SM;
  L.toNow = xM;
  L.get = gP;
  L.invalidAt = LM;
  L.isAfter = oM;
  L.isBefore = lM;
  L.isBetween = uM;
  L.isSame = cM;
  L.isSameOrAfter = dM;
  L.isSameOrBefore = fM;
  L.isValid = MM;
  L.lang = jw;
  L.locale = Rw;
  L.localeData = Dw;
  L.max = MO;
  L.min = OO;
  L.parsingFlags = NM;
  L.set = vP;
  L.startOf = EM;
  L.subtract = ZO;
  L.toArray = CM;
  L.toObject = PM;
  L.toDate = kM;
  L.toISOString = mM;
  L.inspect = gM;
  typeof Symbol < "u" &&
    Symbol.for != null &&
    (L[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment<" + this.format() + ">";
    });
  L.toJSON = OM;
  L.toString = pM;
  L.unix = TM;
  L.valueOf = bM;
  L.creationData = RM;
  L.eraName = FM;
  L.eraNarrow = AM;
  L.eraAbbr = zM;
  L.eraYear = $M;
  L.year = dw;
  L.isLeapYear = mP;
  L.weekYear = GM;
  L.isoWeekYear = qM;
  L.quarter = L.quarters = eN;
  L.month = gw;
  L.daysInMonth = kP;
  L.week = L.weeks = jP;
  L.isoWeek = L.isoWeeks = DP;
  L.weeksInYear = XM;
  L.weeksInWeekYear = JM;
  L.isoWeeksInYear = QM;
  L.isoWeeksInISOWeekYear = KM;
  L.date = $w;
  L.day = L.days = qP;
  L.weekday = QP;
  L.isoWeekday = KP;
  L.dayOfYear = tN;
  L.hour = L.hours = rO;
  L.minute = L.minutes = nN;
  L.second = L.seconds = rN;
  L.millisecond = L.milliseconds = Uw;
  L.utcOffset = zO;
  L.utc = UO;
  L.local = HO;
  L.parseZone = BO;
  L.hasAlignedHourOffset = WO;
  L.isDST = YO;
  L.isLocal = GO;
  L.isUtcOffset = qO;
  L.isUtc = Ow;
  L.isUTC = Ow;
  L.zoneAbbr = iN;
  L.zoneName = aN;
  L.dates = zt("dates accessor is deprecated. Use date instead.", $w);
  L.months = zt("months accessor is deprecated. Use month instead", gw);
  L.years = zt("years accessor is deprecated. Use year instead", dw);
  L.zone = zt(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    $O
  );
  L.isDSTShifted = zt(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    VO
  );
  function oN(e) {
    return pe(e * 1e3);
  }
  function lN() {
    return pe.apply(null, arguments).parseZone();
  }
  function Hw(e) {
    return e;
  }
  var se = mh.prototype;
  se.calendar = GC;
  se.longDateFormat = XC;
  se.invalidDate = ZC;
  se.ordinal = nP;
  se.preparse = Hw;
  se.postformat = Hw;
  se.relativeTime = sP;
  se.pastFuture = iP;
  se.set = YC;
  se.eras = jM;
  se.erasParse = DM;
  se.erasConvertYear = IM;
  se.erasAbbrRegex = HM;
  se.erasNameRegex = UM;
  se.erasNarrowRegex = BM;
  se.months = EP;
  se.monthsShort = _P;
  se.monthsParse = TP;
  se.monthsRegex = PP;
  se.monthsShortRegex = CP;
  se.week = MP;
  se.firstDayOfYear = RP;
  se.firstDayOfWeek = LP;
  se.weekdays = BP;
  se.weekdaysMin = YP;
  se.weekdaysShort = WP;
  se.weekdaysParse = GP;
  se.weekdaysRegex = XP;
  se.weekdaysShortRegex = JP;
  se.weekdaysMinRegex = ZP;
  se.isPM = tO;
  se.meridiem = sO;
  function zl(e, t, n, r) {
    var s = Gn(),
      i = vn().set(r, t);
    return s[n](i, e);
  }
  function Bw(e, t, n) {
    if ((Hn(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
      return zl(e, t, n, "month");
    var r,
      s = [];
    for (r = 0; r < 12; r++) s[r] = zl(e, r, n, "month");
    return s;
  }
  function Rh(e, t, n, r) {
    typeof e == "boolean"
      ? (Hn(t) && ((n = t), (t = void 0)), (t = t || ""))
      : ((t = e),
        (n = t),
        (e = !1),
        Hn(t) && ((n = t), (t = void 0)),
        (t = t || ""));
    var s = Gn(),
      i = e ? s._week.dow : 0,
      a,
      o = [];
    if (n != null) return zl(t, (n + i) % 7, r, "day");
    for (a = 0; a < 7; a++) o[a] = zl(t, (a + i) % 7, r, "day");
    return o;
  }
  function uN(e, t) {
    return Bw(e, t, "months");
  }
  function cN(e, t) {
    return Bw(e, t, "monthsShort");
  }
  function dN(e, t, n) {
    return Rh(e, t, n, "weekdays");
  }
  function fN(e, t, n) {
    return Rh(e, t, n, "weekdaysShort");
  }
  function hN(e, t, n) {
    return Rh(e, t, n, "weekdaysMin");
  }
  Mr("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD",
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC",
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10,
        n =
          J((e % 100) / 10) === 1
            ? "th"
            : t === 1
              ? "st"
              : t === 2
                ? "nd"
                : t === 3
                  ? "rd"
                  : "th";
      return e + n;
    },
  });
  D.lang = zt("moment.lang is deprecated. Use moment.locale instead.", Mr);
  D.langData = zt(
    "moment.langData is deprecated. Use moment.localeData instead.",
    Gn
  );
  var En = Math.abs;
  function pN() {
    var e = this._data;
    return (
      (this._milliseconds = En(this._milliseconds)),
      (this._days = En(this._days)),
      (this._months = En(this._months)),
      (e.milliseconds = En(e.milliseconds)),
      (e.seconds = En(e.seconds)),
      (e.minutes = En(e.minutes)),
      (e.hours = En(e.hours)),
      (e.months = En(e.months)),
      (e.years = En(e.years)),
      this
    );
  }
  function Ww(e, t, n, r) {
    var s = tn(t, n);
    return (
      (e._milliseconds += r * s._milliseconds),
      (e._days += r * s._days),
      (e._months += r * s._months),
      e._bubble()
    );
  }
  function mN(e, t) {
    return Ww(this, e, t, 1);
  }
  function gN(e, t) {
    return Ww(this, e, t, -1);
  }
  function Um(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function vN() {
    var e = this._milliseconds,
      t = this._days,
      n = this._months,
      r = this._data,
      s,
      i,
      a,
      o,
      l;
    return (
      (e >= 0 && t >= 0 && n >= 0) ||
        (e <= 0 && t <= 0 && n <= 0) ||
        ((e += Um(Zd(n) + t) * 864e5), (t = 0), (n = 0)),
      (r.milliseconds = e % 1e3),
      (s = Rt(e / 1e3)),
      (r.seconds = s % 60),
      (i = Rt(s / 60)),
      (r.minutes = i % 60),
      (a = Rt(i / 60)),
      (r.hours = a % 24),
      (t += Rt(a / 24)),
      (l = Rt(Yw(t))),
      (n += l),
      (t -= Um(Zd(l))),
      (o = Rt(n / 12)),
      (n %= 12),
      (r.days = t),
      (r.months = n),
      (r.years = o),
      this
    );
  }
  function Yw(e) {
    return (e * 4800) / 146097;
  }
  function Zd(e) {
    return (e * 146097) / 4800;
  }
  function yN(e) {
    if (!this.isValid()) return NaN;
    var t,
      n,
      r = this._milliseconds;
    if (((e = $t(e)), e === "month" || e === "quarter" || e === "year"))
      switch (((t = this._days + r / 864e5), (n = this._months + Yw(t)), e)) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
    else
      switch (((t = this._days + Math.round(Zd(this._months))), e)) {
        case "week":
          return t / 7 + r / 6048e5;
        case "day":
          return t + r / 864e5;
        case "hour":
          return t * 24 + r / 36e5;
        case "minute":
          return t * 1440 + r / 6e4;
        case "second":
          return t * 86400 + r / 1e3;
        case "millisecond":
          return Math.floor(t * 864e5) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function qn(e) {
    return function () {
      return this.as(e);
    };
  }
  var Vw = qn("ms"),
    wN = qn("s"),
    SN = qn("m"),
    xN = qn("h"),
    EN = qn("d"),
    _N = qn("w"),
    bN = qn("M"),
    TN = qn("Q"),
    kN = qn("y"),
    CN = Vw;
  function PN() {
    return tn(this);
  }
  function ON(e) {
    return (e = $t(e)), this.isValid() ? this[e + "s"]() : NaN;
  }
  function ws(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var MN = ws("milliseconds"),
    NN = ws("seconds"),
    LN = ws("minutes"),
    RN = ws("hours"),
    jN = ws("days"),
    DN = ws("months"),
    IN = ws("years");
  function FN() {
    return Rt(this.days() / 7);
  }
  var kn = Math.round,
    Is = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  function AN(e, t, n, r, s) {
    return s.relativeTime(t || 1, !!n, e, r);
  }
  function zN(e, t, n, r) {
    var s = tn(e).abs(),
      i = kn(s.as("s")),
      a = kn(s.as("m")),
      o = kn(s.as("h")),
      l = kn(s.as("d")),
      u = kn(s.as("M")),
      c = kn(s.as("w")),
      d = kn(s.as("y")),
      p =
        (i <= n.ss && ["s", i]) ||
        (i < n.s && ["ss", i]) ||
        (a <= 1 && ["m"]) ||
        (a < n.m && ["mm", a]) ||
        (o <= 1 && ["h"]) ||
        (o < n.h && ["hh", o]) ||
        (l <= 1 && ["d"]) ||
        (l < n.d && ["dd", l]);
    return (
      n.w != null && (p = p || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
      (p = p ||
        (u <= 1 && ["M"]) ||
        (u < n.M && ["MM", u]) ||
        (d <= 1 && ["y"]) || ["yy", d]),
      (p[2] = t),
      (p[3] = +e > 0),
      (p[4] = r),
      AN.apply(null, p)
    );
  }
  function $N(e) {
    return e === void 0 ? kn : typeof e == "function" ? ((kn = e), !0) : !1;
  }
  function UN(e, t) {
    return Is[e] === void 0
      ? !1
      : t === void 0
        ? Is[e]
        : ((Is[e] = t), e === "s" && (Is.ss = t - 1), !0);
  }
  function HN(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n = !1,
      r = Is,
      s,
      i;
    return (
      typeof e == "object" && ((t = e), (e = !1)),
      typeof e == "boolean" && (n = e),
      typeof t == "object" &&
        ((r = Object.assign({}, Is, t)),
        t.s != null && t.ss == null && (r.ss = t.s - 1)),
      (s = this.localeData()),
      (i = zN(this, !n, r, s)),
      n && (i = s.pastFuture(+this, i)),
      s.postformat(i)
    );
  }
  var vc = Math.abs;
  function Es(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Su() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = vc(this._milliseconds) / 1e3,
      t = vc(this._days),
      n = vc(this._months),
      r,
      s,
      i,
      a,
      o = this.asSeconds(),
      l,
      u,
      c,
      d;
    return o
      ? ((r = Rt(e / 60)),
        (s = Rt(r / 60)),
        (e %= 60),
        (r %= 60),
        (i = Rt(n / 12)),
        (n %= 12),
        (a = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
        (l = o < 0 ? "-" : ""),
        (u = Es(this._months) !== Es(o) ? "-" : ""),
        (c = Es(this._days) !== Es(o) ? "-" : ""),
        (d = Es(this._milliseconds) !== Es(o) ? "-" : ""),
        l +
          "P" +
          (i ? u + i + "Y" : "") +
          (n ? u + n + "M" : "") +
          (t ? c + t + "D" : "") +
          (s || r || e ? "T" : "") +
          (s ? d + s + "H" : "") +
          (r ? d + r + "M" : "") +
          (e ? d + a + "S" : ""))
      : "P0D";
  }
  var ee = yu.prototype;
  ee.isValid = DO;
  ee.abs = pN;
  ee.add = mN;
  ee.subtract = gN;
  ee.as = yN;
  ee.asMilliseconds = Vw;
  ee.asSeconds = wN;
  ee.asMinutes = SN;
  ee.asHours = xN;
  ee.asDays = EN;
  ee.asWeeks = _N;
  ee.asMonths = bN;
  ee.asQuarters = TN;
  ee.asYears = kN;
  ee.valueOf = CN;
  ee._bubble = vN;
  ee.clone = PN;
  ee.get = ON;
  ee.milliseconds = MN;
  ee.seconds = NN;
  ee.minutes = LN;
  ee.hours = RN;
  ee.days = jN;
  ee.weeks = FN;
  ee.months = DN;
  ee.years = IN;
  ee.humanize = HN;
  ee.toISOString = Su;
  ee.toString = Su;
  ee.toJSON = Su;
  ee.locale = Rw;
  ee.localeData = Dw;
  ee.toIsoString = zt(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Su
  );
  ee.lang = jw;
  B("X", 0, 0, "unix");
  B("x", 0, 0, "valueOf");
  A("x", pu);
  A("X", uP);
  le("X", function (e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3);
  });
  le("x", function (e, t, n) {
    n._d = new Date(J(e));
  }); //! moment.js
  D.version = "2.30.1";
  BC(pe);
  D.fn = L;
  D.min = NO;
  D.max = LO;
  D.now = RO;
  D.utc = vn;
  D.unix = oN;
  D.months = uN;
  D.isDate = Ha;
  D.locale = Mr;
  D.invalid = cu;
  D.duration = tn;
  D.isMoment = Zt;
  D.weekdays = dN;
  D.parseZone = lN;
  D.localeData = Gn;
  D.isDuration = Qo;
  D.monthsShort = cN;
  D.weekdaysMin = hN;
  D.defineLocale = Th;
  D.updateLocale = lO;
  D.locales = uO;
  D.weekdaysShort = fN;
  D.normalizeUnits = $t;
  D.relativeTimeRounding = $N;
  D.relativeTimeThreshold = UN;
  D.calendarFormat = sM;
  D.prototype = L;
  D.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM",
  };
  const BN = (e) => {
      var u, c, d, p, S;
      const { data: t } = He({ queryKey: ["authUser"] }),
        n = Yn(),
        { mutate: r } = At({
          mutationFn: (g) => Pe.post("/conversations", g),
          onSuccess: (g) => {
            var v, w;
            n(
              `/messenger/${(w = (v = g == null ? void 0 : g.data) == null ? void 0 : v.data) == null ? void 0 : w._id}`
            );
          },
          onError: (g) => {
            de.error(g.response.data.message || "Something went wrong");
          },
        }),
        s =
          (u = e == null ? void 0 : e.listingDetails) == null
            ? void 0
            : u.data[0],
        i = () => {
          var g;
          t
            ? r({
                receiverId:
                  (g = s == null ? void 0 : s.owner) == null ? void 0 : g._id,
              })
            : n("/messenger");
        },
        a = (c = s == null ? void 0 : s.owner) == null ? void 0 : c.createdAt,
        o = D(a).toDate(),
        l = D(o).format("MMM Do YYYY");
      return y.jsxs("div", {
        className:
          " top_section w-content flex flex-col self-start justify-center gap-1 lg:gap-8 lg:h-[340px] ",
        children: [
          y.jsx("h1", {
            className: "font-bold text-3xl mb-10",
            children: "Listed By",
          }),
          y.jsxs("div", {
            className:
              "flex gap-4 justify-start items-center lg:flex-col xl:flex-row",
            children: [
              y.jsx("div", {
                className: "w-20 h-20 ",
                children: y.jsx("img", {
                  src: `${(d = s == null ? void 0 : s.owner) != null && d.avatar ? ((p = s == null ? void 0 : s.owner) == null ? void 0 : p.avatar) : "/public/avatar.png"}`,
                  className: "lg:w-20 lg:h-20 rounded-full object-cover",
                }),
              }),
              y.jsxs("div", {
                className: "",
                children: [
                  y.jsx("h1", {
                    className: "text-lg font-bold",
                    children:
                      (S = s == null ? void 0 : s.owner) == null
                        ? void 0
                        : S.fullName,
                  }),
                  y.jsxs("h2", {
                    className: "text-md font-normal ",
                    children: ["Member Since : ", l],
                  }),
                  y.jsxs("h2", {
                    className: "text-sm font-bold mt-2 flex items-center",
                    children: [
                      "See Profile",
                      y.jsx(Kb, {
                        onClick: () => {
                          var g;
                          n(
                            `/profile/${(g = s == null ? void 0 : s.owner) == null ? void 0 : g.username}`
                          );
                        },
                        className:
                          "ml-2 hover:text-blue-600 hover:cursor-pointer",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          y.jsx("div", {
            className: "flex justify-center",
            children: y.jsx("h1", {
              className:
                "btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600  xl:w-72  ",
              onClick: i,
              children: "Message",
            }),
          }),
        ],
      });
    },
    WN = (e) => {
      var a, o, l, u;
      const { data: t } = He({ queryKey: ["authUser"] }),
        n =
          (a = e == null ? void 0 : e.listingDetails) == null
            ? void 0
            : a.data[0],
        r = Yn(),
        { mutate: s } = At({
          mutationFn: (c) => Pe.post("/conversations", c),
          onSuccess: (c) => {
            var d, p;
            r(
              `/messenger/${(p = (d = c == null ? void 0 : c.data) == null ? void 0 : d.data) == null ? void 0 : p._id}`
            );
          },
          onError: (c) => {
            de.error(c.response.data.message || "Something went wrong");
          },
        }),
        i = () => {
          var c;
          t
            ? s({
                receiverId:
                  (c = n == null ? void 0 : n.owner) == null ? void 0 : c._id,
              })
            : r("/messenger");
        };
      return y.jsxs("div", {
        className: "flex justify-between  items-center  lg:w-[60%]",
        children: [
          y.jsxs("div", {
            className: "flex justify-start items-center gap-2",
            children: [
              y.jsx("div", {
                className: "avatar",
                children: y.jsx("div", {
                  className: "w-14 rounded-full",
                  children: y.jsx("img", {
                    src:
                      (o = n == null ? void 0 : n.owner) != null && o.avatar
                        ? (l = n == null ? void 0 : n.owner) == null
                          ? void 0
                          : l.avatar
                        : "/public/avatar.png",
                    alt: "Profile Image",
                  }),
                }),
              }),
              y.jsx("h1", {
                className: "text-md text-black",
                children:
                  (u = n == null ? void 0 : n.owner) == null
                    ? void 0
                    : u.fullName,
              }),
            ],
          }),
          y.jsx("div", {
            className: "",
            children: y.jsx("h1", {
              className: "btn hover:bg-blue-600 hover:text-white",
              onClick: i,
              children: "Message",
            }),
          }),
        ],
      });
    },
    YN = (e) => {
      var d, p, S, g, v, w, m, f;
      const t =
          (d = e == null ? void 0 : e.listingDetails) == null
            ? void 0
            : d.data[0],
        { data: n } = He({ queryKey: ["authUser"] }),
        r = gn(),
        { mutate: s } = At({
          mutationFn: (h) => Pe.post(`/wishlist/${h}`),
          onSuccess: () => {
            r.invalidateQueries({ queryKey: ["ListingDetails"] }),
              de.success("Added to wishlist successfully");
          },
          onError: (h) => {
            de.error(h.response.data.message || "Something went wrong");
          },
        }),
        i = (h) => {
          var E, x;
          n &&
            ((E = n == null ? void 0 : n.data) == null ? void 0 : E._id) !==
              ((x = t == null ? void 0 : t.owner) == null ? void 0 : x._id) &&
            s(h);
        },
        { mutate: a } = At({
          mutationFn: (h) => Pe.delete(`/wishlist/${h}`),
          onSuccess: () => {
            r.invalidateQueries({ queryKey: ["ListingDetails"] }),
              de.success("Deleted from wishlist successfully");
          },
          onError: (h) => {
            de.error(h.response.data.message || "Something went wrong");
          },
        }),
        o = (h) => {
          var E, x;
          n &&
            ((E = n == null ? void 0 : n.data) == null ? void 0 : E._id) !==
              ((x = t == null ? void 0 : t.owner) == null ? void 0 : x._id) &&
            a(h);
        },
        l = t == null ? void 0 : t.createdAt,
        u = D(l).toDate(),
        c = D(u).fromNow();
      return y.jsxs("div", {
        className:
          "flex flex-col border-[1px] border-gray-100 rounded-lg p-4  ",
        children: [
          y.jsxs("div", {
            className: "flex items-center justify-between mb-6",
            children: [
              y.jsx("h1", {
                className: "text-2xl lg:text-4xl font-bold text-blue-600",
                children: new Intl.NumberFormat("en-PK", {
                  style: "currency",
                  currency: "PKR",
                }).format(t == null ? void 0 : t.price),
              }),
              y.jsxs("div", {
                className: "flex items-center gap-10",
                children: [
                  y.jsx("h1", {
                    className: "text-gray-600 text-xs font-semibold",
                    children: c,
                  }),
                  y.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      y.jsx(Jb, {
                        onClick: () => {
                          t != null && t.isLiked
                            ? o(t == null ? void 0 : t._id)
                            : i(t == null ? void 0 : t._id);
                        },
                        className: `${t != null && t.isLiked ? "text-red-600" : "text-base-400"} cursor-pointer hover:`,
                      }),
                      y.jsx("h1", {
                        className: "text-gray-600 text-xs font-semibold",
                        children: t == null ? void 0 : t.likesCount,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          y.jsx("h1", {
            className: "text-lg lg:text-2xl font-semibold mb-2 ",
            children: t == null ? void 0 : t.title,
          }),
          y.jsxs("p", {
            className: "flex gap-2",
            children: [
              y.jsx(eT, { className: "text-blue-600" }),
              ((p = t == null ? void 0 : t.location) == null
                ? void 0
                : p.city.charAt(0).toUpperCase()) +
                ((g =
                  (S = t == null ? void 0 : t.location) == null
                    ? void 0
                    : S.city) == null
                  ? void 0
                  : g.slice(1)),
              ",",
              ((w =
                (v = t == null ? void 0 : t.location) == null
                  ? void 0
                  : v.country) == null
                ? void 0
                : w.charAt(0).toUpperCase()) +
                ((f =
                  (m = t == null ? void 0 : t.location) == null
                    ? void 0
                    : m.country) == null
                  ? void 0
                  : f.slice(1)),
            ],
          }),
        ],
      });
    },
    VN = (e) => {
      var n, r;
      const t =
        (n = e == null ? void 0 : e.listingDetails) == null
          ? void 0
          : n.data[0];
      return y.jsxs("div", {
        children: [
          y.jsxs("div", {
            className:
              "flex flex-col border-[1px] border-gray-100 rounded-lg p-4  mb-10",
            children: [
              y.jsx("h1", {
                className: "text-2xl lg:text-2xl font-bold mb-6",
                children: "Details",
              }),
              y.jsxs("h1", {
                className: "text-xs lg:text-sm font-bold  mb-6",
                children: ["Total Rooms ", t == null ? void 0 : t.rooms],
              }),
              y.jsx("div", {
                className: "flex gap-2 font-semibold",
                children:
                  (r = t == null ? void 0 : t.amenities) == null
                    ? void 0
                    : r.map((s, i) =>
                        y.jsx(
                          "span",
                          {
                            className:
                              "w-fit h-fit bg-blue-100 text-sm lg:text-sm mb-2 p-2 rounded-md text-black",
                            children: s,
                          },
                          i
                        )
                      ),
              }),
            ],
          }),
          y.jsxs("div", {
            className:
              "flex flex-col border-[1px] border-gray-100 rounded-lg p-4 ",
            children: [
              y.jsx("h1", {
                className: "text-2xl lg:text-2xl font-bold mb-6",
                children: "Description",
              }),
              y.jsx("h1", {
                className: "text-sm lg:text-sm mb-2 ",
                children: t == null ? void 0 : t.description,
              }),
              (t == null ? void 0 : t.highlight) && y.jsx("br", {}),
              y.jsx("h1", {
                className: "text-lg lg:text-xl font-semibold mb-6",
                children: t == null ? void 0 : t.highlight,
              }),
              y.jsx("h1", {
                className: "text-sm lg:text-sm mb-2 ",
                children: t == null ? void 0 : t.highlightDesc,
              }),
            ],
          }),
        ],
      });
    },
    GN = (e) => {
      var v, w, m, f, h, E;
      const { data: t } = He({ queryKey: ["authUser"] }),
        [n, r] = T.useState(""),
        [s, i] = T.useState(!1),
        a = gn(),
        o = Si();
      o;
      const l =
          (w =
            (v = e == null ? void 0 : e.listingDetails) == null
              ? void 0
              : v.data[0]) == null
            ? void 0
            : w.comments,
        u = (x) => {
          const O = D(x).toDate();
          return D(O).fromNow();
        },
        { mutate: c } = At({
          mutationFn: (x) =>
            Pe.post(`/comments/${o == null ? void 0 : o.id}`, x),
          onSuccess: () => {
            i(!0), de.success("Comment Added successfully");
          },
          onError: (x) => {
            de.error(x.response.data.message || "Something went wrong");
          },
        }),
        { mutate: d } = At({
          mutationFn: (x) => Pe.delete(`/comments/${x}`),
          onSuccess: () => {
            i(!0), de.success("Comment Deleted successfully");
          },
          onError: (x) => {
            de.error(x.response.data.message || "Something went wrong");
          },
        }),
        p = (x) => {
          x.preventDefault(), c({ content: n });
        },
        S = (x) => {
          (x, "deleting id"), d(x);
        };
      s &&
        (r(""),
        a.invalidateQueries({ queryKey: ["ListingDetails"] }),
        a.invalidateQueries({ queryKey: ["allComments"] }),
        i(!1));
      const { data: g } = He({
        queryKey: ["allComments"],
        queryFn: async () => {
          try {
            return (await Pe.get(`/comments/${o == null ? void 0 : o.id}`))
              .data;
          } catch (x) {
            if (x.response && x.response.status === 401) return null;
            de.error(x.response.data.message || "Something went wrong");
          }
        },
        refetchOnWindowFocus: !1,
      });
      return y.jsxs("div", {
        className: "",
        children: [
          y.jsx("section", {
            className:
              "bg-white   antialiased w-[100%] flex flex-col justify-center items-start",
            children: y.jsxs("div", {
              className: " mx-auto  w-[100%]",
              children: [
                y.jsx("div", {
                  className: "flex justify-between items-center mb-4",
                  children: y.jsxs("h2", {
                    className: "text-lg lg:text-2xl font-bold text-gray-900 ",
                    children: [
                      "Comments (",
                      (m = g == null ? void 0 : g.data) == null
                        ? void 0
                        : m.length,
                      ")",
                    ],
                  }),
                }),
                t &&
                  y.jsxs("form", {
                    className: "mb-6 md:w-[parent]",
                    children: [
                      y.jsxs("div", {
                        className:
                          "py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ",
                        children: [
                          y.jsx("label", {
                            htmlFor: "comment",
                            className: "sr-only",
                            children: "Your comment",
                          }),
                          y.jsx("textarea", {
                            id: "comment",
                            rows: 6,
                            className:
                              "px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none ",
                            placeholder: "Write a comment...",
                            required: "",
                            value: n,
                            onChange: (x) => r(x.target.value),
                          }),
                        ],
                      }),
                      y.jsx("button", {
                        type: "submit",
                        className:
                          "inline-flex items-center py-2.5 px-4 text-xs font-medium text-center btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600",
                        onClick: p,
                        children: "Post comment",
                      }),
                    ],
                  }),
                y.jsx(y.Fragment, {
                  children:
                    l == null
                      ? void 0
                      : l.map((x, b) => {
                          var O, k, P, M, R;
                          return y.jsx(
                            "div",
                            {
                              className: "md:w-[parent]",
                              children: y.jsxs("article", {
                                className:
                                  "p-6 text-base bg-white rounded-lg  ",
                                children: [
                                  y.jsxs("footer", {
                                    className:
                                      "flex justify-between items-center mb-2",
                                    children: [
                                      y.jsxs("div", {
                                        className: "flex items-center",
                                        children: [
                                          y.jsxs("p", {
                                            className:
                                              "inline-flex  items-center mr-3 text-sm text-gray-900  font-semibold",
                                            children: [
                                              y.jsx("img", {
                                                src:
                                                  (O =
                                                    x == null
                                                      ? void 0
                                                      : x.owner) != null &&
                                                  O.avatar
                                                    ? (k =
                                                        x == null
                                                          ? void 0
                                                          : x.owner) == null
                                                      ? void 0
                                                      : k.avatar
                                                    : "/public/avatar.png",
                                                alt: "Profile Image",
                                                className:
                                                  "mr-2 w-10 h-10 rounded-full object-cover",
                                              }),
                                              (P =
                                                x == null ? void 0 : x.owner) ==
                                              null
                                                ? void 0
                                                : P.fullName,
                                            ],
                                          }),
                                          y.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: y.jsx("time", {
                                              dateTime: u(
                                                x == null ? void 0 : x.createdAt
                                              ),
                                              title: u(
                                                x == null ? void 0 : x.createdAt
                                              ),
                                              children: u(
                                                x == null ? void 0 : x.createdAt
                                              ),
                                            }),
                                          }),
                                        ],
                                      }),
                                      ((M = t == null ? void 0 : t.data) == null
                                        ? void 0
                                        : M._id) ==
                                        ((R = x == null ? void 0 : x.owner) ==
                                        null
                                          ? void 0
                                          : R._id) &&
                                        y.jsxs("div", {
                                          className:
                                            "dropdown dropdown-top dropdown-end",
                                          children: [
                                            y.jsx("div", {
                                              tabIndex: 0,
                                              role: "button",
                                              className:
                                                "btn m-1 bg-transparent border-none hover:bg-blue-600 hover:text-white",
                                              children: y.jsx(Cm, {}),
                                            }),
                                            y.jsx("ul", {
                                              tabIndex: 0,
                                              className:
                                                "dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow",
                                              children: y.jsx("li", {
                                                onClick: () => {
                                                  S(x == null ? void 0 : x._id);
                                                },
                                                className:
                                                  "hover:bg-blue-600 hover:text-white rounded-md",
                                                children: y.jsx("a", {
                                                  children: "Delete Comment",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  y.jsx("p", {
                                    className: "text-gray-500  break-words",
                                    children: x == null ? void 0 : x.content,
                                  }),
                                ],
                              }),
                            },
                            b
                          );
                        }),
                }),
              ],
            }),
          }),
          ((f = g == null ? void 0 : g.data) == null ? void 0 : f.length) > 0 &&
            y.jsxs("div", {
              className: "flex items-center justify-center ",
              children: [
                ((h = g == null ? void 0 : g.data) == null
                  ? void 0
                  : h.length) > 4 &&
                  y.jsx("a", {
                    href: "#my_modal_8",
                    className:
                      "btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 ",
                    children: "More Comments",
                  }),
                y.jsx("div", {
                  className: "modal  max-w-full backdrop-blur-sm  ",
                  role: "dialog",
                  id: "my_modal_8",
                  children: y.jsxs("div", {
                    className: "modal-box  max-w-full ",
                    children: [
                      y.jsx("div", {
                        className: "modal-action sticky top-0 ",
                        children: y.jsx("a", {
                          href: "#",
                          className:
                            "btn ptn-primary bg-blue-600 text-white mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600",
                          children: "Close",
                        }),
                      }),
                      (E = g == null ? void 0 : g.data) == null
                        ? void 0
                        : E.map((x, b) => {
                            var O, k, P, M, R;
                            return y.jsx(
                              "div",
                              {
                                className: "md:w-[parent] p-5",
                                children: y.jsxs("article", {
                                  className:
                                    "p-6 text-base bg-white rounded-lg   ",
                                  children: [
                                    y.jsxs("footer", {
                                      className:
                                        "flex justify-between items-center mb-2",
                                      children: [
                                        y.jsxs("div", {
                                          className: "flex items-center",
                                          children: [
                                            y.jsxs("p", {
                                              className:
                                                "inline-flex  items-center mr-3 text-sm text-gray-900  font-semibold",
                                              children: [
                                                y.jsx("img", {
                                                  src:
                                                    (O =
                                                      x == null
                                                        ? void 0
                                                        : x.owner) != null &&
                                                    O.avatar
                                                      ? (k =
                                                          x == null
                                                            ? void 0
                                                            : x.owner) == null
                                                        ? void 0
                                                        : k.avatar
                                                      : "/public/avatar.png",
                                                  alt: "Profile Image",
                                                  className:
                                                    "mr-2 w-10 h-10 rounded-full object-cover",
                                                }),
                                                (P =
                                                  x == null
                                                    ? void 0
                                                    : x.owner) == null
                                                  ? void 0
                                                  : P.fullName,
                                              ],
                                            }),
                                            y.jsx("p", {
                                              className:
                                                "text-sm text-gray-600 ",
                                              children: y.jsx("time", {
                                                dateTime: u(
                                                  x == null
                                                    ? void 0
                                                    : x.createdAt
                                                ),
                                                title: u(
                                                  x == null
                                                    ? void 0
                                                    : x.createdAt
                                                ),
                                                children: u(
                                                  x == null
                                                    ? void 0
                                                    : x.createdAt
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                        ((M = t == null ? void 0 : t.data) ==
                                        null
                                          ? void 0
                                          : M._id) ==
                                          ((R = x == null ? void 0 : x.owner) ==
                                          null
                                            ? void 0
                                            : R._id) &&
                                          y.jsxs("div", {
                                            className:
                                              "dropdown dropdown-top dropdown-end mx-20 ",
                                            children: [
                                              y.jsx("div", {
                                                tabIndex: 0,
                                                role: "button",
                                                className:
                                                  "btn bg-transparent border-none hover:bg-blue-600 hover:text-white ",
                                                children: y.jsx(Cm, {}),
                                              }),
                                              y.jsx("ul", {
                                                tabIndex: 0,
                                                className:
                                                  "dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow",
                                                children: y.jsx("li", {
                                                  onClick: () => {
                                                    S(
                                                      x == null ? void 0 : x._id
                                                    );
                                                  },
                                                  className:
                                                    "hover:bg-blue-600 hover:text-white rounded-md",
                                                  children: y.jsx("a", {
                                                    children: "Delete Comment",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    y.jsx("p", {
                                      className: "text-gray-500  break-words",
                                      children: x == null ? void 0 : x.content,
                                    }),
                                  ],
                                }),
                              },
                              b
                            );
                          }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      });
    },
    qN = () => {
      const { id: e } = Si(),
        { data: t, isLoading: n } = He({
          queryKey: ["ListingDetails"],
          queryFn: async () => {
            try {
              return (await Pe.get(`/listings/single/${e}`)).data;
            } catch (r) {
              if (r.response && r.response.status === 401) return null;
              de.error(r.response.data.message || "Something went wrong");
            }
          },
          refetchOnWindowFocus: !1,
        });
      return (
        n ? "loading" : t.data[0].images,
        y.jsxs("div", {
          className: " py-10 lg:py-20 px-5 lg:px-32 ",
          children: [
            y.jsxs("div", {
              className:
                " flex  flex-row  w-[100%]  lg:justify-center items-center ",
              children: [
                y.jsx("div", {
                  className: "slider_wraper w-full lg:w-[60%] mr-10 ",
                  children: y.jsx(HC, { listingDetails: t }),
                }),
                y.jsx("div", {
                  className:
                    "hidden lg:block listing_details_wrapper px-10 py-10 lg:w-[40%] outline outline-1 outline-base-300",
                  children: y.jsx(BN, { listingDetails: t }),
                }),
              ],
            }),
            y.jsx("div", {
              className: " lg:hidden below_section1 pt-10  lg:px-16",
              children: y.jsx(WN, { listingDetails: t }),
            }),
            y.jsx("div", {
              className: "below_section2 pt-10 lg:px-16   ",
              children: y.jsx(YN, { listingDetails: t }),
            }),
            y.jsx("div", {
              className: "below_section3 pt-10 lg:px-16   ",
              children: y.jsx(VN, { listingDetails: t }),
            }),
            y.jsx("div", {
              className: "below_section3 pt-10 lg:px-16 ",
              children: y.jsx(GN, { listingDetails: t }),
            }),
          ],
        })
      );
    };
  var ke = {},
    jh = {},
    Va = {},
    Ga = {},
    Gw = "Expected a function",
    Hm = NaN,
    QN = "[object Symbol]",
    KN = /^\s+|\s+$/g,
    XN = /^[-+]0x[0-9a-f]+$/i,
    JN = /^0b[01]+$/i,
    ZN = /^0o[0-7]+$/i,
    e2 = parseInt,
    t2 = typeof eo == "object" && eo && eo.Object === Object && eo,
    n2 = typeof self == "object" && self && self.Object === Object && self,
    r2 = t2 || n2 || Function("return this")(),
    s2 = Object.prototype,
    i2 = s2.toString,
    a2 = Math.max,
    o2 = Math.min,
    yc = function () {
      return r2.Date.now();
    };
  function l2(e, t, n) {
    var r,
      s,
      i,
      a,
      o,
      l,
      u = 0,
      c = !1,
      d = !1,
      p = !0;
    if (typeof e != "function") throw new TypeError(Gw);
    (t = Bm(t) || 0),
      $l(n) &&
        ((c = !!n.leading),
        (d = "maxWait" in n),
        (i = d ? a2(Bm(n.maxWait) || 0, t) : i),
        (p = "trailing" in n ? !!n.trailing : p));
    function S(b) {
      var O = r,
        k = s;
      return (r = s = void 0), (u = b), (a = e.apply(k, O)), a;
    }
    function g(b) {
      return (u = b), (o = setTimeout(m, t)), c ? S(b) : a;
    }
    function v(b) {
      var O = b - l,
        k = b - u,
        P = t - O;
      return d ? o2(P, i - k) : P;
    }
    function w(b) {
      var O = b - l,
        k = b - u;
      return l === void 0 || O >= t || O < 0 || (d && k >= i);
    }
    function m() {
      var b = yc();
      if (w(b)) return f(b);
      o = setTimeout(m, v(b));
    }
    function f(b) {
      return (o = void 0), p && r ? S(b) : ((r = s = void 0), a);
    }
    function h() {
      o !== void 0 && clearTimeout(o), (u = 0), (r = l = s = o = void 0);
    }
    function E() {
      return o === void 0 ? a : f(yc());
    }
    function x() {
      var b = yc(),
        O = w(b);
      if (((r = arguments), (s = this), (l = b), O)) {
        if (o === void 0) return g(l);
        if (d) return (o = setTimeout(m, t)), S(l);
      }
      return o === void 0 && (o = setTimeout(m, t)), a;
    }
    return (x.cancel = h), (x.flush = E), x;
  }
  function u2(e, t, n) {
    var r = !0,
      s = !0;
    if (typeof e != "function") throw new TypeError(Gw);
    return (
      $l(n) &&
        ((r = "leading" in n ? !!n.leading : r),
        (s = "trailing" in n ? !!n.trailing : s)),
      l2(e, t, { leading: r, maxWait: t, trailing: s })
    );
  }
  function $l(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function c2(e) {
    return !!e && typeof e == "object";
  }
  function d2(e) {
    return typeof e == "symbol" || (c2(e) && i2.call(e) == QN);
  }
  function Bm(e) {
    if (typeof e == "number") return e;
    if (d2(e)) return Hm;
    if ($l(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = $l(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(KN, "");
    var n = JN.test(e);
    return n || ZN.test(e) ? e2(e.slice(2), n ? 2 : 8) : XN.test(e) ? Hm : +e;
  }
  var f2 = u2,
    qa = {};
  Object.defineProperty(qa, "__esModule", { value: !0 });
  qa.addPassiveEventListener = function (t, n, r) {
    var s = r.name;
    s || ((s = n), console.warn("Listener must be a named function.")),
      Xo.has(n) || Xo.set(n, new Set());
    var i = Xo.get(n);
    if (!i.has(s)) {
      var a = (function () {
        var o = !1;
        try {
          var l = Object.defineProperty({}, "passive", {
            get: function () {
              o = !0;
            },
          });
          window.addEventListener("test", null, l);
        } catch {}
        return o;
      })();
      t.addEventListener(n, r, a ? { passive: !0 } : !1), i.add(s);
    }
  };
  qa.removePassiveEventListener = function (t, n, r) {
    t.removeEventListener(n, r), Xo.get(n).delete(r.name || n);
  };
  var Xo = new Map();
  Object.defineProperty(Ga, "__esModule", { value: !0 });
  var h2 = f2,
    p2 = g2(h2),
    m2 = qa;
  function g2(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var v2 = function (t) {
      var n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
      return (0, p2.default)(t, n);
    },
    Se = {
      spyCallbacks: [],
      spySetState: [],
      scrollSpyContainers: [],
      mount: function (t, n) {
        if (t) {
          var r = v2(function (s) {
            Se.scrollHandler(t);
          }, n);
          Se.scrollSpyContainers.push(t),
            (0, m2.addPassiveEventListener)(t, "scroll", r);
        }
      },
      isMounted: function (t) {
        return Se.scrollSpyContainers.indexOf(t) !== -1;
      },
      currentPositionX: function (t) {
        if (t === document) {
          var n = window.pageYOffset !== void 0,
            r = (document.compatMode || "") === "CSS1Compat";
          return n
            ? window.pageXOffset
            : r
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
        } else return t.scrollLeft;
      },
      currentPositionY: function (t) {
        if (t === document) {
          var n = window.pageXOffset !== void 0,
            r = (document.compatMode || "") === "CSS1Compat";
          return n
            ? window.pageYOffset
            : r
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
        } else return t.scrollTop;
      },
      scrollHandler: function (t) {
        var n =
          Se.scrollSpyContainers[Se.scrollSpyContainers.indexOf(t)]
            .spyCallbacks || [];
        n.forEach(function (r) {
          return r(Se.currentPositionX(t), Se.currentPositionY(t));
        });
      },
      addStateHandler: function (t) {
        Se.spySetState.push(t);
      },
      addSpyHandler: function (t, n) {
        var r = Se.scrollSpyContainers[Se.scrollSpyContainers.indexOf(n)];
        r.spyCallbacks || (r.spyCallbacks = []),
          r.spyCallbacks.push(t),
          t(Se.currentPositionX(n), Se.currentPositionY(n));
      },
      updateStates: function () {
        Se.spySetState.forEach(function (t) {
          return t();
        });
      },
      unmount: function (t, n) {
        Se.scrollSpyContainers.forEach(function (r) {
          return (
            r.spyCallbacks &&
            r.spyCallbacks.length &&
            r.spyCallbacks.indexOf(n) > -1 &&
            r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
          );
        }),
          Se.spySetState &&
            Se.spySetState.length &&
            Se.spySetState.indexOf(t) > -1 &&
            Se.spySetState.splice(Se.spySetState.indexOf(t), 1),
          document.removeEventListener("scroll", Se.scrollHandler);
      },
      update: function () {
        return Se.scrollSpyContainers.forEach(function (t) {
          return Se.scrollHandler(t);
        });
      },
    };
  Ga.default = Se;
  var Ci = {},
    Qa = {};
  Object.defineProperty(Qa, "__esModule", { value: !0 });
  var y2 = function (t, n) {
      var r = t.indexOf("#") === 0 ? t.substring(1) : t,
        s = r ? "#" + r : "",
        i = window && window.location,
        a = s ? i.pathname + i.search + s : i.pathname + i.search;
      n
        ? history.pushState(history.state, "", a)
        : history.replaceState(history.state, "", a);
    },
    w2 = function () {
      return window.location.hash.replace(/^#/, "");
    },
    S2 = function (t) {
      return function (n) {
        return t.contains
          ? t != n && t.contains(n)
          : !!(t.compareDocumentPosition(n) & 16);
      };
    },
    x2 = function (t) {
      return getComputedStyle(t).position !== "static";
    },
    wc = function (t, n) {
      for (var r = t.offsetTop, s = t.offsetParent; s && !n(s); )
        (r += s.offsetTop), (s = s.offsetParent);
      return { offsetTop: r, offsetParent: s };
    },
    E2 = function (t, n, r) {
      if (r)
        return t === document
          ? n.getBoundingClientRect().left +
              (window.scrollX || window.pageXOffset)
          : getComputedStyle(t).position !== "static"
            ? n.offsetLeft
            : n.offsetLeft - t.offsetLeft;
      if (t === document)
        return (
          n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
        );
      if (x2(t)) {
        if (n.offsetParent !== t) {
          var s = function (c) {
              return c === t || c === document;
            },
            i = wc(n, s),
            a = i.offsetTop,
            o = i.offsetParent;
          if (o !== t)
            throw new Error(
              "Seems containerElement is not an ancestor of the Element"
            );
          return a;
        }
        return n.offsetTop;
      }
      if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
      var l = function (c) {
        return c === document;
      };
      return wc(n, l).offsetTop - wc(t, l).offsetTop;
    };
  Qa.default = {
    updateHash: y2,
    getHash: w2,
    filterElementInContainer: S2,
    scrollOffset: E2,
  };
  var xu = {},
    Dh = {};
  Object.defineProperty(Dh, "__esModule", { value: !0 });
  Dh.default = {
    defaultEasing: function (t) {
      return t < 0.5
        ? Math.pow(t * 2, 2) / 2
        : 1 - Math.pow((1 - t) * 2, 2) / 2;
    },
    linear: function (t) {
      return t;
    },
    easeInQuad: function (t) {
      return t * t;
    },
    easeOutQuad: function (t) {
      return t * (2 - t);
    },
    easeInOutQuad: function (t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function (t) {
      return t * t * t;
    },
    easeOutCubic: function (t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function (t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function (t) {
      return t * t * t * t;
    },
    easeOutQuart: function (t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function (t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function (t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function (t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function (t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    },
  };
  var Ih = {};
  Object.defineProperty(Ih, "__esModule", { value: !0 });
  var _2 = qa,
    b2 = ["mousedown", "mousewheel", "touchmove", "keydown"];
  Ih.default = {
    subscribe: function (t) {
      return (
        typeof document < "u" &&
        b2.forEach(function (n) {
          return (0, _2.addPassiveEventListener)(document, n, t);
        })
      );
    },
  };
  var Ka = {};
  Object.defineProperty(Ka, "__esModule", { value: !0 });
  var ef = {
    registered: {},
    scrollEvent: {
      register: function (t, n) {
        ef.registered[t] = n;
      },
      remove: function (t) {
        ef.registered[t] = null;
      },
    },
  };
  Ka.default = ef;
  Object.defineProperty(xu, "__esModule", { value: !0 });
  var T2 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    k2 = Qa;
  Eu(k2);
  var C2 = Dh,
    Wm = Eu(C2),
    P2 = Ih,
    O2 = Eu(P2),
    M2 = Ka,
    cn = Eu(M2);
  function Eu(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var qw = function (t) {
      return Wm.default[t.smooth] || Wm.default.defaultEasing;
    },
    N2 = function (t) {
      return typeof t == "function"
        ? t
        : function () {
            return t;
          };
    },
    L2 = function () {
      if (typeof window < "u")
        return (
          window.requestAnimationFrame || window.webkitRequestAnimationFrame
        );
    },
    tf = (function () {
      return (
        L2() ||
        function (e, t, n) {
          window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
        }
      );
    })(),
    Qw = function () {
      return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: !1,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null,
      };
    },
    Kw = function (t) {
      var n = t.data.containerElement;
      if (n && n !== document && n !== document.body) return n.scrollLeft;
      var r = window.pageXOffset !== void 0,
        s = (document.compatMode || "") === "CSS1Compat";
      return r
        ? window.pageXOffset
        : s
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
    },
    Xw = function (t) {
      var n = t.data.containerElement;
      if (n && n !== document && n !== document.body) return n.scrollTop;
      var r = window.pageXOffset !== void 0,
        s = (document.compatMode || "") === "CSS1Compat";
      return r
        ? window.pageYOffset
        : s
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
    },
    R2 = function (t) {
      var n = t.data.containerElement;
      if (n && n !== document && n !== document.body)
        return n.scrollWidth - n.offsetWidth;
      var r = document.body,
        s = document.documentElement;
      return Math.max(
        r.scrollWidth,
        r.offsetWidth,
        s.clientWidth,
        s.scrollWidth,
        s.offsetWidth
      );
    },
    j2 = function (t) {
      var n = t.data.containerElement;
      if (n && n !== document && n !== document.body)
        return n.scrollHeight - n.offsetHeight;
      var r = document.body,
        s = document.documentElement;
      return Math.max(
        r.scrollHeight,
        r.offsetHeight,
        s.clientHeight,
        s.scrollHeight,
        s.offsetHeight
      );
    },
    D2 = function e(t, n, r) {
      var s = n.data;
      if (!n.ignoreCancelEvents && s.cancel) {
        cn.default.registered.end &&
          cn.default.registered.end(s.to, s.target, s.currentPositionY);
        return;
      }
      if (
        ((s.delta = Math.round(s.targetPosition - s.startPosition)),
        s.start === null && (s.start = r),
        (s.progress = r - s.start),
        (s.percent = s.progress >= s.duration ? 1 : t(s.progress / s.duration)),
        (s.currentPosition = s.startPosition + Math.ceil(s.delta * s.percent)),
        s.containerElement &&
        s.containerElement !== document &&
        s.containerElement !== document.body
          ? n.horizontal
            ? (s.containerElement.scrollLeft = s.currentPosition)
            : (s.containerElement.scrollTop = s.currentPosition)
          : n.horizontal
            ? window.scrollTo(s.currentPosition, 0)
            : window.scrollTo(0, s.currentPosition),
        s.percent < 1)
      ) {
        var i = e.bind(null, t, n);
        tf.call(window, i);
        return;
      }
      cn.default.registered.end &&
        cn.default.registered.end(s.to, s.target, s.currentPosition);
    },
    Fh = function (t) {
      t.data.containerElement = t
        ? t.containerId
          ? document.getElementById(t.containerId)
          : t.container && t.container.nodeType
            ? t.container
            : document
        : null;
    },
    Xa = function (t, n, r, s) {
      (n.data = n.data || Qw()), window.clearTimeout(n.data.delayTimeout);
      var i = function () {
        n.data.cancel = !0;
      };
      if (
        (O2.default.subscribe(i),
        Fh(n),
        (n.data.start = null),
        (n.data.cancel = !1),
        (n.data.startPosition = n.horizontal ? Kw(n) : Xw(n)),
        (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
        n.data.startPosition === n.data.targetPosition)
      ) {
        cn.default.registered.end &&
          cn.default.registered.end(
            n.data.to,
            n.data.target,
            n.data.currentPosition
          );
        return;
      }
      (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
        (n.data.duration = N2(n.duration)(n.data.delta)),
        (n.data.duration = isNaN(parseFloat(n.data.duration))
          ? 1e3
          : parseFloat(n.data.duration)),
        (n.data.to = r),
        (n.data.target = s);
      var a = qw(n),
        o = D2.bind(null, a, n);
      if (n && n.delay > 0) {
        n.data.delayTimeout = window.setTimeout(function () {
          cn.default.registered.begin &&
            cn.default.registered.begin(n.data.to, n.data.target),
            tf.call(window, o);
        }, n.delay);
        return;
      }
      cn.default.registered.begin &&
        cn.default.registered.begin(n.data.to, n.data.target),
        tf.call(window, o);
    },
    _u = function (t) {
      return (t = T2({}, t)), (t.data = t.data || Qw()), (t.absolute = !0), t;
    },
    I2 = function (t) {
      Xa(0, _u(t));
    },
    F2 = function (t, n) {
      Xa(t, _u(n));
    },
    A2 = function (t) {
      (t = _u(t)), Fh(t), Xa(t.horizontal ? R2(t) : j2(t), t);
    },
    z2 = function (t, n) {
      (n = _u(n)), Fh(n);
      var r = n.horizontal ? Kw(n) : Xw(n);
      Xa(t + r, n);
    };
  xu.default = {
    animateTopScroll: Xa,
    getAnimationType: qw,
    scrollToTop: I2,
    scrollToBottom: A2,
    scrollTo: F2,
    scrollMore: z2,
  };
  Object.defineProperty(Ci, "__esModule", { value: !0 });
  var $2 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    U2 = Qa,
    H2 = Ah(U2),
    B2 = xu,
    W2 = Ah(B2),
    Y2 = Ka,
    bo = Ah(Y2);
  function Ah(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var To = {},
    Ym = void 0;
  Ci.default = {
    unmount: function () {
      To = {};
    },
    register: function (t, n) {
      To[t] = n;
    },
    unregister: function (t) {
      delete To[t];
    },
    get: function (t) {
      return (
        To[t] ||
        document.getElementById(t) ||
        document.getElementsByName(t)[0] ||
        document.getElementsByClassName(t)[0]
      );
    },
    setActiveLink: function (t) {
      return (Ym = t);
    },
    getActiveLink: function () {
      return Ym;
    },
    scrollTo: function (t, n) {
      var r = this.get(t);
      if (!r) {
        console.warn("target Element not found");
        return;
      }
      n = $2({}, n, { absolute: !1 });
      var s = n.containerId,
        i = n.container,
        a = void 0;
      s
        ? (a = document.getElementById(s))
        : i && i.nodeType
          ? (a = i)
          : (a = document),
        (n.absolute = !0);
      var o = n.horizontal,
        l = H2.default.scrollOffset(a, r, o) + (n.offset || 0);
      if (!n.smooth) {
        bo.default.registered.begin && bo.default.registered.begin(t, r),
          a === document
            ? n.horizontal
              ? window.scrollTo(l, 0)
              : window.scrollTo(0, l)
            : (a.scrollTop = l),
          bo.default.registered.end && bo.default.registered.end(t, r);
        return;
      }
      W2.default.animateTopScroll(l, n, t, r);
    },
  };
  var bu = {};
  Object.defineProperty(bu, "__esModule", { value: !0 });
  var V2 = Qa,
    Sc = G2(V2);
  function G2(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var q2 = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function (t) {
      (this.scroller = t),
        (this.handleHashChange = this.handleHashChange.bind(this)),
        window.addEventListener("hashchange", this.handleHashChange),
        this.initStateFromHash(),
        (this.mountFlag = !0);
    },
    mapContainer: function (t, n) {
      this.containers[t] = n;
    },
    isMounted: function () {
      return this.mountFlag;
    },
    isInitialized: function () {
      return this.initialized;
    },
    initStateFromHash: function () {
      var t = this,
        n = this.getHash();
      n
        ? window.setTimeout(function () {
            t.scrollTo(n, !0), (t.initialized = !0);
          }, 10)
        : (this.initialized = !0);
    },
    scrollTo: function (t, n) {
      var r = this.scroller,
        s = r.get(t);
      if (s && (n || t !== r.getActiveLink())) {
        var i = this.containers[t] || document;
        r.scrollTo(t, { container: i });
      }
    },
    getHash: function () {
      return Sc.default.getHash();
    },
    changeHash: function (t, n) {
      this.isInitialized() &&
        Sc.default.getHash() !== t &&
        Sc.default.updateHash(t, n);
    },
    handleHashChange: function () {
      this.scrollTo(this.getHash());
    },
    unmount: function () {
      (this.scroller = null),
        (this.containers = null),
        window.removeEventListener("hashchange", this.handleHashChange);
    },
  };
  bu.default = q2;
  Object.defineProperty(Va, "__esModule", { value: !0 });
  var ko =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    Q2 = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var s = n[r];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    K2 = T,
    Vm = Ja(K2),
    X2 = Ga,
    Co = Ja(X2),
    J2 = Ci,
    Z2 = Ja(J2),
    eL = Ua,
    ge = Ja(eL),
    tL = bu,
    Xn = Ja(tL);
  function Ja(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function nL(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function rL(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function sL(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var Gm = {
    to: ge.default.string.isRequired,
    containerId: ge.default.string,
    container: ge.default.object,
    activeClass: ge.default.string,
    activeStyle: ge.default.object,
    spy: ge.default.bool,
    horizontal: ge.default.bool,
    smooth: ge.default.oneOfType([ge.default.bool, ge.default.string]),
    offset: ge.default.number,
    delay: ge.default.number,
    isDynamic: ge.default.bool,
    onClick: ge.default.func,
    duration: ge.default.oneOfType([ge.default.number, ge.default.func]),
    absolute: ge.default.bool,
    onSetActive: ge.default.func,
    onSetInactive: ge.default.func,
    ignoreCancelEvents: ge.default.bool,
    hashSpy: ge.default.bool,
    saveHashHistory: ge.default.bool,
    spyThrottle: ge.default.number,
  };
  Va.default = function (e, t) {
    var n = t || Z2.default,
      r = (function (i) {
        sL(a, i);
        function a(o) {
          nL(this, a);
          var l = rL(
            this,
            (a.__proto__ || Object.getPrototypeOf(a)).call(this, o)
          );
          return s.call(l), (l.state = { active: !1 }), l;
        }
        return (
          Q2(a, [
            {
              key: "getScrollSpyContainer",
              value: function () {
                var l = this.props.containerId,
                  u = this.props.container;
                return l && !u
                  ? document.getElementById(l)
                  : u && u.nodeType
                    ? u
                    : document;
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                if (this.props.spy || this.props.hashSpy) {
                  var l = this.getScrollSpyContainer();
                  Co.default.isMounted(l) ||
                    Co.default.mount(l, this.props.spyThrottle),
                    this.props.hashSpy &&
                      (Xn.default.isMounted() || Xn.default.mount(n),
                      Xn.default.mapContainer(this.props.to, l)),
                    Co.default.addSpyHandler(this.spyHandler, l),
                    this.setState({ container: l });
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                Co.default.unmount(this.stateHandler, this.spyHandler);
              },
            },
            {
              key: "render",
              value: function () {
                var l = "";
                this.state && this.state.active
                  ? (l = (
                      (this.props.className || "") +
                      " " +
                      (this.props.activeClass || "active")
                    ).trim())
                  : (l = this.props.className);
                var u = {};
                this.state && this.state.active
                  ? (u = ko({}, this.props.style, this.props.activeStyle))
                  : (u = ko({}, this.props.style));
                var c = ko({}, this.props);
                for (var d in Gm) c.hasOwnProperty(d) && delete c[d];
                return (
                  (c.className = l),
                  (c.style = u),
                  (c.onClick = this.handleClick),
                  Vm.default.createElement(e, c)
                );
              },
            },
          ]),
          a
        );
      })(Vm.default.PureComponent),
      s = function () {
        var a = this;
        (this.scrollTo = function (o, l) {
          n.scrollTo(o, ko({}, a.state, l));
        }),
          (this.handleClick = function (o) {
            a.props.onClick && a.props.onClick(o),
              o.stopPropagation && o.stopPropagation(),
              o.preventDefault && o.preventDefault(),
              a.scrollTo(a.props.to, a.props);
          }),
          (this.spyHandler = function (o, l) {
            var u = a.getScrollSpyContainer();
            if (!(Xn.default.isMounted() && !Xn.default.isInitialized())) {
              var c = a.props.horizontal,
                d = a.props.to,
                p = null,
                S = void 0,
                g = void 0;
              if (c) {
                var v = 0,
                  w = 0,
                  m = 0;
                if (u.getBoundingClientRect) {
                  var f = u.getBoundingClientRect();
                  m = f.left;
                }
                if (!p || a.props.isDynamic) {
                  if (((p = n.get(d)), !p)) return;
                  var h = p.getBoundingClientRect();
                  (v = h.left - m + o), (w = v + h.width);
                }
                var E = o - a.props.offset;
                (S = E >= Math.floor(v) && E < Math.floor(w)),
                  (g = E < Math.floor(v) || E >= Math.floor(w));
              } else {
                var x = 0,
                  b = 0,
                  O = 0;
                if (u.getBoundingClientRect) {
                  var k = u.getBoundingClientRect();
                  O = k.top;
                }
                if (!p || a.props.isDynamic) {
                  if (((p = n.get(d)), !p)) return;
                  var P = p.getBoundingClientRect();
                  (x = P.top - O + l), (b = x + P.height);
                }
                var M = l - a.props.offset;
                (S = M >= Math.floor(x) && M < Math.floor(b)),
                  (g = M < Math.floor(x) || M >= Math.floor(b));
              }
              var R = n.getActiveLink();
              if (g) {
                if (
                  (d === R && n.setActiveLink(void 0),
                  a.props.hashSpy && Xn.default.getHash() === d)
                ) {
                  var $ = a.props.saveHashHistory,
                    j = $ === void 0 ? !1 : $;
                  Xn.default.changeHash("", j);
                }
                a.props.spy &&
                  a.state.active &&
                  (a.setState({ active: !1 }),
                  a.props.onSetInactive && a.props.onSetInactive(d, p));
              }
              if (S && (R !== d || a.state.active === !1)) {
                n.setActiveLink(d);
                var W = a.props.saveHashHistory,
                  V = W === void 0 ? !1 : W;
                a.props.hashSpy && Xn.default.changeHash(d, V),
                  a.props.spy &&
                    (a.setState({ active: !0 }),
                    a.props.onSetActive && a.props.onSetActive(d, p));
              }
            }
          });
      };
    return (r.propTypes = Gm), (r.defaultProps = { offset: 0 }), r;
  };
  Object.defineProperty(jh, "__esModule", { value: !0 });
  var iL = T,
    qm = Jw(iL),
    aL = Va,
    oL = Jw(aL);
  function Jw(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function lL(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Qm(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function uL(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var cL = (function (e) {
    uL(t, e);
    function t() {
      var n, r, s, i;
      lL(this, t);
      for (var a = arguments.length, o = Array(a), l = 0; l < a; l++)
        o[l] = arguments[l];
      return (
        (i =
          ((r =
            ((s = Qm(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(o)
              )
            )),
            s)),
          (s.render = function () {
            return qm.default.createElement("a", s.props, s.props.children);
          }),
          r)),
        Qm(s, i)
      );
    }
    return t;
  })(qm.default.Component);
  jh.default = (0, oL.default)(cL);
  var zh = {};
  Object.defineProperty(zh, "__esModule", { value: !0 });
  var dL = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var s = n[r];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    fL = T,
    Km = Zw(fL),
    hL = Va,
    pL = Zw(hL);
  function Zw(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function mL(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function gL(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function vL(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var yL = (function (e) {
    vL(t, e);
    function t() {
      return (
        mL(this, t),
        gL(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      dL(t, [
        {
          key: "render",
          value: function () {
            return Km.default.createElement(
              "button",
              this.props,
              this.props.children
            );
          },
        },
      ]),
      t
    );
  })(Km.default.Component);
  zh.default = (0, pL.default)(yL);
  var $h = {},
    Tu = {};
  Object.defineProperty(Tu, "__esModule", { value: !0 });
  var wL =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    SL = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var s = n[r];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    xL = T,
    Xm = ku(xL),
    EL = Ly;
  ku(EL);
  var _L = Ci,
    Jm = ku(_L),
    bL = Ua,
    Zm = ku(bL);
  function ku(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function TL(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function kL(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function CL(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  Tu.default = function (e) {
    var t = (function (n) {
      CL(r, n);
      function r(s) {
        TL(this, r);
        var i = kL(
          this,
          (r.__proto__ || Object.getPrototypeOf(r)).call(this, s)
        );
        return (i.childBindings = { domNode: null }), i;
      }
      return (
        SL(r, [
          {
            key: "componentDidMount",
            value: function () {
              if (typeof window > "u") return !1;
              this.registerElems(this.props.name);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (i) {
              this.props.name !== i.name && this.registerElems(this.props.name);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              if (typeof window > "u") return !1;
              Jm.default.unregister(this.props.name);
            },
          },
          {
            key: "registerElems",
            value: function (i) {
              Jm.default.register(i, this.childBindings.domNode);
            },
          },
          {
            key: "render",
            value: function () {
              return Xm.default.createElement(
                e,
                wL({}, this.props, { parentBindings: this.childBindings })
              );
            },
          },
        ]),
        r
      );
    })(Xm.default.Component);
    return (
      (t.propTypes = { name: Zm.default.string, id: Zm.default.string }), t
    );
  };
  Object.defineProperty($h, "__esModule", { value: !0 });
  var eg =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    PL = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var s = n[r];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    OL = T,
    tg = Uh(OL),
    ML = Tu,
    NL = Uh(ML),
    LL = Ua,
    ng = Uh(LL);
  function Uh(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function RL(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function jL(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function DL(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var e1 = (function (e) {
    DL(t, e);
    function t() {
      return (
        RL(this, t),
        jL(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      PL(t, [
        {
          key: "render",
          value: function () {
            var r = this,
              s = eg({}, this.props);
            return (
              delete s.name,
              s.parentBindings && delete s.parentBindings,
              tg.default.createElement(
                "div",
                eg({}, s, {
                  ref: function (a) {
                    r.props.parentBindings.domNode = a;
                  },
                }),
                this.props.children
              )
            );
          },
        },
      ]),
      t
    );
  })(tg.default.Component);
  e1.propTypes = { name: ng.default.string, id: ng.default.string };
  $h.default = (0, NL.default)(e1);
  var xc =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    rg = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var s = n[r];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
  function sg(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ig(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function ag(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var Po = T,
    Ur = Ga,
    Ec = Ci,
    xe = Ua,
    Jn = bu,
    og = {
      to: xe.string.isRequired,
      containerId: xe.string,
      container: xe.object,
      activeClass: xe.string,
      spy: xe.bool,
      smooth: xe.oneOfType([xe.bool, xe.string]),
      offset: xe.number,
      delay: xe.number,
      isDynamic: xe.bool,
      onClick: xe.func,
      duration: xe.oneOfType([xe.number, xe.func]),
      absolute: xe.bool,
      onSetActive: xe.func,
      onSetInactive: xe.func,
      ignoreCancelEvents: xe.bool,
      hashSpy: xe.bool,
      spyThrottle: xe.number,
    },
    IL = {
      Scroll: function (t, n) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var r = n || Ec,
          s = (function (a) {
            ag(o, a);
            function o(l) {
              sg(this, o);
              var u = ig(
                this,
                (o.__proto__ || Object.getPrototypeOf(o)).call(this, l)
              );
              return i.call(u), (u.state = { active: !1 }), u;
            }
            return (
              rg(o, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var u = this.props.containerId,
                      c = this.props.container;
                    return u
                      ? document.getElementById(u)
                      : c && c.nodeType
                        ? c
                        : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var u = this.getScrollSpyContainer();
                      Ur.isMounted(u) || Ur.mount(u, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (Jn.isMounted() || Jn.mount(r),
                          Jn.mapContainer(this.props.to, u)),
                        this.props.spy && Ur.addStateHandler(this.stateHandler),
                        Ur.addSpyHandler(this.spyHandler, u),
                        this.setState({ container: u });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    Ur.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var u = "";
                    this.state && this.state.active
                      ? (u = (
                          (this.props.className || "") +
                          " " +
                          (this.props.activeClass || "active")
                        ).trim())
                      : (u = this.props.className);
                    var c = xc({}, this.props);
                    for (var d in og) c.hasOwnProperty(d) && delete c[d];
                    return (
                      (c.className = u),
                      (c.onClick = this.handleClick),
                      Po.createElement(t, c)
                    );
                  },
                },
              ]),
              o
            );
          })(Po.Component),
          i = function () {
            var o = this;
            (this.scrollTo = function (l, u) {
              r.scrollTo(l, xc({}, o.state, u));
            }),
              (this.handleClick = function (l) {
                o.props.onClick && o.props.onClick(l),
                  l.stopPropagation && l.stopPropagation(),
                  l.preventDefault && l.preventDefault(),
                  o.scrollTo(o.props.to, o.props);
              }),
              (this.stateHandler = function () {
                r.getActiveLink() !== o.props.to &&
                  (o.state !== null &&
                    o.state.active &&
                    o.props.onSetInactive &&
                    o.props.onSetInactive(),
                  o.setState({ active: !1 }));
              }),
              (this.spyHandler = function (l) {
                var u = o.getScrollSpyContainer();
                if (!(Jn.isMounted() && !Jn.isInitialized())) {
                  var c = o.props.to,
                    d = null,
                    p = 0,
                    S = 0,
                    g = 0;
                  if (u.getBoundingClientRect) {
                    var v = u.getBoundingClientRect();
                    g = v.top;
                  }
                  if (!d || o.props.isDynamic) {
                    if (((d = r.get(c)), !d)) return;
                    var w = d.getBoundingClientRect();
                    (p = w.top - g + l), (S = p + w.height);
                  }
                  var m = l - o.props.offset,
                    f = m >= Math.floor(p) && m < Math.floor(S),
                    h = m < Math.floor(p) || m >= Math.floor(S),
                    E = r.getActiveLink();
                  if (h)
                    return (
                      c === E && r.setActiveLink(void 0),
                      o.props.hashSpy && Jn.getHash() === c && Jn.changeHash(),
                      o.props.spy &&
                        o.state.active &&
                        (o.setState({ active: !1 }),
                        o.props.onSetInactive && o.props.onSetInactive()),
                      Ur.updateStates()
                    );
                  if (f && E !== c)
                    return (
                      r.setActiveLink(c),
                      o.props.hashSpy && Jn.changeHash(c),
                      o.props.spy &&
                        (o.setState({ active: !0 }),
                        o.props.onSetActive && o.props.onSetActive(c)),
                      Ur.updateStates()
                    );
                }
              });
          };
        return (s.propTypes = og), (s.defaultProps = { offset: 0 }), s;
      },
      Element: function (t) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var n = (function (r) {
          ag(s, r);
          function s(i) {
            sg(this, s);
            var a = ig(
              this,
              (s.__proto__ || Object.getPrototypeOf(s)).call(this, i)
            );
            return (a.childBindings = { domNode: null }), a;
          }
          return (
            rg(s, [
              {
                key: "componentDidMount",
                value: function () {
                  if (typeof window > "u") return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (a) {
                  this.props.name !== a.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if (typeof window > "u") return !1;
                  Ec.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (a) {
                  Ec.register(a, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return Po.createElement(
                    t,
                    xc({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            s
          );
        })(Po.Component);
        return (n.propTypes = { name: xe.string, id: xe.string }), n;
      },
    },
    FL = IL;
  Object.defineProperty(ke, "__esModule", { value: !0 });
  ke.Helpers =
    ke.ScrollElement =
    ke.ScrollLink =
    nf =
    ke.animateScroll =
    ke.scrollSpy =
    ke.Events =
    ke.scroller =
    ke.Element =
    ke.Button =
    ke.Link =
      void 0;
  var AL = jh,
    t1 = wn(AL),
    zL = zh,
    n1 = wn(zL),
    $L = $h,
    r1 = wn($L),
    UL = Ci,
    s1 = wn(UL),
    HL = Ka,
    i1 = wn(HL),
    BL = Ga,
    a1 = wn(BL),
    WL = xu,
    o1 = wn(WL),
    YL = Va,
    l1 = wn(YL),
    VL = Tu,
    u1 = wn(VL),
    GL = FL,
    c1 = wn(GL);
  function wn(e) {
    return e && e.__esModule ? e : { default: e };
  }
  ke.Link = t1.default;
  ke.Button = n1.default;
  ke.Element = r1.default;
  ke.scroller = s1.default;
  ke.Events = i1.default;
  ke.scrollSpy = a1.default;
  var nf = (ke.animateScroll = o1.default);
  ke.ScrollLink = l1.default;
  ke.ScrollElement = u1.default;
  ke.Helpers = c1.default;
  ke.default = {
    Link: t1.default,
    Button: n1.default,
    Element: r1.default,
    scroller: s1.default,
    Events: i1.default,
    scrollSpy: a1.default,
    animateScroll: o1.default,
    ScrollLink: l1.default,
    ScrollElement: u1.default,
    Helpers: c1.default,
  };
  const lg = { duration: 500, smooth: !0 },
    qL = () => {
      var S, g, v;
      const [e, t] = T.useState(""),
        n = gn(),
        { data: r } = He({ queryKey: ["authUser"] }); //!Note:
      const { id: s } = Si(); //!Note:
      const [i, a] = T.useState(!1),
        {
          data: o,
          isPending: l,
          isLoading: u,
        } = He({
          queryKey: ["getSingleConversation"],
          queryFn: async () => {
            try {
              return (await Pe.get(`/conversations/${s || "all"}`)).data;
            } catch (w) {
              if (w.response && w.response.status === 401) return null;
              de.error(w.response.data.message || "Something went wrong");
            }
          },
          refetchOnWindowFocus: !1,
        });
      T.useEffect(() => {
        "rendered use effect single conversation", a(!0);
      }, [s]),
        i &&
          (n.invalidateQueries({ queryKey: ["getSingleConversation"] }),
          a(!1),
          nf.scrollToBottom(lg)),
        ("conversationIdChange", i);
      const { mutate: c, isPending: d } = At({
          mutationFn: (w) => Pe.post(`/chat/${s}`, w),
          onSuccess: () => {
            n.invalidateQueries({ queryKey: ["getSingleConversation"] }),
              t(""),
              nf.scrollToBottom(lg);
          },
          onError: () => {},
        }),
        p = (w) => {
          w.preventDefault(), c({ message: e });
        };
      return y.jsxs(y.Fragment, {
        children: [
          l || u
            ? y.jsx("div", {
                className: "flex justify-center items-center h-screen",
                children: y.jsx(Fr, {
                  className: "size-10 animate-spin text-blue-700",
                }),
              })
            : y.jsx("div", {
                className: "mb-40 mt-24 px-10",
                children:
                  (S = o == null ? void 0 : o.data[0]) != null && S.chats.length
                    ? (v =
                        (g = o == null ? void 0 : o.data[0]) == null
                          ? void 0
                          : g.chats) == null
                      ? void 0
                      : v
                          .slice()
                          .reverse()
                          .map((w, m) => {
                            var x, b, O, k, P;
                            const f = w == null ? void 0 : w.createdAt,
                              h = D(f).toDate(),
                              E = D(h).fromNow();
                            return y.jsx(
                              "div",
                              {
                                className: "w-full mb-4  lg:px-32 mt-12",
                                children: y.jsxs("div", {
                                  className: `chat ${((x = w == null ? void 0 : w.sender[0]) == null ? void 0 : x._id) == ((b = r == null ? void 0 : r.data) == null ? void 0 : b._id) ? "chat-end" : "chat-start"}`,
                                  children: [
                                    y.jsx("div", {
                                      className: "chat-image avatar",
                                      children: y.jsx("div", {
                                        className: "w-10 rounded-full",
                                        children: y.jsx("img", {
                                          alt: "Tailwind CSS chat bubble component",
                                          src: `${(O = w == null ? void 0 : w.sender[0]) != null && O.avatar ? ((k = w == null ? void 0 : w.sender[0]) == null ? void 0 : k.avatar) : "/public/avatar.png"} `,
                                        }),
                                      }),
                                    }),
                                    y.jsxs("div", {
                                      className:
                                        "chat-header text-md font-semibold mb-2",
                                      children: [
                                        (P =
                                          w == null ? void 0 : w.sender[0]) ==
                                        null
                                          ? void 0
                                          : P.fullName,
                                        y.jsx("time", {
                                          className: "text-xs opacity-50 ml-4",
                                          children: E,
                                        }),
                                      ],
                                    }),
                                    y.jsx("div", {
                                      className:
                                        "chat-bubble bg-base-200 text-black ",
                                      children: w == null ? void 0 : w.message,
                                    }),
                                  ],
                                }),
                              },
                              m
                            );
                          })
                    : y.jsx("div", {
                        children: y.jsx("h1", { children: "No chats yet" }),
                      }),
              }),
          y.jsxs("form", {
            onSubmit: p,
            className:
              "fixed flex bottom-10 left-[50%] right-[50%] lg:left-0 lg:right-0 justify-center gap-4 lg:ml-40 ",
            children: [
              y.jsx("input", {
                type: "text",
                placeholder: "Write a Message",
                value: e,
                onChange: (w) => {
                  w.preventDefault(), t(w.target.value);
                },
                className:
                  "input input-bordered lg:w-1/2 focus:outline-blue-600 ",
                required: !0,
                disabled: d && "disabled",
              }),
              y.jsx("button", {
                type: "submit",
                className: "btn btn-primary w-14",
                children: "Send",
              }),
            ],
          }),
        ],
      });
    },
    QL = (e) => {
      var l;
      const [t, n] = T.useState(!1),
        r = Si();
      ("params", r),
        T.useEffect(() => {
          const u = () => {
            const c = window.scrollY + window.innerHeight,
              d = document.body.offsetHeight;
            c >= d ? n(!0) : n(!1);
          };
          return (
            window.addEventListener("scroll", u),
            () => window.removeEventListener("scroll", u)
          );
        }, []);
      const s = () => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        },
        i = Yn(),
        a = gn(); //!Note:
      const o =
        (l = e == null ? void 0 : e.filteredConversations) == null
          ? void 0
          : l.sort((u, c) => {
              const d = u.chats.sort(
                  (S, g) => new Date(g.createdAt) - new Date(S.createdAt)
                )[0],
                p = c.chats.sort(
                  (S, g) => new Date(g.createdAt) - new Date(S.createdAt)
                )[0];
              return (
                new Date((p == null ? void 0 : p.createdAt) || u.createdAt) -
                new Date((d == null ? void 0 : d.createdAt) || c.createdAt)
              );
            }); //!Note:
      return y.jsx(y.Fragment, {
        children: y.jsxs("div", {
          className: "",
          children: [
            y.jsx(Qb, {
              className: `fixed bottom-24 right-1 lg:bottom-10 lg:right-10 z-50 cursor-pointer w-8 h-8 lg:w-10 lg:h-10 text-blue-600 opacity-40 hover:opacity-100 animate-bounce hover:animate-none scroll-down-button  ${t ? "hidden" : ""}`,
              onClick: s,
            }),
            y.jsx("label", {
              htmlFor: "my-drawer-2",
              className:
                "btn w-screen drawer-button lg:hidden fixed z-40 bg-base-100 text-black  text-lg rounded-none ",
              children: "Conversations",
            }),
            y.jsxs("div", {
              className: "drawer lg:drawer-open scroll-smooth ",
              children: [
                y.jsx("input", {
                  id: "my-drawer-2",
                  type: "checkbox",
                  className: "drawer-toggle ",
                }),
                y.jsx("div", {
                  className: "drawer-content items-center justify-center",
                  children: y.jsx(qL, {}),
                }),
                y.jsxs("div", {
                  className: "drawer-side ",
                  children: [
                    y.jsx("label", {
                      htmlFor: "my-drawer-2",
                      "aria-label": "close sidebar",
                      className: "drawer-overlay  ",
                    }),
                    y.jsxs("ul", {
                      className:
                        "menu  min-h-full w-80 p-4 pt-40 lg:pt-20 bg-blue-600 text-white",
                      children: [
                        y.jsx("div", {
                          className: "flex justify-center items-center mb-10",
                          children: y.jsx("img", {
                            src: "/logo.svg",
                            alt: "logo",
                            className: "h-20 w-20",
                          }),
                        }),
                        o == null
                          ? void 0
                          : o.map((u) => {
                              var c, d, p;
                              return y.jsxs(
                                "div",
                                {
                                  className: "",
                                  children: [
                                    y.jsx("li", {
                                      onClick: () => {
                                        //!Note:
                                        a.invalidateQueries({
                                          queryKey: ["getSingleConversation"],
                                        }),
                                          i(
                                            `/messenger/${u == null ? void 0 : u._id}`
                                          ),
                                          document
                                            .getElementById("my-drawer-2")
                                            .click();
                                      },
                                      className: `rounded-xl  hover:bg-white hover:text-black  ${(r == null ? void 0 : r.id) === (u == null ? void 0 : u._id) && "bg-blue-800 text-white"}`,
                                      children: y.jsxs("div", {
                                        className: "avatar",
                                        children: [
                                          y.jsx("div", {
                                            className: "w-14 rounded-full  ",
                                            children: y.jsx("img", {
                                              src:
                                                (c =
                                                  u == null
                                                    ? void 0
                                                    : u.participants[0]) !=
                                                  null && c.avatar
                                                  ? (d =
                                                      u == null
                                                        ? void 0
                                                        : u.participants[0]) ==
                                                    null
                                                    ? void 0
                                                    : d.avatar
                                                  : "/public/avatar.png",
                                              alt: "Profile Image",
                                            }),
                                          }),
                                          y.jsx("h1", {
                                            className: `text-md ml-5 ${(r == null ? void 0 : r.id) === (u == null ? void 0 : u._id) && "text-xl font-semiboldS "}`,
                                            children:
                                              (p =
                                                u == null
                                                  ? void 0
                                                  : u.participants[0]) == null
                                                ? void 0
                                                : p.fullName,
                                          }),
                                        ],
                                      }),
                                    }),
                                    y.jsx("div", {
                                      className:
                                        "divider mb-0 mt-0  bg-white h-[0.1px] w-[90%]  opacity-20 mx-auto",
                                    }),
                                  ],
                                },
                                u._id
                              );
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    },
    KL = () => {
      var r;
      const { data: e } = He({ queryKey: ["authUser"] }),
        { data: t } = He({
          queryKey: ["conversations"],
          queryFn: async () => {
            try {
              const s = await Pe.get("/conversations/all");
              return s == null ? void 0 : s.data;
            } catch (s) {
              if (s.response && s.response.status === 401) return null;
              de.error(s.response.data.message || "Something went wrong");
            }
          },
          refetchOnWindowFocus: !1,
        });
      t;
      const n =
        (r = t == null ? void 0 : t.data) == null
          ? void 0
          : r.map((s) => {
              var i;
              return {
                ...s,
                participants:
                  (i = s == null ? void 0 : s.participants) == null
                    ? void 0
                    : i.filter((a) => {
                        var o;
                        return (
                          (a == null ? void 0 : a._id) !==
                          ((o = e == null ? void 0 : e.data) == null
                            ? void 0
                            : o._id)
                        );
                      }),
              };
            });
      return (
        n, y.jsx("div", { children: y.jsx(QL, { filteredConversations: n }) })
      );
    },
    XL = () => {
      var t;
      const { data: e } = He({
        queryKey: ["wishlist"],
        queryFn: async () => {
          try {
            return (await Pe.get("/wishlist")).data;
          } catch (n) {
            if (n.response && n.response.status === 401) return null;
            de.error(n.response.data.message || "Something went wrong");
          }
        },
        refetchOnWindowFocus: !1,
      });
      return y.jsxs("div", {
        className: "flex flex-col items-center justify-center px-20 ",
        children: [
          y.jsx("h1", {
            className: "text-4xl font-semibold my-20 text-blue-600",
            children: "Wishlist",
          }),
          y.jsx("div", {
            className: "flex flex-row flex-wrap justify-center ",
            children:
              (t = e == null ? void 0 : e.data) == null
                ? void 0
                : t.map((n, r) =>
                    y.jsx(A0, { item: n == null ? void 0 : n.listing }, r)
                  ),
          }),
        ],
      });
    };
  function JL() {
    const { data: e, isLoading: t } = He({
      queryKey: ["authUser"],
      queryFn: async () => {
        try {
          return (await Pe.get("/users/current-user")).data;
        } catch (n) {
          if (n.response && n.response.status === 401) return null;
          de.error(n.response.data.message || "Something went wrong");
        }
      },
      refetchOnWindowFocus: !1,
    });
    return t
      ? y.jsxs("div", {
          className: "flex justify-center items-center h-screen",
          children: [
            " ",
            y.jsx(Fr, { className: "size-10 animate-spin text-blue-700" }),
            " ",
          ],
        })
      : y.jsxs(rT, {
          children: [
            y.jsxs(PE, {
              children: [
                y.jsx(rn, { path: "/", element: y.jsx(tk, {}) }),
                y.jsx(rn, {
                  path: "/signup",
                  element: e ? y.jsx(zr, { to: "/" }) : y.jsx(rk, {}),
                }),
                y.jsx(rn, {
                  path: "/login",
                  element: e ? y.jsx(zr, { to: "/" }) : y.jsx(ik, {}),
                }),
                y.jsx(rn, {
                  path: "/forgot-password",
                  element: e ? y.jsx(zr, { to: "/" }) : y.jsx(ok, {}),
                }),
                y.jsx(rn, {
                  path: "/reset-password/:token",
                  element: e ? y.jsx(zr, { to: "/" }) : y.jsx(uk, {}),
                }),
                y.jsx(rn, {
                  path: "/profile/:username",
                  element: e ? y.jsx(ck, {}) : y.jsx(zr, { to: "/login" }),
                }),
                y.jsx(rn, { path: "/listings/:id", element: y.jsx(qN, {}) }),
                y.jsx(rn, {
                  path: "/messenger/:id?",
                  element: e ? y.jsx(KL, {}) : y.jsx(zr, { to: "/login" }),
                }),
                y.jsx(rn, {
                  path: "/wishlist",
                  element: e ? y.jsx(XL, {}) : y.jsx(zr, { to: "/login" }),
                }),
              ],
            }),
            y.jsx(GT, { position: "bottom-center", reverseOrder: !1 }),
          ],
        });
  }
  const ZL = new e_();
  Ry(document.getElementById("root")).render(
    y.jsx(T.StrictMode, {
      children: y.jsx(DE, {
        children: y.jsx(i_, { client: ZL, children: y.jsx(JL, {}) }),
      }),
    })
  );
});
export default eR();
