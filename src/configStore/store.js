import {createStore, combineReducers } from "redux"

import useReducer from "../reducer/reducer"


const configureStore = () => {
    const store = createStore(combineReducers({
        data: useReducer
    }))

    return store
}

export default configureStore