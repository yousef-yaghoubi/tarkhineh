export const convertToPersianNumbers = (text) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return text.split('').map(char => {
      const digit = parseInt(char, 10);
      return !isNaN(digit) ? persianDigits[digit] : char;
    }).join('');
  };