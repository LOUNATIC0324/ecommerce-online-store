import { create } from 'zustand';

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotal: () => void;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  addItem: (item) => {
    const existing = get().items.find((i) => i.productId === item.productId);

    set({
      items: existing
        ? get().items.map((i) =>
            i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
          )
        : [...get().items, item],
    });

    get().calculateTotal();
  },
  removeItem: (productId) => {
    set({ items: get().items.filter((item) => item.productId !== productId) });
    get().calculateTotal();
  },
  updateQuantity: (productId, quantity) => {
    set({
      items: get().items.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    });
    get().calculateTotal();
  },
  clearCart: () => set({ items: [], total: 0 }),
  calculateTotal: () => set({ total: get().items.reduce((sum, item) => sum + item.price * item.quantity, 0) }),
}));
