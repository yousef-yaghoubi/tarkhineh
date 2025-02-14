import React from 'react';
import type { FieldError } from 'react-hook-form';

function ErrorMessage({forInput}: {forInput: FieldError | undefined}) {
  return (
    <p className="w-11/12 flex justify-start">
      {forInput && (
        <span className="text-red-500 text-xs" dir="rtl">
          {forInput?.message}
        </span>
      )}
    </p>
  );
}

export default ErrorMessage;
