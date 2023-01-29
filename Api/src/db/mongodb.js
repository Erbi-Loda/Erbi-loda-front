import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.URL_CONECTION_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
        console.log("======DB connection successful======")
    })

    mongoose.connection.onOpen('open', () => {
    })
    
  } catch (e) {
    console.log('Algo como error',e);
  }
}