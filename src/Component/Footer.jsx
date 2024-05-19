import './Footer.css'
import logo from '../assets/Wordmark.png'
import gplay from '../assets/google play.png'
import appstore from '../assets/app store.png'

const Footer = () => {
  return (
    <div className='pt-5 footer'>
        <section className="footer mt-5 pt-3 mb-5">
    <div className="container footer-text">
      <div className="row">
        <div className="col-md-2 pb-4 pb-md-0">
          <a href="#"><img src={logo} alt="" className="img-fluid"/></a>
          
        </div>
        <div className="col-md-2 pb-4 pb-md-0">
          <ul>
            <h4 className="fw-700 grey-color fs-18">About</h4>
            <li> <a href="#">About Flight Expert</a> </li>
            <li><a href="#">How it works </a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Forum</a></li>
          </ul>
        </div>
        <div className="col-md-3 pb-4 pb-md-0">
          <ul>
            <h4 className="fw-700 grey-color fs-18">Partner with us</h4>
            <li> <a href="#">Partnership programs</a> </li>
            <li><a href="#">Affiliate program</a></li>
            <li><a href="#">Connectivity partners</a></li>
            <li><a href="#">Promotions and events</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Loyalty program</a></li>
          </ul>
        </div>
        <div className="col-md-3 pb-4 pb-md-0">
          <ul>
            <h4 className="fw-700 grey-color fs-18">Support</h4>
            <li> <a href="#">Help Center</a> </li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Trust and safety</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className="col-md-2 pb-4 pb-md-0">
          <ul>
            <h4 className="fw-700 grey-color fs-18">Get the app</h4>
            <li> <a href="#">Flight Expert for Android</a> </li>
            <li><a href="#">Flight Expert for iOS</a></li>
            <li><a href="#">Mobile site</a></li>
            <div className="applink mt-4">
              <li><a href="https://play.google.com/store/apps?hl=en&gl=US" target="_blank">
                <img src={gplay} alt=""/>
              </a></li>
              <li><a href="https://www.apple.com/app-store/" target="_blank">
                <img src={appstore} alt=""/>
              </a></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Footer