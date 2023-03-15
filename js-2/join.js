function join(elementos) {
    let String = elementos[0]
    for(let i = 1; i < elementos.length; i++) {
        String = String.toString() + elementos[i]
    }
    return String
}

console.log(join(["a", 1, "Nombre", 031, " ", "ejemplo"]))
console.log(join([1, 5, 8, 164, 0]))
console.log(join([]))