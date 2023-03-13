import { ReactElement } from "react";
import { ButtonProps } from "../Buttons/types";
import { inputStyles as S } from "./styles/inputStyles";

export interface InputProps {
  isTextarea?: boolean;
  placeholder: string;
  button?: ReactElement<ButtonProps>;
  label?: string;
  visual?: string;
  hint?: {
    message: string;
    position: string;
  };
}

export const Input = ({
  isTextarea = false,
  placeholder,
  button,
  label,
  visual,
  hint,
}: InputProps) => {
  return (
    <>
      <S.GeneratWrapper>
        {label && <S.Label>{label}</S.Label>}
        {hint?.position === "top" && <S.Hint>{hint.message}</S.Hint>}

        {isTextarea ? (
          <S.Textarea rows={5} cols={30} placeholder={placeholder} />
        ) : (
          <S.InputWrapper>
            <S.Input type="text" placeholder={placeholder} visual={visual} />
            {button && <>{button}</>}
          </S.InputWrapper>
        )}

        {hint?.position === "bottom" && <S.Hint>{hint.message}</S.Hint>}
      </S.GeneratWrapper>
    </>
  );
};
