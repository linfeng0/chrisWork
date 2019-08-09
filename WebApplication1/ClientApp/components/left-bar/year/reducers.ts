import { CHANGEYEAR } from "./actions";
import { ActionTypes } from "../../commom/types";

export const curYear = (state=new Date().getFullYear(),action:CHANGEYEAR)=>{
    switch(action.type){
        case ActionTypes.CHANEG_YEAR:
            return action.payload
        default:
            return state
    }
}