import axios from 'axios'
import { useEffect } from 'react';
import { API_Options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice';

export const usePopularMovie = () => {
    const dispatch = useDispatch();
    const popularMovie = useSelector((store) => store.movie.popularMovie) 
    const fetchData = async () => {
        try {
            const jsonData = await axios.get("https://api.themoviedb.org/3/movie/popular", API_Options)
            const movieItemList = jsonData?.data?.results
            console.log('popular Movie Item:-', movieItemList)
            dispatch(addPopularMovie(movieItemList))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
       !popularMovie && fetchData();
    }, [])

}