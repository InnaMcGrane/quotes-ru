const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [ "«Секрет успеха сделать первый шаг», - Марк Твен",
" «Не меняя направления, ты остаешься на том же месте». Лао-цзы",
" «Пренебрегая подготовкой, вы готовитесь к поражению». Бенджамин Франклин",
"«Сильная женщина улыбается утром, как будто не плакала прошлой ночью». Гарриет Морган",
" «Нет косметики для красоты лучше счастья». Мария Митчел",
" «Только мои ожидания достойны того, чтобы оправдывать их». Мишель Обама",
" «На пути к успеху вас ждут неудачи». Микки Руни",
"«Когда вас приперли к стенке, просто сломайте ее к черту», - Харви Спект"]

button.addEventListener("click",function(){

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})