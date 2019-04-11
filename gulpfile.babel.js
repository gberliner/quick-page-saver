var gulp = require('gulp')
var HubRegistry = require('gulp-hub');
// Check out the tasks directory
// if you want to modify tasks!
var hub = new HubRegistry(['./tasks/*.js']);
gulp.registry(hub)