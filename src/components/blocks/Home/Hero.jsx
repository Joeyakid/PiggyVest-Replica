import React from 'react'
import heroImg from '../../../assets/hero.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../../../reuseable/Button"
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='min-h-[90vh] flex items-center'>
        <div className='flex max-tablet:flex-wrap max-tablet:pl-[150px] items-center min-w-[1280px] mx-auto gap-[70px] px-[200px] pb-[120px]'>
        <section className='max-w-[350px]'>
            <span className='flex items-center bg-blue-600 p-2 px-[10px] min-w[250px] rounded-3xl'>
            <img src="/flower.svg" alt="" />
            <h4 className='text-xl font-bold '>The2024PiggyVestSavingsReport</h4>
            <MdKeyboardArrowRight size={20}/>
            </span>
            <h1 className='text-4xl font-bold mt-2 leading-10'>The Better Way to Save & Invest</h1>
            <p>Piggyvest helps over 5 million customers
             achieve their financial goals by helping them save and invest with ease.</p>
            <main className='flex'>
             <Button title="Get on iphone"
             iconTitle={<FaApple />}/>
             <Button title="Get on android"
             iconTitle={<FaGooglePlay size={20}/>}/>
             </main>
             </section>
             <section className='w-[600px]'>
                <img src={heroImg} alt="" className='w-full'/>
             </section>
        </div>
    </div>
  )
}

export default Hero