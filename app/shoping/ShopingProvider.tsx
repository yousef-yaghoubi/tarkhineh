'use client';
import { createContext, useState, useContext, ReactNode } from 'react';
import { useCart } from '@/components/shared/shopingCardProvider';
import { DeliveryMethod, FoodType, OrderState, PaymentMethod } from '@/lib/indexType';




// 📌 مدل داده‌های سفارش (بدون بخش غذا، چون از CartContext استفاده می‌کنیم)


// 📌 مقدار اولیه سفارش
const initialOrder: OrderState = {
  delivery: { type: 'delivery', address: '' }, // مقدار پیش‌فرض: حضوری بدون شعبه مشخص
  payment: 'online', // مقدار پیش‌فرض: پرداخت اینترنتی
};

// 📌 نوع توابع مدیریت سفارش
interface OrderContextType {
  order: OrderState;
  updateDelivery: (delivery: DeliveryMethod) => void;
  updatePayment: (payment: PaymentMethod) => void;
}

// 📌 ایجاد کانتکست
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// 📌 ساخت Provider برای مدیریت سفارش
export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<OrderState>(initialOrder);
  const {
    cart,
    addToCart,
    removeFromCart,
    addQuantity,
    minuseQuantity,
    clearCart,
  } = useCart();

  // ✅ تغییر روش ارسال
  const updateDelivery = (delivery: DeliveryMethod) => {
    setOrder((prev) => ({
      ...prev,
      delivery,
    }));
  };

  // ✅ تغییر روش پرداخت
  const updatePayment = (payment: PaymentMethod) => {
    setOrder((prev) => ({
      ...prev,
      payment,
    }));
  };

  return (
    <OrderContext.Provider value={{ order, updateDelivery, updatePayment }}>
      {children}
    </OrderContext.Provider>
  );
};

// 📌 هوک استفاده از کانتکست سفارش
export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder باید درون OrderProvider استفاده شود');
  return context;
};
