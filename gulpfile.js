const {watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");


// Задачи
const clear = require('./task/clear.js');
const pug = require('./task/pug.js');


// Сервер
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root
		}
	});
}


// Наблюдение с помощью метода 
// при изменении этих файлов, watch запустит задачу html
const watcher = () => {
	watch(path.pug.watch, pug).on("all", browserSync.reload);
}


// Задачи
exports.pug = pug;
exports.watch = watcher;
exports.clear = clear;

// Общая задача для сборки
exports.dev = series( // этот метод нужен для последовательного запуска задач
	clear,
	pug,
	parallel(watcher, server)
);