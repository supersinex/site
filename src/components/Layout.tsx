import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../app-icon.png';
import { APP_NAME, APP_STORE_URL, DEVELOPER } from '../constants';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand">
          <img src={icon} alt="" className="nav__icon" />
          <span>{APP_NAME}</span>
        </Link>
        <nav className="nav__links" aria-label="Main">
          <Link to="/#features">Features</Link>
          <Link to="/privacy">Privacy</Link>
          <a
            className="nav__cta"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={icon} alt="" className="footer__icon" />
          <div>
            <strong>{APP_NAME}</strong>
            <p>by {DEVELOPER}</p>
          </div>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <Link to="/privacy">Privacy Policy</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            App Store
          </a>
        </nav>
        <p className="footer__legal">
          Persona and related trademarks are the property of ATLUS. Apple, the Apple logo,
          iPhone, and iPad are trademarks of Apple Inc. App Store is a service mark of
          Apple Inc.
        </p>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
