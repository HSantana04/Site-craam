function pesquisarImagem() {
    var dataSelecionada = document.getElementById("dataInput").value;

    // Formate a data selecionada para o formato dd-mm-aaaa
    var partesData = dataSelecionada.split("-");
    var dataFormatada = partesData[2] + "-" + partesData[1] + "-" + partesData[0];

    var urlImagem = "https://storage.googleapis.com/projetocraam/imagens/" + dataFormatada + ".jpg";

    window.open(urlImagem, "_blank");
}
