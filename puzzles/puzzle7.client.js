
function Client(){
	this.init = function(){
		this.data = {};
		this.nwords = 10;
	}
	this.setup = function(title, questionbox, answerbox){
		title.html("Speechless.")
		questionbox.html(" \
			 Find at least ten 5+ letter words in the following boggle board. You may not reuse \
			 letters. Look up the rules for boggle if you're unsure how it works.<br><br> \
			 <table border='1' width='400px' height='400px' style='text-align:center;font-size:32px;'> \
			 <tr><td>E</td><td>D</td><td>F</td><td>E</td></tr> \
			 <tr><td>O</td><td>E</td><td>R</td><td>T</td></tr> \
			 <tr><td>U</td><td>I</td><td>T</td><td>E</td></tr> \
			 <tr><td>U</td><td>V</td><td>I</td><td>B</td></tr> \
			 </table> \
			  \
			");
		
		var that = this;
		
		var i=0;
		
		for(var i=0; i < this.nwords; i++){
			var input = $("<input/>").attr("id", "word"+i)
				.attr("type", "text")
				.attr("minlength", "5")
				.attr("required", true)
				.css("text-transform", "uppercase")
			answerbox.append(input);
		}
	}
	this.construct = function(questionbox, answerbox, submit, giveup){
		var data = {};
		for(var i=0; i < this.nwords; i++){
			data[i] = $("#word"+i).val().toUpperCase(); //concoct the word
		}
		return data;

	}
	this.init();
}
client = new Client();