import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      
      <div className="max-w-6xl mx-auto px-8 py-8 text-center">


       <div>
              <p className="text-xl font-semibold text-white mb-2">
          Nikhil Damahe
        </p>

        <p className="text-gray-400 mb-4">
          Full-Stack Developer | REST APIs | System Design | Data Analytics
        </p>
       </div>

       

        <div className="flex justify-center items-center gap-8  pt-4 mt-4">
          <a
            href="https://github.com/NIKH320"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base flex items-center gap-2 hover:text-blue-400 transition"
          >
             <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-mehtapsing-damahe-bb201232b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhildamahe26@gmail.com"
            className="text-base flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaEnvelope size={20} />
            Mail
          </a>
        </div>



        <div >

          <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Nikhil Damahe. All rights reserved.
        </p>

        </div>

        

      </div>
    </footer>
  )
}

export default Footer