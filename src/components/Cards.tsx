import React from 'react'
import location from './assets/location.jpeg'


const Cards = (props) => {
  return (
    <div>
        <img id='propertyImg' src={props.image} alt='image' className='w-100 h-100'></img>
        <div id='propSummary' className='font-semibold'>{props.text}</div>
        <div className='flex'>
            <p id='add' className='font-light'>{props.address}</p>
        </div>
        <button id='detailsButt' className='bg-blue-500 rounded-md text-white w-20 h-10 mt-5'>Details</button>
    </div>
  )
}

export default Cards