# @sharingbox/zip-compression-webpack-plugin
Create zip folders into your webpack bundle.
Uses [`archiver`](https://www.npmjs.com/package/archiver) behind the scene (a streaming interface for archive generation).

[![npm version](https://img.shields.io/npm/v/@sharingbox/zip-compression-webpack-plugin)](https://www.npmjs.com/package/@sharingbox/zip-compression-webpack-plugin)

## Installation

```
npm install @sharingbox/zip-compression-webpack-plugin --save-dev
```
## Usage

List of actions to perform (Array of objects).
Each object must have 4 properties:

* `from`: string
* `name`: string
* `to`: string
* `deleteOriginalAssets`: boolean

### `from` (string)
Path of the folder you want to zip (relative path from the root of your project).
### `name` (string)
Name of the generated zip that will be added to your Webpack bundle (needs the `.zip` extension).
### `to` (string)
Path of the folder you want your generated zip to be moved to (relative path from the root of your project).

### `deleteOriginalAssets` (boolean)
Remove the original assets you have added to your generated zip.


```js
const ZipFolderWebpackPlugin = require('@sharingbox/zip-compression-webpack-plugin');

const configuration = {

    plugins: [

        new ZipFolderWebpackPlugin([

			{

				from                : './node_modules/@sharingbox/documents-A',
				name                : 'documents-A.zip',
				to                  : './dist/zip',
				deleteOriginalAssets: false

			},

			{

				from                : './src/assets/documents-B',
				name                : 'documents-B.zip',
				to                  : './dist/zip',
				deleteOriginalAssets: true

			}

		])

    ]

};
```
