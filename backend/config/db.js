import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://guptapari:PG14jan2004@cluster0.eyy7krj.mongodb.net/serviNest').then(()=>console.log("DB Connected"));
}