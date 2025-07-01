"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransformationService {
    static transformText(value, type) {
        if (typeof value !== "string") {
            return value;
        }
        switch (type) {
            case "TO_UPPER_CASE":
                return value.toUpperCase();
            case "TO_LOWER_CASE":
                return value.toLowerCase();
            case "REVERSE":
                return value.split("").reverse().join("");
            case "TO_TITLE_CASE":
                return value
                    .toLowerCase()
                    .replace(/\b\w/g, (char) => char.toUpperCase());
            case "SPONGEBOB_CASE":
                return value
                    .split("")
                    .map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
                    .join("");
            default:
                return value.toUpperCase();
        }
    }
}
exports.default = TransformationService;
