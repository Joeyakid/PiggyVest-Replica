import React from 'react'
import Pages from '../reuseable/Pages'
import Button from '../reuseable/Button'
import { motion } from 'framer-motion'

const Safelock = () => {
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
      title="Safelock"
      text="Fixed Savings"
      description="Lock funds away for a fixed period of time to avoid spending temptation. Earn up to 20% p.a. paid upfront.."/>
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
        <h1 className='text-5xl font-bold '>Stay disciplined and avoid temptation</h1>
        <p>Lock funds to avoid temptations. Earn your interest upfront and paid instantly.</p>
        </div>

        <section className='flex gap-[100px] px-[100px] py-[50px]'>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>You’re in control</h1>
          <p className='w-[300px]'>You can lock for as little as 10 days or as much as 365 days.</p>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Manage your money</h1>
          <p className='w-[300px]'>Set aside funds for a fixed period of time without having access to it until maturity.</p>
          <img src="/quicksave.png" alt="" width={150}/>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold'>Earn interest upfront</h1>
          <p className='w-[300px]'>Up to 20% interest per annum, paid upfront.</p>
          <img src="/withdraw.png" alt="" width={150}/>
        </div>
        </section>
      </div>
      </motion.div>
    </div>
  )
}

export default Safelock