import React from "react";
import "./footer.css";

export function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-items">
          <div className="made-by">
            Made with <i className="fas fa-heart footer-icon"></i> By Ishita
            Keshawani
          </div>
          <div>
            <a href="https://github.com/ishitakeshawani/Stunners-Hub-Beauty-Store">
              <i className="fab fa-github footer-social-icon"></i>
            </a>
            <a href="https://twitter.com/ishitakeshawani">
              <i className="fab fa-twitter footer-social-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/ishitakeshawani/">
              <i className="fab fa-linkedin footer-social-icon"></i>
            </a>
          </div>
          <div className="copy-right">© 2022 Stunners Hub</div>
        </div>
      </footer>
    </div>
  );
}
