import { useState } from 'react'
import profilePic from '../assets/ian.jpeg'
import profilePicBack from '../assets/ian_pic_2.jpeg'

export default function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" style={sectionStyle} className="hero-section">
      <style>{`
        .hero-body { display: flex; flex-direction: column; gap: 4rem; }
        .hero-text { display: flex; flex-direction: column; gap: 2rem; }
        .hero-photo { order: -1; }
        @media (max-width: 640px) {
          .hero-photo { width: 160px !important; height: 200px !important; }
          .hero-subtitle { font-size: 1.4rem !important; }
          .hero-body-text { font-size: 1.05rem !important; }
          .hero-name { font-size: 1.05rem !important; }
        }
        @media (min-width: 768px) {
          .hero-body { flex-direction: row; align-items: flex-start; gap: 6rem; }
          .hero-text { flex: 1 1 auto; min-width: 0; }
          .hero-photo { order: 0; flex-shrink: 0; }
          .hero-section { padding-left: 6rem !important; padding-right: 6rem !important; }
        }
        .hero-photo-inner { transition: transform 0.6s; transform-style: preserve-3d; }
        .hero-photo.flipped .hero-photo-inner { transform: rotateY(180deg); }
        .hero-photo-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .hero-photo-face-back { transform: rotateY(180deg); }
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

const photoStyle = {
  width: '240px',
  height: '300px',
  perspective: '1200px',
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
