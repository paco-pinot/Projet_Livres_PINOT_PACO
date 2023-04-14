import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:  {
        bool:false,
        elem:{},
    }
}
export const BookModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalRecup: (state,action) => {
            state.value.bool=!state.value.bool
            state.value.elem = action.payload
        }
    }
})

export const {modalRecup} = BookModalSlice.actions
export default BookModalSlice.reducer