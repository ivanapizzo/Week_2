"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function () {
        this.x = this.x;
        return this.x;
    };
    Point.prototype.setY = function () {
        this.y = this.y;
        return this.y;
    };
    Point.prototype.toString = function (x, y) {
        (x + y).toString();
        return "x + y";
    };
    return Point;
}());
exports.Point = Point;
