import React from 'react'
import Button from '../reuseable/button'
import { RiArrowDropDownFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const showToggle = () => {
    setToggle((toggle) => !toggle)
  };
  return (
    <>
    <div className='flex justify-between max-tablet:bg-amber-700  py-6'>
        <div className='max-w-[1280px] gap-7 mx-auto flex items-center justify-between'>
        <section className='flex gap-5 items-center '>
          <img src="../logo.png" alt="logo"/> 
  
            <div className='relative inline-block group cursor-pointer'>
            <div className=' flex gap-2 items-center'>
              <span className='hidden tablet:block'>Save</span>
              <span className='hidden tablet:block transition-transform group-hover:rotate-180'><RiArrowDropDownFill size={20}/></span>
            </div>
            <div className='  bg-amber-100 flex flex-col gap-[30px] absolute w-[400px] hidden group-hover:flex'>
              <div className='flex gap-[100px] px-[40px]'>
            <main><Link to="/piggybank"><img src="/target.png" alt="" className='w-10 h-10'/>
            <h4> Piggybank </h4> <p>Automated Savings</p></Link></main>

              <main><Link to="/safelock"><img src="/lock.png" alt="" className='w-10 h-10'/>
              <h4> Safelock </h4> <p>Fixed Savings</p></Link></main>
              </div>
               
               <div className='flex gap-[100px] px-[40px]'>
              <main><Link to="/targetsavings"><img src="/target.png" alt="" className='w-10 h-10'/>
              <h4> Target Savings </h4> <p>Goal-oriented Savings</p></Link></main>

              <main><Link to="/flexnaira"><img src="/piggy.png" alt="" className='w-10 h-10' />
              <h4> Flex Naira </h4> <p>Flexible Savings</p></Link></main>
              </div>

             <div className='flex gap-[100px] px-[40px]'>
              <main><Link to="/flexdollar"><img src="/dollar.png" alt="" className='w-10 h-10' />
              <h4> Flex Dollar </h4> <p>Dollar Savings</p></Link></main>

              <main><Link to="/house"><img src="/house.png" alt="" className='w-10 h-10'/>
              <h4> House Money </h4> <p>Semi-Strict Wallet</p></Link></main>
              </div>
              </div>
             </div>
            <div className='hidden tablet:block'><Link to="/invest">Invest</Link></div>
            <div className='hidden tablet:block'><Link to="/stories">Stories</Link></div>
            <div className='hidden tablet:block'><Link to="/faqs">FAQs</Link></div>
             

             <div className='relative inline-block group'>
              <div className='flex items-center cursor-pointer'>
                <span className='hidden tablet:block'>Resources</span>
                <span className='hidden tablet:block transition-transform group-hover:rotate-180'><RiArrowDropDownFill size={20}/></span>
              </div>

              <div className='bg-amber-100 flex flex-col gap-[30px] absolute w-[350px] hidden group-hover:flex '>
                <div className='flex gap-[100px] px-[40px]'>
                  <main>
                  <img src="/blog.svg" alt=""  className='w-10 h-10'/>
                  <h4>Blog</h4>
                  </main>
                 
                  <main>
                  <img src="/flower.svg" alt=""  className='w-10 h-10'/>
                  <h4>Reports</h4>
                  </main>
                  </div>
                  
                  <div className='flex gap-[100px] px-[40px]'>
                <main>
                  <img src="/blog.svg" alt=""  className='w-10 h-10'/>
                  <h4>Comics</h4>
                  </main>
                  

                <main >
                  <img src="/cal.svg" alt=""  className='w-10 h-10'/>
                  <h4>Calculator</h4>
                  </main>
                  </div>
                 
                  <div className='flex gap-[100px] px-[40px]'>
                <main >
                  <Link to="/newsletter">
                  <img src="/newsletter.svg" alt=""  className='w-10 h-10'/>
                  <h4>Newsletter</h4>
                  </Link>
                  </main>
                  
               
                <main>
                  <img src="/ebook.svg" alt=""  className='w-10 h-10'/>
                  <h4>E-book</h4>
                  </main>
                  </div>
              </div>
             </div>
             <div className='hidden tablet:block'><Link to="/shop">Shop</Link></div>
            
  
        </section>
        <div className='hidden tablet:block'>
        <section className='gap-5 flex'>
            <Button title="sign in"
            bgcolor="white"
            textcolor="black"
            borderColor="black"/>
            <Button
            title="create free account"
            bgcolor=" black"
            textcolor="white"/>
        </section>
        </div>
        <section className='max-mobile:block py-[30px] absolute hidden right-7 '>
          {toggle ? (
            <RxCross1 size={35} onClick={showToggle}/>
      ) : (
        <RxHamburgerMenu size={35} onClick={showToggle}/>
      )}
        </section>
        </div>
        </div>

        <div>
          {toggle && <Sidebar showToggle={showToggle}/>}
        </div>
        </>
  )
}

export default Header