
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navmenu">
          <div className="">
          <ul className=''>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/Bestprice">Get Bestprice</NavLink></li>
            </ul>
          </div>
           
        </div>
          
    </div>
  )
}

export default Navbar