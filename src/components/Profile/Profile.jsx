import styled from 'styled-components';
import { FaRedo, FaBell, FaShareAlt, FaEye } from 'react-icons/fa';
import SelectTab from './SelectTab';

const Profile = () => {
  return (
    <ProfileContainer>
      <Wrap>
        <UserImg>
          <img
            alt="user-img"
            src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418.png"
          />
        </UserImg>

        <NameContainer>
          <NameWrap>
            BBEESSTT
            <Level />
          </NameWrap>
          <NickInfo>
            <SelectTab />
            <UserAction>
              <ButtonWrap>
                <Icon>
                  <FaRedo />
                </Icon>
                전적갱신
              </ButtonWrap>
              <ButtonWrap>
                <Icon>
                  <FaBell />
                </Icon>
                신고하기
              </ButtonWrap>
              <ButtonWrap>
                <Icon>
                  <FaShareAlt />
                </Icon>
                공유하기
              </ButtonWrap>
            </UserAction>
          </NickInfo>
        </NameContainer>
        <UserRankWrap>
          <Rank>
            <Title>
              <FaEye className="viewIcon" />
              페이지뷰
            </Title>
          </Rank>
          <RankCount>1,000</RankCount>
        </UserRankWrap>
      </Wrap>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: relative;
  height: 175px;
  background-color: rgba(0, 0, 0, 0.025);
  background-image: url(https://tmi.nexon.com/img/background_flag_w.png);
  background-size: cover;
  background-position: 10%;
  border-width: 50%;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
`;

const Wrap = styled.section`
  display: flex;
  padding-top: 26px;
  margin-bottom: 20px;
`;

const UserImg = styled.span`
  img {
    height: 123px;
  }
`;

const NameContainer = styled.div`
  margin-left: 20px;
  width: 100rem;
  height: 25px;
`;

const NameWrap = styled.ul`
  display: flex;
  font-size: 4rem;
  font-weight: 900;
`;

const Level = styled.li`
  position: relative;
  top: 23px;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  list-style: none;
  background: url(https://tmi.nexon.com/img/icon_l3.png) no-repeat 50%;
  background-size: contain;
`;

const NickInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const UserAction = styled.section`
  display: inline-block;
  margin-left: 10px;
`;

const ButtonWrap = styled.button`
  vertical-align: middle;
  margin-right: 10px;
  width: 8rem;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid #1f334a;
  border-radius: 15px;
  text-decoration: none;
  color: #1f334a;
`;
// const ReportButton = styled.button``;
// const ShareButton = styled.button``;
const Icon = styled.span`
  position: relative;
  top: 1px;
  margin-right: 5px;
`;

const UserRankWrap = styled.div`
  position: absolute;
  top: 88px;
  right: 40px;
  margin-top: -23.5px;
  color: #6c7a89;
  font-weight: 400;
  text-align: center;
`;

const Rank = styled.div`
  display: inline-block;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 1.1rem;
  .viewIcon {
    margin-right: 5px;
  }
`;

const RankCount = styled.p`
  font-size: 1.5rem;
`;
