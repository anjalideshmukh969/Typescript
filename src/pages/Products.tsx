import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || 'all'
  );
  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((product) => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Eco-Friendly Products'}
          </h1>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={selectedCategory === cat.id ? 'bg-gradient-eco' : ''}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </Button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {searchQuery 
                ? `No products found for "${searchQuery}"`
                : 'No products found in this category'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
