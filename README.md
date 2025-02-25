# 7DaysOfCodeJavaScript
## repositório para os desafios do 7 of code: Javascript - Alura / Rafa Ballerini
Dia 01: 
- "A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc…." (Rafa Ballerini, Instrutora Front-End na Alura).
- Sendo assim, a tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:
```
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```
- No intuito de se evitar os problemas de comparação de tipos em JavaScript, usa-se o operador de igualdade estrita (===) que compara tanto o valor quanto o tipo das variáveis, de modo que assim se evita conversões implícitas que podem levar a resultados inesperados. Solução: Vide código <https://github.com/dbengp/7DaysOfCodeJavaScript/blob/main/DayOne/solved.js>.
-- "numeroUm === Number(stringUm)": Aqui, Number(stringUm) converte a string '1' para o número 1, e então a comparação estrita (===) é feita. Como ambos têm o mesmo valor e tipo, a condição é verdadeira.
-- "numeroTrinta === Number(stringTrinta)": Aqui, Number(stringTrinta) converte a string '30' para o número 30, e a comparação estrita é feita. Como ambos têm o mesmo valor e tipo, a condição é verdadeira.
-- "numeroDez === Number(stringDez)": Aqui, Number(stringDez) converte a string '10' para o número 10, e a comparação estrita é feita. Como ambos têm o mesmo valor e tipo, a condição é verdadeira.
- Exemplo de Cenário no Mercado de Seguros:
-- Imagine que existe um sistema de cálculo de prêmios de seguro. O valor do prêmio é calculado com base na idade do segurado, e que é esse valor é armazenada como uma string no banco. Se você usar o operador de igualdade do tipo "==", pode acabar comparando a idade em string com idade em número, o que pode levar a resultados inesperados.
