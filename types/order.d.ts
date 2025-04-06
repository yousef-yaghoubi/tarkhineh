export type DeliveryMethod =
  | { type: 'pickup'; branch: 'ekbatan' | 'vanak' | 'aghdasie' | 'chaloos' }
  | { type: 'delivery'; address: string };

export type PaymentMethod =
  | { type: 'online'; banck: 'tejarat' | 'saderat' | 'saman' }
  | { type: 'cash_on_delivery' };

export interface OrderState {
  delivery: DeliveryMethod;
  payment: PaymentMethod;
  fee: { price: number; discount: number };
}
