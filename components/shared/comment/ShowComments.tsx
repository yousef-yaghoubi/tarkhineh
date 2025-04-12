import React, { ComponentProps } from 'react';
import AddComment from './AddComment';
import { CommentType } from '@/types';
import SliderSwiper from '../swiper/SliderSwiper';
import clsx from 'clsx';

function ShowComments({
  type,
  comments,
  id,
  className
}: {
  type: 'product' | 'branch';
  comments: CommentType[];
  id: number;
  className: ComponentProps<'div'>['className']
}) {
  return (
    <div className={clsx('w-full flex flex-col items-center mt-5', className)}>
      <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
        نظرات کاربران
      </span>

      <AddComment type={{ name: type, id: id }} />
      {comments.length != 0 ? (
        <SliderSwiper theme="White" commentSlides={comments as CommentType[]}/>
      ) : (
        <div className="h-16 mt-10">کامنتی وجود ندارد</div>
      )}
    </div>
  );
}

export default ShowComments;
