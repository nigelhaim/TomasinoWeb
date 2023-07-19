  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Ready to download");
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
  })
