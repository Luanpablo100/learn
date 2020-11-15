import 'dart:io';
main() {
  var n = [0,0,0];
  num soma = 0;
  print("Digite três números:");
  print("Primeiro:");
  n[0] = num.parse(stdin.readLineSync());
  print("Segundo:");
  n[1] = num.parse(stdin.readLineSync());
  print("Terceiro:");
  n[2] = num.parse(stdin.readLineSync());
  for(var numeros in n) {
    soma += numeros;
  }
  print("O valor da soma dos números foi $soma");
}