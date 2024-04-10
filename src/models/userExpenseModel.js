import mongoose from "mongoose";

const userExpenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, "Please provide a user ID"]
    },
    expenses: [{
        date: {
            type: String,
            required: [true, "Please provide a date"]
        },
        givenTo: {
            type: String,
            required: [true, "Please provide an email"]
        },
        amount: {
            type: Number,
            required: [true, "Please provide an amount"]
        },
        tag: {
            type: String
        },
        remarks:{
            type: String
        }
    }]
});

const UserExpense = mongoose.models.userExpenses || mongoose.model("userExpenses", userExpenseSchema);
export default UserExpense;
