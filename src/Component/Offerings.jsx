import React from 'react'
import './offerings.css'
import handlove from '../assets/hand-love.png'

const Offerings = () => {
  return (
    <div>
        <section className="best-deals mt-5">
          <div className="container">
            <div className="deal-content ps-5">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 pt-3">
                  <p className="text-white fs-18 fw-600 p1">Offering</p>
                  <h2 className="fs-62 text-white fw-600 ">Best Deals</h2>
                  <div className="col-sm ps-0"> 
                    <p className="text-white fs-18 fw-600 p2" >On Flight bookings</p>
                  </div>
                
                </div>
                <div className="col-md-6 deal-img text-center">
                  <img src={handlove} className="img-fluid" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section> 
    </div>
  )
}

export default Offerings