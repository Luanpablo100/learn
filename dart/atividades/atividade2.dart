import 'dart:io';
main() {
  print("Olá, qual é o seu nome?");
  var name = stdin.readLineSync();
  print("E a sua idade?");
  var age = stdin.readLineSync();
  print("O seu nome é $name e a sua idade é $age");
}