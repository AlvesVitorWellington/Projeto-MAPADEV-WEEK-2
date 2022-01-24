/*

 quando clicar na seta pra 
 avança se esconde todas as imagem e mostra a proxima

 a imagem atual começa em zero pq é a primeira imagem
 assim que clicado no avançar eu preciso adicionar mais 1 ao contador de imagem
 pra saber que agora irei mostra a segunda imagem

 esconder todas as imagens
    pegar todas as imagens usando o DOM e remover a clsse mostrar

    mostra a proxima imagem
    peaga todas as imagens descrobri qual é a proxima e colocar a clssse mostrar nela

*/

const imagens = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagem() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}
function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}
setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagens.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }
    imagemAtual++;

    esconderImagem();
    mostrarImagem();

});


setaVoltar.addEventListener('click', function () {


    if (imagemAtual === 0) {
        return;
    }
    imagemAtual--;
    esconderImagem();
    mostrarImagem();

})





