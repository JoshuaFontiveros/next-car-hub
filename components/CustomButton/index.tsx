"use client";
import React, { FunctionComponent, ReactElement } from "react";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}): ReactElement => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
