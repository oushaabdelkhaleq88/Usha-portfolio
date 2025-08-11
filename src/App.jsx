import { Routes, Route } from "react-router-dom";
import Navbar from "./components/elements/NavBar.jsx";
import SplitText from "./components/TextAnimations/SplitText";
import Silk from "./components/Backgrounds/Silk.jsx";
import logo from "./logo.png";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      position: "relative",
      zIndex: 2,
      padding: "1rem"
    }}>
      {/* Main Title */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: "1.5rem", 
        width: "100%", 
        maxWidth: "1200px",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        hyphens: "auto"
      }}>
        <SplitText
          text="Hello, I am Ashraf Abdelkaleq"
          className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 px-4 leading-snug"
          style={{ 
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            whiteSpace: "normal"
          }}
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* Subtitle */}
      <div style={{ 
        textAlign: "center", 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "0 1rem", 
        width: "100%",
        wordWrap: "break-word",
        overflowWrap: "break-word"
      }}>
        <SplitText
          text="Young web developer specializing in front-end and back-end development, with a passion for creating beautiful user experiences"
          className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-white/90 leading-relaxed px-4"
          style={{ 
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            whiteSpace: "normal"
          }}
          delay={10}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* CTA Buttons */}
      <div style={{ 
        marginTop: "2rem", 
        display: "flex", 
        gap: "0.75rem", 
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "0 1rem",
        width: "100%"
      }}>
        <button 
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gray-800/80 backdrop-blur-sm text-white border border-gray-600/50 rounded-lg hover:bg-gray-700/90 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
        >
          View My Work
        </button>
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section id="about" style={{ 
      minHeight: "100vh", 
      padding: "2rem 1rem",
      display: "flex",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr", 
          gap: "2rem", 
          alignItems: "center" 
        }}
        className="lg:grid-cols-2 lg:gap-8">
          {/* Text Content */}
          <div style={{ order: 2 }} className="lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug break-words px-2">About Me</h2>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed space-y-3 sm:space-y-4 px-2">
              <p>
                I am a Student at STEM School for science and technology and also
                attending Digital Egypt Cubs Initiative and I attend the track of 
                Cyber Security, I am a self-taught web developer and i learned all 
                of the modern ways to build a responsive and interactive web applications
              </p>
              <p>
                I started coding in 2022 and i started by building and developing simple
                games on Unity and then switched to Godot after 8 months of learning c++
                and c# and then i started learning web development in 2023 and i learned
                HTML, CSS, JavaScript, React, Node.js, and MongoDB. I have a passion for
                creating beautiful and functional web applications that provide great user experiences.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and continuously learning to stay ahead in this 
                ever-evolving field.
              </p>
            </div>
          </div>
          
          {/* Profile Image */}
          <div style={{
            width: "100%",
            maxWidth: "280px",
            height: "auto",
            borderRadius: "20px",
            border: "2px solid rgba(255,255,255,0.2)",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
            margin: "0 auto",
            order: 1
          }} className="sm:max-w-sm lg:order-2 lg:max-w-none lg:w-80 xl:w-96">
            <img 
              src={logo} 
              alt="Ashraf Abdelkaleq"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block"
              }}
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Node.js", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git", level: 75 }
  ];

  return (
    <section id="skills" style={{ 
      minHeight: "100vh", 
      padding: "2rem 1rem",
      display: "flex",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center leading-snug break-words px-2">Skills & Technologies</h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr",
          gap: "1rem" 
        }} className="sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "1rem",
              borderRadius: "15px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)"
            }} className="sm:p-6">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }} className="sm:mb-4">
                <span className="text-white font-semibold text-sm sm:text-base md:text-lg">{skill.name}</span>
                <span className="text-white/70 text-xs sm:text-sm md:text-base">{skill.level}%</span>
              </div>
              <div style={{
                width: "100%",
                height: "6px",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "4px",
                overflow: "hidden"
              }} className="sm:h-2">
                <div style={{
                  width: `${skill.level}%`,
                  height: "100%",
                  backgroundColor: "#6B7280",
                  borderRadius: "4px",
                  transition: "width 1s ease-in-out"
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section Component
function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and beautiful silk background animations.",
      tech: "React, JavaScript, CSS, Silk.js",
      image: "placeholder",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Coming Soon",
      description: "More exciting projects are on their way! Stay tuned for updates.",
      tech: "React, Node.js, MongoDB",
      image: "placeholder",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" style={{ 
      minHeight: "100vh", 
      padding: "2rem 1rem",
      display: "flex",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center leading-snug break-words px-2">My Projects</h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr",
          gap: "1.5rem" 
        }} className="md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              overflow: "hidden",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = "translateY(-10px)";
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = "translateY(0px)";
              }
            }}
            >
              {/* Project Image Placeholder */}
              <div style={{
                height: "160px",
                backgroundColor: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }} className="sm:h-48 md:h-56">
                <span className="text-white/50 text-sm sm:text-base md:text-lg">Project Screenshot</span>
              </div>
              
              {/* Project Content */}
              <div style={{ padding: "1rem" }} className="sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">{project.title}</h3>
                <p className="text-white/80 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">{project.description}</p>
                <p className="text-blue-300 text-xs sm:text-sm mb-3 sm:mb-4">{project.tech}</p>
                
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <button className="px-3 sm:px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Live Demo
                  </button>
                  <button className="px-3 sm:px-4 py-2 bg-transparent border border-gray-500/50 text-white rounded-lg hover:bg-gray-700/30 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" style={{ 
      minHeight: "100vh", 
      padding: "2rem 1rem",
      display: "flex",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%", textAlign: "center" }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-snug break-words px-2 text-center">Let's Work Together</h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 md:mb-12 leading-relaxed px-4 break-words">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about web development. Let's create something amazing together!
        </p>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "0.75rem", 
          flexWrap: "wrap", 
          marginBottom: "2rem",
          padding: "0 0.5rem"
        }} className="sm:gap-4 sm:mb-12">
          <a href="mailto:ashrafabdelkhaleqali@gmail.com" 
             className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/ashraf-abdelkhaleq-857850375" 
             target="_blank" 
             rel="noopener noreferrer"
             className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gray-700/60 backdrop-blur-sm text-white border border-gray-500/50 rounded-lg hover:bg-gray-600/70 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">
            LinkedIn
          </a>
          <a href="https://github.com/oushaabdelkhaleq88" 
             target="_blank" 
             rel="noopener noreferrer"
             className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gray-700/60 backdrop-blur-sm text-white border border-gray-500/50 rounded-lg hover:bg-gray-600/70 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">
            GitHub
          </a>
        </div>

        {/* Footer */}
        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.2)", 
          paddingTop: "1.5rem",
          marginTop: "2rem"
        }} className="sm:pt-8 sm:mt-16">
          <p className="text-white/60 text-xs sm:text-sm md:text-base px-2">
            © 2025 Ashraf Abdelkaleq. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      {/* Global Silk Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Silk
          speed={15}
          scale={1}
          color="123456"
          noiseIntensity={0}
          rotation={2.40}
        />
      </div>

      {/* Navigation */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <Navbar />
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}