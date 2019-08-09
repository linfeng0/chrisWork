"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../commom/types");
exports.changeYear = (e) => {
    return {
        type: types_1.ActionTypes.CHANEG_YEAR,
        payload: e
    };
};
//# sourceMappingURL=actions.js.map