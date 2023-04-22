import React from 'react'
import Electronics from '../components/electronics'
import Menware from "../components/menware";

const bestSellers = () => {
  return (
    <div>
        <h1 className="text-center p-10 text-3xl font-bold">Best Selling Products</h1>
       <Electronics/>
       <Menware/>
    </div>
  )
}

export default bestSellers
