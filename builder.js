const pkg = require("pkg");
const fs = require("fs");
const path = require("path");

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

    pkg.exec(['--target', `node18-${el}-x64`, '--output', path.join("./", "PKG", el, file), path.join("./", "src", file + ".js")]);
});