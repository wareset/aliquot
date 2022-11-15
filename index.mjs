/* eslint-disable */
function r(r, a, t) {
    var e = 1;
    a < 0 && (a = -a), r < 0 && (e = -1, r = -r);
    var n = (r += a) % a;
    r -= n + a;
    var u = e > 0 ? n >= a / 2 : n > a / 2;
    return u && (r += a), t && (r += a * t * e, n && e > 0 !== (t < 0 && !u || t > 0 && u) || (r -= (t > 0 ? a : -a) * e)), 
    r && r * e;
}

export { r as default };
