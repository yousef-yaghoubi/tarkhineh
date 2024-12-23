"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  btn: "text" | "stroke" | "fill";
  btnSize: string;
  theme: "Primary" | "White" | "Black";
  disabled?: boolean;
  loading?: boolean;
  children: string;
  iconR?: string;
  iconL?: string;
  link?: string;
  iconSize?: number;
  iconW?: string;
  iconH?: string;
  onClickCustom?: Function,
  type?: 'button' | 'reset' | 'submit' 
}
function Button({
  btn,
  btnSize,
  theme,
  disabled,
  loading,
  children,
  iconR,
  iconL,
  link,
  iconSize,
  iconW,
  iconH,
  onClickCustom,
  type
}: Props) {
  const router = useRouter();
  if (btn == "fill") {
    return (
      <button
        className={`duration-300 disabled:bg-gray-3 disabled:text-gray-4 ${
          theme === "Primary"
            ? "bg-primary text-white hover:bg-shade-2 selection:bg-shade-3"
            : theme === "White"
            ? "bg-tint-1 text-primary hover:bg-tint-2"
            : "bg-gray-7 text-white hover:bg-gray-8"
        } rounded-sm md:rounded-md flex items-center justify-around relative ${btnSize}`}
        onClick={() => {
          onClickCustom && onClickCustom();
          link && router.push(link)
        }}
        disabled={disabled !== true ? false : true}
      >
        {loading !== true ? (
          <>
            {iconR && (
              <Image
                src={iconR}
                alt={iconR}
                width={iconSize}
                height={iconSize}
                className={`${iconW} ${iconH} absolute right-1`}
              />
            )}

            {children}

            {iconL && (
              <Image
                src={iconL}
                alt={iconL}
                width={iconSize}
                height={iconSize}
                className={`${iconW} ${iconH} absolute left-1`}
              />
            )}
          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </button>
    );
  } else if (btn == "stroke") {
    return (
      <button
        className={`bg-transparent border duration-300 disabled:border-gray-4 disabled:text-gray-4 ${
          theme === "Primary"
            ? "text-primary border-primary hover:border-shade-2 hover:text-shade-2 selection:text-shade-3 selection:border-shade-3"
            : theme === "White"
            ? "text-white border-white hover:border-gray-2 hover:text-gray-2 selection:text-gray-3 selection:border-gray-3"
            : "text-gray-7 border-gray-7 hover:border-gray-8 hover:text-gray-8 selection:text-black selection:border-blatext-black"
        } rounded-sm flex items-center justify-around relative ${btnSize}`}
        onClick={() => {
          onClickCustom && onClickCustom();
          link && router.push(link)
        }}
        disabled={disabled !== true ? false : true}
      >
        {loading !== true ? (
          <>
            {iconR && (
              <Image
                src={iconR}
                alt={iconR}
                width={iconSize}
                height={iconSize}
                className={`${iconW} ${iconH} [position:unset]`}
              />
            )}

            {children}

            {iconL && (
              <Image
                src={iconL}
                alt={iconL}
                width={iconSize}
                height={iconSize}
                className={`${iconW} ${iconH} [position:unset]`}
              />
            )}
          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </button>
    );
  } else {
    return (
      <button
        className={`bg-transparent disabled:text-gray-4 ${
          theme === "Primary"
            ? "text-primary hover:text-shade-2 selection:text-shade-3"
            : theme === "White"
            ? "text-white hover:text-gray-1 selection:text-gray-3"
            : "text-gray-7 hover:text-gray-8 selection:text-black"
        } rounded-sm md:rounded-md flex items-center justify-around relative ${btnSize}`}
        onClick={() => {
          onClickCustom && onClickCustom();
          link && router.push(link)
        }}
        disabled={disabled !== true ? false : true}
      >
        {loading !== true ? (
          <>
            {iconR && (
              <Image
                src={iconR}
                alt={iconR}
                width={iconSize}
                height={iconSize}
                className={`${iconW} ${iconH} absolute right-1`}
              />
            )}

            {children}

            {iconL && (
              <Image
                src={iconL}
                alt={iconL}
                width={iconSize}
                height={iconSize}
                className={`${iconW} ${iconH} absolute left-1`}
              />
            )}
          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </button>
    );
  }
}

export default Button;
