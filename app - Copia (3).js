// Lista que vai armazenar os nomes dos participantes
const participantes = [];

// Função chamada ao clicar em "Adicionar"
function adicionarAmigo() {
  const campoNome = document.getElementById('amigo');
  const nomeDigitado = campoNome.value.trim();

  // Verifica campo em branco
  if (nomeDigitado === '') {
    alert('Por favor, insira um nome válido');
    return;
  }

  // Verifica se já foi adicionado
  if (participantes.includes(nomeDigitado)) {
    alert('Esse nome já foi adicionado');
    return;
  }

  participantes.push(nomeDigitado);
  atualizarListaNaTela();
  campoNome.value = '';
}

// Atualiza a lista visível com os nomes adicionados
function atualizarListaNaTela() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  participantes.forEach((nome) => {
    const item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
  });
}

// Função chamada ao clicar em "Sortear amigo"
function sortearAmigo() {
  const meuNome = prompt('Qual é o seu nome?').trim();

  if (meuNome === '') {
    alert('Por favor, insira seu nome para continuar');
    return;
  }

  if (!participantes.includes(meuNome)) {
    alert('Seu nome precisa estar na lista antes de sortear');
    return;
  }

  // Verifica se tem pelo menos 3 participantes
  if (participantes.length < 3) {
    alert('É necessário ter pelo menos 3 participantes para fazer o sorteio');
    return;
  }

  // Cria uma lista excluindo seu próprio nome
  const listaElegivel = participantes.filter((nome) => nome !== meuNome);
  const indiceSorteado = Math.floor(Math.random() * listaElegivel.length);
  const amigoSorteado = listaElegivel[indiceSorteado];

  // Limpa visualmente os nomes e o array para evitar novo sorteio imediato
  document.getElementById('listaAmigos').innerHTML = '';
  participantes.length = 0;

  // Mostra o resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const itemResultado = document.createElement('li');
  itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultado.appendChild(itemResultado);
}
