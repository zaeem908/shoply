import React from 'react'
import BestSellers from './bestSellers';
import Header from './header';
import Promotional from "./promotional";
import Footer from './footer';
import PunchCard from './punchCard';

const main = () => {
  return (
    <div>
      <Header/>
      <PunchCard/>
      <BestSellers/>
       <Promotional/>
       <Footer/>
    </div>
  )
}

export default main
