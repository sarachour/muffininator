//./server.sh puzzles/puzzle2.client.js puzzles/puzzle2.server.js puzzles/puzzle2.text.txt 

function Server(){
	this.init = function(){
	}
	/*
	1 and 2 cross with torch
	1 returns with torch
	5 and 10 cross with torch
	2 returns with torch
	1 and 2 cross with torch
	*/
	this.safe_eval = function(scr)
	{
	    // set up an object to serve as the context for the code
	    // being evaluated. 
	    var mask = {};
	    // mask global properties 
	    for (p in this)
	        mask[p] = undefined;


	    // execute script in private context
	    try {
	    	return (new Function( "with(this) {return " + scr + ";}")).call(mask);
	    }
	    catch (e){
	    	return 0;
	    }
	}
	this.check = function(data){
		var solutions = [
			["CONSTRUE"],
			["DAFFODIL"], 
			["MAHOGANY", "EPIPHANY"], 
			["SMALLPOX"], 
			["STRENGTH"], 
			["YOURSELF"], 
			["PARANOIA"], 
			["PRESTIGE"],
			["HEDGEHOG"],
			["COCKATOO"],
			["APPENDIX"],
			["PARAFFIN"],
			["BANKRUPT"]]

		console.log("INPUT:", data)
		for(var i=0; i < solutions.length; i++){
			var ans = data[i];
			if(solutions[i].indexOf(ans) < 0)
				return false;
		}
		return true;
	}
	this.init();
}
server = new Server();