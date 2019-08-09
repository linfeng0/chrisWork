"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../commom/types");
const getRecord = (year, month) => {
    return {
        type: types_1.ActionTypes.GET_RECORD,
        payload: {
            year, month,
        }
    };
};
const setRecord = (e) => {
    return {
        type: types_1.ActionTypes.SET_RECORD,
        payload: e
    };
};
exports.actionCreators = {
    getRecord,
    setRecord,
};
//# sourceMappingURL=actions.js.map