"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x; // longitud
        this.y = y; // latitud 
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
        return x;
    };
    Point.prototype.setY = function (y) {
        this.y = this.y;
        return y;
    };
    Point.prototype.toString = function () {
        return "Longitud: ".concat(this.x, " y Latitud: ").concat(this.y);
    };
    Point.prototype.distanceToIOrigin = function () {
        var lon1 = this.x;
        var lat1 = this.y;
        var firstPoint = (lon1 - 0);
        var secondPoint = (lat1 - 0);
        var distanceO = Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);
        return distanceO;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var firstPoint = this.x - anotherPoint.x;
        var secondPoint = this.y - anotherPoint.y;
        return Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);
    };
    Point.prototype.calcularQuadrant = function () {
        var cuadrante;
        for (var i = 0; i <= 4; i++) {
            if (this.x == 0 || this.y == 0) {
                return 0;
            }
            else if (this.x > 0 && this.y > 0) {
                return 1;
            }
            else if (this.x < 0 && this.y > 0) {
                return 2;
            }
            else if (this.x < 0 && this.y < 0) {
                return 3;
            }
            else if (this.x > 0 && this.y < 0) {
                return 4;
            }
        }
        return cuadrante;
    };
    Point.prototype.calculateNearest = function (Points) {
        var arrPoint = [];
        //for (i = 0; i < Points.length; i++)
    };
    return Point;
}());
exports.Point = Point;
