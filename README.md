# 📦 프로젝트 서버 실행 가이드 (SAM 버전)

최종 작성일: 2025-06-06

---

## 📁 프로젝트 구성

* **frontend:** Vue.js / Nuxt.js
* **backend:** AWS SAM 기반 서버리스 아키텍처 (API Gateway + Lambda + DynamoDB)
* **infra-cfn:** AWS CloudFormation
* **edge-ssr:** AWS Lambda@Edge

---

## 🚀 시작 준비

### 1️⃣ 레포지토리 클론

```bash
git clone <레포지토리 주소>
cd <프로젝트 디렉토리>
```

### 3️⃣ AWS SAM CLI 설치 (필수)

* AWS 공식문서 참고 → [AWS SAM 설치 가이드](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

---

## ⚙️ Frontend 실행 방법

### 로컬 개발 서버

```bash
cd frontend
npm install
npm run dev
```

* 기본 주소: `http://localhost:3000` (혹은 설정된 포트)

---

## ⚙️ Backend 실행 방법 (SAM 환경)

### SAM 로컬 실행 (로컬 개발 및 테스트)

#### 1️⃣ 빌드

```bash
cd backend
sam build
```

#### 2️⃣ 로컬 API Gateway 에뮬레이션 실행

```bash
sam local start-api
```

* 기본 실행 주소: `http://localhost:3000` (혹은 `3001` 등 SAM 설정에 따라 다름)
* `.env` 파일 자동 반영 안되는 경우 `--env-vars` 옵션 사용 가능

#### 3️⃣ 이벤트 기반 Lambda 테스트 (옵션)

```bash
sam local invoke <함수이름> -e events/event.json
```

### SAM 클라우드 배포

```bash
sam deploy --guided
```

* 최초 배포시 AWS 자격증명 및 리전 설정 필요

---

## 🐳 Docker (SAM 내부에서 자동 사용)

SAM은 로컬에서 Lambda 실행 시 자동으로 Docker 컨테이너 사용함 → 따로 Docker 관리 필요 없음.

필요시만 Docker 확인:

```bash
docker ps
```

---

## 📝 자주 발생하는 이슈

* AWS CLI/SAM CLI 버전 확인
* `sam build` 후 `.aws-sam` 폴더 확인
* `.env` 환경변수 적용 확인 (`--env-vars` 활용)
* Docker Desktop 실행중인지 확인 (로컬 Lambda 에뮬레이션 시 필요)

---

## ✅ 전체 실행 요약 흐름

```bash
# Frontend 실행
cd frontend && npm install && npm run dev

# Backend 실행 (SAM 기반)
cd backend && sam build && sam local start-api
```

---

> 문의 및 추가사항은 `docs/` 디렉토리 내 업데이트 기록 참고
