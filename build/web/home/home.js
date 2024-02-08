




let menu_container = document.querySelector("#menuContainer");
let sistema = document.querySelector("#sistema")
let moduloJs;

////SOLICITA LA BASE DE DATOS Y LA GUARDA EN UN ARRAY
let sucursales = [];
let productos = [];
let compras = [];
let clientes = [];
let empleados = [];


///DEFINICION DE OBJETOS PARA GUARDADO EN BASE DE DATOS
///CREACION DE CLASE SUCURSAL Y PETICION FETCH
class Sucursal{

    constructor(idSucursal,nombre,titular,rfc,domicilio,colonia,codigoPostal,ciudad,estado,telefono,latitud,longitud,estatus){
        idSucursal = null,
        nombre = "",
        titular =  "",
        rfc = "",
        domicilio = "",
        colonia = "",
        codigoPostal = "",
        ciudad = "",
        estado = "",
        telefono = "",
        latitud = "",
        longitud ="",
        estatus = ""
    }
    
}

fetch("informacion/sucursal.json").then((sucursal) => {
    return sucursal.json();
}).then((informacion) => {

    sucursales = informacion;


})


///CREACION DE CLASE PRODUCTO Y PETICION FETCH
fetch("informacion/producto.json").then((producto) => {
    return producto.json();
}).then((informacion) => {
    productos = informacion

});
fetch("informacion/empleado.json").then((empleado) => {
    return empleado.json();
}).then((informacion) => {
    empleados = informacion

});





class Producto{

    constructor(idProducto, nombre, nombreGenerico, formaFarmaceutica, unidadMedida, presentacion, principalIndicacion, contraindicaciones, concentracion, unidadesEnvase, precioCompra, precioVenta, foto, rutafoto, codigoBarras, estatus){

        this.idProducto = null,
        this.nombre = "",
        this.nombreGenerico = "",
        this.formaFarmaceutica = "",
        this.unidadMedida ="",
        this.presentacion = "",
        this.principalIndicacion ="",
        this.contraindicaciones ="",
        this.concentracion ="",
        this.unidadesEnvase = null,
        this.precioCompra = null,
        this.precioVenta = null,
        this.foto = "",
        this.rutafoto = "",
        this.codigoBarras = "",
        this.estatus = null
    }
}


///CREACION DE CLASE Y FETCH DE COMPRA
fetch("informacion/compra.json").then((res)=>{
    return res.json();
}).then((informacion)=> {

    compras = informacion;
})

class Compra {
constructor(idCompra, idEmpleado, idProducto, cantidad, fecha, hora){
    this.idCompra = null,
    this.estatus = "",
    this.idEmpleado = null,
    this.idProducto = null,
    this.cantidad = null
    this.fecha = "",
    this.hora = ""
}

}

class Usuario {
    constructor(idUsuario, nombreUsuario, contrasena, rol){
        this.idUsuario = null,
        this.nombreUsuario = "",
        this.contrasena = ""
        this.rol = ""
    }
}
class Persona {
    constructor(idPersona, nombre, apellidoPaterno, apellidoMaterno, genero, fechaNacimiento, rfc, curp, domicilio, codigoPostal, ciudad, estado, telefono, colonia){
        this.idPersona = null,
        this.nombre = "",
        this.apellidoPaterno = "",
        this.apellidoMaterno = "",
        this.genero = null,
        this.fechaNacimiento = "",
        this.rfc ="",
        this.curp = "",
        this.domicilio = ""
,       this.colonia = "",
        this.codigoPostal = "",
        this.ciudad = "",
        this.estado = "",
        this.telefono = ""
    }
}

class Empleado{
    constructor(idEmpleado, codigo, fechaIngreso, puesto, salarioBruto, estatus,idSucursal){
        this.idEmpleado = null,
        this.codigo = "",
        this.fechaIngreso = "",
        this.puesto = "",
        this.salarioBruto = null
        this.estatus = "",
        this.persona = new Persona()
       
       
        
    }


}

fetch("informacion/cliente.json").then((res) => {
    return res.json();
}).then((informacion) => {
    clientes = informacion;
})



class Cliente{

