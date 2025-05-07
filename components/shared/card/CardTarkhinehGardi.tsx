'use client';
import React, { useState } from 'react';
import Modal from '../Modal';
import { branches } from '@/lib/dataPublic';
import { PropsCardTarkhinehGardi } from '@/types/prop';
import CardTarkhinehGardiSmall from './CardTarkhinehGardiSmall';
import CardTarkhinehGardiNormal from './CardTarkhinehGardiNormal';
import CardTarkhinehGardiContentPage from './CardTarkhineGardiContentPage';

export const ModalComponent = ({ isModalOpen, closeModal, id }: { isModalOpen: boolean, closeModal: () => void, id: number }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      images={branches.find((branch) => branch.id == id)}
    ></Modal>
  )
}

function CardTarkhinehGardi({
  title,
  desc,
  img,
  hrefBTN,
  className,
  showBTN,
  id,
  showType,
  onClickCustom,
}: PropsCardTarkhinehGardi) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (showType == 'small') {
    return (
      <CardTarkhinehGardiSmall desc={desc} img={img} title={title} onClickCustom={onClickCustom} openModal={()=> setIsModalOpen(true)} showBTN={showBTN} />
    );
  } else if (showType == 'normal') {
    return (
      <CardTarkhinehGardiNormal className={className} desc={desc} id={id} img={img} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={title} hrefBTN={hrefBTN} showBTN={showBTN} />
    );
  } else if (showType == 'contactPage') {
    return (
      <CardTarkhinehGardiContentPage desc={desc} hrefBTN={hrefBTN} id={id} img={img} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={title} />
    );
  }
}

export default CardTarkhinehGardi;
