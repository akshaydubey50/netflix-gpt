import axios from 'axios'
import { useEffect } from 'react';
import { API_Options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovie } from '../utils/movieSlice';

export const useUpcomingMovie = () => {
    const dispatch = useDispatch();
    const upcomingMovie = useSelector((store) => store.movie.upcomingMovie)
    const fetchData = async () => {
        try {
            const jsonData = await axios.get("https://api.themoviedb.org/3/movie/upcoming", API_Options)
            const upcomingMovieList = jsonData?.data?.results
            console.log('upcomingMovieList Movie Item:-', upcomingMovieList)
            dispatch(addUpcomingMovie(upcomingMovieList))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        !upcomingMovie && fetchData();
    }, [])

}