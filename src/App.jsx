
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './Pages/Homepage/Homepage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Contact from './Pages/Contact/Contact';
import Searchresult from './Pages/Searchresult/Searchresult';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./Pages/Notfoundpage/Notfound";
import Bestprice from "./Pages/Bestprice/Bestprice";
import Search from "./Component/Search";



const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Homepage/>}/>
          <Route path="/searchresult" element={<Searchresult/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/bestprice" element={<Bestprice/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App