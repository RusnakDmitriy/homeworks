var form = document.forms.myForm;
var error = form.getElementsByClassName('error');

form.onsubmit = function(e) {
    e.preventDefault();
    error[0].innerHTML = "";
    
    error[0].innerHTML += validate(form.elements.name, 2, 20);
    error[0].innerHTML += validate(form.elements.surname, 2, 20);
    error[0].innerHTML += validate(form.elements.password, 4, 10);
    error[0].innerHTML += validate(form.elements.address, false, 200);
    error[0].innerHTML += validatePhone(form.elements.phone, /*/\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}/*/ /^\+38\(?0\d{2}\)?\d{3}-?\d{2}-?\d{2}$/);
	
    
    if (error[0].innerHTML !== "") {
        return;
    }
    
    this.submit();
};


function validate(element, minlength, maxlength) {
	element.classList.remove("errorLight");
    if(minlength !== false && element.value.length < minlength) {
        element.classList.toggle("errorLight");
		return "Your " + element.name + " must contain at least " + minlength + " characters</br>";
    }
    
    if(maxlength !== false && element.value.length > maxlength) {
        element.classList.toggle("errorLight");
		return "Your " + element.name + " must contain maximum " + maxlength + " characters</br>";
    }
    
    return "";
}

function validatePhone(element, regexp){
	element.classList.remove("errorLight");
	if(!regexp.exec(element.value)){
		element.classList.toggle("errorLight");
		return "Your " + element.name + " must be only like '+38(0##)###-##-##' or '+380#########'patterns</br>";
	}
	return "";
}


var checkboxes = form.elements.languages;
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('input', sayEvent);
    checkboxes[i].addEventListener('change', sayEvent);
}

function sayEvent(e) {
    console.log(e.target);
    console.log("Current element " + e.currentTarget.tagName + " event target " +e.target.tagName + " event: " + e.type);
    console.log(e.target.value);
    console.log(e.target.checked);
}