const BASE_URL = 'https://sandbox.zarinpal.com/pg/v4/payment';

export async function createPayment(data: {
  amount: number;
  description: string;
  mobile?: string;
  email?: string;
}) {
  const res = await fetch(`${BASE_URL}/request.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      merchant_id: process.env.ZARINPAL_MERCHANT_ID,
      amount: data.amount,
      description: data.description,
      currency: "IRT",
      callback_url: `${process.env.NEXTAUTH_URL}/payment/callback`,
      metadata: {
        mobile: data.mobile,
        email: data.email,
      },
    }),
  });

  return res.json();
}

export async function verifyPayment(authority: string, amount: number) {
  const res = await fetch(`${BASE_URL}/verify.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      merchant_id: process.env.ZARINPAL_MERCHANT_ID,
      authority,
      amount,
    }),
  });

  return res.json();
}
