import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';
import Match from '../components/Match/Match';
import Profile from '../components/Profile/Profile';

const MainPage = () => {
  return (
    <Container>
      <ApiInfo>
        <InfoIcon>
          <FaInfoCircle />
        </InfoIcon>
        카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
      </ApiInfo>
      <Profile />
      <Match />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100rem;
  margin: 0 auto;
  padding-top: 10px;
`;

const ApiInfo = styled.section`
  position: relative;
  top: 13px;
  left: 10px;
`;

const InfoIcon = styled.span`
  display: inline-block;
  margin-right: 5px;
`;
