import mongoose from "mongoose";

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI);
    try{
        console.log("Database Connected")
    }catch(error){
        console.log("Error in DB connection:");
        console.log(error);
    }
    
}  
export default connectDB;