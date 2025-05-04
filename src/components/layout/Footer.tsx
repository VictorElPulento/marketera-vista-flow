
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-marketera-blue-dark text-white">
      <div className="container mx-auto py-12 container-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                <span className="text-xl font-bold text-marketera-blue-dark">M</span>
              </div>
              <span className="text-xl font-bold text-white">MarketEra</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Bringing the future home with cutting-edge smart technology that enhances your everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Smart Home</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Wearables</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Audio</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Press</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Returns & Warranty</Link></li>
              <li><Link to="#" className="hover:text-marketera-electric-blue transition-colors">Shipping Info</Link></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 MarketEra. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
