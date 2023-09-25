# zip-compression-webpack-plugin
Create zip folders into your webpack bundle.
Uses [`archiver`](https://www.npmjs.com/package/archiver) behind the scene (a streaming interface for archive generation).

![Version](https://img.shields.io/github/package-json/version/nicolasmondain/zip-compression-webpack-plugin)
![Downloads](https://img.shields.io/npm/dm/@nicolasmondain/zip-compression-webpack-plugin.svg)
![Contributors](https://img.shields.io/github/contributors/nicolasmondain/zip-compression-webpack-plugin)
![Issues](https://img.shields.io/github/issues/nicolasmondain/zip-compression-webpack-plugin)
![License](https://img.shields.io/github/license/nicolasmondain/zip-compression-webpack-plugin)

## Installation

```bash
npm install @nicolasmondain/zip-compression-webpack-plugin --save-dev
```
## Supported Versions

Check compatibility between versions of fabric.js and its extension (@nicolasmondain/fabric)

| Webpack           | zip-compression-webpack-plugin | Supported          |
| ----------------- | ------------------------------ | ------------------ |
| 5.x.x             | 2.x.x                          | :white_check_mark: |
| 4.x.x             | 2.x.x                          | :white_check_mark: |

## Usage

List of actions to perform (Array of objects).
Each object must have 4 properties:

* `from` (string): Path of the folder you want to zip (relative path from the root of your project).
* `name` (string): Name of the generated zip that will be added to your Webpack bundle (needs the `.zip` extension).
* `to` (string): Path of the folder you want your generated zip to be moved to (relative path from the root of your project).
* `deleteOriginalAssets` (boolean): Remove the original assets you have added to your generated zip.

### Examples


Zip the folder `./src/assets/bat` under the name `bat.zip` and move it to `./dist/app/assets`.

![capture](/captures/1.png)

Zip the folders:

* `./src/assets/a`
* `./src/assets/b`
* `./src/assets/c`

Save the folders as:

* `a.zip`
* `b.zip`
* `c.zip`

Move the zipped folders to `./dist/app/assets`.

```js
const ZipFolderWebpackPlugin = require('zip-compression-webpack-plugin');

const configuration = {

    plugins: [

        new ZipFolderWebpackPlugin([

			{

				from                : './node_modules/a',
				name                : 'a.zip',
				to                  : './dist/abc',
				deleteOriginalAssets: false

			},

			{

				from                : './src/assets/b',
				name                : 'b.zip',
				to                  : './dist/abc',
				deleteOriginalAssets: true

			},

			{

				from                : './src/assets/c',
				name                : 'c.zip',
				to                  : './dist/abc',
				deleteOriginalAssets: true

			}

		])

    ]

};
```
