import express from 'express';
//middleware for handling exeptions inside of async express routes, pass to error handler
import expressAsyncHandler from 'express-async-handler';


//
const router = express.Router();
import Product from '../models/productModel.js';

router.get('/',expressAsyncHandler(async (req,res)=>{
    const products=await Product.find({});
    res.json(products)
}));

router.get('/:id',expressAsyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id);
    if (product){
        res.json(product);
    }else{

        res.status(404)
        throw new Error('Product is not found')
    }
    res.json(product);
}));


export default router;