import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-item">
        <Link to="/" className="brand-name">
          Quizothrill
        </Link>
      </div>

      <nav className="header-item">
        <ul className="list list-spaced list-navbar">
          <li>
            <Link to="/login" className="styled-link-2">
              <i className="fas fa-user fa-lg" />
            </Link>
          </li>
          <li>|</li>
          <li>
            <a
              className="styled-link-2"
              href="https://github.com/tonymike99/quizothrill"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
          <li>
            <Link to="#" className="styled-link-2">
              <i id="theme-icon" className="fas fa-moon fa-lg" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
