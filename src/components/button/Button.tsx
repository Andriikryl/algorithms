import React from "react";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
  hue: number;
}

export default function Button({ text, onClick, disabled, hue }: ButtonProps) {
  return (
    <button
      className={style.cybr__btn}
      onClick={onClick}
      disabled={disabled}
      style={
        {
          "--primary-hue": `${hue}`,
        } as React.CSSProperties
      }
    >
      {text}
      <span aria-hidden>_</span>
      <span aria-hidden className={style.cybr__btn__glitch}>
        {text}
      </span>
      <span aria-hidden className={style.cybr__btn__tag}>
        R25
      </span>
    </button>
  );
}
