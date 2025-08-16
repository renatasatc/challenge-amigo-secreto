// Array para guardar os nomes que os usuários adicionam
const listaDeAmigos = [];

// Função chamada ao clicar no botão "Adicionar"
function adicionarAmigo() {
  // Pega o campo de entrada (input) pelo ID 'amigo'
  const campoNome = document.getElementById('amigo');
  // Lê o valor inserido e remove espaços desnecessários
  const nomeDigitado = campoNome.value.trim();

  // Se o input estiver vazio, avisa e interrompe
  if (nomeDigitado === '') {
    alert('Por favor, insira um nome válido');
    return;
  }

  // Adiciona o nome digitado ao array de amigos
  listaDeAmigos.push(nomeDigitado);
  // Atualiza a exibição da lista de amigos no HTML
  atualizarListaNaTela();
  // Limpa o campo de entrada para o usuário adicionar outro nome
  campoNome.value = '';
}

// Função para exibir os nomes na tela como lista
function atualizarListaNaTela() {
  // Seleciona o elemento <ul> que mostra a lista de amigos
  const listaNaTela = document.getElementById('listaAmigos');
  // Limpa o conteúdo existente para evitar duplicações
  listaNaTela.innerHTML = '';

  // Para cada nome presente no array, cria um <li> e insere no <ul>
  listaDeAmigos.forEach((nome) => {
    const item = document.createElement('li');
    item.textContent = nome;
    listaNaTela.appendChild(item);
  });
}

// Função chamada ao clicar no botão "Sortear amigo"
function sortearAmigo() {
  // Se não houver nomes na lista, avisa e interrompe
  if (listaDeAmigos.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    return;
  }

  // Sorteia um índice aleatório a partir do tamanho da lista
  const indexAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indexAleatorio];

  // Limpa a lista visualmente ao realizar o sorteio
  document.getElementById('listaAmigos').innerHTML = '';
  // Também esvazia o array para que ninguém apareça novamente
  listaDeAmigos.length = 0;

  // Seleciona onde será exibido o resultado do sorteio
  const resultado = document.getElementById('resultado');
  // Limpa qualquer resultado anterior
  resultado.innerHTML = '';

  // Cria e exibe a mensagem com o nome sorteado
  const itemResultado = document.createElement('li');
  itemResultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultado.appendChild(itemResultado);
}
