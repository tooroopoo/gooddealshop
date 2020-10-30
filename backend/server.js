import express, { response } from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './route/productRoutes.js';
import{notFound,errorHandler} from './middleware/errorMiddleware.js';

const app=express();

dotenv.config();

connectDB();

app.get('/',(req,res)=>{
    res.send('API is running');
});

app.get('/sayhi',(req,res)=>{
    res.send("my lady");
})

app.use('/api/products',productRoutes);

//BELOW the other route handling so if none of them are resolved or one of them throw error, this will be fired
//custom error handling to get back json data when error
app.use(notFound)
app.use(errorHandler)

const port=process.env.PORT || 5000;
app.listen(port,console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold))