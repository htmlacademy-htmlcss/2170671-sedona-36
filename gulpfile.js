import gulp from "gulp";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import csso from "postcss-csso";
import rename from "gulp-rename";
import { stacksvg } from "gulp-stacksvg";
import svgo from "gulp-svgmin";
import { htmlValidator } from "gulp-w3c-html-validator";
import browser from "browser-sync";

const server = browser.create();
const { src, dest, watch, series, parallel } = gulp;

export function processStyles() {
	return src(["./styles/**/*.css", "!./styles/**/*.min.css"])
		.pipe(plumber())
		.pipe(postcss([autoprefixer(), csso()]))
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(dest("./styles/"))
		.pipe(server.stream());
}

export function createStack() {
	return src(["./icons/**/*.svg", "!./icons/stack.svg"])
		.pipe(svgo())
		.pipe(stacksvg())
		.pipe(dest("./icons"));
}

export function validateMarkup() {
	return src("./*.html")
		.pipe(htmlValidator.analyzer())
		.pipe(htmlValidator.reporter({ throwErrors: true }));
}

export function startServer(done) {
	server.init({
		server: {
			baseDir: "./",
		},
		cors: true,
		notify: false,
		ui: false,
	});
	done();
}

function reloadServer() {
	return server.reload();
}

function watchFiles() {
	watch(["./styles/**/*.css", "!./styles/**/*.min.css"], processStyles);
	watch(
		["./icons/**/*.svg", "!./icons/stack.svg"],
		series(createStack, reloadServer)
	);
	watch("./**/*.{html,js,jpg,png,svg,ico,webmanifest}", reloadServer);
}

export const compileProject = parallel(processStyles, createStack);
export const runDev = series(compileProject, startServer, watchFiles);
