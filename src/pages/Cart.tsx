import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add some eco-friendly products to get started!</p>
          <Link to="/products">
            <Button size="lg" className="bg-gradient-eco">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">{cart.length} items</p>
          </div>
          <Button variant="outline" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            ₹{item.price * item.quantity}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ₹{item.price} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-primary">₹49</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes (18%)</span>
                    <span className="font-medium">₹{(totalPrice * 0.18).toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between mb-6">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{(totalPrice + 49 + totalPrice * 0.18).toFixed(2)}
                  </span>
                </div>

                <Link to="/checkout" className="block mb-4">
                  <Button className="w-full bg-gradient-eco hover:opacity-90 transition-opacity" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
