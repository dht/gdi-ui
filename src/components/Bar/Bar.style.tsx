import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44rem;
  background-color: #112;
  color: #eef;
  font-size: 22rem;
  font-family: monospace;
  padding: 0 10rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  line-height: 32rem;
  user-select: none;

  @media (max-width: 1400px) {
    top: 0;
    bottom: auto;
  }
`;

export const Sign = styled.div`
  color: #2fd9ff;
  color: gold;
  margin: 6rem 5px;
`;

export const Input = styled.input`
  background-color: #112;
  color: #eef;
  border: none;
  outline: none;
  flex: 1;
`;

export const BarItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Item = styled.div`
  border-left: 1rem solid rgba(255, 255, 255, 0.4);
  padding: 0 12rem;
  margin: 5rem 0;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Checkbox = styled.input`
  margin-right: 10rem;
`;

export const Modifier = styled.span`
  font-size: 26rem;
  position: relative;
  top: 4rem;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 2rem;
`;

export const Emoji = styled.span`
  position: relative;
  top: 2rem;
  margin-right: 4rem;
`;
