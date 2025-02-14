'use server';

import { SchemaAddress } from '@/lib/zod';
import prisma from '@/prisma/prismaClient';
import { z } from 'zod';
import { authOption } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export async function GetAddress(lat: number, lng: number) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

type typeAdrress = z.infer<typeof SchemaAddress>;

export async function SendAddress(props: typeAdrress) {
  const session = await getServerSession(authOption);
  if (session?.user?.email) {
    try {
      let response = null;
      if (props.checkbox == true) {
        response = await prisma.addresses.create({
          data:{
            titleAddress: props.title,
            address: props.address,
            meReciver: true,
            phone: props.phone,
            userId: Number(session.user.id)
          }
        });
      } else {
        response = await prisma.addresses.create({
          data:{
            titleAddress: props.title,
            address: props.address,
            meReciver: false,
            nameReciver: props.nameRecipient,
            phone: props.phoneRecipient,
            userId: Number(session.user.id)
          }
        });
      }

      // console.log('Address created:', response);
    } catch (error) {
      console.error('Error creating address:', error);
    }
  } else {
    console.error('No user session found.');
  }
}

export async function GetAddressUser() {
  const session = await getServerSession(authOption);
  if (session?.user?.email) {
    try {
      const response = await prisma.user.findUnique({
        where:{
          email: session.user.email
        },
        select:{
          addresses:true
        }
      });
      console.log('Address created:', response);
      return response;
    } catch (error) {
      console.error('Error creating address:', error);
    }
  } else {
    console.error('No user session found.');
  }
}