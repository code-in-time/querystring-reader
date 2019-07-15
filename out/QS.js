"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QS = /** @class */ (function () {
    function QS() {
        this.url = "?test=1&g=2&hhh=8";
    }
    QS.prototype.splitIntoObject = function () {
        var urlArr = this.url.slice(1).split('&');
        var obj = {};
        urlArr.forEach(function (v) {
            var arr = v.split('=');
            obj[arr[0]] = arr[1];
        });
        return obj;
    };
    QS.prototype.showURLQueryString = function () {
        return this.splitIntoObject();
    };
    return QS;
}());
exports.default = new QS().showURLQueryString();
//# sourceMappingURL=QS.js.map