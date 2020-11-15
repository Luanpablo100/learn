import 'classes.dart';
main() {
  var c1 = Carro("Chevrolet", 'Camaro', 'Amarelo', 2);
  //var c2 = Carro('Ford', 'Ranger', 'Azul', 2);
  print("FABRICANTE ${c1.fabricante}");
  print('COR: ${c1.cor}');
  c1.ligar();
}