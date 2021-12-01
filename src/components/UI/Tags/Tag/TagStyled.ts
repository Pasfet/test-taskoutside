import styled from 'styled-components';
import { Colors } from '../../../../types/colors';
import Pointer from '../../../../assets/icons/pointer.png';

export const TagButton: any = styled.button`
  background: ${Colors.GRAY_700};
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 50px;
  border: none;
  color: ${Colors.BLACK_COLOR};
  transition: background .3s ease;
  &:hover {
    cursor: url(${Pointer}), auto;
    background: ${Colors.GRAY_800};
  }

  &:active {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
    color: ${Colors.WHITE_COLOR};
  }

  ${(props: any) => {
    if (props.active) {
      return `
        background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
        color: ${Colors.WHITE_COLOR};
      `
    }
  }}
`;

export const TagText = styled.span`
  font-size: 14px;
  line-height: 24px;
`;