/* eslint-disable no-unused-vars */

import React, { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Header from "./Header";
import { NetFlix_Banner, Netflix_Avatar } from "../utils/constant";
import { validateFormData } from "../utils/validate"
import { auth, provider } from "../utils/firebase";
import { signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export default function Login() {
    const [isSign, setIsSign] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const dispatch = useDispatch();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleIsSignForm = () => {
        setIsSign(!isSign)
    }

    // const handleFormData = () => {
    //     const message = validateFormData(name.current.value,email.current.value, password.current.value);
    //     console.log('message:-',message)
    //     setErrorMessage(message)
    // }

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                updateProfile(user, {
                    displayName: user.displayName, photoURL: user.photoURL
                }).then(() => {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                }).catch((error) => {
                    console.error(error)
                });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                navigate('/')

                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    return (
        <div className="">
            <Header />
            <div className="absolute">
                <img src={NetFlix_Banner} alt="netflix_banner" className="h-screen w-screen object-cover" />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="px-16 pt-14 pb-28 absolute bg-black/80 w-3/12 my-20 mx-auto right-0 left-0 z-20">
                <h1 className="text-3xl pb-4  text-white font-semibold">{isSign ? "Sign In" : "Sign Up"}</h1>

                {!isSign && <input type="text" className="p-4  text-white text-xl my-2 bg-transparent w-full border border-gray-400 rounded-md " placeholder="Full Name"
                    ref={name} />
                }

                <input type="text"
                    ref={email}
                    className="p-4  text-white text-xl my-2 bg-transparent w-full border border-gray-400 rounded-md " placeholder="Email or phone Number" />



                <div className="relative group">
                    <input
                        ref={password}
                        type={showPassword ? 'text' : 'password'}
                        className="p-4 my-2 bg-transparent border w-full border-gray-400 rounded-md pr-10 text-white text-xl"
                        placeholder="Password"
                    />
                    <div
                        className="absolute inset-y-0 right-0 text-white pr-3 flex items-center cursor-pointer "
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaRegEye className="text-gray-600 text-3xl" /> : <FaRegEyeSlash className="text-gray-600 text-3xl" />}
                    </div>
                    <p className="text-red-500 font-medium text-lg py-2">{errorMessage !== null && errorMessage}</p>
                </div>

                {/* {isSign && <div className="flex flex-col gap-3">
                    <button className="w-full my-2 rounded-lg py-3 text-white font-medium  bg-red-600 text-xl" onClick={handleFormData}>Sign In</button>
                    <p className="text-white font-medium text-center">Forgot Password</p>
                </div>}

                {!isSign && <button className="w-full my-2 rounded-lg py-3 text-white font-medium text-xl  bg-red-600" onClick={handleFormData}>Submit</button>
                } */}

                <button className="w-full my-2 rounded-lg py-3 text-white font-medium text-xl  bg-gradient-to-r from-green-600 to-blue-600" onClick={handleGoogleSignIn}>Google Sign In</button>

                <div className="flex flex-col gap-4 items-start justify-between mt-28 text-white">
                    <div className="">
                        <input type="checkbox" name="saveMyDetail" id="saveMyDetail" className="mr-2" />
                        <label htmlFor="saveMyDetail">
                            Remember Me
                        </label>
                    </div>
                    {isSign && <p><span className="text-gray-400">New to Netflix?</span> <span className="text-white cursor-pointer font-medium" onClick={toggleIsSignForm}>Sign up now.</span></p>}


                    {!isSign && <p><span className="text-gray-400">Existing User ? </span> <span className="text-white cursor-pointer font-medium" onClick={toggleIsSignForm}>Sign in</span></p>}
                    {isSign && <p className="text-gray-400 text-sm">Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.</p>
                    }
                </div>

            </form>
        </div>
    )
}