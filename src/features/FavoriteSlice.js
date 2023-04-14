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
                console.log("Element déjà existant");
                elementExists = true;
            }
            });
            if (!elementExists) {
            state.value.push(action.payload);
            console.log("Element ajouté");
            }
        },
        supprimer: (state,action) => {
            state.value.splice(action.payload,1)
        },
        supprimerAll: (state,action) => {
           state.value.length=0
        },
        
    }
})

export const {favoriteAction,supprimer,supprimerAll} = FavoriteSlice.actions
export default FavoriteSlice.reducer