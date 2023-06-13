function disableMechina() {
  let psyInput = document.getElementById("Mechina");
  let MechInput = document.getElementById("Psychomtric");
  psyInput.disabled = true;
  MechInput.disabled = false;
}
function disablePsy() {
  let MechInput = document.getElementById("Psychomtric");
  let psyInput = document.getElementById("Mechina");
  MechInput.disabled = true;
  psyInput.disabled = false;
}
function validate() {
  let b = document.getElementById("GBagrut").value;
  if (b == "") {
    alert("You should enter a bagrut grade");
  }
  let age = document.getElementById("age").value;
  if (age > 30) {
    document.getElementById("green").innerHTML =
      "You are eligible for admission to any faculty you choose";
  } else {
    document.getElementById("green").innerHTML = "";
  }
}
