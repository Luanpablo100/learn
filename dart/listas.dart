main() {
  /*
  var n1 = 10.0;
  var n2 = 10;
  var n3 = 10;
  var n4 = 10;

  var media = (n1 + n2 + n3 + n4) / 4;

  print("Média dos alunos: $media");
  */
  
  var notas = [7.5, 10, 8.5, 9];
  var soma = 0.0;

  for(var nota in notas) {
    soma += nota;
  }

  var media = soma / notas.length;  

  print('A média foi $media');
}