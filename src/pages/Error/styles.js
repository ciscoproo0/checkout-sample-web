import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px auto;
  align-items: center;

  background: #fff;
  width: 600px;
  border-radius: 6px;
`;

export const Title = styled.div`
  margin: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    display: block;
    margin-bottom: 30px;
  }

  pre {
    margin: 10px 10px 30px;
  }

  a {
    font-size: 14px;
    color: #161621;

    margin: 20px;
  }
`;
