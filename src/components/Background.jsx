import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Manado from '../assets/Manado.webp';

const Background = () => {
  return (
    <div className='w-full h-screen  relative'>
      <img src={Manado} className='w-full h-full object-cover'/>
      <div className='absolute w-full h-full top-0 left-0'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-1'>
        <h1 className='text-3xl md:text-4xl font-bold'>WELCOME, READY TO START<br></br>THE JOURNEY WITH YOU</h1>
        <h2 className='py-4 text-3xl font-bold'>READY TO TRAVEL</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-0 rounded-full text-black bg-white'>
          <div>
            <input className='bg-transparent w-[300px] sm:w-[300px] text-slate-900 font-[Poppins] focus:outline-none 'type='text' placeholder='Start Journey'/>
          </div>
          <div>
            <button>
              <AiOutlineSearch className='text-3xl cursor-pointer rounded-full bg-[#4FE2D9]'/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Background;
