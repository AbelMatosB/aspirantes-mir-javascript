function maxIndex(numeros) {
    let mayor = numeros[0];
    for(let i = 0; i < numeros.length; i++) {
        if (mayor <= numeros[i]) {
            mayor = numeros[i];
        }
    }
    return numeros.indexOf(mayor);
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1