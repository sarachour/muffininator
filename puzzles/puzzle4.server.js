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
		if(data.formula == "") return;
		console.log("INPUT:", formula)
		var result = this.safe_eval(formula);
		console.log("RESULT:", result, "=?",1);
		if(Math.abs(result - 1) < 1e-6){
			return true;
		}
		else{
			return false;
		}
	}
	this.init();
}
server = new Server();