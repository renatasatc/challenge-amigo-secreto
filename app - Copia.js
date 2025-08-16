// Cria um array vazio para armazenar os nomes dos amigos
const listaDeAmigos = [];

function adicionarAmigo() {
    // Seleciona o campo de input pelo ID 'amigo'
    const input = document.getElementById('amigo');
    // Pega o valor digitado pelo usuário e remove espaços antes e depois
    const nome = input.value.trim();

    // Se o campo estiver vazio, exibe alerta e encerra a função
    if (nome === '') {
        alert('Por favor, insira um nome válido');
        return;
    }

    // Adiciona o nome validado ao array de amigos
    listaDeAmigos.push(nome);
    // Atualiza a lista exibida no HTML
    atualizarLista();
    // Limpa o campo de entrada para permitir novo nome
    input.value = '';
}

function atualizarLista() {
    // Seleciona a lista (<ul>) de amigos pelo ID 'listaAmigos'
    const ul = document.getElementById('listaAmigos');
    // Limpa a lista para exibir apenas os itens atuais
    ul.innerHTML = '';

    // Percorre o array de amigos e cria um item <li> para cada nome
    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement('li'); // Cria o elemento <li>
        li.textContent = amigo;                 // Define o texto do nome
        ul.appendChild(li);                     // Adiciona o <li> na lista <ul>
    });
}

function sortearAmigo() {
    // Se não houver amigos na lista, exibe alerta e encerra a função
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    // Gera um índice aleatório dentro do tamanho do array
    const sorteado = listaDeAmigos[
        Math.floor(Math.random() * listaDeAmigos.length)
    ];

    // Seleciona a área onde será exibido o resultado (ID 'resultado')
    const ulResultado = document.getElementById('resultado');
    // Remove qualquer resultado anterior
    ulResultado.innerHTML = '';

    // Cria um item <li> com a mensagem do amigo sorteado
    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    // Adiciona o resultado na lista de resultados
    ulResultado.appendChild(li);
}
