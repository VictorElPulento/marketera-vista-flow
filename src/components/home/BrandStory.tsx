
import { CheckCircle } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 bg-marketera-gray-light">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-marketera-blue-dark mb-6">
              La Historia de MarketEra
            </h2>
            <p className="text-lg text-marketera-gray-dark mb-6">
              Fundada en 2020, MarketEra nació de una visión simple: hacer que la tecnología de vanguardia sea 
              accesible e intuitiva para todos. Creemos que la tecnología inteligente debe mejorar tu vida, 
              no complicarla.
            </p>
            <p className="text-lg text-marketera-gray-dark mb-8">
              Hoy, somos un equipo de más de 100 entusiastas de la tecnología y diseñadores obsesionados con crear 
              productos que se integren perfectamente en tus rutinas diarias mientras empujamos los límites 
              de lo posible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-marketera-blue" />
                <p className="font-medium text-marketera-blue-dark">Materiales y fabricación sostenibles</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-marketera-blue" />
                <p className="font-medium text-marketera-blue-dark">Actualizaciones de software continuas durante 5+ años</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-marketera-blue" />
                <p className="font-medium text-marketera-blue-dark">Protección de privacidad líder en la industria</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="h-96 w-96 rounded-full bg-marketera-blue-dark absolute -z-10 blur-3xl opacity-10"></div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="Miembro del equipo trabajando" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" 
                alt="Reunión de equipo" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8"
              />
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                <h3 className="font-bold text-marketera-blue-dark text-lg">Nuestra Misión</h3>
                <p className="text-marketera-gray mt-2 text-sm">
                  Crear tecnología que realmente comprenda y se adapte a las necesidades humanas.
                </p>
              </div>
              <div className="bg-marketera-blue-dark p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-white text-lg">Nuestros Valores</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  Innovación, Simplicidad, Calidad y Sostenibilidad.
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
