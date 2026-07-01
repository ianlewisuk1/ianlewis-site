import { useState } from 'react';
import logoWhiteYellow from '../assets/logo_white_yellow.png';
import logoYellowWhite from '../assets/logo_yellow_white.png';
import resumePdf from '../assets/ian_lewis_cv.pdf';

const EMAIL = 'ianlewisuk1@gmail.com';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy email:', EMAIL);
    }
  };

  return (
    <>
      <style>{`
        .logo-wrap { position: relative; width: 60px; height: 60px; flex-shrink: 0; cursor: pointer; margin-left: -0.75rem; }
        .logo-wrap img { position: absolute; top: 0; left: 0; width: 60px; height: 60px; border-radius: 4px; transition: opacity 0.15s; user-select: none; -webkit-user-drag: none; }
        .logo-default { opacity: 1; }
        .logo-hover { opacity: 0; }
        .logo-wrap:hover .logo-default, .logo-wrap:active .logo-default { opacity: 0; }
        .logo-wrap:hover .logo-hover, .logo-wrap:active .logo-hover { opacity: 1; }
        .theme-toggle {
          background: none;
          border: 1px solid rgba(128,128,128,0.3);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: inherit;
          opacity: 0.7;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .theme-toggle:hover { opacity: 1; border-color: rgba(128,128,128,0.6); }
        .theme-toggle:focus-visible {
          outline: 2px solid #c8a030;
          outline-offset: 3px;
          opacity: 1;
        }
        .resume-wrap {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .resume-link {
          font-size: 1.9rem;
          font-weight: 500;
          color: var(--fg);
          opacity: 0.85;
          border-bottom: 1px solid var(--border-strong);
          padding-bottom: 2px;
          transition: opacity 0.2s;
        }
        .resume-link:hover { opacity: 1; }
        .contact-link {
          font-size: 1.9rem;
          font-weight: 500;
          color: var(--fg);
          opacity: 0.85;
          background: none;
          border: none;
          border-bottom: 1px solid var(--border-strong);
          padding: 0 0 2px;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .contact-link:hover { opacity: 1; }
        .contact-wrap {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .flash-arrow {
          font-size: 1.5rem;
          color: #c8a030;
          animation: flash-arrow 1s ease-in-out infinite;
        }
        @keyframes flash-arrow {
          0%, 100% { opacity: 1; transform: translateX(0); }
          50% { opacity: 0.2; transform: translateX(-4px); }
        }
        @media (max-width: 640px) {
          .site-nav { padding: 1rem 1.25rem !important; }
          .nav-actions { gap: 0.75rem !important; }
          .resume-wrap, .contact-wrap { gap: 0.2rem !important; }
          .resume-link, .contact-link { font-size: 0.85rem !important; }
          .flash-arrow { font-size: 0.9rem !important; }
        }
      `}</style>
      <nav style={navStyle} className="site-nav">
        <div style={brandStyle}>
          <div className="logo-wrap">
            <img src={logoWhiteYellow} alt="Ian Lewis logo" className="logo-default" />
            <img src={logoYellowWhite} alt="" className="logo-hover" />
          </div>
          <span style={logoStyle}>Ian<br />Lewis</span>
        </div>
        <div style={navActionsStyle} className="nav-actions">
          <div className="resume-wrap">
            <span className="flash-arrow" aria-hidden="true">→</span>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="resume-link">resume</a>
          </div>
          <div className="contact-wrap">
            <span className="flash-arrow" aria-hidden="true">→</span>
            <button className="contact-link" onClick={handleCopyEmail} aria-live="polite">
              {copied ? 'email copied!' : 'contact me'}
            </button>
          </div>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={!isDark}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </>
  );
}

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.25rem 2.5rem',
  borderBottom: '1px solid var(--border-faint)',
  backdropFilter: 'blur(12px)',
  background: 'var(--nav-bg)',
};

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
};

const navActionsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
};

const logoStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  fontFamily: "'Raleway', sans-serif",
  letterSpacing: '0.1em',
  lineHeight: 1.2,
  color: 'var(--fg)',
};
