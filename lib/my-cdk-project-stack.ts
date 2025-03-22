import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 Bucket
    const myBucket = new s3.Bucket(this, 'ps-8910481-bucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Create a Lambda Function
    const myLambda = new lambda.Function(this, 'ps-8910481-lambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log('Lambda invoked!');
          return { statusCode: 200, body: 'Hello, Lambda!' };
        };
      `),
      environment: {
        BUCKET_NAME: myBucket.bucketName,
      },
    });

    // Create a DynamoDB Table
    const myTable = new dynamodb.Table(this, 'ps-8910481-table', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'ps-8910481-table',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Grant Lambda access to S3 and DynamoDB
    myBucket.grantReadWrite(myLambda);
    myTable.grantReadWriteData(myLambda);
  }
}
