function Skills() {

  const skills = [
    "Java",
    "C",
    "Python",
     "React.js",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT Authentication",
    "SQL",
    "MongoDB",
    "Pandas"
  ]

  return (
    <section id="skills" className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-slate-800">Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills