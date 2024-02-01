module.exports = function (line){
	if(line[0]) return Math.floor(Math.random()*Number(line[0]))
	else return Math.floor(Math.random())
};