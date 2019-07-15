"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QS = /** @class */ (function () {
    function QS() {
        this.url = "?test=1&g=2&hhh=8";
    }
    QS.prototype.splitIntoObject = function () {
        var urlArr = this.url.slice(1).split('&');
        var s = urlArr;
    };
    QS.prototype.showURLQueryString = function () {
        return this.url;
        console.log('');
    };
    return QS;
}());
exports.default = new QS().showURLQueryString();
//# sourceMappingURL=QS.js.map