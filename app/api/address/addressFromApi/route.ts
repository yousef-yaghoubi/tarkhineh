import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    if (!lat || !lon) {
      return NextResponse.json(
        {
          error: 'Missing lat or lon parameters',
          status: 400,
        },
        { status: 400 }
      );
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'NextJS-App',
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        {
          error: 'Failed to fetch address from Nominatim',
          status: res.status,
        },
        { status: res.status }
      );
    }

    const response = await res.json();

    return NextResponse.json({
      response,
    });
  } catch (error) {
    console.error('Error fetching address:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch address',
        status: 500,
      },
      { status: 500 }
    );
  }
}
