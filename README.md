# Welcome to my CDK TypeScript project

## AWS CDK Pipeline 
This project aims to automate the deployment of AWS resources like Lambda, S3, and DynamoDB using AWS CodePipeline, CodeBuild, and AWS CDK. It enables continuous integration and continuous delivery (CI/CD) for cloud infrastructure.

## Tools and Technologies Used
- **AWS CDK (Cloud Development Kit)**: Infrastructure as Code (IaC) for provisioning AWS resources.
- **AWS CodePipeline**: Automates the pipeline for source, build, and deployment stages.
- **AWS CodeBuild**: Runs build and deployment tasks.
- **GitHub**: Source code repository for the project.
- **Lambda, S3, DynamoDB**: Deployed resources in the AWS environment.

## Steps for Setup
### Step 1: Clone the GitHub repository and install dependencies
Clone the repository to your local machine and install the necessary dependencies.
```bash
git clone https://github.com/Pri21singh/priya-AWS_CDKPipeline.git
cd priya-AWS_CDKPipeline
npm install -g aws-cdk
npm install
```
### Step 2: Bootstrap the CDK environment
Before deploying, you need to bootstrap the CDK environment to provision necessary resources in your AWS account.

```bash
cdk bootstrap
```
### Step 3: Synthesize the CloudFormation template
Synthesize the CloudFormation template using the following command.

```bash
cdk synth
```
### Step 4: Deploy the CDK application
Deploy the resources using:

```bash
cdk deploy
```

### Step 5: Set up the CI/CD pipeline in AWS CodePipeline
- Configure the source stage to GitHub.
- Set up the build stage to use AWS CodeBuild.
- Ensure that the `buildspec.yml` file is present in the root directory.
- Configure the deployment stage to deploy resources using AWS CDK.

## Troubleshooting
**Error: 'Access Denied to GitHub'**
- **Solution**: Reconnect GitHub from AWS CodePipeline → Connections.
