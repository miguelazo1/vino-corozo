document.addEventListener('DOMContentLoaded', function() {
    // Cargar el header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        const headerTemplate = document.createElement('template');
        headerTemplate.innerHTML = data;
        document.body.prepend(headerTemplate.content.cloneNode(true));
      });
  
    // Cargar el footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        const footerTemplate = document.createElement('template');
        footerTemplate.innerHTML = data;
        document.body.appendChild(footerTemplate.content.cloneNode(true));
      });
  });