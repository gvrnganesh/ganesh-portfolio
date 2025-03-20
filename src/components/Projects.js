import React from "react";
import "./Projects.css"; // Add styles if needed

const projects = [
  {
    id: "f680c5fb-a4d0-4f43-b356-785d920208df",
    name: "Music Page",
    image: "/projects/music-page-img.png",
  },
  {
    id: "86f8d60b-661b-4883-b35f-3755d96da219",
    name: "Tourism Website",
    image: "/projects/tourism-website-img.png",
  },
  {
    id: "9ed10776-db55-42ea-8bb4-634eee354b71",
    name: "Advanced Technologies",
    image: "/projects/advanced-technologies-img.png",
  },
  // Add remaining projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-img" />
            <h3 className="project-name">{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;




// import React, { useEffect, useState } from "react";
// import "./Projects.css";

// const Projects = () => {
//   const [repos, setRepos] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/gvrnganesh/repos")
//       .then((response) => response.json())
//       .then((data) => {
//         // Sorting repos by latest updated
//         const sortedRepos = data.sort((a, b) =>
//           new Date(b.updated_at) - new Date(a.updated_at)
//         );
//         setRepos(sortedRepos);
//       })
//       .catch((error) => console.error("Error fetching repos:", error));
//   }, []);

//   return (
//     <section className="projects">
//       <h2>My Projects</h2>
//       <div className="projects-grid">
//         {repos.length > 0 ? (
//           repos.map((repo) => (
//             <div key={repo.id} className="project-card">
//               <h3>{repo.name}</h3>
//               <p>{repo.description || "No description available"}</p>
//               <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//                 View on GitHub
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>Loading projects...</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;
