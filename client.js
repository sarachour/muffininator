
function Client(){
	this.init = function(){
		this.server = "http://127.0.0.1:1337"
		this.loaded = false;
		this.puzzle = null;
	}
	this.setup = function(){
		var outerContainer = $('#puzzler').layout({resize: false});
		function layout() {
	        outerContainer.layout({resize: false});
	    }
		$('.layout-outer > .east').resizable({
	        handles: 'w',
	        stop: layout
	    });

	    $('.layout-outer > .west').resizable({
	        handles: 'e',
	        stop: layout
	    });
	    $( window ).resize(function() {
		      layout();
		});
		this.loadPuzzle();
	}
	this.check = function(data){
		$.get(this.server, 
			{
				command:"check",
				data: JSON.stringify(data)
			},
			function(n){
				console.log("CHECK RESP:", n)
				$("#puzzler-solution").html(n);
			})

	}
	this.giveup = function(data){
		$.get(this.server, 
			{
				command:"giveup"
			},
			function(n){
				console.log("GIVEUP RESP:", n)
				$("#puzzler-solution").html(n);
			})

	}
	this.loadPuzzle = function(){
		var that = this
		$.get(this.server, 
			{
				command:"puzzle"
			},
			function(data){
				that.loaded = true;
				eval(data);
				client.setup(
					$("#puzzler-title"), 
					$("#puzzler-question"), 
					$("#puzzler-answer")
				);
				$("#submit").click(function(){
					var data= client.construct();
					console.log(data);
					that.check(data);
				})
				$("#give-up").click(function(){
					that.giveup();
				})

		})
	}
	this.init();
}

document.addEventListener('DOMContentLoaded', function() {
  var client = new Client();
  client.setup();
})