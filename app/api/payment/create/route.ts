import { NextRequest, NextResponse } from 'next/server';
import { createPayment } from '@/lib/zarinpal';

export async function POST(req: NextRequest) {
  const { amount, order, cart } = await req.json();

  const result = await createPayment({
    amount,
    description: 'خرید اشتراک',
  });

  if (result.data.code !== 100) {
    return NextResponse.json(result);
  }

  const response = NextResponse.json({
    paymentUrl: `https://sandbox.zarinpal.com/pg/StartPay/${result.data.authority}`,
  });

  const cookieData = JSON.stringify({ order, cart, amount });
  response.cookies.set('pendingPayment', cookieData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60, // 1 hour
  });

  return response;
}
