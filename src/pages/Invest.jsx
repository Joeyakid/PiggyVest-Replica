import React from 'react'
import Pages from '../reuseable/Pages'
import Button from '../reuseable/button'
import { motion } from 'framer-motion'

const Invest = () => {
  return (
    <div>
      <motion.div
    initial={{ opacity:0, y: -50 }}
    animate={{ opacity:1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <div className='bg-purple-700 h-screen flex items-center gap-[100px] px-[100px] '>
        <section>
      <Pages
      title="Invest on the go"
      text="Up to 35% returns"
      description="Invest securely and confidently on the go.
Up to 35% returns, 6-12 month duration."/>
       <main className='flex'>
      <Button title="Get on iphone"/>
      <Button title="Get on android"/>
      </main>
      </section>
      <section>
        <img src="/investment.png" alt="" className='w-[400px]' />
      </section>
      </div>

      <div>
        <div className='text-center'>
        <h1 className='text-5xl font-bold '>Simple investments with great returns</h1>
        <p>Investments are made readily accessible to everyone.</p>
        </div>

        <section className='flex gap-[100px] px-[100px] py-[50px]'>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Investments simplified</h1>
          <p className='w-[300px]'>With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.</p>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Invest confidently</h1>
          <p className='w-[300px]'>We work with leading licensed investment houses such as ARM, AIICO and Stanbic.</p>
          <img src="/quicksave.png" alt="" width={150}/>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Diversify your portfolio</h1>
          <p className='w-[300px]'>Invest in various industries such as fixed income instruments, agriculture, transportation, etc.</p>
          <img src="/withdraw.png" alt="" width={150}/>
        </div>
        </section>
      </div>
      </motion.div>
    </div>
  )
}

export default Invest