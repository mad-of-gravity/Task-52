import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  document.body.addEventListener('click', () => {
    let article = null;

    //A for loop that initializes the article element and adds it to the body
    for (let i = 0; i < 5; i++) {
      article = document.createElement("article");
      article.classList.add("message");
      article.textContent = `Message ${i}`;
      document.body.appendChild(article);
     }
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
