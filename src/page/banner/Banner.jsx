import React from 'react'

const Banner = () => {
  const banner = "https://i.ibb.co/nzSLCqg/spacejoy-c0-Jo-R-2x3-E-unsplash.jpg"
  return (
    <div>
      <img src={banner} className='h-[600px] lg:h-[800px] w-full relative' alt="" />
    </div>
  )
}

export default Banner