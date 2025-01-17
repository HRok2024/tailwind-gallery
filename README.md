# Tailwind Gallery - 이미지 검색 웹앱

이 프로젝트는 사용자가 이미지를 검색하고, 검색된 이미지를 태그와 함께 표시하는 **이미지 검색 웹 애플리케이션**입니다. 사용자는 검색어를 입력하고 관련된 이미지를 Pixabay API를 통해 가져와 화면에 표시할 수 있습니다. 이 웹 애플리케이션은 `create-react-app`으로 생성된 리액트 앱이며, `Tailwind CSS`를 사용해 스타일링되었습니다.

## 🚀 기능

- **이미지 검색**: 사용자가 입력한 검색어에 맞는 이미지를 `Pixabay API`에서 가져와 화면에 표시합니다.
- **이미지 카드**: 검색된 이미지는 각각 카드 형태로 표시되며, 관련된 태그와 이미지 정보(조회수, 다운로드 수, 좋아요 수)도 함께 보여집니다.
- **반응형 디자인**: `Tailwind CSS`를 사용하여 다양한 화면 크기에서 잘 동작하는 반응형 UI를 구현했습니다.

## 🌐 배포

이 프로젝트는 **Netlify**에 배포되었습니다. 아래 링크에서 사이트를 확인할 수 있습니다.

- [Tailwind Gallery 웹앱 배포 링크](https://cheerful-dragon-60e619.netlify.app/)

## 🧑‍💻 기술 스택

- **React**: 사용자 인터페이스 구성
- **Tailwind CSS**: 유틸리티 클래스 기반의 스타일링
- **Pixabay API**: 이미지 검색 및 데이터를 가져오는 API
- **Vite**: 빠른 빌드 도구

## 🎥 주요 컴포넌트

- **App.jsx**: 이미지 검색 결과를 표시하며, 검색어 변경에 따라 이미지를 가져옵니다.
- **ImageSearch.jsx**: 사용자가 검색어를 입력할 수 있는 검색 폼입니다.
- **ImageCard.jsx**: 검색된 이미지를 카드 형태로 표시하며, 이미지의 정보를 함께 보여줍니다.

## ⚠️ 빌드 오류 및 해결 방법

빌드시 `eslint`의 `jsx-a11y` 규칙에 의해 `alt` 속성에 불필요한 단어를 써서 발생된 오류입니다.

### 문제 발생 원인

이 오류는 **alt 속성에 "image", "photo", "picture"**와 같은 단어를 사용해서 발생한 오류입니다. 이는 스크린 리더가 이미 `img` 요소를 인식할 수 있기 때문에, 이미지의 목적을 설명하는 단어만 포함해야 한다는 접근성 규칙입니다.

### 해결 방법

1. Netlify에서 빌드를 하지 않고 로컬에서 `npm run build` 명령어를 실행하여 오류의 원인을 찾았습니다.
2. `alt` 속성 값을 `Photo`에서 `Photo1`로 변경하여 해당 규칙에 맞게 설정했습니다.
