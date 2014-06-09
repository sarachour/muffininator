function Server(){
	this.init = function(){
	}
	this.check = function(data){
		
		if(data == "test"){
			return true;
		}
		else{
			return false;
		}
	}
	this.init();
}
server = new Server();