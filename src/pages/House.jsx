import React from 'react'
import Pages from '../reuseable/Pages'
import Button from '../reuseable/Button'
import { motion } from 'framer-motion'

const House = () => {
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
      title="House Money"
      text="Semi-Strict Wallet"
      description="Semi-strict wallet to save for your house rent and bills. Earn up to 14% interest p.a"/>

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
        <img src="/housemoney.png" alt="" className='w-[400px]' />
      </section>
      </div>
      </motion.div>
    </div>
  )
}

export default House