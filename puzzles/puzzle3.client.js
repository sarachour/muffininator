
function Client(){
	this.init = function(){
		this.data = {};
	}
	this.setup = function(title, questionbox, answerbox){
		title.html("Deep Thoughts")
		questionbox.html(" \
Easy question this week. What is the meaning of life?<br><br>\
			");
		
		var that = this;
		
		var opt = $("<input/>").attr("id", "formula").attr("type", "text")
		answerbox.append("Formula:", opt);
	}
	this.construct = function(questionbox, answerbox, submit, giveup){
		var data = {};
		data.formula = $("#formula").val();
		return data;

	}
	this.init();
}
client = new Client();