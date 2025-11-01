import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">EcoMart</span>
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
              <Facebook className="h-6 w-6 cursor-pointer hover:text-accent transition-colors" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-accent transition-colors" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-accent transition-colors" />
              <Mail className="h-6 w-6 cursor-pointer hover:text-accent transition-colors" />
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

// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="border-t bg-secondary/30 mt-auto">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand Section */}
//           <div>
//             <Link to="/" className="flex items-center space-x-2 mb-4">
//               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
//                 <span className="text-xl font-bold text-primary-foreground">E</span>
//               </div>
//               <span className="text-2xl font-bold text-primary">Ecomart</span>
//             </Link>
//             <p className="text-sm text-muted-foreground mb-4">
//               Your trusted destination for sustainable and eco-friendly products. Building a greener future together.
//             </p>
//             <div className="flex gap-3">
//               <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
//                 <Facebook className="h-4 w-4" />
//               </a>
//               <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
//                 <Instagram className="h-4 w-4" />
//               </a>
//               <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
//                 <Twitter className="h-4 w-4" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
//                   My Account
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h3 className="font-semibold mb-4">Customer Service</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                   Track Order
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                   Shipping Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                   Return Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                   Terms & Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-semibold mb-4">Contact Us</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-2">
//                 <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
//                 <span className="text-muted-foreground">123 Green Street, Eco City, EC 12345</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="h-4 w-4 text-primary flex-shrink-0" />
//                 <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
//                   +1 (555) 123-4567
//                 </a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="h-4 w-4 text-primary flex-shrink-0" />
//                 <a href="mailto:support@ecomart.com" className="text-muted-foreground hover:text-primary transition-colors">
//                   support@ecomart.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} Ecomart. All rights reserved. Building a sustainable future.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
