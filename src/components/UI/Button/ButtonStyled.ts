import styled from 'styled-components';
import Pointer from '../../../assets/icons/pointer.png';
import {Colors} from '../../../types/colors';

export const ButtonWrapper: any = styled.button`
  background-color: transparent;
  font-weight: 500;
  font-family: 'Lab Grotesque';
  &:hover {
    cursor: url(${Pointer}), auto;
  }
  ${(props: any) => {
    switch (props.variant) {
      case 'text': 
        return `
        color: ${Colors.RED_COLOR}; 
        font-size: 14px;
        line-height: 24px;
        border: none;
        transition: color .3s ease;
        &:hover {
          color: ${Colors.HOVER_RED};
        }
        &:active {
          color: ${Colors.RED_COLOR};
        }
        `;
      case 'fill':
        return `
          background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
          box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
          border: none;
          border-radius: 6px;
          color: ${Colors.WHITE_COLOR};
          transition: background .3s ease;
          &:hover, &:active {
            background: ${Colors.HOVER_RED};
          }
          &:disabled {
            background: ${Colors.GRAY_900};
          }`;
      case 'stroke':
        return `
          border-radius: 6px;
          background: transparent;
          border: 1px solid ${Colors.WHITE_COLOR};
          padding: 16px 32px;
          color: ${Colors.WHITE_COLOR};
          transition: color .3s ease, background .3s ease;
          &:hover, &:active {
            background: ${Colors.WHITE_COLOR};
            color: ${Colors.BLACK_COLOR};
          }
          &:disabled {
            background: ${Colors.GRAY_900};
            border: ${Colors.GRAY_900};
          }`
      default:
        break;
    }
  }};
  ${(props: any) => {
    switch (props.size) {
      case 'big':
        return `
          padding: 16px 100px;
          font-size: 16px;
          line-height: 24px;
          width: 100%;
        `;
      case 'small':
        return `
          padding: ${props.variant === 'fill' ? '12px 114px' : '12px 24px'};
          font-size: 12px;
          line-height: 16px;
        ` 
      default:
        break;
    }
  }}
`