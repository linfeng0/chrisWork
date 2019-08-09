import { ActionTypes } from '../../commom/types'

export interface CHANEGMONTH{
    type: typeof ActionTypes.CHANGE_MONTH,
        payload: number
}


export const changeMonth =(e:number):CHANEGMONTH=>{
    return {
        type:ActionTypes.CHANGE_MONTH,
        payload:e
    }
}

