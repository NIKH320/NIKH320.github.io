import ProjectCard from './ProjectCard'



function Projects(){

    const projects = [
        {
        title:"UIDAI Biometric Surge Risk Analysis ",
         techstack: ["Pandas", "NumPy","Matplotlib","Data Analysis"],
          description : [
                  " Processed 4.5M+ Aadhaar biometric records provided by Government of India(UIDAI) to identify anomalies, trends and surge patterns.",
                  " Built district-level risk scoring model based on volatility, concentration, and load metrics.",
                  "Aggregated large CSV datasets using Pandas groupby pipelines.Visualized national biometric update trends using Matplotlib "],

          repo: "https://github.com/NIKH320/UIDAI-Biometric-Surge-Risk-Analysis-Nikhil/tree/main"
        },
        {
            title: "Zero Trust BYOD Platform",
            techstack: [" Python","Scikit-learn", "Node.js", "React.js", "Isolation Forest"],
             description :["Designed a Zero Trust-based BYOD security platform that gives employees an encrypted, isolated workspace while keeping their personal device privacy intact.",
                "Implemented device compliance checks, Role-based access control (RBAC), and secure virtual drive management."],
             repo:"https://github.com/NIKH320/Cyber"
            },

        {
           title: "Fake Social Media Account Detection System",
            techstack: [" Python","Scikit-learn", "Random Forest","Streamlit"],
             description :["Completed a project to aid the detection of fraud and deception in social media platform usage as part of a social-engineering attack.",
                           "Trained a Random Forest classifier on labeled accounts using behavioral and text-based features. "],
              repo: "https://github.com/NIKH320/fake-account-detector"
        },
        {
            title: "Flight Insurance Smart Contract",
            techstack:["Solidity","Remix IDE", "Filecoin", "Smart Contracts"],
            description: ["Deployed Solidity contract implementing escrow payout logic.",
                          "Decentralized storage integrated on Filecoin for Policy documents and claim-related records for transparency."
            ],
            repo: "https://github.com/NIKH320/flight-insurance-dapp"
        }
    ]

 return(

    <section id='projects' className="bg-white max-w-5xl mx-auto my-12 p-10 rounded-2xl shadow-lg border border-black/20"> 
        
        <div className="max-w-5xl mx-auto">

             <h2 className="text-3xl font-bold mb-8 text-slate-900 mb-6">Projects</h2>

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