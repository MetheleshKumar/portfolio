import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-8 h-8" />,
    url: 'https://github.com',
    username: '@johndoe',
    description: 'Check out my open-source projects and contributions'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-8 h-8" />,
    url: 'https://linkedin.com',
    username: 'John Doe',
    description: 'Connect with me professionally'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-8 h-8" />,
    url: 'https://twitter.com',
    username: '@johndoe',
    description: 'Follow me for tech insights and updates'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-8 h-8" />,
    url: 'https://instagram.com',
    username: '@johndoe.dev',
    description: 'Behind the scenes of my developer life'
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-8 h-8" />,
    url: 'https://youtube.com',
    username: 'JohnDoeCode',
    description: 'Tutorial videos and coding sessions'
  },
  {
    name: 'Email',
    icon: <Mail className="w-8 h-8" />,
    url: 'mailto:john@example.com',
    username: 'john@example.com',
    description: 'Drop me a line anytime'
  }
];

export default function Social() {
  return (
    <section id="social" className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find me across the web and let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {social.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{social.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{social.username}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{social.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}