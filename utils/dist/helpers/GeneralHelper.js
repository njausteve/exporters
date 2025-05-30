"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralHelper = void 0;
class GeneralHelper {
    /**
     * Creates an indentation string based on the number of levels and type
     * @param spaces - Number of spaces per level (default: 2)
     * @returns Indentation string
     */
    static indent(spaces = 2) {
        return ' '.repeat(Math.max(0, spaces));
    }
    /**
     * Formats a disclaimer text into a JSDoc comment block
     * @param disclaimer - The disclaimer text to format
     * @param content - The content to append after the disclaimer
     * @returns Formatted string with disclaimer comment and content
     */
    static addDisclaimer(disclaimer, content) {
        if (!disclaimer) {
            return content;
        }
        const formattedDisclaimer = disclaimer.replace(/\n/g, '\n * ');
        return `/**\n * ${formattedDisclaimer} \n */\n\n${content}`;
    }
}
exports.GeneralHelper = GeneralHelper;
