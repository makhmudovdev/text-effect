const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Humoyun";
  }, 0);
  setTimeout(() => {
    text.textContent = "Makhmudov";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Frontend";
  }, 8000); 
  setTimeout(() => {
    text.textContent = "developer";
  }, 12000); 
};

textLoad();
setInterval(textLoad, 16000);