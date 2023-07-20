  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Ready to download");

    const edit_title = document.getElementById("edit_form_title");
    const edit_content = document.getElementById("edit_form_content")
    const edit_submit = document.getElementById("edit_submit");

    edit_title.style.display = 'none';
    edit_content.style.display = 'none';
    edit_submit.style.display = 'none';

    document.getElementById("dl_button").addEventListener("click", () => {
      const archive = this.document.getElementById("full_post");
      console.log(archive);
      console.log(window);
      var opt={
        margin:1,
        filename: 'download.pdf',
        image: { type: 'jpeg', quality:0.98 },
        html2pdf: { scale: 2 },
        jsPDF: { unit: 'in', foromat: 'letter', orientation: 'portrait' }
      };

      html2pdf().from(archive).set(opt).save();
    })
    const edit_button = document.getElementById("edit_post_button");
    edit_button.addEventListener("click", () => {
      console.log("Edit button was clicked");

      const title = document.getElementById("title");
      const content = document.getElementById("content");
      const dl_button = document.getElementById("dl_button");

      if(edit_title.style.display == 'none' || 
        edit_content.style.display == 'none' || 
        edit_submit.style.display == 'none'){
          title.style.display = 'none';
          content.style.display = 'none';
          dl_button.style.display='none';
           
          edit_title.style.display = 'block';
          edit_content.style.display = 'block';
          edit_submit.style.display = 'block';
          edit_button.innerHTML = "Cancel Edit"; 
      }else{
        title.style.display = 'block';
        content.style.display = 'block';
        dl_button.style.display = 'block';

        edit_title.style.display = 'none';
        edit_content.style.display = 'none';
        edit_submit.style.display = 'none';
        edit_button.innerHTML = "Edit Post"
      }
    })
  })
