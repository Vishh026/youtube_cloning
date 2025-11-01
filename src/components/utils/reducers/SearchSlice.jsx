import { createSlice } from "@reduxjs/toolkit"

const SearchSlice = createSlice({
    name: "search",
    initialState: {
        cache : {}
    },
    reducers: {
        cacheResults : (state,action) => {
            state.cache = {...state.cache,...action.payload}
        }
    }
})

export const {cacheResults } = SearchSlice.actions
export default SearchSlice.reducer