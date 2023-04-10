"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangl = void 0;
var Triangl = /** @class */ (function () {
    function Triangl(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangl.prototype.calculateLenghtSides = function () {
        var arrTriangl = [];
        var lado1 = this.vertex1.calculateDistance(this.vertex2);
        var lado2 = this.vertex2.calculateDistance(this.vertex3);
        var lado3 = this.vertex3.calculateDistance(this.vertex2);
        return [lado1, lado2, lado3];
    };
    return Triangl;
}());
exports.Triangl = Triangl;
