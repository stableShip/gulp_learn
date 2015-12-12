/// /// <reference path="./typings/tsd.d.ts" />
var gulp = require("gulp");
/**
 * src方法
 */
gulp.task("src", function () {
    //读取gulpfile.ts文件信息
    var stream = gulp.src("./gulpfile.ts");
    stream.on("data", function (file) {
        console.log(file);
        console.log(file.path);
        console.log(file.contents.toString());
    });
    //读取所有gulpfile.开头的文件的信息
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
/**
 * glob表达式
 */
gulp.task("glob", function () {
    //获取目录下(不包括子目录)所有ts文件
    var stream = gulp.src("*.ts");
    stream.on("data", function (file) {
        console.log(file.path);
    });
    //获取目录下(包括子目录下以及子目录的子目录)的所有ts文件
    var stream = gulp.src("./**/*.ts");
    stream.on("data", function (file) {
        console.log(file.path);
    });
    //获取目录下面文件名为8个字符的ts文件
    var stream = gulp.src("????????.ts");
    stream.on("data", function (file) {
        console.log(file.path);
    });
    //获取gulpfile不同后缀文件信息,匹配{}中的任意字符,以,隔开
    var stream = gulp.src("gulpfile.{ts,js}");
    stream.on("data", function (file) {
        console.log(file.path);
    });
    //获取目录下所有ts,js文件信息
    var stream = gulp.src("{*.ts,*.js}");
    stream.on("data", function (file) {
        console.log(file.path);
    });
    //获取gulpfile不同后缀文件信息,匹配[]中的任意字符
    var stream = gulp.src("gulpfile.[tj]s");
    stream.on("data", function (file) {
        console.log(file.path);
    });
});
// gulp.task("pipe",function(){
// 	var stream = gulp.src("gulpfile.ts")
// 	stream.pipe(fs.createWriteStream("./dest"))
// })
// gulp.task('default', function() {
// 	gulp.watch('app.ts', function(event) {
// 		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// 	});
// }
// ) 
