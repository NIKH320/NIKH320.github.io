import { AiOutlineApi } from "react-icons/ai"
import { FaDatabase, FaJava, FaKey, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { SiExpress, SiMongodb, SiPandas } from "react-icons/si"
function Skills() {

  const skills = [

      { name: "Java ", icon: <FaJava size={30} /> },
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  { name: "RESTful APIs", icon: <AiOutlineApi /> },
  { name: "JWT Authentication", icon:<FaKey/> },
  { name: "SQL", icon: <FaDatabase className="text-blue-600 text-xl" />  },
  { name: "Pandas", icon: <SiPandas className="text-purple-600 text-xl" /> }
   
    
    
    
  
  ]

  return (
    <section id="skills" className="bg-white max-w-5xl mx-auto my-12 p-10 rounded-2xl shadow-lg border border-black/20">

      <h2 className="text-3xl font-bold mb-8 text-slate-900 mb-6">Skills</h2>

     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="text-xl flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-black/10  text-center flex-wrap hover:shadow-md hover:-translate-y-1 transition"
          >
            
            {skill.icon}
            <span className="text-sm md:text-base text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills