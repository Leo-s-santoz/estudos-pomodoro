const html = document.querySelector(`html`);
//botões
const iniciarBt = document.querySelector(".app__card-primary-button");
const focoBt = document.querySelector(`.app__card-button--foco`);
const curtoBt = document.querySelector(`.app__card-button--curto`);
const longoBt = document.querySelector(`.app__card-button--longo`);
//elementos da página
const timer = document.querySelector(`#timer`);
const imagem = document.querySelector(`.app__image`);
const titulo = document.querySelector(`.app__title`);
//variáveis de tempo
const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;

focoBt.addEventListener(`click`, () => {
  alterarContexto(`foco`);
});

curtoBt.addEventListener(`click`, () => {
  alterarContexto(`descanso-curto`);
});

longoBt.addEventListener(`click`, () => {
  alterarContexto(`descanso-longo`);
});

function alterarContexto(contexto) {
  html.setAttribute(`data-contexto`, contexto);
  imagem.setAttribute(`src`, `/imagens/${contexto}.png`);
  switch (contexto) {
    case `foco`:
      titulo.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;

    case `descanso-curto`:
      titulo.innerHTML = `Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma palsa curta!</strong>`;
      break;

    case `descanso-longo`:
      titulo.innerHTML = `Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma palsa longa.</strong>`;
      break;

    default:
      break;
  }
}
