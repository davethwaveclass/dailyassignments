var counter = 0
$ ('#hover').hover(function(){
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
});