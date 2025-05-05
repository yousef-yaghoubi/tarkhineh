export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btn: 'text' | 'stroke' | 'fill';
  theme: 'Primary' | 'White' | 'Black';
  loading?: boolean;
  link?: string;
  onClickCustom?: (() => void) | 'reload';
  shopingCard?: FoodType;
}