import React,{useEffect, useState} from 'react';
import { NetFlix_Logo } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import {auth} from "../utils/firebase";
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      console.log('logout:-',auth);
      dispatch(removeUser())
    }).catch((error) => {
      console.error(error)
      navigate("/error")
    });
  }

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
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black/50 to-black/50 w-screen   z-10 overflow-hidden flex justify-between items-start' >
        <img src={NetFlix_Logo} className="w-44   " alt="logo" />
        {user && <div className="flex gap-2 items-center">
        <div className="">
            <img src={user.photoURL} className='w-12 h-12 mr-20 rounded-md cursor-pointer' alt="user-icon"
              onClick={() => setIsHovered(!isHovered)}
             />

            <div
              className={`bg-gray-700 text-white rounded-md ${isHovered ? 'block mt-4' : 'hidden'
                }`}>
              <ul className='py-2  cursor-pointer'>
                <li className='py-2 px-2'>{user.displayName}</li>
                <li className='hover:text-red-700 py-2 px-2'><button className='rounded-md font-medium ' onClick={handleSignOut}>Sign Out</button></li>
              </ul>
            </div>

        </div>
          
        </div>  }
      </div>
     </div>
  )
}
