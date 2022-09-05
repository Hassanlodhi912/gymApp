import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import GoToTop from "./components/GoToTop";
const App = () => {
  
  return (
   <div>
   <Header/>
   <Intro/>
   <Services/>
   <About/>
   <Contact/>
   <GoToTop/>

   <Footer/>
 
   </div>
   
  )
}

export default App
