import React from 'react';
import Navbar2 from '../components/Navbar2'
import Card from '../components/Card'


function New() {
   return(
    <div className='bg-[#BAC7E1]'>
        <Navbar2/>
        <h1 className='mt-5 ml-5 text-xl font-bold text-[#702C9A]'>Top Popular</h1>
        <div className='w-max mx-auto'>
            <div className='sm:space-x-10 space-x-0 flex sm:flex-row flex-col'>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className='sm:space-x-10 space-x-0 flex sm:flex-row flex-col'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>

   )
}

export default New;
