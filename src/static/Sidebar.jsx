import React from 'react'
import Button from "../reuseable/Button"
import { Link } from 'react-router-dom'
import { RiArrowDropDownFill } from "react-icons/ri";
const Sidebar = ({showToggle}) => {
  return (
    <div className='bg-amber-300 min-h-[500px] flex items-center justify-center hidden max-mobile:block'>
      <div className=' flex flex-col gap-[20px] items-center'>
        <nav className='flex items-center'>
          <span className='hidden max-mobile:block'>Save</span>
          <span className='hidden max-mobile:block'><RiArrowDropDownFill size={20}/></span>
        </nav>
        <nav className='hidden max-mobile:block'>
        <Link onClick={showToggle} to="/invest">
        Invest
        </Link> </nav>
        <nav className='hidden max-mobile:block'>
        <Link onClick={showToggle} to="/stories">
        Stories
        </Link> </nav>
        <nav className='hidden max-mobile:block'>
        <Link onClick={showToggle} to="/faqs">
        FAQs
        </Link> </nav>
        <nav className='flex items-center'>
          <span className='hidden max-mobile:block'>Resources</span>
          <span className='hidden max-mobile:block'><RiArrowDropDownFill size={20}/></span>
        </nav>
        <main className='max-tablet:block hidden'>
        <Button title="sign in"
            bgcolor="white"
            textcolor="black"
            borderColor="black"/>
            <Button
            title="create free account"
            bgcolor=" black"
            textcolor="white"/>
        </main>

      </div>
    </div>
  )
}

export default Sidebar