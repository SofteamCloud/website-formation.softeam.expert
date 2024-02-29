# Angular Overview
Angular is a powerful open-source framework created by Google allows to create single page applictions.
Angular includes:

- A component-based framework for building scalable web applications.
- A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.
- A suite of developer tools to help you develop, build, test, and update your code.

## Introduction

Angular is a development platform and framework for building scalable web applications. It is built on TypeScript and provides a component-based framework for building user interfaces. Angular includes a collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more1. Angular is written in TypeScript and implements core and optional functionality as a set of TypeScript libraries that you import into your applications.


## prerequisites

To use the Angular framework, you should be familiar with the following:

- **Typescript** Angular is based on typescript (https://www.typescriptlang.org).
- **RxJS:** In Angular, Observables are used as an interface to handle a variety of common asynchronous operations, such as AJAX requests and responses, and user-input events. This observables comes from rxjs library. (https://rxjs.dev)

knoledge of Typescript and rxjs are helpful, but not required.

## Installation

To install Angular you have to install an LTS version of Nodejs to enable npm command then install it with the following command: "npm install -g @angular/cli"
You could see installation with details in "https://angular.io/guide/setup-local"


## Create a new app

To create a new workspace and initial starter app:
Run the CLI command ng new and provide the project name project-name, as shown here:
ng new project-name

## Run projet

The Angular CLI includes a server, for you to build and serve your app locally.

Navigate to the workspace folder, such as project-name.

Run the following command:

cd project-name
ng serve --open

--open is optional allows to open the browser to  http://localhost:4200/.

Or you have just to type http://localhost:4200 in a new tab in the browser.
