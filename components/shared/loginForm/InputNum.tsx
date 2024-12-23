'use client'
import { useState } from "react";

export default function FloatingLabelInput() {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-sm flex justify-center mt-6">
      <input
        type="text"
        id="floatingInput"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-11/12 max-w-[344px] border border-gray-4 h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary hover:border-gray-8"
        placeholder="ایمیل"
      />
      <label
        htmlFor="floatingInput"
        className={`absolute right-10 -top-[15px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 peer-placeholder-shown:text-base peer-focus:-top-[15px] focus:text-sm peer-focus:text-primary bg-white`}
      >
        ایمیل
      </label>
    </div>
  );
}
