import React from 'react'
import { useState } from 'react'

const Newsletter = () => {
    const [myName, setMyName] = useState("");
    const [email, setEmail] = useState("");

    // console.log(storage);

const submitData = (e) => {
  e.preventDefault();
  setStorage([...storage, {myName, email,}]);


  setMyName("");
  setEmail("");
};
  return (
    <div  className='relative flex justify-between m-[100px] ml-[400px]'>
        <main>
        <form onSubmit={submitData} className=" flex flex-col max-w-[500px] gap-10 justify-center">
            <input className='border-gray-[1px] border' type="text" placeholder='Your first name' value={myName} onChange={(e) => setMyName(e.target.value)} />
            <input className='border-gray-[1px] border' type="email" placeholder='Your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit' className='bg-blue-700'>SUBSCRIBE FOR FREE</button>
        </form>
        </main>

        {/* <main className='flex flex-wrap'>
          {storage.map((data, index) => (
          <div className='bg-purple-400  max-w-50 p-9 m-4' key={index}>
            <h2>
              <b> Name : {data.myName} </b>
            </h2>
            <h2>
              <i><b>Email : {data.email}</b></i>
            </h2>
          </div>
          ))}
        </main> */}
    </div>
  )
}

export default Newsletter