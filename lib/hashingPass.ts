import bcrypt from 'bcrypt';

const keySeret = process.env.HASH_PASS_SECRET;

export async function hashingPasswordWithkey(plainPassword: string) {
  const saltRounds = 10;

  try {
    const passwordWithPepper = plainPassword + keySeret;

    const hashedPassword = await bcrypt.hash(passwordWithPepper, saltRounds);

    return hashedPassword;
  } catch (error) {
    console.error('خطا در هش کردن رمز عبور:', error);
    throw error;
  }
}

export async function verifyHashedPassword(plainPassword: string, hashedPassword:string) {
  try {
    
    const passwordWithPepper = plainPassword + keySeret;

    
    const isMatch = await bcrypt.compare(passwordWithPepper, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error('خطا در بررسی رمز عبور:', error);
    throw error;
  }
}
