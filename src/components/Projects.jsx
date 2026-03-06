import ProjectCard from './ProjectCard'



function Projects(){

    const projects = [
        {
        title:"UIDAI Biometric Surge Risk Analysis ",
         techstack: ["Pandas", "NumPy","Matplotlib","Data Analysis"],
          description : [
                  " Processed 4.5M+ Aadhaar biometric records provided by Government of India(UIDAI) using Pandas data pipelines.",
                  " Built district-level risk scoring model based on volatility, concentration, and load metrics.",
                  "Aggregated national biometric trends using optimized groupby operations and Matplotlib visualizations."],

          repo: "https://github.com/NIKH320/UIDAI-Biometric-Surge-Risk-Analysis-Nikhil/tree/main"
        },
        {
            title: "Zero Trust BYOD Platform",
            techstack: [" Python","Scikit-learn", "Node.js", "React.js", "Isolation Forest"],
             description :["Designed a Zero Trust-based BYOD security platform that gives employees an encrypted, isolated workspace while keeping their personal device privacy intact.",
                "Designed REST APIs using Node.js and Express for secure device access.Implemented AES-GCM encryption for secure virtual drive management.",
            "Integrated anomaly detection model to identify suspicious device behaviour."
           ],
             repo:"https://github.com/NIKH320/Cyber"
            },

        {
           title: "Fake Social Media Account Detection System",
            techstack: [" Python","Scikit-learn", "Random Forest","Streamlit"],
             description :["Built ML classification model using Random Forest to detect fraudulent account",
                           "Preprocessed social media datasets using Pandas feature engineering pipeline.",
                        "Deployed interactive detection interface using Streamlit."],
              repo: "https://github.com/NIKH320/fake-account-detector"
        },
        {
            title: "Flight Insurance Smart Contract",
            techstack:["Solidity","Remix IDE", "Filecoin", "Smart Contracts"],
            description: ["Developed Solidity smart contract implementing escrow-based insurance payouts.",
                          "Automated claim validation and payment release using blockchain transactions.",
                          "Tested and deployed contract using Remix IDE and Filecoin network."
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