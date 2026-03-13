import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">EMart</span>
            </div>
            <p className="text-primary-foreground/80">
              Your trusted destination for sustainable and eco-friendly products.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-primary transition-colors ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-white hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">

              <a href="https://www.instagram.com/anjali.deshmukh_/"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram className="h-6 w-6 cursor-pointer hover:text-accent transition-colors" />
              </a>
              <a
                href="https://facebook.com/deshmukhdinu123"
                target="_blank"
                rel="noopener noreferrer">
                <Facebook className="h-6 w-6 cursor-pointer hover:text-accent transition-colors" />
              </a>
              <a href="mailto:anjalideshmukh2541@gmail.com">
                <Mail className="h-6 w-6 cursor-pointer hover:text-accent transition-colors" />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} EcoMart. All rights reserved. Made with love for the planet.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;