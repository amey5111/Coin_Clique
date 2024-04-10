'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
export default function SignupPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup success");
      router.push('/login');
    } catch (error:any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col lg:flex-row justify-around">
      <div className="flex flex-col items-center justify-center py-5 lg:py-2 bg-purple-300 text-yellow-500 lg:w-2/4">
      <h1 className="text-3xl font-bold mb-4 text-purple-500 bg-white py-2 px-3 rounded-xl">Signup</h1>
        <label htmlFor="username" className="mb-1 text-purple-500 text-lg font-semibold">Username</label>
        <input 
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500 text-black"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value})}
          placeholder="Username"
        />
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
          onClick={onSignup}
          className={`px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none ${btnDisabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-yellow-500 text-purple-600 hover:bg-yellow-400 hover:text-purple-700'}`}
          disabled={btnDisabled}
        >
          Signup
        </button>
        <Link href="/login" className="text-purple-600 underline underline-offset-4 hover:text-yellow-600">Already have an account? Log in here</Link>
      </div>
      <div className="lg:w-2/4">
      {loading ? <Image
          src="/loading.gif"
          alt="loading"
          width={700}
          height={700}
        />: <Image
          src="/sign up page image.jpg"
          alt="login component images"
          width={600}
          height={550}
        />}
      </div>
    </div>
  )
}
