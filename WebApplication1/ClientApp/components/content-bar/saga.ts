import { call, put, takeEvery,all } from 'redux-saga/effects'
import { actionCreators, GETRECORD } from './actions'
import { ActionTypes } from "../commom/types"

export function* getRecord(action: GETRECORD) {
    console.log("sage");
    const result = yield fetch(`/records?year=${action.payload.year}&month=${action.payload.month}`)
        .then(res => res.json());
    yield put(actionCreators.setRecord(result));

}


export function* watchAll() {
    yield takeEvery(ActionTypes.GET_RECORD,getRecord);
};





