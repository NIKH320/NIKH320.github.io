function ProjectCard({ title,techstack ,description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <h3 className="text-gray-600">{techstack}</h3>
      <p className="text-gray-600">{description}</p>


      <a 
      href={github}
      target="_blank"
      rel= "noopener noreferrer"
      className="inline-block bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition">

       GitHub Repo
      </a>
    </div>
  )
}

export default ProjectCard