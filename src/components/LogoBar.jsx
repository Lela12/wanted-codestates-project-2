import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';

const LogoBar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoLeft>
          <Logo>
            <img alt="kart-logo" src="https://tmi.nexon.com/img/assets/logo_kart.png" />
            <FaCaretDown className="arrow" />
          </Logo>
          <Tmi>
            <img alt="tmi-logo" src="https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg" />
          </Tmi>
        </LogoLeft>
        <LogoWrap>
          <a href="https://kart.nexon.com/Main/Index.aspx">카트라이더 홈페이지 바로가기</a>
        </LogoWrap>
      </Wrapper>
    </Container>
  );
};

export default LogoBar;

const Container = styled.div`
  display: flex;
  height: 48px;
  background-color: #fff;
  padding: 5px 12px;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  height: 48px;
  margin: auto;
  line-height: 48px;
  width: 100rem;
`;

const LogoLeft = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  list-style: none;
  padding-left: 0.5rem;
  height: 48px;
  .arrow {
    font-size: 1.2rem;
    color: lightgray;
  }
`;

const Logo = styled.li`
  display: flex;
  align-items: center;
`;

const Tmi = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const LogoWrap = styled.h1`
  display: flex;
  margin: 0;
  a {
    text-decoration: none;
    color: #6c7a89;
    font-size: 0.8rem;
  }
`;
