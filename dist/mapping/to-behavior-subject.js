"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function toBehaviorSubject(source, initial) {
    var subject = new rxjs_1.BehaviorSubject(initial);
    source.subscribe(subject);
    return subject;
}
exports.toBehaviorSubject = toBehaviorSubject;
