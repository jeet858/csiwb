import Image from 'next/image'
import React from 'react'
import banner from "../../../images/About.jpeg"

const Banner:React.FunctionComponent = () => {
  return (
    <div>
      <Image src={banner} alt='' className='w-screen'/>
    </div>
  )
}

export default Banner
