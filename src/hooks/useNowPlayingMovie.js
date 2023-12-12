import axios from 'axios'
import { useEffect } from 'react';
import { API_Options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';

export const useNowPlayingMovie = ()=>{
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            const jsonData = await axios.get("https://api.themoviedb.org/3/movie/now_playing", API_Options)
            const movieItemList = jsonData?.data?.results
            console.log('movieItemList:-', movieItemList)
            dispatch(addNowPlayingMovie(movieItemList))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

}