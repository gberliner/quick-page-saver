import gulp from 'gulp'
import './build'
gulp.task('default', gulp.series('build'))