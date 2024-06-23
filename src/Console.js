const qp = require("qp-color");

class Console extends console.Console{
	constructor() {
		super(process.stdout, process.stderr);
	}


	static log(message){
		console.log(qp.wb(message));
	}

	static error(message){
		console.log(qp.rb(message));
	}

	static info(message){
		console.log(qp.yb(message));
	}

	static confirm(message){
		console.log(qp.gb(message));
	}

	static glog(title, data){
		console.group(qp.wb(title));

		data.forEach(el=>{
			console.log(qp.wi("\t"+el))
		});

		console.groupEnd();
	}

	static gerror(title, data){
		console.group(qp.rb(title));

		data.forEach(el=>{
			console.log(qp.ri("\t"+el))
		});

		console.groupEnd();
	}

	static ginfo(title, data){
		console.group(qp.yb(title));

		data.forEach(el=>{
			console.log(qp.yi("\t"+el))
		});

		console.groupEnd();
	}

	static gconfirm(title, data){
		console.group(qp.gb(title));

		data.forEach(el=>{
			console.log(qp.gi("\t"+el))
		});

		console.groupEnd();
	}
}

module.exports = Console;