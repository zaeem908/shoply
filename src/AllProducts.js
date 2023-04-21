import React from 'react'
import Menware from './menware'
import Header from './header'
import Electronics from './electronics'
import Cosmetics from './cosmetics'
import GraphicsCards from './GraphicsCards'
import { Link } from 'react-router-dom'
const AllProducts = () => {
  return (
    <div>
        <Header/>
        <button  className="w-[5rem] h-[5rem] m-4 outline outline-gray-400 rounded-2xl p-2"> <Link to={'/'}><img src="https://cdn-icons-png.flaticon.com/512/0/340.png" alt="img"></img></Link></button>
     <GraphicsCards/>
        <Electronics/>
        <Cosmetics/>
          <Menware/> 
    </div>
  )
}

export default AllProducts
