process.env.VERSION = "0.0.5";

const fs = require("fs");
const VCate = require("vcate");
const Console = require("vcate/Console");
const reader = require("./reader");
const executor = require("./executor");
const path = require("path");
const axios = require("axios");

let cat = new VCate(process.argv);

cat.notFound = () => Console.error("Unknown command.");

cat.add("version", () => {
    Console.confirm(`QLore: ${process.env.VERSION}`);
});

cat.add("run", (argv, option) => {
    if (option.clear) console.clear();

    if (option.path) {
        let read = [];
        if (!option.p) {
            read.push({
                type: "PROTOCOL_ADD",
                value: "http"
            });
            read.push({
                type: "PROTOCOL_ADD",
                value: "https"
            });
        }

        read = [...read, ...reader(option.path)];

        if (read.length > 0) {
            executor(read);
        }
    }
}, {
    clear: (argv) => {
        if (argv.includes("-clear")) {
            cat.argv.splice(argv.indexOf("-clear"));
            return true;
        } else if (argv.includes("--cls")) {
            cat.argv.splice(argv.indexOf("--cls"));
            return true;
        } else {
            return false;
        }
    },
    p: (argv) => {
        if (argv.includes("--p")) {
            cat.argv.splice(argv.indexOf("--p"));
            return true;
        } else {
            return false;
        }
    },
    path: (argv) => {
        if (argv[3]) {
            let pat = argv.slice(3).join("");
            if (fs.existsSync(pat)) {
                if (path.extname(pat) === ".ql") {
                    return pat;
                } else {
                    Console.error("The file must have extension .ql");
                    return false;
                }
            } else {
                Console.error("The file does not exist.");
                return false;
            }
        } else {
            Console.error("The path to the executable file was not entered.");
            return false;
        }
    }
});

cat.add("update", () => {
    axios.get("https://raw.githubusercontent.com/Pinbib/QLore/main/package.json").then((res) => {
        let pack = res.data;

        if (pack.version !== process.env.VERSION) {
            if (Number(process.env.VERSION.replace(/\.+/gm, "")) < Number(pack.version.replace(/\.+/gm, ""))) {
                Console.error(`Update your version ${process.env.VERSION}, the latest version ${pack.version}`);
                Console.info("https://pinbib.github.io/QLore");
            } else {
                Console.info(`Your version ${process.env.VERSION} is more available ${pack.version}`);
                Console.info("https://pinbib.github.io/QLore");
            }
        } else Console.confirm("There are no updates.");
    }).catch((err) => {
        if (err) Console.error("There was an error when requesting a version.");
    });
});

cat.listen();