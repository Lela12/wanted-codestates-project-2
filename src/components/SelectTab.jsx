import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaUser, FaUsers } from 'react-icons/fa';

const SelectTab = () => {
  const [selected, setSelected] = useState(true);

  const onIndiHandler = () => {
    setSelected(true);
  };

  const onTeamHandler = () => {
    setSelected(false);
  };

  return (
    <TypeContainer>
      <TypeButton className="indi" selectd={selected} onClick={onIndiHandler}>
        <Icon>
          <FaUser />
        </Icon>
        개인전
      </TypeButton>
      <TypeButton className="team" selectd={!selected} onClick={onTeamHandler}>
        <Icon className="teamIcon">
          <FaUsers />
        </Icon>
        팀전
      </TypeButton>
    </TypeContainer>
  );
};

export default SelectTab;

const TypeContainer = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 12px;
  border-right: 1px solid lightgray;

  .indi {
    border-radius: 5px 0 0 5px;
  }
  .team {
    border-radius: 0 5px 5px 0;
    border-width: 0.7px 0.7px 0.7px 0.7px;
  }
`;

const TypeButton = styled.button`
  width: 7rem;
  height: 25px;
  font-size: 1rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #07f;
  font-weight: 900;
  text-align: center;
  color: #07f;
  cursor: pointer;

  ${(props) =>
    props.selectd &&
    css`
      background: #07f;
      color: #fff;
    `}
  :hover {
    background: #07f;
    color: #fff;
    cursor: pointer;
  }
`;

const Icon = styled.span`
  margin-right: 9px;
`;
// const TeamIcon = styled.span`
//   margin-right: 8px;
//   font-size: 1.5rem;
// `;
