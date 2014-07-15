
function Client(){
	this.init = function(){
		this.data = {};
	}
	this.setup = function(title, questionbox, answerbox){
		title.html("Deep Thoughts")
		questionbox.html(" \
			You are given a large rectangular table with a circular hole in it near the corner. \
			What is the smallest number of (not necessarily straight) cuts needed to break apart the table, \
			then reassamble it so that it has the same dimensions as before but has a hole in the center? \
			");
		
		var that = this;
		
		var opt = $("<input/>").attr("id", "formula").attr("type", "text")
		answerbox.append("Number Cuts:", opt);
	}
	this.construct = function(questionbox, answerbox, submit, giveup){
		var data = {};
		data.formula = $("#formula").val();
		return data;

	}
	this.init();
}
client = new Client();