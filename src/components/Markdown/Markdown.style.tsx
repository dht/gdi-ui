import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-right: 10px;
  max-width: 700px;
  line-height: 24px;

  &.dark {
    color: white;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &.light {
    color: #333;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  &.dark,
  &.light {
    li::before {
      display: block;
    }

    p::before {
      display: block;
    }
  }

  .mark-down {
    background-color: transparent;
  }

  &.wrap {
    white-space: pre-wrap;
    text-align: left;
    line-height: 16px;

    p {
      margin: 0;
    }

    a {
      color: #191919;
      text-decoration: underline;
      font-weight: 600;
    }
  }

  a {
    color: #2979ff;
    text-decoration: none;
  }
`;
