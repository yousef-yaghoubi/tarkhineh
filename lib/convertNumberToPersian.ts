export const convertToPersianNumbers = (text: string): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  
  return text.split('').map((char: string) => {
      const digit = parseInt(char, 10);
      return !isNaN(digit) ? persianDigits[digit] : char;
  }).join('');
};
