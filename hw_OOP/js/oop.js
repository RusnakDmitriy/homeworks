function Figures(type){
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
}


var fig1 = new Circle('circle',4);
console.log(fig1)
fig1.square();
fig1.perimetr();
var fig2 = new Rectangle('Rectangle',15,15);
fig2.perimetr();
var fig3 = new Triangle('Triangle',20,10,25);
fig3.perimetr();
fig3.square();
var fig4 = new Square('Square',5,5);
fig4.perimetr();
fig4.square();

/*function Figures(a,b,c,rad){
	this._a=a;
	this._b=b;
	this._c=c;
	this._rad=rad;
	this._pi = 3.1415;
	this.square=function(){
		if(this._rad)
			console.log(this._pi*this._rad*this._rad);
		else if(this._a && this._b && !this._c)
			console.log(this._a*this._b);
		else
			console.log(this._a*this._a); 
	}
	this.perimetr=function(){
		if(this._rad)
			console.log(2*this._pi*this._rad);
		else if(this._a && this._b && !this._c)
			console.log(2*this._a + 2*this._b);
		else if(this._c)
			console.log(this._a + this._b + this._c);
		else
			console.log(4*this._a);
	}
}

function Circle(rad){
	Figures.apply(this, arguments);
}

function Rectangle(a,b){
	Figures.apply(this, arguments);
}

function Triangle(a,b,c){
	Figures.apply(this, arguments);
	var halfPerim = (this._a + this._b + this._c)/2;
	this.square=function(){
		return Math.sqrt(halfPerim*(halfPerim-this._a)*(halfPerim-this._b)*(halfPerim-this._c)); 
	}
}*/