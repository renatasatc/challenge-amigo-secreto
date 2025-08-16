// Guarda os nomes dos participantes
const listaDeAmigos = [];

/**
 * Função chamada ao clicar no botão "Adicionar"
 */
function adicionarAmigo() {
  limparResultadoSorteio(); // Limpa mensagem de sorteio anterior

  const campoNome = document.getElementById('amigo');
  const nomeDigitado = campoNome.value.trim();

  // Verifica se o campo está vazio
  if (nomeDigitado === '') {
    alert('Por favor, insira um nome válido');
    return;
  }

  // 🔁 NOVO: Normaliza o nome para comparação (sem diferenciar maiúsculas/minúsculas)
  const nomeNormalizado = nomeDigitado.toLowerCase();
  const nomesNormalizados = listaDeAmigos.map(nome => nome.toLowerCase());

  // Verifica se o nome já foi adicionado (evita duplicatas)
  if (nomesNormalizados.includes(nomeNormalizado)) {
    alert('Esse nome já foi adicionado');
    return;
  }

  // Adiciona o nome original (com capitalização) ao array
  listaDeAmigos.push(nomeDigitado);

  // Atualiza a visualização da lista
  atualizarListaNaTela();

  // Limpa o campo de entrada
  campoNome.value = '';

  // Limpa resultado anterior
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
  limparResultadoSorteio();

  if (listaDeAmigos.length < 3) {
    alert('É necessário ter pelo menos 3 participantes para fazer o sorteio');
    return;
  }

  let meuNome = prompt('Qual é o seu nome?');
  if (!meuNome) {
    alert('Por favor, insira seu nome para continuar');
    return;
  }

  meuNome = meuNome.trim().toLowerCase(); // normaliza o nome do usuário

  // Verifica se o nome está na lista (sem diferenciar maiúsculas/minúsculas)
  const index = listaDeAmigos.findIndex(n => n.toLowerCase() === meuNome);
  if (index === -1) {
    alert('Seu nome precisa estar na lista antes de sortear');
    return;
  }

  // Gera lista de participantes elegíveis (excluindo quem sorteia, sem diferenciar maiúsculas/minúsculas)
  const participantesElegiveis = listaDeAmigos.filter(
    nome => nome.toLowerCase() !== meuNome
  );

  const indexAleatorio = Math.floor(Math.random() * participantesElegiveis.length);
  const amigoSorteado = participantesElegiveis[indexAleatorio];

  // Limpa lista visual e array
  document.getElementById('listaAmigos').innerHTML = '';
  listaDeAmigos.length = 0;

  // Mostra resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const itemResultado = document.createElement('li');
  itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultado.appendChild(itemResultado);
}
