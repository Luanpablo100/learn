// Tipos primitivos
    // string - cadeia de caracteres
        console.log("Isso é uma string")
    //number - valores numéricos
        console.log("Isso é um valor do tipo numérico inteiro(int): " + 7)
        console.log("Isso é um valor do tipo numérico decimal(float): " + 7.5)
    // boolean - lógicos(verdadeiro ou falso)
        console.log("As variáveis do tipo boolean são: " + true + " e " + false)
    
    // null
    
    // undefined
    
    // Symbol
    
    // array - vetores - Variáveis que armazenam mais de um valor
        var vetor = [1,2,3,4]
        console.log("Em apenas uma variáveis temos vários valores: " + vetor)
    
    // object (objeto) - São variáveis que assim como os arrays armazenam mais de um valor, porém possuem uma característica especial: as propriedades, que são uma espécie de referência ao valor
        var aluno = {
            nome: "Luan",
            idade: 17,
            peso: 60.5,
            nasc: "27/06"
        }

        console.log("As propriedades do objeto podem ser referênciadas com um .(ponto): " + aluno.nome)
        
    //Function

    // Condição ternária - As condições if podem ser reduzidas facilmente com condições ternárias
    var sexo = "M"
    var retorno = (sexo === "M") ? "Masculino" : "Feminino"
    console.log(retorno)

    //timeout

    // setInterval(exibeAlgo, 3000) - exibe algo em um intervalo de tempo varias vezes
    setTimeout(exibeAlgo, 3000) // exibe algo em um intervalo de tempo apenas um vez

    function exibeAlgo () {
        console.log("Hello World")
    }