"use strict";
exports.__esModule = true;
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    function telefono(tipo, nuemro) {
        this._tipo = tipo;
        this._numero = nuemro;
    }
    Object.defineProperty(telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return telefono;
}());
exports.telefono = telefono;
