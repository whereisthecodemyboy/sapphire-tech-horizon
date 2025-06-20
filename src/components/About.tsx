
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Eye, Heart, Users, MapPin, Mail, Linkedin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: '5+ years of delivering cutting-edge IT solutions'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Tailored solutions that meet specific business needs'
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Leveraging latest technologies for competitive advantage'
    },
    {
      icon: Heart,
      title: 'Local Understanding',
      description: 'Deep knowledge of Nepali market and business culture'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Shrestha',
      role: 'Chief Executive Officer',
      description: 'Leading HIST with 8+ years of experience in IT strategy and business development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Priya Maharjan',
      role: 'Chief Technology Officer',
      description: 'Expert in software architecture and emerging technologies with 10+ years experience.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Amit Tamang',
      role: 'Lead Full Stack Developer',
      description: 'Specialized in React, Node.js, and cloud technologies with passion for clean code.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Sita Gurung',
      role: 'Senior UI/UX Designer',
      description: 'Creating intuitive and beautiful user experiences with focus on user-centered design.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      linkedin: '#'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-sapphire-100 rounded-full text-sapphire-700 text-sm font-medium mb-6">
              About HIST
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through 
              <span className="text-sapphire-600"> Technology Innovation</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Located in the heart of Kritipur, Kathmandu, HIST (House of Information Science and Technology) 
              is Nepal's premier IT solutions provider. We specialize in creating custom software solutions, 
              SaaS products, and providing comprehensive IT consulting services that drive digital transformation.
            </p>
            
            {/* Mission, Vision */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sapphire-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-sapphire-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                  <p className="text-gray-600">To empower businesses with innovative technology solutions that drive growth and efficiency.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sapphire-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-4 h-4 text-sapphire-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600">To be Nepal's leading technology partner, bridging the gap between innovation and practical business solutions.</p>
                </div>
              </div>
            </div>
            
            {/* Why Choose HIST */}
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="w-5 h-5 text-sapphire-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Image & Stats */}
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="HIST Team Working"
                className="rounded-lg shadow-xl"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-sapphire-600 mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-sapphire-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-sapphire-600">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our passionate team of professionals brings together diverse expertise and innovative thinking 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sapphire-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-sapphire-600 hover:text-sapphire-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
