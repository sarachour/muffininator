
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
					$("#puzzler-answer"), 
					$("#submit")
				);

		})
	}
	this.init();
}

document.addEventListener('DOMContentLoaded', function() {
  var client = new Client();
  client.setup();
})