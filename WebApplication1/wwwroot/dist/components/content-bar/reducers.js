"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../commom/types");
exports.record = (initState = [], action) => {
    switch (action.type) {
        case types_1.ActionTypes.SET_RECORD:
            console.log("reducer", action.payload);
            return action.payload;
        default:
            return initState;
    }
};
//# sourceMappingURL=reducers.js.map