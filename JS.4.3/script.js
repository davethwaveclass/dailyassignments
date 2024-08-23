const button = document.getElementById("button");
const hiddenContent = document.getElementById('hiddenContent');
const counter = document.getElementById('counter');

button.addEventListener('click', function(){
    if (hiddenContent.style.contains("display: none;")) {
        hiddenContent.style.change("display: block;")
        counter.textContext = "1";
    }
    else {
        hiddenContent.style.change("display: none;");
    }
});
