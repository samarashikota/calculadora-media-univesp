document.getElementById('calcularBtn').addEventListener('click', function() {
    const n1_value = document.getElementById('n1').value.replace(',', '.');
    const n2_value = document.getElementById('n2').value.replace(',', '.');

    const n1 = parseFloat(n1_value);
    const n2 = parseFloat(n2_value);
    const mediaFinalSpan = document.getElementById('mediaFinal');

    mediaFinalSpan.style.color = "#58a6ff"; 

    // Verifica se os valores são números válidos e estão no intervalo de 0 a 10
    if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        mediaFinalSpan.textContent = "Erro: Insira valores válidos.";
        mediaFinalSpan.style.color = "#dc3545"; // Cor vermelha para erro
        return; 
    }

    // Calcula a média ponderada com o valor preciso
    const media = (n1 * 0.4) + (n2 * 0.6);

    // Formata a média para ter no máximo duas casas decimais (apenas para exibição)
    const mediaFormatada = media.toFixed(2);

    if (media >= 5) {
        mediaFinalSpan.textContent = `${mediaFormatada} - Aprovado`;
        mediaFinalSpan.style.color = "#28a745"; // Cor verde para aprovado
    } else {
        mediaFinalSpan.textContent = `${mediaFormatada} - Reprovado`;
        mediaFinalSpan.style.color = "#dc3545"; // Cor vermelha para reprovado
    }
    
});