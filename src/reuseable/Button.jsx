import React from 'react'

const Button = ({title, bgcolor, textcolor, iconTitle, borderColor}) => {
  return (
    <div>
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

export default Button