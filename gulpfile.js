const {task, src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const prefix = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');

task('sass', () => {
    return src('project/sass/**/*.scss') 
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix('last 1 versions'))
        .pipe(purgecss({content: ['*.html', 'assets/javaScript/*.js']}))
        .pipe(dest('assets/css'));
});

task('pug', () => {
    return src('project/pug/**/*.pug')
        .pipe(pug())
        .pipe(dest('./'))
});


task('watch', () => {
    watch(['project/sass/**/*.scss', '*.html', 'assets/javaScript/*.js'], series('sass'));
    watch('project/pug/**/*.pug', series('pug'));
});

exports.default = series('watch')