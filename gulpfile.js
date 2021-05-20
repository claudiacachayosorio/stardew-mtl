// PLUGINS

const { src, dest, watch, parallel, series } = require('gulp');

const browsersync	= require('browser-sync'),
	  sourcemaps	= require('gulp-sourcemaps'),
	  source		= require('vinyl-source-stream'),
	  buffer		= require('vinyl-buffer'),
	  rollup		= require('rollup-stream'),
	  uglify		= require('gulp-uglify'),
	  sass			= require('gulp-sass'),
	  postcss		= require('gulp-postcss'),
	  autoprefixer	= require('autoprefixer'),
	  cssnano		= require('cssnano'),
	  imagemin		= require('gulp-imagemin');

sass.compiler = require('sass');


// JS FILES

const jsSrc = 'src/js/index.js';
const rollupOptions = {
	input: jsSrc,
	format: 'es',
	sourcemap: true
}

const jsTask = () => {
	return rollup(rollupOptions)
		.pipe(source('index.js'))
		.pipe(buffer())

		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))

		.pipe(dest('dist'));
}


// SASS FILES

const sassSrc = 'src/sass/index.sass';
const pcssPlugins = [ autoprefixer(), cssnano() ];

const sassTask = () => {
	return src(sassSrc, { sourcemaps: true })
		.pipe(sass())
		.pipe(postcss(pcssPlugins))
		.pipe(dest('src/css', { sourcemaps: '.' }));
}


// ASSETS

// PNG
const pngSrc = 'src/assets/png/**/*.png';
const pngTask = () => {
	return src(pngSrc)
		.pipe(imagemin())
		.pipe(dest('dist/assets/png'));
}


// BROWSERSYNC

const browsersyncOptions = {
	server: { baseDir: 'dist' },
	open: false,
	notify: false
};

// Static server
const browsersyncServer = cb => {
	browsersync.init(browsersyncOptions);
	cb();
}

// Reload
const browsersyncReload = cb => {
	browsersync.reload();
	cb();
}


// WATCH

// Code files
const compileTasks = parallel(sassTask, jsTask);
const codeSrc = [ 'src/sass', 'src/js' ];
const reloadApp = series(compileTasks, browsersyncReload);

// Assets
const assetsSrc = [ 'src/assets/png' ];
const reloadAssets = series(pngTask, browsersyncReload);

// All files
const watchTask = () => {
	watch(codeSrc, reloadApp);
	watch(assetsSrc, reloadAssets);
}

const watchSass = () => {
	watch('src/sass', sassTask);
}


// DEFAULT

const defaultTasks = series(
	sassTask,
	watchSass
);

exports.default = defaultTasks;