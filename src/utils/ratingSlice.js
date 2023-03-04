import {createSlice} from '@reduxjs/toolkit'

const ratingSlice = createSlice({
    name: "ratingSystem",
    initialState: {
        rate: null,
    },
    reducers:{
        rateIt : (state, action)=>{
            state.rate = action.payload
        }
    }
})

export const {rateIt} = ratingSlice.actions;
export default ratingSlice.reducer