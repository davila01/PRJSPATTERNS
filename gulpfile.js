var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var jsFiles = ['*.js', 'src/**/*.js'];
require('dotenv').config();


gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    //DIRECCIÓN DE LOS ARCHIVOS A INYECTAS EJEMPLO './src/**/*.js',
    var injectSrc = gulp.src(['./public/css/*.css',
        './public/js/*.js'], { read: false });

    var injectOptions = {
        ignorePath: '/public'
    };

    var wiredepOptions = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

  //Inject css a js en index.html 
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(wiredepOptions))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));

/* //Inject css a js en index.jade*/
 /*   return gulp.src('./src/views/*.jade')
        .pipe(wiredep(wiredepOptions))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));*/

});

gulp.task('serve', ['style', 'inject'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': process.env.PORT||5000
        },
        watch: jsFiles
    };
    return nodemon(options)
    .on('restart', function(ev){
        console.log('Restarting....');
    });
});