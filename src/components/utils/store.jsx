import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./reducers/AppSlice"
import searchSlice from "./reducers/SearchSlice"
import chatReducer from "./reducers/LivechatSlice"

const store =  configureStore ({
    reducer: {
        appReducer : appReducer,
        searchReducer : searchSlice,
        chatReducer : chatReducer
    }
})

export default store;