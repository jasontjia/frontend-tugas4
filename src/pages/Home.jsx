import React from 'react';
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Card from '../components/Card'
import { Link } from "react-router-dom";


function Home() {
   return(
    <div className='bg-[#BAC7E1]'>
        <Navbar/>
        <Background/>
        <div className='justify-between flex'>
            <h1 className='mt-5 ml-5 text-xl font-bold text-[#702C9A]'>Recomendation</h1>
            <h2 className='mt-5 mr-5 text-[#702C9A] hover:text-[#3134d9] cursor-pointer'><Link to='/Recom'>Show All</Link></h2>
        </div>
        <div className='w-max mx-auto flex sm:flex-row flex-col sm:space-x-10 space-x-0'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    
   ) 
}

export default Home;
