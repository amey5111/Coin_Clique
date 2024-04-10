import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import UserExpense from "@/models/userExpenseModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";

connect();

export async function POST(request: NextRequest) {
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
        const { date, givenTo, amount, tag, remarks } = await request.json();

        // Check if user's expenses already exist
        let userExpenses = await UserExpense.findOne({ userId });

        if (!userExpenses) {
            // If user's expenses do not exist, create a new document
            userExpenses = new UserExpense({
                userId: userId,
                expenses: [{
                    date,
                    givenTo,
                    amount,
                    tag,
                    remarks
                }]
            });
        } else {
            // If user's expenses exist, update the expenses array
            userExpenses.expenses.push({
                date,
                givenTo,
                amount,
                tag,
                remarks
            });
        }

        // Save or update the user's expenses
        const savedExpense = await userExpenses.save();

        return NextResponse.json({
            message: "Expense added",
            data: savedExpense
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Internal server error",
        }, { status: 500 });
    }
}
