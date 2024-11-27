document.addEventListener("DOMContentLoaded", () => {
  
    const stekjesProducts = document.querySelectorAll(".stekjes-product");
  
    stekjesProducts.forEach((stekjesProduct, index) => {
  
      stekjesProduct.style.animationDelay = `${index * 0.2}s`;
  
    });
  });
  
   
   
   