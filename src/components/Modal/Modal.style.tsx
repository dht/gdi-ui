import styled from 'styled-components';
import Typography from '../Typography/Typography';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20rem;
`;

export const ModalBody = styled.div`
  background-color: white;
  padding-bottom: 10rem;
  min-width: 450rem;
  box-shadow: 0rem 11rem 15rem -7rem rgba(0, 0, 0, 0.2), 0rem 24rem 38rem 3rem rgba(0, 0, 0, 0.14),
    0rem 9rem 46rem 8rem rgba(0, 0, 0, 0.12);
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  height: 40rem;
  line-height: 30rem;
  padding: 5rem 7rem 0 15rem;
  flex-direction: row;
  align-items: center;
  border-bottom: 1rem solid #e0e0e0;
`;

export const Title = styled(Typography)`
  flex: 1;
  color: #262123;
`;

export const HeaderActions = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  i {
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;

    &:hover {
      color: gold;
    }

    &:active {
      bottom: 1rem;
      left: 1rem;
      position: relative;
    }
  }
`;

export const Content = styled.div`
  padding: 0;
  margin-bottom: 14rem;
`;
