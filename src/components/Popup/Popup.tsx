import { FC } from 'react';
import { IPopupProps } from '../../types/popupTypes';
import {
  PopupContent,
  PopupDescription,
  PopupBody,
  PopupHeader,
  PopupOverlay,
  PopupTitle,
  PopupForm,
  PopupTags,
  PopupTagsTitle,
  PopupClose,
  PopupPayment,
  PopupFormList,
  PopupFormItem,
  PopupButtonSend,
  PopupFormListTitle,
} from './PopupStyled';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import InputText from '../UI/InputText/InputText';
import Button from '../UI/Button/Button';
import Tags from '../UI/Tags/Tags';
import Tag from '../UI/Tags/Tag/Tag';
import Checkbox from '../UI/Checkbox/Checkbox';

const Popup: FC<IPopupProps> = ({
  show,
  salary,
  setOpen,
  setSalary,
  deductions,
  openCalc,
  setOpenCalc,
  sendForm,
  selectItem,
  error,
}) => {
  return (
    <PopupOverlay show={show}>
      {show && (
        <PopupBody>
          <PopupHeader>
            <PopupTitle>Налоговый вычет</PopupTitle>
            <PopupClose onClick={setOpen}>
              <CloseIcon />
            </PopupClose>
          </PopupHeader>
          <PopupContent>
            <PopupDescription>
              Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета
              составляет не более 13% от своего официального годового дохода.
            </PopupDescription>
            <PopupForm>
              <InputText
                label="Ваша зарплата в месяц"
                placeholder="Введите данные"
                value={salary}
                onChangeHandler={setSalary}
                error={error}
              />
              <Button variant="text" onClickHandler={setOpenCalc}>
                Рассчитать
              </Button>
              {openCalc && (
                <PopupFormList>
                  <PopupFormListTitle>Итого можете внести в качестве досрочных:</PopupFormListTitle>
                  {deductions?.map((pay, idx) => (
                    <PopupFormItem key={idx}>
                      <Checkbox onChangeHandler={selectItem}>
                        <PopupPayment>{pay} рублей</PopupPayment>
                        {idx + 1}-ый год
                      </Checkbox>
                    </PopupFormItem>
                  ))}
                </PopupFormList>
              )}
              <PopupTags>
                <PopupTagsTitle>Что уменьшаем?</PopupTagsTitle>
                <Tags>
                  <Tag active={false}>Платеж</Tag>
                  <Tag active={true}>Срок</Tag>
                </Tags>
              </PopupTags>
            </PopupForm>
          </PopupContent>
          <PopupButtonSend>
            <Button variant="fill" size="big" onClickHandler={sendForm}>
              Добавить
            </Button>
          </PopupButtonSend>
        </PopupBody>
      )}
    </PopupOverlay>
  );
};

export default Popup;
