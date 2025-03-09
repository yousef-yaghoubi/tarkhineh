'use client';
import { createContext, useState, useContext, ReactNode } from 'react';
import { DeliveryMethod, OrderState, PaymentMethod } from '@/lib/indexType';




const initialOrder: OrderState = {
  delivery: { type: 'delivery', address: '' }, // مقدار پیش‌فرض: حضوری بدون شعبه مشخص
  payment: {type: 'online', banck:'saman'}, // مقدار پیش‌فرض: پرداخت اینترنتی
  fee : {price: 0, discount: 0}
};

// 📌 نوع توابع مدیریت سفارش
interface OrderContextType {
  order: OrderState;
  updateDelivery: (delivery: DeliveryMethod) => void;
  updatePayment: (payment: PaymentMethod) => void;
  updateFee: (fee: {price: number, discount: number}) => void
}

// 📌 ایجاد کانتکست
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// 📌 ساخت Provider برای مدیریت سفارش
export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<OrderState>(initialOrder);

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

  const updateFee = (fee: {price: number, discount: number}) => {
    setOrder((prev) => ({
      ...prev,
      fee,
    }));
  };

  return (
    <OrderContext.Provider value={{ order, updateDelivery, updatePayment, updateFee }}>
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
