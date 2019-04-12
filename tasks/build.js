import gulp from 'gulp'
import './clean'
import './manifest'
import './scripts'
import './pack'
// import './styles'
// import './pages'
// import './locales'
// import './images'
// import './fonts'
// import './chromereload'

gulp.task('build', gulp.series('clean','manifest','scripts','pack'))//,gulp.parallel(   'manifest')))//,
// 'scripts',
// 'styles',
// 'pages',
// 'locales',
// 'images',
// 'fonts',
// 'chromereload')))
