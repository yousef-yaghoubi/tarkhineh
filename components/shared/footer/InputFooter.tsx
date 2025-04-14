import React from 'react';
import { Input } from "@components/ui/input"

function InputFooter({placeholder}: {placeholder: string}) {
  return <Input type="text" className="rounded-sm body-sm text-gray-1 border-gray-7 h-10 w-full hover:border-gray-1" placeholder={placeholder}/>
}

export default InputFooter;
