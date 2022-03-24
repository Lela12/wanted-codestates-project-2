import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const SearchInput = () => {
  return (
    <SearchContainer>
      <Search type="text" placeholder="닉네임 검색" />
      <SearchIcon>
        <BiSearch />
      </SearchIcon>
    </SearchContainer>
  );
};
export default SearchInput;

const SearchContainer = styled.div`
  width: 12rem;
  height: 80%;
  position: absolute;
  top: 0;
  right: 15px;
`;

const Search = styled.input`
  width: 13rem;
  height: 32px;
  padding-left: 10px;
  padding-right: 25px;
  font-size: 1rem;
  background-color: transparent;
  outline: 0;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  opacity: 0.5;
  transition: 0.3s ease;
  vertical-align: center;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  font-size: 1.2rem;
  top: 20px;
  right: -7px;
  color: #fff;
  opacity: 0.5;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
