import  express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from '../routes/authRoutes.js'
import Authenticate from '../middleware/auth.js';
dotenv.config();

const uri=process.env.MONGODB_URI || 'mongodb://localhost:27017'
const app = express();
const port = 5000;
app.use(express.json());


app.use("/auth",authRoutes)//Like this we can seperate route and can also provide middleware function
app.use("/testing",Authenticate,(req,res)=>{res.json("sduhfhhdfuhfuhvudfvudfvbhdfbhjshvjdhfvdfbh")})


mongoose.connect(uri).then(()=>app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
  }
  )).catch((error)=>console.log("Mongo Error",error.message))

