import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  
        return (
          <div className="p-6 text-classic-navy max-w-4xl mx-auto w-full sm:p-8 lg:p-12">
            <h2 className="text-3xl font-serif mb-6">Contact Me</h2>
            <p>Email: <a href="mailto:joicemagic1@gmail.com" className="text-classic-gold hover:underline">joicemagic1@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/Eric-Aishat" target="_blank" rel="noreferrer" className="text-classic-gold hover:underline">Eric-Aishat</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/adesanmi-aishat" target="_blank" rel="noreferrer" className="text-classic-gold hover:underline">Adesanmi-Aishat</a></p>
            <br />
            <a
              href="/adesanmi-aishat-resume.pdf"
              download
              className="inline-block text-classic-gold hover:underline border px-4 py-2 rounded w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
            
            <p>
              <Link to="/resume" className="text-classic-gold hover:underline ml-0 mt-4 block sm:inline-block sm:ml-4 sm:mt-0">View Resume Page</Link>
            </p>
       
          </div>
          
        );
      }  
  


export default Contact