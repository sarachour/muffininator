
function Client(){
	this.init = function(){
		this.data = {};
	}
	this.setup = function(title, questionbox, answerbox, submit){
		title.html("It's D-D-Dark in Here!")
		questionbox.html(" \
It is night. There is one flashlight. A maximum of two people can cross at one time. <br> \
Any party who crosses, either 1 or 2 people, must have the flashlight with them. <br> \
The flashlight must be walked back and forth, it cannot be thrown, etc. Each band member<br> \
walks at a different speed. A pair must walk together at the rate of the slower man's pace: <br><br> \
*Bono: - 1 minute to cross <br> \
*Edge: - 2 minutes to cross <br> \
*Adam:- 5 minutes to cross <br> \
*Larry: - 10 minutes to cross <br><br> \
For example: if Bono and Larry walk across first, 10 minutes have elapsed when they get to <br> \
the other side of the bridge. \
			");
		answerbox.html("add-textbox")
		submit.click(function(){
			console.log("clicked");
		})

	}
	this.submit = function(questionbox, answerbox, submit, giveup){

	}
	this.init();
}
client = new Client();