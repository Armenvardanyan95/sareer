"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
function log(specialNotice) {
    return function (source) {
        return source.pipe(operators_1.tap(function (item) { return console.log("Logging item: " + item + " " + (specialNotice ? specialNotice : '')); }));
    };
}
exports.log = log;
