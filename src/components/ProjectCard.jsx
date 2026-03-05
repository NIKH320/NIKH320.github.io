function ProjectCard({ title,techstack ,description,repo }) {
  return (
     <div className="bg-white p-6 rounded-xl shadow-md border border-black/20 flex flex-col justify-between h-full max-w-xl">
      <div>

          <h3 className="text-xl font-semibold mb-2 text-slate-900 mb-4">{title}</h3>
     
      
      <div  className="flex flex-wrap gap-2 mb-3">
         {techstack.map((tech,index) =>(
              <span 
              key={index}
               className="text-xs bg-slate-100 px-3 py-1 rounded-full border border-black/10"
              >
                
                {tech}
                </span>
         ))}
      </div>


      <ul className="list-disc ml-5 text-gray-700 space-y-1">
         {description.map((point,index) =>(
              <li key={index}>{point}</li>
         ))}
      </ul>



      <a 
      href={repo}
      target="_blank"
      rel= "noopener noreferrer"
       className="mt-4 inline-block bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-700 transition"
    >
       GitHub Repo
      </a>

      
      </div>
     
    </div>
  )
}

export default ProjectCard