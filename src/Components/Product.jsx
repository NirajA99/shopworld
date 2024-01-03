import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCart } from '../Redux/Action';

const Product = () => {
    const {id} = useParams();
    const [product , setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            console.log(product , 'item');
            setLoading(false);
        }
        getProduct()
    }, []);

    const Loading = () =>{
        return(
            <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-6">
                <Skeleton height={50} width={300} />
                <Skeleton height={75} />
                <Skeleton height={25} />
                <Skeleton height={50} />
                <Skeleton height={150} />
            </div>
            </>
        )
    }
    const ShowProduct = () =>{
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height='400px' width='400px' />
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={()=> addProduct(product)}>
                    Add to Cart
                </button>
                <button className='btn btn-dark ms-2 px-2'>
                    Go to Cart
                </button>
            </div>
            </>
        )

    }
    return (
        <div className='container py-5'>
            <div className="row py-4">
                {loading ?  <Loading /> : <ShowProduct />}
            </div>
        </div>
    );
};

export default Product;