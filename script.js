const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Kur klikon "Regjistrohu", shtohet klasa që sjell animacionin
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

// Kur klikon "Identifikohu", largohet klasa për të kthyer prapa animacionin
signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
document.getElementById("bt1").addEventListener("click", function() {
  this.style.display = "none";
});