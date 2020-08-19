export default class Usuario{
    constructor(id,nombre,perfil, clave,estado, correo){
    
    this.id=id;
    this.nombre=nombre;
    this.clave=clave;
    this.perfil=perfil;
    this.estado= estado;
    this.correo=correo;
    
    }
    
    Crear(){
    console.log(`Recibiendo Datos sobre ${this.id}, ${this.nombre}`);   
    return this;    
    }
    
    Ingresar(){
    console.log(`Procesando los datos, Por favor espere ${this.id}  ${this.clave}`);
    return this;
    }
    
    Editar(){
    console.log(`Exportacion Exitosa`);
    console.log(`Datos listos para su uso`);
    return this;
    }
    
    
    }
    
    
    const CrearUsuario = new Usuario("0001","JUan Pérez","Admin","123","Activo","juanperez@elpoli.edu.co");
    console.log(dato.Crear());
    //console.log(dato.procesar());
    //console.log(dato.exportar());
    
    //export default Usuario