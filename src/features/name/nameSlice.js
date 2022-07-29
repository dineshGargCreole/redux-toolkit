import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    names: []
}

export const nameSlice = createSlice({
    name: 'name_slice',
    initialState,
    reducers: {
        addName: (state, action) => {
            state.names = [...state.names, action.payload]
        },
        removeName: (state, action) => {
            const newNames = state.names.filter(item => item !== action.payload)
            state.names = newNames
        }
    }
})

export const {addName, removeName} = nameSlice.actions

export default nameSlice.reducer