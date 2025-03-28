import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'


const app: express.Application = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: "Internal Server Error",
  });
});




import productRouter from './routes/product.route.js'
import reviewRouter from './routes/review.route.js'
import orderRouter from './routes/order.route.js'
import userRouter from './routes/user.route.js'

app.use('/api/v1/product',productRouter)
app.use('/api/v1/review',reviewRouter)
app.use('/api/v1/order',orderRouter)
app.use('/api/v1/user',userRouter)

export {app}

