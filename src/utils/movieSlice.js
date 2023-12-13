import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        popularMovie:null,
        upcomingMovie:null,
        topRatedMovie:null,
        currentMovieTrailer: null
    },
    reducers:{
        addNowPlayingMovie: (state,action)=>{
            state.nowPlaying = action.payload
        },
        addPopularMovie: (state, action) => {
            state.popularMovie = action.payload
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.currentMovieTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovie, addPopularMovie, addMovieTrailer, addUpcomingMovie, addTopRatedMovie } =movieSlice.actions
export default movieSlice.reducer