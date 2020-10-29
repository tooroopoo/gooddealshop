import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({match}) => {
    const [product,setProduct]=useState({});

    //match.params.id cos ur query is named id , can be aything
    useEffect(()=>{
        const fetchProduct=async ()=>{
            const {data}=await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }
        fetchProduct();
    },[match]) //you have to declare functions needed by an effect inside of it






    return (
       
        <>
            <Link className='btn btn-light my-3' to='/'>Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />

                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <p>{product.description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                    
                 </Col>

                 <Col md={3}>
                     <Card>
                         <ListGroup variant='flush'>
                             <ListGroup.Item>
                                 <Row>
                                     <Col>
                                        Price:
                                     </Col>
                                     <Col>
                                        <strong>${product.price}</strong>
                                     </Col>
                                 </Row>
                             </ListGroup.Item>

                             <ListGroup.Item>
                                 <Row>
                                     <Col>
                                        Status:
                                     </Col>
                                     <Col>
                                        {product.countInStock>0?'In Stock':'Out of Stock'}
                                     </Col>
                                 </Row>
                             </ListGroup.Item>
                             <ListGroup.Item>
                                 <Button className='btn-block' type='button' disabled={product.countInStock===0}>Add to Card</Button>
                             </ListGroup.Item>
                         </ListGroup>
                     </Card>
                 </Col>
            </Row>


        </>
    )
}

export default ProductScreen
