import { createSlice } from "@reduxjs/toolkit";

const LivechatSlice = createSlice({
    name: "chats", 
    initialState: {
        messages: []
    },
    reducers: {
        addChats : (state,action) => {
            state.messages.splice(10,1)
            state.messages.unshift(action.payload)
        }
    }
})

export const { addChats } = LivechatSlice.actions;
export default LivechatSlice.reducer