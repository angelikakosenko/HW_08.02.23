import React from 'react'
import s from './style.module.css'
import AddProduct from '../AddProduct'
import ProductList from '../ProductsList'
export default function ProductsContainer() {
  return (
    <div>
        <AddProduct />
        <ProductList/>
    </div>
  )
}
