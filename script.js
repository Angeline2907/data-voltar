// Seleciona todos os blocos de passos (.passo) da página
const todosOsPassos = document.querySelectorAll('.passo');

/**
 * Função responsável por esconder a tela atual e mostrar a tela correta
 * @param {string} idDoDestino - O número/identificador do passo a ser exibido
 */
function alternarTela(idDoDestino) {
    // Remove a classe 'ativo' de todos os passos para ocultá-los
    todosOsPassos.forEach(passo => {
        passo.classList.remove('ativo');
    });

    // Encontra o passo específico que queremos mostrar (ex: passo-1, passo-2)
    const passoAlvo = document.getElementById(`passo-${idDoDestino}`);
    
    // Se o passo existir no HTML, adiciona a classe 'ativo' para mostrá-lo
    if (passoAlvo) {
        passoAlvo.classList.add('ativo');
    } else {
        console.error(`Erro: O passo- ${idDoDestino} não foi encontrado no HTML.`);
    }
}

// ==========================================
// LÓGICA 1: BOTÕES DE AVANÇAR (.btn-proximo)
// ==========================================
const botoesProximo = document.querySelectorAll('.btn-proximo');

botoesProximo.forEach(botao => {
    botao.addEventListener('click', function() {
        // Pega o valor armazenado no atributo 'data-proximo'
        const proximoId = this.getAttribute('data-proximo');
        alternarTela(proximoId);
    });
});

// ==========================================
// LÓGICA 2: BOTÕES DE VOLTAR (.btn-voltar) 
// (Foco principal do Desafio da imagem!)
// ==========================================
const botoesVoltar = document.querySelectorAll('.btn-voltar');

botoesVoltar.forEach(botao => {
    botao.addEventListener('click', function() {
        // Pega o valor armazenado no NOVO atributo 'data-voltar'
        const voltarId = this.getAttribute('data-voltar');
        alternarTela(voltarId);
    });
});
