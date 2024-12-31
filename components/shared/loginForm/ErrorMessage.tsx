import React from 'react';
import type { FieldElement, FieldError } from 'react-hook-form';

interface ForInputType{
    message: string | undefined,
    ref: FieldElement,
    type: string | undefined
}

function ErrorMessage({forInput}: {forInput: FieldError | undefined}) {
  return (
    <p className="w-11/12 flex justify-start mt-1 mb-1">
      {forInput && (
        <span className="text-red-500 text-xs" dir="rtl">
          {forInput.message}
        </span>
      )}
    </p>
  );
}

export default ErrorMessage;
