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
  display_post();
})
function display_post() {
  //document.querySelector('#show-posts').innerHTML = '';
  fetch('/get_posts')
  .then(response => response.json())
  .then(posts => {
    console.log(posts);
  posts.forEach((post) => {
      console.log();
      var profile_link = (post.post_id);
      var username = document.createTextNode(post.profile);
      var title = document.createTextNode(post.title);
      var content = document.createTextNode(post.content);
      var timestamp = document.createTextNode(post.timestamp);

      const a_post = document.createElement('div');
      const view_post = document.createElement('a');
      const post_title = document.createElement('h2');
      const name = document.createElement('h3');
      const date_time = document.createElement('p');
      const post_content = document.createElement('p');

      a_post.setAttribute('id', 'a_post');
      view_post.setAttribute('id', 'view_post');
      post_title.setAttribute('id', 'title');
      name.setAttribute('id', 'name');
      date_time.setAttribute('id', 'date_time');
      post_content.setAttribute('id', 'post_content');
      
      name.appendChild(username);
      view_post.appendChild(a_post);
      date_time.appendChild(timestamp);
      post_content.appendChild(content);
      view_post.href = profile_link;

      a_post.appendChild(post_title);
      a_post.appendChild(name);
      a_post.appendChild(date_time);
      a_post.appendChild(post_content);

      post_title.appendChild(title);
      document.querySelector('#show-posts').append(view_post);
    })
  })
}
