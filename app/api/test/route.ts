import prisma from "@/prisma/prismaClient";

export async function GET(req: Request) {

  try {
    const test = await prisma.foods.findMany()

    return Response.json({
        test
    })
  } catch (error) {
    return Response.json({
      test: 'test not ok',
    });
  }
}
