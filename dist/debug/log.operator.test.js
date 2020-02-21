"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_operator_1 = require("./log.operator");
var operators_1 = require("rxjs/operators");
test('log operator should return a tap', function () {
    expect(log_operator_1.log()).toEqual(operators_1.tap(function (e) { return console.log(); }));
});
