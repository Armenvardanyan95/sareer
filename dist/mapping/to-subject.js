"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function toSubject(source) {
    var subject = new rxjs_1.Subject();
    source.subscribe(subject);
    return subject;
}
exports.toSubject = toSubject;
