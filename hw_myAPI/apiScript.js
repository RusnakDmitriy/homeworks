var div = function(element){
		return document.getElementById(element);
	},
	cl = function(element){
		return document.getElementsByClassName(element);
	};

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://pixabay.com/api/?key=3807574-5376af81b03f23ab49a6c1531&q=city+park&image_type=photo");
xhr.send();

xhr.onreadystatechange = function(){
	if (xhr.readyState !== 4)
    return;
	try {
        var response = JSON.parse(xhr.responseText);
        div('number').innerHTML += response.hits.length;
        for (var i = 0; i < response.hits.length; i++){
			createElement(i);
            getPicture(response, i);
		}
    }
    catch (e) {
        div.innerHTML = "Error occured. Please try again.";
    }
}

function createElement(index){
	var elem=document.createElement('div');
	div('pictures').appendChild(elem);
	div('pictures').children[index].classList = 'item';	
	cl('item')[index].innerHTML += "<div class='img'></div><div class='info'><div class='like'></div><div class='downloads'></div><div class='author'></div></div>";
}

function getPicture(response, index) {
    var currentPic = response.hits[index];
    cl('author')[index].innerHTML = "User: " + currentPic.user;
	//console.log(cl('author')[index].innerHTML);
    cl('like')[index].innerHTML = "likes: " + currentPic.likes;
    cl('downloads')[index].innerHTML = "downloads:" + currentPic.downloads;
    cl('img')[index].innerHTML = "<img src=" + currentPic.webformatURL + " alt='pictures condition'>";
}

/*xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4)
        return;

    try {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        div.innerHTML += response.city.name + ", " + response.city.country + "</br>";
        for (var i = 0; i < response.list.length; i++)
            div.innerHTML += getWeather(response, i);
    }
    catch (e) {
        div.innerHTML = "Error occured. Please try again.";
		console.log(e.message);
    }
};

function getWeather(response, index) {
    var html = "";
    var currentWeather = response.list[index];
    html += currentWeather.dt_txt + "</br>";
    html += "temperature: " + currentWeather.main.temp + "C humidity: " + currentWeather.main.humidity + "%</br>";
    html += currentWeather.weather[0].description + "</br>";
    html += "<img src='http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png' alt='weather condition'>";
    return html;
}*/