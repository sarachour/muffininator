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
		var formula = data.formula;
		var sqrt = function(x){return Math.sqrt(x)}
		var log = function(x){return Math.log(x)}
		var fact = function(x){
			if(x == 0) return 0;
			else if(x == 1) return 1;
			else return (x*fact(x-1));
		}
		if(data.formula == "") return;
		var result = this.safe_eval(formula);
		console.log("RESULT:", result);
		if(Math.abs(result - 24) < 1e-6){
			return true;
		}
		else{
			return false;
		}
	}
	this.init();
}
server = new Server();