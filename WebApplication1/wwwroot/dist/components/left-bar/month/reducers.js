"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../commom/types");
exports.curMonth = (state = new Date().getMonth(), action) => {
    switch (action.type) {
        case types_1.ActionTypes.CHANGE_MONTH:
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map