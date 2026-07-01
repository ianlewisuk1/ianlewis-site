const SQUARES = [
  { left: '2%',   top: '55%', w: 10, h: 10, color: '#3d7fa8', delay: 0 },
  { left: '5%',   top: '35%', w: 6,  h: 6,  color: '#c8881a', delay: 1.2 },
  { left: '8%',   top: '65%', w: 14, h: 14, color: '#3d7fa8', delay: 0.4 },
  { left: '11%',  top: '40%', w: 8,  h: 8,  color: '#d4582a', delay: 2.1 },
  { left: '14%',  top: '60%', w: 5,  h: 5,  color: '#5a8faa', delay: 0.8 },
  { left: '17%',  top: '30%', w: 16, h: 16, color: '#c8881a', delay: 1.5 },
  { left: '19%',  top: '70%', w: 12, h: 12, color: '#3d7fa8', delay: 0.2 },
  { left: '22%',  top: '45%', w: 6,  h: 6,  color: '#d4582a', delay: 1.9 },
  { left: '25%',  top: '55%', w: 18, h: 18, color: '#8aacb8', delay: 0.6 },
  { left: '28%',  top: '35%', w: 5,  h: 5,  color: '#d4582a', delay: 2.4 },
  { left: '31%',  top: '65%', w: 9,  h: 9,  color: '#c8881a', delay: 1.1 },
  { left: '34%',  top: '40%', w: 7,  h: 7,  color: '#3d7fa8', delay: 0.3 },
  { left: '37%',  top: '60%', w: 4,  h: 4,  color: '#d4582a', delay: 1.7 },
  { left: '40%',  top: '30%', w: 13, h: 13, color: '#d4582a', delay: 0.9 },
  { left: '42%',  top: '70%', w: 6,  h: 6,  color: '#5a8faa', delay: 2.2 },
  { left: '45%',  top: '50%', w: 4,  h: 4,  color: '#c8881a', delay: 0.5 },
  { left: '48%',  top: '38%', w: 10, h: 10, color: '#5a7a9c', delay: 1.3 },
  { left: '51%',  top: '62%', w: 8,  h: 8,  color: '#d4582a', delay: 0.7 },
  { left: '54%',  top: '42%', w: 5,  h: 5,  color: '#3d7fa8', delay: 2.0 },
  { left: '57%',  top: '58%', w: 16, h: 16, color: '#c8a030', delay: 1.6 },
  { left: '60%',  top: '32%', w: 7,  h: 7,  color: '#5a8faa', delay: 0.1 },
  { left: '63%',  top: '68%', w: 4,  h: 4,  color: '#d4582a', delay: 2.3 },
  { left: '66%',  top: '45%', w: 11, h: 11, color: '#3d7fa8', delay: 1.0 },
  { left: '69%',  top: '55%', w: 18, h: 18, color: '#5a7a9c', delay: 0.4 },
  { left: '72%',  top: '35%', w: 6,  h: 6,  color: '#c8881a', delay: 1.8 },
  { left: '75%',  top: '65%', w: 8,  h: 8,  color: '#d4582a', delay: 0.6 },
  { left: '78%',  top: '40%', w: 5,  h: 5,  color: '#5a8faa', delay: 2.1 },
  { left: '81%',  top: '60%', w: 12, h: 12, color: '#3d7fa8', delay: 1.4 },
  { left: '84%',  top: '30%', w: 7,  h: 7,  color: '#d4582a', delay: 0.8 },
  { left: '87%',  top: '70%', w: 4,  h: 4,  color: '#c8881a', delay: 2.5 },
  { left: '90%',  top: '48%', w: 9,  h: 9,  color: '#5a7a9c', delay: 0.2 },
  { left: '93%',  top: '38%', w: 6,  h: 6,  color: '#d4582a', delay: 1.6 },
  { left: '96%',  top: '62%', w: 10, h: 10, color: '#3d7fa8', delay: 0.9 },
];

export default function Banner() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
      <div style={bannerStyle}>
        {SQUARES.map((sq, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: sq.left,
              top: sq.top,
              width: sq.w,
              height: sq.h,
              background: sq.color,
              borderRadius: '2px',
              animation: `float ${2.5 + (i % 3) * 0.5}s ease-in-out ${sq.delay}s infinite`,
              opacity: 0.85,
            }}
          />
        ))}
      </div>
    </>
  );
}

const bannerStyle = {
  position: 'relative',
  width: '100%',
  height: '70px',
  overflow: 'hidden',
  marginTop: '104px',
  background: 'var(--bg)',
};
