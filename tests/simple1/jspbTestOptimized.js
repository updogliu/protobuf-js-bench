'use strict';

/**
 * @fileoverview
 *
 * Optimized and beautified version of codes generated by Google protobuf/js for
 * message Type.
 *
 * This module exports:
 * {
 *   deserializeBinaryTest,
 *   serializeBinaryTest,
 *   deserializeTextTest,
 *   serializeTextTest
 * }
 */

function l(a) {
  var b = typeof a;
  if ("object" == b)
    if (a) {
      if (a instanceof Array) return "array";
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return "object";
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" !=
        typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(
          "splice")) return "array";
      if ("[object Function]" == c || "undefined" != typeof a.call &&
        "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(
          "call")) return "function"
    } else return "null";
  else if ("function" == b && "undefined" == typeof a.call) return "object";
  return b
}

function m(a) {
  var b = p;

  function c() {}
  c.prototype = b.prototype;
  a.s = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.o = function(a, c, f) {
    for (var e = Array(arguments.length - 2), d = 2; d < arguments.length; d++)
      e[d - 2] = arguments[d];
    return b.prototype[c].apply(a, e)
  }
};
var q = null,
  r = null;

function aa(a) {
  var b = new Uint8Array(Math.ceil(3 * a.length / 4)),
    c = 0;
  ba(a, function(a) {
    b[c++] = a
  });
  return b.subarray(0, c)
}

function ba(a, b) {
  function c(b) {
    for (; e < a.length;) {
      var c = a.charAt(e++),
        d = r[c];
      if (null != d) return d;
      if (!/^[\s\xa0]*$/.test(c)) throw Error(
        "Unknown base64 encoding at char: " + c);
    }
    return b
  }
  t();
  for (var e = 0;;) {
    var d = c(-1),
      f = c(0),
      g = c(64),
      h = c(64);
    if (64 === h && -1 === d) break;
    b(d << 2 | f >> 4);
    64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
  }
}

function t() {
  if (!q) {
    q = {};
    r = {};
    for (var a = 0; 65 > a; a++) q[a] =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        a), r[q[a]] = a, 62 <= a && (r[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(
          a)] = a)
  }
};

function ca(a) {
  return eval("(" + a + ")")
}

function da() {
  this.a = u
}

