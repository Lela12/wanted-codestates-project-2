# 넥슨코리아

카트 OpenAPI를 이용한 전적 검색 사이트 개발

## 사용한 기술 스택

`React` `Recoil` `Styled-components`

- 배포 사이트 : https://nexon.surge.sh/

- 로컬

1. `git clone https://github.com/Lela12/wanted-codestates-project-2.git`
2. `npm install`
3. `npm run start`

## 구현한 기능 목록

- 닉네임 검색창
- 플레이 유형 선택
- 신고하기 버튼 클릭시 모달창

##### 애니메이션

- 헤더부분의 Navbar 메뉴 `hover`시 `transition`을 사용하여 부드러운 변화 구현
- 검색창 부분 마우스 `hover`시 색 변화 구현
- 전적 조회 페이지에서 1:1 매칭 배너에 `keyframes`로 색 변화 구현

#### 어려웠던 점 (에러 핸들링)

매칭 배너의 색을 변하게 하는 과정에서 어려움이 있었습니다.
background에 `linear-gradient`를 사용하여 진행 방향, 색상을 넣어 부드럽게 전환 되게끔 구현 하였습니다. `keyframes`를 사용하여 위치를 지정 하였습니다.
