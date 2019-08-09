"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const actions_1 = require("./actions");
const types_1 = require("../commom/types");
function* getRecord(action) {
    console.log("sage");
    const result = yield fetch(`/records?year=${action.payload.year}&month=${action.payload.month}`)
        .then(res => res.json());
    yield effects_1.put(actions_1.actionCreators.setRecord(result));
}
exports.getRecord = getRecord;
function* watchAll() {
    yield effects_1.takeEvery(types_1.ActionTypes.GET_RECORD, getRecord);
}
exports.watchAll = watchAll;
;
//# sourceMappingURL=saga.js.map