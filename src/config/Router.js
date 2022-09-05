import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import About from "../components/about/About"
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Services from "../components/services/Services";
const Router = () => {
  return (
    <div>
        <BrowserRouter>
   <Header/>

        <Routes>
            <Route path ="/" element ={ <Intro/>}/>
        </Routes>
        <Routes>
            <Route path ="1" element ={ <Services/>}/>
        </Routes>
        <Routes>
            <Route path ="2" element ={ <About/>}/>
        </Routes>
        <Routes>
            <Route path ="3" element ={ <Contact/>}/>
        </Routes>
   <Footer/>
   </BrowserRouter>
   </div>
   
  )
}

export default Router
