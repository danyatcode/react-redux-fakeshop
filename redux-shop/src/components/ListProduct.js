import React, {useEffect} from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { setProducts } from "../redux/actions/productActions"

const ListProduct = () => {

    const products = useSelector((state) => state.allProducts);

    const dispatch = useDispatch()
    const fetchProducts = async() =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
            console.log(err)
        });
        
        dispatch(setProducts(response.data))
    }
    useEffect(() =>{
        fetchProducts()
    }, [])
  return (
    <div className='ui grid container'>
      <ProductItem />
    </div>
  )
}

export default ListProduct
