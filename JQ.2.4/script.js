var button = document.getElementById('clickMe');

button.addEventListener('click', function(){
    $( "#contentContainer" ).toggleClass( 'darkMode' );
})