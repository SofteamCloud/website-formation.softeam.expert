# Installation Guide for Node.js

This guide provides step-by-step instructions for installing Node.js on your system.

## Prerequisites

Before installing Node.js, ensure that you have the following prerequisites installed:

- **Operating System:** Node.js is compatible with Windows, macOS, and Linux.
- **Package Manager (optional):** A package manager like npm (Node Package Manager) is often installed with Node.js.

## Installation Steps

### 1. Download Node.js

Visit the [official Node.js website](https://nodejs.org/) and navigate to the "Downloads" section.

### 2. Choose the LTS Version

It is recommended to download the LTS (Long Term Support) version for stability. However, you can choose the current version if you need the latest features.

### 3. Install on Windows

For Windows, download the installer and follow the installation wizard. Ensure that the "npm package manager" option is selected during installation.

### 4. Install on macOS

For macOS, download the installer and follow the installation steps. The installer package includes both Node.js and npm.

### 5. Install on Linux

For Linux, you can use your distribution's package manager or download the binaries from the official website. Here's an example using a Debian-based system:

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

### 6. Verify Installation

```bash
node -v
npm -v
```
You should see the installed versions of Node.js and npm.

## Additional Configuration (Optional)

### Node Version Manager (NVM)

Node Version Manager (NVM) allows you to manage multiple Node.js versions on your system. This is useful when working on projects with different version requirements.

#### Install NVM

To install NVM, follow the instructions on the [official GitHub repository](https://github.com/nvm-sh/nvm#install--update-script).

#### Usage

- Install a specific Node.js version:

    ```bash
    nvm install <version>
    ```

- Set a default Node.js version:
    ```bash
    nvm alias default <version>
    ```

- Switch between installed Node.js versions:
    ```bash
    nvm use <version>
    ```
