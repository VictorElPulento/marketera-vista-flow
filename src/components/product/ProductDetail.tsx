
import { useState } from 'react';
import { ShoppingCart, Heart, Share, ArrowRight, Tag, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ARPreview from './ARPreview';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [showAR, setShowAR] = useState(false);

  const colors = [
    { id: 'black', name: 'Carbon Black', hex: '#2c2e35' },
    { id: 'silver', name: 'Silver Gray', hex: '#c0c0c0' },
    { id: 'blue', name: 'Ocean Blue', hex: '#3a4f8a' },
  ];

  return (
    <section className="py-12 md:py-20 container mx-auto container-padding">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Product Images */}
        <div className="flex-1">
          <div className="relative bg-marketera-gray-light rounded-3xl p-6 mb-4 h-[400px] md:h-[500px] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
              alt="EraSound Pro"
              className="object-contain max-h-full max-w-full"
            />
            <button 
              onClick={() => setShowAR(true)}
              className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-marketera-neon-lime transition-colors text-sm font-medium"
            >
              <span>View in AR</span> 
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-marketera-gray-light rounded-xl p-2 cursor-pointer hover:bg-marketera-gray-light hover:shadow-md transition-all">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&q=80"
                  alt={`EraSound Pro view ${i + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Link to="/" className="text-marketera-gray hover:text-marketera-blue transition-colors">Home</Link>
            <span className="text-marketera-gray">/</span>
            <Link to="/product" className="text-marketera-gray hover:text-marketera-blue transition-colors">Products</Link>
            <span className="text-marketera-gray">/</span>
            <span className="text-marketera-blue">EraSound Pro</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-marketera-blue-dark mb-3">
            EraSound Pro - Smart Speaker
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-marketera-blue">4.9</span>
            <span className="text-marketera-gray">(128 reviews)</span>
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <p className="text-3xl font-bold text-marketera-blue-dark">$299.99</p>
            <p className="text-lg line-through text-marketera-gray">$399.99</p>
            <span className="bg-marketera-neon-lime text-marketera-gray-dark text-sm font-bold px-3 py-1 rounded-full">
              Save 25%
            </span>
          </div>
          
          <p className="text-marketera-gray-dark mb-8">
            Experience immersive sound with our most advanced smart speaker. The EraSound Pro features AI-powered 
            voice recognition, 360° spatial audio, and seamlessly integrates with your existing smart home ecosystem.
          </p>
          
          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-marketera-blue-dark mb-4">Select Color</h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`relative flex-col items-center justify-center p-1 ${
                    selectedColor === color.id ? 'ring-2 ring-marketera-blue' : 'ring-1 ring-gray-200'
                  } rounded-full focus:outline-none`}
                >
                  <span
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: color.hex }}
                  ></span>
                  {selectedColor === color.id && (
                    <span className="absolute -right-1 -top-1 bg-marketera-blue rounded-full p-0.5">
                      <CircleCheck className="w-4 h-4 text-white" />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-sm text-marketera-gray mt-2">Selected: {colors.find(c => c.id === selectedColor)?.name}</p>
          </div>
          
          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-marketera-blue-dark mb-4">Quantity</h3>
            <div className="flex items-center">
              <button 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)} 
                className="w-10 h-10 rounded-l-md bg-marketera-gray-light flex items-center justify-center border border-gray-200 focus:outline-none"
              >
                -
              </button>
              <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-200 bg-white">
                {quantity}
              </div>
              <button 
                onClick={() => setQuantity(quantity + 1)} 
                className="w-10 h-10 rounded-r-md bg-marketera-gray-light flex items-center justify-center border border-gray-200 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button className="marketera-btn-primary flex-1 flex items-center justify-center">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </button>
            <button className="marketera-btn-outline flex-1 flex items-center justify-center">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </button>
            <button className="p-3 rounded-md border border-gray-200 hover:bg-marketera-gray-light transition-colors">
              <Share className="h-5 w-5 text-marketera-blue" />
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="space-y-4 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 text-marketera-gray-dark">
              <Tag className="h-5 w-5 text-marketera-blue" />
              <p>Free shipping above $99</p>
            </div>
            <div className="flex items-center gap-2 text-marketera-gray-dark">
              <CircleCheck className="h-5 w-5 text-marketera-blue" />
              <p>2-year warranty included</p>
            </div>
            <div className="flex items-center gap-2 text-marketera-gray-dark">
              <CircleCheck className="h-5 w-5 text-marketera-blue" />
              <p>30-day money back guarantee</p>
            </div>
          </div>
        </div>
      </div>
      
      {showAR && <ARPreview onClose={() => setShowAR(false)} />}
    </section>
  );
};

export default ProductDetail;
