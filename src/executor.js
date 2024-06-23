const axios = require("axios");
const Console = require("./Console.js");

function date() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return `${day}.${month}.${year}:${hours}:${minutes}`;
}

function isUrl(url = "") {
    return ["http", "https"].includes(url.split("://")[0]);
}

function genUrl(url, data = {}) {
    try {
        if (typeof url == "string" && url.trim() !== "" && isUrl(url)) {
            let _url = url.trim();
            if (data) {
                Object.keys(data).forEach((el, i) => {
                    if (data[el]) {
                        let val = data[el];
                        if (typeof val == "string") val = val.trim();
                        else if (typeof val == "object") val = JSON.stringify(val).trim();
                        if (i === 0) _url += `?${el}=${val}`;
                        else _url += `&${el}=${val}`;
                    }
                });
                return _url;
            } else return _url;
        } else throw new Error();
    } catch (err) {
        return;
    }
}

class Axi {
    static GET(url, Com) {
        axios.get(url).then((res) => {
            if (Com.options.REQUEST) Console.gconfirm(`Sending a request to ${url}.`, ["Start: " + date()]);
            if (Com.options.SUCCESS) Console.gconfirm(url, [
                "Status: " + res.status,
                "Text: " + res.statusText,
                "Method: " + res.config.method.toUpperCase(),
                "Data: " + JSON.stringify(res.data)
            ]);
            if (Com.options.REQUEST_END) Console.gconfirm(`Sending a request for ${url} is completed.`, ["End: " + date()]);
            console.log(" ");
        }).catch((err) => {
            try {
                if (Com.options.ERROR) {
                    Console.gerror(url, [
                        "Status: " + err.response.status,
                        "Text: " + err.response.statusText,
                        "Method: " + err.config.method.toUpperCase(),
                        "Data: " + JSON.stringify(err.response.data)
                    ]);
                }
            } catch (err) {
                if (err) Console.gerror("Can't display an error.", [url]);
            }
            console.log(" ");
        });
    }

    static POST(url, Com) {
        axios.post(url).then((res) => {
            if (Com.options.REQUEST) Console.gconfirm(`Sending a request to ${url}.`, ["Start: " + date()]);
            if (Com.options.SUCCESS) Console.gconfirm(url, [
                "Status: " + res.status,
                "Text: " + res.statusText,
                "Method: " + res.config.method.toUpperCase(),
                "Data: " + JSON.stringify(res.data)
            ]);
            if (Com.options.REQUEST_END) Console.gconfirm(`Sending a request for ${url} is completed.`, ["End: " + date()]);
            console.log(" ");
        }).catch((err) => {
            try {
                if (Com.options.ERROR) {
                    Console.gerror(url, [
                        "Status: " + err.response.status,
                        "Text: " + err.response.statusText,
                        "Method: " + err.config.method.toUpperCase(),
                        "Data: " + JSON.stringify(err.response.data)
                    ]);
                }
            } catch (err) {
                if (err) Console.gerror("Can't display an error.", [url]);
            }
            console.log(" ");
        });
    }

    static DELETE(url, Com) {
        axios.delete(url).then((res) => {
            if (Com.options.REQUEST) Console.gconfirm(`Sending a request to ${url}.`, ["Start: " + date()]);
            if (Com.options.SUCCESS) Console.gconfirm(url, [
                "Status: " + res.status,
                "Text: " + res.statusText,
                "Method: " + res.config.method.toUpperCase(),
                "Data: " + JSON.stringify(res.data)
            ]);
            if (Com.options.REQUEST_END) Console.gconfirm(`Sending a request for ${url} is completed.`, ["End: " + date()]);
            console.log(" ");
        }).catch((err) => {
            try {
                if (Com.options.ERROR) {
                    Console.gerror(url, [
                        "Status: " + err.response.status,
                        "Text: " + err.response.statusText,
                        "Method: " + err.config.method.toUpperCase(),
                        "Data: " + JSON.stringify(err.response.data)
                    ]);
                }
            } catch (err) {
                if (err) Console.gerror("Can't display an error.", [url]);
            }
            console.log(" ");
        });
    }

    static PUT(url, Com) {
        axios.put(url).then((res) => {
            if (Com.options.REQUEST) Console.gconfirm(`Sending a request to ${url}.`, ["Start: " + date()]);
            if (Com.options.SUCCESS) Console.gconfirm(url, [
                "Status: " + res.status,
                "Text: " + res.statusText,
                "Method: " + res.config.method.toUpperCase(),
                "Data: " + JSON.stringify(res.data)
            ]);
            if (Com.options.REQUEST_END) Console.gconfirm(`Sending a request for ${url} is completed.`, ["End: " + date()]);
            console.log(" ");
        }).catch((err) => {
            try {
                if (Com.options.ERROR) {
                    Console.gerror(url, [
                        "Status: " + err.response.status,
                        "Text: " + err.response.statusText,
                        "Method: " + err.config.method.toUpperCase(),
                        "Data: " + JSON.stringify(err.response.data)
                    ]);
                }
            } catch (err) {
                if (err) Console.gerror("Can't display an error.", [url]);
            }
            console.log(" ");
        });
    }

