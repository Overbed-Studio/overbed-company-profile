"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#2b2830ff" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <a className="navbar-brand" href="#">
            <Image
              className="rounded"
              src="/assets/Profile Image.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </a>
          <div className="text-white">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="#clients">
                  Our Client
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#projects"
                >
                  Project
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section id="home" style={{ height: "100vh", padding: "80px 0" }}>
        <div className="container text-white">
          <div className="d-flex justify-content-between">
            <div
              className="position-relative"
              style={{ width: "400px", height: "400px" }}
            >
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
                  boxShadow: "0 8px 40px rgba(75, 75, 75, 0.4)",
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
                  boxShadow: "0 8px 40px rgba(75, 75, 75, 0.4)",
                }}
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-end">
              <h1 className="fs-1">
                <TypeAnimation
                  sequence={[
                    "Welcome to Overbed Studio",
                    2000,
                    "Welcome to Ov3r83&#",
                    1000,
                    "Welcome to Overbed Studio",
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </h1>
              <p className="fs-3">
                Where Late-Night Ideas Become Tomorrow’s Tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ height: "100vh", padding: "80px 0" }}>
        <div className="container text-white">
          <h1 className="fs-2">
            <TypeAnimation
              sequence={["Who are we?", 2000, "Wh0 4%3 we???", 1000]}
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
          <div className="d-flex align-items-center justify-content-between">
            <div className="w-50">
              <p style={{ textAlign: "justify" }}>
                Overbed Studio is a software development company dedicated to
                crafting innovative digital solutions that help businesses
                thrive in the modern era. We combine creative design, reliable
                development, and deep client insight to deliver high-quality
                web, mobile, and integrated systems. With a passionate and
                skilled team, we believe every line of code should create
                meaningful value and measurable impact.
              </p>
              <div className="row mt-4">
                <div className="col-6">
                  <h2 className="fs-4">Our Mission</h2>
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      Deliver scalable and efficient software development
                      services.
                    </li>
                    <li>
                      Prioritize user experience and quality in every product.
                    </li>
                    <li>
                      Build long-term partnerships with clients through
                      transparent collaboration.
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h2 className="fs-4">Our Vision</h2>
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      To be a trusted technology partner that drives digital
                      transformation through creative and impactful solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" style={{ height: "100vh", padding: "80px 0" }}>
        <div className="container text-white">
          <h1>Our Clients Section</h1>
          {/* Content here */}
        </div>
      </section>

      <section id="projects" style={{ height: "100vh", padding: "80px 0" }}>
        <div className="container text-white">
          <h1>Projects Section</h1>
          {/* Content here */}
        </div>
      </section>

      <section id="contact" style={{ height: "100vh", padding: "80px 0" }}>
        <div className="container text-white">
          <h1>Contact Section</h1>
          {/* Content here */}
        </div>
      </section>
    </div>
  );
}
