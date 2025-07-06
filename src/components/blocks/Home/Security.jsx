import React from 'react'
import { HiArrowTurnDownRight } from "react-icons/hi2";

const Security = () => {
  return (
    <div className='flex items-center gap-[20px]'>
       <section className='bg-amber-200'>
        <img src="/lock.png" alt="" className='w-[100px]'/>
       </section>
       <section>
        <h3 className='text-2xl font-bold'>Your security is our priority</h3>
        <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</p>
        <h5 className='flex gap-2 font-bold'> <HiArrowTurnDownRight size={20}/> More on our security measures</h5>
       </section>
    </div>
  )
}

export default Security