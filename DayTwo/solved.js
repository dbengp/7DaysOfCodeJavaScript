document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const language = document.getElementById('language').value;

    const message = `Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`;
    document.getElementById('message').textContent = message;

    document.getElementById('userForm').classList.add('hidden');
    document.getElementById('output').classList.remove('hidden');
    document.getElementById('feedback').classList.remove('hidden');
    document.getElementById('languageOutput').textContent = language;
});

document.getElementById('submitFeedback').addEventListener('click', function() {
    const feedback = document.getElementById('feedbackInput').value;
    let feedbackMessage = '';

    if (feedback == 1) {
        feedbackMessage = 'Muito bom! Continue estudando e você terá muito sucesso.';
    } else if (feedback == 2) {
        feedbackMessage = 'Ahh que pena... Já tentou aprender outras linguagens?';
    } else {
        feedbackMessage = 'Resposta inválida. Por favor, responda com 1 para SIM ou 2 para NÃO.';
    }

    document.getElementById('feedbackMessage').textContent = feedbackMessage;
});
