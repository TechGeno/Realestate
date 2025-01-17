import express from 'express';
import mongoose from 'mongoose';;
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listRouter from './routes/list.route.js';    
import cookieParser from 'cookie-parser';
dotenv.config();

//connect to mongo
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to mongodb!!');
}).catch((err) => {
    console.log(err);
})

// Running the express app
const app = express();

app.use(cookieParser());

app.use(express.json());


// app.set('view engine', 'ejs');   // need to make the file name as ejs   

app.listen(3000, () => {
    console.log("Server is running lets!!!");
})


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/list", listRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});