import Pages from '../reuseable/Pages'
import Button from '../reuseable/Button'
import { motion } from 'framer-motion'

const Stories = () => {
//   const  [myCounter, setMyCounter] = useState(4);
//   const [toggle, setToggle] = useState(false);

//   const increaseCount = () => {
//     setMyCounter(myCounter + 1);
//   }
//   const decreaseCounter = () => {
//     setMyCounter(myCounter - 1);
//   }
//   // const toogleBox = () => {
//   //   setToggle(!toggle);
//   // }
// const squareRoot = () => {
//   setMyCounter (Math.sqrt(myCounter));
// }


  // return (
  //   <div className='bg-amber-600 flex justify-center items-center'>
  //       <h1 className='text-6xl'>Story, story, this is the story of my lifeee 
  //       </h1>
  //       <h2>Your current state value is: {myCounter}</h2>
  //       <button onClick={increaseCount}>Increase</button>
  //       <button onClick={decreaseCounter}>Decrease</button>
  //       <button onClick={squareRoot}>Show Sqrt</button>
  //       {/* {toggle ? (
  //         <button onClick={toggleBox}>
  //           Show Sqrt
  //   </button>
  //       )} */}

  //       <div className='p-20 bg-amber-400 w-80 text-center'>
  //         <h2>This is the final count</h2>
  //         <h1>{myCounter}</h1>
  //       </div>

  //   </div>
  // )
  return (
    <div>
      <motion.div
    initial={{ opacity:0, y: -50 }}
    animate={{ opacity:1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
      <div className=' h-screen flex items-center gap-[100px] px-[100px] mx-auto max-mobile:flex-wrap'>
        <section>
          <h1 className='text-6xl font-bold'>
          Loved by our Customers
          </h1>
      <Pages
      // title="Piggybank"
      // text="Automated savings"
      description="Stories of happy savers who Piggyvest has helped or is helping save for what truly matters to them."/>
       <main className='flex'>
      <Button title="Add your story"/>
      </main>
      </section>
      <section>
        <img src="/stories.png" alt="" className='w-[700px]' />
      </section>
      </div>

      <div>
        <div className='text-center'>
        <h1 className='text-5xl font-bold '>Save without thinking about it.</h1>
        <p>Enjoy automated savings, quick manual savings top up and competitive interest rates.</p>
        </div>

        <section className='flex gap-[100px] px-[100px] py-[50px] max-mobile:flex-wrap max-mobile:max-w-[300px]'>
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

export default Stories