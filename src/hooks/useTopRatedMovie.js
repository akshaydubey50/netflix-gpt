import axios from 'axios'
import { useEffect } from 'react';
import { API_Options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import {  addTopRatedMovie } from '../utils/movieSlice';

export const useTopRatedMovie = () => {
    const dispatch = useDispatch();
    const topratedMovie = useSelector((store) => store.movie.topRatedMovie)
    const fetchData = async () => {
        try {
            const jsonData = await axios.get("https://api.themoviedb.org/3/movie/top_rated", API_Options)
            const movieItemList = jsonData?.data?.results
            console.log('movieItemList:-', movieItemList)
            dispatch(addTopRatedMovie(movieItemList))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        !topratedMovie && fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

}