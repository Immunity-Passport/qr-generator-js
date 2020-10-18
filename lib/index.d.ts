/**
 * Provides methods for working with Malady QRCodes. It is a wrapper for
 * the go implementation of Malady, LLC's QRGenerator. Generated code with
 * gopherjs is included as a sublibr.
 */
declare class QRGenerator {
    /**
     * MapColor returns the color that given uuid maps to
     * @param uuid - a full '-' delimited representation of a v4 uuid
     */
    MapColor(uuid: string): string;
    /**
     * MapShortCode returns the shortcode that given uuid maps to
     * @param uuid - a full '-' delimited representation of a v4 uuid
     */
    MapShortCode(uuid: string): string;
}
export declare const MaladyQR: QRGenerator;
export {};
