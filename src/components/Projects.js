import React from "react";
import "./Projects.css"; // Add styles if needed

const projects = [
  {
    id: 0,
    name: "Music Page",
    image: "/projects/music-page-img.png",
  },
  {
    id: 1,
    name: "Tourism Website",
    image: "/projects/tourism-website-img.png",
  },
  {
    id: 2,
    name: "Advanced Technologies",
    image: "/projects/advanced-technologies-img.png",
  },
  {
    id: 3,
    name: "Robotics",
    image: "/projects/robotics-img.png",
  },
  {
    id: 4,
    name: "Food Munch",
    image: "/projects/food-munch-img.png",
  },
  {
    id: 5,
    name: "Happy Meals",
    image: "/projects/happy-meal-img.png",
  },
  {
    id: 6,
    name: "Mobile Store",
    image: "/projects/mobile-store-img.png",
  },
  {
    id: 7,
    name: "VR Website",
    image: "/projects/vr-website-img.png",
  },
  {
    id: 8,
    name: "Dream Car",
    image: "/projects/dream-car-img.png",
  },
  {
    id: 9,
    name: "Gallery App",
    image: "/projects/gallery-app-img.png",
  },
  {
    id: 10,
    name: "Chat Screen",
    image: "/projects/chat-screen-img.png",
  },
  {
    id: 11,
    name: "Blogs List",
    image: "/projects/blogs-list-img.png",
  },
  {
    id: 12,
    name: "Chat Bot",
    image: "/projects/chat-bot-img.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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
