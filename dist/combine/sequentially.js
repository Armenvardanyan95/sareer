"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function sequentially() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return sources.reduce(function (result, source) { return result.pipe(operators_1.switchMap(function (e) { return source(e); })); }, rxjs_1.of(null));
}
exports.sequentially = sequentially;
