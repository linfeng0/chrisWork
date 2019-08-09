import { ActionTypes } from '../commom/types'

export interface GETRECORD {
    type: typeof ActionTypes.GET_RECORD;
    payload: {
        year: number,
        month: number,
    };
}

export interface SETRECORD {
    type: typeof ActionTypes.SET_RECORD
    payload:any
}

const getRecord = (year: number, month: number ): GETRECORD => {
    return {
        type: ActionTypes.GET_RECORD,
        payload: {
            year, month,
        }
    }
}

const setRecord = (e):SETRECORD => {
    return {
        type: ActionTypes.SET_RECORD,
        payload:e
    }
}

export const actionCreators = {
    getRecord,
    setRecord,
};