import { SETRECORD } from './actions'
import { ActionTypes } from '../commom/types'

export const record = (initState = [],action: SETRECORD) => {
    switch (action.type) {
        case ActionTypes.SET_RECORD:
            console.log("reducer",action.payload);
            return action.payload
        default:

            return initState;
    }
}