# Step 4: Configuration Refactoring

## Overview
This step involved refactoring the configuration management and database connection logic.

## Actions Taken

1.  **Configuration Centralization**:
    *   Created `src/config/config.js` to centralize all environment variables and configuration settings.
    *   The config object includes `port`, `env`, `mongodbUri`, and `mongodbDbName`.
    *   This replaces the scattered `process.env` calls.

2.  **Cleanup**:
    *   Removed `src/config/db.js` as the connection logic was moved.

3.  **Server Update**:
    *   Updated `server.js` to import the new `config` object.
    *   Moved the database connection logic directly into `server.js` (or it could be a separate utility using the config).
    *   Updated the connection string to use `config.mongodbUri` and `config.mongodbDbName`.

4.  **Environment Variables**:
    *   Updated `.env` to use `MONGODB_URI` instead of `MONGO_URI`.
    *   Added `MONGODB_DB_NAME` to `.env`.

## Files Created/Modified
-   `src/config/config.js` (Created)
-   `src/config/db.js` (Deleted)
-   `server.js` (Modified)
-   `.env` (Modified)
