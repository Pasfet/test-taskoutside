import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { AppWrapper } from './AppStyled';
import Button from './components/UI/Button/Button';
import Popup from './components/Popup/Popup';

const App: FC = () => {
  const [salary, setSalary] = useState<number>(0);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [openCalc, setOpenCalc] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [deductions, setDeductions] = useState<Array<number>>([]);
  const [selectedDeductions, setSelectedDeductions] = useState<Array<number>>([]);
  let maxDeduction = 260000; // Если квартира больше 2млн

  const countSalary = (e: ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    setOpenCalc(false);
    setDeductions([]);
    setSelectedDeductions([]);
    setSalary(Number(e.target.value));
  };

  const toggleOpen = (e: MouseEvent<HTMLElement>): void => {
    setOpenPopup((prev: boolean) => !prev);
  };

  const perYearPayments = (deduction: number): void => {
    if (maxDeduction > deduction) {
      setDeductions(prev => [...prev, deduction]);
      maxDeduction = maxDeduction - deduction;
      perYearPayments(deduction);
    } else {
      setDeductions(prev => [...prev, maxDeduction]);
      return;
    }
  };

  const toggleOpenCalc = (e: MouseEvent<HTMLElement>): void => {
    if (salary) {
      setOpenCalc((prev: boolean) => !prev);
      const percent = 0.13;
      const deductionPerYear = salary * 12 * percent;
      perYearPayments(deductionPerYear);
    } else {
      setError(true);
    }
  };

  const selectItem = (e: ChangeEvent<HTMLInputElement>, ch: any): void => {
    console.log(e.target.checked);
    console.log(ch[0].props.children);
    const deduction = ch[0].props.children[0];

    if (e.target.checked) {
      setSelectedDeductions(prev => [...prev, deduction]);
    } else {
      const lastPay = selectedDeductions.lastIndexOf(deduction);
      setSelectedDeductions(prev => prev.slice(lastPay, 1));
    }
  };

  const sendForm = (e: MouseEvent<HTMLElement>): void => {
    console.log(selectedDeductions.sort((a, b) => b - a));
  };

  return (
    <AppWrapper>
      <Button variant="stroke" size="small" onClickHandler={toggleOpen}>
        Налоговый вычет
      </Button>
      <Popup
        show={openPopup}
        salary={salary}
        setSalary={countSalary}
        setOpen={toggleOpen}
        openCalc={openCalc}
        setOpenCalc={toggleOpenCalc}
        deductions={deductions}
        sendForm={sendForm}
        selectItem={selectItem}
        error={error}
      />
    </AppWrapper>
  );
};

export default App;