function w(a, b, c) {
  if (null == b) c.push("null");
  else {
    if ("object" == typeof b) {
      if ("array" == l(b)) {
        var e = b;
        b = e.length;
        c.push("[");
        for (var d = "", f = 0; f < b; f++) c.push(d), d = e[f], w(a, a.a ? a.a
          .call(e, String(f), d) : d, c), d = ",";
        c.push("]");
        return
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean) b =
        b.valueOf();
      else {
        c.push("{");
        f = "";
        for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (d = b[e],
          "function" != typeof d && (c.push(f), x(e, c), c.push(":"), w(a, a.a ?
            a.a.call(b, e, d) : d, c), f = ","));
        c.push("}");
        return
      }
    }
    switch (typeof b) {
      case "string":
        x(b,
          c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
        break;
      case "boolean":
        c.push(String(b));
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
}
var y = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  },
  ea = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g :
  /[\\\"\x00-\x1f\x7f-\xff]/g;

function x(a, b) {
  b.push('"', a.replace(ea, function(a) {
    var b = y[a];
    b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), y[
      a] = b);
    return b
  }), '"')
};

function p() {}
var z = "function" == typeof Uint8Array;

function A(a, b, c) {
  a.b = null;
  b || (b = []);
  a.j = void 0;
  a.f = -1;
  a.a = b;
  a: {
    if (a.a.length) {
      b = a.a.length - 1;
      var e = a.a[b];
      if (e && "object" == typeof e && "array" != l(e) && !(z && e instanceof Uint8Array)) {
        a.g = b - a.f;
        a.c = e;
        break a
      }
    }
    a.g = Number.MAX_VALUE
  }
  a.i = {};
  if (c)
    for (b = 0; b < c.length; b++) e = c[b], e < a.g ? (e += a.f, a.a[e] = a.a[
      e] || B) : a.c[e] = a.c[e] || B
}
var B = [];

function C(a, b) {
  if (b < a.g) {
    b += a.f;
    var c = a.a[b];
    return c === B ? a.a[b] = [] : c
  }
  c = a.c[b];
  return c === B ? a.c[b] = [] : c
}

function D(a, b, c) {
  a = C(a, b);
  return null == a ? c : a
}

function E(a, b, c) {
  b < a.g ? a.a[b + a.f] = c : a.c[b] = c
}

function F(a, b, c) {
  a.b || (a.b = {});
  if (!a.b[c]) {
    var e = C(a, c);
    e && (a.b[c] = new b(e))
  }
  return a.b[c]
}

function G(a, b, c) {
  a.b || (a.b = {});
  var e = c ? c.a : c;
  a.b[b] = c;
  E(a, b, e)
}
var H = this.JSON && this.JSON.stringify || "object" === typeof JSON && JSON.stringify;
p.prototype.h = z ? function() {
  var a = Uint8Array.prototype.toJSON;
  Uint8Array.prototype.toJSON = function() {
    t();
    for (var a = q, b = [], d = 0; d < this.length; d += 3) {
      var f = this[d],
        g = d + 1 < this.length,
        h = g ? this[d + 1] : 0,
        k = d + 2 < this.length,
        n = k ? this[d + 2] : 0,
        v = f >> 2,
        f = (f & 3) << 4 | h >> 4,
        h = (h & 15) << 2 | n >> 6,
        n = n & 63;
      k || (n = 64, g || (h = 64));
      b.push(a[v], a[f], a[h], a[n])
    }
    return b.join("")
  };
  try {
    var b = H.call(null, this.a, u)
  } finally {
    Uint8Array.prototype.toJSON = a
  }
  return b
} : H ? function() {
  return H.call(null, this.a, u)
} : function() {
  var a = [];
  w(new da, this.a, a);
  return a.join("")
};

function u(a, b) {
  if ("number" == typeof b) {
    if (isNaN(b)) return "NaN";
    if (Infinity === b) return "Infinity";
    if (-Infinity === b) return "-Infinity"
  }
  return b
}
p.prototype.toString = function() {
  return this.a.toString()
};
var I = 0,
  J = 0;

function K(a, b, c) {
  this.b = null;
  this.g = this.h = this.a = this.f = this.i = 0;
  this.j = !1;
  a && L(this, a, b, c)
}
var M = [];

function L(a, b, c, e) {
  b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(
      b) : b.constructor === Array ? new Uint8Array(b) : b.constructor ===
    String ? aa(b) : new Uint8Array(0);
  a.b = b;
  a.i = void 0 !== c ? c : 0;
  a.f = void 0 !== e ? a.i + e : a.b.length;
  a.a = a.i
}
K.prototype.c = function() {
  var a, b = this.b;
  a = b[this.a + 0];
  var c = a & 127;
  if (128 > a) return this.a += 1, c;
  a = b[this.a + 1];
  c |= (a & 127) << 7;
  if (128 > a) return this.a += 2, c;
  a = b[this.a + 2];
  c |= (a & 127) << 14;
  if (128 > a) return this.a += 3, c;
  a = b[this.a + 3];
  c |= (a & 127) << 21;
  if (128 > a) return this.a += 4, c;
  a = b[this.a + 4];
  c |= (a & 15) << 28;
  if (128 > a) return this.a += 5, c >>> 0;
  this.a += 10;
  return c
};
K.prototype.m = K.prototype.c;

function N(a) {
  a: {
    for (var b, c = 0, e, d = 0; 4 > d; d++)
      if (b = a.b[a.a++], c |= (b & 127) << 7 * d, 128 > b) {
        a.h = c >>> 0;
        a.g = 0;
        break a
      }
    b = a.b[a.a++];c |= (b & 127) << 28;e = 0 | (b & 127) >> 4;
    if (128 > b) a.h = c >>> 0,
    a.g = e >>> 0;
    else {
      for (d = 0; 5 > d; d++)
        if (b = a.b[a.a++], e |= (b & 127) << 7 * d + 3, 128 > b) {
          a.h = c >>> 0;
          a.g = e >>> 0;
          break a
        }
      a.j = !0
    }
  }
  b = a.h;c = a.g;
  if (a = c & 2147483648) b = ~b + 1 >>> 0,
  c = ~c >>> 0,
  b || (c = c + 1 >>> 0);b = 4294967296 * c + b;
  return a ? -b : b
}

function O(a) {
  var b = a.b[a.a + 0],
    c = a.b[a.a + 1],
    e = a.b[a.a + 2],
    d = a.b[a.a + 3];
  a.a += 4;
  return (b << 0 | c << 8 | e << 16 | d << 24) >>> 0
}
K.prototype.l = function() {
  return !!this.b[this.a++]
};

function fa() {
  this.a = []
}
fa.prototype.length = function() {
  return this.a.length
};

function ga(a) {
  var b = a.a;
  a.a = [];
  return b
}

function P(a, b) {
  for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
  a.a.push(b)
}

function ha(a, b) {
  if (0 <= b) P(a, b);
  else {
    for (var c = 0; 9 > c; c++) a.a.push(b & 127 | 128), b >>= 7;
    a.a.push(1)
  }
}

function Q(a, b) {
  a.a.push(b >>> 0 & 255);
  a.a.push(b >>> 8 & 255);
  a.a.push(b >>> 16 & 255);
  a.a.push(b >>> 24 & 255)
};

function ia(a) {
  if (M.length) {
    var b = M.pop();
    a && L(b, a, void 0, void 0);
    a = b
  } else a = new K(a, void 0, void 0);
  this.a = a;
  this.b = this.c = -1;
  this.f = !1
}

function R(a) {
  var b = a.a;
  (b = b.a == b.f) || (b = a.f) || (b = a.a, b = b.j || 0 > b.a || b.a > b.f);
  if (b) return !1;
  var b = a.a.c(),
    c = b & 7;
  if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.f = !0, !
    1;
  a.c = b >>> 3;
  a.b = c;
  return !0
}

function S(a) {
  switch (a.b) {
    case 0:
      if (0 != a.b) S(a);
      else {
        for (a = a.a; a.b[a.a] & 128;) a.a++;
        a.a++
      }
      break;
    case 1:
      1 != a.b ? S(a) : (a = a.a, a.a += 8);
      break;
    case 2:
      if (2 != a.b) S(a);
      else {
        var b = a.a.c();
        a = a.a;
        a.a += b
      }
      break;
    case 5:
      5 != a.b ? S(a) : (a = a.a, a.a += 4);
      break;
    case 3:
      b = [a.c];
      do {
        if (!R(a)) {
          a.f = !0;
          break
        }
        if (3 == a.b) b.push(a.c);
        else if (4 == a.b && a.c != b.pop()) {
          a.f = !0;
          break
        }
      } while (0 < b.length)
  }
}

function T(a, b, c) {
  var e = a.a.f,
    d = a.a.c(),
    d = a.a.a + d;
  a.a.f = d;
  c(b, a);
  a.a.a = d;
  a.a.f = e
};

function ja() {
  this.c = [];
  this.b = 0;
  this.a = new fa
}

function ka(a, b) {
  U(a, b, 2);
  b = ga(a.a);
  a.c.push(b);
  a.b += b.length;
  b.push(a.b);
  return b
}

function la(a, b) {
  for (var c = b.pop(), c = a.b + a.a.length() - c; 127 < c;) b.push(c & 127 |
    128), c >>>= 7, a.b++;
  b.push(c);
  a.b++
}

function U(a, b, c) {
  P(a.a, 8 * b + c)
}

function V(a, b, c, e) {
  null != c && (b = ka(a, b), e(c, a), la(a, b))
};

function W(a) {
  A(this, a, null)
}
m(W);

function X(a) {
  A(this, a, null)
}
m(X);

function ma(a, b) {
  for (; R(b) && 4 != b.b;) switch (b.c) {
    case 1:
      var c = b.a.m();
      E(a, 1, c);
      break;
    case 2:
      c = new Y;
      T(b, c, na);
      G(a, 2, c);
      break;
    case 3:
      c = new Z;
      T(b, c, oa);
      G(a, 3, c);
      break;
    default:
      S(b)
  }
  return a
}

function pa(a, b) {
  var c;
  (c = D(a, 1, 0)) && null != c && null != c && (U(b, 1, 0), ha(b.a, c));
  (c = F(a, Y, 2)) && V(b, 2, c, qa);
  (c = F(a, Z, 3)) && V(b, 3, c, ra)
}

function Y(a) {
  A(this, a, null)
}
m(Y);

function na(a, b) {
  for (; R(b) && 4 != b.b;) switch (b.c) {
    case 1:
      var c = N(b.a);
      E(a, 1, c);
      break;
    case 2:
      c = N(b.a);
      E(a, 2, c);
      break;
    case 3:
      c = b.a.c();
      c = c >>> 1 ^ -(c & 1);
      E(a, 3, c);
      break;
    default:
      S(b)
  }
  return a
}

function qa(a, b) {
  var c;
  if ((c = D(a, 1, 0)) && null != c) {
    var e = c;
    if (null != e) {
      U(b, 1, 0);
      c = b.a;
      var d = e,
        e = 0 > d,
        d = Math.abs(d),
        f = d >>> 0,
        d = Math.floor((d - f) / 4294967296),
        d = d >>> 0;
      e && (d = ~d >>> 0, f = (~f >>> 0) + 1, 4294967295 < f && (f = 0, d++,
        4294967295 < d && (d = 0)));
      I = f;
      J = d;
      e = I;
      for (f = J; 0 < f || 127 < e;) c.a.push(e & 127 | 128), e = (e >>> 7 | f <<
        25) >>> 0, f >>>= 7;
      c.a.push(e)
    }
  }
  c = D(a, 2, 0);
  0 !== c && null != c && (U(b, 2, 0), ha(b.a, c));
  (c = D(a, 3, 0)) && null != c && (a = c, null != a && (U(b, 3, 0), P(b.a, (a <<
    1 ^ a >> 31) >>> 0)))
}

function Z(a) {
  A(this, a, sa)
}
m(Z);
var sa = [1];

function oa(a, b) {
  for (; R(b) && 4 != b.b;) switch (b.c) {
    case 1:
      var c;
      c = b;
      for (var e = b.a.l, d = c.a.c(), d = c.a.a + d, f = []; c.a.a < d;) f.push(
        e.call(c.a));
      c = f;
      E(a, 1, c || []);
      break;
    case 2:
      e = b.a;
      c = O(e);
      f = O(e);
      e = 2 * (f >> 31) + 1;
      d = f >>> 20 & 2047;
      c = 4294967296 * (f & 1048575) + c;
      c = 2047 == d ? c ? NaN : Infinity * e : d ? e * Math.pow(2, d - 1075) *
        (c + 4503599627370496) : e * Math.pow(2, -1074) * c;
      E(a, 2, c);
      break;
    default:
      S(b)
  }
  return a
}

function ra(a, b) {
  var c;
  c = C(a, 1);
  if (0 < c.length && c && c.length) {
    U(b, 1, 2);
    P(b.a, c.length);
    for (var e = 0; e < c.length; e++) b.a.a.push(c[e] ? 1 : 0)
  }
  if (c = +D(a, 2, 0)) a = c, null != a && (U(b, 2, 1), b = b.a, e = a, (e = (a =
      0 > e ? 1 : 0) ? -e : e) ? isNaN(e) ? (J = 2147483647, I = 4294967295) :
    1.7976931348623157E308 < e ? (J = (a << 31 | 2146435072) >>> 0, I = 0) :
    2.2250738585072014E-308 > e ? (e /= Math.pow(2, -1074), J = (a << 31 | e /
      4294967296) >>> 0, I = e >>> 0) : (c = Math.floor(Math.log(e) / Math.LN2),
      1024 == c && (c = 1023), e *= Math.pow(2, -c), J = (a << 31 | c + 1023 <<
        20 | 1048576 * e & 1048575) >>> 0, I = 4503599627370496 *
      e >>> 0) : (J = 0 < 1 / e ? 0 : 2147483648, I = 0), Q(b, I), Q(b, J))
};
module.exports.deserializeBinaryTest = function(a) {
  a = new ia(a);
  for (var b = new W; R(a) && 4 != a.b;) switch (a.c) {
    case 1:
      var c;
      c = a;
      var e = c.a.c();
      c = c.a;
      for (var d = c.b, f = c.a, e = f + e, g = [], h = ""; f < e;) {
        var k = d[f++];
        if (128 > k) g.push(k);
        else if (192 > k) continue;
        else if (224 > k) {
          var n = d[f++];
          g.push((k & 31) << 6 | n & 63)
        } else if (240 > k) {
          var n = d[f++],
            v = d[f++];
          g.push((k & 15) << 12 | (n & 63) << 6 | v & 63)
        } else if (248 > k) {
          var n = d[f++],
            v = d[f++],
            ta = d[f++],
            k = (k & 7) << 18 | (n & 63) << 12 | (v & 63) << 6 | ta & 63,
            k = k - 65536;
          g.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320)
        }
        8192 <= g.length &&
          (h += String.fromCharCode.apply(null, g), g.length = 0)
      }
      h += String.fromCharCode.apply(null, g);
      c.a = f;
      c = h;
      E(b, 1, c);
      break;
    case 2:
      c = a.a.c();
      E(b, 2, c);
      break;
    case 3:
      c = new X;
      T(a, c, ma);
      G(b, 3, c);
      break;
    case 4:
      f = O(a.a);
      c = 2 * (f >> 31) + 1;
      d = f >>> 23 & 255;
      f &= 8388607;
      c = 255 == d ? f ? NaN : Infinity * c : d ? c * Math.pow(2, d - 150) *
        (f + Math.pow(2, 23)) : c * Math.pow(2, -149) * f;
      E(b, 4, c);
      break;
    default:
      S(a)
  }
  return b
};
module.exports.serializeBinaryTest = function(a) {
  var b = new ja,
    c;
  c = D(a, 1, "");
  if (0 < c.length && null != c) {
    for (var e = ka(b, 1), d = b.a, f = 0; f < c.length; f++) {
      var g = c.charCodeAt(f);
      if (128 > g) d.a.push(g);
      else if (2048 > g) d.a.push(g >> 6 | 192), d.a.push(g & 63 | 128);
      else if (65536 > g)
        if (55296 <= g && 56319 >= g && f + 1 < c.length) {
          var h = c.charCodeAt(f + 1);
          56320 <= h && 57343 >= h && (g = 1024 * (g - 55296) + h - 56320 +
            65536, d.a.push(g >> 18 | 240), d.a.push(g >> 12 & 63 | 128), d
            .a.push(g >> 6 & 63 | 128), d.a.push(g & 63 | 128), f++)
        } else d.a.push(g >> 12 | 224), d.a.push(g >> 6 & 63 | 128), d.a.push(
          g &
          63 | 128)
    }
    la(b, e)
  }(c = D(a, 2, 0)) && null != c && null != c && (U(b, 2, 0), P(b.a, c));
  (c = F(a, X, 3)) && V(b, 3, c, pa);
  (c = +D(a, 4, 0)) && null != c && (U(b, 4, 5), a = b.a, d = c, (d = (c = 0 >
      d ? 1 : 0) ? -d : d) ? isNaN(d) ? (J = 0, I = 2147483647) :
    3.4028234663852886E38 < d ? (J = 0, I = (c << 31 | 2139095040) >>> 0) :
    1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), J =
      0, I = (c << 31 | d) >>> 0) : (e = Math.floor(Math.log(d) / Math.LN2),
      d *= Math.pow(2, -e), d = Math.round(8388608 * d) & 8388607, J = 0, I =
      (c << 31 | e + 127 << 23 | d) >>> 0) : 0 < 1 / d ? I = J = 0 : (J = 0,
      I = 2147483648), Q(a, I));
  a = new Uint8Array(b.b + b.a.length());
  e = b.c;
  d = e.length;
  for (f = c = 0; f < d; f++) g = e[f], a.set(g, c), c += g.length;
  e = ga(b.a);
  a.set(e, c);
  b.c = [a];
  return a
};
module.exports.deserializeTextTest = function(a) {
  return new W(ca(a))
};
module.exports.serializeTextTest = function(a) {
  return a.h()
};