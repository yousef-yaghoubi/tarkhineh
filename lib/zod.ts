import { z } from 'zod';

export const SchemaLogin = z.object({
  email: z
    .string()
    .email('ایمیل نامعتبر است')
    .refine((val) => val.endsWith('@gmail.com'), {
      message: 'ایمیل باید با @gmail.com تمام شود',
    }),

  password: z
    .string()
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
      message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
    }),
});

// export const SchemaRegister = z
//   .object({
//     email: z
//       .string()
//       .email('ایمیل نامعتبر است')
//       .refine((val) => val.endsWith('@gmail.com'), {
//         message: 'ایمیل باید با @gmail.com تمام شود',
//       }),
//     password: z
//       .string()
//       .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
//       .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
//         message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
//       }),
//     repassword: z
//       .string()
//       .min(8, 'تکرار رمز عبور باید حداقل 8 کاراکتر باشد')
//       .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
//         message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
//       }),
//   })
//   .refine((data) => data.password === data.repassword, {
//     message: '.تکرار رمز با رمز عبور مطابقت ندارد',
//     path: ['repassword'],
//   });

export const SchemaNewUser = z
  .object({
    email: z
      .string()
      .email('ایمیل نامعتبر است')
      .refine((val) => val.endsWith('@gmail.com'), {
        message: 'ایمیل باید با @gmail.com تمام شود',
      }),
    password: z
      .string()
      .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
      .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
        message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
      }),
    repassword: z
      .string()
      .min(8, 'تکرار رمز عبور باید حداقل 8 کاراکتر باشد')
      .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
        message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
      }),
  })
  .refine((data) => data.password === data.repassword, {
    message: '.تکرار رمز با رمز عبور مطابقت ندارد',
    path: ['repassword'],
  });

export const SchemaEmail = z.object({
  email: z
    .string()
    .email('ایمیل نامعتبر است')
    .refine((val) => val.endsWith('@gmail.com'), {
      message: 'ایمیل باید با @gmail.com تمام شود',
    }),
});

export const SchemaAddressWithPhone = z.object({
  title: z
    .string()
    .nonempty('این فیلد ضروری است')
    .min(3, 'حداقل 3 حرف وارد کنید')
    .max(25, 'بیشتر از 25 حرف نباید وارد کنید'),
  checkbox: z.literal(true),
  phone: z
    .string()
    .min(11, 'شماره باید 11 رقم باشد')
    .max(11, 'شماره باید 11 رقم باشد')
    .regex(/^\d+$/, 'فقط مجاز هستید عدد وارد کنید')
    .transform((val) => val.trim()),
  address: z
    .string()
    .min(3, 'حداقل باید 3 حرف باشد')
    .max(400, 'حداکثر باید 400 حرف باشد'),
});

export const SchemaAddressWithRecipient = z.object({
  title: z
    .string()
    .nonempty('این فیلد ضروری است')
    .min(3, 'حداقل 3 حرف وارد کنید')
    .max(25, 'بیشتر از 25 حرف نباید وارد کنید'),
  checkbox: z.literal(false),
  nameRecipient: z
    .string()
    .min(3, 'حداقل باید 3 حرف باشد')
    .max(50, 'حداکثر باید 50 حرف باشد')
    .regex(/^[^\d]+$/, 'اعداد مجاز نیستند'),
  phoneRecipient: z
    .string()
    .min(11, 'شماره باید 11 رقم باشد')
    .max(11, 'شماره باید 11 رقم باشد')
    .regex(/^\d+$/, 'فقط مجاز هستید عدد وارد کنید')
    .transform((val) => val.trim()).optional(),
  address: z
    .string()
    .min(30, 'حداقل باید 30 حرف باشد')
    .max(400, 'حداکثر باید 400 حرف باشد'),
});

export const SchemaAddress = z.discriminatedUnion("checkbox", [
  SchemaAddressWithRecipient,
  SchemaAddressWithPhone
])