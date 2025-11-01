import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Leaf, Menu, User, LogOut,Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const Header = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-eco rounded-lg transition-transform group-hover:scale-105">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">EcoMart</h1>
              <p className="text-xs text-muted-foreground">Green Shopping</p>
            </div>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for eco-friendly products..."
                className="pl-10 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            
            
            {user ? (
              <>
                <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                  <User className="h-4 w-4" />
                  {user.fullName || user.email}
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        <nav className="  hidden md:flex gap-6 pb-3 overflow-x-auto">
            <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
             Products
          </Link>

          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
          {/* <Link to="/products?category=clothing" className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            Clothing
          </Link>
          <Link to="/products?category=accessories" className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            Accessories
          </Link>
          <Link to="/products?category=home" className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            Home & Kitchen
          </Link>
          <Link to="/products?category=fitness" className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
            Fitness
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
