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
  html.setAttribute(`data-contexto`, `foco`);
  imagem.setAttribute(`src`, `/imagens/foco.png`);
});

curtoBt.addEventListener(`click`, () => {
  html.setAttribute(`data-contexto`, `descanso-curto`);
  imagem.setAttribute(`src`, `/imagens/descanso-curto.png`);
});

longoBt.addEventListener(`click`, () => {
  html.setAttribute(`data-contexto`, `descanso-longo`);
  imagem.setAttribute(`src`, `/imagens/descanso-longo.png`);
});
