import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Social from './components/Social';
import Contact from './components/Contact';
import FloatingSocial from './components/FloatingSocial';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <FloatingSocial />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Social />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;