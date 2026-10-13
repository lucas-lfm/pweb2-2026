const conta = {
  numero: "6252-21",
  saldo: 900,
  informarSaldo: function () {
    console.log(`Seu saldo é R$ ${this.saldo}`);
  },
  sacar: function (valor) {
    if (this.saldo < valor) {
      console.log("Saldo insuficiente.");
      return;
    }

    this.saldo -= valor;
  },
  depositar: function (valor) {
    this.saldo += valor;
  }
};

conta.informarSaldo();
conta.sacar(1200);
conta.sacar(300);
conta.informarSaldo();