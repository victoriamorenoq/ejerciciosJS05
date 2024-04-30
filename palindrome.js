


// 4 PALÍNDROMO


/**
 *Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
 */



 let palabra = prompt("ingresa una palabra o frase, puede estar en mayúsculas, minúsculas, tener signos de puntuación y espacios");


function sentencePalindrome(str) 
    { 
        let l = 0; 
        let h = str.length-1; 
            
        str = str.toLowerCase(); 
        
        while(l <= h) 
        { 
               
            let getAtl = str[l]; 
            let getAth = str[h]; 
               

            if (!(getAtl >= 'a' && getAtl <= 'z')) 
                l++; 
               
            
            else if(!(getAth >= 'a' && getAth <= 'z')) 
                h--; 
               

            else if( getAtl == getAth) 
            { 
                l++; 
                h--; 
            } 
               
            else
                return false; 
        } 
           

        return true;    
    }

    let str = palabra; 
    if( sentencePalindrome(str)) 
        document.write("La oración es palíndrome"); 
    else
        document.write("La oración no es" + " " + "palíndrome");
    