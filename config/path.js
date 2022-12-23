const pathSrc = "./src";
const pahtDest = "./public";

module.exports = {
	root: pahtDest,
	html: {
		src: pathSrc + "/html/*.html",
		watch: pathSrc + "/html/**/*.html",
		dest: pahtDest
	},

	pug: {
		src: pathSrc + "/pug/*.pug",
		watch: pathSrc + "/pug/**/*.pug",
		dest: pahtDest
	}
}


