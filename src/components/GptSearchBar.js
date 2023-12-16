import React, { useRef } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { lang } from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import { openai } from '../utils/openAi';
import { API_Options } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';

export default function GptSearchBar() {
    const searchVal = useRef(null);
    const dispatch = useDispatch();
    const searchTMDBMovie = async (movie) => {

        const fetchData = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_Options)

        const jsonData = await fetchData.json();
        return jsonData.results;
    }

    const handleSearchQuery = async () => {
        console.log(searchVal.current.value);

        const movieQueryVal = `Act as a Movie Recommendation System  and suggest some movies for the Query : ${searchVal.current.value}. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Krrish, Koi Mil Gaya, Hero, Hum Saath Saath Hai`

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: movieQueryVal }],
            model: 'gpt-3.5-turbo',
        });

        if (!chatCompletion.choices) alert("No Data Found for searched movies", searchVal.current.value)
        const gptMovies = chatCompletion.choices?.[0]?.message?.content.replace(/,\s*/g, ",").split(",");

        console.log("gptMovies:-",gptMovies)

        const movieData = gptMovies.map((movie) =>  searchTMDBMovie(movie))

        const tmdbMovieResult = await Promise.all(movieData)

        dispatch(addGptMovieResult({ movieName: gptMovies, movieResult: tmdbMovieResult }));
    }

    const langKey = useSelector((store) => store.appConfig.lang)
    return (
        <form className="absolute pt-[8rem] flex  justify-center gap-3 text-center w-screen"
            onSubmit={(e) => e.preventDefault()}>
            <input
                ref={searchVal}
                type="text" className='w-1/2  px-8  drop-shadow-lg py-4 text-white text-2xl font-semibold bg-gray-800 outline-none   rounded-full' placeholder={lang[langKey].gptSearchPlacholder} />
            <button className='bg-red-600 hover:bg-red-700  text-white px-4 py-4   font-bold rounded-full'
                onClick={handleSearchQuery}
            >
                <span className=''>
                    <IoSearchSharp className='font-semibold text-3xl text-white' />
                </span>
            </button>
        </form>)
}
