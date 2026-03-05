function calcular() {

    let precoAlcool = parseFloat(document.getElementById("alcool").value);
    let precoGasolina = parseFloat(document.getElementById("gasolina").value);
    let resultado = document.getElementById("resultado");

    resultado.className = "balao";
    resultado.style.display = "block";

    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
        resultado.innerHTML = "Digite valores válidos!";
        resultado.classList.add("erro");
        return;
    }

    let calculo = precoAlcool / precoGasolina;

    if (calculo <= 0.7) {
        resultado.innerHTML = "✅ Compensa abastecer com Álcool!";
        resultado.classList.add("sucesso");
    } else {
        resultado.innerHTML = "⛽ Compensa abastecer com Gasolina!";
        resultado.classList.add("gasolina");
    }
}