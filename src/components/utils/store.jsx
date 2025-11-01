import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./reducers/AppSlice"

const store =  configureStore ({
    reducer: {
        appReducer : appReducer
    }
})

export default store;