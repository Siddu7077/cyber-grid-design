
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold glow-text mb-4">Alex Chen</h3>
            <p className="text-gray-400">
              Full Stack Developer crafting digital experiences with modern technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-gray-400 hover:text-neon-cyan transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:alex.chen@example.com" className="block text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                alex.chen@example.com
              </a>
              <a href="tel:+15551234567" className="block text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Alex Chen. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
