
function Client(){
	this.init = function(){
		this.server = "http://curious-cube.csail.mit.edu:8080"
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
	this.stats = function(){
		$.get(this.server,
			{
				command:"stats"
			},
			function(data){
				console.log(data);
				$("#puzzler-stats").html(data);
			}
		)
	}
	this.check = function(data){
		var that = this;
		$.get(this.server, 
			{
				command:"check",
				data: JSON.stringify(data)
			},
			function(n){
				console.log("CHECK RESP:", n)
				$("#puzzler-solution").html(n);
				that.stats();
			})

	}
	this.giveup = function(data){
		var that = this;
		$.get(this.server, 
			{
				command:"giveup"
			},
			function(n){
				console.log("GIVEUP RESP:", n)
				$("#puzzler-solution").html(n);
				that.stats();
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
		this.stats();
	}
	this.init();
}

document.addEventListener('DOMContentLoaded', function() {
  var client = new Client();
  client.setup();
})