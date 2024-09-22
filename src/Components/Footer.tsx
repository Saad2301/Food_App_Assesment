import React from 'react'
import footer from '../assests/Images/footer.png'
import footerLogo from '../assests/Images/footer_logo.png'

const Footer = () => {
  return (
    <div className='h-[243px] w-full mt-[96px] relative'>
        <div className='absolute top-[120px] left-[120px] leading-[24.23px] '>
        <img src={footerLogo} className='' alt='footer' />
        <span className='text-white text-[20px]'>All Rights Reserved </span>

        </div>
        <img src={footer} className='w-full' alt='footer' />
    </div>
  )
}

export default Footer
