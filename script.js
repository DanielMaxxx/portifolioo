document.getElementById('downloadButton').addEventListener('click', function() {
  // Caminho relativo para o arquivo de imagem
  var imagePath = 'Daniel Max.png';

  // Cria um link temporário
  var link = document.createElement("a");
  link.download = "Daniel Max.png"; // Nome do arquivo
  link.href = imagePath;

  // Adiciona o link ao documento e simula o clique para iniciar o download
  document.body.appendChild(link);
  link.click();

  // Limpa o link após o download
  setTimeout(function() {
      document.body.removeChild(link);
  }, 0);
});