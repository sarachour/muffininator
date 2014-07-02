
function Client(){
	this.init = function(){
		this.data = {};
	}
	this.setup = function(title, questionbox, answerbox){
		title.html("Crazy Eights")
		questionbox.html(" \
How can I get the answer 24 by only using the numbers 8,8,3,3.<br>\
You can use add, subtract, multiply, divide, and parentheses.<br><br>\
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