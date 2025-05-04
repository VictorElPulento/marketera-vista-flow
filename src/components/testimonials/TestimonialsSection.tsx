
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Tech Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
    quote: "The EraSound Pro transformed how I interact with my smart home. The voice recognition is unparalleled and the sound quality exceeds my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Samantha Kim",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
    quote: "Not only does it sound amazing, but the design is so sleek that it complements my minimalist home aesthetic perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    quote: "As someone who works with audio professionally, I'm impressed by the sound staging and clarity of the EraSound Pro, even at high volumes.",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Smart Home Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
    quote: "I've tested dozens of smart speakers, and MarketEra's attention to both software and hardware quality puts them miles ahead of competitors.",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length]
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-marketera-blue-dark to-marketera-blue text-white">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Customer Experiences</h2>
        <p className="text-lg text-gray-200 mb-12">Don't just take our word for it. Here's what our customers say.</p>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex gap-4 items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-100">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile View (Carousel) */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full p-1">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl h-full">
                      <div className="flex gap-4 items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-gray-300 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-100">"{testimonial.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === activeIndex ? 'bg-marketera-neon-lime' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="bg-white bg-opacity-10 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white bg-opacity-10 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
