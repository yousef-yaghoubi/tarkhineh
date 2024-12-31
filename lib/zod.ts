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

export const SchemaRegister = z
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
