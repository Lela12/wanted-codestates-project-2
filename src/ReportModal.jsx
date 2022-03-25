import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 10px;
  z-index: 9998;
`;

const ModalWrap = styled.section`
  width: 27rem;
  height: 270px;
  background-color: white;
  padding: 30px 24px;
  border-bottom: 3px solid #07f;
`;

const Title = styled.h1`
  font-weight: 600;
  line-height: 20px;
  font-size: 1.2rem;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid black;
  padding: 0 10px;
  margin-top: 20px;
  height: 100px;
  width: 275px;
`;

const ButtonWrap = styled.div`
  text-align: right;
  margin-top: 14px;
`;

const Button = styled.button`
  margin-left: 5px;
  width: 50px;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  background-color: #07f;
  border: none;

  :hover {
    background-color: #0d46a0;
  }
`;

const ReportModal = ({ onReportModalHandler }) => {
  return (
    <Container>
      <ModalWrap>
        <Title>유저신고</Title>
        <Text>해당 유저를 신고하시겠습니까?</Text>
        <Text>신고하시려면 사유를 입력해주세요.</Text>
        <Input />
        <ButtonWrap>
          <Button onClick={onReportModalHandler}>아니요</Button>
          <Button>네</Button>
        </ButtonWrap>
      </ModalWrap>
    </Container>
  );
};

export default ReportModal;
