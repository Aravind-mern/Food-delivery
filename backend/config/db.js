import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://suryapandi0208:sp0208003@cluster0.ivayzck.mongodb.net/').then(()=>console.log("DB Connected"));
   
}

