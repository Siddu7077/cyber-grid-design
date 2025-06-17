
const About = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      description: "Leading development of scalable web applications"
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Built and maintained multiple client projects"
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Specialized in React and modern web technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop&crop=face"
                alt="Profile"
                className="w-80 h-80 rounded-2xl object-cover mx-auto glass-morphism glow-border"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-glow-pulse"></div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a passionate full-stack developer with over 4 years of experience creating 
              innovative digital solutions. I specialize in modern web technologies and love 
              bringing ideas to life through clean, efficient code and stunning user interfaces.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-neon-cyan">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-neon-cyan">Experience Timeline</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className={`flex items-center mb-8 animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-gray-900">
                  {item.year}
                </div>
                <div className="ml-8 glass-morphism p-6 rounded-lg flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-neon-cyan mb-2">{item.company}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
