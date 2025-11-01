import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/components/ProductCard';

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
      
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),
      
      toggleWishlist: (product) =>
        set((state) => {
          const isInWishlist = state.wishlist.some((item) => item.id === product.id);
          if (isInWishlist) {
            return {
              wishlist: state.wishlist.filter((item) => item.id !== product.id),
            };
          }
          return { wishlist: [...state.wishlist, product] };
        }),
      
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'exomart-storage',
    }
  )
);
