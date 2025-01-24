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

> 최신 개발 환경에서는 create-react-app의 전역 설치가 권장되지 않는 경우가 많아 npx 사용을 더 선호합니다.

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