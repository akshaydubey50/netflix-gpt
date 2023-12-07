import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Header from "./Header";
import { NetFlix_Banner } from "../utils/constant";

export default function Login() {
    const [isSign,setIsSign]=useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleIsSignForm=()=>{
        setIsSign(!isSign)
    }
    return (
        <div className="">
            <Header />
            <div className="absolute ">
                <img src={NetFlix_Banner} alt="netflix_banner" className="h-screen w-screen " />
            </div>

            <form className="px-16 pt-14 pb-48 absolute bg-black/80 w-3/12 my-20 mx-auto right-0 left-0">
                <h1 className="text-3xl pb-4  text-white font-semibold">{isSign ?"Sign In":"Sign Up"}</h1>

                {!isSign && <input type="text" name="userName" id="userName" className="p-4  text-white text-xl my-2 bg-transparent w-full border border-gray-400 rounded-md " placeholder="Full Name" />
}

                <input type="email" name="netflix_email" id="netflix_email" className="p-4  text-white text-xl my-2 bg-transparent w-full border border-gray-400 rounded-md " placeholder="Email or phone Number" />

              

                <div className="relative group">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="netflix_password"
                        id="netflix_password"
                        className="p-4 my-2 bg-transparent border w-full border-gray-400 rounded-md pr-10 text-white text-xl"
                        placeholder="Password"
                    />
                    <div
                        className="absolute inset-y-0 right-0 text-white pr-3 flex items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaRegEye className="text-white text-3xl" /> : <FaRegEyeSlash className="text-white text-3xl" />}
                    </div>
                </div>

                {isSign && <div className="flex flex-col gap-3">
                    <button className="w-full my-2 rounded-md py-2 text-white font-medium  bg-red-600">Sign In</button>
                    <p className="text-white font-medium text-center">Forgot Password</p>
                </div>}

                {!isSign && <button className="w-full my-2 rounded-md py-2 text-white font-medium  bg-red-600">Submit</button>
}
               

                <div className="flex flex-col gap-4 items-start justify-between mt-12 text-white">
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