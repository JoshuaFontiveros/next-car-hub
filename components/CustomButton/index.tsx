'use client';
import React, { FunctionComponent, ReactElement } from 'react';

import { CustomButtonProps } from '@/types';

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
}): ReactElement => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
