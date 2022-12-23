const { src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
// plumber ловит ошибки
const plumber = require("gulp-plumber");
// оторражает всплывающие сообщения для plumber
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
// Шаблонизатор(разделение на компоненты)
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");



// Обработка HTML
const html = () => {
	return src(path.html.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "HTML",
				message: error.message
			}))
		}))
		.pipe(fileInclude()) // поток фаулов пройдет сначала через
		// наш плагин потом вернется нам обьединеный файл
		.pipe(size({ title: "До сжатия" }))
		.pipe(htmlmin(app.htmlmin))
		.pipe(size({ title: "После сжатия" }))
		.pipe(dest(path.html.dest))
		
}

module.exports = html;