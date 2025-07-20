//создаем переменную, в которую положим кнопку Сменить тему
let button1 = document.getElementById("theme");
let body = document.body; //получаем доступ к body для изменения его стилей
button1.addEventListener("click",() => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});
