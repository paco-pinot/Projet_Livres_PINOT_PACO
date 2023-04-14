import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: ""
}
export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchAction: (state,action) => {
           state.value=action.payload 
        },
        
    }
})

export const {searchAction} = SearchSlice.actions
export default SearchSlice.reducer