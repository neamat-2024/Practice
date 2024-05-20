import './search.css'
import {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Navbar from './Navbar'


const Search = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  return (
    <div className='container search'>
        <section className="header-content pt-5 mt-3">
        <div className="menu-content">
                <h1 className="text-center fw-800 black-color pb-3 fs-sm-32 ">It’s more than <br/>
                    just a trip</h1>
                
                <div className="container search-section pt-4 ps-4 pb-5 mb-5">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <i className="fa-regular fa-paper-plane me-2"></i>
                            Flight</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <i className="fa-regular fa-building me-2"></i>
                            Hotel</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                            <i className="fa-regular fa-map me-2"></i>
                            Visa</button>
                        </li>
                      </ul>
                      

                    <div className="form-check form-check-inline pt-3 ">
                        <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" for="inlineRadio1">One Way</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" for="inlineRadio2">Round Trip</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                        <label className="form-check-label" for="inlineRadio3">Multicity</label>
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-3">
                        <div className="form-floating">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Dhaka</option>
                            <option value="1">Jessore</option>
                            <option value="2">Sylhet</option>
                            <option value="3">Chittagong</option>
                          </select>
                          <label for="floatingSelectGrid">From City</label>
                        </div> 
                      </div>
                      <div className="col-md-3 pt-3 pt-md-0">
                      <div className="form-floating ">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                          <option selected>Chittagong</option>
                          <option value="1">Dubai</option>
                          <option value="2">India</option>
                          <option value="3">China</option>
                        </select>
                        <label for="floatingSelectGrid">To</label>
                      </div> 
                    </div>
                  <div className="col-md-3 pt-3 pt-md-0">
                            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} 
                            placeholderText='Select Your Date'
                            dateFormat="dd/MM/yyyy"
                            //minDate={new Date()}
                            //maxDate={new Date()}
                            //filterDate={date=>date.getDay()!=6 && date.getDay()!=0}
                            showYearDropdown
                            showMonthDropdown
                            //showTimeSelect
                            //showTimeSelectOnly
                            scrollableMonthYearDropdown
                            className='red-border'
                           />
                </div>
                <div className="col-md-3 pt-3 pt-md-0">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelectGrid">Works with selects</label>
                  </div> 
                </div>
                    </div>
  
              </div>        
      </div>
      <div className="searchbutton text-center">
        <button type="button" className="btn ">Search</button>
      </div>  
    </section>
    </div>
  )
}

export default Search