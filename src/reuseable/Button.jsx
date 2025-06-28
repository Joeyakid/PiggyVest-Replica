import React from 'react'

const button = ({title, bgcolor, textcolor, borderColor}) => {
  return (
    <div className='hidden tablet:block'>
        <button
        style={{
            backgroundColor: `${bgcolor}`,
            color: `${textcolor}`,
            border: `1px solid ${borderColor}`
        }}
        className='w-max py-3 px-6 bg-white text-black rounded-xl'
>
    {title}


        </button>
    </div>
  )
}

export default button