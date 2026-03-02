function ProjectCard({ title,techstack ,description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <h3 className="text-gray-600">{techstack}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ProjectCard