import { NextRequest, NextResponse } from 'next/server';
import { verifyPayment } from '@/lib/zarinpal';
import { SendOrder } from '@/app/actions/orderTracking';

export async function POST(req: NextRequest) {
  const { authority } = await req.json();

  const cookie = req.cookies.get('pendingPayment');
  if (!cookie) {
    return NextResponse.json(
      { success: false, message: 'داده سفارش یافت نشد.' },
      { status: 400 }
    );
  }

  const { order, cart, amount } = JSON.parse(cookie.value);

  const result = await verifyPayment(authority, amount);

  if (result.data.code === 100) {
    await SendOrder({ order, cart });

    const response = NextResponse.json({
      success: true,
      refId: result.data.ref_id,
    });

    response.cookies.set('pendingPayment', '', { maxAge: 0, path: '/' });

    return response;
  }

  return NextResponse.json({
    success: false,
    code: result.data.code,
  });
}
