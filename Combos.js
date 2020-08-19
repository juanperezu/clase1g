import Pizza  from './Pizza.js';
class Combos extends Pizza{

 //constructor de la clase hija    
constructor(combo,cantidad,tamano,masa,ingredientes,bebida,postre){
// constructor de la clase padre ,base,  Super  
super(masa,tamano,ingredientes);
this.combo=combo;
this.cantidad=cantidad;
this.bebida=bebida;
this.postre=postre;

}// fin constructor
elegirCombo(){
this.preparar();
this.hornear();
this.empacar();
console.log(`Pedido : Combo ${this.combo}-${this.cantidad} Pizza ${this.cantidad}+
${this.bebida}+${this.postre}`);


}// fin elegir combo


}// fin de la clase Combos
console.clear;
console.log();

 const Pedido = new Combos("Person",1,"mediana","Gruesa",
 ["Queso","Peperoni","Champiñones"],"Coca-Cola","Tres Leches");
 console.log(Pedido.elegirCombo());
console.log('-------------------------Otro objeto----------------------------------')
 const Pedido2 = new Combos("PersonMúltiple",1,"Grande","Gruesa",
 ["Queso","Peperoni","Champiñones"],"Coca-Cola","Tres Leches");
 console.log(Pedido2.elegirCombo());
 
 export default Combos;
