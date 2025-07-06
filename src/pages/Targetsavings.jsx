import React from 'react'
import Pages from '../reuseable/Pages'
import Button from '../reuseable/Button'
import { motion } from 'framer-motion'
const Targetsavings = () => {
  return (
    <div>
      <motion.div
          initial={{ opacity:0, y: -50 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
      <div className='bg-green-600 h-screen flex items-center gap-[100px] px-[100px] '>
        <section>
      <Pages
      title="Target Savings"
      text="Goal-oriented Savings"
      description="Reach all your unique savings goals individually, or as a group. Earn up to 12% p.a."/>
       <main className='flex'>
      <Button title="Get on iphone"/>
      <Button title="Get on android"/>
      </main>
      </section>
      <section>
        <img src="/greenphone.png" alt="" className='w-[400px]' />
      </section>
      </div>

      <div>
        <div className='text-center'>
        <h1 className='text-5xl font-bold text-green-600'>Save towards multiple goals</h1>
        <p>Target Savings helps you get there faster. You can even team up with others to reach a collective target.</p>
        </div>

        <section className='flex gap-[100px] px-[100px] py-[50px]'>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold text-green-600'>Your target(s), your rules</h1>
          <p className='w-[300px]'>Customise the rules and duration of your target savings as you wish. From public mode, automated savings, to multiple targets, you’re in control. </p>
        </div>

        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold text-green-600'>Save with a group          </h1>
          <p className='w-[300px]'>Challenge yourself to meet your goals by saving towards a common goal with a group. No one has access to your funds but you.</p>
          <img src="/quicksave.png" alt="" width={150}/>
        </div>
        <div className='bg-gray-300 h-[400px]'>
          <h1 className='text-4xl font-semibold text-green-600'>Daily interest accrued</h1>
          <p className='w-[300px]'>Earn 12% per annum to help you reach your goal faster. Think of it as a reward for meeting your target.</p>
          <img src="/withdraw.png" alt="" width={150}/>
        </div>
        </section>
      </div>
      </motion.div>
    </div>
  )
}

export default Targetsavings