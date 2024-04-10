import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import UserExpense from "@/models/userExpenseModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";

connect();

export async function GET(request: NextRequest) {
    try {
        // Extract user ID from token using getDataFromToken function
        const userId = await getDataFromToken(request);

        // Find the user
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({
                message: "User not found",
            }, { status: 404 });
        }

        // Extract request body

        let userExpenses = await UserExpense.findOne({ userId });

        return NextResponse.json({data: userExpenses, success: true})

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Internal server error",
        }, { status: 500 });
    }
}
