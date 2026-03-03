function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      
      <div className="max-w-6xl mx-auto px-8 py-8 text-center">

        <p className="text-lg font-medium text-white mb-2">
          Nikhil Damahe
        </p>

        <p className="text-sm mb-4">
          Backend & Full-Stack Developer | REST APIs | System Design | Data Analytics
        </p>

        <div className="space-x-6">
          <a
            href="https://github.com/NIKH320"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-mehtapsing-damahe-bb201232b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="/Resume_NikhilDamahe_SDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Resume
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Nikhil Damahe. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer