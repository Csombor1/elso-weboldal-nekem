function udvozles() {
    alert("Szia! Üdv az oldalamon!");
}
function valtoztat() {
    document.getElementById("szoveg").innerHTML =
        "A szöveg megváltozott!";
}
let szamlalo = 0;

function novel() {
    szamlalo++;
    document.getElementById("szam").innerHTML = szamlalo;
}

function csokkent() {
    szamlalo--;
    document.getElementById("szam").innerHTML = szamlalo;
}

function nullaz() {
    szamlalo = 0;
    document.getElementById("szam").innerHTML = szamlalo;
}