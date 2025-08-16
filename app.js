// Guarda os nomes dos participantes/
const listaDeAmigos = [];

/**
 * Função chamada ao clicar no botão "Adicionar"
 */
function adicionarAmigo() {
 limparResultadoSorteio();  // Limpa mensagem de sorteio anterior ao adicionar novo nome
  const campoNome = document.getElementById('amigo');
  const nomeDigitado = campoNome.value.trim();

  // Verifica se o campo está vazio
  if (nomeDigitado === '') {
    alert('Por favor, insira um nome válido');
    return;
  }

  // Verifica se o nome já foi adicionado (evita duplicatas)
  if (listaDeAmigos.includes(nomeDigitado)) {  // Correção: estava "participantes", agora é "listaDeAmigos"
    alert('Esse nome já foi adicionado');
    return;
  }

  // Adiciona o nome ao array
  listaDeAmigos.push(nomeDigitado);

  // Atualiza a visualização da lista
  atualizarListaNaTela();

  // Limpa o campo de entrada
  campoNome.value = '';

  // Remove qualquer resultado anterior de sorteio
  limparResultadoSorteio();
}

/**
 * Atualiza a lista de nomes no HTML
 */
function atualizarListaNaTela() {
  const listaNaTela = document.getElementById('listaAmigos');
  listaNaTela.innerHTML = ''; // Limpa conteúdo antigo

  listaDeAmigos.forEach((nome) => {
    const item = document.createElement('li');
    item.textContent = nome;
    listaNaTela.appendChild(item);
  });
}

/**
 * Limpa a mensagem de resultado do sorteio
 */
function limparResultadoSorteio() {
  document.getElementById('resultado').innerHTML = '';
}

/**
 * Executa o sorteio quando clicado no botão "Sortear amigo"
 */
function sortearAmigo() {
    limparResultadoSorteio(); // Limpar resultados anteriores
  if (listaDeAmigos.length < 3) {
    alert('É necessário ter pelo menos 3 participantes para fazer o sorteio');
    return;
  }

  let meuNome = prompt('Qual é o seu nome?');
  if (!meuNome) {
    alert('Por favor, insira seu nome para continuar');
    return;
  }
  meuNome = meuNome.trim();
  if (meuNome === '') {
    alert('Por favor, insira seu nome para continuar');
    return;
  }
  if (!listaDeAmigos.includes(meuNome)) {
    alert('Seu nome precisa estar na lista antes de sortear');
    return;
  }

  const participantesElegiveis = listaDeAmigos.filter(nome => nome !== meuNome);
  const indexAleatorio = Math.floor(Math.random() * participantesElegiveis.length);
  const amigoSorteado = participantesElegiveis[indexAleatorio];

  document.getElementById('listaAmigos').innerHTML = '';
  listaDeAmigos.length = 0;

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const itemResultado = document.createElement('li');
  itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultado.appendChild(itemResultado);
}
=======
// Guarda os nomes dos participantes
const listaDeAmigos = [];

/**
 * Função chamada ao clicar no botão "Adicionar"
 */
function adicionarAmigo() {
 limparResultadoSorteio();  // Limpa mensagem de sorteio anterior ao adicionar novo nome
  const campoNome = document.getElementById('amigo');
  const nomeDigitado = campoNome.value.trim();

  // Verifica se o campo está vazio
  if (nomeDigitado === '') {
    alert('Por favor, insira um nome válido');
    return;
  }

  // Verifica se o nome já foi adicionado (evita duplicatas)
  if (listaDeAmigos.includes(nomeDigitado)) {  // Correção: estava "participantes", agora é "listaDeAmigos"
    alert('Esse nome já foi adicionado');
    return;
  }

  // Adiciona o nome ao array
  listaDeAmigos.push(nomeDigitado);

  // Atualiza a visualização da lista
  atualizarListaNaTela();

  // Limpa o campo de entrada
  campoNome.value = '';

  // Remove qualquer resultado anterior de sorteio
  limparResultadoSorteio();
}

/**
 * Atualiza a lista de nomes no HTML
 */
function atualizarListaNaTela() {
  const listaNaTela = document.getElementById('listaAmigos');
  listaNaTela.innerHTML = ''; // Limpa conteúdo antigo

  listaDeAmigos.forEach((nome) => {
    const item = document.createElement('li');
    item.textContent = nome;
    listaNaTela.appendChild(item);
  });
}

/**
 * Limpa a mensagem de resultado do sorteio
 */
function limparResultadoSorteio() {
  document.getElementById('resultado').innerHTML = '';
}

/**
 * Executa o sorteio quando clicado no botão "Sortear amigo"
 */
function sortearAmigo() {
    limparResultadoSorteio(); // Limpar resultados anteriores
  if (listaDeAmigos.length < 3) {
    alert('É necessário ter pelo menos 3 participantes para fazer o sorteio');
    return;
  }

  let meuNome = prompt('Qual é o seu nome?');
  if (!meuNome) {
    alert('Por favor, insira seu nome para continuar');
    return;
  }
  meuNome = meuNome.trim();
  if (meuNome === '') {
    alert('Por favor, insira seu nome para continuar');
    return;
  }
  if (!listaDeAmigos.includes(meuNome)) {
    alert('Seu nome precisa estar na lista antes de sortear');
    return;
  }

  const participantesElegiveis = listaDeAmigos.filter(nome => nome !== meuNome);
  const indexAleatorio = Math.floor(Math.random() * participantesElegiveis.length);
  const amigoSorteado = participantesElegiveis[indexAleatorio];

  document.getElementById('listaAmigos').innerHTML = '';
  listaDeAmigos.length = 0;

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const itemResultado = document.createElement('li');
  itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultado.appendChild(itemResultado);
}

