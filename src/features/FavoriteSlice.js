import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: []
}
export const FavoriteSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        favoriteAction: (state,action) => {
            let elementExists = false;
            state.value.forEach(e => {
            if (e.element.id === action.payload.element.id) {
                elementExists = true;
            }
            });
            if (!elementExists) {
            state.value.push(action.payload);
            }
        },
        supprimer: (state,action) => {
            // state.value.splice(action.payload,1)
            const indexToRemove = state.value.findIndex(
                (e) => e.element.id === action.payload.element.id
            );
            if (indexToRemove !== -1) {
                state.value.splice(indexToRemove, 1);
            }
        },
        supprimerAll: (state,action) => {
           state.value.length=0
        },
        
    }
})

export const {favoriteAction,supprimer,supprimerAll} = FavoriteSlice.actions
export default FavoriteSlice.reducer