import React, { Fragment, useEffect } from 'react'
import MetaData from '../Layout/MetaData'
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/Loader";
import ProductCard from './ProductCard';

export default function Home(){

    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {

        if(error){
          window.alert(error);
          dispatch(clearErrors());
        }
        dispatch(getProduct());

    }, [dispatch, error, alert]);

    return(
        <Fragment>
            {loading ? (
              <Loader />
            ) : (
              <Fragment>
                <MetaData title="Ecommerce" />
         
                <h2>Welcome to Ecommerce</h2>                

                <h3>Featured Products</h3>

                <div className="" id="">
                    {products && products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>                
              </Fragment>
            )}
        </Fragment>
    )
}