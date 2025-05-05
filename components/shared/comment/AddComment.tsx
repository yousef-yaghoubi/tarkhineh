'use client';
import React, { useState } from 'react';
import Modal from '../Modal';
import Button from '@/components/shared/button/Button';
import FormAddComment from './FormAddComment';

function AddComment({
  type,
}: {
  type: { name: 'branch'; id: string } | { name: 'product'; id: string };
}) {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
      <Button
        btn="fill"
        theme="Primary"
        className="h-8 md:h-10 w-28 md:w-40 mb-4 caption-md md:body-lg"
        onClickCustom={() => setOpenModal(true)}
      >
        کامنت جدید
      </Button>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={<h3 className="caption-md md:body-lg">افزودن کامنت جدید</h3>}
      >
        <FormAddComment setOpenModal={setOpenModal} type={type}/>
      </Modal>
    </>
  );
}

export default AddComment;
