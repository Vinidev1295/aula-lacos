//Exercicio A)
const arrayOriginal = [1,2,3,4,5,6,7,8,9]
function array1(arrayOriginal){
    for(let i=0; i<arrayOriginal.length; i++){
        let receb = arrayOriginal[i]
        console.log(receb)
}
}
array1(arrayOriginal)

//Exercicio B)
function array2(arrayOriginal){
    for(let i=0; i<arrayOriginal.length; i++){
        let receb2 = arrayOriginal[i]/10
        console.log(receb2)
}
}
array2(arrayOriginal)

//Exercicio C)
arrayNovo = []
function array3(arrayOriginal){
    for(let i=0; i<arrayOriginal.length; i++){
        if(arrayOriginal[i]%2===0){
            arrayNovo.push(arrayOriginal[i])
}
}
console.log(arrayNovo)
}
array3(arrayOriginal)
