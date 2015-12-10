var gulp = require("gulp");
gulp.task("src", function () {
    var stream = gulp.src("./gulpfile.ts");
    stream.on("data", function (file) {
        console.log(file);
        console.log(file.path);
        console.log(file.contents.toString());
        console.log("```````````````````````````````````````````````````\n");
    });
    var files = [];
    stream = gulp.src("gulpfile.*");
    stream.on('data', function (file) {
        console.log(file.path);
        files.push(file);
    });
    stream.on('end', function () {
        console.log(files);
        console.log(files.length);
    });
});
// gulp.task('default', function() {
// 	gulp.watch('app.ts', function(event) {
// 		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// 	});
// }
// ) 
