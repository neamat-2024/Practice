import React from 'react'
import './searchresult.css'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import { useParams } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Search = () => {
  const{searchresult}=useParams();
  return (
    <div>
        <Navbar/>
        <div className='container search-section mt-5'>
          <div className='select-service'>
            <Tabs
              defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">

              <div className=''></div>
              <Tab eventKey="flight" title="Flight" defaultActiveKey="flight">
                <div className="trip-type">
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
                  <div className="col-md-3">
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
                  <div className="col-md-3">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-floating ">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                              <option selected>30 May 24</option>
                            </select>
                            <label for="floatingSelectGrid">Departure</label>
                          </div> 
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating ">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Tap to Book Return</option>
                          </select>
                          <label for="floatingSelectGrid">Return</label>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
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
                </div>

              </Tab>

              <Tab eventKey="hotel" title="Hotel">
                <div className="row mt-5">
                  <div className="col-md-3">
                      <div className="form-floating">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Dhaka</option>
                            <option value="1">Bangkok</option>
                            <option value="2">Singapore</option>
                            <option value="3">London</option>
                            <option value="3">Kolkata</option>
                            <option value="3">Dubai</option>
                            <option value="3">Barisal</option>
                          </select>
                          <label for="floatingSelectGrid">City</label>
                      </div>
                  </div>

                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-6">
                          <div className="form-floating ">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                              <option selected>20 May 24</option>
                            </select>
                            <label for="floatingSelectGrid">Check In</label>
                          </div> 
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating ">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>25 May 24</option>
                          </select>
                          <label for="floatingSelectGrid">Check Out</label>
                        </div> 
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-floating ">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                              <option selected>BD</option>
                            </select>
                            <label for="floatingSelectGrid">Nationality</label>
                          </div> 
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating ">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>3 Star or More</option>
                          </select>
                          <label for="floatingSelectGrid">Hotel Ratings</label>
                        </div> 
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3">
                      <div className="form-floating ">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                          <option selected>1 Room 2 Guests</option>
                          
                        </select>
                        <label for="floatingSelectGrid">Rooms and Guests</label>
                      </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="visa" title="Visa" >
              <div className="row mt-5">
                  <div className="col-md-3">
                      <div className="form-floating">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>United Arab Emirates</option>
                            <option value="1">Bangkok</option>
                            <option value="2">Singapore</option>
                            <option value="3">London</option>
                            <option value="3">Kolkata</option>
                            <option value="3">Dubai</option>
                            <option value="3">Barisal</option>
                          </select>
                          <label for="floatingSelectGrid">Country</label>
                      </div>
                  </div>

                  <div className="col-md-3">
                          <div className="form-floating ">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                              <option selected>20 May 24</option>
                            </select>
                            <label for="floatingSelectGrid">Intended Flying Date</label>
                          </div>
                  </div>

                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-6">
                          <div className="form-floating ">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                              <option selected>BD</option>
                            </select>
                            <label for="floatingSelectGrid">Nationality</label>
                          </div> 
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating ">
                          <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>1 Traveler</option>
                          </select>
                          <label for="floatingSelectGrid">Travelers</label>
                        </div> 
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3">
                      <div className="form-floating ">
                        <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                          <option selected>BD</option>
                          
                        </select>
                        <label for="floatingSelectGrid">Country and Residence</label>
                      </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
          
        </div> 
        <Footer/>
    </div>
  )
}

export default Search