


import React, { useRef } from
 'react';
import { useReactToPrint } from 'react-to-print';


const Resume = () => {
  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'adesanmi-aishat-resume',
  });

  return (
    <div className="p-6 text-classic-navy dark:text-white bg-blue-300 dark:bg-tan-900 min-h-screen">
      <div ref={resumeRef} className=" dark:bg-gray-900 text-black dark:text-white p-4 rounded shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Adesanmi Aishat</h2>
        <p className="mb-4">
          Frontend Developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. A fast learner who is eager to grow while contributing to real-world projects. Committed to continuous improvement and disciplined when it comes to solving complex problems and delivering results.
        </p>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p>Diploma in Fullstack Web Development</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc pl-6">
            <li>HTML, CSS, JavaScript</li>
            <li>React JSX, Tailwind CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <ul className="list-disc pl-6">
            <li>Portfolio Website (React + Tailwind)</li>
            <li>ToDo App (React Hooks + localStorage)</li>
          </ul>
        </section>
      </div>

      
      <div className="mt-6 space-x-4">
        <a
          href="/adesanmi-aishat-resume.pdf"
          download
          className="inline-block px-4 py-2 border border-classicNavy dark:border-white text-classicNavy dark:text-white rounded hover:bg-classicGold hover:text-white"
        >
          Download PDF Resume
        </a>
        <button
          onClick={handlePrint}
          className="inline-block px-4 py-2 border border-classicNavy dark:border-white text-classicNavy dark:text-white rounded hover:bg-classicGold hover:text-white"
        >
          Print or Save as PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;