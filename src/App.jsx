import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Reviewtool from './components/Reviewtool';
// Pages
import Home from './pages/Home';
import UserGuide from './pages/User';
import PrivacyPolicy from './pages/Privacy';
import Blog from './pages/Blogs';
import Contactus from './pages/Contactus';
import DRLTool from './components/DRLTool';
import ScrollToTop from './components/ScrollToTop';
import Signup from './Signup';
import Login from './Login';
import Forgetpass from "./Forgetpass";
import ChosePlan from './components/ChosePlan';
import Successful from './pages/Successful';
import Cancel from './pages/Cancel';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen  flex flex-col bg-white">

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <div className=" ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-guide" element={<UserGuide />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contactus />} />
             <Route path="/login" element={<Login />} />  
            {/* ReviwTool + checkout route here */}
            <Route path="/reviewtool" element={<Reviewtool />} />
            <Route exact path='/drl' element={<DRLTool/>}/>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup />} />
           
            <Route path="/forgot-password" element={<Forgetpass />} />
             <Route path="/chooseplan" element={<ChosePlan />} />
            <Route path="/successful" element={<Successful />} />
            <Route path="/cancel" element={<Cancel />} />
                
          </Routes>
         
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
