import { all } from 'redux-saga/effects'
import { watchAll } from '../components/content-bar/saga'



export function* rootsaga() {
    yield all([
        watchAll()
    ])
}

