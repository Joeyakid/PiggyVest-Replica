import React from 'react'
import Pages from '../reuseable/Pages'
import Button from '../reuseable/button'
import { motion } from 'framer-motion'

const Piggybank = () => {
    // const piggyCard = {
    //   {
    //     topic: "Save automatically",
    //     desc: "Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.",
    //   },
    //   {
    //     topic: "Save automatically",
    //     desc: "Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.",
    //   }
    //   {
    //     topic: "Save automatically",
    //     desc: "Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.",
    //   }
    // }

  return (
    <div>
      <motion.div
    initial={{ opacity:0, y: -50 }}
    animate={{ opacity:1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <div className='bg-blue-700 h-screen flex items-center gap-[100px] px-[100px] '>
        <section>
      <Pages
      title="Piggybank"
      text="Automated savings"
      description="Strict daily, weekly or monthly automatic savings. Earn up to 18% p.a."/>
       <main className='flex'>
      <Button title="Get on iphone"/>
      <Button title="Get on android"/>
      </main>
      </section>
      <section>
        <img src="/phone.png" alt="" className='w-[400px]' />
      </section>
      </div>

      <div>
        <div className='text-center'>
        <h1 className='text-5xl font-bold '>Save without thinking about it.</h1>
        <p>Enjoy automated savings, quick manual savings top up and competitive interest rates.</p>
        </div>

        <section className='flex gap-[100px] px-[100px] py-[50px]'>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Save automatically</h1>
          <p className='w-[300px]'>Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.</p>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Save on the go</h1>
          <p className='w-[300px]'>Don’t fancy automatic savings? No problem, you can manually top up your Piggybank savings at anytime, anywhere.</p>
          <img src="/quicksave.png" alt="" width={150}/>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Build discipline</h1>
          <p className='w-[300px]'>With four free withdrawal days in the year, you are less tempted to spend your savings and meet your savings goals faster.</p>
          <img src="/withdraw.png" alt="" width={150}/>
        </div>
        </section>
      </div>
      </motion.div>
    </div>
  )
}

export default Piggybank