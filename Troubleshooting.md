# Troubleshooting

## React Troubleshooting

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