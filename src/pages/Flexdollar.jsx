import React from 'react'
import Pages from '../reuseable/Pages'
import Button from '../reuseable/button'
import { motion } from 'framer-motion'

const Flexdollar = () => {
  return (
    <div>
       <motion.div
          initial={{ opacity:0, y: -50 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
      <div className='bg-blue-950 h-screen flex items-center gap-[100px] px-[100px] '> 
        <section>
      <Pages
      title="Flexdollar"
      text="Dollar savings"
      description="Save and grow your money in foreign currencies such as Dollars."/>
       <main className='flex'>
      <Button title="Get on iphone"
      bgcolor="white"
      textcolor="black"/>
      <Button title="Get on android"
      bgcolor="white"
      textcolor="black"/>
      </main>
      </section>
      <section>
        <img src="/blackphone.png" alt="" className='w-[400px]' />
      </section>
      </div>

      <div>
        <div className='text-center'>
        <h1 className='text-5xl font-bold'>Preserve and grow your money</h1>
        <p>Target Savings helps you get there faster. You can even team up with others to reach a collective target.</p>
        </div>

        <section className='flex gap-[100px] px-[100px] py-[50px]'>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold text-blue-950'>Diversify your savings</h1>
          <p className='w-[300px]'>WHaving different types of savings and investments helps you reach your goals faster, and can protect you against risk and volatility.</p>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold text-blue-950'>Withdraw anytime</h1>
          <p className='w-[300px]'>You can withdraw at anytime.</p>
          <img src="/quicksave.png" alt="" width={150}/>
        </div>
        <div className='bg-gray-300 h-[400px] text-blue-950'>
          <h1 className='text-4xl font-semibold'>Earn interest</h1>
          <p className='w-[300px]'>Earn up to 7% p/a paid monthly.</p>
          <img src="/withdraw.png" alt="" width={150}/>
        </div>
        </section>
      </div>
      </motion.div>
    </div>
  )
}

export default Flexdollar