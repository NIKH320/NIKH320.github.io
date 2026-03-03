function Publication(){
    
     return(

        <section id="Publication"  className="bg-white max-w-5xl mx-auto my-12 p-10 rounded-2xl shadow-lg border border-black/20">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 mb-6">My Publications</h2>

     <div className="space-y-4 text-gray-700">

      <p className="text-gray-700 leading-relaxed">Title: Comparative Analysis of 5G Technologies </p>
      <p className="text-gray-700 leading-relaxed">Presented at IEEE ICEC2NT 2025, D.Y. Patil,Pune </p>
      <p className="text-gray-700 leading-relaxed">Analyzed NOMA, RIS, THz communication, and MIMO systems based on SINR, BER, and outage probability metrics to evaluate next-generation wireless network performance.</p>
      

      {/* <p className="text-gray-700 leading-relaxed">
    
        <a href=
           className="text-blue-600 hover:underline ml-2"
         target="_blank">
          Publication Link 
        </a>
      </p> */}

       <a 
      href="https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fdoi.org%2F10.1109%2FICEC2NT65402.2025.11379947&urlhash=Zkyi&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BS9OhiJNGR1qxTBKQ4AVYTQ%3D%3D"
      target="_blank"
      rel= "noopener noreferrer"
       className="mt-4 inline-block bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-700 transition"
    >

          Show Publication 
      </a>

     


</div>
      
    </section>
     )
   
}

export default Publication