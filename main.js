// exercicios

// 1

// html

// <h1 id="texto">Parágrafo</h1>
// <button id="botao">Mudar texto</button>

// js

// let botao = document.getElementById("botao");
// let texto = document.getElementById("texto");

// botao.addEventListener('click', ()=>{
//     texto.innerHTML = "Texto alterado com Javascript"
// });

// -------------------------------------------------------------------------

// 2

// HTML

// <button id="vermelho">Vermelho</button>
// <button id="verde">Verde</button>
// <button id="azul">Azul</button>

//  JS
// let botaoVM = document.getElementById('vermelho');
// let botaoVD = document.getElementById('verde');
// let botaoAZ = document.getElementById('azul');

// botaoVM.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "red";
// });

// botaoVD.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "green";
// });

// botaoAZ.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "blue";
// });

// -------------------------------------------------------------------------

// 3

// HTML

    // <button id="btn-1">img 1</button>
    // <button id="btn-2">img 2</button>

    // <img
    //   id="img-1"
    //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UKw7RvpWVOywWdNFUzwLHH2fPZiEB-tg7g&s"
    //   alt=""
    // />

    // <img
    //   id="img-2"
    //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQza--_S4Bd4RIRHdI9JMNYfxJ26cnx8eyQ&s"
    //   alt=""
    // />

//  JS

// let botao1 = document.getElementById("btn-1");
// let botao2 = document.getElementById("btn-2");

// let img1 = document.getElementById("img-1");
// let img2 = document.getElementById("img-2");

// botao1.addEventListener("click", () => {
//   img2.style.display = "block";
//   img1.style.display = "none";
// });

// botao2.addEventListener("click", () => {
//   img2.style.display = "none";
//   img1.style.display = "block";
// });

// -------------------------------------------------------------------------

// 4

// let btn = document.getElementById('botao');
// let p1 = document.getElementById('paragrafo');

// btn.addEventListener('click', ()=>{
//     p1.classList.toggle('hidden');
// });

// -------------------------------------------------------------------------


// 5

// let texto = document.getElementById('texto');

// let contagem = 0;

// let mais = document.getElementById('mais');
// let menos = document.getElementById('menos');

// mais.addEventListener('click', ()=>{
//     contagem++;
//     texto.innerHTML = (contagem);
// });

// menos.addEventListener('click', ()=>{
//     contagem--;
//     texto.innerHTML = (contagem);
// });

// --------------------------------------------------------------------------

// 6

let campo = document.getElementById('campo');
let botao = document.getElementById('botao');

botao.addEventListener('click', ()=>{

    let ul = document.getElementById('ul');

    let li = document.createElement('li');

    li = document.createTextNode(campo.value);

    ul.appendChild = (li);

    ul.textContent = (li);

    console.log(li)


});




