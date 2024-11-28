
// de addEventListener zorgt ervoor dat de functie word uitgevoerd voor een interactie
// DOMContentLoaded zorgt ervoor de interactie werkt bij het laden van de web pagina
document.addEventListener("DOMContentLoaded", () => {
  
  // Een var die alle elementen pakt die deze class heeft
  // querySelectorAll zorgt ervoor dat alle articelen met dezelfde class erbij betrekt
    const stekjesProducts = document.querySelectorAll(".stekjes-product");
  
    // Hierdoor word het op de juiste volgorde gezet en niet wikllekeurig
    stekjesProducts.forEach((stekjesProduct, index) => {
  
      // Elke articel krijgt na elkaar de animatie
      stekjesProduct.style.animationDelay = `${index * 0.2}s`;
  
    });
  });
  
   
   
   