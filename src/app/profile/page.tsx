"use client";
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")

    const getUserDetails = async () => {
        try {
            const res = await axios.post("/api/users/me")
            console.log(res.data);
            setData(res.data._id);
        } catch (error:any) {
            console.log("somthing error while fetching data", error.message);
            toast.error(error.message);
        }
    }
    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success("logout successfully")
            router.push("/login");
        } catch (error:any) {
            console.log("somthing error while Loging out please try again after some time", error.message);
            toast.error(error.message);
        }
    }
  return (
    <div>ProfilePage</div>
  )
}
