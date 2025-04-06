## transformers-on-electron-renderer

A demonstration project showing how to run transformers.js within Electron's renderer process. While transformers.js provides [an official Electron example](https://github.com/huggingface/transformers.js/tree/main/examples/electron), it only demonstrates running transformers in Electron's main process.

## Content Security Policy Issues

When first attempting to run transformers.js in the renderer process, you may encounter CSP errors like:

```
Refused to load the script 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.4.2/dist/ort-wasm-simd-threaded.jsep.mjs' because it violates the following Content Security Policy directive: "script-src 'self' 'unsafe-eval' 'unsafe-inline' data:". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
```

### Solution

This project demonstrates a solution to CSP issues in both development and production environments:

1. For Production: Added appropriate CSP <meta> tags in the HTML file
2. For Development: Configured webpack-dev-server's CSP settings

The challenge stems from how Electron Forge handles development vs. production environments:

-   In development, webpack-dev-server serves content via HTTP and sets CSP headers that override HTML meta tags
-   In production, the app loads directly from local files, where only HTML meta tags apply

To address this, the project uses `@electron-forge/plugin-webpack`'s `devContentSecurityPolicy` option to set the correct CSP during development, while maintaining the meta tag for production builds.
