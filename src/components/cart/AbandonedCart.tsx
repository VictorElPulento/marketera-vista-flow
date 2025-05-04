
import { useState } from 'react';
import { X, Minus, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AbandonedCart = () => {
  const [showModal, setShowModal] = useState(true);
  
  const cartItems = [
    {
      id: 1,
      name: 'EraSound Pro',
      price: 299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=100&h=100',
    },
    {
      id: 2,
      name: 'EraLight Bombilla Inteligente',
      price: 49.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=100&h=100',
    }
  ];
  
  // Calcular totales del carrito
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0; // Envío gratuito
  const total = subtotal + shipping;
  
  // Formatear divisa
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  return (
    <section className="min-h-screen bg-marketera-gray-light py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Elementos del Carrito */}
            <div className="p-6 md:p-8 flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-marketera-blue-dark">Tu Carrito</h2>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-marketera-neon-lime"></span>
                  <span className="text-sm text-marketera-gray">Artículos guardados durante 24 horas</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b">
                    <div className="w-20 h-20 bg-marketera-gray-light rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-marketera-blue-dark">{item.name}</h3>
                        <button className="text-marketera-gray hover:text-marketera-blue-dark transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-marketera-gray text-sm mt-1">Negro | Talla única</p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md overflow-hidden">
                          <button className="px-2 py-1 hover:bg-marketera-gray-light">
                            <Minus className="w-3 h-3 text-marketera-gray" />
                          </button>
                          <span className="px-4 text-sm font-medium">{item.quantity}</span>
                          <button className="px-2 py-1 hover:bg-marketera-gray-light">
                            <Plus className="w-3 h-3 text-marketera-gray" />
                          </button>
                        </div>
                        <p className="font-bold text-marketera-blue-dark">{formatCurrency(item.price)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-marketera-blue-dark mb-4">¿Tienes un código promocional?</h3>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Introduce código" 
                    className="px-4 py-2 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-marketera-blue"
                  />
                  <button className="px-4 py-2 bg-marketera-blue text-white rounded-lg hover:bg-marketera-blue-dark transition-colors">
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resumen del Pedido */}
            <div className="bg-marketera-gray-light p-6 md:p-8 md:w-80">
              <h2 className="text-xl font-bold text-marketera-blue-dark mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-marketera-gray">Subtotal</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-marketera-gray">Envío</span>
                  <span className="font-medium">Gratis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-marketera-gray">Impuestos</span>
                  <span className="font-medium">Se calculan al finalizar</span>
                </div>
                <div className="border-t pt-4 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
              
              <button className="marketera-btn-primary w-full">
                Finalizar Compra
              </button>
              
              <div className="mt-6 text-center">
                <Link to="/" className="text-marketera-blue text-sm flex items-center justify-center hover:underline">
                  Seguir Comprando <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-marketera-neon-lime flex items-center justify-center">
                    <svg className="h-4 w-4 text-marketera-gray-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Envío gratuito en pedidos superiores a 99€</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-marketera-neon-lime flex items-center justify-center">
                    <svg className="h-4 w-4 text-marketera-gray-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Devolución sencilla en 30 días</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-marketera-neon-lime flex items-center justify-center">
                    <svg className="h-4 w-4 text-marketera-gray-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm">Pago seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal de Carrito Abandonado */}
        {showModal && (
          <div className="fixed bottom-8 right-8 max-w-md bg-white rounded-xl shadow-2xl p-6 border-t-4 border-marketera-neon-lime z-50">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-marketera-gray hover:text-marketera-blue-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-marketera-blue-dark mb-2">¡No te lo pierdas!</h3>
            <p className="text-marketera-gray mb-4">
              ¡El EraSound Pro se está vendiendo muy rápido! Completa tu compra ahora y disfruta de un 10% de descuento con el código <strong>REGRESA10</strong>.
            </p>
            
            <div className="flex justify-between items-center bg-marketera-gray-light p-4 rounded-lg mb-6">
              <div className="flex gap-3 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=80&h=80" 
                  alt="EraSound Pro" 
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium text-marketera-blue-dark">EraSound Pro</h4>
                  <p className="text-sm text-marketera-gray">Negro</p>
                </div>
              </div>
              <p className="font-bold text-marketera-blue-dark">299,99€</p>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 text-marketera-blue hover:underline text-sm"
              >
                Lo pensaré
              </button>
              <button className="flex-1 marketera-btn-primary py-2">
                Completar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AbandonedCart;
