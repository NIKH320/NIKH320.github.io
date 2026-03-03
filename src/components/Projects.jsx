import ProjectCard from './ProjectCard'



function Projects(){

    const projects = [
        {title:"UIDAI Biometric Surge Risk Analysis",
         techstack: "TechStack:Pandas, NumPy,Matplotlib",
          description : "Processed 4.5M+ records and built weighted risk scoring framework.",
          repo: " https://github.com/NIKH320/UIDAI-Biometric-Surge-Risk-Analysis-Nikhil/tree/main"
        },
        {
            title: "Zero Trust BYOD Platform",
            techstack: "Tech Stack: Python, Scikit-learn, Node.js, React.js, ML-based Anomaly Detection",
             description :"Designed a Zero Trust-based BYOD security platform that gives employees an encrypted, isolated workspace while keeping their personal device privacy intact.",
             repo:" https://github.com/NIKH320/Cyber"
            },

        {
           title: "Fake Social Media Account Detection System",
            techstack: "Tech Stack: Python, Scikit-learn, Random Forest,Streamlit",
             description :"Completed a project to aid the detection of fraud and deception in social media platform usage as part of a social-engineering attack.",
              repo: " https://github.com/NIKH320/fake-account-detector"
        },
        {
            title: "Flight Insurance Smart Contract",
            techstack:"Tech Stack: Solidity, Remix IDE, Filecoin, Smart Contracts, Blockchain ",
            description: "Deployed Solidity contract implementing escrow payout logic.",
            repo: " https://github.com/NIKH320/flight-insurance-dapp"
        }
    ]

 return(

    <section id='projects' className="bg-white max-w-5xl mx-auto my-12 p-10 rounded-2xl shadow-lg border border-gray-100"> 
        
        <div className="max-w-5xl mx-auto">

             <h2 className="text-3xl font-bold mb-8 text-slate-800">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">

         
       
        { projects.map((project,index)=> (

            <ProjectCard
              key = {index}
              title={project.title}
              techstack={project.techstack}
              description = {project.description}
              repo = {project.repo}
            />

        ))}

            </div>
        </div>

    </section>
 )


}

export default Projects