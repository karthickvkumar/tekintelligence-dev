function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
            }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
        }
    }
}

includeHTML();
window.addEventListener('load', function() {
    setTimeout(function(){
        var forms = document.getElementsByClassName('contact-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else{
                    $(".contact-container").fadeToggle();
                    $("#btn_submit").removeClass("chat-opened");
                    $("#btn_submit .btn-svg-wrapper.opened").removeClass("active");
		            $("#btn_submit .btn-svg-wrapper.closed").addClass("active");
                    event.preventDefault();
                    $(".success-show").fadeToggle();
                    setTimeout(function(){
                        form.submit();	
                    }, 3000);
                }
                form.classList.add('was-validated');
            },false);
        });
    },1000);
});