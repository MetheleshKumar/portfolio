import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function FloatingSocial() {
  return (
    <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-4 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-300 after:dark:bg-gray-700">
      <a
        href="https://github.com"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://twitter.com"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href="https://instagram.com"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
}