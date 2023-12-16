import React, { useEffect, useState } from 'react';
import { NetFlix_Logo, Supported_Language } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { toogleGptSearchView } from '../utils/gptSlice';
import { IoSearchSharp } from "react-icons/io5";
import { changeLanguage } from '../utils/appConfigSlice';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const languageData =  useSelector((store)=>store.appConfig.lang)
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('logout:-', auth);
      dispatch(removeUser())
    }).catch((error) => {
      console.error(error)
      navigate("/error")
    });
  }

  const toggleGptSearch =()=>{
    dispatch(toogleGptSearchView())
  }

  const handleLanguage = (e)=>{
    dispatch(changeLanguage(e.target.value))
  } 

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe()
  }, []);
  return (
    <div>
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black/50 to-black/50 w-screen   z-20 overflow-hidden flex flex-col md:flex-row justify-between' >
        <img src={NetFlix_Logo} className="w-44 h-20  mx-auto md:mx-0 " alt="logo" />

        {user && <div className="flex gap-4 items-center">

          {showGptSearch && <select className='px-4 py-2 outline rounded-lg font-semibold outline-none bg-gray-800 text-white'
            onChange={handleLanguage}
          >
            {Supported_Language.map((item) => <option key={item.identifier} value={item.identifier}>{item.name}</option>)}
          </select>}
          <button className='text-white font-bold hover:bg-red-700 flex items-center gap-2 rounded-lg px-4 py-3 bg-red-600'
            onClick={toggleGptSearch}
          > 
            <span>{showGptSearch?"HomePage":"GPT Search"}</span>
          </button>

          <div className="">
            <img src={user.photoURL} className='w-12 h-12 mr-20 rounded-md cursor-pointer' alt="user-icon"
              onClick={() => setIsHovered(!isHovered)}
            />

            <div
              className={`bg-gray-700   text-white rounded-md ${isHovered ? 'block mt-4' : 'hidden'
                }`}>
              <ul className='py-2  cursor-pointer'>
                <li className='py-2 px-2'>{user.displayName}</li>
                <li className='hover:text-red-700 py-2 px-2'><button className='rounded-md font-medium ' onClick={handleSignOut}>Sign Out</button></li>
              </ul>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}
