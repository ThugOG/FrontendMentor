import {configureStore} from '@reduxjs/toolkit'
import ratingSlice from './ratingSlice';
const store = configureStore({
    reducer: {
        rating: ratingSlice
    }
})

export default store;