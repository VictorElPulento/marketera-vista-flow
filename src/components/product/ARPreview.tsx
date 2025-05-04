
import { X } from 'lucide-react';

interface ARPreviewProps {
  onClose: () => void;
}

const ARPreview = ({ onClose }: ARPreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-marketera-gray-light transition-colors"
        >
          <X className="w-6 h-6 text-marketera-gray-dark" />
        </button>
        
        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold text-marketera-blue-dark mb-2">Vista Previa en Realidad Aumentada</h3>
          <p className="text-marketera-gray mb-6">Experimenta el producto en tu espacio antes de comprarlo</p>
        </div>
        
        <div className="bg-marketera-gray-light h-96 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-marketera-blue to-marketera-blue-dark opacity-10"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80" 
              alt="Vista previa de AR"
              className="h-60 w-auto animate-float"
            />
            
            <div className="mt-6 flex flex-col items-center">
              <div className="w-24 h-0.5 rounded-full bg-marketera-blue opacity-50"></div>
              <p className="mt-4 text-marketera-blue font-medium">Vista AR: Apunta la cámara a una superficie plana</p>
            </div>
          </div>
          
          <div className="absolute left-4 bottom-4 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-marketera-blue animate-pulse"></div>
              <p className="text-sm font-medium text-marketera-blue-dark">Cámara activa</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white flex justify-between">
          <button className="marketera-btn-outline px-5" onClick={onClose}>Cancelar</button>
          <button className="marketera-btn-primary px-5">Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ARPreview;
