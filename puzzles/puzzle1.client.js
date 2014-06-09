
function Client(){
	this.init = function(){
		this.data = {};
	}
	this.setup = function(title, questionbox, answerbox){
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
the other side of the bridge. <br><br> \
<b>What sequence of trips transports everyone across in the shortest time? How long does it take?</b>\
			");
		
		var that = this;
		
		var opt_bono = $("<option/>").attr("value", "1").html("bono")
		var opt_edge = $("<option/>").attr("value", "2").html("edge")
		var opt_adam = $("<option/>").attr("value", "5").html("adam")
		var opt_larry = $("<option/>").attr("value", "10").html("larry")
		var opt_none = $("<option/>").attr("value", "-1").attr("selected", "true").html("none")
		var opt = $("<select/>").append(opt_bono, opt_edge, opt_adam, opt_larry, opt_none)
		function app(cnt){
			prefix = "t"+cnt;
			answerbox.append("<b>Trip "+cnt+"</b><br> to:",
							opt.clone().attr('id', prefix+"_fa"), 
							opt.clone().attr('id', prefix+"_fb"), 
							"from",
							opt.clone().attr('id', prefix+"_ba"), 
							opt.clone().attr('id', prefix+"_bb"), "<br><br>")
		}
		app("1");
		app("2");
		app("3");
		app("4");
		app("5");

		var time = $("<input/>").attr("id", "time_taken").attr("type", "text")
		answerbox.append("Time taken:", time);
	}
	this.construct = function(questionbox, answerbox, submit, giveup){
		var data = {};
		data.time = $("#time_taken").val();

		function proc(prefix){
			data[prefix] = {f:{
				a: $("#"+prefix+"_fa").val(),
				b: $("#"+prefix+"_fb").val()
			}, b:{
				a: $("#"+prefix+"_ba").val(),
				b: $("#"+prefix+"_bb").val()
			}};
		}
		proc("t1");
		proc("t2");
		proc("t3");
		proc("t4");
		proc("t5");
		return data;

	}
	this.init();
}
client = new Client();