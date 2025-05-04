
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-marketera-blue-dark to-marketera-blue text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-marketera-electric-blue blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-marketera-neon-lime blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 min-h-[85vh] flex flex-col justify-center container-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Era of Smart <span className="text-marketera-neon-lime">Living</span> Has Arrived
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Experience the next generation of intelligent devices designed to transform your everyday life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/product" className="marketera-btn-accent">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <button className="marketera-btn-outline border-white text-white hover:bg-white hover:text-marketera-blue-dark">
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-marketera-neon-lime">30+</p>
                <p className="text-sm text-gray-300">Smart Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-marketera-neon-lime">50k+</p>
                <p className="text-sm text-gray-300">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-marketera-neon-lime">15+</p>
                <p className="text-sm text-gray-300">Awards</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-marketera-neon-lime to-marketera-electric-blue opacity-20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=600" 
                alt="Smart Device" 
                className="relative z-10 rounded-3xl object-cover h-[400px] w-auto animate-float"
              />
              <div className="absolute -bottom-4 -left-4 bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-xl z-20 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-marketera-neon-lime animate-pulse"></div>
                  <p className="text-sm font-medium">New Release</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-xl z-20 shadow-lg">
                <p className="text-sm font-medium">
                  <span className="text-marketera-neon-lime font-bold">30%</span> Off
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
