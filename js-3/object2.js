let persona = {
    nombre : "Jose",
    edad : 29,
    ciudad : "Lima",
    profesion : "programador"
}
function recorrerObject (object) {
    let llaves = Object.keys(persona);
    for (let i = 0; i < llaves.length; i ++) {
        let llave = llaves[i];
        console.log(llave + ": " + persona[llave]);
    }
}
recorrerObject(persona)

function presentacion (persona) {
    return persona.nombre + ", " + persona.edad + ", " + persona.ciudad;
}
let mensaje = presentacion(persona);

console.log("mensaje: " + mensaje);

persona.hobbies = ["correr", "jugar", "dormir"]
console.log(persona.hobbies)

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i])
}