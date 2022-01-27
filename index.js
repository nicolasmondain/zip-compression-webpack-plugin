const archiver = require('archiver');
const fs       = require('fs');
const path     = require('path');

class ZipCompressionWebpackPlugin{

	constructor(folders){

		this.folders = folders;

	}

	static zip(folder){

		return new Promise((resolve, reject) => {

			fs.stat(folder.from, (error, stats) => {

				if(error || !stats.isDirectory()){

					reject(error || new Error(`stats.isDirectory(): ${stats.isDirectory()}`));

				}

				const output  = fs.createWriteStream(folder.name);
				const archive = archiver('zip', {zlib: {level: 9}});

				output.on('close', () => {

					if(folder.deleteOriginalAssets){

						fs.rmdirSync(folder.from, {recursive: true});

					}

					const directory = path.resolve(folder.to);
					const previous  = path.resolve(folder.name);
					const next      = path.resolve(`${folder.to}/${folder.name}`);

					if(!fs.existsSync(directory)){

						fs.mkdirSync(directory, {recursive: true});

					}

					fs.renameSync(previous, next);
					resolve();

				});

				archive.pipe(output);
				archive.directory(folder.from, false);
				archive.finalize();

			});

		});

	}

  apply(compiler){

    compiler.hooks.emit.tapAsync('ZipCompressionWebpackPlugin', (compilation, callback) => {

			if(Array.isArray(this.folders) && this.folders.length > 0){

				Promise.all(this.folders.map((folder) => ZipCompressionWebpackPlugin.zip(folder)))
				.then(() => {

					callback();

				});

			}else{

				callback();

			}

		});

  }

}

module.exports = ZipCompressionWebpackPlugin;
