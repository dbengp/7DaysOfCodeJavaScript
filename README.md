#7DaysOfCode
#Alura
#OracleNextEducation
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
- Solução:
- Usar a comparação estrita (===) em JavaScript é uma prática recomendada para evitar erros sutis que podem surgir devido à conversão implícita de tipos. Em cenários críticos, como no mercado de seguros, onde a precisão é essencial, essa prática pode evitar problemas significativos. No intuito de se evitar os problemas de comparação de tipos em JavaScript, usa-se o operador de igualdade estrita (===) que compara tanto o valor quanto o tipo das variáveis, de modo que assim se evita conversões implícitas que podem levar a resultados inesperados. Vide código: <https://github.com/dbengp/7DaysOfCodeJavaScript/blob/main/DayOne/solved.js>.
  * "numeroUm === Number(stringUm)": Aqui, Number(stringUm) converte a string '1' para o número 1, e então a comparação estrita (===) é feita. Como ambos têm o mesmo valor e tipo, a condição é verdadeira.
  * "numeroTrinta === Number(stringTrinta)": Aqui, Number(stringTrinta) converte a string '30' para o número 30, e a comparação estrita é feita. Como ambos têm o mesmo valor e tipo, a condição é verdadeira.
  * "numeroDez === Number(stringDez)": Aqui, Number(stringDez) converte a string '10' para o número 10, e a comparação estrita é feita. Como ambos têm o mesmo valor e tipo, a condição é verdadeira.
- Exemplo de Cenário no Mercado de Seguros:
  * Imagine que existe um sistema de cálculo de prêmios de seguro. O valor do prêmio é calculado com base na idade do segurado, e que é esse valor é armazenada como uma string no banco. Se você usar o operador de igualdade do tipo "==", pode acabar comparando a idade em string com idade em número, o que pode levar a resultados inesperados. Por exemplo, no código abaixo "idadeSegurado == idadeMinima" retornaria true, porque o JavaScript converte a string '21' para o número 21 implicitamente.
  ```
    let idadeSegurado = '21'; // Idade armazenada como string
    let idadeMinima = 21; // Idade mínima para o seguro
    if (idadeSegurado == idadeMinima) {
      console.log('O segurado atende à idade mínima.');
    } else {
      console.log('O segurado não atende à idade mínima.');
    }
  ```
  * No entanto, se você usar a comparação estrita (===), como no código abaixo, o resultado seria false, porque os tipos são diferentes.
  ```
    if (idadeSegurado === idadeMinima) {
      console.log('O segurado atende à idade mínima.');
    } else {
      console.log('O segurado não atende à idade mínima.');
    }
  ```
Dia 02:
- "Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce. Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas: "Qual o seu nome?", "Quantos anos você tem?", "Qual linguagem de programação você está estudando?". No final, o sistema vai exibir a mensagem: 'Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!' ".
- Solução:
- Para essa solução usei uma página html, <https://github.com/dbengp/7DaysOfCodeJavaScript/blob/main/DayTwo/index.html>, estilizada por css, <https://github.com/dbengp/7DaysOfCodeJavaScript/blob/main/DayTwo/styles.css>, como apresentação das entradas do usuário, e o javascript, <https://github.com/dbengp/7DaysOfCodeJavaScript/blob/main/DayTwo/solved.js>, com toda lógica necessária para o intento.
  * no html (index.html), tem um formulário com campos para nome, idade e linguagem de programação de preferência do usuário, além disso, foi adicionado uma seção para exibir a mensagem inicial e outra para perguntar se o usuário gosta de estudar a linguagem.
  * no css (styles.css): o estilo que foi aplicado ao formulário e as mensagens são agradáveis visualmente na minha perespectiva, sendo usada a classe '.hidden' para esconder elementos que não devem ser exibidos inicialmente.
  * no js (solved.js): captura-se os valores do formulário quando o usuário clica em "Enviar", exibi-se a mensagem inicial com os dados do usuário, e por fim, pergunta-se se o usuário gosta de estudar a linguagem e então é exibida uma mensagem com base nessa resposta.
