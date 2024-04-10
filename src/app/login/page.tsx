"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";




export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col lg:flex-row justify-around">
        <div className="lg:w-3/4">
        {loading ?
        <Image
          src="/loading.gif"
          alt="loading"
          width={700}
          height={700}
        /> :
        <Image
          src="/loginPage image.png"
          alt="login page"
          width={600}
          height={600}
        />
      }
      </div> 
        <div className="flex flex-col items-center justify-center py-2 bg-purple-300 text-yellow-500 lg:w-2/4">
        <h1 className="text-3xl font-bold mb-4 text-purple-500 bg-white py-2 px-3 rounded-xl">Login</h1>
        <label htmlFor="email" className="mb-1 text-purple-500 text-lg font-semibold">Email</label>
        <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Email"
        />
        
        <label htmlFor="password" className="mb-1 text-purple-500 text-lg font-semibold">Password</label>
        <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Password"
        />
        
        <button
            onClick={onLogin}
            className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-400 bg-yellow-500 text-purple-600 hover:bg-yellow-500 hover:text-purple-700 transition duration-300 disabled:bg-gray-400"
            disabled={buttonDisabled}
        >
            Login
        </button>
        
        <a href="/signup" className="text-purple-600 underline underline-offset-4 hover:text-yellow-600">Not have an account ? sign up here </a>
    </div>
    </div>
    )

}