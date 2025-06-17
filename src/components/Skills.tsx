
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: [
      "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS", "WebGL", "Three.js"
    ],
    backend: [
      "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs", "Docker"
    ],
    tools: [
      "Git", "AWS", "Firebase", "Figma", "Webpack", "Jest", "Cypress", "Linux"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="glass-morphism rounded-full p-2">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full capitalize font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <div
                key={skill}
                className={`glass-morphism p-4 rounded-lg text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up cursor-pointer hover:glow-border`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
