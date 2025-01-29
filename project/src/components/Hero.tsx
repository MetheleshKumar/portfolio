import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {/* Update your name */}
              MITHILESH KUMAR
              <span className="block text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mt-4 font-normal">
                {/* Update your title */}
                Your Professional Title
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl">
              {/* Update your bio */}
              Your professional bio goes here. Describe your expertise, experience, and what makes you unique.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#contact"
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Get in Touch
              </a>
              <a
                href="/your-resume.pdf"
                className="px-8 py-4 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
              alt="Your Name"
              className="w-72 h-72 rounded-3xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}