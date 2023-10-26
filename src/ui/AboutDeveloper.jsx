import React from 'react'
import take01 from '../../public/take01.png'
import vector from '../../public/vector.svg'
import { MdFacebook } from 'react-icons/md'
import { FaReact } from 'react-icons/fa6'
import { SiJavascript, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { BiLogoLinkedin, BiLogoTelegram, BiLogoWhatsapp } from 'react-icons/bi'


function AboutDeveloper() {
  return (
      <div className='relative flex flex-col items-center justify-center space-y-4'>
          <span className=" cursor-pointer w-20 bg-yellow-500 rounded-full"><img className='w-20 rounded-full' src={take01} alt="" /></span>
          <h1>I&apos;m Takesure</h1>
          <p>Frontend Developer</p>
          <span className='flex gap-3 text-3xl'>
              <FaReact className='fill-purple-500'/>
              <SiRedux className='fill-purple-500' />
              <SiTailwindcss className='fill-blue-500' />
              <SiJavascript className='fill-yellow-500' />
              <SiTypescript className='fill-blue-500' />
          </span>
          <p className='w-80 flex justify-center items-center text-center'>I&apos;m based in Tomsk, Russia. I strive to build immersive and
              beautiful web applications through carefully crafted code and
              user-centric design.</p>

          <div className='cursor-pointer flex space-x-4 items-center justify-center'>
              <MdFacebook />
              <BiLogoLinkedin />
              <BiLogoTelegram />
              <BiLogoWhatsapp className='fill-green-500' />
          </div>
          <img src={vector} alt="vector" className='absolute left-0 top-0 bg-stone-100 w-10'/>
          <img src={vector} alt="vector" className='absolute left-0 bottom-0 bg-stone-100 w-10'/>
          <img src={vector} alt="vector" className='absolute right-0 bottom-0 bg-stone-100 w-10'/>
          <img src={vector} alt="vector" className='absolute right-0 top-0 bg-stone-100 w-10'/>
    </div>
  )
}

export default AboutDeveloper