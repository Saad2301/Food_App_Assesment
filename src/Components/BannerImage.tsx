import React from 'react'
import pistaciafood from '../assests/Images/pistaciafood.png'

const BannerImage = () => {
  return (
    <div className='relative'>
        <span className='absolute text-[60px] leading-[73px] text-white top-[120px] left-[120px] font-Montserrat'>Food Diary</span>

        <img src={pistaciafood} alt='pistaciafood' />


      </div>
  )
}

export default BannerImage
