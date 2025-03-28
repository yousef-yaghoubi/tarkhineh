'use client';
import Modal from '@/components/shared/Modal';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

function page() {
  const router = useRouter();
  return (
    <Modal
      isOpen={true}
      onClose={() => router.back()}
      title={<h6 className="h7">خروج</h6>}
      desc="آیا میخواهید از حساب خود خارج شوید؟"
      state="removeShopingCart"
    >
      <div className="flex w-64 justify-between">
        <button
          className="w-[117px] h-10 rounded border border-primary text-primary"
          onClick={() => router.back()}
        >
          بازگشت
        </button>
        <button
          className="w-[117px] h-10 rounded bg-error-extralight text-error"
          onClick={async() => {
            await signOut()
            router.replace('/')
          }}  
        >
          حذف
        </button>
      </div>
    </Modal>
  );
}

export default page;
