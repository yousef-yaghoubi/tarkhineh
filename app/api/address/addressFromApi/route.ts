import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res)
      .then((result) => result.json());

    return NextResponse.json({
      response,
    });
  } catch (error) {
    return Response.json({
      get: 'unsuccessfully',
      status: 400,
    });
    console.log(error)
  }
}
