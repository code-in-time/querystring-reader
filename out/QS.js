"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QS = /** @class */ (function () {
    function QS() {
        this.url = window.location.search;
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
exports.default = QS;
//# sourceMappingURL=QS.js.map