    static PATCH(url, Com) {
        axios.patch(url).then((res) => {
            if (Com.options.REQUEST) Console.gconfirm(`Sending a request to ${url}.`, ["Start: " + date()]);
            if (Com.options.SUCCESS) Console.gconfirm(url, [
                "Status: " + res.status,
                "Text: " + res.statusText,
                "Method: " + res.config.method.toUpperCase(),
                "Data: " + JSON.stringify(res.data)
            ]);
            if (Com.options.REQUEST_END) Console.gconfirm(`Sending a request for ${url} is completed.`, ["End: " + date()]);
            console.log(" ");
        }).catch((err) => {
            try {
                if (Com.options.ERROR) {
                    Console.gerror(url, [
                        "Status: " + err.response.status,
                        "Text: " + err.response.statusText,
                        "Method: " + err.config.method.toUpperCase(),
                        "Data: " + JSON.stringify(err.response.data)
                    ]);
                }
            } catch (err) {
                if (err) Console.gerror("Can't display an error.", [url]);
            }
            console.log(" ");
        });
    }

    static HEAD(url, Com) {
        axios.head(url).then((res) => {
            if (Com.options.REQUEST) Console.gconfirm(`Sending a request to ${url}.`, ["Start: " + date()]);
            if (Com.options.SUCCESS) Console.gconfirm(url, [
                "Status: " + res.status,
                "Text: " + res.statusText,
                "Method: " + res.config.method.toUpperCase(),
                "Data: " + JSON.stringify(res.data)
            ]);
            if (Com.options.REQUEST_END) Console.gconfirm(`Sending a request for ${url} is completed.`, ["End: " + date()]);
            console.log(" ");
        }).catch((err) => {
            try {
                if (Com.options.ERROR) {
                    Console.gerror(url, [
                        "Status: " + err.response.status,
                        "Text: " + err.response.statusText,
                        "Method: " + err.config.method.toUpperCase(),
                        "Data: " + JSON.stringify(err.response.data)
                    ]);
                }
            } catch (err) {
                if (err) Console.gerror("Can't display an error.", [url]);
            }
            console.log(" ");
        });
    }

    static OPTIONS(url, Com) {
        axios.options(url).then((res) => {
            if (Com.options.REQUEST) Console.gconfirm(`Sending a request to ${url}.`, ["Start: " + date()]);
            if (Com.options.SUCCESS) Console.gconfirm(url, [
                "Status: " + res.status,
                "Text: " + res.statusText,
                "Method: " + res.config.method.toUpperCase(),
                "Data: " + JSON.stringify(res.data)
            ]);
            if (Com.options.REQUEST_END) Console.gconfirm(`Sending a request for ${url} is completed.`, ["End: " + date()]);
            console.log(" ");
        }).catch((err) => {
            try {
                if (Com.options.ERROR) {
                    Console.gerror(url, [
                        "Status: " + err.response.status,
                        "Text: " + err.response.statusText,
                        "Method: " + err.config.method.toUpperCase(),
                        "Data: " + JSON.stringify(err.response.data)
                    ]);
                }
            } catch (err) {
                if (err) Console.gerror("Can't display an error.", [url]);
            }
            console.log(" ");
        });
    }
}

function executor(Coms = []) {

    for (let i = 0; i < Coms.length; i++) {
        const stop = () => i = Coms.length * 2;

        const Com = Coms[i];

        if (Com.close) {
            const url = genUrl(Com.url, Com.arg);

            if (url) {
                const req = Axi[Com.type];

                if (req !== undefined) {
                    req(url, Com);
                } else {
                    Console.error("Unknown type of request.");
                    stop();
                }
            } else {
                Console.error("An error occurred while generating the url.");
                stop();
            }
        } else if (Com.type === "LOG") {
            if (Com.settings.color) {
                if (Com.settings.color === "red") {
                    Console.error(Com.value);
                } else if (Com.settings.color === "green") {
                    Console.confirm(Com.value);
                } else if (Com.settings.color === "yellow") {
                    Console.info(Com.value);
                } else {
                    Console.log(Com.value);
                }
            } else {
                Console.log(Com.value)
            }
        } else {
            Console.error(`Request number ${i + 1} was not closed.`);
            stop();
        }
    }
}

module.exports = executor;