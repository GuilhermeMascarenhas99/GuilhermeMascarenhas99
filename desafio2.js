alert(`Olá Bem-Vindo ao Simulador de Investimento!
Preencha o formulário a seguir com seus dados e
informações para um diagnóstico prévio de perfil
de investidor e uma estimativa de lucro.`)

let nome = prompt('Digite seu nome completo:'),
    idade;
do {
    idade = prompt(`Digite sua idade:

Lembrete: Você com 18 anos, é sempre importe
orientação do seu responsável legal!`)
} while ((idade < 18 || idade >= 100));

let sexo = prompt(`Qual o seu gênero ?
-Masculino
-Feminino
-Outro (Qual?)
-Prefiro não dizer`),
    rendaMensal = prompt('Nos informe sua Renda Mensal R$'),
    percent1 = [],
    percent2 = [],
    perfilDeInvestidor,
    sugestaoDeInvestimento,
    lucroPossivel;

let pergunta1 = prompt(`Você tem formação na área financeira?
1. Sim, sem experiência!
2. Sim, com experiência!
3. Não, mas tenho experiência!
4. Não, com pouca experiência!
5. Não, e não tenho experiência!`);

if (pergunta1 == 1) {
    percent1 = [0, 10, 90, 0]
}
else if (pergunta1 == 2) {
    percent1 = [0, 0, 35, 65]
}
else if (pergunta1 == 3) {
    percent1 = [0, 0, 77, 23]
}
else if (pergunta1 == 4) {
    percent1 = [0, 64, 36, 0]
}
else {
    percent1 = [75, 25, 0, 0]
}

let pergunta2 = prompt(`Qual produto você conhece?
1. Poupança, Depósito a prazo!
2. Tesouro Direto, Renda Variável!
3. Produtos 1 e 2!
4. Nunca investiu, mas conheço alguns produtos!
5. Nunca invsti e não conheço nenhum!`)

if (pergunta2 == 1) {
    percent2 = [60, 40, 0, 0]
}
else if (pergunta2 == 2) {
    percent2 = [0, 0, 40, 60]
}
else if (pergunta2 == 3) {
    percent2 = [0, 0, 22, 78]
}
else if (pergunta2 == 4) {
    percent2 = [0, 73, 27, 0]
}
else {
    percent2 = [60, 40, 0, 0]
}

const mediaresposta = function (percent1, percent2) {
    var media = [];
    for (let i = 0; i < 4; i++) {
        media[i] = (percent1[i] + percent2[i]) / 2
    }
    return media;
}

let media = mediaresposta(percent1, percent2),
    maiorPercent = Math.max(...media),
    tipoInvestidor = media.indexOf(maiorPercent) + 1

switch (tipoInvestidor) {
    case 1: perfilDeInvestidor = 'Ultraconservador'

        break;

    case 2: perfilDeInvestidor = 'Conservador'

        break;

    case 3: perfilDeInvestidor = 'Dinâmico'

        break;

    case 4: perfilDeInvestidor = 'Arrojado'

        break;
}

if (perfilDeInvestidor == 'Ultraconservador' || perfilDeInvestidor == 'Conservador') {
    sugestaoDeInvestimento = 'Renda Fixa'
}
else {
    sugestaoDeInvestimento = 'Renda Variavel'
}

console.log(`
SIMULADOR DE INVESTIMENTO

Nome: ${nome} 
Idade: ${idade}
Sexo: ${sexo}
Renda Mensal: R$${rendaMensal}
Perfil do Investidor: ${perfilDeInvestidor}
Sugestão de Investimento: ${sugestaoDeInvestimento}`);
if (sugestaoDeInvestimento == 'Renda Fixa') {
    capitalInvestido = Number(prompt('Nos informe o capital que deseja investir:'))
    juros = Number(prompt('Qual a taxa de juros atual SELIC'))
    tempo = Number(prompt('Quanto tempo o capital será investio'))

    jurosSimples = (capitalInvestido * (juros / 100) * tempo) + capitalInvestido
    jurosComposto = capitalInvestido * ((1 + (juros / 100)) ** tempo)

    console.log(`
-Simulação de Investimento-
Capital que deseja Investir: R$${capitalInvestido}
Juros SELIC: ${juros}%
Meses/Anos Investido: ${tempo}

Com Juros Simples
Lucro Real: R$${jurosSimples.toFixed(2)}

Com Juros Composto
Lucro Possível: R$${jurosComposto.toFixed(2)}`);
}
else {
    acaoCompra = prompt('Qual valor da AÇÃO na COMPRA ?')
    acaoVenda = prompt('Qual valor da AÇÃO no momento que deseja VENDER ?')
    qtdeAcao = prompt('Quantidade de AÇÕES comprou ou pretende comprar ?')

    jurosVariaveis = ((acaoVenda / acaoCompra) * 100) - 100

    rentabilidadeAcao = qtdeAcao * (acaoCompra * (jurosVariaveis / 100))
    invenstimentoinicial = (qtdeAcao * acaoCompra)
    lucro = invenstimentoinicial + rentabilidadeAcao

    console.log(`
-Simulação de Investimento-
Valor da Ação na Compra: R$${acaoCompra}
Valor da Ação na Venda: R$${acaoVenda}
Quantidade de Ação Comprou ou prentende Comprar: ${qtdeAcao}

Porcentagem de Ganho: ${jurosVariaveis.toFixed(2)}%
Lucro Possível: R$${lucro.toFixed(2)}`);
}