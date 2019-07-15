"use strict";
exports.__esModule = true;
var QS = /** @class */ (function () {
    function QS() {
        this.url = "?test=1&g=2&hhh=8";
    }
    QS.prototype.splitIntoObject = function () {
        var urlArr = this.url.slice(1).split('&');
    };
    QS.prototype.showURLQueryString = function () {
        return this.url;
    };
    return QS;
}());
exports["default"] = new QS().showURLQueryString();
