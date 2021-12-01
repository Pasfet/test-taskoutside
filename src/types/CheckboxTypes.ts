import { ChangeEvent } from "react";

export interface ICheckBoxProps {
  disabled?: boolean;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>, ch: any) => void;
}