import React from 'react'

const Pages = ({title, description, text, image, bgColor}) => {
  return (
    <div className='flex items-center'>
        <section>
            <h1 className='font-bold text-white text-4xl '>{title}</h1>
            <p className='text-blue-700 bg-white p-2 px-[70px] rounded-3xl w-[300px]'>{text}</p>
            <h4 className='text-xl text-white w-[550px]'>{description}</h4>
            
        </section>
        <section>
            {image}
        </section>
    </div>

  )
}

export default Pages