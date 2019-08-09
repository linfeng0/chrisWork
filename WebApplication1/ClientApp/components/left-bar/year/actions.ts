import { ActionTypes } from '../../commom/types'

export interface CHANGEYEAR {
    type: typeof ActionTypes.CHANEG_YEAR,
    payload:number
}

export const changeYear = (e:number):CHANGEYEAR =>{
    return {
        type:ActionTypes.CHANEG_YEAR,
        payload:e
    }
}

