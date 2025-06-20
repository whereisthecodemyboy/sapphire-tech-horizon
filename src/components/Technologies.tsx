
import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Django', category: 'Framework' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Redis', category: 'Cache' }
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-sapphire-100 rounded-full text-sapphire-700 text-sm font-medium mb-6">
            Technologies We Use
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cutting-Edge
            <span className="text-gradient"> Technology Stack</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build scalable,
            secure, and high-performance solutions for our clients.
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group px-6 py-3 bg-gradient-to-r from-sapphire-50 to-sapphire-100 rounded-full border border-sapphire-200 hover:from-sapphire-100 hover:to-sapphire-200 transition-all duration-300 cursor-pointer hist-shadow hover:hist-glow"
                    >
                      <span className="text-sapphire-700 font-medium group-hover:text-sapphire-800 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="bg-gradient-to-r from-sapphire-600 to-sapphire-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Technology Solution?
            </h3>
            <p className="text-sapphire-100 mb-6">
              Our expert team can adapt to any technology stack or recommend the best solution for your specific needs.
            </p>
            <button className="bg-white text-sapphire-600 px-8 py-3 rounded-lg font-semibold hover:bg-sapphire-50 transition-colors">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
