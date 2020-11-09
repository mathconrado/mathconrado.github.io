// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

if (document.location.pathname.indexOf(/\b(sobre)/)) {
  function changeInput(e){
    ga('send',{
      hitType: 'event',
      eventCategory: 'contato',
      eventAction: e.target.id ,
      eventLabel: 'preencheu'
    });
  }

  var nome = document.getElementById("nome")
  if(nome){
    nome.addEventListener('change',changeInput)
  }

  var email = document.getElementById("email")
  if(email){
    email.addEventListener('change',changeInput)
  }

  var telefone = document.getElementById("telefone")
  if(telefone){
    telefone.addEventListener('change',changeInput)
  }

  var aceito = document.getElementById("aceito")
  if(aceito){
    aceito.addEventListener('change',changeInput)
  }

}


