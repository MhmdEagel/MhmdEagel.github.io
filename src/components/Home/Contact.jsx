import React from 'react'
import githubLogo from "/assets/icons/Github.svg"
import linkedinLogo from "/assets/icons/Linkedin.svg"
import instagramLogo from "/assets/icons/Instagram.svg"


export default function Contact() {
  return (
    <div className='mt-4 flex gap-4 *:cursor-pointer'>
        <a href="https://github.com/MhmdEagel" className='hover:-translate-y-1 transition-all'>
            <img src={githubLogo} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/mhmdtma/" className='hover:-translate-y-1 transition-all'>
            <img src={linkedinLogo} alt="" />
        </a>
        <a href="https://www.instagram.com/mh_eagel/" className='hover:-translate-y-1 transition-all'>
            <img src={instagramLogo} alt="" />
        </a>
    </div>
  )
}
