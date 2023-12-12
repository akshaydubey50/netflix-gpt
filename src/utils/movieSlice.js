import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        currentMovieTrailer: null

    },
    reducers:{
        addNowPlayingMovie: (state,action)=>{
            state.nowPlaying = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.currentMovieTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovie, addMovieTrailer } =movieSlice.actions
export default movieSlice.reducer