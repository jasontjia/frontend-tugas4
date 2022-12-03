import React from "react";
import Manado from '../assets/Manado.webp';

const Card = () => {
    return(
        <div className='lg:w-[280px] sm:w-[225px] w-[200px] lg:h-[450px] h-[400px] bg-white my-10'>
            <div className='relative'>
                <img src={Manado} alt='' className='z-0'/>
                <div className='absolute top-2 left-4'>
                    <h2 className='text-[white]'>text</h2>
                </div>
            </div>
            <div className='space-y-3 pt-3 ml-4'>
                <p className='text-[#b5b5b5] font-semibold text-sm'>March 20 2015</p>
                <h1 className='font-bold lg:text-2xl text-xl'>What Happend in Indonesia ?</h1>
                <p className='font-medium lg:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                    aliquid sed voluptate natus accusantium voluptatem aliquam vero eum vel atque.</p>
            </div>
            <div className='mt-10 ml-4'>
                <h3 className='text-[#4906f2] font-bold'>Find out more</h3>
            </div>
      </div>
    )
}

export default Card;