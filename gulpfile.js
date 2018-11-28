const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const replace = require('gulp-replace')
const uglify = require('gulp-uglify-es').default
const dateformat = require('dateformat')
const del = require('del')
const ENV = {}

const loadEnv = function(done){
	ENV.cachebuster = dateformat(new Date(), 'yymmddHHMMssl')
	done()
}
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
	.pipe(uglify())
	.pipe(concat(`main-${ENV.cachebuster}.js`))
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
	.pipe(concat(`main-${ENV.cachebuster}.css`))
	.pipe(gulp.dest('./dist'))
})

gulp.task('build-html', ()=>{
	return gulp.src([
		'./web/*.html'
	])
	.pipe(insertEnv())
	.pipe(gulp.dest('.'))
})

gulp.task('build', gulp.series([
	'clean',
	loadEnv,
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
