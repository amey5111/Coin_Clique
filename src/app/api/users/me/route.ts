import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";


connect()

export async function POST(request:NextRequest) {
    //extract data from token
    const userId = await getDataFromToken(request)
    const user = await User.findOne({_id: userId}).select("-password")
    if(!user){
        return NextResponse.json({error: "User not found"}, {status: 400})
    }
    return NextResponse.json({
        message: "user found",
        data: user
    })   
}