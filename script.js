document.getElementById('calcularBtn').addEventListener('click', function() {
    // Pega os valores dos inputs e converte para número
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const mediaFinalSpan = document.getElementById('mediaFinal');

    // Limpa a formatação anterior (caso tenha dado erro antes)
    mediaFinalSpan.style.color = "#007bff"; 

    // Verifica se os valores são números válidos e estão no intervalo de 0 a 10
    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        mediaFinalSpan.textContent = "Erro: Insira valores válidos.";
        mediaFinalSpan.style.color = "red";
        return; 
    }

    // Calcula a média ponderada conforme a fórmula: (N1*0,4) + (N2*0,6)
    const media = (n1 * 0.4) + (n2 * 0.6);

    // Formata a média para ter no máximo duas casas decimais
    const mediaFormatada = media.toFixed(2);


    // Verifica a condição de aprovação e monta a mensagem final
    if (media >= 5) {
        mediaFinalSpan.textContent = `${mediaFormatada} - Aprovado`;
        mediaFinalSpan.style.color = "#28a745"; // Cor verde para aprovado
    } else {
        mediaFinalSpan.textContent = `${mediaFormatada} - Reprovado`;
        mediaFinalSpan.style.color = "#dc3545"; // Cor vermelha para reprovado
    }
    
});