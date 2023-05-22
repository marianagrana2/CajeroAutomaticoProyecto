const usuario = localStorage.getItem('usuario');
const bienvenido = document.getElementById('bienvenido');
bienvenido.innerHTML = `Usuario: ${usuario}`;

let money = Number(localStorage.getItem('money'));
let saldo = document.getElementById('saldo');
saldo.innerHTML = `Su saldo disponible es: $${money}`;

function depositar(monto) {
  monto = Number(monto);
  if (isNaN(monto)) {
    console.log("Ingrese un monto válido.");
  }
  else if (money < 900) {
    let total = money + monto;
    localStorage.setItem('money', total);
    money = total;
    saldo.innerHTML = `Su saldo actual es: $${total}`;
    alert(`Gracias por depositar. Su saldo actual es: $${total}`);
    setTimeout(function() {
      window.location.href = "/index/index.html";
    }, 1000);
  } else {
    console.log("No puede tener un saldo mayor a $990.");
  }
}
const deposito = document.getElementById('deposito');
deposito.addEventListener('submit', (evento) => {
  evento.preventDefault();
  let inputDeposito = Number(document.getElementById('inputDeposito').value);
  depositar(inputDeposito);
}
)