import styled from 'styled-components';

export const Wrapper = styled.span`
  width: 30px;
  text-align: center;

  &.clickable {
    cursor: pointer;

    &:hover {
      color: palevioletred;
    }

    &:active {
      position: relative;
      top: 1rem;
      right: 1rem;
    }
  }
`;
