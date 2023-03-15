function max(numeros) {
    let mayor = numeros[0];
    for(let i = 0; i < numeros.length; i++) {
        if (mayor <= numeros[i]) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined