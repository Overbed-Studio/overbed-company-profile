"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import TextCardComponent from "../components/textCardComponent";
import Marquee from "react-fast-marquee";
import ProjectCardComponent from "@/components/ProjectCardComponent";
import { useState, useEffect } from "react";
import './page.css';

const clients = [
  { name: "Sekawan Media", logo: "/assets/sekawan.png" },
  { name: "Intellix", logo: "/assets/intellix.png" },
  { name: "youtube", logo: "/assets/youtube.png" },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    // Smooth scroll behavior for navigation
    const handleScroll = () => {
      const sections = ['home', 'about', 'clients', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        {/* Enhanced Navbar */}
        <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
          <div className="container d-flex align-items-center justify-content-between">
            <a className="navbar-brand" href="#home">
              <div className="image-overlay">
                <Image
                  className="rounded"
                  src="/assets/Profile Image.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </div>
            </a>
            <div className="text-white">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-4">
                  <a className={`nav-link text-white ${activeSection === 'home' ? 'active' : ''}`} href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className={`nav-link text-white ${activeSection === 'about' ? 'active' : ''}`} href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className={`nav-link text-white ${activeSection === 'clients' ? 'active' : ''}`} href="#clients">
                    Our Client
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className={`nav-link text-white ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">
                    Project
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className={`nav-link text-white ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Enhanced Hero Section */}
        <section id="home" className="hero-section d-flex align-items-center">
          <div className="container text-white position-relative">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className={`position-relative ${isVisible ? 'animate-fade-in' : ''}`}>
                  <div className="image-overlay position-relative" style={{ width: "400px", height: "400px" }}>
                    <Image
                      className="rounded position-absolute"
                      src="/assets/homeImage.png"
                      alt="Home Image"
                      width={250}
                      height={250}
                      style={{
                        top: "0",
                        left: "0",
                        zIndex: 1,
                        boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
                      }}
                    />
                    <Image
                      className="rounded position-absolute"
                      src="/assets/homeImage2.png"
                      alt="Home Image 2"
                      width={300}
                      height={300}
                      style={{
                        bottom: "0",
                        right: "0",
                        zIndex: 2,
                        boxShadow: "0 20px 60px rgba(118, 75, 162, 0.3)",
                      }}
                    />
                    <div className="pulse-dot"></div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6 order-lg-2 order-1">
                <div className={`d-flex flex-column justify-content-center ${isVisible ? 'animate-slide-up' : ''}`}>
                  <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                    <TypeAnimation
                      sequence={[
                        "Welcome to Overbed Studio",
                        2000,
                        "Welcome to Ov3r83d Studio",
                        1000,
                        "Welcome to Overbed Studio",
                      ]}
                      wrapper="span"
                      repeat={Infinity}
                      className="typewriter-text"
                    />
                  </h1>
                  <p className="fs-3 mb-4 text-light opacity-90">
                    Where Late-Night Ideas Become Tomorrow's Tech.
                  </p>
                  
                  {/* Stats */}
                  <div className="row mb-4">
                    <div className="col-4 text-center">
                      <div className="stats-counter">3+</div>
                      <small className="text-white">Projects</small>
                    </div>
                    <div className="col-4 text-center">
                      <div className="stats-counter">2+</div>
                      <small className="text-white">Clients</small>
                    </div>
                    <div className="col-4 text-center">
                      <div className="stats-counter">0</div>
                      <small className="text-white">Years</small>
                    </div>
                  </div>

                  <div className="d-flex gap-3 flex-wrap">
                    <button className="btn btn-gradient px-4 py-2">
                      Start Your Project 🚀
                    </button>
                    <button className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '50px' }}>
                      View Our Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Enhanced About Section */}
        <section id="about" className="section-container">
          <div className="container text-white">
            <h1 className="display-4 fw-bold mb-5">
              <TypeAnimation
                sequence={["Who are we?", 2000, "Wh0 4%3 we???", 1000]}
                wrapper="span"
                repeat={Infinity}
                className="typewriter-text"
              />
            </h1>
            
            <div className="row">
              <div className="col-12">
                <div className="card-enhanced p-5 mb-5">
                  <p className="fs-5 mb-0" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                    Overbed Studio is a software development company dedicated to
                    crafting innovative digital solutions that help businesses
                    thrive in the modern era. We combine creative design, reliable
                    development, and deep client insight to deliver high-quality
                    web, mobile, and integrated systems. With a passionate and
                    skilled team, we believe every line of code should create
                    meaningful value and measurable impact.
                  </p>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card-enhanced p-4 h-100">
                      <h3 className="fs-4 mb-4 typewriter-text">Our Mission</h3>
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex align-items-start">
                          <span className="bg-gradient-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '8px', height: '8px', marginTop: '8px' }}></span>
                          Deliver scalable and efficient software development services.
                        </li>
                        <li className="mb-3 d-flex align-items-start">
                          <span className="bg-gradient-secondary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '8px', height: '8px', marginTop: '8px' }}></span>
                          Prioritize user experience and quality in every product.
                        </li>
                        <li className="mb-3 d-flex align-items-start">
                          <span className="bg-gradient-tertiary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '8px', height: '8px', marginTop: '8px' }}></span>
                          Build long-term partnerships with clients through transparent collaboration.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card-enhanced p-4 h-100">
                      <h3 className="fs-4 mb-4 typewriter-text">Our Vision</h3>
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex align-items-start">
                          <span className="bg-gradient-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '8px', height: '8px', marginTop: '8px' }}></span>
                          To be a trusted technology partner that drives digital transformation through creative and impactful solutions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="display-5 fw-bold mt-5 mb-5">
              <TypeAnimation
                sequence={["Why choose us?", 2000, "Wh# ch005# ##???", 500]}
                wrapper="span"
                repeat={Infinity}
                className="typewriter-text"
              />
            </h2>
            
            <div className="row g-4">
              <div className="col-md-6">
                <TextCardComponent
                  number={1}
                  text="Tailored Solutions: We don't believe in one-size-fits-all. Every product is customized to match your vision and goals."
                />
              </div>
              <div className="col-md-6">
                <TextCardComponent
                  number={2}
                  text="Creative + Technical Expertise: Our team blends design creativity with solid engineering to produce user-friendly and scalable products."
                />
              </div>
              <div className="col-md-6">
                <TextCardComponent
                  number={3}
                  text="Long-Term Partnership: We're not just building software; we're building relationships. Your success is our success."
                />
              </div>
              <div className="col-md-6">
                <TextCardComponent
                  number={4}
                  text="Innovation-Driven: We stay ahead of trends and technologies to keep your product future-ready."
                />
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Enhanced Clients Section */}
        <section id="clients" className="section-container">
          <div className="container text-white">
            <h1 className="display-4 fw-bold mb-5">
              <TypeAnimation
                sequence={["Our Clients", 2000, "Our Cl13$#@.", 500]}
                wrapper="span"
                repeat={Infinity}
                className="typewriter-text"
              />
            </h1>
            
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">Trusted by Leading Brands</h2>
              <p className="fs-5 text-white">
                We are proud to work with a diverse range of clients, from
                startups to established enterprises, helping them achieve their
                digital goals.
              </p>
            </div>
            
            <div className="client-marquee">
              <Marquee gradient={false} speed={50} pauseOnHover={true}>
                <div className="d-flex align-items-center">
                  {clients.map((client, index) => (
                    <div key={index} className="mx-5 image-overlay">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={150}
                        height={75}
                        style={{
                          width: "auto",
                          objectFit: "contain",
                          filter: "brightness(1.2) contrast(1.1)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Enhanced Projects Section */}
        <section id="projects" className="section-container">
          <div className="container text-white">
            <h1 className="display-4 fw-bold mb-5">
              <TypeAnimation
                sequence={["Our Projects", 2000, "Our Pr0j3ct$", 500]}
                wrapper="span"
                repeat={Infinity}
                className="typewriter-text"
              />
            </h1>
            
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-4">
                Overbed Studio has successfully delivered a variety of projects
                across different industries.
              </h2>
              <p className="fs-5 text-muted">Here are some highlights:</p>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <ProjectCardComponent
                  src="/assets/project1.png"
                  alt="Project 1"
                  title="E-Commerce Platform"
                  description="Developed a scalable e-commerce platform with integrated payment gateways and user-friendly design."
                  link="/projects/project1"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <ProjectCardComponent
                  src="/assets/project1.png"
                  alt="Project 2"
                  title="Healthcare Dashboard"
                  description="Created a comprehensive healthcare management system with real-time data visualization and patient tracking."
                  link="/projects/project2"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <ProjectCardComponent
                  src="/assets/project1.png"
                  alt="Project 3"
                  title="Fintech Mobile App"
                  description="Built a secure fintech mobile application with advanced encryption and seamless user experience."
                  link="/projects/project3"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Enhanced Contact Section */}
        <section id="contact" className="section-container">
          <div className="container text-white">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">
                <span className="typewriter-text">Get In Touch</span>
              </h1>
              <p className="fs-5 text-muted">Ready to start your next project? Let's discuss your ideas!</p>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const name = formData.get("name")?.toString() || "";
                      const email = formData.get("email")?.toString() || "";
                      const message = formData.get("message")?.toString() || "";

                      const subject = encodeURIComponent(`Contact from ${name}`);
                      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
                      const mailtoLink = `mailto:overbedstudio@gmail.com?subject=${subject}&body=${body}`;
                      window.location.href = mailtoLink;
                    }}
                  >
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="name" className="form-label fw-semibold">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="email" className="form-label fw-semibold">
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-semibold">
                        Your Message
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Write your message..."
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-gradient btn-lg px-5">
                        Send Message 📧
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </section>

      <footer className="text-white text-center py-3" style={{ backgroundColor: "#2b2830ff" }}>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Overbed Studio. All rights
          reserved.
        </p>
      </footer>
    </>
  )};