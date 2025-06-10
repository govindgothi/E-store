import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})
const app: express.Application = express();

app.use(cookieParser(process.env.COOKIE_SECURE));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json())


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: "Internal Server Error",
  });
});



import homeRouter from './routes/homeItem.route.js'
import productRouter from './routes/product.route.js'
import reviewRouter from './routes/review.route.js'
import orderRouter from './routes/order.route.js'
import userRouter from './routes/user.route.js'
import profileRouter from './routes/profile.route.js'
import addressRouter from './routes/address.route.js'
import otpRouter from './routes/otp.route.js'
import categoriesRouter from './routes/categories.route.js'
import cartRouter from './routes/cart.route.js'
import sessionRouter from './routes/session.route.js'

app.use('/api/v1/home',homeRouter)
app.use('/api/v1/product',productRouter)
app.use('/api/v1/review',reviewRouter)
app.use('/api/v1/order',orderRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/profile',profileRouter)
app.use('/api/v1/address',addressRouter)
app.use('/api/v1/otp',otpRouter)
app.use('/api/v1/category',categoriesRouter)
app.use('/api/v1/cart',cartRouter)
app.use('/api/v1/session',sessionRouter)

export {app}

