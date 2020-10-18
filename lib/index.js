"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaladyQR = void 0;
var generated = require('./generated.js');
/**
 * Provides methods for working with Malady QRCodes. It is a wrapper for
 * the go implementation of Malady, LLC's QRGenerator. Generated code with
 * gopherjs is included as a sublibr.
 */
var QRGenerator = /** @class */ (function () {
    function QRGenerator() {
    }
    /**
     * MapColor returns the color that given uuid maps to
     * @param uuid - a full '-' delimited representation of a v4 uuid
     */
    QRGenerator.prototype.MapColor = function (uuid) {
        return generated.MapColor(uuid);
    };
    /**
     * MapShortCode returns the shortcode that given uuid maps to
     * @param uuid - a full '-' delimited representation of a v4 uuid
     */
    QRGenerator.prototype.MapShortCode = function (uuid) {
        return generated.MapColor(uuid);
    };
    return QRGenerator;
}());
exports.MaladyQR = new QRGenerator();
