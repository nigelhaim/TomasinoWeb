document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Working");

var form =  document.getElementById('create_post');
form.style.display = 'none';
  create_post_button.addEventListener('click', function(){
    if(form.style.display == 'none'){
      form.style.display = 'block';
      document.getElementById("create_post_button").innerHTML = "Close";
      console.log("Active create post");
    }
    else{
      form.style.display = 'none';
      document.getElementById("create_post_button").innerHTML = "Create Post"
      console.log("Deactivate create post");
    }
  })
})
