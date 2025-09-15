import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://aravindhanmern:E73tJVCGG9bn7TkG@cluster0.oayztou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/e-commerce').then(()=>console.log("DB Connected"));
   
}

