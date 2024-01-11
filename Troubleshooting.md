# Troubleshooting

## React Troubleshooting

The error message `sh: react-scripts: command not found` indicates that the `react-scripts` package is either not installed or not correctly set up in your project's `node_modules` directory. This package is a part of `create-react-app` and is essential for starting, building, and running a React project. Here's how you can troubleshoot this issue:

1. **Check if `react-scripts` is Installed:**
- Open your project's `package.json` file and look for `react-scripts` in the dependencies or devDependencies section. If it's not listed, you need to install it.

2. **Install `react-scripts`:**
- If `react-scripts` is missing, install it by running `npm install react-scripts --save` in your project directory. This command will add `react-scripts` to your `node_modules` folder and list it as a dependency in your `package.json`.

3. **Verify `node_modules` Folder:**
- Ensure that your `node_modules` folder is correctly installed. Sometimes, the installation might not be successful, or the folder could be deleted or corrupted. In such cases, delete the `node_modules` folder and the `package-lock.json` file, and then run `npm install` to reinstall all dependencies.

4. **Check the Environment Path:**
- Occasionally, the system's PATH environment variable does not include the location of the installed Node.js modules. This is less common but might be an issue on some setups.

5. **Use npx:**
- If you prefer not to install `react-scripts` globally, you can use `npx` to run the command. Replace `react-scripts start` with `npx react-scripts start` in your `package.json` scripts section.

6. **Re-Clone the Repository (If Applicable):**
- If you’re working with a cloned repository and facing this issue, there might be a problem with the cloned setup. Re-clone the repository and try running `npm install` again.

7. **Check for Global Installation (Not Recommended):**
- While it's not recommended to install `react-scripts` globally, if you have done so, ensure that the global installation path is included in your system's PATH environment variable.

8. **Check Node.js and npm Versions:**
- Make sure you have compatible versions of Node.js and npm installed. Incompatible versions can sometimes cause issues with package installations.

If you’ve tried all these steps and the issue persists, there might be a more specific problem with your project setup or environment. In such cases, checking any console logs for additional error messages or consulting documentation specific to your project's stack might provide further insights.

## Amplify Troubleshooting

### 404 error

If you're receiving a 404 error when trying to directly access the markdown file in the browser, then the file isn't being properly served from the specified location or there's a redirect/rewrite rule causing the issue.

Here are the steps you can take to address this:

1. **Verify File Location**: Double-check the location and name of your markdown file in your repository to make sure it matches the URL path you're trying to access.

2. **Rewrites and Redirects**:
- Review the "Rewrites and redirects" settings on Amplify as you showed earlier. It's possible that one of the rewrites is causing the markdown file requests to be redirected, resulting in a 404.
- Pay special attention to the rule:

```
</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/> /index.html 200 (Rewrite)
```

This rule is redirecting requests for files with extensions that aren't in the list to `/index.html`. As `.md` isn't listed, requests for `.md` files are likely being redirected to `/index.html`.

One solution is to modify this rule to include `.md` in the list of allowed extensions, like so:

```
</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json|md)$)([^.]+$)/> /index.html 200 (Rewrite)
```

3. **Amplify Configuration**:
- Ensure that the Amplify project is configured to pick up files from the directory where your markdown files are stored.
- Recheck the `amplify.yml` file. The `baseDirectory: build` setting means Amplify is looking in the `build` directory for files to serve. Make sure the markdown files are placed inside this directory during the build process.

4. **Case Sensitivity**: URLs are case-sensitive. Double-check that the casing in the URL matches the casing of the file and directory names.

5. **Redeploy**: After making any configuration changes, you need to trigger a new build and deploy on AWS Amplify. Ensure that the deployment was successful.

6. **Custom Headers**: Although this isn't the root cause of a 404 error, once you resolve the 404 issue, don't forget to revisit the custom headers for `.md` files to ensure they're served with the correct `Content-Type`.

By working through these steps systematically, you should be able to pinpoint and resolve the cause of the 404 error when accessing your markdown files.