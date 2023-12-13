import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { lang } from '../utils/languageConstant';
import { useSelector } from 'react-redux';

export default function GptSearchBar() {
    const langKey = useSelector((store)=>store.appConfig.lang)
    return (
        <form className="absolute pt-[8rem] flex  justify-center gap-3 text-center w-screen  ">
            <input type="text" className='w-1/2  px-8  drop-shadow-lg py-4 text-white text-2xl font-semibold bg-gray-800 outline-none   rounded-full' placeholder={lang[langKey].gptSearchPlacholder} />
            <button className='bg-red-600 hover:bg-red-700  text-white px-4 py-4   font-bold rounded-full'>
                <span className=''>
                    <IoSearchSharp className='font-semibold text-3xl text-white' />
                </span>
            </button>
        </form>)
}
