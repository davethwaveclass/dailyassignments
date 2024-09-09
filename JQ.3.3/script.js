$(document).ready(function() {

    $('#info').submit(function(e) {
      e.preventDefault();
      var firstName = $('#firstName').val();
      var lastName = $('#lastName').val();
      var phone = $('#phone').val();
   
if (firstName.length < 1) {
    $ ('#output').append('<p>A first name is required</p>');
}
if (lastName.length < 1) {
    $ ('#output').append('<p>A last name is required</p>');
}
if (phone.length < 1) {
    $ ('#output').append('<p>A phone number is required</p>');
}})});