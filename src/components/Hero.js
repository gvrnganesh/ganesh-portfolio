// import React from "react";
// import "./Hero.css";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <h1>Hi, I'm Ganesh 👋</h1>
//       <p>A Frontend Developer who loves crafting amazing UIs 🚀</p>
//       <a href="#projects" className="cta-button">View My Work</a>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Left: Profile Picture */}
      <div className="hero-left">
        <img src="/projects/profile_pic.png" alt="Ganesh" className="profile-pic" />
      </div>

      {/* Right: Introduction */}
      <div className="hero-right">
        {/* Floating Hand Wave Emoji */}
        <div className="wave">👋</div>

        {/* Animated Text */}
        <h1>Hi, I'm Ganesh</h1>
        <p>A Frontend Developer who loves crafting amazing UIs 🚀</p>

        {/* Call-to-Action Button */}
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
