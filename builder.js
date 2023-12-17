const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const Console = require("vcate/Console");

let VERSION = "0.0.5";

let platforms = ["linux", "macos", "win"];

let file = path.parse(path.basename("./src/QLore.js")).name;


platforms.forEach(el => {
    if (fs.existsSync(path.join("./", "PKG", el, file)) || fs.existsSync(path.join("./", "PKG", el, file + ".exe"))) {
        if (el === "win") {
            fs.renameSync(path.join("./", "PKG", el, file + ".exe"), path.join("./", "PKG", el, file + VERSION + ".exe"));
        } else {
            fs.renameSync(path.join("./", "PKG", el, file), path.join("./", "PKG", el, file + VERSION));
        }
    }

    exec(`npx pkg ./src/QLore.js --targets node18-${el} --output ./PKG/${el}/QLore`, (err, stdout, stderr) => {
        if (err) {
            Console.error(`Error witch building file in the ${el}.`)
            console.log(err)
        } else {
            Console.confirm(`Building file in the ${el} successful.`)
        }
    });
});