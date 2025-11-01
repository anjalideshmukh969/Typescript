import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Package, Shield, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import heroImage from '@/assets/hero-eco.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-2xl animate-slide-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🌱 100% Sustainable Products
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Shop Green,
              <span className="text-primary"> Live Better</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover eco-friendly products that make a difference. Quality meets sustainability in every purchase.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-eco hover:opacity-90 transition-opacity">
                  Explore Products
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: '100% Eco-Friendly', desc: 'Sustainable materials' },
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over ₹999' },
              { icon: Shield, title: 'Secure Payment', desc: 'Safe & encrypted' },
              { icon: Package, title: 'Easy Returns', desc: '30-day guarantee' },
            ].map((feature, i) => (
              <Card key={i} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground">Explore our sustainable collections</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.slice(1).map((cat) => (
              <Link key={cat.id} to={`/products?category=${cat.id}`}>
                <Card className="text-center hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{cat.icon}</div>
                    <p className="text-sm font-medium">{cat.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground">Best sellers this month</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
