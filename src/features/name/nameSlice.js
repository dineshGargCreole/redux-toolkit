import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: []
}

export const nameSlice = createSlice({
    name: 'name_slice',
    initialState,
    reducers: {
        addName: (state, action) => {
            state.name = [...state.name, action.payload]
        }
    }
})

export const {addName} = nameSlice.actions

export default nameSlice.reducer