Date()
let Ucapan = new Date()
var h=(new Date()).getHours();
var m=(new Date()).getMinutes();
var s=(new Date()).getSeconds();
if (h >= 4 && h < 10) document.writeln("Selamat pagi Wulan");
if (h >= 10 && h < 15) document.writeln("Selamat siang Wulan");
if (h >= 15 && h < 18) document.writeln("Selamat sore Wulan");
if (h >= 18 || h < 4) document.writeln("Selamat malam Wulan");