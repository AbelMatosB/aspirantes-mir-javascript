let receta = {
}
receta.nombre = "Sandwich"
receta.ingredientes = []
receta.ingredientes[0] = {nombre: "Pan", cantidad : 2}
receta.ingredientes[1] = {nombre: "Queso", cantidad : 1}

console.log(receta.ingredientes[0].nombre)

let suma = 0
for (let i = 0; i < receta.ingredientes.length; i ++) {
    suma = suma + receta.ingredientes[i].cantidad;
}
console.log(suma)