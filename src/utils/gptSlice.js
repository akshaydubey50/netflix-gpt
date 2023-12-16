import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieResult:null
    },
    reducers:{
        toogleGptSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state,action) => {
            const { movieName , movieResult } = action.payload
            state.movieName = movieName;
            state.movieResult = movieResult ;

        }
    }
})

export const { toogleGptSearchView, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer