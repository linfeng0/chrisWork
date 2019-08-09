"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("../components/left-bar/year/reducers");
const reducers_2 = require("../components/left-bar/month/reducers");
const reducers_3 = require("../components/content-bar/reducers");
exports.rootReducer = redux_1.combineReducers({
    curMonth: reducers_2.curMonth,
    curYear: reducers_1.curYear,
    record: reducers_3.record,
});
//# sourceMappingURL=reducers.js.map