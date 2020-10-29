import React,{useState,useEffect} from 'react';
import { Row,Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';




const HomeScreen = () => {
    //useState first param empty array as default
    const [products , setProducts]=useState([]);

    useEffect(()=>{
        //to use async in useEffect within a function only
        const fetchProducts=async ()=>{
            const {data}=await axios.get('/api/products');
            setProducts(data)
        }
        fetchProducts();

    },[]); //second argument is if u want the useEffect to be fire only if something inside the array change


    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map((product) =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                       <Product  product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
