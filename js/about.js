document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image");

  setTimeout(() => {
    title.classList.add("show");
  }, 200);

  setTimeout(() => {
    aboutText.classList.add("show");
  }, 600);

  setTimeout(() => {
    aboutImage.classList.add("show");
  }, 500);
});

const contactNumber = document.getElementById("contact-number");
  if (contactNumber) {
    const originalText = contactNumber.textContent.trim(); 

    contactNumber.addEventListener("click", function() {
      
      const tempInput = document.createElement("input");
      tempInput.value = originalText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      
      contactNumber.textContent = "📞 Copied!";
      setTimeout(() => {
        contactNumber.textContent = originalText; 
      }, 1200);
    });
  }

  const email = document.getElementById("email");
  if (email) {
    const originalText = email.textContent.trim(); 

    email.addEventListener("click", function() {
      
      const tempInput = document.createElement("input");
      tempInput.value = originalText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      
      email.textContent = "📧 Copied!";
      setTimeout(() => {
        email.textContent = originalText; 
      }, 1200);
    });
  }
