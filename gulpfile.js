//build
var gulp = require('gulp');
//for debug, in console
var gutil = require('gulp-util')
//output source to another
var source = require('vinyl-source-stream')
//dependency
var browserify = require('browserify')
//code change infect app without restart
var watchify = require('watchify')
//work with browserfiy for file concat
var reactify = require('reactify')

gulp.task('default',function(){
    // bunlder running browserify on code base
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'],
        //compile jsx to js
        transform: [reactify],
        extensions: ['.jsx'],
        debug:true,
        cache:{},
        packageCache:{},
        fullPaths:true
    }));
    function build(file){
        if(file) gutil.log('Recompiling'+file);
        return bundler
            .bundle()
            .on('error',gutil.log.bind(gutil,'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'));
    };
    build();
    bundler.on('update',build);
})
