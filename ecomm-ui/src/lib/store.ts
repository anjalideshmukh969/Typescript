import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';

// Extend Product with quantity for Cart
export interface CartItem extends Product {
  quantity: number;
}

// Define Zustand store state
interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void; // use string, Product.id is string
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  clearCart: () => void;
}

// Zustand store with persistence
export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      addToCart: (product) => {
        const existingItem = get().cart.find((item) => item.id === product.id);
        if (existingItem) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      removeFromCart: (productId) =>
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        }),

      updateQuantity: (productId, quantity) =>
        set({
          cart: get().cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }),

      toggleWishlist: (product) => {
        const isInWishlist = get().wishlist.some((item) => item.id === product.id);
        if (isInWishlist) {
          set({
            wishlist: get().wishlist.filter((item) => item.id !== product.id),
          });
        } else {
          set({
            wishlist: [...get().wishlist, product],
          });
        }
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'exomart-storage', // localStorage key
    }
  )
);