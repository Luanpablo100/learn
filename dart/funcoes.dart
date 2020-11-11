import 'dart:io';

main() {
  print("Informe o primeiro número");
  var n1 = int.parse(stdin.readLineSync());

  print("Informe o segundo número");
  var n2 = int.parse(stdin.readLineSync());


  var sm = soma(n1, n2);
  var sb = subt(n1, n2);
  var mt = multi(n1, n2);
  print("Realizando operações entre $n1 e $n2");
  print("Soma: $sm");
  print("Subtração: $sb");
  print("Multiplicação: $mt");
}

int soma(int n1, int n2) {
  return n1 + n2;
}

int subt(int n1, int n2) {
  return n1 - n2;
}

int multi(int n1, int n2) {
  return n1 * n2;
}