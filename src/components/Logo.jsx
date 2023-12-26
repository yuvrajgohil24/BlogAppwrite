import React from 'react'

function Logo({ width = '40px' }) {
  return (
    <div>
        <img src='../public/logo.png' width={width} className='rounded-md' />
    </div>
  )
}

export default Logo
