import axios from "axios";
import { useEffect } from "react";
import { API_Options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

export const useCurrentMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const currentMovie = useSelector((store) => store.movie.currentMovieTrailer)
    const fetchMovieTrailerData = async () => {
        const fetchData = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_Options
        );

        const filterData = fetchData?.data?.results.find(
            (item) => item.type === "Trailer"
        );
        console.log("filterData Data List:-", filterData);
        dispatch(addMovieTrailer(filterData))
    };
    useEffect(() => {
       !currentMovie&& fetchMovieTrailerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}