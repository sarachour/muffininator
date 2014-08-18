
function Client(){
	this.init = function(){
		this.data = {};
		this.suffixes = ["RUE",  "DIL", "ANY", "POX", "GTH","ELF", "OIA", "IGE", "HOG", "TOO", "DIX", "FIN", "UPT"]
	}
	this.setup = function(title, questionbox, answerbox){
		title.html("The Beginning is the End is the Beginning.")
		questionbox.html(" \
			 To the right, there are 13 well known words. Fill in the prefixes. Each prefix is exactly 5 characters<br> \
			");
		
		var that = this;
		
		var i=0;
		
		for(var i=0; i < this.suffixes.length; i++){
			var input = $("<input/>").attr("id", "word"+i)
				.attr("type", "text")
				.attr("maxlength", "5")
				.attr("pattern", ".{5}")
				.attr("required", true)
				.css("text-transform", "uppercase")
			answerbox.append(input,this.suffixes[i]);
		}
	}
	this.construct = function(questionbox, answerbox, submit, giveup){
		var data = {};
		for(var i=0; i < this.suffixes.length; i++){
			data[i] = $("#word"+i).val().toUpperCase()+this.suffixes[i]; //concoct the word
		}
		return data;

	}
	this.init();
}
client = new Client();