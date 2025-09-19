
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

import grid1 from "./assets/grid1.png";
import grid4 from "./assets/grid4.png";
import skill1 from "./assets/1.png";
import skill2 from "./assets/2.png";
import skill3 from "./assets/3.webp";
import skill4 from "./assets/4.webp";
import skill5 from "./assets/5 (1).png";
import skill7 from "./assets/7.png";
import skill8 from "./assets/8.png";
import skill9 from "./assets/10.png";
import skill10 from "./assets/11.png";
import skill11 from "./assets/12.png";
import skill12 from "./assets/digital brain (2).png";

import galaxyVideo from "./assets/galaxy (1).mp4";
import blackholeVideo from "./assets/blackhole.mp4";
import heroVideo from "./assets/hero-video.mp4";
import globeVideo from "./assets/glob (1).mp4";
import pro1Video from "./assets/pro1.mp4";
import pro2Video from "./assets/pro2.mp4";
import pro3Video from "./assets/pro3.mp4";

const Portfolio = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      
      <video
        className="back-vid"
        autoPlay
        loop
        muted
        playsInline
        src={galaxyVideo}
      ></video>

      
      <header data-aos="fade-down" data-aos-duration="2000">
        <div className="left">
          <img
            src="https://marketplace.canva.com/EAE7NV6FiZQ/1/0/1600w/canva-luxury-letter-a-logo-design-for-business-or-online-shop-qJ4llYpXD6w.jpg"
            alt="logo"
          />
          <h2>
            <span style={{ color: "rgba(114, 161, 222, 0.635)" }}>Aima</span>
            theDev
          </h2>
        </div>

        
        <ul className="desktop-nav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        {/* Icons */}
        <div className="box-icons">
          <p>
            <i className="bx bxl-youtube"></i>
          </p>
          <p>
            <a
              href="https://github.com/Aimathedev"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="bx bxl-github"></i>
            </a>
          </p>
          <p>
            <i className="bx bxl-linkedin-square"></i>
          </p>
        </div>

    
        <div
          className="menu-icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className="bx bx-menu"></i>
        </div>
      </header>

      
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          ✕
        </button>
        <ul>
          <li>
            <a href="#about" onClick={() => setIsSidebarOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsSidebarOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsSidebarOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsSidebarOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>


      <div
        className="blackhole-box"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <video autoPlay loop muted playsInline src={blackholeVideo}></video>
      </div>

    
      <section className="hero">
        <div
          className="hero-info autoBlur"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="hero-info-title">
            <i className="bx bxl-sketch"></i> Front-end Developer Portfolio
          </div>
          <h1 data-aos="fade-right" data-aos-duration="3000">
            Providing <span className="gradient">the best</span> Project{" "}
            <span className="gradient">Experience</span>
          </h1>
          <p>
            I'm a front-end developer with experience in Website, Mobile and
            Software development. Check out my projects and skills.
          </p>
          <button>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#contact"
            >
              <i className="bx bx-send"></i> Contact Me
            </a>
          </button>
        </div>

        <div className="skills-video-box">
          <video
            className="skills-video autoBlur"
            autoPlay
            loop
            muted
            playsInline
            src={heroVideo}
          ></video>
        </div>
        <div className="scroll-down"></div>
      </section>

    
      <section className="info-section" id="about">
        <h1 className="section-title autoDisplay">Hello, There👋</h1>
        <div className="info-cards">
          <div className="card">
            <h1>Hi there, I'm Aima</h1>
            <p>
              I have honed my skills in frontend dev, creating dynamic and
              responsive websites.
            </p>
            <img src={grid1} alt="grid1" />
          </div>
          <div className="card">
            <h1>Tech Stack</h1>
            <p>
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
            <img src={grid4} alt="grid4" />
          </div>
          <div className="card">
            <h1>I’m very flexible with time zone communications</h1>
            <p>I'm based in Pakistan and open to remote work worldwide.</p>
            <video src={globeVideo} autoPlay loop muted playsInline></video>
            <button>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="#contact"
              >
                <i className="bx bx-send"></i> Contact Me
              </a>
            </button>
          </div>
          <div className="card">
            <h1>My Passion for Coding</h1>
            <p>
              I love solving problems and building things through code.
              Programming isn't just my profession—it's my passion.
            </p>
            <img src={grid4} alt="grid4" />
          </div>
        </div>
      </section>

    
      <section className="my-project" id="projects">
        <h1 className="section-title autoDisplay">My Projects 👨‍💻</h1>

        <div className="project-card">
          <div className="project-vidbox autoBlur">
            <video autoPlay muted loop src={pro1Video}></video>
          </div>
          <div className="project-info fadein-left">
            <h1>
              Animated <span className="gradient">Gaming</span> Website
            </h1>
            <p>
              A fully responsive gaming website built with React.js and
              Bootstrap, featuring dynamic animations and a clean, modern UI.
            </p>
            <button>
              <a
                href="https://github.com/Aimathedev/web.git"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i className="bx bx-link-external"></i> Website
              </a>
            </button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-vidbox autoBlur">
            <video autoPlay muted loop src={pro2Video}></video>
          </div>
          <div className="project-info fadein-left">
            <h1>
              Modern <span className="gradient">Portfolio</span> Website
            </h1>
            <p>
              This portfolio website showcases my skills as a developer using
              React.js, MUI (Material-UI), and CSS.
            </p>
            <button>
              <a
                href="https://github.com/Aimathedev/figma_design_project.git"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                <i className="bx bx-link-external"></i> Website
              </a>
            </button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-vidbox autoBlur">
            <video autoPlay muted loop src={pro3Video}></video>
          </div>
          <div className="project-info fadein-left">
            <h1>
              Movie <span className="gradient">Landing</span> Page
            </h1>
            <p>
              A sleek, interactive movie landing page developed with React.js.
            </p>
            <button>
              <i className="bx bx-link-external"></i> Website
            </button>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <h1 className="section-title autoDisplay">My Skills 💪</h1>
        <div className="skills-box autoDisplay">
          <img className="skills-image" src={skill12} alt="digital brain" />

          <div className="Designer">
            <h1 className="gradient">
              Designer <i className="bx bx-laptop"></i>
            </h1>
            <p>
              I have expertise in HTML, CSS, JavaScript, and design tools like
              Figma and Adobe XD.
            </p>
          </div>

          <div className="coder">
            <h1 className="gradient">
              Coder <i className="bx bx-code-block"></i>
            </h1>
            <p>
              I’m skilled in HTML, CSS, JavaScript, and frameworks like React
              and Node.js.
            </p>
          </div>

          
          <div
            className="slider"
            reverse="true"
            style={{ "--width": "100px", "--height": "100px", "--quantity": 9 }}
          >
            <div className="list">
              {[skill1, skill2, skill3, skill4, skill5, skill7, skill8, skill9, skill10, skill11].map(
                (s, i) => (
                  <div className="item" style={{ "--position": i + 1 }} key={i}>
                    <img src={s} alt={`skill-${i}`} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      
      <section className="contact-section" id="contact">
        <h1 className="section-title autoDisplay">Let's talk😊</h1>
        <div className="social-box autoBlur">
          <a href="tel:+923434482195">
            <i className="bx bxs-phone"></i> +92 3434482195
          </a>
          <a href="mailto:aima70836@gmail.com">
            <i className="bx bx-mail-send"></i> aima70836@gmail.com
          </a>
          <a href="#">
            <i className="bx bxl-linkedin-square"></i> LinkedIn
          </a>
          <div className="social-icons">
            <a href="#">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </div>
        </div>

        <div className="contact-box autoBlur">
          <p>
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
          <p>Full Name</p>
          <input placeholder="Your Full Name" type="text" />
          <p>Email Address</p>
          <input placeholder="Your Email" type="email" />
          <p>Your Message</p>
          <input
            className="input-message"
            type="text"
            placeholder="Share your thoughts..."
          />
          <button>
            Send Message <i className="bx bx-mail-send"></i>
          </button>
        </div>
      </section>

    
      <section className="footer">
        <h1>©️2025, thanks for visiting</h1>
        <div className="box-icons">
          <p>
            <i className="bx bxl-youtube"></i>
          </p>
          <p>
            <i className="bx bxl-github"></i>
          </p>
          <p>
            <i className="bx bxl-linkedin-square"></i>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
