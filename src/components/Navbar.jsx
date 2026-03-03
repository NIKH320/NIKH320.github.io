function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-6">

        <h1 className="text-2xl font-semibold tracking-wide">
          Nikhil Damahe
        </h1>

        <div className="space-x-8 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar