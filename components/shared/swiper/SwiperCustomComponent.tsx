import React from 'react'
import { IconNavigationLeft, IconNavigationRight } from './IconNavigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Comment from '@/components/shared/comment/Comment';
import { NavBadgeMenu, navStats } from '@/lib/dataPublic';
import Badge from '@/components/shared/badge/Badge';
import dynamic from 'next/dynamic';
import CardFoodLoading from '../card/cardFood/CardFoodLoading';
import { CommentType, FoodType } from '@/types';

const CardFoodBranch = dynamic(() => import('@/components/shared/card/cardFood/CardFoodBranch'), {
    loading: () => <CardFoodLoading />,
});

function SwiperCustomComponent({ foodSlides,
    commentSlides,
    badgeSlides
}: {
    foodSlides?: FoodType[];
    commentSlides?: CommentType[];
    badgeSlides?: 'type' | 'sort';
}) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                prevEl: '.prevSlide',
                nextEl: '.nextSlide',
            }}
            pagination={
                commentSlides !== undefined && {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className}"></span>`;
                    },
                }
            }
            breakpoints={
                foodSlides !== undefined
                    ? {
                        200: {
                            slidesPerView: 1.5,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        450: {
                            slidesPerView: 2.2,
                        },
                        550: {
                            slidesPerView: 2.8,
                        },
                        650: {
                            slidesPerView: 3.3,
                        },
                        770: {
                            slidesPerView: 2.1,
                        },
                        900: {
                            slidesPerView: 2.3,
                        },
                        1000: {
                            slidesPerView: 3.1,
                        },
                        1300: {
                            slidesPerView: 4,
                        },
                        1500: {
                            slidesPerView: 4.1,
                        },
                    }
                    : badgeSlides !== undefined
                        ? {
                            200: {
                                slidesPerView: 'auto',
                            },
                        }
                        : {
                            200: {
                                slidesPerView: 1.1,
                            },
                            370: {
                                slidesPerView: 1.3,
                            },
                            480: {
                                slidesPerView: 1.5,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            770: {
                                slidesPerView: 1.1,
                            },
                            900: {
                                slidesPerView: 1.3,
                            },
                            1050: {
                                slidesPerView: 1.5,
                            },
                            1250: {
                                slidesPerView: 1.8,
                            },
                            1500: {
                                slidesPerView: 2.1,
                            },
                            1700: {
                                slidesPerView: 2.5,
                            },
                        }
            }
            className={` !overflow-visible w-[90%] ${badgeSlides !== undefined ? 'md:w-full' : 'md:w-11/12'} relative`}
        >
            <IconNavigationRight badgeSlides={badgeSlides} />

            {commentSlides !== undefined
                ? commentSlides?.map((comment) => (
                    <SwiperSlide
                        key={comment.id}
                        className="p-0 !flex justify-center items-center"
                    >
                        <Comment
                            createdAt={comment.createdAt}
                            desc={comment.desc}
                            score={comment.score}
                            user={comment.user}
                        />
                    </SwiperSlide>
                ))
                : badgeSlides == 'sort'
                    ? NavBadgeMenu.map((badge) => (
                        <SwiperSlide key={badge.id} className="!w-fit mx-2">
                            <Badge title={badge.title} url={badge.url} />
                        </SwiperSlide>
                    ))
                    : badgeSlides == 'type'
                        ? navStats.at(2)!.subMain!.map((badge) => (
                            <SwiperSlide key={badge.id} className="!w-fit mx-2">
                                <Badge title={badge.label} url={badge.routeQuery} />
                            </SwiperSlide>
                        ))
                        : foodSlides?.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                className="p-0 !flex justify-center items-center"
                            >
                                <CardFoodBranch item={item} />
                            </SwiperSlide>
                        ))}

            <IconNavigationLeft badgeSlides={badgeSlides} />

            <span
                className={`swiper-pagination !w-[82px] h-[19px] mx-auto inset-0 justify-center items-center !-bottom-8 ${commentSlides !== undefined ? 'flex' : 'hidden'
                    }`}
            ></span>
        </Swiper>
    )
}

export default SwiperCustomComponent