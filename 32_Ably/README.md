# 에이블리 프론트엔드 엔지니어 채용 과제

## 개발 환경 설정 안내

### 1. [Node.js](https://nodejs.org/en/download/package-manager) 설치 (18 버전 이상)

```bash
# installs nvm (Node Version Manager)
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
$ nvm install 18
# verifies the right Node.js version is in the environment
$ node -v # should print `v18.20.3`
# verifies the right NPM version is in the environment
$ npm -v # should print `10.7.0`
```
### 2. [Yarn](https://yarnpkg.com/) 패키지 매니저 및 프로젝트 의존 패키지 설치

```bash
# Yarn이 설치되어 있지 않은 경우 설치해 주세요.
$ npm install --global yarn

# 프로젝트 의존 패키지를 설치합니다.
$ yarn install
```
### 3. [Git](https://git-scm.com/) 설정

```bash
# git을 초기화 합니다.
$ git init
```

### 4. 로컬 서버 실행

```bash
$ yarn dev
```
- http://localhost:3000

## 과제 구현 추가 설명

과제 구현 후 아래 내용을 간결하게 채워서 커밋해 주세요.

- 특별히 신경써서 강조하고 싶은 부분
- 시간이 더 주어졌다면 보완할만한 부분
