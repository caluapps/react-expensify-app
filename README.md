## Table of Contents

* [Setup](#setup)
* [Available Scripts](#available-scripts)
  * [live-server public](#live-server-public)
  * [CTRL + C](#CTRL+C)
* [Troubleshooting](#troubleshooting)

## Setup

`babel src/app.js --out-file=public/scripts/app.js --presets=env,react`

`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `live-server public`

Runs the react-app.

Open your Browser `http://127.0.0.1:8080/` to view it. It will reload if you save edits to your files, and you will see errors and logs in the console.

Sometimes you may need to reset or clear cache. To do so, you can press `CTRL + C` to stop the process and simply run `live-server public` again.

### `CTRL + C`

Stops the server.

1. Make sure that you are in your terminal.
2. Press `CTRL + C`.

## Troubleshooting

no Content yet
