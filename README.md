# 🎬 Movie Review App

<br>

## 배포URl

- https://zesty-bavarois-5ea4b9.netlify.app/

<br>

## 📝 기능구현 리스트

- ✅ UI 요구사항 구성 윤곽
- ✅ 초기 데이터를 이용하여 데이터 출력
- ✅ 리뷰 내역 데이터 브라우저 탭이나 창을 종료해도 유지
- ✅ 리뷰 내역 별점 높은 순으로 정렬 (같은 경우 제목 기준으로 정렬)
- ✅ 리뷰 내역의 개별 리뷰의 별점 영역은 해당 리뷰의 별점만큼 노출
- 리뷰 검색
  - ✅ 리뷰 검색은 제목 기준으로 합니다.
  - ✅ 결과값 노출시 영화 제목이 검색어를 포함하는 경우 모두 노출해 주세요.
  - ✅ 검색결과 역시 별점과 제목순으로 정렬되어야 한다.
  - ✅ 검색결과와 무관한 데이터는 렌더링하지 않는다.
  - ✅ 검색어가 없는 경우 전체 데이터를 렌더링 합니다.
- ✅ 등록된 리뷰를 삭제할 수 있다.
- ✅ 한줄평 5자 이내로 작성시, 경고가 뜨고 등록이 되지 않는다.

<br>

## ⚙️ 사용방법

```
$ npm install or npm i
$ npm start
```

<br>

## 📚 주요 기술

- 메인: React, Type-script

- 저장소: Local-storage

- 스타일: Styled-components

- 테스트: Jest

- 배포: Netlify

<br>

## ⭐️ 배운점과 아쉬운점

1. Type-script를 잘 사용해보고자 하루 정도를 타입스크립트에 대해서 학습하고 적용

- 우선 적용하면서 느낀점은 타입스크립트가 있으면 상당한 에러를 배포 전에 잡아 사전에 문제를 해결할 수 있어 좋을 것 같다고 느꼈습니다.
- 진행중에 스텍오버플로우와 Type-script 공식문서를 참고하며 type 에러를 처리하였는데, 계속 넘어가지 못하는 에러는 any(안쓰는 것과 똑같다는 이야기를 들었지만)를 사용하게 되어 아쉽습니다. (총 2군대에서 사용하였고 실제 현업에서는 타입스크립트를 어떻게 사용하는지 궁금하게 되었습니다.)

2. Local-storage를 사용한 점

- 상태관리를 하거나 몽고디비를 이용하여 데이터를 넣고 쓰는 것만 하다가, Local-storage를 이용하여 데이터를 관리해보니 생각보다 편하게 느껴졌습니다. 하지만 로컬스토리지로 데이터를 관리하게 되면 보안의 이슈 등 여러가지 문제점이 생길 것 같다는 생각을 하게 되었습니다.
