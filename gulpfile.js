var gulp     = require('gulp'),
    uglify   = require('gulp-uglify'),
	minifyHtml=require('gulp-minify-html'),
	minifyCss=require('gulp-minify-css');
var concat =require('gulp-concat');
gulp.task('concat-js-web-mobile',function(){
	gulp.src('ProjectHigher/build/web-mobile/*.js')
	.pipe(concat('cocos2d-js-min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('ProjectHigher/build/web-mobile'))
});
gulp.task('htmlMini-web-mobile',function(){
	gulp.src('ProjectHigher/build/web-mobile/*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('ProjectHigher/build/web-mobile'))
});	
gulp.task('cssMini-web-mobile',function(){
	gulp.src('ProjectHigher/build/web-mobile/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('ProjectHigher/build/web-mobile'))
})
gulp.task('web-mobile',['concat-js-web-mobile','htmlMini-web-mobile','cssMini-web-mobile'], function() { 
});


    



gulp.task('wechatgame',function(){
});



gulp.task('concat-js-web-desktop',function(){
	gulp.src('ProjectHigher/build/web-desktop/*.js')
	.pipe(concat('cocos2d-js-min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('ProjectHigher/build/web-desktop'))
});
gulp.task('htmlMini-web-desktop',function(){
	gulp.src('ProjectHigher/build/web-desktop/*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('ProjectHigher/build/web-desktop'))
});	
gulp.task('cssMini-web-desktop',function(){
	gulp.src('ProjectHigher/build/web-desktop/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('ProjectHigher/build/web-desktop'))
})
gulp.task('web-desktop',['concat-js-web-desktop','htmlMini-web-desktop','cssMini-web-desktop'], function() { 
});
