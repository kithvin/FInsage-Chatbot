# Step 5: Morgan Logging Implementation

## Overview
This step involved adding `morgan` as an HTTP request logger middleware to improve observability and debugging.

## Actions Taken

1.  **Installation**:
    *   Installed `morgan` via npm: `npm install morgan`.

2.  **Implementation**:
    *   Updated `server.js` to import `morgan`.
    *   Configured the middleware to use different logging formats based on the environment:
        *   **Development**: Uses `'dev'` format (concise output colored by response status).
        *   **Production**: Uses `'combined'` format (standard Apache combined log output).

## Files Created/Modified
-   `server.js` (Modified)
-   `package.json` (Modified - dependency added)
