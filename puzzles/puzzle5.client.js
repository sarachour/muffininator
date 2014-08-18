
function Client(){
	this.init = function(){
		this.data = {};
	}
	this.setup = function(title, questionbox, answerbox){
		title.html("Much Numbers. Wow.")
		questionbox.html(" \
			 What is the next number in the sequence? <br><br> \
				1 <br> \
				11 <br> \
				21 <br> \
				1211 <br> \
				111221 <br> \
				312211 \
			");
		
		var that = this;
		
		var opt = $("<input/>").attr("id", "formula").attr("type", "text")
		answerbox.append("Next Number:", opt);
	}
	this.construct = function(questionbox, answerbox, submit, giveup){
		var data = {};
		data.formula = $("#formula").val();
		return data;

	}
	this.init();
}
client = new Client();