
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sapphire-50 via-white to-sapphire-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sapphire-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-sapphire-300 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-sapphire-400 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-sapphire-100 rounded-full text-sapphire-700 text-sm font-medium mb-6">
              🚀 Leading IT Solutions in Nepal
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Innovation with{' '}
              <span className="text-gradient">Smart Technology</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Custom IT Solutions, SaaS Products, and Future-Ready Services that transform businesses and drive digital growth in Nepal and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-hist-gradient hover:shadow-lg transition-all duration-300 hist-glow">
                Explore Services
              </Button>
              <Button variant="outline" size="lg" className="group border-sapphire-300 text-sapphire-700 hover:bg-sapphire-50">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-sapphire-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-sapphire-600">25+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-sapphire-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image/Illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Modern Technology Solutions"
                className="rounded-2xl shadow-2xl hist-shadow"
              />
              <div className="absolute inset-0 bg-hist-gradient opacity-20 rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-medium">System Status</div>
                  <div className="text-xs text-green-600">All Services Running</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-sapphire-100 rounded-full flex items-center justify-center">
                  <span className="text-sapphire-600 text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-sm font-medium">AI-Powered</div>
                  <div className="text-xs text-sapphire-600">Smart Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-sapphire-600" />
      </div>
    </section>
  );
};

export default Hero;
