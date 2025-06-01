AWSTemplateFormatVersion: '2010-09-09'
Description: Full Serverless SaaS WebAgency Infra - CloudFormation Stack

Parameters:
  DomainName:
    Type: String
  S3BucketName:
    Type: String
  LambdaEdgeArn:
    Type: String
    Description: Lambda@Edge 배포된 버전 ARN (us-east-1)

Resources:

  FrontendBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Ref S3BucketName
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: index.html
      PublicAccessBlockConfiguration:
        BlockPublicAcls: false
        BlockPublicPolicy: false
        IgnorePublicAcls: false
        RestrictPublicBuckets: false

  FrontendBucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref FrontendBucket
      PolicyDocument:
        Statement:
          - Effect: Allow
            Principal: "*"
            Action: "s3:GetObject"
            Resource: !Sub "${FrontendBucket.Arn}/*"

  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Enabled: true
        Origins:
          - Id: S3Origin
            DomainName: !GetAtt FrontendBucket.DomainName
            S3OriginConfig: {}

        DefaultCacheBehavior:
          TargetOriginId: S3Origin
          ViewerProtocolPolicy: redirect-to-https
          AllowedMethods: [GET, HEAD]
          CachedMethods: [GET, HEAD]
          LambdaFunctionAssociations:
            - EventType: origin-request
              LambdaFunctionARN: !Ref LambdaEdgeArn

        DefaultRootObject: index.html
