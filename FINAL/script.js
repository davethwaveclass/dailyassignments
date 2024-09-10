function myFunction(){
  let data = "";  let name = document.getElementById("userName").value
  let comment = document.getElementById("userComment").value
 
  let = del = `<button id='deleteMe'>del</button>`

  let = edit = `<button id='editMe'>edit</button>`

  data = name+": "+comment + " " + del + edit
 

 $ ("#data").append(`<p id='welp' class='item'> ${data}  </p>` )
 }


  $(document).on('click', '#deleteMe', function(){
    $(this).closest('#welp').remove();
  });

  $(document).on('click', '#editMe', function(){
    $(this).closest('p').attr('contenteditable','true')
  });
