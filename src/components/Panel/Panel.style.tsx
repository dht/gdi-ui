import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  border: 1rem solid #334;
  position: absolute;
  top: 100rem;
  right: 200rem;
  border-radius: 4rem;
  background-color: rgba(10, 10, 20, 0.9);
  box-shadow: 0 0 15rem 5rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 15;

  &.transparent {
    background-color: transparent;
    border: none;
  }
`;

export const Header = styled.div`
  padding: 5rem 10rem;
  border-bottom: 1rem solid rgba(255, 255, 255, 0.1);
  color: #aab;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(10, 10, 20, 0.9);
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  padding: 10rem;

  &.transparent {
    padding: 0;
  }
`;

export const Title = styled.div`
  flex: 1;
  font-size: 16rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    cursor: pointer;
    font-size: 16rem;

    &:hover {
      color: gold;
    }
  }
`;
