const del = require("del"); 
// удаляет старую сборку

// Конфигурация
const path = require("../config/path.js");



// Удаление директории
const clear = () => {
	return del(path.root);
}

module.exports = clear;