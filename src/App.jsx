import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Banner from './components/Banner.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Banner />
      <Hero />
      <Projects />
    </>
  );
}
