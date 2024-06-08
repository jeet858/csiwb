import Image, { StaticImageData } from 'next/image';
import x from '/images/download.jpeg'
import y from '/images/download (1).jpeg'
import z from '/images/download (2).jpeg'
import React,{useState} from 'react'

const AdminPanel:React.FunctionComponent = () => {
    const [butt,setButt]=useState<number>(0)
    let imgSrc: StaticImageData | null = null;
    switch(butt){
        case 1:
            imgSrc=x
            break;
        case 2:
            imgSrc=y
            break;
        default:
            imgSrc=z
    }
  return (
    <div className='w-screen h-lvh flex flex-row overflow-y-hidden'>
      <div className='w-[20%] h-full bg-orange-800'>
        <button className='w-full bg-blue-700 h-[5%]' onClick={()=>(setButt(1))}>Blue</button>
        <button className='w-full bg-green-700 h-[5%]' onClick={()=>(setButt(2))}>Blue</button>
        <button className='w-full bg-red-700 h-[5%]' onClick={()=>(setButt(3))}>Blue</button>
        <button className='w-full bg-yellow-700 h-[5%]' onClick={()=>(setButt(4))}>Blue</button>
        <button className='w-full bg-lime-700 h-[5%]' onClick={()=>(setButt(5))}>Blue</button>
        <button className='w-full bg-gray-700 h-[5%]' onClick={()=>(setButt(6))}>Blue</button>
        {/* <button onClick={g}>ruhyrtdhrt</button> */}
      </div>
      <div className='w-[80%] h-lvh bg-lime-600 flex justify-center items-center'>
        <div className='w-[90%] h-[90%] bg-emerald-600 rounded-2xl'>
            {imgSrc && <Image src={imgSrc} alt=""  className='w-full rounded-2xl h-full'/>}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
