//引入本地安装的gulp
var gulp=require('gulp');
var cssmin=require('gulp-cssmin');
var imagemin=require('gulp-imagemin');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var autoprefix = require('gulp-autoprefixer');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

// 返回值gulp是一个对象，借助此对象可以实现任务清单定制
// 通过一系列方法实现


// 定义任务（压缩图片）
gulp.task('image',function(){
    gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('/public/img'))
});
