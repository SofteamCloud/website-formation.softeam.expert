# Pipelines Introduction

## Table of Contents

- [Introduction](#introduction)
- [Understanding Pipelines](#understanding-pipelines)
- [An Analogy: The Car Assembly Line](#an-analogy-the-car-assembly-line)
- [The Connection to Software Development](#the-connection-to-software-development)
- [Getting Started with GitLab CI](#getting-started-with-gitlab-ci)
- [Adding More Complexity: Building and Testing](#adding-more-complexity-building-and-testing)
- [Advanced Pipelining: Defining Stages and Order of Jobs](#advanced-pipelining-defining-stages-and-order-of-jobs)
- [Debugging and Troubleshooting](#debugging)
   - [Pipeline Validation](#pipeline-validation)
   - [Inspecting the Pipeline](#inspecting-the-pipeline)
   - [Viewing Job Logs](#viewing-job-logs)
   - [Artifacts](#artifacts)
   - [Debugging a Failing Job](#debugging-a-failing-job)
   - [Viewing Previous Pipelines](#viewing-previous-pipelines)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction 

Welcome to our guide on understanding pipelines, especially in the context of software development. We'll start from the basics, using simple real-world analogies to illustrate complex ideas. Our aim is to ensure that even beginners in this field can grasp these concepts and apply them in practical scenarios.

## Understanding Pipelines

You might be pondering, "What exactly is a pipeline?" Think of a pipeline as a conduit that efficiently channels the flow of work or processes, making it essential in numerous fields, including software development.

Pipeline Structure:

```
                           ┌──────────────────────────────────────┐
  Stages ◀─────────────────│stages:                               │
                           │    - build                           │
                           │    - test                            │
                           │                                      │
    Job  ◀─────────────────│build the car:                        │
                           │    stage: build                      │
                           │    script:                           │
                           │        - echo "Building"             │
                           │        - mkdir build                 │
                           │        - touch build/car.txt         │
                           │    artifacts:                        │
                           │        paths:                        │
                           │            - build/                  │
                           │                                      │
    Job  ◀─────────────────│test the car:                         │
                           │    stage: test                       │
                           │    script:                           │
                           │        - echo "Testing"              │
                           │        - test -f "build/car.txt"     │
                           │                                      │
                           ├──────────────────────────────────────┤
                           │            .gitlab-ci.yml            │
                           └──────────────────────────────────────┘

                                      © Minh Hung Phan
```

## An Analogy: The Car Assembly Line

Consider a car assembly line to gain a quick understanding of pipelines. Building a car necessitates adherence to a series of steps. For instance, you begin with a chassis, upon which you install the engine. Following that, you add the wheels and continue the process.

This car assembly line illustrates key characteristics of a pipeline:

1. Sequential steps: The steps need to be performed in a specific order. For instance, you can't start installing wheels until you have the chassis and the engine in place.
2. Connectivity: Each step is connected to the next, such that the output of one step becomes the input for the subsequent step.
3. Parallelism: Some steps can be performed simultaneously. When installing wheels, for example, you can work on all four wheels at once without affecting the outcome.

These steps are merely a part of the process. To deliver the final product (a functional car), many more steps are required, including a rigorous testing phase before the car can leave the factory. The ultimate objective is to ensure that the consumer receives a working product.

## The Connection to Software Development

You might observe that software development shares some similarities with car manufacturing. Both require a series of sequential, interconnected steps to reach an end product. The idea of pipelines in software development is to organize these steps into an efficient, streamlined process, and this is precisely where GitLab provides invaluable support.

Having understood the concept of pipelines, let's put this knowledge into action by setting up a pipeline using GitLab CI. We will use a practical example in the following section to reinforce your understanding.

## Getting Started with GitLab CI

Continuing from our previous discussion, let's consider the software development process in more detail. Broadly speaking, it comprises at least two major stages: building the software and testing it. While each stage can contain numerous sub-processes, for the sake of simplicity, we'll focus on these main stages.

Let's dive into creating your first project on GitLab and setting up a pipeline.

### Step 1: Create a GitLab Account

Firstly, navigate to [GitLab.com](https://gitlab.com/). If you don't have an account yet, create one by clicking on 'Register.' Once registered, sign in to access your dashboard.

### Step 2: Create a New Project

As a new user, you may not have any projects initially. Let's create your first one. Click on `New Project` located on the right side of your dashboard. Name your project as `car-assembly-line` By default, your project will be set to private, which is fine. Click on `Create Project` to finalize the creation of your project.

Upon successful creation, you'll be redirected to an empty repository. This is where you can start adding your code and other project-related files.

### Step 3: Create a GitLab CI Pipeline

To create a pipeline in GitLab CI, we need to create a file that outlines the pipeline's structure. This is a simple process using the GitLab interface.

Click on `New File.` The file needs to have a specific name: `.gitlab-ci.yml`. YAML (short for "YAML Ain't Markup Language") is a human-readable data serialization standard. GitLab uses it for the pipeline configuration file.

### Step 4: Define Jobs in Your Pipeline

For GitLab to execute any task, we need to define a job. A job is essentially a task that GitLab performs for us.

For example, let's define our first job as `build the car` You can define it as follows in your `.gitlab-ci.yml` file:

```yaml
build the car:
```

This job's tasks can then be defined under it.

## Adding More Complexity: Building and Testing

Now that we have defined our first job, let's further expand our pipeline by adding commands to our job. We'll create a simple scenario where we construct a "car" through a file and add different components to it. Finally, we'll add another job to "test" our car.

### Step 1: Define Commands in Your Job

We begin by adding a `script` under our job. The script allows us to write the commands that we want our job to execute.

Here is how to do it in the `.gitlab-ci.yml` file:

```yaml
build the car:
  script:
```

We indent the `script` keyword by two spaces under the job name. Now, let's start writing commands. 

Our aim is to create a file and add a few texts to that file, imagining that the file is our car. We are going to add a chassis, an engine, and wheels, and put everything inside that file. Here is how we can do it:

```yaml
build the car:
  script:
    - mkdir build
    - cd build
    - touch car.txt
    - echo "chassis" > car.txt
    - echo "engine" > car.txt
    - echo "wheels" > car.txt
```

With these commands, we create a directory named `build`, navigate into it, and create a file named `car.txt`. We then write "chassis", "engine", and "wheels" into the file.

Save the pipeline configuration by committing the changes you have made to this file. GitLab CI will detect the pipeline and run it. You can view the progress of the pipeline by clicking on the pipeline indicator.

Output:

```js
Running with gitlab-runner 16.1.0~beta.59.g83c66823 (83c66823)
  on blue-2.shared.runners-manager.gitlab.com/default XxUrkriX, system ID: s_90897a2659b5
  feature flags: FF_USE_IMPROVED_URL_MASKING:true
Preparing the "docker+machine" executor

...

$ mkdir build
$ cd build
$ touch car.txt
$ echo "chassis" > car.txt
$ echo "engine" > car.txt
$ echo "wheels" > car.txt
Cleaning up project directory and file based variables
00:00
Job succeeded
```

**Note**: GitLab Runner is an open-source agent used for executing CI/CD pipeline jobs defined in GitLab.

### Step 2: Add a New Job to Test the Car

Having built the car, let's add another job to test it. We'll define the job similarly to how we defined `build the car`. You can name this job `test the car` and it would look something like this:

```yaml
test the car:
  script:
```
Add commands to the `script` field for this job to define what tests you want to perform on your car. For example, you can verify if all components (Chassis, Engine, Wheels) are present in the car.txt file.

```yaml
test the car:
  script:
    - test -f build/car.txt
    - cd build
    - grep "chassis" car.txt
    - grep "engine" car.txt
    - grep "wheels" car.txt
```

Here, we use the `test -f` command to check if the `car.txt` file exists. Then, we `cd` into the `build` directory and use the `grep` command to verify whether our file contains the strings "chassis", "engine", and "wheels".

The `grep` command checks if the mentioned string exists in the file. If any of these checks fail, the job will fail, and you will know there was a problem in your `build the car` job.

This is a simple way to define multiple jobs in GitLab CI, with each job representing a different stage of your development process.

**Note**: Gitlab will automatically assign jobs to the "test" stage, even if no test was defined. By automatically assigning jobs to the "test" stage, GitLab encourages developers to incorporate testing practices into their pipelines. Even if no explicit tests are defined, this default behavior prompts developers to consider and include relevant tests as part of their workflow.

## Advanced Pipelining: Defining Stages and Order of Jobs

With the basics of creating jobs in GitLab CI covered, let's delve into more advanced concepts. It is often necessary to define the sequence in which jobs are executed and group them into stages. This section walks you through these aspects.

### Step 1: Define Stages to Order Jobs

GitLab tries to run all jobs in parallel by default. If you need the jobs to execute in a specific order, you must define stages.

Defining stages in your pipeline is straightforward. Add a `stages` keyword to your `.gitlab-ci.yml` file, followed by the names of your stages. In our case, we have two stages: `build` and `test`.

```yaml
stages:
  - build
  - test
```

### Step 2: Assign Jobs to Stages

Next, assign each job to a stage using the `stage` keyword. Our `build the car` job belongs to the `build` stage and the `test the car` job to the `test` stage:

```yaml
build the car:
  stage: build
  script:
    ...

test the car:
  stage: test
  script:
    ...
```

Now, the jobs will execute in the order defined by the stages: first `build`, then `test`.

Save your file to update the pipeline configuration. GitLab CI detects the changes and runs your newly defined pipeline.

Output:

```js
$ test -f build/car.txt
Cleaning up project directory and file based variables
00:01
ERROR: Job failed: exit code 1
```

The error message `ERROR: Job failed: exit code 1` typically indicates that a job within a CI/CD pipeline has failed to execute successfully, and it returned a non-zero exit code (in this case, 1).

## Debugging and Troubleshooting

Your pipeline may not always work correctly the first time. Luckily, GitLab offers multiple ways to debug and troubleshoot your pipeline.

### Pipeline Validation

GitLab checks your `.gitlab-ci.yml` file for errors before running your pipeline. If your configuration is invalid, GitLab won't execute the pipeline and will return an error message. Always ensure that your CI/CD configuration is valid before trying to run your pipeline.

### Inspecting the Pipeline

By clicking on a pipeline, you can observe its stages and jobs. This view shows the build and test stages, along with their associated jobs. You can also view the status of each job. Jobs can have multiple stages, and you can add as many jobs and stages as your pipeline requires.

### Viewing Job Logs

If a job fails, you can click on it to view its logs and determine what caused the failure. In our case, the test job failed because it couldn't find the `car.txt` file. This issue arises because jobs in GitLab pipelines don't share data unless explicitly instructed to do so. 

### Artifacts

To overcome the data-sharing problem, we use artifacts. Artifacts are files or directories created by one job and needed in another. 

You can define artifacts in your `.gitlab-ci.yml` file. Specify the artifact's path and GitLab will preserve it when the job completes. For example:

```yaml
build_the_car:
  stage: build
  script:
    ...
  artifacts:
    paths:
      - build/
```

In this case, the `build` directory is the artifact that will be preserved after the `build the car` job completes.

Output:

```js
$ test -f build/car.txt
$ cd build
$ grep "chassis" car.txt
Cleaning up project directory and file based variables
00:01
ERROR: Job failed: exit code 1
```

The code is currently not working as expected, and we need to identify the root cause of the error. Upon closer inspection, it was discovered that a mistake was made in the initial implementation.

It is crucial to emphasize the importance of writing tests that can fail. By intentionally creating tests that fail, we can uncover issues early on and ensure the reliability of our code.

### Debugging a Failing Job

**Step 1: Identifying the Problem**

To address the problem at hand, we need to return to the project and make the necessary changes to fix the build.

The problem lies in the following section of code:

```yaml
    - echo "chassis" > car.txt
    - echo "engine" > car.txt
    - echo "wheels" > car.txt
```

Instead of appending the chassis, engine, and wheels to the car using the appropriate method, the entire content is being replaced. This incorrect approach needs to be rectified.

**Step 2: Correcting the Mistake**

To correct the mistake, we should use the append operator to add the chassis, engine, and wheels to the existing car object. The corrected code should look as follows:

```yaml
    - echo "chassis" >> car.txt
    - echo "engine" >> car.txt
    - echo "wheels" >> car.txt
```

By using the append operator, we can ensure that the components are added to the car object as intended.

**Step 3: Adding more Insight**

Debugging a failing job often involves adding additional commands to view more information about the job's environment. You can use commands like `ls` to list directory contents, or `cat` to view the contents of a file.

```yaml
test the car:
  script:
    - ls
    - test -f build/car.txt
    - cd build
    - cat car.txt
    - grep "chassis" car.txt
    - grep "engine" car.txt
    - grep "wheels" car.txt
```

With the correction implemented, the issue should now be resolved, and the code is expected to work as intended.

Output:

```js
$ ls
README.md
build
$ test -f build/car.txt
$ cd build
$ cat car.txt
chassis
engine
wheels
$ grep "chassis" car.txt
chassis
$ grep "engine" car.txt
engine
$ grep "wheels" car.txt
wheels
Cleaning up project directory and file based variables
00:01
Job succeeded
```

### Viewing Previous Pipelines

In the CI/CD section of GitLab, you can view all previous pipeline runs. If a job created artifacts, you can download and inspect them. This feature is handy for debugging, as it lets you view the exact files your job used or produced.

**Note**: Remember that the build folder and `car.txt` file, which were created in the pipeline and preserved as artifacts, aren't committed to the Git repository. They exist independently of the project and are available for download or use in subsequent steps.

### Conclusion

Through this guide, you have created a simple pipeline with two stages: `build` and `test`. You built a car with simple commands in the first stage and tested it in the second stage. You've learned about the importance of tests, how to debug failing jobs, and how to use artifacts to share data between jobs. With these foundational skills, you can start using GitLab CI to automate your software development processes. 

We hope this guide has helped you understand pipelines and how they are an integral part of software development.

## References

- [Learn GitLab with tutorials](https://docs.gitlab.com/ee/tutorials/)
- [CI/CD pipelines](https://docs.gitlab.com/ee/ci/pipelines/)
- [YAML Syntax](https://learn.getgrav.org/16/advanced/yaml)
- [Top 10 Bash file system commands](https://hackernoon.com/top-10-bash-file-system-commands-you-cant-live-without-4cd937bd7df1)
