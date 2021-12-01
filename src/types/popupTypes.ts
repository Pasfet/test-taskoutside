import { ChangeEvent, MouseEvent } from "react";

export interface IPopupProps {
  show: boolean;
  salary: number;
  openCalc: boolean;
  error: boolean;
  deductions: Array<number>;
  setOpen: (e: MouseEvent<HTMLElement>) => void;
  setSalary: (e: ChangeEvent<HTMLInputElement>) => void;
  setOpenCalc: (e: MouseEvent<HTMLElement>) => void;
  sendForm: (e: MouseEvent<HTMLElement>) => void;
  selectItem: (e: ChangeEvent<HTMLInputElement>, ch: any) => void;
}