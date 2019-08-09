import { combineReducers } from 'redux'
import { curYear } from '../components/left-bar/year/reducers'
import { curMonth } from '../components/left-bar/month/reducers'
import { record } from '../components/content-bar/reducers'




export const rootReducer = combineReducers({
    curMonth,
    curYear,
    record,
})

export type Appstate = ReturnType<typeof rootReducer> 