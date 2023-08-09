import React from 'react'
import  Cards  from '../compontents/Cards'
import './cards.css'
function Services() {
  return (
    <div className='services'>
      <h2 className='text-center p-4'>Services</h2>
      <div className='services-cards'>
<Cards />
<Cards />
<Cards />
      </div>
    </div>
  )
}

export default Services
