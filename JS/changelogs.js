let ver = "V0.1";

$(document).ready(function() {
    console.log(currentDir);
    document.getElementById("tt").innerHTML=currentDir;
})
const fs = require('fs');


const currentDirectory = process.cwd();
