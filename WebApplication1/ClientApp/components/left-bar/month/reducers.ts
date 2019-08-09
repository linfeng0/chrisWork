import { CHANEGMONTH } from './actions'
import { ActionTypes } from '../../commom/types';


export const curMonth = (state = new Date().getMonth(),action:CHANEGMONTH)=>{
    switch(action.type){
        case ActionTypes.CHANGE_MONTH:
            return action.payload
        default:
            return state
    }
}