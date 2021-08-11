"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function invariant(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
exports.default = invariant;
