 "use strict"
function Figures(type){
	this._setType=function(){
		this._type = type;
	}
	
	this._getType = function(){
		return this._type;
	}
	this._setType();
	
	this._setRes=function(){
		this._res = 0;
	}
	
	this._getRes=function(){
		return this._res;
	}
	this._setRes();
	
	this.square=function(){
		if(this._getType()!=='undefined')
			console.log("Square of " + this._getType() + " is " + this._getRes());
		else
			return;
	}
	
	this.perimetr=function(){
		if(this._getType()!=='undefined')
			console.log("Perimetr of " + this._getType() + " is " + this._getRes());
		else
			return;
	}
}


function Rectangle(type,a,b){
	var res=0;
	Figures.apply(this, arguments);
	var setParentType = this._setType;
	this._setType = function(){
		setParentType.call(this);
		if(type!='Rectangle'){
			console.log('Type of the figure have to be "Rectangle"');
			this._type = 'undefined';
			return;
		}
		else{
			this._type = type;
		}
	}
	
	this._setA=function(){
		if(a && a>0)
			this._a=a;
		else
			console.log('The length of the first side is wrong!');
	};
	
	this._setB=function(){
		if(b && b>0)
			this._b=b;
		else{
			console.log('The length of the second side is wrong!');
			res = 0;
		}
	};
	
	this._getA=function(){
		return this._a;
	};
	
	this._getB=function(){
		return this._b;
	};
	
	var parentFigureSq = this.square;
	var perentSetRes = this._setRes;
	
	this.square = function(){
		parentFigureSq.call(this);
		this._setType();
		if(this._getType()!=='undefined'){
			this._setA();
			this._setB();
			this._setRes = function(){
				perentSetRes.call(this);
				if(this._a && this._b)
					this._res = this._getA()*this._getB();
				else
					this._res = 0;
			}
			this._setRes();
		}
	}
	var parentFigurePer = this.perimetr;
	
	this.perimetr = function(){
		parentFigurePer.call(this);
		this._setType();
		if(this._getType()!=='undefined'){
			this._setA();
			this._setB();
			this._setRes = function(){
				perentSetRes.call(this);
				if(this._a && this._b)
					this._res = 2*this._getA()+2*this._getB();
				else
					this._res = 0;
			}
			this._setRes();
		}
	}
}


var fig2 = new Rectangle('Rectangle',10,15);
console.log(fig2)
fig2.square();
/*fig2.perimetr();*/


/*function Circle(type,rad){
	var pi = 3.1415;
	var res=0;
	Figures.apply(this, arguments);
	this._setType = function(){
		if(type!='Circle'){
			console.log('Type of the figure have to be "Circle"');
			this._type = 'undefined';
			return;
		}
		else{
			this._type = type;
		}
	}
	this._setRad = function(){
		if(rad<0){
			console.log("Radius have to be more then '0'");
		}
		else{
			this._rad = rad;
		}
	}
	this._getRad = function(){
		return this._rad;
	}
	var parentFigureSq = this.square;
	this.square = function(){
		parentFigureSq.call(this);
		this._setType();
		if(this._getType()!='undefined'){
			this._setRad();
			res = pi*this._getRad()*this._getRad();
			console.log(res);
		}
	}
	var parentFigurePer = this.perimetr;
	this.perimetr = function(){
		parentFigurePer.call(this);
		this._setType();
		if(this._getType()!='undefined'){
			this._setRad();
			res = 2*pi*this._getRad();
			console.log(res);
		}
	}
}


function Square(type,a,b){
	Rectangle.apply(this, arguments);
}


function Triangle(type,a,b,c){
	var res=0;
	Figures.apply(this, arguments);
	
	this._setType = function(){
		if(type!='Triangle'){
			console.log('Type of the figure have to be "Rectangle"');
			this._type = 'undefined';
			return;
		}
		else{
			this._type = type;
		}
	};
	
	this._setA=function(){
		if(a && a>0)
			this._a=a;
		else
			console.log('The length of the first side is wrong!');
	};
	
	this._setB=function(){
		if(b && b>0)
			this._b=b;
		else
			console.log('The length of the second side is wrong!');
	};
	
	this._setC=function(){
		if(c && c>0)
			this._c=c;
		else
			console.log('The length of the third side is wrong!');
	};
	
	this._getA=function(){
		return this._a;
	};
	
	this._getB=function(){
		return this._b;
	};
	
	this._getC=function(){
		return this._c;
	};
	
	var parentFigureSq = this.square;
	
	this.square = function(){
		parentFigureSq.call(this);
		this._setType();
		if(this._getType()!='undefined'){
			this._setA();
			this._setB();
			this._setC();
			var halfPerim = (this._getA() + this._getB() + this._getC())/2;
			res = Math.sqrt(halfPerim*(halfPerim-this._getA())*(halfPerim-this._getB())*(halfPerim-this._getC()));
			console.log(res);
		}
	};
	
	var parentFigurePer = this.perimetr;
	this.perimetr = function(){
		parentFigurePer.call(this);
		this._setType();
		if(this._getType()!='undefined'){
			this._setA();
			this._setB();
			this._setC();
			res = this._getA() + this._getB() + this._getC();
			console.log(res);
		}
	}
}*/







/*function Figures(type){
	this._type=type;
	this.square=function(){
		console.log("Square of " + this._type + " is");
	}
	this.perimetr=function(){
		console.log("Perimetr of " + this._type + " is");
	}
}

function Circle(type,rad){
	Figures.apply(this, arguments);
	this._rad = rad;
	var pi = 3.1415,
	parentFigureSq = this.square;
	this.square = function(){
		parentFigureSq.call(this);
		console.log(pi*this._rad*this._rad);
	}
	parentFigurePer = this.perimetr;
	this.perimetr = function(){
		parentFigurePer.call(this);
		console.log(2*pi*this._rad);
	}
}

function Rectangle(type,a,b){
	Figures.apply(this, arguments);
	this._a=a;
	this._b=b;
	parentFigureSq = this.square;
	this.square = function(){
		parentFigureSq.call(this);
		console.log(this._a*this._b);
	}
	parentFigurePer = this.perimetr;
	this.perimetr = function(){
		parentFigurePer.call(this);
		console.log(2*this._a + 2*this._b);
	}
}

function Square(type,a,b){
	Rectangle.apply(this, arguments);
}

function Triangle(type,a,b,c){
	Figures.apply(this, arguments);
	this._a=a;
	this._b=b;
	this._c=c;
	var halfPerim = (this._a + this._b + this._c)/2;
	parentFigureSq = this.square;
	this.square = function(){
		parentFigureSq.call(this);
		console.log(Math.sqrt(halfPerim*(halfPerim-this._a)*(halfPerim-this._b)*(halfPerim-this._c)));
	}
	parentFigurePer = this.perimetr;
	this.perimetr = function(){
		parentFigurePer.call(this);
		console.log(this._a + this._b + this._c);
	}
}*/