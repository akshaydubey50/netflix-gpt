import axios from 'axios'
import { useEffect } from 'react';
import { API_Options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {  addTopRatedMovie } from '../utils/movieSlice';

export const useTopRatedMovie = () => {
    const dispatch = useDispatch();

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
        fetchData();
    }, [])

}