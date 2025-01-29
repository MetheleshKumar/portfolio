import React from 'react';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const skills = {
  'Programming Languages': {
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 }
    ]
  },
  'Frontend Development': {
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: 'React', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  'Backend Development': {
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Spring Boot', level: 70 }
    ]
  },
  'Databases': {
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'MySQL', level: 80 }
    ]
  },
  'DevOps & Tools': {
    icon: <Settings className="w-6 h-6" />,
    items: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS', level: 85 },
      { name: 'CI/CD', level: 80 }
    ]
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600 dark:text-blue-400">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
              </div>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}