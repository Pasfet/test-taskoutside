import styled from 'styled-components';
import { Colors } from '../../../types/colors';

export const InputLabel: any = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.BLACK_COLOR}
`;

export const InputTextField: any = styled.input`
  color: ${Colors.BLACK_COLOR};
  font-size: 14px;
  line-height: 24px;
  border-radius: 3px;
  border: 1px solid ${Colors.GRAY_800};
  padding: 8px 10px;
  margin-bottom: 5px;
  transition: border .3s ease;
  width: 100%;
  &::placeholder {
    font-size: 14px;
    line-height: 24px;
    color: ${Colors.GRAY_900};
  }

  &:hover {
    ${(props: any) => props.disable && `border: 1px solid ${Colors.BLACK_COLOR}`};
  }

  &:disabled {
    border: 1px solid ${Colors.DISABLED_COLOR};
    color: ${Colors.DISABLED_COLOR};
    background-color: transparent;
  }

  ${(props: any) => {
    if (props.error) {
      return `
        border: 1px solid ${Colors.RED_COLOR};
        color: ${Colors.RED_COLOR};
        &::placeholder {
          color: ${Colors.RED_COLOR};
        }
      `;
    }
  }}
`;

export const InputError: any = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: ${Colors.RED_COLOR};
`;