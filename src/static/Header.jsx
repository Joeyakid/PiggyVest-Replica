import React from 'react'
import Button from '../reuseable/button'
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className='flex justify-between max-tablet:bg-amber-700 px-10 py-6'>
        <div className='max-w-[1280px] gap-7 mx-auto flex items-center'>
        <section className='flex gap-5 items-center'>
          <img src="../logo.png" alt="logo"/>
            <div className='flex gap-2 items-center '>
              <span className='hidden tablet:block'>Save</span>
              <span className='hidden tablet:block'><RiArrowDropDownFill size={20}/></span>
            </div>
            <div className='hidden tablet:block'><Link to="/invest">Invest</Link></div>
            <div className='hidden tablet:block'><Link to="/stories">Stories</Link></div>
            <div className='hidden tablet:block'><Link to="/faqs">FAQs</Link></div>
            <div className='flex gap-2 items-center'>
              <span className='hidden tablet:block'>Resources</span>
              <span className='hidden tablet:block'><RiArrowDropDownFill size={20}/></span>
            </div>
        </section>
        <section className='flex gap-5'>
            <Button title="sign in"
            borderColor="black"/>
            <Button
            title="create free account"
            bgcolor=" blue"
            textcolor="white"/>
        </section>
        <section className='max-mobile:block hidden'>
        <RxHamburgerMenu size={35}/>
        </section>
        </div>
        </div>
  )
}

export default Header