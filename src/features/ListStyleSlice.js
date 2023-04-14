import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: false
}
export const LisStyleSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        listAction: (state) => {
           state.value=true  
           console.log(state.value);
        },
        listAction2: (state) => {
            state.value=false
            console.log(state.value);
         },
        
    }
})

export const {listAction,listAction2} = LisStyleSlice.actions
export default LisStyleSlice.reducer