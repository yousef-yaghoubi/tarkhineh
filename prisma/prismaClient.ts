import { PrismaClient } from '@prisma/client'
import { ChevronLeftIcon } from '@radix-ui/react-icons';

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// prisma.$use(async (params, next) => {
//   // فقط وقتی مدل "Food" باشد و داده‌ها خوانده شوند
//   if (params.model === 'OrderTracking' && params.action === 'findMany') {
//       const result = await next(params);

//       const oneHourAgo = new Date();
//       oneHourAgo.setHours(oneHourAgo.getHours() - 1);

//       const updatedOrders = await Promise.all(result.map(async (order) => {
//         if (order.createdAt <= oneHourAgo && order.status === 'available') {
//           return prisma.orderTracking.update({
//             where: { id: order.id },
//                   data: { statusId: 2 }
//               });
//           }
//           return order;
//         }));
        
//         console.log(updatedOrders)
//       return updatedOrders;
//   }
//   return next(params);
// });

export default prisma
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
