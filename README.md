# blogCoin# blogCoin

**Next.js**(프론트엔드)와 **AWS SAM (서버리스 애플리케이션 모델)**(백엔드)로 구성된 풀스택 프로젝트입니다.  
이 앱은 리액트 기반 프론트엔드와 Lambda API 백엔드를 이용한 서버리스 아키텍처를 시연합니다.

---

## 📁 프로젝트 구조

```
coin_blog/
├── frontend/         # Next.js 애플리케이션
└── backend/          # AWS SAM 기반 Lambda 백엔드
```

---

## 🚀 시작하기

### ✅ 사전 설치 필요 항목

- [Node.js](https://nodejs.org/) (권장: v18 이상)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (AWS SAM 로컬 실행에 필요)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- [WSL2 (Windows 사용자용)](https://learn.microsoft.com/ko-kr/windows/wsl/install)

---

### 📦 의존성 설치

#### 프론트엔드
```bash
cd frontend
npm install
```

#### 백엔드 (Lambda 함수)
```bash
cd backend/hello-world
npm install
```

---

## ▶ 실행 방법

### 1. 백엔드 실행 (SAM API 로컬 서버)
```bash
cd backend
sam build
sam local start-api
```
> 실행되면 `http://127.0.0.1:3000/hello` 에서 API 사용 가능

---

### 2. 프론트엔드 실행 (Next.js 개발 서버)
```bash
cd frontend
npm run dev
```
> 앱 주소: `http://localhost:3000`

---

## 🧪 API 연동 테스트

브라우저나 콘솔에서 다음 명령어 실행:
```bash
curl http://127.0.0.1:3000/hello
```

또는 프론트엔드 접속 시, 다음과 같은 API 응답을 받을 수 있습니다:
```json
{
  "message": "hello world"
}
```

---

## 🧰 개발 참고 사항

- ✅ `/hello` 경로는 `backend/template.yaml` 내 `HelloWorldFunction` 리소스에 정의되어 있음
- ✅ CORS는 SAM 템플릿과 Lambda 응답 헤더 양쪽에서 처리됨
- ✅ 프론트엔드는 `useEffect` 및 `fetch()`를 통해 API 요청을 수행함

---

## 📌 TODO (다음 작업)

- [ ] 추가 API 엔드포인트 생성 (예: `/posts`, `/comments`)
- [ ] DynamoDB 연동
- [ ] 인증 추가 (예: Cognito 또는 JWT)
- [ ] `sam deploy --guided`로 AWS 배포
- [ ] GitHub Actions로 CI/CD 구성

---

## 📄 라이선스

MIT License