// WhatsApp Form Integration
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;
  
    const phoneNumber = "233536622042"; // replace with your WhatsApp number
  
    const whatsappMessage = `Hello APL Creative Hub! 👋
  My name is ${name}.
  Email: ${email}
  Message: ${message}`;
  
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  });
  
  // Typing Effect Text
  const textElement = document.querySelector(".typing-text");
  const text = "Your Digital World, Our Creative Touch 🌐✨";
  let index = 0;
  
  function typeEffect() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        textElement.textContent = "";
        index = 0;
        typeEffect();
      }, 3000);
    }
  }
  typeEffect();
  
  // Fade-in on scroll
  const fadeElements = document.querySelectorAll(".fade-in");
  window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  });