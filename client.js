var text = "<h3>Muffin Monday Message</h3><br> \
Happy muffin monday everyone!<br> \
I decided to standardize future puzzles! From now on they'll be linked on this web interface :D There is also now an option to give up too (for those who are too lazy). Well anyway, come by the G9 lounge at 5PM for delicious !muffins. If you don't like muffins, come for the people. If you don't like people, come by anyway. <br>\
Have some pictures. \
<br>\
\
<br>\
PS: I still need a volunteer muffin courier for Monday, June 23. Email me if you can do it, or we will be sans muffins D:<br><br>\
Caio!<br>\
Sara<br><br>\
<img src='http://imgs.steps.dragoart.com/how-to-draw-rage-face-rage-face-step-7_1_000000064727_2.jpg'></img>\
<img src='http://www.icanlocalize.com/site/wp-content/uploads/2013/01/Rage_Face_Photo.png'></img>\
<img src='http://fc01.deviantart.net/fs71/i/2012/092/4/c/april_fools__nyan_cat_and_tac_nayn_by_em_po-d4utbup.gif'></img>\
<img src='http://fc07.deviantart.net/fs25/f/2008/179/d/a/green_llama_lazer_by_Unibrow5000.gif'></img>\
<br>"
function ClientTemp(){
	this.init = function(){
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

	}
	this._tempget = function(){
		$("#puzzler-solution").html(text);
	}
	this.check = function(data){
		var that = this;
		if(server.check(data)){
			that._tempget();
		}
		else{
			$("#puzzler-solution").html("error");
		}

	}
	this.giveup = function(data){
		var that = this;
		that._tempget();

	}
	this.loadPuzzle = function(){
		var that = this
		if(!this.loaded){
			client.setup(
				$("#puzzler-title"), 
				$("#puzzler-question"), 
				$("#puzzler-answer")
			);
			this.loaded = true;
		}
		$("#submit").click(function(){
			var data= client.construct();
			console.log(data);
			that.check(data);
		})
		$("#give-up").click(function(){
			that.giveup();
		})
	}
	this.init();
}

document.addEventListener('DOMContentLoaded', function() {
  var clientTemp = new ClientTemp();
  clientTemp.setup();
})