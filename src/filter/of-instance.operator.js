"use strict";
exports.__esModule = true;
var operators_1 = require("rxjs/operators");
function ofInstance(classType) {
    return function (source) {
        return source.pipe(operators_1.filter(function (instance) { return instance instanceof classType; }));
    };
}
exports.ofInstance = ofInstance;
