function copiar_texto() {
    var senha = document.getElementById("senha_gerada").textContent;
    navigator.clipboard.writeText(senha).then(function() {
        alert("Senha copiada para a área de transferência!");
    }, function() {
        alert("Falha ao copiar a senha.");
    });
}
