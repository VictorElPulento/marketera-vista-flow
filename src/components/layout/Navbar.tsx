
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white bg-opacity-90 py-4 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between container-padding">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-marketera-blue-dark">
            <span className="text-xl font-bold text-white">M</span>
          </div>
          <span className="text-xl font-bold text-marketera-blue-dark">MarketEra</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-marketera-blue-dark hover:text-marketera-blue font-medium">Home</Link>
          <Link to="/product" className="text-marketera-blue-dark hover:text-marketera-blue font-medium">Products</Link>
          <Link to="/calendar" className="text-marketera-blue-dark hover:text-marketera-blue font-medium">Calendar</Link>
          <Link to="#" className="text-marketera-blue-dark hover:text-marketera-blue font-medium">About</Link>
        </div>

        {/* Action Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-marketera-gray-light">
            <Search className="h-5 w-5 text-marketera-blue-dark" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-marketera-gray-light">
            <User className="h-5 w-5 text-marketera-blue-dark" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="hover:bg-marketera-gray-light relative">
              <ShoppingCart className="h-5 w-5 text-marketera-blue-dark" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-marketera-neon-lime text-xs font-bold text-marketera-gray-dark">
                2
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="hover:bg-marketera-gray-light relative">
              <ShoppingCart className="h-5 w-5 text-marketera-blue-dark" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-marketera-neon-lime text-xs font-bold text-marketera-gray-dark">
                2
              </span>
            </Button>
          </Link>
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} size="icon">
            {isOpen ? (
              <X className="h-6 w-6 text-marketera-blue-dark" />
            ) : (
              <Menu className="h-6 w-6 text-marketera-blue-dark" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white p-4 md:hidden">
          <div className="flex flex-col gap-6 py-8">
            <Link to="/" className="text-lg font-medium text-marketera-blue-dark" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/product" className="text-lg font-medium text-marketera-blue-dark" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link to="/calendar" className="text-lg font-medium text-marketera-blue-dark" onClick={() => setIsOpen(false)}>
              Calendar
            </Link>
            <Link to="#" className="text-lg font-medium text-marketera-blue-dark" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <div className="flex items-center gap-4 pt-6">
              <Button variant="outline" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
