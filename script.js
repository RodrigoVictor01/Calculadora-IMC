


function calcular() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    const pesoIdealValue = 24;
    if (altura == '' || altura === 0) {
        document.getElementById('resultImc').innerHTML = "Por favor, preencha a altura";
    }

    else if (peso == '' || peso === 0) {
        document.getElementById('resultImc').innerHTML = "Por favor, preencha o peso";
    }

    calculo = peso / (altura * altura);
    pesoIdeal = pesoIdealValue * (altura * altura);


    if (calculo < 18.5 && calculo > 0) {
        document.getElementById('resultImcNumber').innerHTML = "IMC: " + (calculo.toFixed(2));
        document.getElementById('resultImcNumber').classList.add('border-title');
        document.getElementById('resultImc').innerHTML = "Abaixo do peso normal";
        document.getElementById('resultImc').classList.add('border-title');
        document.getElementById('pesoIdeal').innerHTML = "Peso ideal médio: " + (pesoIdeal.toFixed(0)) + "Kg";
    }

    else if (calculo >= 18.5 && calculo <= 24.9) {
        document.getElementById('resultImcNumber').innerHTML = "IMC: " + (calculo.toFixed(2));
        document.getElementById('resultImcNumber').classList.add('border-title');
        document.getElementById('resultImc').innerHTML = "Peso normal";
    }

    else if (calculo >= 25 && calculo <= 29.9) {
        document.getElementById('resultImcNumber').innerHTML = "IMC: " + (calculo.toFixed(2));
        document.getElementById('resultImcNumber').classList.add('border-title');
        document.getElementById('resultImc').innerHTML = "Acima do peso";
        document.getElementById('resultImc').classList.add('border-title');
        document.getElementById('pesoIdeal').innerHTML = "Peso ideal médio: " + (pesoIdeal.toFixed(0)) + "Kg";
    }

    else if (calculo >= 30 && calculo <= 34.9) {
        document.getElementById('resultImcNumber').innerHTML = "IMC: " + (calculo.toFixed(2));
        document.getElementById('resultImcNumber').classList.add('border-title');
        document.getElementById('resultImc').innerHTML = "Obesidade classe I";
        document.getElementById('resultImc').classList.add('border-title');
        document.getElementById('pesoIdeal').innerHTML = "Peso ideal médio: " + (pesoIdeal.toFixed(0)) + "Kg";
    }

    else if (calculo >= 35 && calculo <= 39.9) {
        document.getElementById('resultImcNumber').innerHTML = "IMC: " + (calculo.toFixed(2));
        document.getElementById('resultImcNumber').classList.add('border-title');
        document.getElementById('resultImc').innerHTML = "Obesidade classe II";
        document.getElementById('resultImc').classList.add('border-title');
        document.getElementById('pesoIdeal').innerHTML = "Peso ideal médio: " + (pesoIdeal.toFixed(0)) + "Kg";
    }

    else if (calculo >= 40 && calculo <= 999) {
        document.getElementById('resultImcNumber').innerHTML = "IMC: " + (calculo.toFixed(2));
        document.getElementById('resultImcNumber').classList.add('border-title');
        document.getElementById('resultImc').innerHTML = "Obesidade classe III";
        document.getElementById('resultImc').classList.add('border-title');
        document.getElementById('pesoIdeal').innerHTML = "Peso ideal médio: " + (pesoIdeal.toFixed(0)) + "Kg";
    }


}



