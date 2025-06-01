✅ Lambda@Edge 배포 흐름 요약
Lambda@Edge는 us-east-1 (N. Virginia) 에 반드시 배포해야 함

SSR Lambda 빌드 예시
bash
복사
편집
# 1. SSR 빌드 (Nuxt)
cd frontend
nuxi build

# 2. Lambda 패키징
cd .output/server
zip -r ssr-lambda.zip *

# 3. Lambda@Edge에 업로드 (us-east-1)
aws lambda create-function \
  --function-name nuxt-ssr \
  --runtime nodejs20.x \
  --handler server.handler \
  --role arn:aws:iam::<ACCOUNT>:role/lambda-edge-role \
  --zip-file fileb://ssr-lambda.zip \
  --region us-east-1

# 4. Lambda 버전 발행
aws lambda publish-version --function-name nuxt-ssr --region us-east-1
👉 여기서 출력된 버전 ARN 이 CloudFormation의 LambdaEdgeArn에 들어간다.

✅ 왜 Lambda@Edge를 이렇게 별도로 관리하나?
CloudFront랑 Lambda@Edge는 Cross Region이 걸려서 CloudFormation에서 배포까지 자동화가 조금 복잡하다.

보통 Lambda@Edge는 수동 빌드 → 버전 ARN 생성 → CloudFormation에 연결 방식으로 관리한다.

✅ 실제 실무 SaaS 설계 정리
인프라 계층	관리 도구
API 서버 (SAM)	backend/template.yaml (SAM 그대로 유지)
정적+SSR 인프라 (S3, CloudFront, Lambda@Edge)	infra-cfn/template.yaml (CloudFormation 확장)
빌드/배포 파이프라인	Github Actions → SAM + CFN 동시 자동화

✅ 실전 SaaS 아키텍처 최종 완성도
plaintext
복사
편집
[브라우저]
   ↓
[CloudFront]
   ├── S3 (.output/public 정적페이지)
   └── Lambda@Edge (SSR Lambda 서버)
   ↓
[API Gateway] → [Lambda (SAM)] → [DynamoDB]
✅ 한줄 핵심 정리:
이 구조를 만들면 네가 앞으로 고객 10명, 100명을 상대하는 웹에이전시 SaaS 뼈대가 완성된다.

👉

다음으로 정말 실전 자동화 파이프라인까지 갈 수 있어:

Lambda@Edge 빌드 → 버전 관리 → 자동 CloudFormation 반영

SAM + CFN 통합 CI/CD 자동화 (Github Actions)