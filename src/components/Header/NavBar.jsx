import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const NavBar = () => {
  const navigate = useNavigate();

  const tabItems = [
    { title: '홈', link: '/' },
    { title: '랭킹', link: '/ranking' },
  ];

  const onLinkHandler = (active) => {
    if (!active) return;
    navigate(active);
  };

  return (
    <NabCantainer>
      <NavWrapper>
        <TabContainer>
          {tabItems.map((item, index) => (
            <Tab
              key={index}
              onClick={() => {
                onLinkHandler(index.link);
              }}
            >
              {item.title}
            </Tab>
          ))}
        </TabContainer>
        <SearchInput />
      </NavWrapper>
    </NabCantainer>
  );
};

export default NavBar;

const NabCantainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #005fcc;
`;

const NavWrapper = styled.nav`
  width: 100rem;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  margin: auto;
  line-height: 55px;
  z-index: 15;
`;

const TabContainer = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const Tab = styled.li`
  width: 7rem;
  font-size: 1rem;
  text-align: center;
  float: left;
  transition: all 0.15s ease-in-out;
  margin-right: 2rem;
  background-color: transparent;
  color: #fff;
  opacity: 0.5;

  &:after {
    position: absolute;
    display: block;
    content: ' ';
    bottom: 0;
    width: 0;
    border-bottom: 4px solid white;
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    opacity: 1;
    &:after {
      width: 7rem;
    }
  }
`;
