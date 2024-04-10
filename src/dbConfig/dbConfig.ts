import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const conection = mongoose.connection
        conection.on('connected', ()=>{
            console.log("Mongodb connected");
        })
        conection.on('error', (err)=> {
            console.log("mongo db connection error please make sure mongo db database is up and running", err)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong while connecting to DataBase");
        console.log(error);
    }
}