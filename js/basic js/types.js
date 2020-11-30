console.log('Estes são os tipos primitivos:')
    // String - cadeia de caracteres
        console.log('String')
        console.log("   Isso é uma string")
        console.log('')
    //Number - valores numéricos
        console.log('Number')
        console.log("   Isso é um valor do tipo numérico inteiro(int): " + 7)
        console.log("   Isso é um valor do tipo numérico decimal(float): " + 7.5)
        console.log('')
    // Boolean - lógicos(verdadeiro ou falso)
        console.log('Boolean')
        console.log("   As variáveis do tipo boolean são: " + true + " e " + false)
        console.log('')
    // Null
        console.log('Null')
        console.log('   Este é o tipo nulo(null):', null)
        console.log('')
    // Undefined
        var und
        console.log('Undefined')
        console.log('   Variáveis sem valor retornam indefinido: ', und)
        console.log('')

    // Array
        var vetor = [1,2,3,4]
        console.log('Array')
        console.log('   Arrays ou vetores são variáveis que armazenam mais de um valor')
        console.log("   Em apenas um vetor podemos ter vários valores: " + vetor)
        console.log('')
    
    // Object 
        var aluno = {
            nome: "Luan",
            idade: 17,
            peso: 60.5,
            nasc: "27/06"
        }
        console.log('Object')
        console.log('   São variáveis que assim como os arrays armazenam mais de um valor, porém possuem uma característica especial: as propriedades, que são uma espécie de referência ao valor')
        console.log('Este é um objeto:')
        console.log('')
        console.log(aluno)
        console.log('')
        console.log("   As propriedades do objeto podem ser referênciadas com um .(ponto): aluno.nome retorna: " + aluno.nome)
        console.log('')
        
    //Function
        console.log('Function')
        console.log('   Function é um tipo primitivo atribuído a funções')
        console.log('')
