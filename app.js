let participantes = [];
let montos = [];

const persona = document.getElementById("persona");
const total = document.getElementById("total");
const unitario = document.getElementById("unitario");

function verParticipante(participante, monto) {
  let li = document.createElement("li");
  li.setAttribute("class", "list-group-item");
  li.textContent = participante + ": $" + monto;
  persona.appendChild(li);
}

function verResultado() {
  let total = 0;

  for (let i = 0; i < montos.length; i++) {
    total += parseInt(montos[i]);
  }
  verTotal(total);
  verUnitario(total);
}

function verTotal(total) {
  resultado.innerHTML = "<p>" + total + "$" + "</p>";
}

function verUnitario(total) {
  let individuo = total / montos.length;
  unitario.innerHTML = "<p>" + individuo + "$" + "</p>";
}

function agregarParticipante() {
  let participante = document.getElementById("participante").value;
  let monto = document.getElementById("monto").value;

  participantes.push(participante);
  montos.push(monto);

  verParticipante(participante, monto);
  verResultado();
}
