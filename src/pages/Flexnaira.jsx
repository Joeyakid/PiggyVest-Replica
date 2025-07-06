import React from 'react'
import Pages from '../reuseable/Pages'
import Button from '../reuseable/button'
import { motion } from 'framer-motion'

const Flexnaira = () => {
  return (
    <div>
      <motion.div
          initial={{ opacity:0, y: -50 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
      <div className='bg-pink-700 h-screen flex items-center gap-[100px] px-[100px] '>
        <section>
      <Pages
      title="Flexnaira"
      text="Flex savings"
      description="SFlexible savings for life's emergencies. Free transfers and withdrawals. Earn up to 12% p.a."/>
       <main className='flex'>
      <Button title="Get on iphone"/>
      <Button title="Get on android"/>
      </main>
      </section>
      <section>
        <img src="/pinkphone.png" alt="" className='w-[400px]' />
      </section>
      </div>

      <div>
        <div className='text-center'>
        <h1 className='text-5xl font-bold '>Save without thinking about it.</h1>
        <p>Enjoy automated savings, quick manual savings top up and competitive interest rates.</p>
        </div>

        <section className='flex gap-[100px] px-[100px] py-[50px]'>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold text-pink-500'>Free transfers and withdrawals</h1>
          <p className='w-[300px]'>Withdraw or transfer anytime you need to.</p>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold text-pink-500'>Manage your money</h1>
          <p className='w-[300px]'>Organise, separate, name and categorise your emergency funds with Labels in Flex Naira.</p>
          <img src="/quicksave.png" alt="" width={150}/>
        </div>
        <div className='bg-gray-300 h-[400px] text-pink-500'>
          <h1 className='text-4xl font-semibold'>Earn interest</h1>
          <p className='w-[300px]'>We believe that every money you have saved should be earning you interests, even if it's an emergency fund.</p>
          <img src="/withdraw.png" alt="" width={150}/>
        </div>
        </section>
      </div>
      </motion.div>
    </div>
  )
}

export default Flexnaira