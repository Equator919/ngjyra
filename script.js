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
const button = document.getElementById('colorButton');

const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c', '#e67e22'];
let colorIndex = 0;

button.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  button.style.backgroundColor = colors[colorIndex];
});