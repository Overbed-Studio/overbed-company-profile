import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2b2830ff" }}>
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
                <a className="nav-link text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="#">
                  Our Client
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      
    </div>
  );
}
