//./server.sh puzzles/puzzle2.client.js puzzles/puzzle2.server.js puzzles/puzzle2.text.txt 

function Server(){
	this.init = function(){
	}
	this.count = function(data,key){
		i=0;
		for(k in data){
			if(data[k] == key){
				i+=1;
			}
		}
		return i;
	}
	this.check = function(data){
		var solutions = [
		"BEREFT" ,
		"BERET" ,
		"BETED" ,
		"BETTED" ,
		"BETTER" ,
		"BETTERED",
		"BITER" ,
		"BITTE" ,
		"BITTER" ,
		"BITTERED",
		"DEERE" ,
		"DEFER" ,
		"DEFTER" ,
		"DETER" ,
		"FETTED" ,
		"FETTER" ,
		"FETTERED",
		"FREED" ,
		"FREIT" ,
		"FRETTED" ,
		"FRIED" ,
		"FRITT" ,
		"IVIED" ,
		"REBIT" ,
		"REBITE" ,
		"REFED" ,
		"REFEED" ,
		"RETIE" ,,
		"RETIED" ,
		"RETTED" ,
		"TEREDO" ,
		"TERETE" ,
		"TERFE" ,
		"TETRI" ,
		"TIERED" ,
		"TIRED" ,
		"TREED" ,
		"TRIED" ,
		"TRIODE" ,
		"TRITE" ,
		"VIRED" ,
		"VIREO"
		]

		console.log("RECIEVED:", data);
		for(i in data){
			var ans = data[i];
			if(solutions.indexOf(ans) < 0 || this.count(data, ans) > 1)
				return false;
		}
		return true;
	}
	this.init();
}
server = new Server();