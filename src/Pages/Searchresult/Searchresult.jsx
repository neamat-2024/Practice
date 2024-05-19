import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import { useParams } from 'react-router-dom'

const Search = () => {
  const{searchresult}=useParams();
  return (
    <div>
        <Navbar/>
        <div className='container'>
          <h1 className='mt-5'>This is Search Result Page</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero, laboriosam maiores iure harum architecto saepe porro quos molestias ea illo eos, doloribus nihil neque eius iste id quisquam voluptas.</p>
          user<h1>{searchresult}</h1>
        </div> 
        <Footer/>
    </div>
  )
}

export default Search