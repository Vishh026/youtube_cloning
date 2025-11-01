import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./reducers/AppSlice"
import searchSlice from "./reducers/SearchSlice"

const store =  configureStore ({
    reducer: {
        appReducer : appReducer,
        searchReducer : searchSlice
    }
})

export default store;