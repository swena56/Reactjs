//npm install --save-dev gulp gulp-uglify gulp-babel gulp-watch gulp-less gulp-concat gulp-sourcemaps
//npm install --save-dev babel-plugin-transform-react-jsx @babel/plugin-transform-runtime babel-core babel-cli

const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	less = require('gulp-less'),
 	babel = require('gulp-babel');

// gulp.task('minify', function(){
// 	gulp.src('src/js/**/*.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist/js'));
// });

//compile reactjs components
gulp.task('watch', () =>
	watch('src/components/**/*.js', { ignoreInitial: false })
		.pipe(babel({
			plugins: ['transform-react-jsx']
		}))
		.pipe(gulp.dest('src/js/compiled'))
);

// gulp.task('less', function () {
//   return gulp.src('./less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./public/css'));
// });

//run all
gulp.task('default',['watch']);