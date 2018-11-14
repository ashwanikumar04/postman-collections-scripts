var gulp = require('gulp');
var log = require('fancy-log');
var del = require('del');
var argv = require('yargs').argv;
var modifyJson = require("gulp-postcol");
var config = require("./config.json");

function checkArgs() {
    var dest = argv.dest;
    var src = argv.src;
    if (dest === undefined) {
        log('Please pass dest');
        process.exit(1);
    }
    if (src === undefined) {
        log('Please pass src');
        process.exit(1);
    }
    return {
        dest: dest,
        src: src
    };
}

gulp.task('clean', function () {
    var args = checkArgs();
    return del([
        './' + args.dest + '/*'
    ]);
});

gulp.task('json', function () {
    var args = checkArgs();
    gulp.src([args.src + '/**/*.json'])
        .pipe(modifyJson(config))
        .pipe(gulp.dest(args.dest + '/'));
});

gulp.task('default', ["clean", "json"], function () {
    log('Completed  task!');
});