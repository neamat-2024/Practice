import React,{useState} from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import Datepicker from '../../Component/Datepicker'
import { useParams,useSearchParams } from 'react-router-dom'

const Contact = () => {
  const [searchParams, setSearchParams]=useSearchParams();
  const[name,setname]=useState("");
  const[from,selectfrom]=useState("");
  const[to,selectto]=useState("");

  const handlesubmit =(e)=>{e.preventDefault();
    setSearchParams({Name: name,FromCity:from, TOCity: to });

  }
  //const{ userid }=useParams();
  return (
    
    <div>
        <Navbar/>
        <div className='mt-4'>
        <h1>This is Contactpage</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero, laboriosam maiores iure harum architecto saepe porro quos molestias ea illo eos, doloribus nihil neque eius iste id quisquam voluptas.</p>
        user
        <div className='mb-5'>
          <h1>Username</h1>
          <form onSubmit={handlesubmit}>
            <input type="text" value={name} placeholder='Enter name' onChange={(e)=>{setname(e.target.value)}}/>
          </form>
          <form onSubmit={handlesubmit} className='mt-3'>
            <div className='mt-3 mb-3'><label for="Select from City">From:</label>
              <select onChange={handlesubmit} value={selectfrom} onChange={(e)=>{selectfrom(e.target.value)}} id="fromcity" name="carlist" form="carform" >
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="sylhet">Sylhet</option>
                <option value="cox'sbajar">Cox's Bajar</option>
              </select>
            </div>
          </form> 
          <form onSubmit={handlesubmit} className='mt-3'>
            <div className='mt-3 mb-3'><label for="Select to City">To:</label>
              <select onChange={handlesubmit} value={selectto} onChange={(e)=>{selectto(e.target.value)}} id="tocity" name="carlist" form="carform" >
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="sylhet">Sylhet</option>
                <option value="cox'sbajar">Cox's Bajar</option>
              </select>
            </div>
            <button type="submit" target="blank" className=''>Submit</button>
          </form> 

        </div>
        {/* <h1>{searchParams.get("id")}</h1>
        <h1>{searchParams.get("age")}</h1>
        <h1>{searchParams.get("name")}</h1> */}
        <Datepicker/>
        <Footer/>
        </div>
        
    </div>
  )
}

export default Contact