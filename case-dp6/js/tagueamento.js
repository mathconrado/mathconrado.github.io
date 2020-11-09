// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
if(document.location.pathname.indexOf('/')){
  console.log(location.pathname)
  // ga('send', {
  //   hitType: 'pageview',
  //   page: location.pathname
  // })
}

if(document.location.pathname.indexOf('/analise')){
  // ga('send', {
  //   hitType: 'pageview',
  //   page: location.pathname
  // })
  console.log(location.pathname)
}

if (document.location.pathname.indexOf(/\b(sobre)/)) {
  console.log(location.pathname)
  // ga('send', {
  //   hitType: 'pageview',
  //   page: location.pathname
  // })
  function changeInput(e){
    console.log('preenchi este campo:' + e.target.id)
    ga('send',{hitType: 'event',eventCategory: 'contato',eventAction: e.target.id ,eventLabel: 'preencheu'});
  }

  var nome = document.getElementById("nome")
  nome.addEventListener('change',changeInput)

  var email = document.getElementById("email")
  email.addEventListener('change',changeInput)

  var telefone = document.getElementById("telefone")
  telefone.addEventListener('change',changeInput)

  var aceito = document.getElementById("aceito")
  aceito.addEventListener('change',changeInput)

}


