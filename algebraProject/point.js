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
        return "Longitud y latitud";
    };
    Point.prototype.distanceToIOrigin = function () {
        var lon1 = this.x;
        var lat1 = this.y;
        // Coordenada al origen (0,0)
        var lon2 = 0;
        var lat2 = 0;
        var firstPoint = (lon1 - lon2);
        var secondPoint = (lat1 - lat2);
        return Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var lon1 = this.x;
        var lat1 = this.y;
        var lon2 = 0;
        var lat2 = 0;
        var firstPoint = (lon1 - lon2);
        var secondPoint = (lat1 - lat2);
        return Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);
    };
    return Point;
}());
exports.Point = Point;
