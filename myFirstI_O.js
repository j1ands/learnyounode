var fs = require('fs');

var path_to_file = process.argv[2];

var str_of_file = fs.readFileSync(path_to_file).toString();

var arr_of_lines = str_of_file.split('\n');

console.log(arr_of_lines.length - 1);