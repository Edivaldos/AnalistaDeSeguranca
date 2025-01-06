// script.js - Este arquivo pode ser usado para adicionar interatividade ao currículo

// Exemplo: Adicionar um botão para imprimir o currículo
const printButton = document.createElement('button');
printButton.textContent = '<b>\Imprimir Currículo\</b>';
printButton.addEventListener('click', () => {
    window.print();
});

document.body.appendChild(printButton);

// Outros exemplos de interatividade podem ser adicionados aqui
