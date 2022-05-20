/* eslint-disable */
/*
dester builds:
index.ts
*/
Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.default = (e, r, t) => {
    var a = 1;
    r < 0 && (r = -r), e < 0 && (a = -1, e = -e);
    var o = (e += r) % r;
    e -= o + r;
    var u = a > 0 ? o >= r / 2 : o > r / 2;
    return u && (e += r), t && (e += r * t * a, o && a > 0 !== (t < 0 && !u || t > 0 && u) || (e -= (t > 0 ? r : -r) * a)), 
    e && e * a;
};
