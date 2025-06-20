
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-hist-blue-50 border border-hist-blue-200 rounded-full text-hist-blue-700 text-sm font-semibold mb-8">
              Leading IT Solutions in Nepal
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-allstar">
              Empowering Innovation with{' '}
              <span className="text-hist-blue">Smart Technology</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-medium">
              Custom IT Solutions, SaaS Products, and Future-Ready Services that transform businesses and drive digital growth in Nepal and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-hist-blue hover:bg-hist-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-hist-blue text-hist-blue hover:bg-hist-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-hist-blue font-allstar">50+</div>
                <div className="text-gray-600 text-sm font-medium">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-hist-blue font-allstar">25+</div>
                <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-hist-blue font-allstar">5+</div>
                <div className="text-gray-600 text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Modern Technology Solutions"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Status Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold">System Status</div>
                  <div className="text-xs text-green-600 font-medium">All Services Online</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-hist-yellow rounded-full flex items-center justify-center">
                  <span className="text-hist-blue text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">AI-Powered</div>
                  <div className="text-xs text-hist-blue font-medium">Smart Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
