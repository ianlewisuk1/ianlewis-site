import { useState } from 'react'
import profilePic from '../assets/ian.jpeg'
import profilePicBack from '../assets/ian_pic_2.jpeg'

const GITHUB_URL = 'https://github.com/ianlewisuk1';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ianlewis314/';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" style={sectionStyle} className="hero-section">
      <style>{`
        .hero-body { display: flex; flex-direction: column; gap: 4rem; }
        .hero-text { display: flex; flex-direction: column; gap: 2rem; }
        .hero-photo-col { order: -1; }
        @media (max-width: 640px) {
          .hero-photo { width: 160px !important; height: 200px !important; }
          .hero-subtitle { font-size: 1.4rem !important; }
          .hero-body-text { font-size: 1.05rem !important; }
          .hero-name { font-size: 1.05rem !important; }
        }
        @media (min-width: 768px) {
          .hero-body { flex-direction: row; align-items: flex-start; gap: 6rem; }
          .hero-text { flex: 1 1 auto; min-width: 0; }
          .hero-photo-col { order: 0; flex-shrink: 0; }
          .hero-section { padding-left: 6rem !important; padding-right: 6rem !important; }
        }
        .hero-photo-inner { transition: transform 0.6s; transform-style: preserve-3d; }
        .hero-photo.flipped .hero-photo-inner { transform: rotateY(180deg); }
        .hero-photo-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .hero-photo-face-back { transform: rotateY(180deg); }
        .social-icon { opacity: 0.6; transition: opacity 0.2s; }
        .social-icon:hover { opacity: 1; }
      `}</style>
      <div style={innerStyle}>
        <p style={nameStyle} className="hero-name">[ full-stack software engineer | forward deployed engineer | ai engineer ]</p>
        <div className="hero-body">
          <div className="hero-text">
            <div style={contentGroupStyle}>
              <div style={textBlockStyle}>
                <p style={subtitleStyle} className="hero-subtitle">who am i?</p>
                <p style={bodyStyle} className="hero-body-text">Full-stack software engineer with multiple years of experience in the JavaScript, TypeScript and Python ecosystems. Recent work includes a self-hosted observability pipeline with built-in cardinality control, a webhook inspection service deployed in a custom AWS environment, and a RAG application. Prior to software engineering, I developed a strong background in educational administration.</p>
                <p style={locationStyle}>📍 Raleigh, NC</p>
              </div>
            </div>
          </div>
          <div className="hero-photo-col" style={photoColStyle}>
            <div
              className={`hero-photo${flipped ? ' flipped' : ''}`}
              style={photoStyle}
              onClick={() => setFlipped(f => !f)}
              role="button"
              tabIndex={0}
              aria-label="Flip photo"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped(f => !f); }}
            >
              <div className="hero-photo-inner" style={photoInnerStyle}>
                <img src={profilePic} style={photoFaceStyle} className="hero-photo-face" alt="Ian Lewis" />
                <img src={profilePicBack} style={photoFaceStyle} className="hero-photo-face hero-photo-face-back" alt="" />
              </div>
            </div>
            <div style={socialRowStyle}>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={socialIconStyle} className="social-icon">
                <GitHubIcon />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialIconStyle} className="social-icon">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  padding: '4rem 2.5rem',
};

const innerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
};

const nameStyle = {
  fontSize: '1.4rem',
  fontWeight: 400,
  letterSpacing: '0.05em',
  background: 'linear-gradient(90deg, #4a9ab5, #c8a030)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const textBlockStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const contentGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const bodyStyle = {
  fontSize: '1.5rem',
  color: 'var(--fg)',
  lineHeight: 1.8,
};

const locationStyle = {
  fontSize: '1.15rem',
  color: 'var(--fg-muted)',
  letterSpacing: '0.03em',
};

const subtitleStyle = {
  fontSize: '2rem',
  fontWeight: 400,
  letterSpacing: '0.05em',
  background: 'linear-gradient(90deg, #4a9ab5, #c8a030)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const photoColStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

const photoStyle = {
  width: '240px',
  height: '300px',
  perspective: '1200px',
  cursor: 'pointer',
};

const socialRowStyle = {
  display: 'flex',
  gap: '2.25rem',
};

const socialIconStyle = {
  color: 'var(--fg)',
  cursor: 'pointer',
};

const photoInnerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const photoFaceStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center top',
  background: 'var(--card-bg)',
  border: '1px solid var(--border)',
  borderRadius: '4px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
};
