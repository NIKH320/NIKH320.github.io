function ProjectCard({ title,techstack ,description }) {
  return (
     <div className="bg-white p-6 rounded-xl shadow-md border border-black/20 flex flex-col justify-between h-full">
      <div>

          <h3 className="text-xl font-semibold mb-2 text-slate-900 mb-6">{title}</h3>
      <h3 className="text-gray-700 leading-relaxed">{techstack}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>


      <a 
      href=""
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