var nome = prompt('Digite seu nome completo:'),
    sexo = prompt('Digite seu sexo:'),
    idade = prompt('Digite sua idade:'),
    altura = prompt('Digite sua altura:'),
    peso = prompt('Digite seu peso:'),
    IMC = peso / (altura ** 2);

console.log
    (`DIAGNOSTICO PRÉVIO
------------------
Nome: ${nome}
Sexo: ${sexo}
Idade: ${idade}
Peso: ${peso}
Altura: ${altura}
IMC desejável: Entre 20 e 24
Resultado IMC: ${IMC.toFixed(2)}`)

if (idade < 12) {
    categoria = "Infantil"
    console.log(categoria)
}
else if (idade <= 20) {
    categoria = "Juvenil"
    console.log(categoria)
}
else if (idade <= 65) {
    categoria = "Adulto"
    console.log(categoria)
}
else {
    categoria = "Idoso"
    console.log(categoria)
}

if (IMC < 20.99) {
    console.log("Riscos: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.\
    \n\n Recomendações: Inclua carboidratos simples em sua dieta, além de proteínas -indispensáveis para ganho de massa magra. Procure um profissional.")
}
else if (IMC <= 24.99) {
    console.log("Risco: Seu peso está ideal para suas referências.\
    \n\n Recomendções: Mantenha uma dieta saudável e faça seus exames periódicos.")
}
else if (IMC <= 29.99) {
    console.log("Risco: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.\
    \n\n Recomendações: Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante.")
}
else if (IMC <= 35.99) {
    console.log("Risco: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.\
    \n\n Recomendações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino).")
}
else {
    console.log("Risco: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.\
    \n\n Recomendações: Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).")
}