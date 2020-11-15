class Carro {
  String fabricante;
  String modelo;
  String cor;
  int numPortas;

  Carro(String fabricante, String modelo, String cor, int numPortas) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.cor = cor;
    this.numPortas = numPortas;
  }

  void ligar() {
    print("Carro ligando");
  }

  void desligar() {
    print('Carro desligando');
  }
}

