import React, { Dispatch, useState } from 'react';
import Modal from './Modal';
import dynamic from 'next/dynamic';
import { z } from 'zod';
import { SchemaAddress } from '@/validators/zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendAddress } from '@/app/actions/address';
import { toast } from 'sonner';
import InputCustom from './input/InputCustom';
import TextAreaInfo from '@/app/shoping/completion-info/TextAreaInfo';
import Button from './button/Button';
import { useOrder } from '@/app/shoping/ShopingProvider';


function ModalForAddAddress({isOpenModal, setIsOpenModal}: {isOpenModal: boolean, setIsOpenModal: Dispatch<boolean>}) {
  
  return (
    <></>
  );
}

export default ModalForAddAddress;
