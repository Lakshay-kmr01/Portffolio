// JavaScript for handling the resume download
document.getElementById("downloadResumeButton").addEventListener("click", function() {
    // Assuming the resume is in PDF format and named "resume.pdf"
    window.location.href = "path/to/your/resume.pdf";
});

document.getElementById("embedPdfButton").addEventListener("click", function() {
    let pdfUrl = "path/to/your/resume.pdf";
    let iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    iframe.width = "100%";
    iframe.height = "600px";
    document.getElementById("pdfContainer").appendChild(iframe);filterButtons.forEach(button => {
      const itemId = button.id.split('-').pop();
      if (itemId === status) {
        button.classList.add('active');
      } else if (itemId !== 'all') {
        // code here
        button.classList.remove('active');
        button.classList.add('inactive');
        button.classList.remove('active');
        button.classList.add('inactive');
      }
    })
});