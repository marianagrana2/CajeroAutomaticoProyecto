const usuario = localStorage.getItem('usuario');
const bienvenido = document.getElementById('bienvenido');
bienvenido.innerHTML = `Usuario: ${usuario}`;

let money = Number(localStorage.getItem('money')) || 0;
const saldo = document.getElementById('saldo');
saldo.innerHTML = `Su saldo disponible es: $${money}`;

function retirar(monto) {
  monto = Number(monto);
  if (isNaN(monto) || monto <= 0) {
    alert("Ingrese un monto válido.");
  }
  else if (monto > money) {
    alert("No tiene suficiente saldo para retirar esa cantidad.");
  }
  else if (monto < 10) {
    alert("No puede retirar menos de $10.");
  }
  else {
    let total = money - monto;
    localStorage.setItem('money', total);
    money = total;
    saldo.innerHTML = `Su saldo actual es: $${total}`;
    alert(`Gracias por retirar. Su saldo actual es: $${total}`);
    setTimeout(function() {
      window.location.href = "/index/index.html";
    }, 1000);
  }
}

const retiro = document.getElementById('retiro');
retiro.addEventListener('submit', (evento) => {
  evento.preventDefault();
  let inputRetiro = Number(document.getElementById('inputRetiro').value);
  if (inputRetiro > 0) {
    retirar(inputRetiro);
  }
  else {
    console.log("Ingrese un monto válido.")
  }

}
);