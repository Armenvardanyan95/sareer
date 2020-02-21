"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
function ofType(type) {
    return function (source) {
        return source.pipe(operators_1.filter(function (item) {
            if (typeof item === 'object' && type === 'object' && item === null) {
                return false;
            }
            if (type === 'null' && item === null) {
                return true;
            }
            return typeof item === type;
        }));
    };
}
exports.ofType = ofType;
