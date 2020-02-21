"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
function truthy() {
    return function (source) {
        return source.pipe(operators_1.filter(function (item) { return !!item; }));
    };
}
exports.truthy = truthy;
