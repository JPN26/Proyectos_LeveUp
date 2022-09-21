
let palbara={
    c:"Google",
    a:"Apple",
    b:"Microsoft"
}

let objetoNuevo={};
let objetollaves=[];
let objetovalores=[];
function Principal(objetooo){
    for(let llave of Object.keys(objetooo).sort())
    {
        objetoNuevo[llave]=objetooo[llave];
    }
    objetollaves=Object.keys(objetoNuevo);
    objetovalores=Object.values(objetoNuevo);
    return {
        objetoNuevo,
        objetollaves,
        objetovalores,
    }
}

console.log(palbara);
console.log(Principal(palbara).objetoNuevo);
console.log(Principal(palbara).objetollaves,Principal(palbara).objetovalores);