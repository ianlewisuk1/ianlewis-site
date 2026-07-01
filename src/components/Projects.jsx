import trickLogo from '../assets/trickl.svg'
import lineupLogo from '../assets/lineup.png'
import dugoutLogo from '../assets/dugout.png'
import requestLogo from '../assets/request.png'

const HIGHLIGHT_PROJECT = {
  name: 'Trickl',
  description: [
    'Trickl is an open-source, scalable metrics observability platform, with built-in cardinality control measures for small-to-medium sized development teams.',
    'It automates the provisioning and configuration of a self-managed metrics backend on AWS, simplifying setup and reducing ongoing operational burden.',
  ],
  stack: ['TypeScript', 'React', 'Python', 'AWS CDK', 'ECS', 'EC2', 'RDS PostgreSQL', 'S3', 'VictoriaMetrics', 'Vector', 'Grafana'],
  logo: trickLogo,
  url: 'https://trickl-app.github.io/',
};

const OTHER_PROJECTS = [
  {
    name: 'LineupCFB',
    description: 'Live ESPN score ingestion, complex scoring logic and week advancement with historical snapshots. Deployed and actively maintained.',
    stack: ['React', 'JavaScript', 'Supabase', 'Edge Functions', 'Render', 'Vercel'],
    logo: lineupLogo,
    url: 'https://lineupcfb.com',
  },
  {
    name: 'The Dugout',
    description: 'Ingested and chunked source material, generated embeddings for vector storage, orchestrated semantic search using the user query to retrieve and generate a response utilizing the OpenAI API and a token friendly model.',
    stack: ['Python', 'FastAPI', 'React', 'Vite', 'PostgreSQL', 'Pinecone', 'OpenAI API', 'Vercel', 'Render'],
    logo: dugoutLogo,
    url: 'https://dugout.ianlewis.online',
  },
  {
    name: 'RequestStore',
    description: 'Self-hosted RequestBin-style tool for capturing and inspecting incoming webhooks and HTTP requests. Utilized a custom AWS VPC for deployment making use of public & private subnets, AZs, internet and NAT gateways and Nginx as a reverse proxy.',
    stack: ['Node.js', 'Express', 'React', 'TypeScript', 'MongoDB'],
    logo: requestLogo,
    url: 'https://github.com/ianlewisuk1/RequestBin',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={sectionStyle} className="projects-section">
      <style>{`
        .highlight-card { flex-direction: column; }
        @media (max-width: 640px) {
          .projects-section { padding-bottom: 4rem !important; }
          .projects-subtitle { font-size: 1.4rem !important; }
          .highlight-card { padding: 1.25rem !important; gap: 1.25rem !important; }
          .highlight-logo-box { width: 100px !important; height: 100px !important; }
        }
        @media (min-width: 768px) {
          .projects-section { padding-left: 6rem !important; padding-right: 6rem !important; }
          .highlight-card { flex-direction: row; align-items: flex-start; }
        }
      `}</style>
      <div>
        <p style={subtitleStyle} className="projects-subtitle">projects</p>

        <p style={colLabelStyle}>Highlighted</p>
        <a
          href={HIGHLIGHT_PROJECT.url}
          target="_blank"
          rel="noopener noreferrer"
          style={highlightCardStyle}
          className="highlight-card"
          aria-label={HIGHLIGHT_PROJECT.name}
        >
          <div style={highlightLogoBoxStyle} className="highlight-logo-box">
            <img src={HIGHLIGHT_PROJECT.logo} alt="" style={logoImgStyle} />
          </div>
          <div style={highlightTextStyle}>
            <p style={highlightNameStyle}>{HIGHLIGHT_PROJECT.name}</p>
            {HIGHLIGHT_PROJECT.description.map((para, i) => (
              <p key={i} style={highlightDescStyle}>{para}</p>
            ))}
            <div style={stackRowStyle}>
              {HIGHLIGHT_PROJECT.stack.map(tech => (
                <span key={tech} style={stackTagStyle}>{tech}</span>
              ))}
            </div>
          </div>
        </a>

        <p style={{ ...colLabelStyle, marginTop: '3rem' }}>More Projects</p>
        <div style={cardsWrapStyle}>
          {OTHER_PROJECTS.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={cardStyle} aria-label={p.name}>
              <div style={cardHeaderStyle}>
                <div style={logoBoxStyle}>
                  <img src={p.logo} alt="" style={logoImgStyle} />
                </div>
                <p style={nameStyle}>{p.name}</p>
              </div>
              <p style={descStyle}>{p.description}</p>
              <div style={stackRowStyle}>
                {p.stack.map(tech => (
                  <span key={tech} style={stackTagStyle}>{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '3rem 2.5rem 8rem',
  borderTop: '1px solid var(--border-faint)',
};

const subtitleStyle = {
  fontSize: '2rem',
  fontWeight: 400,
  letterSpacing: '0.05em',
  background: 'linear-gradient(90deg, #4a9ab5, #c8a030)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '2.5rem',
};

const colLabelStyle = {
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--fg-subtle)',
  marginBottom: '1.5rem',
};

const highlightCardStyle = {
  display: 'flex',
  gap: '2.5rem',
  width: '100%',
  border: '1px solid var(--border)',
  borderLeft: '3px solid #c8a030',
  borderRadius: '12px',
  background: 'var(--card-bg)',
  padding: '2rem',
  cursor: 'pointer',
};

const highlightLogoBoxStyle = {
  width: '140px',
  height: '140px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid var(--border-strong)',
  borderRadius: '12px',
  background: 'var(--card-bg-strong)',
  padding: '1.25rem',
};

const highlightTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const highlightNameStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: 'var(--fg)',
  letterSpacing: '-0.01em',
};

const highlightDescStyle = {
  fontSize: '0.95rem',
  color: 'var(--fg-muted)',
  lineHeight: 1.6,
};

const cardsWrapStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: '1 1 260px',
  minWidth: 0,
  maxWidth: '300px',
  textAlign: 'left',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  background: 'var(--card-bg)',
  padding: '1.5rem',
  cursor: 'pointer',
};

const cardHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
};

const logoBoxStyle = {
  width: '40px',
  height: '40px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

const nameStyle = {
  fontSize: '1rem',
  fontWeight: 700,
  color: 'var(--fg)',
};

const descStyle = {
  fontSize: '0.85rem',
  color: 'var(--fg-muted)',
  lineHeight: 1.6,
};

const stackRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

const stackTagStyle = {
  fontSize: '0.7rem',
  fontWeight: 500,
  color: 'var(--fg-subtle)',
  border: '1px solid var(--border)',
  borderRadius: '4px',
  padding: '0.25rem 0.5rem',
  letterSpacing: '0.02em',
};
