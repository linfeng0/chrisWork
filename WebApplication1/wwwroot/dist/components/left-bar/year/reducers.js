"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../commom/types");
exports.curYear = (state = new Date().getFullYear(), action) => {
    switch (action.type) {
        case types_1.ActionTypes.CHANEG_YEAR:
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map