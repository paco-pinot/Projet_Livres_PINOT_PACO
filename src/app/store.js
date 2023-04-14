import { configureStore } from '@reduxjs/toolkit'
import BookModalReducer from '@/features/BookModalSlice'
import FavoriteReducer from '@/features/FavoriteSlice'
import SearchReducer from '@/features/SearchSlice'
import ListStyleReducer from '@/features/ListStyleSlice'
export default configureStore({
    reducer: {
        modal: BookModalReducer,
        fav:FavoriteReducer,
        search:SearchReducer,
        list:ListStyleReducer,
    },
    
  })