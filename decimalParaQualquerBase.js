//Alterar o número abaixo a ser convertido, e a base desejada
var numero = 47; 

const base2 = 2;
const base8 = 8;
const base16 = 16;
let resto = [];
let hexadecimal = ["A", "B","C", "D","E","F"];
let novaBase = "";


// Escolher a base desejada para a conversão:
//dividir(numero,base16)
dividir(numero,base2)
//dividir(numero,base8)

function dividir(valor,base){
   while(valor !== 0){ 
    resto.push(valor % base);
    valor = parseInt(valor / base);
    //console.log(valor)
    //console.log("resto: "+ resto)
}    
converter(resto,base)
}


function converter(array,base){
    if(base == 8){
        for (let index = 0; index < array.length; index++) { 
        if(array[index] >= 8 && array[index] <= 17){    
            array[index] += 2;  
        }   
        }          
        }       
    else if(base == 16){
        for (let index = 0; index < array.length; index++) { 
            if(array[index] == 10){
                array[index] = hexadecimal[0]
            }
            else if(array[index] == 11){
                array[index] = hexadecimal[1]
            }
            else if(array[index] == 12){
                array[index] = hexadecimal[2]
            }
            else if(array[index] == 13){
                array[index] = hexadecimal[3]
            }
            else if(array[index] == 14){
                array[index] = hexadecimal[4]
            }
            else if(array[index] == 15){
                array[index] = hexadecimal[5]
            }
            else if(array[index] == 16){
                array[index] = hexadecimal[6]
            }
            else if(array[index] == 17){
                array[index] = hexadecimal[7]
            } 

}
}
virarResultado(resto, base)
}

function virarResultado(valor, base){
    novaBase = valor.reverse().join("");
    console.log("Resultado de "+ numero + " na base " + base + " é: " + novaBase)
};

