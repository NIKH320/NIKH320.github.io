import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Skills from './components/Skills'

function App()
{
   return(
     <>
     <div className=" min-h-screen">

       <Navbar/>
       <About/>
       <Projects/>
       <Skills/>
       <Publication/>
       <Contact/>
       <Footer />



     </div>
      
     </>
   )
}

export default App