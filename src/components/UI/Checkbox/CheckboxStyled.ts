import styled from 'styled-components';
import { Colors } from '../../../types/colors';
import Pointer from '../../../assets/icons/pointer.png';

export const CheckboxLabel: any = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #756f86;
  font-family: 'Lab Grotesque';
  &:hover {
    cursor: url(${Pointer}), auto;
  }

  & > input:not(:disabled):not(:checked) + span::before {
    border-color: ${Colors.BLACK_COLOR};
  }

  & > input:not(:disabled):active+ span::before {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  }

  & > input:focus:not(:checked) + span::before {
    border-color: ${Colors.BLACK_COLOR};
  }

  & > input:checked + span::before {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.45455 8.70149L1.11364 5.25373L0 6.40299L4.45455 11L14 1.14925L12.8864 0L4.45455 8.70149Z' fill='white'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
  }

  & > input:disabled + span::before {
    background-color: ${Colors.GRAY_900};
  }
`;

export const HiddenCheckbox: any = styled.input.attrs({type: 'checkbox'})`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const CheckboxText: any = styled.span`
  display: inline-flex;
  align-items: center;
  user-select: none;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid ${Colors.GRAY_800};
    border-radius: 6px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    margin-right: 10px;
  }
`;

