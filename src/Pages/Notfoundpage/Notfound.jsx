import React from 'react'
import Navbar from '../../Component/Navbar'
import errorimg from '../../assets/error.gif'

const Notfound = () => {
  return (
    <div>
        <Navbar/>
        <div className='text-center mt-5'>
          <h2 className='mb-3'>This Option is not Available..Try Later</h2>
          <img src={errorimg} alt="" className='img-fluid'/>
        </div>
    </div>
  )
}

export default Notfound