function sum(numero) {
    var tot=0;
    for (var i=1;i<=numero;i++) {
        tot+=i
    }
    return tot
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120