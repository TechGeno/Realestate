import express from 'express';
import mongoose from 'mongoose';;
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

//connect to mongo
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to mongodb!!');
}).catch((err) => {
    console.log(err);
})

// Running the express app
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
// app.set('view engine', 'ejs');   // need to make the file name as ejs   

app.listen(PORT, () => {
    console.log("Server is running lets!!!");
})


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);