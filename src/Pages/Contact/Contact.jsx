import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
    setSearchParams({Name: name,OriginAirport:from, DestinationAirport: to });

  }
  //const{ userid }=useParams();
  return (
    
    <div>
        <Navbar/>
        <div className='mt-4'>
        <h1>This is Contactpage</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero, laboriosam maiores iure harum architecto saepe porro quos molestias ea illo eos, doloribus nihil neque eius iste id quisquam voluptas.</p>
        <div className='mb-5'>
          <div className=" align-items-center">
            <div className="col-md-4">
              
              {/* <form onSubmit={handlesubmit}>
                <label for="name" className='me-3'>Enter Name :</label>
                <input type="text" value={name} placeholder='Enter name' onChange={(e)=>{setname(e.target.value)}}/>
              </form> */}

              <Form onSubmit={handlesubmit} className='mt-4'>
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control type="name" size="lg" placeholder="Enter Name" value={name} onChange={(e)=>{setname(e.target.value)}} />
              </Form>

              <Form onSubmit={handlesubmit} className='mt-4'>
                <Form.Label>Select Origin Airport</Form.Label>
                  <Form.Select size="lg" onSubmit={handlesubmit} className='' value={from} onChange={(e)=>{selectfrom(e.target.value)}}>
                      <option>Select Airport</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="doha">Doha</option>
                      <option value="saidpur">Saidpur</option>
                  </Form.Select>
              </Form>

              <Form onSubmit={handlesubmit} className='mt-4'>
                <Form.Label>Select Your Destination</Form.Label>
                  <Form.Select size="lg" onSubmit={handlesubmit} className='' value={to} onChange={(e)=>{selectto(e.target.value)}}>
                      <option>Select Airport</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="doha">Doha</option>
                      <option value="saidpur">Saidpur</option>
                  </Form.Select>
                <Button variant="primary" type="submit" className='mt-4 text-end'>Submit</Button>
              </Form>
              
            </div>
          </div>
          
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