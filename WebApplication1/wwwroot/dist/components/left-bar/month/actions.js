"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../commom/types");
exports.changeMonth = (e) => {
    return {
        type: types_1.ActionTypes.CHANGE_MONTH,
        payload: e
    };
};
//# sourceMappingURL=actions.js.map