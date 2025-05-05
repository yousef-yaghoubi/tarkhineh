'use client'
import { AddCommentAction } from '@/app/actions/comment';
import { Textarea } from '@/components/ui/textarea';
import { SchemaAddComment } from '@/validators/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Rating } from '@smastrom/react-rating';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import Button from '../button/Button';

type TypeAddComment = z.infer<typeof SchemaAddComment>;
function FormAddComment({ type, setOpenModal }: { type: { name: 'branch'; id: string } | { name: 'product'; id: string }, setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<TypeAddComment>({
        resolver: zodResolver(SchemaAddComment),
    });

    const submitForm = async (e: TypeAddComment) => {
        try {
            const createComment = await AddCommentAction({
                data: e,
                type: { name: type.name, id: type.id },
            });

            setOpenModal(false);

            if (createComment.status !== 201) {
                toast.warning(createComment.message);
            } else {
                toast.success(createComment.message);
            }
        } catch (err) {
            console.error(err);
            toast.error('یه مشکلی پیش اومد موقع ثبت کامنت 😓');
        }
    };
    return (
        <form
            className="w-4/5 flex flex-col items-center"
            onSubmit={handleSubmit(submitForm)}
        >
            <div className="w-full flex flex-col items-center">
                <label htmlFor="desc" className="caption-lg mb-2 self-start">
                    نظرتان راجع به {type.name == 'branch' ? 'شعبه' : 'محصول'}:
                </label>

                <Textarea
                    {...register('desc')}
                    id="desc"
                    className="rounded w-full max-h-28"
                ></Textarea>
                <span className="text-red-600 caption-sm md:body-sm">
                    {errors.desc?.message}
                </span>

                <div className="flex flex-row w-full justify-center mt-2">
                    <Controller
                        name="rate"
                        control={control}
                        rules={{ required: 'امتیاز الزامی است' }}
                        defaultValue={1}
                        render={({
                            field: { onChange, value: valueRate },
                            fieldState: { error },
                        }) => (
                            <>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={valueRate}
                                    onChange={onChange}
                                />
                                {error && (
                                    <p className="text-red-500 mt-1 caption-sm md:body-sm">
                                        {error.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                </div>

                <Button
                    btn="stroke"
                    theme="Primary"
                    className="h-8 md:h-10 w-28 md:w-40 mb-4 caption-md md:body-lg mt-4"
                    type="submit"
                >
                    ثبت کامنت
                </Button>
            </div>
        </form>
    )
}

export default FormAddComment