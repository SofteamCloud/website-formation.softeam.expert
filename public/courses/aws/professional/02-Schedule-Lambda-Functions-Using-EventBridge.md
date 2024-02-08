# Schedule AWS Lambda functions using EventBridge and set up SNS topic for Notifications

## Table of Contents

- [Introduction](#introduction)
- [Lab Requirements](#lab-requirements)
- [Setting up the Lab](#setting-up-the-lab)
   - [Step 1: Create the service-linked role for Spot Instance requests](#step-1-create-the-service-linked-role-for-spot-instance-requests)
   - [Step 2: Create an IAM Role for your Lambda Functions](#step-2-create-an-iam-role-for-your-lambda-functions)
   - [Step 3: Create 2 Lambda Functions](#step-3-create-2-lambda-functions)
   - [Step 4: Testing the Lambda Functions](#step-4-testing-the-lambda-functions)
- [Lab Steps](#lab-steps)
   - [First Requirement](#first-requirement)
   - [Second Requirement](#second-requirement)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

This tutorial guide provides instructions for setting up an AWS lab environment that involves two Lambda Functions. In this lab, you will:

1. Configure the first Lambda Function to run every 15 minutes using EventBridge.
2. Set up the second Lambda Function to launch a new Spot Instance when a Spot Instance is terminated (Note: You cannot view the Lambda Function).
3. Create an SNS Topic (without subscription) and configure EventBridge to trigger the SNS topic.

## Lab Requirements

This lab consists of two main requirements:

1. Create a Schedule Rule that triggers a Lambda Function every 15 minutes.
2. Create a Rule that publishes an SNS notification and triggers a Lambda Function to launch a new EC2 Spot Instance when an existing Spot Instance is terminated.

## Setting up the Lab

In the exam environment, AWS has already created two Lambda functions. However, for the purpose of this simulation, you need to create two Lambda Functions on your own.

### Step 1: Create the service-linked role for Spot Instance requests

Typically, you don't need to manually create a service-linked role. Amazon EC2 creates the `AWSServiceRoleForEC2Spot` service-linked role automatically the first time you request a Spot Instance using the console. If you've had an active Spot Instance request before October 2017, this role would have been created in your AWS account. Here's how to create it manually using the console:

1. Open the IAM console at [IAM Console](https://console.aws.amazon.com/iam/).
2. In the navigation pane, choose "Roles."
3. Choose "Create role."
4. On the "Select type of trusted entity" page, choose "EC2," "EC2 - Spot Instances," and proceed to the next step.
5. Follow the on-screen instructions to create the role.

### Step 2: Create an IAM Role for your Lambda Functions

Navigate to AWS Identity and Access Management (IAM) to create a role for your AWS Lambda functions. Follow these steps:

1. Select "Role" > "Create Role."
2. Choose "AWS service" > "Lambda" as the trusted entity.
3. Give the role a name, e.g., "MyLambdaRole."
4. Attach the following policy to the role:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowLambdaToCreateLogs",
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": "arn:aws:logs:*:*:*"
        },
        {
            "Sid": "EC2FullAccess",
            "Effect": "Allow",
            "Action": [
                "ec2:*"
            ],
            "Resource": "*"
        }
    ]
}
```

### Step 3: Create 2 Lambda Functions

#### HelloWorld.py

1. Create the first function named "HelloWorld."
2. Choose "Author from scratch" and give it a name.
3. Select the Python 3.X runtime.
4. Under permissions, use the existing role "MyLambdaRole."
5. Paste the following code into the function:

```python
import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
```

#### spotHandler.py

1. Create the second function named "spotHandler."
2. Choose "Author from scratch" and give it a name.
3. Select the Python 3.X runtime.
4. Under permissions, use the existing role "MyLambdaRole."
5. Paste the following code into the function:

```python
import os
import boto3

AMI = os.environ['AMI']
INSTANCE_TYPE = os.environ['INSTANCE_TYPE']
KEY_NAME = os.environ['KEY_NAME']
SUBNET_ID = os.environ['SUBNET_ID']
REGION = os.environ['REGION']

ec2 = boto3.client('ec2', region_name=REGION)

def lambda_handler(event, context):
    init_script = """
      yum update -y
      amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
      yum install -y httpd mariadb-server
      systemctl start httpd
      systemctl enable httpd
      usermod -a -G apache ec2-user
      chown -R ec2-user:apache /var/www
      chmod 2775 /var/www
      find /var/www -type d -exec chmod 2775 {} \;
      find /var/www -type f -exec chmod 0664 {} \;
      echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
    """

    instance = ec2.run_instances(
        ImageId=AMI,
        InstanceType=INSTANCE_TYPE,
        KeyName=KEY_NAME,
        SubnetId=SUBNET_ID,
        MaxCount=1,
        MinCount=1,
        InstanceMarketOptions={
            'MarketType': 'spot',
            'SpotOptions': {
                'MaxPrice': '0.005',
                'SpotInstanceType': 'one-time',
                'InstanceInterruptionBehavior': 'terminate'
            }
        },
        UserData=init_script
    )

    instance_id = instance['Instances'][0]['InstanceId']
    print(instance_id)

    return instance_id
```

6. Configure Environment variables for each function:

For both functions, you'll need to add the following environment variables:

- `AMI`: The Amazon Machine Image (AMI) ID.
- `INSTANCE_TYPE`: The instance type, e.g., "t2.micro."
- `KEY_NAME`: The name of the EC2 key pair you created.
- `REGION`: The AWS region name.
- `SUBNET_ID`: The ID of one of the public subnets in your VPC.

### Step 4: Testing the Lambda Functions

To test the Lambda functions, follow these steps:

1. Select the function you've created.
2. Choose "Actions" and create a test event by clicking "Test" and then "Configure test events."

Now, head into the EC2 console, and under "Spot Requests" on the left navigation pane, you should see an EC2 instance up and running.

## Lab Steps

### First Requirement

#### Step 1: Create an EventBridge Schedule Rule

1. Go to EventBridge from the AWS console and click "Create rule."
2. Name the Rule as "Schedule."
3. Choose "A schedule that runs at a regular rate, such as every 15 minutes," and enter the rate expression.
4. For Target API, choose "Frequently used APIs." For Select a target, choose "AWS Lambda."
5. For the Lambda function, select "HelloWorld" from the drop-down list.
6. Click "Next," leave everything as default, and then click "Create schedule."

### Second Requirement

#### Step 1: Create an SNS Topic and Subscription

(Note: Since the exam does not ask you to create a subscription, you can skip this step)

1. Open the Amazon SNS console.
2. On the navigation pane, choose "Topics."
3. Choose "Create topic."
4. For Type, choose "Standard."
5. Name the topic, e.g., "EC2SpotStateChangeTopic."
6. Choose "Create topic."
7. From the created topic, choose "Create subscription."
8. For Topic ARN, select the Amazon Resource Name (ARN) of the topic that you created (if not automatically populated).
9. For Protocol, enter "Email."
10. For Endpoint, enter the email address where you want to receive SNS notifications.

You now have an SNS topic that EventBridge Events can send EC2 Spot Interruption Notifications to. Let’s navigate to the EventBridge console and configure it.

#### Step 2: Create an EventBridge Rule with an Event Pattern

1. Go to EventBridge from the AWS console and click "Create rule."
2. Name the Rule as "rule-spot-state-change."
3. Choose "Rule with an Event pattern." Under Event pattern:
    - For Event source, select "EC2."
    - For Event type, select "EC2 Spot Instance Interruption Warning."
4. Under Target types, choose "AWS service."
5. Select a target: "SNS topic."
6. Since the exam also asks you to use the Input Transformer, click on "Additional settings."
7. Define Input path:

```json
{
    "instance": "$.detail.instance-id",
    "state": "$.detail.instance-action"
}
```

8. Define Template:

```json
"Instance <instance> is in <state>"
```

9. Create Additional targets for Lambda. Select a target, choose "Lambda function" from the drop-down list.
10. Click "Next," then click "Create rule."

You can test this setup by initiating an EC2 Spot Interruption. You should receive a notification in your email resembling the following:

"The EventBridge will trigger your Lambda function `spotHandler.py` to launch a new EC2 Spot Instance."

## Conclusion

Congratulations! You have successfully set up your AWS lab environment with two Lambda functions and configured EventBridge and SNS for automation. To recap:

- You created Lambda functions, "HelloWorld" and "spotHandler," each serving distinct purposes.
- You configured IAM roles to grant the necessary permissions to these Lambda functions.
- EventBridge was set up to trigger Lambda functions on a schedule and in response to specific events.
- An SNS topic was created to handle EC2 Spot Instance Interruption Notifications.

This lab demonstrates how to automate AWS services using Lambda functions and EventBridge, enhancing your ability to manage and respond to events in your cloud environment efficiently.

## References

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [Amazon EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [Amazon SNS Documentation](https://docs.aws.amazon.com/sns/)
- [Amazon EventBridge Documentation](https://docs.aws.amazon.com/eventbridge/)