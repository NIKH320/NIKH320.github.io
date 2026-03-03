import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Skills from './components/Skills'

function App()
{
   return(
     <>
     <div className="bg-slate-50 min-h-screen">

       <Navbar/>
       <About/>
       <Skills/>
       <Projects/>
       <Publication/>
       <Contact/>
       <Footer />



     </div>
      
     </>
   )
}

export default App