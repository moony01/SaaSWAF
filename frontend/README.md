# SaaSWAF Frontend

## 📂 News 콘텐츠 구조 및 관리

S3에서 SSR 시 불러오는 뉴스 콘텐츠는 Markdown (.md) 포맷으로 작성하며,  
아래와 같은 구조로 관리됩니다.

### 🔧 로컬 디렉터리 구조
frontend/
└── content/
    └── news/
        └── 2025-06-30-saaswaf-launch.md


### ☁️ S3 업로드 방법
작성한 .md 파일은 아래 명령어로 S3에 업로드합니다:

```bash
aws s3 cp ./frontend/content/news/2025-06-30-saaswaf-launch.md s3://saaswaf/news/2025-06-30-saaswaf-launch.md
```
S3 버킷 이름: saaswaf

업로드 경로: news/

오브젝트 권한: 퍼블릭 읽기 or Lambda에서 IAM으로 접근


---

#### 2025-06-30
- s3에 정적파일 업로드 완료
- lambda@edge용 s3 버킷 생성, ssr용 zip파일 업로드 완료