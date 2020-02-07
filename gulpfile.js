const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const uglify = require('gulp-uglify-es').default
const uglifyCSS = require('gulp-uglifycss')
const htmlmin = require('gulp-htmlmin')
const dateformat = require('dateformat')
const del = require('del')
const ENV = {}

const insertEnv = function(stream){
	return replace(/\$([a-zA-Z0-9_-]+)\$/g, (nil, varname)=>{
		return ENV[varname]
	})
}

gulp.task('clean', ()=>{
	return del(['./dist'])
})

gulp.task('build-js', ()=>{
	return gulp.src([
		'./web/*.js'
	])
	.pipe(insertEnv())
	.pipe(concat('main.js'))
	.pipe(rename(`main-${ENV.cachebuster}.js`))
	.pipe(gulp.dest('./dist'))
	.pipe(uglify())
	.pipe(rename(`main-${ENV.cachebuster}.min.js`))
	.pipe(gulp.dest('./dist'))
})

gulp.task('build-css', ()=>{
	return gulp.src([
		'./web/*.scss'
	])
	.pipe(sass({
		outputStyle: 'expanded',
		sourceMap: 'non'
	}))
	.pipe(insertEnv())
	.pipe(concat('main.css'))
	.pipe(rename(`main-${ENV.cachebuster}.css`))
	.pipe(gulp.dest('./dist'))
	.pipe(uglifyCSS())
	.pipe(rename(`main-${ENV.cachebuster}.min.css`))
	.pipe(gulp.dest('./dist'))
})

gulp.task('build-html', ()=>{
	return gulp.src([
		'./web/index.html'
	])
	.pipe(insertEnv())
	// .pipe(htmlmin({
	// 	collapseWhitespace: true
	// }))
	.pipe(gulp.dest('.'))
})

gulp.task('build', gulp.series([
	'clean',
	function loadEnv(done){
		ENV.cachebuster = dateformat(new Date(), 'yymmddHHMMssl')
		done()
	},
	'build-js',
	'build-css',
	'build-html'
]))

gulp.task('watch', ()=>{
	gulp.watch([
		'./*.json',
		'./src/**/*',
		'./web/**/*'
	], {ignoreInitial: false}, gulp.task('build'))
})
