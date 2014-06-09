function Server(){
	this.init = function(){
	}
	/*
	1 and 2 cross with torch
	1 returns with torch
	5 and 10 cross with torch
	2 returns with torch
	1 and 2 cross with torch
	*/
	this.check = function(data){
		if(parseInt(data.time) == 17){
			function method1(){
				var ok_t1 = false;
				if((data.t1.f.a == "1" && data.t1.f.b == "2")||
				   (data.t1.f.a == "2" && data.t1.f.b == "1"))
					ok_t1 = true;

				var ok_t1b = false;
				if((data.t1.b.a == "1" && data.t1.b.b == "-1")||
				   (data.t1.b.a == "-1" && data.t1.b.b == "1"))
					ok_t1b = true;

				var ok_t2 = false;
				if((data.t2.f.a == "5" && data.t2.f.b == "10")||
				   (data.t2.f.a == "10" && data.t2.f.b == "5"))
					ok_t2 = true;

				var ok_t2b = false;
				if((data.t2.b.a == "-1" && data.t2.b.b == "2")||
				   (data.t2.b.a == "2" && data.t2.b.b == "-1"))
					ok_t2b = true;

				var ok_t3 = false;
				if((data.t3.f.a == "1" && data.t3.f.b == "2")||
				   (data.t3.f.a == "2" && data.t3.f.b == "1"))
					ok_t3 = true;

				var ok_rest = false;
				if(data.t4.f.a == "-1" && data.t4.f.b == "-1" &&
				   data.t4.b.a == "-1" && data.t4.b.b == "-1" &&
				   data.t5.f.a == "-1" && data.t5.f.b == "-1" &&
				   data.t5.b.a == "-1" && data.t5.b.b == "-1")
					ok_rest = true;

				var ok = ok_t1 && ok_t1b && ok_t2 && ok_t2b && ok_t3 && ok_rest
				return ok;
			}
			function method2(){
				var ok_t1 = false;
				if((data.t1.f.a == "1" && data.t1.f.b == "2")||
				   (data.t1.f.a == "2" && data.t1.f.b == "1"))
					ok_t1 = true;

				var ok_t1b = false;
				if((data.t1.b.a == "2" && data.t1.b.b == "-1")||
				   (data.t1.b.a == "-1" && data.t1.b.b == "2"))
					ok_t1b = true;

				var ok_t2 = false;
				if((data.t2.f.a == "5" && data.t2.f.b == "10")||
				   (data.t2.f.a == "10" && data.t2.f.b == "5"))
					ok_t2 = true;

				var ok_t2b = false;
				if((data.t2.b.a == "-1" && data.t2.b.b == "1")||
				   (data.t2.b.a == "1" && data.t2.b.b == "-1"))
					ok_t2b = true;

				var ok_t3 = false;
				if((data.t3.f.a == "1" && data.t3.f.b == "2")||
				   (data.t3.f.a == "2" && data.t3.f.b == "1"))
					ok_t3 = true;

				var ok_rest = false;
				if(data.t4.f.a == "-1" && data.t4.f.b == "-1" &&
				   data.t4.b.a == "-1" && data.t4.b.b == "-1" &&
				   data.t5.f.a == "-1" && data.t5.f.b == "-1" &&
				   data.t5.b.a == "-1" && data.t5.b.b == "-1")
					ok_rest = true;

				var ok = ok_t1 && ok_t1b && ok_t2 && ok_t2b && ok_t3 && ok_rest
				return ok;
			}
			var ok = method1() || method2()
			return ok;
		}
		else{
			return false;
		}
	}
	this.init();
}
server = new Server();