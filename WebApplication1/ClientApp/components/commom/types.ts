export let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
export let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const CHANGE_MONTH = 'CHANGE_MONTH'
const CHANEG_YEAR = 'CHANGE_YAER'
const GET_RECORD = "GET_RECORD"
const SET_RECORD= "SET_RECORD"


export interface navInfo {
    userName: string
    imgAddr: string
}


export const ActionTypes = {
    CHANGE_MONTH,
    CHANEG_YEAR,
    GET_RECORD,
    SET_RECORD
}



