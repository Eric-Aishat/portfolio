

import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="px-6">
      <h2 className="text-3xl font-serif mb-6">Projects</h2>
      <ul className="space-y-6 max-w-4xl">
        <li className="border p-4 rounded shadow-xl bg-classic-cream">
          <h3 className="font-bold text-classic-navy">Resume</h3>
          <p>A React + TailwindCSS site with classic styling showcasing my work.</p>
          <Link to="/resume" className="text-classic-gold hover:underline">Live Demo</Link>
        </li>
        <li className="border p-4 rounded shadow bg-classic-cream">
          <h3 className="font-bold text-classic-navy">ToDo App</h3>
          <p>A minimal ToDo app with React hooks and localStorage integration.</p>
          <Link to="/todo" className="text-classic-gold hover:underline">Live Demo</Link>
        </li>
        <li className="border p-4 rounded shadow bg-classic-cream">
          <h3 className="font-bold text-classic-navy">Weather App</h3>
          <p>A simple weather app built with React that fetches and displays real-time weather data using a public API.</p>
          <Link to="/weather" className="text-classic-gold hover:underline">Live Demo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Project;