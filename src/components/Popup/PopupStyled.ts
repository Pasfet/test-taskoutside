import styled from 'styled-components';
import { Colors } from '../../types/colors';
import Pointer from '../../assets/icons/pointer.png';

export const PopupOverlay: any = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props: any) => props.show ? 'z-index: 10' : 'z-index: -1'};
  @media (min-width: 768px) {
    background: ${Colors.GRAY_SPACES};
  }
`;

export const PopupBody: any = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    width: 460px;
    height: min-content;
    border-radius: 30px;
    padding: 32px;
  }
  @media(min-width: 1440px) {
    width: 550px;
  }
`;

export const PopupHeader: any = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PopupTitle: any = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.BLACK_COLOR};
  @media(min-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const PopupClose: any = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: url(${Pointer}), auto;
  }
`;

export const PopupContent: any = styled.div`
  padding: 16px 0;
`;

export const PopupDescription: any = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.DISABLED_COLOR};
  @media(min-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const PopupForm: any = styled.div`
  margin-top: 24px;
  @media(min-width: 768px) {
    
  }
`;

export const PopupFormList: any = styled.ul`
  list-style-type: none;
  overflow: auto;
  height: 300px;
`;

export const PopupFormListTitle: any = styled.li`
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.BLACK_COLOR};
`;

export const PopupFormItem: any = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid ${Colors.GRAY_800};
`;

export const PopupPayment: any = styled.div`
  margin-right: 5px; 
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.BLACK_COLOR};
`;

export const PopupTags: any = styled.div`
  margin-top: 25px;
`;

export const PopupTagsTitle: any = styled.h3`
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.BLACK_COLOR};
`;

export const PopupButtonSend: any = styled.div`
  margin-top: auto;
  text-align: center;
`;