# Welcome to the Anythink Market repo (powered by [Wilco](https://www.trywilco.com))

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and the Wilco app review it right away

## How to run in dev mode?

### Using Codespace

⚠️ **Recovery Mode Fix**: If your Codespace is in recovery mode due to Docker issues:

1. **Rebuild the container**: Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac), type "Codespaces: Rebuild Container" and select it. This will apply the updated devcontainer configuration.

2. **After rebuild, start the app**:
   ```bash
   docker compose up
   ```

### Manual Setup (if rebuild doesn't work)
If you're still having Docker issues after rebuild:

1. **Install Docker** (already done if following this guide):
   ```bash
   sudo apk update && sudo apk add docker docker-compose
   ```

2. **The devcontainer configuration has been updated** to include Docker-in-Docker support. You need to rebuild for it to take effect.

3. **Run the application**:
   ```bash
   docker compose up
   ```

## Tests
Documentation about running the End to End test can be found under the `/tests` directory
