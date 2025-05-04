
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProduct = () => {
  return (
    <section className="py-20 container mx-auto container-padding">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-marketera-blue-dark">Producto Destacado</h2>
        <Link to="/product" className="mt-4 md:mt-0 text-marketera-blue flex items-center hover:text-marketera-blue-dark transition-colors">
          Ver todos los productos <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-gradient-to-br from-marketera-gray-light to-white p-6 md:p-12 rounded-3xl shadow-lg">
          <div className="relative">
            <span className="absolute top-0 left-0 bg-marketera-blue text-white text-sm font-bold px-3 py-1 rounded-full">
              Nuevo
            </span>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
              alt="Altavoz Inteligente" 
              className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="p-6">
          <span className="text-sm font-semibold text-marketera-blue bg-marketera-blue bg-opacity-10 px-4 py-1 rounded-full">
            Hogar Inteligente
          </span>
          
          <h3 className="mt-6 text-3xl md:text-4xl font-bold text-marketera-blue-dark">
            EraSound Pro
          </h3>
          
          <div className="flex items-center gap-4 mt-3">
            <p className="text-2xl font-bold text-marketera-blue-dark">299,99€</p>
            <p className="text-lg line-through text-marketera-gray">399,99€</p>
            <span className="bg-marketera-neon-lime text-marketera-gray-dark text-sm font-bold px-3 py-1 rounded-full">
              Ahorra 25%
            </span>
          </div>
          
          <div className="mt-6 space-y-4">
            <p className="text-marketera-gray-dark">
              El EraSound Pro es nuestro altavoz inteligente más avanzado hasta la fecha, con reconocimiento de voz potenciado por IA, 
              audio espacial de 360° e integración perfecta con tu ecosistema de hogar inteligente.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-marketera-neon-lime"></div>
                <p className="text-sm text-marketera-gray-dark">Audio Espacial 360°</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-marketera-neon-lime"></div>
                <p className="text-sm text-marketera-gray-dark">Reconocimiento Avanzado de Voz</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-marketera-neon-lime"></div>
                <p className="text-sm text-marketera-gray-dark">Integración Hogar Inteligente</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-marketera-neon-lime"></div>
                <p className="text-sm text-marketera-gray-dark">Batería 24h</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-8">
              <Link to="/product" className="marketera-btn-primary">
                Ver Detalles
              </Link>
              <button className="marketera-btn-outline">
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
