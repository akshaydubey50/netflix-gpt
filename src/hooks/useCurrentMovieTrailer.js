import axios from "axios";
import { useEffect } from "react";
import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

export const useCurrentMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
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
        fetchMovieTrailerData();
    }, []);
}