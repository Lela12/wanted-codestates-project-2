import styled from 'styled-components';

const Match = () => {
  return (
    <Container>
      <p>1대1 매칭 시뮬레이터와 가상 대결을 펼쳐보세요.</p>
    </Container>
  );
};

export default Match;

const Container = styled.div`
  display: flex;
  width: 100rem;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  line-height: 45px;
  margin-top: 20px;
  padding-left: 20px;
  animation: gradientBG 20s ease infinite;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  p {
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
  }
`;
