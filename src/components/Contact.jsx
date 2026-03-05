function Contact() {
  return (
    <section id="contact"  className="bg-white max-w-5xl mx-auto my-12 p-10 rounded-2xl shadow-lg border border-black/20">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 mb-6">Contact Me</h2>

  <div className="space-y-4 text-gray-700">

      <p className="text-gray-700 leading-relaxed">Email: nikhildamahe26@gmail.com</p>
      <p className="text-gray-700 leading-relaxed">Phone: 9021927520</p>

      {/* <p className="text-gray-700 leading-relaxed">
        GitHub: 
        <a href="https://github.com/NIKH320"
           className="text-blue-600 hover:underline ml-2"
           target="_blank">
          github.com/NIKH320
        </a>
      </p> */}

      <p className="text-gray-700 leading-relaxed">
        LinkedIn: 
        <a href="https://www.linkedin.com/in/nikhil-mehtapsing-damahe-bb201232b/" 
           className="text-blue-600 hover:underline ml-2"
         target="_blank">
          LinkedIn Profile
        </a>
      </p>

      
      <p className="text-gray-700 leading-relaxed">
        Resume: 
        <a 
          href="/Resume_NikhilDamahe_SDE.pdf"
           className="text-blue-600 hover:underline ml-2"
         target="_blank">
          Download
        </a>
      </p>


       
           
      


</div>
      
    </section>
  )
}

export default Contact