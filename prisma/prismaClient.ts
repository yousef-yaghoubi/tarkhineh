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
//   // بررسی عملیات‌های خواندن (findUnique, findMany, etc.)
//   if (params.action === 'findUnique' || params.action === 'findMany') {
//     // اجرای عملیات اصلی و دریافت نتیجه
//     const result = await next(params);

//     // اگر نتیجه وجود داشته باشد
//     if (result) {
//       // بررسی تاریخ و تغییر وضعیت در صورت نیاز
//       const updateStatus = async (record: any) => {
//         const now = new Date();
//         const recordDate = new Date(record.date);
//         const oneHourAfter = new Date(recordDate.getTime() + 60 * 60 * 1000); // یک ساعت بعد
//         // console.log(now)

//         if (now > oneHourAfter && record.statusId == 1) {
//           await prisma.orderTracking.update({
//             where: { id: record.id },
//             data: { statusId: 2 },
//           });
//         }
//       };

//       // اگر نتیجه یک آرایه باشد (مانند findMany)
//       if (Array.isArray(result)) {
//         for (const record of result) {
//           await updateStatus(record);
//         }
//       } else {
//         // اگر نتیجه یک رکورد باشد (مانند findUnique)
//         await updateStatus(result);
//       }
//     }

//     // بازگرداندن نتیجه
//     return result;
//   }

//   // برای سایر عملیات‌ها، فقط ادامه بده
//   return next(params);
// });

export default prisma
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
