export default class Pizza{
constructor(masa,tamano,ingredientes){
.mthisasa=masa;
this.tamano=tamano;
this.ingredientes= ingredientes;
}// fin del constructor

preparar(){
console.log(`Preparando Pizza ${this.tamano}, ${this.masa}, Ingredientes ${this.ingredientes}`);
return this;
}// fin preparar

hornear(){
    console.log('La Pizza está en el horno..!');
    return this;
}// fin hornear

empacar(){
console.log('Empacando la Pizza');
console.log('La Pizza lista para ser llevada');
return this;
 
}// fin empacar

}// fin de la clase

// Declaración de un objeto
/*
const pedidoPollo = new Pizza("Maza Delagad","Grande",["Queso","Pollo","Champiñones"]);
console.log(pedidoPollo.preparar());
console.log(pedidoPollo.hornear());
console.log(pedidoPollo.empacar());

console.log('--------------------------------------------')

const pedidoChampiñones = new Pizza("Maza Gruesa","Grande",["Queso","aceitunas","Champiñones","Peperoni"]);
console.log( pedidoChampiñones.preparar());
console.log( pedidoChampiñones.hornear());
console.log( pedidoChampiñones.empacar());
*/