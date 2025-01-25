# React 애플리케이션 생성 및 실행 과정
## 1. React 애플리케이션 생성 개요

React 애플리케이션을 생성하기 위해 Node.js와 npm을 사용하여 개발 환경을 구축한다.

## 2. React 프로젝트 생성 단계

#### 1) Node.js 및 npm 설치

React 애플리케이션을 생성하기 위해 Node.js 설치

#### 2) React 프로젝트 생성

React 프로젝트를 생성하는 과정

- 전역 설치
'''
npm install create-react-app -g
'''
전역으로 create-react-app 패키지를 설치하여, React 애플리케이션을 생성하는 도구를 준비.

> 최신 개발 환경에서는 create-react-app의 전역 설치가 권장되지 않는 경우가 많아 npx 사용을 더 선호

- React 애플리케이션 생성
'''
npx create-react-app 폴더명
예시
npx create-react-app 20-react-original
'''
npx는 npm 버전 5.2 이상에서 기본 제공되며, 설치 없이 최신 버전의 create-react-app을 사용해 프로젝트를 생성


#### 3) 작업 폴더 이동 및 개발 환경 설정

React 애플리케이션이 생성된 폴더로 이동
'''
cd [작업할 폴더 경로]
예시
cd C:\Users\Administrator\Desktop\SeSAC-codingOn_WebFull Stack\20-react-original
'''
## 필요에 따라 실행

#### 4) 의존성 설치

의존성을 설치하여 React 프로젝트를 실행 가능하게 만든다.

npm install

#### 5) 캐시 데이터 관리

npm의 캐시 데이터를 초기화하여 오류 방지

npm cache clean --force

#### 6) React 애플리케이션 실행

React 개발 서버를 실행하여 애플리케이션을 브라우저에서 확인

npm start

이 명령은 로컬 개발 서버를 시작하며, 기본적으로 브라우저에서 http://localhost:3000으로 접근 가능

## 3. React 애플리케이션 생성 및 실행의 주요 특징

#### 1. 자동화된 프로젝트 초기화
create-react-app은 초기 설정과 디렉터리 구조를 자동으로 생성하여 개발 시간 절약


#### 2. 개발 서버 제공
npm start는 Hot Reloading 기능을 제공하여 코드 변경 시 즉각적인 UI 업데이트가 가능


#### 3. 유지보수성 향상
Node.js와 npm의 패키지 관리 기능을 통해 의존성 버전 관리