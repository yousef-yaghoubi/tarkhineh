'use client';
import Button from '@/components/shared/button/Button';
import InputCustom from '@/components/shared/input/InputCustom';
import BoxOfMain from '@/components/shared/shopingCart/BoxOfMain';
import { SchemaEditProfile } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import IconEdit from '@icons/edit-2.svg';
type TypeOfFormEditProfile = z.infer<typeof SchemaEditProfile>;
function page() {
  const [disabeldInput, setDisabeldInput] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TypeOfFormEditProfile>({
    resolver: zodResolver(SchemaEditProfile),
  });

  const submitForm = (e: any) => {
    console.log(e);
  };

  return (
    <BoxOfMain forProfile title="پروفایل من">
      <div className="w-full h-full flex justify-center md:mt-10">
        <form
          className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-3/4 h-full gap-x-4 gap-y-3 lg:gap-y-6 items-start"
          onSubmit={handleSubmit(submitForm)}
        >
          <InputCustom
            {...register('firstName')}
            id="firstName"
            placeholder="نام"
            type="text"
            width="w-full"
            error={errors.firstName}
            disabled={disabeldInput}
          />
          <InputCustom
            {...register('lastName')}
            id="lastName"
            placeholder="نام خانوادگی"
            type="text"
            width="w-full"
            error={errors.lastName}
            disabled={disabeldInput}
          />
          <InputCustom
            {...register('email')}
            id="email"
            placeholder="آدرس ایمیل"
            type="text"
            width="w-full"
            error={errors.email}
            disabled={disabeldInput}
          />
          <InputCustom
            {...register('phone')}
            id="phone"
            placeholder="شماره همراه"
            type="text"
            width="w-full"
            error={errors.phone}
            disabled={disabeldInput}
          />
          <InputCustom
            {...register('birthDay')}
            id="birthDay"
            placeholder="تاریخ تولد (اختیاری)"
            type="text"
            width="w-full"
            error={errors.birthDay}
            disabled={disabeldInput}
          />
          <InputCustom
            {...register('nickName')}
            id="nickName"
            placeholder="نام نمایشی"
            type="text"
            width="w-full"
            error={errors.nickName}
            disabled={disabeldInput}
          />
          <div className={`flex w-full col-span-2 mt-3 mb-16 gap-4 ${disabeldInput ? 'justify-center' : 'justify-end'}`}>
            {disabeldInput ? (
              <Button
                btn="stroke"
                theme="Primary"
                className="h-8 w-[152] md:h-10 md:w-[278px] group"
                onClickCustom={() => setDisabeldInput(false)}
                type="button"
              >
                <span className="flex items-center gap-1">
                  <IconEdit className="w-4 h-4 md:w-6 md:h-6 transtion duration-300 fill-primary group-hover:fill-shade-2" />
                  <span>ویرایش اطلاعات شخصی</span>
                </span>
              </Button>
            ) : (
              <>
                <Button
                  btn="stroke"
                  theme="Primary"
                  className="w-[45%] max-w-[152px] md:w-32 h-8 md:h-10"
                  type="button"
                  onClickCustom={() => setDisabeldInput(true)}
                >
                  انصراف
                </Button>
                <Button
                  btn="fill"
                  theme="Primary"
                  className="w-[45%] max-w-[152px] md:w-32 h-8 md:h-10"
                  type="submit"
                >
                  ذخیره اطلاعات
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </BoxOfMain>
  );
}

export default page;
