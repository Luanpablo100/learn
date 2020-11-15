import 'dart:io';
main() {
  print("Digite um número");
  var n1 = num.parse(stdin.readLineSync());
  print("O dobro do numéro digitado é ${n1 * 2} e a metade é ${n1 / 2}");
}