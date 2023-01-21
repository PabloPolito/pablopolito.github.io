const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('div header button')


button.addEventListener('click', add) //Quando clicar no botão, execute a função ADD
form.addEventListener('change', save) //Quando houver qualquer mudança no formulário, execute a função SAVE

function add() {
  //const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //Crie uma nova data com o objeto Date(), transforma no formato brasileiro, pegando apenas dia e mês
  const today = '08/01'
  const dayExist = nlwSetup.dayExists(today) //Pega na minha biblioteca NLWSETUP e usa a função DAYEXISTS para verificar se o dia já existe na aplicação

  if (dayExist) {
    alert('Dia já incluso ⛔')
    return
  } else {
    nlwSetup.addDay(today)
    alert("Dia adicionado com sucesso ✅")
  }
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //Ao haver alguma alteração (CHANGE) no formulário, pega o meu LOCALSTORAGE, seta qual item eu vou guardar e (,) qual informação quero colocar dentro dele, essa informação deve ser passada em forma de texto pela lib JSON sendo transformada em string, e oque eu quero passar? quero passar o data do objeton nlwSetup
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} //Pega as informações que guardou dentro do local storage do item NLWSETUP@HABITS e transforma em objeto denovo pelo JSON e coloca dentro da variavel data

nlwSetup.setData(data)
nlwSetup.load()

/*
const data = {
  run: [
    "01-01",
    "02-02",
    "03-03",
    "03-03",
    "03-04",
    "03-05",
    "03-06",
    "03-07",
    "03-08",
    "03-09",
    "03-10",
    "03-11",
    "03-12",
  ],
  water: ["03-01"],
  journal: ["03-02"],
}
*/