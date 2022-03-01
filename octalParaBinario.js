let numero = "162";   // precisa ser passado em string para o split recortar em seguida
let lista = numero.split("");
let resultado = [];


substituirNumeros(lista)

function substituirNumeros(valor){
    for (let index = 0; index < valor.length; index++) {
        if(valor[index] == 0){
            resultado.push("000")
        }
        else if(valor[index] == 1){
            resultado.push("001")
        }    
        else if(valor[index] == 2){
            resultado.push("010")
        }
        else if(valor[index] == 3){
            resultado.push("011")
        }
        else if(valor[index] == 4){
            resultado.push("100")  
        }
        else if(valor[index] == 5){
            resultado.push("101")  
        }
        else if(valor[index] == 6){
            resultado.push("110")  
        }
        else if(valor[index] == 7){
            resultado.push("111")    
        }
    }
}
let resposta = resultado.join('');
console.log(resposta);