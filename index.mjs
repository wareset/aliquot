/* eslint-disable */
/*
dester builds:
index.ts
*/
var r = (r, a, v) => {
    var e = 1;
    a < 0 && (a = -a), r < 0 && (e = -1, r = -r);
    var t = (r += a) % a;
    r -= t + a;
    var u = e > 0 ? t >= a / 2 : t > a / 2;
    return u && (r += a), v && (r += a * v * e, t && e > 0 !== (v < 0 && !u || v > 0 && u) || (r -= (v > 0 ? a : -a) * e)), 
    r && r * e;
};

export { r as default };
