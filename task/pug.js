const { src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
// plumber ловит ошибки
const plumber = require("gulp-plumber");
// оторражает всплывающие сообщения для plumber
const notify = require("gulp-notify");
const pugs = require("gulp-pug");


// Обработка PUG
const pug = () => {
	return src(path.pug.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "Pug",
				message: error.message
			}))
		}))
		.pipe(pugs(app.pug))
		.pipe(dest(path.pug.dest));
}

module.exports = pug;