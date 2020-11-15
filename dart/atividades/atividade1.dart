import 'dart:io';
main() {
  print("Olá, qual é o seu nome?");
  var name = stdin.readLineSync();
  print("Seja bem vindo $name!");
}