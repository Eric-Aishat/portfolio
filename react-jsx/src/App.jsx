import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Project';
import Resume from './Resume';
import Contact from './pages/Contact';
import './App.css';
import Todo from './pages/Todo';
import Weather from './pages/Weather';
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded bg-classicGold text-classicNavy dark:bg-classicCream dark:text-white"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

function App() {
  const headerRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const baseClass = "transition-opacity duration-700 ease-out opacity-0";
  const activeClass = "opacity-100";

  return (
    <BrowserRouter>
      <div className="light">
        <header
          ref={headerRef}
          className={`${baseClass} ${animate ? activeClass : ""} bg-classic-gold shadow p-4 sticky top-0 z-10 flex flex-col sm:flex-row justify-between items-center`}
        >
          <h1 className="text-4xl font-bold text-center text-classic-navy ">Aishat | Frontend Developer</h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-2xl focus:outline-none"
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            {menuOpen && (
              <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-lg sm:flex">
                <Link className="hover:text-classic-gold-light" to="/">Home</Link>
                <Link className="hover:text-classic-gold-light" to="/projects">Projects</Link>
                <Link className="hover:text-classic-gold-light" to="/contact">Contact</Link>
              </nav>
            )}
            <DarkModeToggle />
          </div>
        </header>

        <main className="max-w-5xl mx-auto mt-10 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Weather" element={< Weather />} />
          </Routes>
        </main>

        <footer className="text-center p-4 mt-10 text-sm text-classicNavy dark:text-gray-300">
          © 2025 Aishat. Built with React + Tailwind.
        </footer>
      </div>

    </BrowserRouter>
  );
}

export default App;