    constructor(idCliente, estatus,persona){
        this.idCliente = null,
        this.estatus = "",
        this.persona = new Persona()
        
    }

}
menu_container.addEventListener("click",(e) => {
    
    console.log(e);

    /////////////DESPLIEGUE MENU COMPRAS
    if(e.target.matches('a#compras')){

fetch("home/inicio_compras.html").then((res) => {
        return res.text();
}).then((url) => {
    sistema.innerHTML = url;

    

    //////////////DESPLIEGUE DE MENU DE COMPRAS
    const menu_compras = document.querySelector("#menu_compras");
    const informacion = document.querySelector("#informacion");
    menu_compras.addEventListener("click", (e) => {
        console.log(e);

        ///DESPLIEGUE DE SECCION ELIMINAR COMPRAS
        if(e.target.matches("a#eliminar")){ fetch("eliminar/eliminar_compras.html").then((res) => { return res.text()}).then((url) => {
            informacion.innerHTML = url
            

            let boton_buscar = document.querySelector("#boton_buscar_compras");
        
        
                
            boton_buscar.addEventListener("click",() => {

                let buscador_valor = document.querySelector("#buscador_compras").value;
                
                compras.forEach((elemento) => {

                    if(elemento.idCompra == buscador_valor){

                        let idEmpleado = document.querySelector("#idEmpleado").value = elemento.idEmpleado;
                        let idProducto = document.querySelector("#idProducto").value = elemento.idProducto;
                        let cantidad = document.querySelector("#cantidad").value = elemento.cantidad;
                        let fecha = document.querySelector("#fecha").value = elemento.fecha;
                        let hora = document.querySelector("#hora").value = elemento.hora;
                     
                        if(elemento.estatus == true){
                            let estatus = document.querySelector("#estatus_compra").value = "activo";
                        }else{
                            let estatus = document.querySelector("#estatus_compra").value = "inactivo";
                        }
                       
                    
                    }


                });
                
            })

            let eliminar_compra = document.querySelector("#eliminar_compra");

            eliminar_compra.addEventListener("click", () => {
                let buscador_valor = document.querySelector("#buscador_compras").value;

                compras.forEach((elemento) => {

                    if(elemento.idCompra == buscador_valor){

                            elemento.estatus = "inactivo"


                    }

                })




            })
        })}
        ///DESPLIEGUE DE SECCION AÑADIR COMPRAS
        else if(e.target.matches("a#anadir")){ fetch("agregar/agregar_compra.html").then((res) => { return res.text()}).then((url) => {
            informacion.innerHTML = url
            

            let agregar = document.querySelector("#agregar_compra");

            agregar.addEventListener("click", () => {

                let newCompra = new Compra();
        
                let idEmpleado = document.querySelector("#idEmpleado").value;
                let idProducto = document.querySelector("#idProducto").value;
                let cantidad = document.querySelector("#cantidad").value;
                let fecha = document.querySelector("#fecha").value;
                let hora = document.querySelector("#hora").value;
                let estatus = document.querySelector("#estatus_compra").value;

                newCompra.idCompra = compras.length + 1;
                
                newCompra.idEmpleado = idEmpleado;
                newCompra.idProducto = idProducto;
                newCompra.cantidad = cantidad;
                newCompra.fecha = fecha;
                newCompra.hora = hora;
                newCompra.estatus = estatus;

                compras.push(newCompra);
                console.log(compras)



            })
            

        

        
        
        })}
        /// DESPLIEGUE DE SECCION BUSCAR COMPRAS
        else if(e.target.matches('a#buscar')){fetch("buscar/buscar_compras.html").then((res) => { return res.text();}).then((url) => {
             informacion.innerHTML = url
            
             let boton_buscar = document.querySelector("#boton_buscar_compras");
        
        
                
             boton_buscar.addEventListener("click",() => {
 
                 let buscador_valor = document.querySelector("#buscador_compras").value;
                 
                 compras.forEach((elemento) => {
 
                     if(elemento.idCompra == buscador_valor){
 
                        

                         if(elemento.estatus == "inactivo"){
                            
                         let idEmpleado = document.querySelector("#idEmpleado").value = "No existe";
                         let idProducto = document.querySelector("#idProducto").value = "No existe";
                         let cantidad = document.querySelector("#cantidad").value = "No existe";
                         let fecha = document.querySelector("#fecha").value = "No existe";
                         let hora = document.querySelector("#hora").value = "No existe";
                         let estatus = document.querySelector("#estatus_compra").value = "No existe";
                         }else{
                            
                         let idEmpleado = document.querySelector("#idEmpleado").value = elemento.idEmpleado;
                         let idProducto = document.querySelector("#idProducto").value = elemento.idProducto;
                         let cantidad = document.querySelector("#cantidad").value = elemento.cantidad;
                         let fecha = document.querySelector("#fecha").value = elemento.fecha;
                         let hora = document.querySelector("#hora").value = elemento.hora;
                         let estatus = document.querySelector("#estatus_compra").value = elemento.estatus;
                         }
                     
                     }
 
 
                 });
                 
             })
                })}
        /// DESPLIEGUE DE SECCION MODIFICAR
        else if(e.target.matches('a#modificar')){fetch("modificar/modificar_compra.html").then((res) => { return res.text()}).then((url) => {
            informacion.innerHTML = url

            let boton_buscar = document.querySelector("#boton_buscar_compra");
        
        
                
            boton_buscar.addEventListener("click",() => {

                let buscador_valor = document.querySelector("#buscador_compras").value;
                
                compras.forEach((elemento) => {

                    if(elemento.idCompra == buscador_valor){

                        let idEmpleado = document.querySelector("#idEmpleado").value = elemento.idEmpleado;
                        let idProducto = document.querySelector("#idProducto").value = elemento.idProducto;
                        let cantidad = document.querySelector("#cantidad").value = elemento.cantidad;
                        let fecha = document.querySelector("#fecha").value = elemento.fecha;
                        let hora = document.querySelector("#hora").value = elemento.hora;
                        let estatus = document.querySelector("#estatus_compra").value = elemento.estatus;
                      
                       
                    
                    }


                });
                
            })

            let modificar_compra = document.querySelector("#modificar_compra");

            modificar_compra.addEventListener("click", () => {
               

                let buscador_valor = document.querySelector("#buscador_compras").value;                
                let idEmpleado = document.querySelector("#idEmpleado").value;
                let idProducto = document.querySelector("#idProducto").value;
                let cantidad = document.querySelector("#cantidad").value;
                let fecha = document.querySelector("#fecha").value;
                let hora = document.querySelector("#hora").value;
                let estatus = document.querySelector("#estatus_compra").value;
            
                  
                compras.forEach((elemento) => {

                    if(elemento.idCompra == buscador_valor){
                        elemento.idEmpleado = idEmpleado;
                        elemento.idProducto = idProducto;
                        elemento.cantidad = cantidad;
                        elemento.fecha = fecha;
                        elemento.hora = hora;
                        elemento.estatus = estatus;
                    }
              


                })
            })
        })}
    })

})
    }


















    //////////DESPLIEGUE MENU DE CLIENTES

    else if(e.target.matches('a#clientes')){

        fetch("home/inicio_clientes.html").then((res) => {

            return res.text();

        }).then((res) => {
            sistema.innerHTML = res;
            
          
            const menu_clientes = document.querySelector("#menu_clientes");
            const informacion = document.querySelector("#informacion");

            menu_clientes.addEventListener("click", (e) => {
                ///DESPLIEGUE DE SECCION ELIMINAR CLIENTES
                if(e.target.matches("a#eliminar_clientes")){ fetch("eliminar/eliminar_clientes.html").then((res) => { return res.text();}).then((url) => {
                     informacion.innerHTML = url

                     let boton_buscar = document.querySelector("#boton_buscar_clientes");
        
        
                
                    boton_buscar.addEventListener("click",() => {
        
                        let buscador_valor = document.querySelector("#buscador_clientes").value;
                        
                        clientes.forEach((elemento) => {
        
                            if(elemento.idCliente == buscador_valor ||elemento.persona.nombre == buscador_valor){
        
                              let nombre = document.querySelector("#nombre").value = elemento.persona.nombre;
                              let apaterno = document.querySelector("#apaterno").value = elemento.persona.apellidoPaterno;
                              let amaterno = document.querySelector("#amaterno").value = elemento.persona.apellidoMaterno;
                              let genero = document.querySelector("#genero").value = elemento.persona.genero;
                              let calle = document.querySelector("#calle").value = elemento.persona.calle;
                              let colonia = document.querySelector("#colonia").value = elemento.persona.domicilio;
                              let cp = document.querySelector("#cp").value = elemento.persona.codigoPostal;
                              let curp = document.querySelector("#curp").value = elemento.persona.curp;
                            
                              let fechaNacimiento = document.querySelector("#fnacimiento").value = elemento.persona.fechaNacimiento;
                              let telefono = document.querySelector("#telefono").value = elemento.persona.telefono;
                              let correo = document.querySelector("#correo").value = elemento.persona.correo;
                              
                            let estatus = document.querySelector("#estatus_cliente").value = elemento.estatus;

                            
                              
                           
                              
                               
                            
                            }
        
        
                        });
                        
                    })

                    let eliminar_cliente = document.querySelector("#eliminar_c");
                    eliminar_cliente.addEventListener("click", () => {
                      
                        let buscador_valor = document.querySelector("#buscador_clientes").value;

                        clientes.forEach((elemento) => {

                            if(elemento.idCliente == buscador_valor || elemento.nombre == buscador_valor){
                                elemento.estatus = "inactivo";
                            }

                        })
                      

                    })
                     
                     
                    })}
                ///DESPLIEGUE DE SECCION AGREGAR CLIENTES
                else if(e.target.matches('a#anadir_clientes')){fetch('agregar/agregar_cliente.html').then((res) => { return res.text();}).then((url) => { 
                    informacion.innerHTML = url
                    

                    let agregar = document.querySelector("#agregar_clientes");

                    agregar.addEventListener("click", () => {

                     
                        let nombre = document.querySelector("#nombre").value;
                        let apaterno = document.querySelector("#apaterno").value;
                        let amaterno = document.querySelector("#amaterno").value;
                        let genero = document.querySelector("#genero").value;
                        let calle = document.querySelector("#calle").value;
                        let colonia = document.querySelector("#colonia").value;
                        let cp = document.querySelector("#cp").value;
                        let curp = document.querySelector("#curp").value;
                        let telefono = document.querySelector("#telefono").value;
                        let correo = document.querySelector("#correo").value;

                        let newCliente = new Cliente();
                        newCliente.idCliente = clientes.length + 1;
                        newCliente.persona.nombre = nombre;
                        newCliente.persona.apellidoPaterno = apaterno;
                        newCliente.persona.apellidoPaterno = amaterno;
                        newCliente.persona.genero = genero;
                        newCliente.persona.calle = calle;
                        newCliente.persona.colonia = colonia;
                        newCliente.persona.codigoPostal = cp;
                        newCliente.persona.curp = curp;
                        newCliente.persona.telefono = telefono;
                        newCliente.persona.correo = correo;


                        clientes.push(newCliente);
                     

                        

                    })
                
                })}
                ///DEPSLIEGUE DE SECCION BUSCAR CLIENTES
                else if(e.target.matches('a#buscar_clientes')){fetch('buscar/buscar_clientes.html').then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url
                    
                    let boton_buscar = document.querySelector("#boton_buscar_clientes");
        
        
                

                    boton_buscar.addEventListener("click",() => {
        
                        let buscador_valor = document.querySelector("#buscador_clientes").value;
                        
                        clientes.forEach((elemento) => {
        
                            if(elemento.idCliente == buscador_valor || elemento.persona.nombre == buscador_valor){


                                if(elemento.estatus == "inactivo"){
                                    
                              let nombre = document.querySelector("#nombre").value ="No existe";
                              let apaterno = document.querySelector("#apaterno").value = "No existe";
                              let amaterno = document.querySelector("#amaterno").value = "No existe";
                              let genero = document.querySelector("#genero").value = "No existe";
                              let calle = document.querySelector("#calle").value = "No existe";
                              let colonia = document.querySelector("#colonia").value = "No existe";
                              let cp = document.querySelector("#cp").value = "No existe";
                              let curp = document.querySelector("#curp").value = "No existe";
                            
                              let fechaNacimiento = document.querySelector("#fnacimiento").value = "No existe";
                              let telefono = document.querySelector("#telefono").value = "No existe";
                              let correo = document.querySelector("#correo").value = "No existe";
                              
                            let estatus = document.querySelector("#estatus_cliente").value = elemento.estatus;


                                }else{

                                    let nombre = document.querySelector("#nombre").value = elemento.persona.nombre;
                                    let apaterno = document.querySelector("#apaterno").value = elemento.persona.apellidoPaterno;
                                    let amaterno = document.querySelector("#amaterno").value = elemento.persona.apellidoMaterno;
                                    let genero = document.querySelector("#genero").value = elemento.persona.genero;
                                    let calle = document.querySelector("#calle").value = elemento.persona.calle;
                                    let colonia = document.querySelector("#colonia").value = elemento.persona.domicilio;
                                    let cp = document.querySelector("#cp").value = elemento.persona.codigoPostal;
                                    let curp = document.querySelector("#curp").value = elemento.persona.curp;
                                  
                                    let fechaNacimiento = document.querySelector("#fnacimiento").value = elemento.persona.fechaNacimiento;
                                    let telefono = document.querySelector("#telefono").value = elemento.persona.telefono;
                                    let correo = document.querySelector("#correo").value = elemento.persona.correo;
                                    
                                  let estatus = document.querySelector("#estatus_cliente").value = elemento.estatus;
      
                                }
        
                            
                              
                           
                              
                               
                            
                            }
        
        
                        });
                        
                    })
                
                })}

                /// DESPLIEGUE DE SECCION MODIFICAR CLIENTES
                else if(e.target.matches("a#modificar_clientes")){fetch("modificar/modificar_cliente.html").then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url;


                    let boton_buscar = document.querySelector("#boton_buscar_productos");
        
        
                

                    boton_buscar.addEventListener("click",() => {
        
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                        
                        clientes.forEach((elemento) => {
        
                            if(elemento.idCliente == buscador_valor || elemento.persona.nombre == buscador_valor){


                                if(elemento.estatus == "inactivo"){
                                    
                              let nombre = document.querySelector("#nombre").value ="No existe";
                              let apaterno = document.querySelector("#apaterno").value = "No existe";
                              let amaterno = document.querySelector("#amaterno").value = "No existe";
                              let genero = document.querySelector("#genero").value = "No existe";
                              let calle = document.querySelector("#calle").value = "No existe";
                              let colonia = document.querySelector("#colonia").value = "No existe";
                              let cp = document.querySelector("#cp").value = "No existe";
                              let curp = document.querySelector("#curp").value = "No existe";
                            
                              let fechaNacimiento = document.querySelector("#fnacimiento").value = "No existe";
                              let telefono = document.querySelector("#telefono").value = "No existe";
                              let correo = document.querySelector("#correo").value = "No existe";
                            


                                }else{

                                    let nombre = document.querySelector("#nombre").value = elemento.persona.nombre;
                                    let apaterno = document.querySelector("#apaterno").value = elemento.persona.apellidoPaterno;
                                    let amaterno = document.querySelector("#amaterno").value = elemento.persona.apellidoMaterno;
                                    let genero = document.querySelector("#genero").value = elemento.persona.genero;
                                    let calle = document.querySelector("#calle").value = elemento.persona.calle;
                                    let colonia = document.querySelector("#colonia").value = elemento.persona.domicilio;
                                    let cp = document.querySelector("#cp").value = elemento.persona.codigoPostal;
                                    let curp = document.querySelector("#curp").value = elemento.persona.curp;
                                    let fechaNacimiento = document.querySelector("#fnacimiento").value = elemento.persona.fechaNacimiento;
                                    let telefono = document.querySelector("#telefono").value = elemento.persona.telefono;
                                    let correo = document.querySelector("#correo").value = elemento.persona.correo;
                                    
                                  let estatus = document.querySelector("#estatus_cliente").value = elemento.estatus;
      
                                }
        
                            
                              
                           
                              
                               
                            
                            }
        
        
                        });
                        
                    })

                    let modificar = document.querySelector("#modificar_cliente");
                    modificar.addEventListener("click", () => {

                        
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                            
                        let nombre = document.querySelector("#nombre").value 
                        let apaterno = document.querySelector("#apaterno").value 
                        let amaterno = document.querySelector("#amaterno").value 
                        let genero = document.querySelector("#genero").value 
                        let calle = document.querySelector("#calle").value
                        let colonia = document.querySelector("#colonia").value 
                        let cp = document.querySelector("#cp").value 
                        let curp = document.querySelector("#curp").value 
                        let fechaNacimiento = document.querySelector("#fnacimiento").value 
                        let telefono = document.querySelector("#telefono").value
                        let correo = document.querySelector("#correo").value 
                        clientes.forEach((elemento) => {

    
                            if(elemento.idCliente == buscador_valor || elemento.nombre == buscador_valor){
                                elemento.persona.nombre = nombre;
                                elemento.persona.apellidoPaterno = apaterno;
                                elemento.persona.apellidoMaterno = amaterno;
                                elemento.persona.genero = genero;
                                elemento.persona.calle = calle;
                                elemento.persona.colonia = colonia;
                                elemento.persona.codigoPostal = cp;
                                elemento.persona.curp = curp;
                                elemento.persona.fechaNacimiento = fechaNacimiento;
                                elemento.persona.telefono = telefono;
                                elemento.persona.correo = correo;
                            }
    
    
                        })
                    })

                  
                    
                   
                

                  

                })}
            })

        })

    }


















    ///DESPLIEGUE DE MENU EMPLEADOS
    else if(e.target.matches('a#empleados')){

        fetch("home/inicio_empleados.html").then((res) => {
            return res.text();
        }).then((url) => {

                sistema.innerHTML = url;
                const menu_empleados = document.querySelector("#menu_empleados");
                let informacion = document.querySelector("#informacion");

                    menu_empleados.addEventListener("click",(e)=> {
                        ////DESPLIEGA LA SECCION DE ELIMINAR EMPLEADOS
                        if(e.target.matches("a#eliminar_empleados")){fetch("eliminar/EliminarEmp.html").then((res) => { return res.text();}).then((url) => {
                            informacion.innerHTML = url
                            let boton_buscar = document.querySelector("#boton_buscar_empleados");
                            let eliminar_producto = document.querySelector("#eliminar_empleados");
                        
                                
                            boton_buscar.addEventListener("click",() => {
                
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                empleados.forEach((elemento) => {
                
                                    if(elemento.idEmpleado == buscador_valor){
                                        
                                        let nombre = document.querySelector("#nombre").value = elemento.persona.nombre;
                                        let apaterno = document.querySelector("#apaterno").value = elemento.persona.apellidoPaterno;
                                        let amaterno = document.querySelector("#amaterno").value = elemento.persona.apellidoMaterno;
                                        let estado = document.querySelector("#estados").value = elemento.persona.estado;
                                        let calle  = document.querySelector("#calle").value = elemento.persona.domicilio;
                                        let colonia = document.querySelector("#colonia").value = elemento.persona.domicilio;
                                        let cp = document.querySelector("#cp").value = elemento.persona.codigoPostal;
                                        let fingreso = document.querySelector("#fingreso").value = elemento.fechaIngreso;
                                        let puesto = document.querySelector("#puesto").value = elemento.puesto;
                                        let salario = document.querySelector("#salario").value = elemento.salarioBruto;
                                        let cempleado = document.querySelector("#cempleado").value = elemento.codigo;
                                        let curp = document.querySelector("#curp").value = elemento.persona.curp;
                                        let fnacimiento = document.querySelector("#fnacimiento").value = elemento.persona.fechaNacimiento;
                                        let rfc = document.querySelector("#rfc").value = elemento.persona.rfc;
                                        let telefono = document.querySelector("#telefono").value = elemento.persona.telefono;
                                        let genero = document.querySelector("#genero").value = elemento.persona.genero;


                                        
                                    
                                    }
                
                                   
                
                                });
                                
                            })
                            
                            eliminar_producto.addEventListener("click", () => {
                                let buscador_valor = document.querySelector("#buscador_empleados").value;

                                empleados.forEach((elemento) => {

                                    if(elemento.idEmpleado == buscador_valor || elemento.nombre == buscador_valor){
                                        elemento.estatus = "inactivo"
                                    }
                                })

                            })


                            

                        })}
                        ///DESPLIEGUE DE SECCION AGREGAR EMPLEADOS
                        else if(e.target.matches('a#anadir_empleados')){fetch('agregar/agregar_Emp.html').then((res) => {return res.text()}).then((url) => {
                            informacion.innerHTML = url

                            let agregar = document.querySelector("#agregar_empleados");

                            agregar.addEventListener("click", () => {
                                let nombre = document.querySelector("#nombre").value
                                let apaterno = document.querySelector("#apaterno").value
                                let amaterno = document.querySelector("#amaterno").value 
                                let estado = document.querySelector("#estados").value 
                                let calle  = document.querySelector("#calle").value
                                let colonia = document.querySelector("#colonia").value 
                                let cp = document.querySelector("#cp").value 
                                let fingreso = document.querySelector("#fingreso").value 
                                let puesto = document.querySelector("#puesto").value
                                let salario = document.querySelector("#salario").value 
                                let cempleado = document.querySelector("#cempleado").value
                                let curp = document.querySelector("#curp").value
                                let fnacimiento = document.querySelector("#fnacimiento").value
                                let rfc = document.querySelector("#rfc").value 
                                let telefono = document.querySelector("#telefono").value
                                let genero = document.querySelector("#genero").value
    
                                let newEmpleado = new Empleado();
    
                                newEmpleado.idEmpleado = empleados.length + 1;
                                newEmpleado.persona.nombre = nombre;
                                newEmpleado.persona.apellidoPaterno = apaterno;
                                newEmpleado.persona.apellidoMaterno = amaterno;
                                newEmpleado.persona.estado = estado;
                                newEmpleado.persona.calle = calle;
                                newEmpleado.persona.colonia = colonia;
                                newEmpleado.persona.codigoPostal = cp;
                                newEmpleado.fechaIngreso = fingreso;
                                newEmpleado.puesto = puesto;
                                newEmpleado.salarioBruto = salario;
                                newEmpleado.codigo = cempleado;
                                newEmpleado.persona.curp =  curp;
                                newEmpleado.persona.rfc = rfc;
                                newEmpleado.persona.fechaNacimiento = fnacimiento;
                                newEmpleado.persona.telefono = telefono;
                                newEmpleado.persona.genero = genero;
                                newEmpleado.estatus = "activo";


                                empleados.push(newEmpleado);
                            })

                          

                           

                        })}

                        ///DESPLIEGUE DE SECCION BUSCAR EMPLEADOS
                        else if(e.target.matches('a#buscar_empleados')){fetch('buscar/buscar_empleados.html').then((res) => {return res.text();}).then((url) => {
                            informacion.innerHTML = url

                            let boton_buscar = document.querySelector("#boton_buscar_empleados");
                            let eliminar_producto = document.querySelector("#eliminar_empleados");
                        
                                
                            boton_buscar.addEventListener("click",() => {
                
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                empleados.forEach((elemento) => {
                
                                    if(elemento.idEmpleado == buscador_valor || elemento.nombre == buscador_valor){


                                        if(elemento.estatus == "inactivo"){
                                            let nombre = document.querySelector("#nombre").value =  "No existe";
                                            let apaterno = document.querySelector("#apaterno").value = "No existe";
                                            let amaterno = document.querySelector("#amaterno").value =  "No existe";
                                            let estado = document.querySelector("#estados").value =  "No existe";
                                            let calle  = document.querySelector("#calle").value =  "No existe";
                                            let colonia = document.querySelector("#colonia").value =  "No existe";
                                            let cp = document.querySelector("#cp").value =  "No existe";
                                            let fingreso = document.querySelector("#fingreso").value =  "No existe";
                                            let puesto = document.querySelector("#puesto").value = "No existe";
                                            let salario = document.querySelector("#salario").value =  "No existe";
                                            let cempleado = document.querySelector("#cempleado").value =  "No existe";
                                            let curp = document.querySelector("#curp").value =  "No existe";
                                            let fnacimiento = document.querySelector("#fnacimiento").value =  "No existe";
                                            let rfc = document.querySelector("#rfc").value = "No existe";
                                            let telefono = document.querySelector("#telefono").value =  "No existe";
                                            let genero = document.querySelector("#genero").value =  "No existe";
                                        }else{
                                            let nombre = document.querySelector("#nombre").value = elemento.persona.nombre;
                                            let apaterno = document.querySelector("#apaterno").value = elemento.persona.apellidoPaterno;
                                            let amaterno = document.querySelector("#amaterno").value = elemento.persona.apellidoMaterno;
                                            let estado = document.querySelector("#estados").value = elemento.persona.estado;
                                            let calle  = document.querySelector("#calle").value = elemento.persona.domicilio;
                                            let colonia = document.querySelector("#colonia").value = elemento.persona.domicilio;
                                            let cp = document.querySelector("#cp").value = elemento.persona.codigoPostal;
                                            let fingreso = document.querySelector("#fingreso").value = elemento.fechaIngreso;
                                            let puesto = document.querySelector("#puesto").value = elemento.puesto;
                                            let salario = document.querySelector("#salario").value = elemento.salarioBruto;
                                            let cempleado = document.querySelector("#cempleado").value = elemento.codigo;
                                            let curp = document.querySelector("#curp").value = elemento.persona.curp;
                                            let fnacimiento = document.querySelector("#fnacimiento").value = elemento.persona.fechaNacimiento;
                                            let rfc = document.querySelector("#rfc").value = elemento.persona.rfc;
                                            let telefono = document.querySelector("#telefono").value = elemento.persona.telefono;
                                            let genero = document.querySelector("#genero").value = elemento.persona.genero;
                                        }
                                      


                                        
                                    
                                    }
                
                                   
                
                                });
                                
                            })

                            
                            

                        })}
                        ///DESPLIEGUE MODIFICAR EMPLEADOS
                        else if(e.target.matches("a#modificar_empleados")){fetch("modificar/modificar_empleado.html").then((res) => { return res.text()}).then((url) => {
                            informacion.innerHTML = url
                            


                            let boton_buscar = document.querySelector("#boton_buscar_empleados");
                            let buscador_valor = document.querySelector("#buscador_empleados").value;
                        
                                
                            boton_buscar.addEventListener("click",() => {
                
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                empleados.forEach((elemento) => {
                
                                    if(elemento.idEmpleado == buscador_valor || elemento.persona.nombre == buscador_valor){
                                        let buscador_valor = document.querySelector("#buscador_empleados").value;
                                        let nombre = document.querySelector("#nombre").value = elemento.persona.nombre;
                                        let apaterno = document.querySelector("#apaterno").value = elemento.persona.apellidoPaterno;
                                        let amaterno = document.querySelector("#amaterno").value = elemento.persona.apellidoMaterno;
                                        let estado = document.querySelector("#estados").value = elemento.persona.estado;
                                        let calle  = document.querySelector("#calle").value = elemento.persona.domicilio;
                                        let colonia = document.querySelector("#colonia").value = elemento.persona.domicilio;
                                        let cp = document.querySelector("#cp").value = elemento.persona.codigoPostal;
                                        let fingreso = document.querySelector("#fingreso").value = elemento.fechaIngreso;
                                        let puesto = document.querySelector("#puesto").value = elemento.puesto;
                                        let salario = document.querySelector("#salario").value = elemento.salarioBruto;
                                        let cempleado = document.querySelector("#cempleado").value = elemento.codigo;
                                        let curp = document.querySelector("#curp").value = elemento.persona.curp;
                                        let fnacimiento = document.querySelector("#fnacimiento").value = elemento.persona.fechaNacimiento;
                                        let rfc = document.querySelector("#rfc").value = elemento.persona.rfc;
                                        let telefono = document.querySelector("#telefono").value = elemento.persona.telefono;
                                        let genero = document.querySelector("#genero").value = elemento.persona.genero;
        
                                        
                              


                                        
                                    
                                    }
                
                                   
                
                                });
                                
                            })

                            let mod = document.querySelector("#mod");

                            mod.addEventListener("click", () => {
                          
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                let nombre = document.querySelector("#nombre").value 
                                    let apaterno = document.querySelector("#apaterno").value
                                    let amaterno = document.querySelector("#amaterno").value 
                                    let estado = document.querySelector("#estados").value
                                    let calle  = document.querySelector("#calle").value
                                    let colonia = document.querySelector("#colonia").value 
                                    let cp = document.querySelector("#cp").value 
                                    let fingreso = document.querySelector("#fingreso").value 
                                    let puesto = document.querySelector("#puesto").value 
                                    let salario = document.querySelector("#salario").value 
                                    let cempleado = document.querySelector("#cempleado").value
                                    let curp = document.querySelector("#curp").value
                                    let fnacimiento = document.querySelector("#fnacimiento").value
                                    let rfc = document.querySelector("#rfc").value 
                                    let telefono = document.querySelector("#telefono").value
                                    let genero = document.querySelector("#genero").value

                                empleados.forEach((elemento) => {
                                    
                                    if(elemento.idEmpleado == buscador_valor || elemento.nombre == buscador_valor){

                                        elemento.persona.nombre = nombre;
                                        elemento.persona.apellidoMaterno = apaterno;
                                        elemento.persona.apellidoMaterno = amaterno;
                                        elemento.persona.estado = estado;
                                        elemento.persona.calle = calle;
                                        elemento.persona.colonia = colonia;
                                        elemento.persona.codigoPostal = cp;
                                        elemento.fechaIngreso = fingreso;
                                        elemento.puesto = puesto;
                                        elemento.salario = salario;
                                        elemento.codigo = cempleado;
                                        elemento.persona.curp = curp;
                                        elemento.persona.fechaNacimiento = fnacimiento;
                                        elemento.persona.rfc = rfc;
                                        elemento.persona.telefono = telefono;
                                        elemento.persona.genero = genero;
                                    }
                                })
                             

                                






                            })




                        })}
                    })
                    
            

        })



















    
        ///DESPLIEGUE DEL MENU PRODUCTOS
    }else if(e.target.matches('a#productos')){
        fetch('home/inicio_productos.html').then((res) => {
            return res.text();
        }).then((url) => {
            sistema.innerHTML = url;

            const menu_productos = document.querySelector("#menu_productos");
            let informacion = document.querySelector("#informacion");

            menu_productos.addEventListener("click",(e) => {

                console.log(e);

                ///DESPLIEGUE DE SECCION ELIMINAR PRODUCTOS
                if(e.target.matches('a#eliminar_productos')){fetch('eliminar/eliminar_productos.html').then((res) => {return res.text();}).then((url) => {
                    informacion.innerHTML = url;
                                          
            let boton_buscar = document.querySelector("#boton_buscar_productos_eliminar");
            let eliminar_producto = document.querySelector("#eliminar_productos_boton");
        
                
            boton_buscar.addEventListener("click",() => {

                let buscador_valor = document.querySelector("#buscador_productos_eliminar").value;
                productos.forEach((elemento) => {

                    if(elemento.idProducto == buscador_valor){
                        
                        let idProducto = document.querySelector("#idProducto").value = elemento.idProducto;
                        let nombre = document.querySelector("#nombre_producto").value = elemento.nombre;
                        let nombreGenerico = document.querySelector("#nombre_generico_producto").value = elemento.nombreGenerico;
                        let formaFarmaceutica = document.querySelector("#forma_producto").value = elemento.formaFarmaceutica;
                        let unidadMedida = document.querySelector("#medidas_producto").value = elemento.unidadMedida;
                        let presentacion = document.querySelector("#presentacion_producto").value = elemento.presentacion;
                        let principalIndicacion = document.querySelector("#indicacion_producto").value = elemento.principalIndicacion;
                        let contraindicaciones = document.querySelector("#contraindicaciones_producto").value = elemento.contraindicaciones;
                        let concentracion = document.querySelector("#concentracion_producto").value = elemento.concentracion;
                        let unidadesEnvase = document.querySelector("#unidadesE_producto").value = elemento.unidadesEnvase;
                        let precioCompra = document.querySelector("#pcompra_producto").value = elemento.precioCompra;
                        let precioVenta = document.querySelector("#pventa_producto").value = elemento.precioVenta;
                        let codigo = document.querySelector("#codigo_producto").value = elemento.codigoBarras;
                        let rutaFoto = document.querySelector("#url_foto_producto").value = elemento.rutafoto;            
                        let foto = document.querySelector("#foto");

                        foto.src= elemento.foto;
                    
                    }

                    eliminar_producto.addEventListener("click", () => {
                        
                        let buscador_valor = document.querySelector("#buscador_productos_eliminar").value;

                        productos.forEach((elemento => {
                             
                            if(elemento.idProducto == buscador_valor || elemento.nombre == buscador_valor){
                                elemento.estatus = "inactivo";
                            }
                            
                      

                        }))
                       
                    })

                });
                
            })

                })}
                ///DESPLIEGUE DE SECCION AGREGAR PRODUCTOS
                else if(e.target.matches("a#anadir_productos")){fetch('agregar/agregar_producto.html').then((res) => { return res.text();}).then((url) => {
                    informacion.innerHTML = url
                    let boton_registrar = document.querySelector("#registrar_producto");
                    boton_registrar.addEventListener('click',() => {
                        let newProducto = new Producto();
                        let nombre = document.querySelector("#nombre_producto").value;
                        let nombreGenerico = document.querySelector("#nombre_generico_producto").value;
                        let formaFarmaceutica = document.querySelector("#forma_producto").value;
                        let unidadMedida = document.querySelector("#medidas_producto").value;
                        let presentacion = document.querySelector("#presentacion_producto").value;
                        let principalIndicacion = document.querySelector("#indicacion_producto").value;
                        let contraindicaciones = document.querySelector("#contraindicaciones_producto").value;
                        let concentracion = document.querySelector("#concentracion_producto").value;
                        let unidadesEnvase = document.querySelector("#unidadesE_producto").value;
                        let precioCompra = document.querySelector("#pcompra_producto").value;
                        let precioVenta = document.querySelector("#pventa_producto").value;
                        let url_foto = document.querySelector("#url_foto_producto").value;
                        let codigo = document.querySelector("#codigo_producto").value;
                        let estatus = document.querySelector("#estatus_producto").value;
                        newProducto.idProducto = productos.length + 1;
                        newProducto.nombre = nombre;
                        newProducto.nombreGenerico = nombreGenerico;
                        newProducto.formaFarmaceutica = formaFarmaceutica;
                        newProducto.unidadMedida = unidadMedida;
                        newProducto.presentacion = presentacion;
                        newProducto.principalIndicacion = principalIndicacion;
                        newProducto.contraindicaciones = contraindicaciones;
                        newProducto.concentracion = concentracion;
                        newProducto.unidadesEnvase = unidadesEnvase;
                        newProducto.precioCompra = precioCompra;
                        newProducto.precioVenta = precioVenta;
                        newProducto.codigoBarras = codigo;
                        newProducto.rutafoto = url_foto;
                        newProducto.estatus = estatus;

                        productos.push(newProducto);

                        console.log(productos);
                        
                    })

                })}
                ///DEPSLIEGUE DE SECCION BUSCAR PRODUCTOS
                else if(e.target.matches("a#buscar_productos")){fetch('buscar/buscar_productos.html').then((res) => { return res.text();}).then((url) => {
                    informacion.innerHTML = url
                    
                    let boton_buscar_productos = document.querySelector("#boton_buscar_productos");

                
                    boton_buscar_productos.addEventListener("click",() => {
        
                       
                        let buscador_valor_producto = document.querySelector("#buscador_productos").value;
                     
                        productos.forEach((elemento) => {
        
                            if(elemento.idProducto == buscador_valor_producto || elemento.nombre == buscador_valor_producto){
                               
                               
                                if(elemento.estatus == "inactivo"){
                                    let idProducto = document.querySelector("#idProducto").value = "No existe";
                                    let nombre = document.querySelector("#nombre_producto").value = "No existe";
                                    let nombreGenerico = document.querySelector("#nombre_generico_producto").value =  "No existe";
                                    let formaFarmaceutica = document.querySelector("#forma_producto").value =  "No existe";
                                    let unidadMedida = document.querySelector("#medidas_producto").value = "No existe" ;
                                    let presentacion = document.querySelector("#presentacion_producto").value =  "No existe";
                                    let principalIndicacion = document.querySelector("#indicacion_producto").value =  "No existe";
                                    let contraindicaciones = document.querySelector("#contraindicaciones_producto").value =  "No existe";
                                    let concentracion = document.querySelector("#concentracion_producto").value =  "No existe";
                                    let unidadesEnvase = document.querySelector("#unidadesE_producto").value =  "No existe";
                                    let precioCompra = document.querySelector("#pcompra_producto").value =  "No existe";
                                    let precioVenta = document.querySelector("#pventa_producto").value =  "No existe";
                                    let codigo = document.querySelector("#codigo_producto").value =  "No existe";
                                    let rutaFoto = document.querySelector("#url_foto_producto").value =  "No existe";            
                                      
                                }else{
                                    let idProducto = document.querySelector("#idProducto").value = elemento.idProducto;
                                    let nombre = document.querySelector("#nombre_producto").value = elemento.nombre;
                                    let nombreGenerico = document.querySelector("#nombre_generico_producto").value = elemento.nombreGenerico;
                                    let formaFarmaceutica = document.querySelector("#forma_producto").value = elemento.formaFarmaceutica;
                                    let unidadMedida = document.querySelector("#medidas_producto").value = elemento.unidadMedida;
                                    let presentacion = document.querySelector("#presentacion_producto").value = elemento.presentacion;
                                    let principalIndicacion = document.querySelector("#indicacion_producto").value = elemento.principalIndicacion;
                                    let contraindicaciones = document.querySelector("#contraindicaciones_producto").value = elemento.contraindicaciones;
                                    let concentracion = document.querySelector("#concentracion_producto").value = elemento.concentracion;
                                    let unidadesEnvase = document.querySelector("#unidadesE_producto").value = elemento.unidadesEnvase;
                                    let precioCompra = document.querySelector("#pcompra_producto").value = elemento.precioCompra;
                                    let precioVenta = document.querySelector("#pventa_producto").value = elemento.precioVenta;
                                    let codigo = document.querySelector("#codigo_producto").value = elemento.codigoBarras;
                                    let rutaFoto = document.querySelector("#url_foto_producto").value = elemento.rutafoto;            
                                    let foto = document.querySelector("#foto");
                                    foto.src = elemento.foto;                     
                                
                                }
                            
                               
        
                            }
        
                        });
                        
        
                    })
                
                })}
               
                 /////////DESPLIEGUE DE MODIFICAR PRODUCTOS
                 else if(e.target.matches("a#modificar_productos")){fetch("modificar/modificar_producto.html").then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url
                

                    let boton_buscar = document.querySelector("#boton_buscar_productos");
                    boton_buscar.addEventListener("click",() => {
        
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                        productos.forEach((elemento) => {
        
                            if(elemento.idProducto == buscador_valor || elemento.nombre == buscador_valor){
                                let idProducto = document.querySelector("#idProducto").value = elemento.idProducto;
                                let nombre = document.querySelector("#nombre_producto").value = elemento.nombre;
                                let nombreGenerico = document.querySelector("#nombre_generico_producto").value = elemento.nombreGenerico;
                                let formaFarmaceutica = document.querySelector("#forma_producto").value = elemento.formaFarmaceutica;
                                let unidadMedida = document.querySelector("#medidas_producto").value = elemento.unidadMedida;
                                let presentacion = document.querySelector("#presentacion_producto").value = elemento.presentacion;
                                let principalIndicacion = document.querySelector("#indicacion_producto").value = elemento.principalIndicacion;
                                let contraindicaciones = document.querySelector("#contraindicaciones_producto").value = elemento.contraindicaciones;
                                let concentracion = document.querySelector("#concentracion_producto").value = elemento.concentracion;
                                let unidadesEnvase = document.querySelector("#unidadesE_producto").value = elemento.unidadesEnvase;
                                let precioCompra = document.querySelector("#pcompra_producto").value = elemento.precioCompra;
                                let precioVenta = document.querySelector("#pventa_producto").value = elemento.precioVenta;
                                let codigo = document.querySelector("#codigo_producto").value = elemento.codigoBarras;
                                let rutaFoto = document.querySelector("#url_foto_producto").value = elemento.rutafoto;            
                                let foto = document.querySelector("#foto");
                                foto.src = elemento.foto;                    
                            
                             
        
                            }
        
                        });
                    })

                    let modificar = document.querySelector("#modificar");
                    modificar.addEventListener("click",() => {
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                     
                        let nombre = document.querySelector("#nombre_producto").value
                        let nombreGenerico = document.querySelector("#nombre_generico_producto").value
                        let formaFarmaceutica = document.querySelector("#forma_producto").value
                        let unidadMedida = document.querySelector("#medidas_producto").value 
                        let presentacion = document.querySelector("#presentacion_producto").value 
                        let principalIndicacion = document.querySelector("#indicacion_producto").value 
                        let contraindicaciones = document.querySelector("#contraindicaciones_producto").value 
                        let concentracion = document.querySelector("#concentracion_producto").value 
                        let unidadesEnvase = document.querySelector("#unidadesE_producto").value 
                        let precioCompra = document.querySelector("#pcompra_producto").value 
                        let precioVenta = document.querySelector("#pventa_producto").value
                        let codigo = document.querySelector("#codigo_producto").value
                        let rutaFoto = document.querySelector("#url_foto_producto").value           
                        let foto = document.querySelector("#foto");
                        let estatus = document.querySelector("#estatus_producto").value
                        foto.src = foto;  
                        
                      
                        productos.forEach((elemento) => {

                            if(elemento.idProducto == buscador_valor || elemento.nombre == buscador_valor){
                                elemento.nombre = nombre;
                                elemento.nombreGenerico = nombreGenerico;
                                elemento.formaFarmaceutica = formaFarmaceutica;
                                elemento.unidadMedida = unidadMedida;
                                elemento.presentacion = presentacion;
                                elemento.principalIndicacion = principalIndicacion;
                                elemento.contraindicaciones = contraindicaciones;
                                elemento.concentracion = concentracion;
                                elemento.unidadesEnvase = unidadesEnvase;
                                elemento.precioCompra = precioCompra;
                                elemento.precioVenta = precioVenta;
                                elemento.codigoBarras = codigo;
                                elemento.rutafoto = rutaFoto;
                                elemento.estatus = estatus;
                                elemento.foto = rutaFoto;
                            }
        
                        })
                    })
                
                })}

            })
        })
    }












    ////DESPLIEGUE DE MENU SUCURSAL
    else if(e.target.matches('a#sucursal')){
        fetch('home/inicio_sucursales.html').then((res) => {
            return res.text();
        }).then((url) => {
            sistema.innerHTML = url

            const menu_sucursales = document.querySelector("#menu_sucursales");
            const informacion = document.querySelector("#informacion");

            menu_sucursales.addEventListener("click", (e) => {
                console.log(e);
                ///DESPLIEGUE DE SECCION ELIMINAR SUCURSALES
                if(e.target.matches("a#eliminar_sucursales")){fetch('eliminar/eliminar_sucursal.html').then((res) => {return res.text();}).then((url) => {
                    informacion.innerHTML = url;
                

                             
            let boton_buscar = document.querySelector("#boton_buscar_eliminar_sucursal");
            let eliminar_boton = document.querySelector("#eliminar_sucursal_boton")
                
            boton_buscar.addEventListener("click",() => {

                let buscador_valor = document.querySelector("#buscador_sucursal_eliminar").value;

                sucursales.forEach((elemento) => {


                    if(elemento.idSucursal == buscador_valor){
                        
                
                        let nombre = document.querySelector("#eliminar_nombre_sucursal").value = elemento.nombre;
                        let titular = document.querySelector("#eliminar_titular_sucursal").value = elemento.titular;
                        let rfc = document.querySelector("#eliminar_rfc_sucursal").value = elemento.rfc;
                        let estado = document.querySelector("#eliminar_estado_sucursal").value = elemento.estado;
                        let ciudad = document.querySelector("#eliminar_ciudad_sucursal").value = elemento.ciudad;
                        let calle = document.querySelector("#eliminar_calle_sucursal").value = elemento.domicilio;
                        let colonia = document.querySelector("#eliminar_colonia_sucursal").value = elemento.colonia;
                        let cp = document.querySelector("#eliminar_cp_sucursal").value = elemento.cp;
                        let latitud = document.querySelector("#eliminar_latitud_sucursal").value = elemento.latitud;
                        let longitud = document.querySelector("#eliminar_longitud_sucursal").value = elemento.longitud;
                        let telefono = document.querySelector("#eliminar_telefono_sucursal").value = elemento.telefono;
                        let estatus = document.querySelector("#eliminar_estatus_sucursal").value = elemento.estatus;
                        
                      

                    }

                });

            })

            eliminar_boton.addEventListener("click", () => {
                let buscador_valor = document.querySelector("#buscador_sucursal_eliminar").value;
                let estatus = document.querySelector("#eliminar_estatus_sucursal").value

                sucursales.forEach((elemento) => {

                    if(elemento.idSucursal == buscador_valor || elemento.nombre == buscador_valor){

                       elemento.estatus = "inactivo"
                       

                    }

                })
               

                
                
            })
             
                })}
                ///DESPLIEGUE DE SECCION AGREGAR SUCURSALES
                else if(e.target.matches('a#anadir_sucursales')){fetch('agregar/agregar_sucursal.html').then((res) => {return res.text();}).then((url) => {
                    informacion.innerHTML = url
                    
                    let registrar = document.querySelector("#agregar");

                    registrar.addEventListener("click",() => {

                        
                        let nombre = document.querySelector("#insertar_nombre_sucursal").value; 
                        let titular = document.querySelector("#insertar_titular_sucursal").value; 
                        let rfc = document.querySelector("#insertar_rfc_sucursal").value; 
                        let estado = document.querySelector("#insertar_estado_sucursal").value;
                        let ciudad = document.querySelector("#insertar_ciudad_sucursal").value;
                        let calle = document.querySelector("#insertar_calle_sucursal").value; 
                        let colonia = document.querySelector("#insertar_colonia_sucursal").value;
                        let cp = document.querySelector("#insertar_cp_sucursal").value;
                        let latitud = document.querySelector("#insertar_latitud_sucursal").value; 
                        let longitud = document.querySelector("#insertar_longitud_sucursal").value; 
                        let telefono = document.querySelector("#insertar_telefono_sucursal").value;
                        let estatus = document.querySelector("#insertar_estatus_sucursal").value;
                        

                        let sucursalNew = new Sucursal();
                        sucursalNew.idSucursal = sucursales.length + 1; 
                        sucursalNew.nombre = nombre;
                        sucursalNew.titular = titular;
                        sucursalNew.rfc = rfc;
                        sucursalNew.estado = estado;
                        sucursalNew.ciudad = ciudad;
                        sucursalNew.calle = calle;
                        sucursalNew.colonia = colonia;
                        sucursalNew.codigoPostal = cp;
                        sucursalNew.latitud = latitud;
                        sucursalNew.longitud = longitud;
                        sucursalNew.telefono = telefono;
                        sucursalNew.estus = estatus;


                        
                        sucursales.push(sucursalNew);
                        return sucursales;

                    })
                
                })}
                ///DESPLIEGUE DE SECCION BUSCAR SUCURSALES
                else if(e.target.matches('a#buscar_sucursales')){fetch('buscar/buscar_sucursales.html').then((res) => {return res.text();}).then((url) => {
                    informacion.innerHTML = url
                    
                    
            let boton_buscar = document.querySelector("#boton_buscar_sucursal");

                
            boton_buscar.addEventListener("click",() => {


                let buscador_valor = document.querySelector("#buscador_sucursal").value;
                sucursales.forEach((elemento) => {

                    if(elemento.idSucursal == buscador_valor){
                        if(elemento.estatus == "inactivo"){
                            let idSucursal = document.querySelector("#idSucursal").value = "No existe";
                        let nombre = document.querySelector("#nombre_sucursal").value = "No existe";
                        let titular = document.querySelector("#titular_sucursal").value = "No existe";
                        let rfc = document.querySelector("#rfc_sucursal").value = "No existe";
                        let estado = document.querySelector("#estado_sucursal").value = "No existe";
                        let ciudad = document.querySelector("#ciudad_sucursal").value = "No existe";
                        let calle = document.querySelector("#calle_sucursal").value = "No existe";
                        let colonia = document.querySelector("#colonia_sucursal").value = "No existe";
                        let cp = document.querySelector("#cp_sucursal").value = elemento.cp;
                        let latitud = document.querySelector("#latitud_sucursal").value = "No existe";
                        let longitud = document.querySelector("#longitud_sucursal").value = "No existe";
                        let telefono = document.querySelector("#telefono_sucursal").value = "No existe";

                        }else{
                            let idSucursal = document.querySelector("#idSucursal").value = elemento.idSucursal;
                            let nombre = document.querySelector("#nombre_sucursal").value = elemento.nombre;
                            let titular = document.querySelector("#titular_sucursal").value = elemento.titular;
                            let rfc = document.querySelector("#rfc_sucursal").value = elemento.rfc;
                            let estado = document.querySelector("#estado_sucursal").value = elemento.estado;
                            let ciudad = document.querySelector("#ciudad_sucursal").value = elemento.ciudad;
                            let calle = document.querySelector("#calle_sucursal").value = elemento.domicilio;
                            let colonia = document.querySelector("#colonia_sucursal").value = elemento.colonia;
                            let cp = document.querySelector("#cp_sucursal").value = elemento.cp;
                            let latitud = document.querySelector("#latitud_sucursal").value = elemento.latitud;
                            let longitud = document.querySelector("#longitud_sucursal").value = elemento.longitud;
                            let telefono = document.querySelector("#telefono_sucursal").value = elemento.telefono;
    
                        }
                        
                        

                        

                        
                        
        
                    }

                });
            })
                })}

                else if(e.target.matches("a#modificar_sucursales")){fetch("modificar/modificar_sucursal.html").then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url
                    
                    let boton_buscar = document.querySelector("#boton_buscar_sucursal");
            boton_buscar.addEventListener("click",() => {

                let buscador_valor = document.querySelector("#buscador_sucursal").value;
                sucursales.forEach((elemento) => {

                    if(elemento.idSucursal == buscador_valor){

                        let nombre = document.querySelector("#nombre_sucursal").value = elemento.nombre;
                        let titular = document.querySelector("#titular_sucursal").value = elemento.titular;
                        let rfc = document.querySelector("#rfc_sucursal").value = elemento.rfc;
                        let estado = document.querySelector("#estado_sucursal").value = elemento.estado;
                        let ciudad = document.querySelector("#ciudad_sucursal").value = elemento.ciudad;
                        let calle = document.querySelector("#calle_sucursal").value = elemento.domicilio;
                        let colonia = document.querySelector("#colonia_sucursal").value = elemento.colonia;
                        let cp = document.querySelector("#cp_sucursal").value = elemento.cp;
                        let latitud = document.querySelector("#latitud_sucursal").value = elemento.latitud;
                        let longitud = document.querySelector("#longitud_sucursal").value = elemento.longitud;
                        let telefono = document.querySelector("#telefono_sucursal").value = elemento.telefono;
                        
                        if(elemento.estatus == true){
                            let estatus = document.querySelector("#estatus_sucursal").value = "activo";
                        }else{
                            let estatus = document.querySelector("#estatus_sucursal").value = "inactivo";
                        }
                    }
                });
            })
            let modificar = document.querySelector("#modificar");
            modificar.addEventListener("click",() => {
                let buscador_valor = document.querySelector("#buscador_sucursal").value;
                
                let nombre = document.querySelector("#nombre_sucursal").value; 
                let titular = document.querySelector("#titular_sucursal").value; 
                let rfc = document.querySelector("#rfc_sucursal").value; 
                let estado = document.querySelector("#estado_sucursal").value;
                let ciudad = document.querySelector("#ciudad_sucursal").value;
                let calle = document.querySelector("#calle_sucursal").value; 
                let colonia = document.querySelector("#colonia_sucursal").value;
                let cp = document.querySelector("#cp_sucursal").value;
                let latitud = document.querySelector("#latitud_sucursal").value; 
                let longitud = document.querySelector("#longitud_sucursal").value; 
                let telefono = document.querySelector("#telefono_sucursal").value;
                let estatus = document.querySelector("#estatus_sucursal").value;

                sucursales.forEach((elemento) => {

                    if(elemento.idSucursal == buscador_valor){
                        elemento.nombre = nombre;
                        elemento.titular = titular;
                        elemento.rfc = rfc;
                        elemento.estado = estado;
                        elemento.ciudad = ciudad;
                        elemento.calle = calle;
                        elemento.colonia = colonia;
                        elemento.codigoPostal = cp;
                        elemento.latitud = latitud;
                        elemento.longitud = longitud;
                        elemento.telefono = telefono;
                        elemento.estus = estatus;


                    }


                })


                


            })

                })}
            })
        })

    }
  
},false)





