document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const data = new FormData(event.target);
        const formJSON = Object.fromEntries(data.entries());
        formJSON.snacks = data.getAll('snacks');
  
        console.log(formJSON);
      });
    } else {
      console.error('Form not found.');
    }
  });
  