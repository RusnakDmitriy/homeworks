var elId = function(element){
	return document.getElementById(element);
},
elClass = function(element){
	return document.getElementsByClassName(element);
};

function clickMobMenu(){
	var position=0;
	elClass('icon-menu')[0].addEventListener('click', function(){
		position++;
		if(position%2!=0){
			elClass('hiddenMenu')[0].style.display = 'block';
		}
		else{
			elClass('hiddenMenu')[0].style.display = 'none';
		}
	});
}
clickMobMenu();