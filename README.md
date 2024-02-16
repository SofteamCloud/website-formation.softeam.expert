# Softeam Self Service Learning

## Table of Contents

- [Introduction](#introduction)
- [About this Project](#about-this-project)
- [Project Goals](#project-goals)
- [Usage and Examples](#usage-and-examples)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Troubleshooting](#troubleshooting)
- [Code of Conduct](#code-of-conduct)
- [Contact](#contact)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

Welcome to the Softeam Self Service Learning project! This initiative is designed to empower our team members by providing them with a comprehensive platform for continuous learning and development. The project encompasses a wide range of courses, from foundational knowledge in technologies like AWS and Docker to advanced topics in Kubernetes and Terraform. Our goal is to enable our employees to stay ahead in the fast-evolving tech landscape, fostering a culture of knowledge sharing and professional growth.

## About this Project

This project focuses on converting markdown files to HTML, simplifying the process of sharing knowledge and content. By utilizing this platform, contributors can easily create and disseminate educational material, making it accessible and engaging for learners. This feature is especially useful for structuring courses and tutorials, allowing for a seamless learning experience that integrates effortlessly with the web.

## Project Goals

The objective of this document is to guide users through the features and functionalities of the Self Service Learning platform. It serves as a comprehensive manual for navigating the courses, utilizing the resources, and contributing to the project. Whether you are a beginner looking to learn new skills or an experienced professional aiming to brush up on the latest technologies, this document will help you make the most of the learning opportunities available.

## Usage and Examples

### Accessing Courses

To start exploring the courses available, you can browse the categories and select a course that interests you. Each course is structured into different levels: essential, fundamental, and professional, allowing learners to start from a level that matches their proficiency.

#### Example: Viewing AWS Courses

The AWS course, along with others, is located in the `public/courses/` directory of the project. Here's how the structure looks:

```plaintext
project-root/
│
├── public/                                  # Public assets and static files
│   ├── courses/                             # Course content directories
│   │   ├── aws/                             # AWS course directory
│   │   ├── docker/                          # Docker course directory
│   │   ├── github/                          # GitHub course directory
│   │   ├── gitlab/                          # GitLab course directory
│   │   ├── kubernetes/                      # Kubernetes course directory
│   │   └── terraform/                       # Terraform course directory
```

To access the AWS course content:

1. Navigate to the `public/courses/aws/` directory.
2. Here, you'll find different subdirectories and markdown files corresponding to various topics and levels of the AWS course.

### Viewing Tutorials

Each course contains a series of tutorials or markdown files that guide you through various topics within the course.

#### Example: Accessing a Tutorial

The AWS tutorials are structured within the `public/courses/aws/` directory, organized by levels of complexity: essential, fundamental, and professional. Below is an outline of how tutorials are organized within the AWS course directory:

```plaintext
project-root/
│
├── public/                                  
│   ├── courses/                             
│   │   ├── aws/                             
│   │   │   ├── essential/                    # Essential level tutorials
│   │   │   │   ├── 01-EC2-Introduction.md    # Introduction to EC2
│   │   │   │   ├── 02-Lambda-Introduction.md # Introduction to Lambda
│   │   │   │   └── 03-ECS-Introduction.md    # Introduction to ECS
│   │   │   ├── fundamental/                  # Fundamental level tutorials
│   │   │   │   ├── 01-What-is-an-EC2.md      # Detailed exploration of EC2
│   │   │   │   ├── 02-Working-with-S3.md     # Guide to using S3
│   │   │   │   └── 03-ECS-Introduction.md    # Further exploration of ECS
│   │   │   ├── professional/                 # Professional level tutorials
│   │   │   │   └── 01-EC2-Hands-On.md        # Hands-on with EC2
```

To access a specific tutorial, follow these steps:

1. Identify the course and level you are interested in. For instance, if you want to learn about Amazon EC2 at a fundamental level, navigate to the `public/courses/aws/fundamental/` directory.
2. Select the tutorial you wish to view. For example, to learn the basics of Amazon EC2, open the `01-What-is-an-EC2.md` file.

## How to Contribute

For details on contributing to the project, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file. Your contributions can range from creating new courses, updating existing content, or fixing bugs.

## License

This project is licensed under the [LICENSE](LICENSE) file included in the repository. We encourage you to read the license agreement to understand your rights and responsibilities when using or contributing to the Softeam Self Service Learning platform.

## Troubleshooting

Encountered an issue? Check out our [Troubleshooting.md](Troubleshooting.md) guide for common problems and their solutions.

## Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for participating in our community.

## Contact

For further questions or suggestions, feel free to contact me at minh-hung.phan@softeam.fr.

## Conclusion

The Softeam Self Service Learning platform is an ever-evolving project aimed at fostering a culture of continuous learning and development. By engaging with the content, contributing to the repository, and sharing knowledge, we can collectively enhance our technical competencies and stay ahead in the technological curve. We encourage every team member to explore the courses, contribute to the project, and embark on their learning journey.

## References

- [Markdown Guide](https://www.markdownguide.org/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)