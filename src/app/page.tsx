import Image from "next/image";

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
              src="/icon/Profile Image.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </a>
          <div className="text-white">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link text-white" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="#clients">
                  Our Client
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" aria-current="page" href="#projects">
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
          <h1>Home Section</h1>
          {/* Content here */}
        </div>
      </section>

      <section id="about" style={{ height: "100vh", padding: "80px 0" }}>
        <div className="container text-white">
          <h1>About Section</h1>
          {/* Content here */}
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
