import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [lambang, setLambang] = useState(false)
  const handleNav = () => {setNav(!nav); setLambang(!lambang)};

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={lambang?'hidden':'block text-[#702C9A] hover:text-[#3134d9] cursor-pointer text-3xl md:text-3xl font-bold'}>CALMA TRAVEL</h1>
      </div>
      <ul className='hidden md:flex text-[#702C9A] justify-beetween font-bold'>
        <li className='p-4 hover:text-[#3134d9] cursor-pointer'><Link to='/'>Home</Link></li>
        <li className='p-4 hover:text-[#3134d9] cursor-pointer'><Link to='/Recom'>Recomendation</Link></li>
        <li className='p-4 hover:text-[#3134d9] cursor-pointer'><Link to='/Popular'>Popular</Link></li>
        <li className='p-4 hover:text-[#3134d9] cursor-pointer'><Link to='/New'>New</Link></li>
      </ul>

      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-[#5651e5] text-5xl'/>:<HiOutlineMenuAlt4 className='text-[#5651e5] text-5xl'/>}
      </div>

      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-zinc-300 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1 className='text-3xl md:text-4xl font-bold text-[#702C9A] hover:text-[#3134d9] cursor-pointer'>CALMA TRAVEL</h1>
          <li className='p-4 border-b text-[#702C9A] hover:text-[#3134d9] cursor-pointer'><Link to='/'>Home</Link></li>
          <li className='p-4 border-b text-[#702C9A] hover:text-[#3134d9] cursor-pointer'><Link to='/Recom'>Recomendation</Link></li>
          <li className='p-4 border-b text-[#702C9A] hover:text-[#3134d9] cursor-pointer'><Link to='/Popular'>Popular</Link></li>
          <li className='p-4 border-b text-[#702C9A] hover:text-[#3134d9] cursor-pointer'><Link to='/New'>New</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
