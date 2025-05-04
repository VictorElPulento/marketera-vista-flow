
import { CheckCircle } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 bg-marketera-gray-light">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-marketera-blue-dark mb-6">
              The MarketEra Story
            </h2>
            <p className="text-lg text-marketera-gray-dark mb-6">
              Started in 2020, MarketEra was born from a simple vision: to make cutting-edge technology accessible 
              and intuitive for everyone. We believe that smart technology should enhance your life, 
              not complicate it.
            </p>
            <p className="text-lg text-marketera-gray-dark mb-8">
              Today, we're a team of 100+ tech enthusiasts and designers obsessed with creating 
              products that seamlessly integrate into your daily routines while pushing the boundaries 
              of what's possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-marketera-blue" />
                <p className="font-medium text-marketera-blue-dark">Sustainable materials and manufacturing</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-marketera-blue" />
                <p className="font-medium text-marketera-blue-dark">Continuous software updates for 5+ years</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-marketera-blue" />
                <p className="font-medium text-marketera-blue-dark">Industry-leading privacy protection</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="h-96 w-96 rounded-full bg-marketera-blue-dark absolute -z-10 blur-3xl opacity-10"></div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="Team member working" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" 
                alt="Team meeting" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8"
              />
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                <h3 className="font-bold text-marketera-blue-dark text-lg">Our Mission</h3>
                <p className="text-marketera-gray mt-2 text-sm">
                  To make technology that truly understands and adapts to human needs.
                </p>
              </div>
              <div className="bg-marketera-blue-dark p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-white text-lg">Our Values</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  Innovation, Simplicity, Quality, and Sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
