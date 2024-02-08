



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


async function peticionSucursal(){

    try{
    const res = await fetch("http://localhost:8080/Api_da/api/db/sucursales");
    const response = await res.json();
    sucursales = response
    }catch(e){
        console.log(e);
    }   
}

peticionSucursal();

///CREACION DE CLASE PRODUCTO Y PETICION FETCH


async function peticionEmpleados(){
    try{

        const res =  await fetch("http://localhost:8080/Api_da/api/db/empleados");
        const response = await res.json();
        empleados = response;
    }
    catch(e){
        console.log(e);
    }
    
}
peticionEmpleados();





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



async function peticionCliente(){

    try{

        const res =  await fetch("http://localhost:8080/Api_da/api/db/clientes");
        const response = await res.json();
        clientes = response;
    }
    catch(e){
        console.log(e);
    }
  
}

peticionCliente();

async function peticionProducto(){

    try{
        const res = await fetch("http://localhost:8080/Api_da/api/db/productos");
        const response = await res.json();
        productos = response;

    }catch(e){
        console.log(e);
    }
}

peticionProducto();
class Cliente{

    constructor(idCliente, estatus,persona,fechaRegistro, email){
        this.idCliente = null,
        this.estatus = "",
        this.fechaRegistro = "";
        this.email = "";
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
            console.log(clientes)
            
          
            const menu_clientes = document.querySelector("#menu_clientes");
            const informacion = document.querySelector("#informacion");

            menu_clientes.addEventListener("click", (e) => {
                ///DESPLIEGUE DE SECCION ELIMINAR CLIENTES
                if(e.target.matches("a#eliminar_clientes")){ fetch("eliminar/eliminar_clientes.html").then((res) => { return res.text();}).then((url) => {
                    informacion.innerHTML = url
                           
                            
                    let boton_buscar = document.querySelector("#boton_buscar_clientes");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let eliminar_cliente = document.querySelector("#eliminar_cliente");
                    
                    console.log(clientes);
                    let fila = document.querySelector("#fila");
                    let contador = 1;


       
                    

                    const mostrar = (indice, arreglo) => {
                        let fnacimiento  = arreglo[indice].fechaNacimiento;
                        let partes = fnacimiento.split(" ");
                        let fechaFinal = partes.map((e) => {
                            return e.replace(/[\s,]+/g, '').trim();
                        })
                     
                        let mes;
                        if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}
                        let fechaNacimiento = document.querySelector("#fnacimiento").value = `${fechaFinal[1]}/${mes}/${fechaFinal[2]}`;

                        let fregistro  = arreglo[indice].fechaRegistro;
                        let partesR = fregistro.split(" ");
                        let fechaFinalR = partesR.map((e) => {
                            return e.replace(/[\s,]+/g, '').trim();
                        })
                     
                        let mesR;
                    
                        if(fechaFinalR[0] == "ene"){mesR = "01"}else if(fechaFinalR[0] == "feb"){mesR = "02"}else if(fechaFinalR[0] == "mar"){mesR = "03"}else if(fechaFinalR[0] == "abr"){mesR = "04"}else if(fechaFinalR[0] == "may"){mesR = "05"}else if(fechaFinalR[0] == "jun"){mesR = "06"}else if(fechaFinalR[0] == "jul"){mesR = "07"}else if(fechaFinalR[0] == "ago"){mesR = "08"}else if(fechaFinalR[0] == "sep"){mesR = "09"}else if(fechaFinalR[0] == "oct"){mesR = "10"}else if(fechaFinalR[0] == "nov"){mesR = "11"}else if(fechaFinalR[0] == "dic"){mesR = "12"}
                        let fechaRegistro = document.querySelector("#fregistro").value = `${fechaFinalR[1]}/${mesR}/${fechaFinalR[2]}`;

                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                        let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                        let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                        let genero = document.querySelector("#genero").value = arreglo[indice].genero;
                        let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                        let curp= document.querySelector("#curp").value = arreglo[indice].curp;
                        let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                        let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                        let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                        let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                        let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                        let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                        let sucursal = document.querySelector("#email").value = arreglo[indice].email;
                        let puesto = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        let salarioBruto = document.querySelector("#idCliente").value = arreglo[indice].idCliente;                                   
                    }


                    
                    eliminar_cliente.addEventListener("click", () => {

                      
                        
                   
                        let idClienteH = document.querySelector("#idCliente").value;
                        let clienteid = parseInt(idClienteH);
                    

                        let data = {
                            idCliente: clienteid
                          };

                          const queryStrings = new URLSearchParams(data).toString();
                          const options = {
                            method: "POST",
                            headers: {
                              "Content-type": "application/x-www-form-urlencoded"
                            },
                            body: queryStrings
                          }

                          try {
                            fetch("http://localhost:8080/Api_da/api/db/cliente/eliminar", options)
                                .then(res => {
                                    return res.text();
                                })
                                .then((resp) => {
                                    console.log(resp);
                                })
                               
                        } catch (e) {
                            console.log(e);
                        }
                        
                    });
                 
                    boton_buscar.addEventListener("click",() => {
                        
                        console.log("adawdawd");
                      
                        let buscador_valor = document.querySelector("#buscador_clientes").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  clientes.filter((elemento) => {
                                let cliente_id = elemento.idCliente; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                                let apellidoPaterno = elemento.apellidoPaterno;
                                let apellidoMaterno = elemento.apellidoMaterno;
                                let buscador = buscador_valor.toLowerCase();
                                if(cliente_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.idCliente}</td>
                                    <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                    <td>${elemento.telefono}</td>
                                    <td>${elemento.email}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");


                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,coincidencias);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, coincidencias);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, coincidencias);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, coincidencias);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, coincidencias);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, coincidencias);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, coincidencias);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, coincidencias);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, coincidencias);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, coincidencias);
                });
                               

                                
                            
                            
        
                           
        
                      
                        
                    })
                 
              
                   
                    boton_actualizar.addEventListener("click", async() => {
                  
                        let buscador_valor = document.querySelector("#buscador_clientes").value = "";
                        fila.innerHTML = "";
                        await peticionCliente();
                        console.log(empleados);    
                        crearTabla();

                    });



                    function crearTabla(){
                        let contador = 1;
                        
                        clientes.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.idCliente}</td>
                        <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                        <td>${empl.telefono}</td>
                        <td>${empl.email}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");

                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,clientes);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, clientes);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, clientes);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, clientes);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, clientes);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, clientes);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, clientes);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, clientes);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, clientes);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, clientes);
                        });


                    }
                  
                    crearTabla();
                        
                     
                     
                    })}
                ///DESPLIEGUE DE SECCION AGREGAR CLIENTES
                else if(e.target.matches('a#anadir_clientes')){fetch('agregar/agregar_cliente.html').then((res) => { return res.text();}).then((url) => { 
                    informacion.innerHTML = url

                    let boton_buscar = document.querySelector("#boton_buscar_clientes");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let agregar_cliente = document.querySelector("#agregar_cliente");
                    let fila = document.querySelector("#fila");
                    let empleadosAct = [];
                    let contador = 1;

                    let agregar = document.querySelector("#agregar_cliente");

                    agregar.addEventListener("click", () => {
                      let nameH = document.querySelector("#nombre").value;
                      let apaternoH = document.querySelector("#apaterno").value;
                      let amaternoH = document.querySelector("#amaterno").value;
                      let generoH = document.querySelector("#genero").value;
                      let fnacimientoH = document.querySelector("#fnacimiento").value;
                      let rfcH = document.querySelector("#rfc").value;
                      let curpH = document.querySelector("#curp").value;
                      let domicilioH = document.querySelector("#domicilio").value;
                      let cpH = document.querySelector("#cp").value;
                      let ciudadH = document.querySelector("#ciudad").value;
                      let estadoH = document.querySelector("#estado").value;
                      let telefonoH = document.querySelector("#telefono").value;
                      let fotoH = document.querySelector("#foto").value;
                      let emailH = document.querySelector("#email").value;
                      
                 
                     
                        let data = {
                            nombre: nameH,
                            paterno: apaternoH,
                            materno: amaternoH,
                            genero: generoH,
                            fechaNacimiento: fnacimientoH,
                            rfc: rfcH,
                            curp: curpH,
                            domicilio: domicilioH,
                            cp:cpH,
                            ciudad:ciudadH,
                            estado: estadoH,
                            telefono: telefonoH,
                            foto:fotoH,
                            email: emailH                           
                        };
                        let URL = "http://localhost:8080/Api_da/api/db/cliente/agregar";
                        const queryStrings = new URLSearchParams(data).toString();
                        const options = {
                          method: "POST",
                          headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                          },
                          body: queryStrings
                        }


                        fetch(URL, options)
                            .then(res => {
                                return res.text();

                            }).then((resp) => {
                                console.log(resp);
                            })


                    })

                    const mostrar = (indice, arreglo) => {

                        
                        let fnacimiento  = arreglo[indice].fechaNacimiento;
                        let partes = fnacimiento.split(" ");
                        let fechaFinal = partes.map((e) => {
                            return e.replace(/[\s,]+/g, '').trim();
                        })
                     
                        let mes;
                        console.log(fechaFinal);
                        if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                        let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                        let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                        let genero = document.querySelector("#genero").value = arreglo[indice].genero;
     
                        let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                        let curp= document.querySelector("#curp").value = arreglo[indice].curp;
                        let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                        let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                        let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                        let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                        let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                        let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                        let sucursal = document.querySelector("#email").value = arreglo[indice].email;
                        let rol = document.querySelector("#fregistro").value = arreglo[indice].fechaRegistro;
                        let puesto = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        let salarioBruto = document.querySelector("#idCliente").value = arreglo[indice].idCliente;          
                    }

                    boton_buscar.addEventListener("click",() => {
           
                      
                        let buscador_valor = document.querySelector("#buscador_clientes").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  clientes.filter((elemento) => {
                                let cliente_id = elemento.idCliente; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                                let apellidoPaterno = elemento.apellidoPaterno;
                                let apellidoMaterno = elemento.apellidoMaterno;
                                let buscador = buscador_valor.toLowerCase();
                                if(cliente_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.idCliente}</td>
                                    <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                    <td>${elemento.telefono}</td>
                                    <td>${elemento.email}</td>
                                    <td>${elemento.activo}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");

                    })

                      
                    boton_actualizar.addEventListener("click", async() => {
                        let buscador_valor = document.querySelector("#buscador_clientes").value = "";
                        fila.innerHTML = "";
                        await peticionCliente();
                     
                        crearTabla();

                    });

                    function crearTabla(){
                        let contador = 1;
                        
                        clientes.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.idCliente}</td>
                        <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                        <td>${empl.telefono}</td>
                        <td>${empl.email}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");
                    }
                  
                    crearTabla();
                
                })}
                ///DEPSLIEGUE DE SECCION BUSCAR CLIENTES
                else if(e.target.matches('a#buscar_clientes')){fetch('buscar/buscar_clientes.html').then((res) => { return res.text()}).then((url) => {
                
                    informacion.innerHTML = url
                      


                            let boton_buscar = document.querySelector("#boton_buscar_clientes");
                            let boton_actualizar = document.querySelector("#boton_actualizar");
                            let buscar_clientes = document.querySelector("#buscar_cliente");
           
                            let fila = document.querySelector("#fila");
                            let empleadosAct = [];
                            let contador = 1;
     
                            const mostrar = (indice, arreglo) => {

                                
                                let fnacimiento  = arreglo[indice].fechaNacimiento;
                                let partes = fnacimiento.split(" ");
                                let fechaFinal = partes.map((e) => {
                                    return e.replace(/[\s,]+/g, '').trim();
                                })
                             
                                let mes;
                                console.log(fechaFinal);
                                if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}

                                let fregistro  = arreglo[indice].fechaRegistro;
                                let partesR = fregistro.split(" ");
                                let fechaFinalR = partesR.map((e) => {
                                return e.replace(/[\s,]+/g, '').trim();
                                })
                     
                        let mesR;
                    
                        if(fechaFinalR[0] == "ene"){mesR = "01"}else if(fechaFinalR[0] == "feb"){mesR = "02"}else if(fechaFinalR[0] == "mar"){mesR = "03"}else if(fechaFinalR[0] == "abr"){mesR = "04"}else if(fechaFinalR[0] == "may"){mesR = "05"}else if(fechaFinalR[0] == "jun"){mesR = "06"}else if(fechaFinalR[0] == "jul"){mesR = "07"}else if(fechaFinalR[0] == "ago"){mesR = "08"}else if(fechaFinalR[0] == "sep"){mesR = "09"}else if(fechaFinalR[0] == "oct"){mesR = "10"}else if(fechaFinalR[0] == "nov"){mesR = "11"}else if(fechaFinalR[0] == "dic"){mesR = "12"}
                        let fechaRegistro = document.querySelector("#fregistro").value = `${fechaFinalR[1]}/${mesR}/${fechaFinalR[2]}`;
                                let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                                let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                                let genero = document.querySelector("#genero").value = arreglo[indice].genero;
                                let fechaNacimiento = document.querySelector("#fnacimiento").value = `${fechaFinal[1]}/${mes}/${fechaFinal[2]}`
                                let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                                let curp= document.querySelector("#curp").value = arreglo[indice].curp;
                                let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                                let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                                let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                                let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                                let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                                let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                                let email = document.querySelector("#email").value = arreglo[indice].email;
                                let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                                let idCliente = document.querySelector("#idCliente").value = arreglo[indice].idCliente; 
                                           
                            }

                         
                            boton_buscar.addEventListener("click",() => {
                                
                   
                              
                                let buscador_valor = document.querySelector("#buscador_clientes").value;
                                        
                                    fila.innerHTML = "";
                             
                                    
                                   let coincidencias =  clientes.filter((elemento) => {
                                        let cliente_id = elemento.idCliente; 
                                        let estatus = elemento.estatus;
                                        let nombre = elemento.nombre;
                                        let apellidoPaterno = elemento.apellidoPaterno;
                                        let apellidoMaterno = elemento.apellidoMaterno;
                                        let buscador = buscador_valor.toLowerCase();
                                        if(cliente_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                            return elemento;
                                        }
                                    });
                                
                                    let contador = 1;
                                    coincidencias.forEach((elemento) => {
                                     

                                        if(contador <= 10){
                                            let info = `<tr id= "filaSelected${contador}">
                                            <td>${elemento.idCliente}</td>
                                            <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                            <td>${elemento.telefono}</td>
                                            <td>${elemento.email}</td>
                                            <td>${elemento.estatus}</td>
                                            </tr>`
                                            fila.innerHTML += info;
                                            contador++;
    
                                        }
                                                           
                                           
                                      

                                    });

                                    console.log(coincidencias)
                              
                                   
                                                                   
                                    let filaMostrar1 = document.querySelector("#filaSelected1");
                                    let filaMostrar2 = document.querySelector("#filaSelected2");
                                    let filaMostrar3 = document.querySelector("#filaSelected3");
                                    let filaMostrar4 = document.querySelector("#filaSelected4");
                                    let filaMostrar5 = document.querySelector("#filaSelected5");
                                    let filaMostrar6 = document.querySelector("#filaSelected6");
                                    let filaMostrar7 = document.querySelector("#filaSelected7");
                                    let filaMostrar8 = document.querySelector("#filaSelected8");
                                    let filaMostrar9 = document.querySelector("#filaSelected9");
                                    let filaMostrar10 = document.querySelector("#filaSelected10");


                                    
                       filaMostrar1.addEventListener("click", () => {
                            mostrar(0,coincidencias);
                       });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, coincidencias);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, coincidencias);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, coincidencias);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, coincidencias);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, coincidencias);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, coincidencias);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, coincidencias);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, coincidencias);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, coincidencias);
                        });
                                       

                                        
                                    
                                    
                
                                   
                
                              
                                
                            })
                         
                             
                            boton_actualizar.addEventListener("click", async() => {
                                let buscador_valor = document.querySelector("#buscador_clientes").value = "";
                                fila.innerHTML = "";
                                await peticionCliente();
                         
                                crearTabla();

                            });

                            function crearTabla(){
                                let contador = 1;
                                
                                clientes.forEach((empl) => {
                                    
                            if(contador <= 10){
                                let info = `<tr id= "filaSelected${contador}">
                                <td>${empl.idCliente}</td>
                                <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                                <td>${empl.telefono}</td>
                                <td>${empl.email}</td>
                                <td>${empl.estatus}</td>
                                </tr>`
                                fila.innerHTML += info;
                            }
                                
                                contador++;
                            
                                   
                                    
                                });

                               
                                let filaMostrar1 = document.querySelector("#filaSelected1");
                                let filaMostrar2 = document.querySelector("#filaSelected2");
                                let filaMostrar3 = document.querySelector("#filaSelected3");
                                let filaMostrar4 = document.querySelector("#filaSelected4");
                                let filaMostrar5 = document.querySelector("#filaSelected5");
                                let filaMostrar6 = document.querySelector("#filaSelected6");
                                let filaMostrar7 = document.querySelector("#filaSelected7");
                                let filaMostrar8 = document.querySelector("#filaSelected8");
                                let filaMostrar9 = document.querySelector("#filaSelected9");
                                let filaMostrar10 = document.querySelector("#filaSelected10");
    
                                filaMostrar1.addEventListener("click", () => {
                                    mostrar(0,clientes);
                                });
                                filaMostrar2.addEventListener("click", () => {
                                    mostrar(1, clientes);
                                });
                                filaMostrar3.addEventListener("click", () => {
                                    mostrar(2, clientes);
                                });
                                filaMostrar4.addEventListener("click", () => {
                                    mostrar(3, clientes);
                                });
                                filaMostrar5.addEventListener("click", () => {
                                    mostrar(4, clientes);
                                });
                                filaMostrar6.addEventListener("click", () => {
                                    mostrar(5, clientes);
                                });
                                filaMostrar7.addEventListener("click", () => {
                                    mostrar(6, clientes);
                                });
                                filaMostrar8.addEventListener("click", () => {
                                    mostrar(7, clientes);
                                });
                                filaMostrar9.addEventListener("click", () => {
                                    mostrar(8, clientes);
                                });
                                filaMostrar10.addEventListener("click", () => {
                                    mostrar(9, clientes);
                                });
    

                            }
                          
                            crearTabla();

                
                })}

                /// DESPLIEGUE DE SECCION MODIFICAR CLIENTES
                else if(e.target.matches("a#modificar_clientes")){fetch("modificar/modificar_cliente.html").then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url;


                    let boton_buscar = document.querySelector("#boton_buscar_clientes");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let modificar_empleado = document.querySelector("#modificar_cliente");
                    
                    let fila = document.querySelector("#fila");
                    let empleadosAct = [];
                    let contador = 1;

                    const mostrar = (indice, arreglo) => {

                        let fnacimiento  = arreglo[indice].fechaNacimiento;
                        let partes = fnacimiento.split(" ");
                        let fechaFinal = partes.map((e) => {
                            return e.replace(/[\s,]+/g, '').trim();
                        })
                        let mes;
                        console.log(fechaFinal);
                        if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                        let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                        let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                        let genero = document.querySelector("#genero").value = arreglo[indice].genero;
                        let fechaNacimiento = document.querySelector("#fnacimiento").value = `${fechaFinal[1]}/${mes}/${fechaFinal[2]}` 
                        let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                        let curp= document.querySelector("#curp").value = arreglo[indice].curp;
                        let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                        let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                        let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                        let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                        let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                        let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                        let email = document.querySelector("#email").value = arreglo[indice].email;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        let idCliente = document.querySelector("#idCliente").value = arreglo[indice].idCliente;      
                    }
                    
               

                 
                    boton_buscar.addEventListener("click",() => {
                        
      
                      
                        let buscador_valor = document.querySelector("#buscador_clientes").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  clientes.filter((elemento) => {
                                let cliente_id = elemento.idCliente; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                                let apellidoPaterno = elemento.apellidoPaterno;
                                let apellidoMaterno = elemento.apellidoMaterno;
                                let buscador = buscador_valor.toLowerCase();
                                if(cliente_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.idCliente}</td>
                                    <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                    <td>${elemento.telefono}</td>
                                    <td>${elemento.email}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");


                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,clientes);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, clientes);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, clientes);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, clientes);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, clientes);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, clientes);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, clientes);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, clientes);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, clientes);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, clientes);
                });
                               

                                
                            
                            
        
                           
        
                      
                        
                    })

                    modificar_empleado.addEventListener("click",() => {
                    
                        let nombreH = document.querySelector("#nombre").value;
                        let apaternoH = document.querySelector("#apaterno").value;
                        let amaternoH = document.querySelector("#amaterno").value;
                        let generoH = document.querySelector("#genero").value;
                        let fnacimientoH  = document.querySelector("#fnacimiento").value;
                        let rfcH = document.querySelector("#rfc").value;
                        let curpH = document.querySelector("#curp").value;
                        let domicilioH = document.querySelector("#domicilio").value;
                        let cpH = document.querySelector("#cp").value;
                        let ciudadH = document.querySelector("#ciudad").value;
                        let estadoH = document.querySelector("#estado").value;
                        let telefonoH = document.querySelector("#telefono").value;
                        let fotoH = document.querySelector("#foto").value;
                        let emailH = document.querySelector("#email").value;
                        let estatusH = document.querySelector("#estatus").value;
                        let idClienteH = document.querySelector("#idCliente").value;
                        
                        let data = {

                            idCliente: idClienteH,
                            nombre: nombreH,
                            paterno: apaternoH,
                            materno: amaternoH,
                            genero: generoH,
                            fechaNacimiento: fnacimientoH,
                            rfc: rfcH,
                            curp: curpH,
                            domicilio: domicilioH,
                            codigoPostal: cpH,
                            ciudad: ciudadH,
                            estado: estadoH,
                            telefono: telefonoH,
                            foto: fotoH,
                            email: emailH
                        };

                        const queryStrings = new URLSearchParams(data).toString();
                        const options = {
                          method: "POST",
                          headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                          },
                          body: queryStrings
                        }

                        fetch("http://localhost:8080/Api_da/api/db/cliente/modificar", options)
                        .then((res) => {return res.text()})
                        .then((resp) => {
                            console.log(resp);
                        })


                    })
                      boton_actualizar.addEventListener("click", async() => {
                        let buscador_valor = document.querySelector("#buscador_clientes").value = "";
                        fila.innerHTML = "";
                        await peticionCliente();   
                        crearTabla();

                    });
                   

                    function crearTabla(){
                        let contador = 1;
                        
                        clientes.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.idCliente}</td>
                        <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                        <td>${empl.telefono}</td>
                        <td>${empl.email}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");

                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,clientes);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, clientes);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, clientes);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, clientes);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, clientes);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, clientes);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, clientes);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, clientes);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, clientes);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, clientes);
                        });


                    }
                  
                    crearTabla();
        
        
                


                 
                  
                    
                   
                

                  

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
                            let boton_actualizar = document.querySelector("#boton_actualizar");
                            let eliminar_cliente = document.querySelector("#eliminar_empleado");
                            let fila = document.querySelector("#fila");
                            let contador = 1;
        
        
               
                            
        
                            const mostrar = (indice, arreglo) => {
                              

                                let fnacimiento  = arreglo[indice].fechaNacimiento;
                                let partes = fnacimiento.split(" ");
                                let fechaFinal = partes.map((e) => {
                                    return e.replace(/[\s,]+/g, '').trim();
                                })
                             
                                let mes;
                                console.log(fechaFinal);
                                if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}
                                let fechaNacimiento = document.querySelector("#fnacimiento").value = `${fechaFinal[1]}/${mes}/${fechaFinal[2]}` 
                                let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                                let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                                let genero = document.querySelector("#genero").value = arreglo[indice].genero;
                                let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                                let curp= document.querySelector("#curp").value = arreglo[indice].curp;
                                let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                                let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                                let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                                let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                                let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                                let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                                let sucursal = document.querySelector("#idSucursal").value = arreglo[indice].idSucursal;
                                let rol = document.querySelector("#rol").value = arreglo[indice].rol;
                                let puesto = document.querySelector("#puesto").value = arreglo[indice].puesto;
                                let salarioBruto = document.querySelector("#salarioBruto").value = arreglo[indice].salarioBruto;  
                                let idEmpleado = document.querySelector("#idEmpleado").value = arreglo[indice].idEmpleado;      
                                let nombreUsuario = document.querySelector("#nombreUsuario").value = arreglo[indice].nombreUsuario;      
                                let contrasenia = document.querySelector("#contrasenia").value = arreglo[indice].contrasenia;                                       
                            }
        
        
                            
                            eliminar_empleado.addEventListener("click", () => {
        
                              
                                
                           
                                let idEmpleadoH = document.querySelector("#idEmpleado").value;
                                let empleadoid = parseInt(idEmpleadoH);
                            
        
                                let data = {
                                    idEmpleado: empleadoid
                                  };
        
                                  const queryStrings = new URLSearchParams(data).toString();
                                  const options = {
                                    method: "POST",
                                    headers: {
                                      "Content-type": "application/x-www-form-urlencoded"
                                    },
                                    body: queryStrings
                                  }
        
                                fetch("http://localhost:8080/Api_da/api/db/empleado/eliminar", options)
                                .then(res => {
                                    return res.text();
                                }).then((resp) => {
                                    console.log(resp);
                                })
                             
                            });
                         
                            boton_buscar.addEventListener("click",() => {
                                
                          
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                        
                                    fila.innerHTML = "";
                             
                                    
                                   let coincidencias =  clientes.filter((elemento) => {
                                        let empleado_id = elemento.idEmpleado; 
                                        let estatus = elemento.estatus;
                                        let nombre = elemento.nombre;
                                        let apellidoPaterno = elemento.apellidoPaterno;
                                        let apellidoMaterno = elemento.apellidoMaterno;
                                        let buscador = buscador_valor.toLowerCase();
                                        if(empleado_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                            return elemento;
                                        }
                                    });
                                
                                    let contador = 1;
                                    coincidencias.forEach((elemento) => {
                                     
        
                                        if(contador <= 10){
                                            let info = `<tr id= "filaSelected${contador}">
                                            <td>${elemento.idCliente}</td>
                                            <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                            <td>${elemento.telefono}</td>
                                            <td>${elemento.fechaRegistro}</td>
                                            <td>${elemento.activo}</td>
                                            </tr>`
                                            fila.innerHTML += info;
                                            contador++;
        
                                        }
                                                           
                                           
                                      
        
                                    });
        
                                    console.log(coincidencias)
                              
                                   
                                                                   
                                    let filaMostrar1 = document.querySelector("#filaSelected1");
                                    let filaMostrar2 = document.querySelector("#filaSelected2");
                                    let filaMostrar3 = document.querySelector("#filaSelected3");
                                    let filaMostrar4 = document.querySelector("#filaSelected4");
                                    let filaMostrar5 = document.querySelector("#filaSelected5");
                                    let filaMostrar6 = document.querySelector("#filaSelected6");
                                    let filaMostrar7 = document.querySelector("#filaSelected7");
                                    let filaMostrar8 = document.querySelector("#filaSelected8");
                                    let filaMostrar9 = document.querySelector("#filaSelected9");
                                    let filaMostrar10 = document.querySelector("#filaSelected10");
        
        
                                    
                       filaMostrar1.addEventListener("click", () => {
                            mostrar(0,coincidencias);
                       });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, coincidencias);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, coincidencias);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, coincidencias);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, coincidencias);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, coincidencias);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, coincidencias);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, coincidencias);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, coincidencias);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, coincidencias);
                        });
                                       
        
                                        
                                    
                                    
                
                                   
                
                              
                                
                            })
                         
                      
                           
                            boton_actualizar.addEventListener("click", async() => {
                          
                                let buscador_valor = document.querySelector("#buscador_empleados").value = "";
                                fila.innerHTML = "";
                                await peticionEmpleados();
                                console.log(empleados);    
                                crearTabla();
        
                            });
        
                            console.log(empleados);
        
        
                            function crearTabla(){
                                let contador = 1;
                                
                                empleados.forEach((empl) => {
                                    
                            if(contador <= 10){
                                let info = `<tr id= "filaSelected${contador}">
                                <td>${empl.idEmpleado}</td>
                                <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                                <td>${empl.telefono}</td>
                                <td>${empl.fechaIngreso}</td>
                                <td>${empl.activo}</td>
                                </tr>`
                                fila.innerHTML += info;
                            }
                                
                                contador++;
                            
                                   
                                    
                                });
        
                               
                                let filaMostrar1 = document.querySelector("#filaSelected1");
                                let filaMostrar2 = document.querySelector("#filaSelected2");
                                let filaMostrar3 = document.querySelector("#filaSelected3");
                                let filaMostrar4 = document.querySelector("#filaSelected4");
                                let filaMostrar5 = document.querySelector("#filaSelected5");
                                let filaMostrar6 = document.querySelector("#filaSelected6");
                                let filaMostrar7 = document.querySelector("#filaSelected7");
                                let filaMostrar8 = document.querySelector("#filaSelected8");
                                let filaMostrar9 = document.querySelector("#filaSelected9");
                                let filaMostrar10 = document.querySelector("#filaSelected10");
        
                                filaMostrar1.addEventListener("click", () => {
                                    mostrar(0,empleados);
                                });
                                filaMostrar2.addEventListener("click", () => {
                                    mostrar(1, empleados);
                                });
                                filaMostrar3.addEventListener("click", () => {
                                    mostrar(2, empleados);
                                });
                                filaMostrar4.addEventListener("click", () => {
                                    mostrar(3, empleados);
                                });
                                filaMostrar5.addEventListener("click", () => {
                                    mostrar(4, empleados);
                                });
                                filaMostrar6.addEventListener("click", () => {
                                    mostrar(5, empleados);
                                });
                                filaMostrar7.addEventListener("click", () => {
                                    mostrar(6, empleados);
                                });
                                filaMostrar8.addEventListener("click", () => {
                                    mostrar(7, empleados);
                                });
                                filaMostrar9.addEventListener("click", () => {
                                    mostrar(8, empleados);
                                });
                                filaMostrar10.addEventListener("click", () => {
                                    mostrar(9, empleados);
                                });
        
        
                            }
                          
                            crearTabla();
                                
                             
                           
        



                                
                 

                            

                        })}
                        ///DESPLIEGUE DE SECCION AGREGAR EMPLEADOS
                        else if(e.target.matches('a#anadir_empleados')){fetch('agregar/agregar_Emp.html').then((res) => {return res.text()}).then((url) => {
                            informacion.innerHTML = url

                            let boton_buscar = document.querySelector("#boton_buscar_empleados");
                            let boton_actualizar = document.querySelector("#boton_actualizar");
                            let eliminar_producto = document.querySelector("#eliminar_empleados");
                            console.log(empleados);
                            let fila = document.querySelector("#fila");
                            let empleadosAct = [];
                            let contador = 1;

                            let agregar = document.querySelector("#agregar_empleados");

                            agregar.addEventListener("click", () => {
                              let nameH = document.querySelector("#nombre").value;
                              let apaternoH = document.querySelector("#apaterno").value;
                              let amaternoH = document.querySelector("#amaterno").value;
                              let generoH = document.querySelector("#genero").value;
                              let fnacimientoH = document.querySelector("#fnacimiento").value;
                              let rfcH = document.querySelector("#rfc").value;
                              let curpH = document.querySelector("#curp").value;
                              let domicilioH = document.querySelector("#domicilio").value;
                              let cpH = document.querySelector("#cp").value;
                              let ciudadH = document.querySelector("#ciudad").value;
                              let estadoH = document.querySelector("#estado").value;
                              let telefonoH = document.querySelector("#telefono").value;
                              let fotoH = document.querySelector("#foto").value;
                              let sucursalH = document.querySelector("#idSucursal").value;
                              let rolH = document.querySelector("#rol").value;
                              let puestoH = document.querySelector("#puesto").value;
                              let salarioBrutoH = document.querySelector("#salarioBruto").value;
    
                                let data = {
                                    nombre: nameH,
                                    apellidoPaterno: apaternoH,
                                    apellidoMaterno: amaternoH,
                                    genero: generoH,
                                    fechaNacimiento: fnacimientoH,
                                    rfc: rfcH,
                                    curp: curpH,
                                    domicilio: domicilioH,
                                    codigoPostal:cpH,
                                    ciudad:ciudadH,
                                    estado: estadoH,
                                    telefono: telefonoH,
                                    foto:fotoH,
                                    idSucursal: sucursalH,
                                    rol: rolH,
                                    puesto:puestoH,
                                    salarioBruto: salarioBrutoH  
                                };
                                let URL = "http://localhost:8080/Api_da/api/db/empleado/agregar";
                                const queryStrings = new URLSearchParams(data).toString();
                                const options = {
                                  method: "POST",
                                  headers: {
                                    "Content-type": "application/x-www-form-urlencoded"
                                  },
                                  body: queryStrings
                                }


                                fetch(URL, options)
                                    .then(res => {
                                        return res.text();

                                    }).then((resp) => {
                                        console.log(resp);
                                    })


                            })

                            const mostrar = (indice, arreglo) => {
                                
                                let fnacimiento  = arreglo[indice].fechaNacimiento;
                                let partes = fnacimiento.split(" ");
                                let fechaFinal = partes.map((e) => {
                                    return e.replace(/[\s,]+/g, '').trim();
                                })
                             
                                let mes;
                                console.log(fechaFinal);
                                if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}
                                let fechaNacimiento = document.querySelector("#fnacimiento").value = `${fechaFinal[1]}/${mes}/${fechaFinal[2]}`
                                let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                                let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                                let estado = document.querySelector("#estados").value = arreglo[indice].estado;
                                let calle  = document.querySelector("#calle").value = arreglo[indice].domicilio;
                                let colonia = document.querySelector("#colonia").value = arreglo[indice].domicilio;
                                let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                                let fingreso = document.querySelector("#fingreso").value = arreglo[indice].fechaIngreso;
                                let puesto = document.querySelector("#puesto").value = arreglo[indice].puesto;
                                let salario = document.querySelector("#salario").value = arreglo[indice].salarioBruto;
                                let cempleado = document.querySelector("#cempleado").value = arreglo[indice].codigo;
                                let curp = document.querySelector("#curp").value = arreglo[indice].curp;
                                let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                                let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                                let genero = document.querySelector("#genero").value = arreglo[indice].genero;
                                let nombreUsuario = document.querySelector("#nombreUsuario").value = arreglo[indice].nombreUsuario;
                                let contrasenia = document.querySelector("#contrasenia").value = arreglo[indice].contrasenia;
                                           
                            }

                            boton_buscar.addEventListener("click",() => {
                                
                                console.log("adawdawd");
                              
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                        
                                    fila.innerHTML = "";
                             
                                    
                                   let coincidencias =  empleados.filter((elemento) => {
                                        let empleado_id = elemento.idEmpleado; 
                                        let estatus = elemento.estatus;
                                        let nombre = elemento.nombre;
                                        let apellidoPaterno = elemento.apellidoPaterno;
                                        let apellidoMaterno = elemento.apellidoMaterno;
                                        let buscador = buscador_valor.toLowerCase();
                                        if(empleado_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                            return elemento;
                                        }
                                    });
                                
                                    let contador = 1;
                                    coincidencias.forEach((elemento) => {
                                     

                                        if(contador <= 10){
                                            let info = `<tr id= "filaSelected${contador}">
                                            <td>${elemento.idEmpleado}</td>
                                            <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                            <td>${elemento.telefono}</td>
                                            <td>${elemento.fechaIngreso}</td>
                                            <td>${elemento.activo}</td>
                                            </tr>`
                                            fila.innerHTML += info;
                                            contador++;
    
                                        }
                                                           
                                           
                                      

                                    });

                                    console.log(coincidencias)
                              
                                   
                                                                   
                                    let filaMostrar1 = document.querySelector("#filaSelected1");
                                    let filaMostrar2 = document.querySelector("#filaSelected2");
                                    let filaMostrar3 = document.querySelector("#filaSelected3");
                                    let filaMostrar4 = document.querySelector("#filaSelected4");
                                    let filaMostrar5 = document.querySelector("#filaSelected5");
                                    let filaMostrar6 = document.querySelector("#filaSelected6");
                                    let filaMostrar7 = document.querySelector("#filaSelected7");
                                    let filaMostrar8 = document.querySelector("#filaSelected8");
                                    let filaMostrar9 = document.querySelector("#filaSelected9");
                                    let filaMostrar10 = document.querySelector("#filaSelected10");
       
                            })

                              
                            boton_actualizar.addEventListener("click", async() => {
                                let buscador_valor = document.querySelector("#buscador_empleados").value = "";
                                fila.innerHTML = "";
                                await peticionEmpleados();
                                console.log(empleados);    
                                crearTabla();

                            });

                            function crearTabla(){
                                let contador = 1;
                                
                                empleados.forEach((empl) => {
                                    
                            if(contador <= 10){
                                let info = `<tr id= "filaSelected${contador}">
                                <td>${empl.idEmpleado}</td>
                                <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                                <td>${empl.telefono}</td>
                                <td>${empl.fechaIngreso}</td>
                                <td>${empl.activo}</td>
                                </tr>`
                                fila.innerHTML += info;
                            }
                                
                                contador++;
                            
                                   
                                    
                                });

                               
                                let filaMostrar1 = document.querySelector("#filaSelected1");
                                let filaMostrar2 = document.querySelector("#filaSelected2");
                                let filaMostrar3 = document.querySelector("#filaSelected3");
                                let filaMostrar4 = document.querySelector("#filaSelected4");
                                let filaMostrar5 = document.querySelector("#filaSelected5");
                                let filaMostrar6 = document.querySelector("#filaSelected6");
                                let filaMostrar7 = document.querySelector("#filaSelected7");
                                let filaMostrar8 = document.querySelector("#filaSelected8");
                                let filaMostrar9 = document.querySelector("#filaSelected9");
                                let filaMostrar10 = document.querySelector("#filaSelected10");
                            }
                          
                            crearTabla();



                           

                        })}

                        ///DESPLIEGUE DE SECCION BUSCAR EMPLEADOS
                        else if(e.target.matches('a#buscar_empleados')){fetch('buscar/buscar_empleados.html').then((res) => {return res.text();}).then((url) => {
                            
                        
                            informacion.innerHTML = url
                      


                            let boton_buscar = document.querySelector("#boton_buscar_empleados");
                            let boton_actualizar = document.querySelector("#boton_actualizar");
                            let eliminar_producto = document.querySelector("#eliminar_empleados");
                            console.log(empleados);
                            let fila = document.querySelector("#fila");
                            let empleadosAct = [];
                            let contador = 1;
     
                            const mostrar = (indice, arreglo) => {
                                
                                let fnacimiento  = arreglo[indice].fechaNacimiento;
                                let partes = fnacimiento.split(" ");
                                let fechaFinal = partes.map((e) => {
                                    return e.replace(/[\s,]+/g, '').trim();
                                })
                             
                                let mes;
                                console.log(fechaFinal);
                                if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}
                                let fechaNacimiento = document.querySelector("#fnacimiento").value = `${fechaFinal[1]}/${mes}/${fechaFinal[2]}`
                                let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                                let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                                let genero = document.querySelector("#genero").value = arreglo[indice].genero;
                                let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                                let curp= document.querySelector("#curp").value = arreglo[indice].curp;
                                let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                                let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                                let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                                let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                                let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                                let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                                let sucursal = document.querySelector("#idSucursal").value = arreglo[indice].idSucursal;
                                let rol = document.querySelector("#rol").value = arreglo[indice].rol;
                                let puesto = document.querySelector("#puesto").value = arreglo[indice].puesto;
                                let salarioBruto = document.querySelector("#salarioBruto").value = arreglo[indice].salarioBruto;
                                let idEmpleado = document.querySelector("#idEmpleado").value = arreglo[indice].idEmpleado;
                                let nombreUsuario = document.querySelector("#nombreUsuario").value = arreglo[indice].nombreUsuario;
                                let contrasenia = document.querySelector("#contrasenia").value = arreglo[indice].contrasenia;
                                           
                            }

                         
                            boton_buscar.addEventListener("click",() => {
                                
                                console.log("adawdawd");
                              
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                        
                                    fila.innerHTML = "";
                             
                                    
                                   let coincidencias =  empleados.filter((elemento) => {
                                        let empleado_id = elemento.idEmpleado; 
                                        let estatus = elemento.estatus;
                                        let nombre = elemento.nombre;
                                        let apellidoPaterno = elemento.apellidoPaterno;
                                        let apellidoMaterno = elemento.apellidoMaterno;
                                        let buscador = buscador_valor.toLowerCase();
                                        if(empleado_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                            return elemento;
                                        }
                                    });
                                
                                    let contador = 1;
                                    coincidencias.forEach((elemento) => {
                                     

                                        if(contador <= 10){
                                            let info = `<tr id= "filaSelected${contador}">
                                            <td>${elemento.idEmpleado}</td>
                                            <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                            <td>${elemento.telefono}</td>
                                            <td>${elemento.fechaIngreso}</td>
                                            <td>${elemento.activo}</td>
                                            </tr>`
                                            fila.innerHTML += info;
                                            contador++;
    
                                        }
                                                           
                                           
                                      

                                    });

                                    console.log(coincidencias)
                              
                                   
                                                                   
                                    let filaMostrar1 = document.querySelector("#filaSelected1");
                                    let filaMostrar2 = document.querySelector("#filaSelected2");
                                    let filaMostrar3 = document.querySelector("#filaSelected3");
                                    let filaMostrar4 = document.querySelector("#filaSelected4");
                                    let filaMostrar5 = document.querySelector("#filaSelected5");
                                    let filaMostrar6 = document.querySelector("#filaSelected6");
                                    let filaMostrar7 = document.querySelector("#filaSelected7");
                                    let filaMostrar8 = document.querySelector("#filaSelected8");
                                    let filaMostrar9 = document.querySelector("#filaSelected9");
                                    let filaMostrar10 = document.querySelector("#filaSelected10");


                                    
                       filaMostrar1.addEventListener("click", () => {
                            mostrar(0,coincidencias);
                       });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, coincidencias);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, coincidencias);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, coincidencias);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, coincidencias);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, coincidencias);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, coincidencias);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, coincidencias);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, coincidencias);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, coincidencias);
                        });
                                       

                                        
                                    
                                    
                
                                   
                
                              
                                
                            })
                         
                             
                            boton_actualizar.addEventListener("click", async() => {
                                let buscador_valor = document.querySelector("#buscador_empleados").value = "";
                                fila.innerHTML = "";
                                await peticionEmpleados();
                                console.log(empleados);    
                                crearTabla();

                            });

                            function crearTabla(){
                                let contador = 1;
                                
                                empleados.forEach((empl) => {
                                    
                            if(contador <= 10){
                                let info = `<tr id= "filaSelected${contador}">
                                <td>${empl.idEmpleado}</td>
                                <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                                <td>${empl.telefono}</td>
                                <td>${empl.fechaIngreso}</td>
                                <td>${empl.activo}</td>
                                </tr>`
                                fila.innerHTML += info;
                            }
                                
                                contador++;
                            
                                   
                                    
                                });

                               
                                let filaMostrar1 = document.querySelector("#filaSelected1");
                                let filaMostrar2 = document.querySelector("#filaSelected2");
                                let filaMostrar3 = document.querySelector("#filaSelected3");
                                let filaMostrar4 = document.querySelector("#filaSelected4");
                                let filaMostrar5 = document.querySelector("#filaSelected5");
                                let filaMostrar6 = document.querySelector("#filaSelected6");
                                let filaMostrar7 = document.querySelector("#filaSelected7");
                                let filaMostrar8 = document.querySelector("#filaSelected8");
                                let filaMostrar9 = document.querySelector("#filaSelected9");
                                let filaMostrar10 = document.querySelector("#filaSelected10");
    
                                filaMostrar1.addEventListener("click", () => {
                                    mostrar(0,empleados);
                                });
                                filaMostrar2.addEventListener("click", () => {
                                    mostrar(1, empleados);
                                });
                                filaMostrar3.addEventListener("click", () => {
                                    mostrar(2, empleados);
                                });
                                filaMostrar4.addEventListener("click", () => {
                                    mostrar(3, empleados);
                                });
                                filaMostrar5.addEventListener("click", () => {
                                    mostrar(4, empleados);
                                });
                                filaMostrar6.addEventListener("click", () => {
                                    mostrar(5, empleados);
                                });
                                filaMostrar7.addEventListener("click", () => {
                                    mostrar(6, empleados);
                                });
                                filaMostrar8.addEventListener("click", () => {
                                    mostrar(7, empleados);
                                });
                                filaMostrar9.addEventListener("click", () => {
                                    mostrar(8, empleados);
                                });
                                filaMostrar10.addEventListener("click", () => {
                                    mostrar(9, empleados);
                                });
    

                            }
                          
                            crearTabla();


                           

                           
                            
                          
                        
                           
                     
                          
                

                            
                            

                        })}
                        ///DESPLIEGUE MODIFICAR EMPLEADOS
                        else if(e.target.matches("a#modificar_empleados")){fetch("modificar/modificar_empleado.html").then((res) => { return res.text()}).then((url) => {
                            informacion.innerHTML = url
                            

                            let boton_buscar = document.querySelector("#boton_buscar_empleados");
                            let boton_actualizar = document.querySelector("#boton_actualizar");
                            let modificar_empleado = document.querySelector("#modificar_empleado");
                            console.log(empleados);
                            let fila = document.querySelector("#fila");
                            let empleadosAct = [];
                            let contador = 1;
     
                            const mostrar = (indice, arreglo) => {

                                let fnacimiento  = arreglo[indice].fechaNacimiento;
                                let partes = fnacimiento.split(" ");
                                let fechaFinal = partes.map((e) => {
                                    return e.replace(/[\s,]+/g, '').trim();
                                })
                             
                                let mes;
                                console.log(fechaFinal);
                                if(fechaFinal[0] == "ene"){mes = "01"}else if(fechaFinal[0] == "feb"){mes = "02"}else if(fechaFinal[0] == "mar"){mes = "03"}else if(fechaFinal[0] == "abr"){mes = "04"}else if(fechaFinal[0] == "may"){mes = "05"}else if(fechaFinal[0] == "jun"){mes = "06"}else if(fechaFinal[0] == "jul"){mes = "07"}else if(fechaFinal[0] == "ago"){mes = "08"}else if(fechaFinal[0] == "sep"){mes = "09"}else if(fechaFinal[0] == "oct"){mes = "10"}else if(fechaFinal[0] == "nov"){mes = "11"}else if(fechaFinal[0] == "dic"){mes = "12"}
                                let fechaNacimiento = document.querySelector("#fnacimiento").value = `${fechaFinal[1]}/${mes}/${fechaFinal[2]}`
                                let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                let apaterno = document.querySelector("#apaterno").value = arreglo[indice].apellidoPaterno;
                                let amaterno = document.querySelector("#amaterno").value = arreglo[indice].apellidoMaterno;
                                let genero = document.querySelector("#genero").value = arreglo[indice].genero;
                                let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                                let curp= document.querySelector("#curp").value = arreglo[indice].curp;
                                let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                                let cp = document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                                let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                                let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                                let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                                let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                                let sucursal = document.querySelector("#idSucursal").value = arreglo[indice].idSucursal;
                                let rol = document.querySelector("#rol").value = arreglo[indice].rol;
                                let puesto = document.querySelector("#puesto").value = arreglo[indice].puesto;
                                let salarioBruto = document.querySelector("#salarioBruto").value = arreglo[indice].salarioBruto;
                                let idEmpleado = document.querySelector("#idEmpleado").value = arreglo[indice].idEmpleado;
                                let nombreUsuario = document.querySelector("#nombreUsuario").value = arreglo[indice].nombreUsuario;
                                let contrasenia = document.querySelector("#password").value = arreglo[indice].contrasenia;
                            }
                            
                       

                         
                            boton_buscar.addEventListener("click",() => {
                                
                                console.log("adawdawd");
                              
                                let buscador_valor = document.querySelector("#buscador_empleados").value;
                                        
                                    fila.innerHTML = "";
                             
                                    
                                   let coincidencias =  empleados.filter((elemento) => {
                                        let empleado_id = elemento.idEmpleado; 
                                        let estatus = elemento.estatus;
                                        let nombre = elemento.nombre;
                                        let apellidoPaterno = elemento.apellidoPaterno;
                                        let apellidoMaterno = elemento.apellidoMaterno;
                                        let buscador = buscador_valor.toLowerCase();
                                        if(empleado_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador || apellidoPaterno.toLowerCase() == buscador || apellidoMaterno.toLowerCase() == buscador){
                                            return elemento;
                                        }
                                    });
                                
                                    let contador = 1;
                                    coincidencias.forEach((elemento) => {
                                     

                                        if(contador <= 10){
                                            let info = `<tr id= "filaSelected${contador}">
                                            <td>${elemento.idEmpleado}</td>
                                            <td>${elemento.nombre} ${elemento.apellidoPaterno} ${elemento.apellidoMaterno}</td>
                                            <td>${elemento.telefono}</td>
                                            <td>${elemento.fechaIngreso}</td>
                                            <td>${elemento.activo}</td>
                                            </tr>`
                                            fila.innerHTML += info;
                                            contador++;
    
                                        }
                                                           
                                           
                                      

                                    });

                                    console.log(coincidencias)
                              
                                   
                                                                   
                                    let filaMostrar1 = document.querySelector("#filaSelected1");
                                    let filaMostrar2 = document.querySelector("#filaSelected2");
                                    let filaMostrar3 = document.querySelector("#filaSelected3");
                                    let filaMostrar4 = document.querySelector("#filaSelected4");
                                    let filaMostrar5 = document.querySelector("#filaSelected5");
                                    let filaMostrar6 = document.querySelector("#filaSelected6");
                                    let filaMostrar7 = document.querySelector("#filaSelected7");
                                    let filaMostrar8 = document.querySelector("#filaSelected8");
                                    let filaMostrar9 = document.querySelector("#filaSelected9");
                                    let filaMostrar10 = document.querySelector("#filaSelected10");


                                    
                       filaMostrar1.addEventListener("click", () => {
                            mostrar(0,coincidencias);
                       });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, coincidencias);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, coincidencias);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, coincidencias);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, coincidencias);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, coincidencias);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, coincidencias);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, coincidencias);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, coincidencias);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, coincidencias);
                        });
                                       

                                        
                                    
                                    
                
                                   
                
                              
                                
                            })

                            modificar_empleado.addEventListener("click",() => {
                            
                                let nombreH = document.querySelector("#nombre").value;
                                let apaternoH = document.querySelector("#apaterno").value;
                                let amaternoH = document.querySelector("#amaterno").value;
                                let generoH = document.querySelector("#genero").value;
                                let fnacimientoH  = document.querySelector("#fnacimiento").value;
                                let rfcH = document.querySelector("#rfc").value;
                                let curpH = document.querySelector("#curp").value;
                                let domicilioH = document.querySelector("#domicilio").value;
                                let cpH = document.querySelector("#cp").value;
                                let ciudadH = document.querySelector("#ciudad").value;
                                let estadoH = document.querySelector("#estado").value;
                                let telefonoH = document.querySelector("#telefono").value;
                                let fotoH = document.querySelector("#foto").value;
                                let sucursalH = document.querySelector("#idSucursal").value;
                                let rolH = document.querySelector("#rol").value;
                                let puestoH = document.querySelector("#puesto").value;
                                let salarioBrutoH = document.querySelector("#salarioBruto").value;
                                let idEmpleadoH = document.querySelector("#idEmpleado").value;
                                let nombreUsuarioH = document.querySelector("#nombreUsuario").value;
                                let contraseniaH = document.querySelector("#password").value;

                                
                                let data = {

                                    idEmpleado: idEmpleadoH,
                                    nombre: nombreH,
                                    paterno: apaternoH,
                                    materno: amaternoH,
                                    genero: generoH,
                                    fechaNacimiento: fnacimientoH,
                                    rfc: rfcH,
                                    curp: curpH,
                                    domicilio: domicilioH,
                                    codigoPostal: cpH,
                                    ciudad: ciudadH,
                                    estado: estadoH,
                                    telefono: telefonoH,
                                    foto: fotoH,
                                    idSucursal: sucursalH,
                                    rol:rolH,
                                    nombreUsuario:nombreUsuarioH,
                                    contrasenia:contraseniaH,
                                    puesto:puestoH,
                                    salarioBruto: salarioBrutoH
                                };

                                const queryStrings = new URLSearchParams(data).toString();
                                const options = {
                                  method: "POST",
                                  headers: {
                                    "Content-type": "application/x-www-form-urlencoded"
                                  },
                                  body: queryStrings
                                }

                                fetch("http://localhost:8080/Api_da/api/db/empleado/modificar", options)
                                .then((res) => {return res.text()})
                                .then((resp) => {
                                    console.log(resp);
                                })


                            })
                              boton_actualizar.addEventListener("click", async() => {
                                let buscador_valor = document.querySelector("#buscador_empleados").value = "";
                                fila.innerHTML = "";
                                await peticionEmpleados();
                                console.log(empleados);    
                                crearTabla();

                            });
                           

                            function crearTabla(){
                                let contador = 1;
                                
                                empleados.forEach((empl) => {
                                    
                            if(contador <= 10){
                                let info = `<tr id= "filaSelected${contador}">
                                <td>${empl.idEmpleado}</td>
                                <td>${empl.nombre} ${empl.apellidoPaterno} ${empl.apellidoMaterno}</td>
                                <td>${empl.telefono}</td>
                                <td>${empl.fechaIngreso}</td>
                                <td>${empl.activo}</td>
                                </tr>`
                                fila.innerHTML += info;
                            }
                                
                                contador++;
                            
                                   
                                    
                                });

                               
                                let filaMostrar1 = document.querySelector("#filaSelected1");
                                let filaMostrar2 = document.querySelector("#filaSelected2");
                                let filaMostrar3 = document.querySelector("#filaSelected3");
                                let filaMostrar4 = document.querySelector("#filaSelected4");
                                let filaMostrar5 = document.querySelector("#filaSelected5");
                                let filaMostrar6 = document.querySelector("#filaSelected6");
                                let filaMostrar7 = document.querySelector("#filaSelected7");
                                let filaMostrar8 = document.querySelector("#filaSelected8");
                                let filaMostrar9 = document.querySelector("#filaSelected9");
                                let filaMostrar10 = document.querySelector("#filaSelected10");
    
                                filaMostrar1.addEventListener("click", () => {
                                    mostrar(0,empleados);
                                });
                                filaMostrar2.addEventListener("click", () => {
                                    mostrar(1, empleados);
                                });
                                filaMostrar3.addEventListener("click", () => {
                                    mostrar(2, empleados);
                                });
                                filaMostrar4.addEventListener("click", () => {
                                    mostrar(3, empleados);
                                });
                                filaMostrar5.addEventListener("click", () => {
                                    mostrar(4, empleados);
                                });
                                filaMostrar6.addEventListener("click", () => {
                                    mostrar(5, empleados);
                                });
                                filaMostrar7.addEventListener("click", () => {
                                    mostrar(6, empleados);
                                });
                                filaMostrar8.addEventListener("click", () => {
                                    mostrar(7, empleados);
                                });
                                filaMostrar9.addEventListener("click", () => {
                                    mostrar(8, empleados);
                                });
                                filaMostrar10.addEventListener("click", () => {
                                    mostrar(9, empleados);
                                });
    

                            }
                          
                            crearTabla();


                          



                           


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
                                          
                    informacion.innerHTML = url
                           
                            
                    let boton_buscar = document.querySelector("#boton_buscar_productos");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let eliminar_producto = document.querySelector("#eliminar_producto");
                    let fila = document.querySelector("#fila");
                    let contador = 1;


       
                    

                    const mostrar = (indice, arreglo) => {
                        let idProducto = document.querySelector("#idProducto").value = arreglo[indice].id;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                        let nombreGenerico = document.querySelector("#nombreGenerico").value = arreglo[indice].nombre_generico;
                        let formaFarmaceutica = document.querySelector("#formaFarmaceutica").value = arreglo[indice].forma_farmaceutica;
                        let codigo = document.querySelector("#codigo").value = arreglo[indice].codigo_barras;
                        let unidadMedida = document.querySelector("#unidadMedida").value = arreglo[indice].unidad_medida;
                        let presentacion = document.querySelector("#presentacion").value = arreglo[indice].presentacion;
                        let Pindicacion = document.querySelector("#Pindicacion").value = arreglo[indice].principal_indicacion;
                        let contraindicaciones = document.querySelector("#contraindicaciones").value = arreglo[indice].contra_indicaciones;
                        let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                        let concentracion = document.querySelector("#concentracion").value = arreglo[indice].concentracion;
                        let unidadesEnvase = document.querySelector("#unidadesEnvase").value = arreglo[indice].unidades_envase;
                        let pcompra = document.querySelector("#compra").value = arreglo[indice].precio_compra;
                        let pventa = document.querySelector("#venta").value = arreglo[indice].precio_venta;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;                                
                    }


                    
                    eliminar_producto.addEventListener("click", () => {

                      
                        
                   
                        let idProductoH = document.querySelector("#idProducto").value;
                        let productoid = parseInt(idProductoH);
                    

                        let data = {
                            idProducto:productoid
                          };

                          const queryStrings = new URLSearchParams(data).toString();
                          const options = {
                            method: "POST",
                            headers: {
                              "Content-type": "application/x-www-form-urlencoded"
                            },
                            body: queryStrings
                          }

                        fetch("http://localhost:8080/Api_da/api/db/producto/eliminar", options)
                        .then(res => {
                            return res.text();
                        }).then((resp) => {
                            console.log(resp);
                        })
                     
                    });
                 
                    boton_buscar.addEventListener("click",() => {
                        
                  
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  productos.filter((elemento) => {
                                let producto_id = elemento.id; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                               
                                let buscador = buscador_valor.toLowerCase();
                                if(producto_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador ){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.id}</td>
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.precio_compra}</td>
                                    <td>${elemento.precio_venta}</td>
                                    <td>${elemento.unidades_envase}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");


                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,coincidencias);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, coincidencias);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, coincidencias);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, coincidencias);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, coincidencias);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, coincidencias);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, coincidencias);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, coincidencias);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, coincidencias);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, coincidencias);
                });
                               

                                
                            
                            
        
                           
        
                      
                        
                    })
                 
              
                   
                    boton_actualizar.addEventListener("click", async() => {
                  
                        let buscador_valor = document.querySelector("#buscador_productos").value = "";
                        fila.innerHTML = "";
                        await peticionProducto();
                
                        crearTabla();

                    });

         


                    function crearTabla(){
                        let contador = 1;
                        
                        productos.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.id}</td>
                        <td>${empl.nombre}</td>
                        <td>${empl.precio_compra}</td>
                        <td>${empl.precio_venta}</td>
                        <td>${empl.unidades_envase}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");

                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,productos);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, productos);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, productos);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, productos);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, productos);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, productos);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, productos);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, productos);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, productos);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, productos);
                        });


                    }
                  
                    crearTabla();
                        
                     
                   


                })}
                ///DESPLIEGUE DE SECCION AGREGAR PRODUCTOS
                else if(e.target.matches("a#anadir_productos")){fetch('agregar/agregar_producto.html').then((res) => { return res.text();}).then((url) => {
                    informacion.innerHTML = url
                   
                    let boton_buscar = document.querySelector("#boton_buscar_productos");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let agregar_producto = document.querySelector("#agregar_producto");
              
                    let fila = document.querySelector("#fila");
                    let empleadosAct = [];
                    let contador = 1;

                    

                    agregar_producto.addEventListener("click", () => {
                  

                     
                        let nombreH = document.querySelector("#nombre").value;
                        let nombreGenericoH = document.querySelector("#nombreGenerico").value;
                        let formaFarmaceuticaH = document.querySelector("#formaFarmaceutica").value;
                        let codigoH = document.querySelector("#codigo").value;
                        let unidadMedidaH = document.querySelector("#unidadMedida").value;
                        let presentacionH = document.querySelector("#presentacion").value;
                        let PindicacionH = document.querySelector("#Pindicacion").value;
                        let contraindicacionesH = document.querySelector("#contraindicaciones").value;
                        let fotoH = document.querySelector("#foto").value;
                        let concentracionH = document.querySelector("#concentracion").value;
                        let unidadesEnvaseH = document.querySelector("#unidadesEnvase").value;
                        let pcompraH = document.querySelector("#compra").value;
                        let pventaH = document.querySelector("#venta").value;
                        
                        let unidadesEnvaseNum = parseFloat(unidadesEnvaseH);
                        
                       
                     
                        let data = {
                              nombre: nombreH,
                              nombreGenerico: nombreGenericoH,
                              formaFarmaceutica: formaFarmaceuticaH,
                              unidadMedida: unidadMedidaH,
                              presentacion: presentacionH,
                              principalIndicacion: PindicacionH,
                              contraindicaciones: contraindicacionesH,
                              concentracion: concentracionH,
                              unidadesEnvase: unidadesEnvaseNum,
                              precioCompra: pcompraH,
                              precioVenta: pventaH,
                              foto: fotoH,
                              rutafoto: fotoH,
                              codigoBarras: codigoH
                        };
                        let URL = "http://localhost:8080/Api_da/api/db/productos/agregar";
                        const queryStrings = new URLSearchParams(data).toString();
                        const options = {
                          method: "POST",
                          headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                          },
                          body: queryStrings
                        }


                        fetch(URL, options)
                            .then(res => {
                                return res.text();

                            }).then((resp) => {
                                console.log(resp);
                            })


                    })

                    const mostrar = (indice, arreglo) => {
                        
                        let idProducto = document.querySelector("#idProducto").value = arreglo[indice].id;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                        let nombreGenerico = document.querySelector("#nombreGenerico").value = arreglo[indice].nombre_generico;
                        let formaFarmaceutica = document.querySelector("#formaFarmaceutica").value = arreglo[indice].forma_farmaceutica;
                        let codigo = document.querySelector("#codigo").value = arreglo[indice].codigo_barras;
                        let unidadMedida = document.querySelector("#unidadMedida").value = arreglo[indice].unidad_medida;
                        let presentacion = document.querySelector("#presentacion").value = arreglo[indice].presentacion;
                        let Pindicacion = document.querySelector("#Pindicacion").value = arreglo[indice].principal_indicacion;
                        let contraindicaciones = document.querySelector("#contraindicaciones").value = arreglo[indice].contra_indicaciones;
                        let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                        let concentracion = document.querySelector("#concentracion").value = arreglo[indice].concentracion;
                        let unidadesEnvase = document.querySelector("#unidadesEnvase").value = arreglo[indice].unidades_envase;
                        let pcompra = document.querySelector("#compra").value = arreglo[indice].precio_compra;
                        let pventa = document.querySelector("#venta").value = arreglo[indice].precio_venta;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;  
                                   
                    }

                    boton_buscar.addEventListener("click",() => {
                        
       
                      
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  productos.filter((elemento) => {
                            let producto_id = elemento.id; 
                            let estatus = elemento.estatus;
                            let nombre = elemento.nombre;
                           
                            let buscador = buscador_valor.toLowerCase();
                            if(producto_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador ){
                                return elemento;
                            }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                        <td>${elemento.id}</td>
                                        <td>${elemento.nombre}</td>
                                        <td>${elemento.precio_compra}</td>
                                        <td>${elemento.precio_venta}</td>
                                        <td>${elemento.unidades_envase}</td>
                                        <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");

                    })

                      
                    boton_actualizar.addEventListener("click", async() => {
                        let buscador_valor = document.querySelector("#buscador_productos").value = "";
                        fila.innerHTML = "";
                        await peticionProducto();
                   
                        crearTabla();

                    });

                    function crearTabla(){
                        let contador = 1;
                        
                        productos.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                         <td>${empl.id}</td>
                        <td>${empl.nombre}</td>
                        <td>${empl.precio_compra}</td>
                        <td>${empl.precio_venta}</td>
                        <td>${empl.unidades_envase}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");
                    }
                  
                    crearTabla();


                })}
                ///DEPSLIEGUE DE SECCION BUSCAR PRODUCTOS
                else if(e.target.matches("a#buscar_productos")){fetch('buscar/buscar_productos.html').then((res) => { return res.text();}).then((url) => {
                    informacion.innerHTML = url
                    console.log(productos);
                    let boton_buscar = document.querySelector("#boton_buscar_productos");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
            
                    let fila = document.querySelector("#fila");
                    let empleadosAct = [];
                    let contador = 1;

                                 
                                  
                                  // Obtener el servicio de mapas base
                                  document.addEventListener('DOMContentLoaded', function () {
                                    // Aquí va tu código JavaScript que utiliza la API de HERE Maps
                                    const platform = new H.service.Platform({ apikey: 'TU_CLAVE_API' });
                                    const defaultLayers = platform.createDefaultLayers();
                                    const map = new H.Map(
                                      document.getElementById('mapContainer'),
                                      defaultLayers.vector.normal.map,
                                      {
                                        center: { lat: 40.7128, lng: -74.0060 },
                                        zoom: 10,
                                      }
                                    );
                                    const ui = H.ui.UI.createDefault(map, defaultLayers);
                                    const marker = new H.map.Marker({ lat: 40.7128, lng: -74.0060 });
                                    map.addObject(marker);
                                  });
                                  

                    const mostrar = (indice,arreglo) => {
                        
                        let idProducto = document.querySelector("#idProducto").value = arreglo[indice].id;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                        let nombreGenerico = document.querySelector("#nombreGenerico").value = arreglo[indice].nombre_generico;
                        let formaFarmaceutica = document.querySelector("#formaFarmaceutica").value = arreglo[indice].forma_farmaceutica;
                        let codigo = document.querySelector("#codigo").value = arreglo[indice].codigo_barras;
                        let unidadMedida = document.querySelector("#unidadMedida").value = arreglo[indice].unidad_medida;
                        let presentacion = document.querySelector("#presentacion").value = arreglo[indice].presentacion;
                        let Pindicacion = document.querySelector("#Pindicacion").value = arreglo[indice].principal_indicacion;
                        let contraindicaciones = document.querySelector("#contraindicaciones").value = arreglo[indice].contra_indicaciones;
                        let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                        let concentracion = document.querySelector("#concentracion").value = arreglo[indice].concentracion;
                        let unidadesEnvase = document.querySelector("#unidadesEnvase").value = arreglo[indice].unidades_envase;
                        let pcompra = document.querySelector("#compra").value = arreglo[indice].precio_compra;
                        let pventa = document.querySelector("#venta").value = arreglo[indice].precio_venta;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        
                                   
                    }

                 
                    boton_buscar.addEventListener("click",() => {
                        
                        
                      
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  productos.filter((elemento) => {
                                let producto_id = elemento.id; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                               
                                let buscador = buscador_valor.toLowerCase();
                                if(producto_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador ){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.id}</td>
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.precio_compra}</td>
                                    <td>${elemento.precio_venta}</td>
                                    <td>${elemento.unidades_envase}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");


                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,coincidencias);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, coincidencias);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, coincidencias);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, coincidencias);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, coincidencias);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, coincidencias);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, coincidencias);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, coincidencias);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, coincidencias);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, coincidencias);
                });
                               

                                
                            
                            
          

        
                           
        
                      
                        
                    })
                 
                     
                    boton_actualizar.addEventListener("click", async() => {
                        let buscador_valor = document.querySelector("#buscador_productos").value = "";
                        fila.innerHTML = "";
                        await peticionProducto();
                    
                        crearTabla();

                    });

                    function crearTabla(){
                        let contador = 1;
                        
                        productos.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.id}</td>
                        <td>${empl.nombre}</td>
                        <td>${empl.precio_compra}</td>
                        <td>${empl.precio_venta}</td>
                        <td>${empl.unidades_envase}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");

                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,productos);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, productos);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, productos);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, productos);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, productos);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, productos);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, productos);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, productos);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, productos);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, productos);
                        });


                    }
                  
                    crearTabla();
                
                })}
               
                 /////////DESPLIEGUE DE MODIFICAR PRODUCTOS
                 else if(e.target.matches("a#modificar_productos")){fetch("modificar/modificar_producto.html").then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url
                    let boton_buscar = document.querySelector("#boton_buscar_productos");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let modificar_producto = document.querySelector("#modificar_producto");
             
                    let fila = document.querySelector("#fila");
                    let empleadosAct = [];
                    let contador = 1;

                    const mostrar = (indice, arreglo) => {

                        let idProducto = document.querySelector("#idProducto").value = arreglo[indice].id;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                        let nombreGenerico = document.querySelector("#nombreGenerico").value = arreglo[indice].nombre_generico;
                        let formaFarmaceutica = document.querySelector("#formaFarmaceutica").value = arreglo[indice].forma_farmaceutica;
                        let codigo = document.querySelector("#codigo").value = arreglo[indice].codigo_barras;
                        let unidadMedida = document.querySelector("#unidadMedida").value = arreglo[indice].unidad_medida;
                        let presentacion = document.querySelector("#presentacion").value = arreglo[indice].presentacion;
                        let Pindicacion = document.querySelector("#Pindicacion").value = arreglo[indice].principal_indicacion;
                        let contraindicaciones = document.querySelector("#contraindicaciones").value = arreglo[indice].contra_indicaciones;
                        let foto = document.querySelector("#foto").value = arreglo[indice].foto;
                        let concentracion = document.querySelector("#concentracion").value = arreglo[indice].concentracion;
                        let unidadesEnvase = document.querySelector("#unidadesEnvase").value = arreglo[indice].unidades_envase;
                        let pcompra = document.querySelector("#compra").value = arreglo[indice].precio_compra;
                        let pventa = document.querySelector("#venta").value = arreglo[indice].precio_venta;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        
                    }
                    
               

                 
                    boton_buscar.addEventListener("click",() => {
          
                      
                        let buscador_valor = document.querySelector("#buscador_productos").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  productos.filter((elemento) => {
                            let producto_id = elemento.id; 
                            let estatus = elemento.estatus;
                            let nombre = elemento.nombre;
                           
                            let buscador = buscador_valor.toLowerCase();
                            if(producto_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador ){
                                return elemento;
                            }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.id}</td>
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.precio_compra}</td>
                                    <td>${elemento.precio_venta}</td>
                                    <td>${elemento.unidades_envase}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");


                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,coincidencias);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, coincidencias);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, coincidencias);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, coincidencias);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, coincidencias);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, coincidencias);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, coincidencias);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, coincidencias);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, coincidencias);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, coincidencias);
                });
                               

                                
                            
                            
        
                           
        
                      
                        
                    })

                    modificar_producto.addEventListener("click",() => {
                    
                        let idProductoH = document.querySelector("#idProducto").value;
                        let nombreH = document.querySelector("#nombre").value;
                        let nombreGenericoH = document.querySelector("#nombreGenerico").value;
                        let formaFarmaceuticaH = document.querySelector("#formaFarmaceutica").value;
                        let codigoH = document.querySelector("#codigo").value;
                        let unidadMedidaH = document.querySelector("#unidadMedida").value;
                        let presentacionH = document.querySelector("#presentacion").value;
                        let PindicacionH = document.querySelector("#Pindicacion").value;
                        let contraindicacionesH = document.querySelector("#contraindicaciones").value;
                        let fotoH = document.querySelector("#foto").value;
                        let concentracionH = document.querySelector("#concentracion").value;
                        let unidadesEnvaseH = document.querySelector("#unidadesEnvase").value;
                        let pcompraH = document.querySelector("#compra").value;
                        let pventaH = document.querySelector("#venta").value;
                        let estatusH = document.querySelector("#estatus").value;

                        
                        let data = {

                           idProducto: idProductoH,
                           nombre: nombreH,
                           nombreGenerico: nombreGenericoH,
                           formaFarmaceutica: formaFarmaceuticaH,
                           unidadMedida: unidadMedidaH,
                           principalIndicacion: PindicacionH,
                           presentacion: presentacionH,
                           contraindicaciones: contraindicacionesH,
                           concentracion: concentracionH,
                           unidadesEnvase: unidadesEnvaseH,
                           precioCompra: pcompraH,
                           precioVenta: pventaH,
                           foto: fotoH,
                           rutafoto: fotoH,
                           codigoBarras: codigoH
                        };

                        const queryStrings = new URLSearchParams(data).toString();
                        const options = {
                          method: "POST",
                          headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                          },
                          body: queryStrings
                        }

                        fetch("http://localhost:8080/Api_da/api/db/producto/modificar", options)
                        .then((res) => {return res.text()})
                        .then((resp) => {
                            console.log(resp);
                        })


                    })
                      boton_actualizar.addEventListener("click", async() => {
                        let buscador_valor = document.querySelector("#buscador_productos").value = "";
                        fila.innerHTML = "";
                        await peticionProducto();
                
                        crearTabla();

                    });
                   

                    function crearTabla(){
                        let contador = 1;
                        
                        productos.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.id}</td>
                        <td>${empl.nombre}</td>
                        <td>${empl.precio_compra}</td>
                        <td>${empl.precio_venta}</td>
                        <td>${empl.unidades_envase}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");

                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,productos);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, productos);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, productos);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, productos);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, productos);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, productos);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, productos);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, productos);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, productos);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, productos);
                        });


                    }
                  
                    crearTabla();




                  
                
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

            console.log(sucursales);
            const menu_sucursales = document.querySelector("#menu_sucursales");
            const informacion = document.querySelector("#informacion");

            menu_sucursales.addEventListener("click", (e) => {
                console.log(e);
                ///DESPLIEGUE DE SECCION ELIMINAR SUCURSALES
                if(e.target.matches("a#eliminar_sucursales")){fetch('eliminar/eliminar_sucursal.html').then((res) => {return res.text();}).then((url) => {
                    informacion.innerHTML = url;
                

                    informacion.innerHTML = url
                           
                            
                    let boton_buscar = document.querySelector("#boton_buscar_sucursales");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let eliminar_sucursal = document.querySelector("#eliminar_sucursal");
                    let fila = document.querySelector("#fila");
                    let contador = 1;
        
        
        
                    
        
                    const mostrar = (indice, arreglo) => {
                      
        
                        let idSucursal = document.querySelector("#idSucursal").value = arreglo[indice].idSucursal;
                        let titular = document.querySelector("#titular").value = arreglo[indice].titular;
                        let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                        let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                        let colonia = document.querySelector("#colonia").value = arreglo[indice].colonia;
                        let cp= document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                        let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                        let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                        let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                        let latitud = document.querySelector("#latitud").value = arreglo[indice].latitud;
                        let longitud = document.querySelector("#longitud").value = arreglo[indice].longitud;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                      
                    }
        
        
                    
                    eliminar_sucursal.addEventListener("click", () => {
        
                   
                   
                        let idSucursalH = document.querySelector("#idSucursal").value;
                        let sucursalid = parseInt(idSucursalH);
                    
        
                        let data = {
                            idSucursal: sucursalid
                          };
        
                          const queryStrings = new URLSearchParams(data).toString();
                          const options = {
                            method: "POST",
                            headers: {
                              "Content-type": "application/x-www-form-urlencoded"
                            },
                            body: queryStrings
                          }
        
                        fetch("http://localhost:8080/Api_da/api/db/sucursal/eliminar", options)
                        .then(res => {
                            return res.text();
                        }).then((resp) => {
                            console.log(resp);
                        })
                     
                    });
                 
                    boton_buscar.addEventListener("click",() => {
                        
                  
                        let buscador_valor = document.querySelector("#buscador_sucursales").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  sucursales.filter((elemento) => {
                                let sucursal_id = elemento.idSucursal; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                                let buscador = buscador_valor.toLowerCase();
                                if(sucursal_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             
        
                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.idSucursal}</td>
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.telefono}</td>
                                    <td>${elemento.codigoPostal}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;
        
                                }
                                                   
                                   
                              
        
                            });
        
                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");
        
        
                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,coincidencias);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, coincidencias);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, coincidencias);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, coincidencias);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, coincidencias);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, coincidencias);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, coincidencias);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, coincidencias);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, coincidencias);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, coincidencias);
                });
                               
        
                                
                            
                            
        
                           
        
                      
                        
                    })
                 
              
                   
                    boton_actualizar.addEventListener("click", async() => {
                  
                        let buscador_valor = document.querySelector("#buscador_sucursales").value = "";
                        fila.innerHTML = "";
                        await peticionSucursal();
                        console.log(sucursales);    
                        crearTabla();
        
                    });
        
             
        
                    function crearTabla(){
                        let contador = 1;
                        
                        sucursales.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.idSucursal}</td>
                        <td>${empl.nombre}</td>
                        <td>${empl.telefono}</td>
                        <td>${empl.codigoPostal}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });
        
                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");
        
                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,sucursales);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, sucursales);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, sucursales);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, sucursales);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, sucursales);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, sucursales);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, sucursales);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, sucursales);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, sucursales);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, sucursales);
                        });
        
        
                    }
                  
                    crearTabla();
                                         
            

      
                })}
                ///DESPLIEGUE DE SECCION AGREGAR SUCURSALES
                else if(e.target.matches('a#anadir_sucursales')){fetch('agregar/agregar_sucursal.html').then((res) => {return res.text();}).then((url) => {
                    informacion.innerHTML = url

                            let boton_buscar = document.querySelector("#boton_buscar_sucursales");
                            let boton_actualizar = document.querySelector("#boton_actualizar");
                          
                            let fila = document.querySelector("#fila");
                            let empleadosAct = [];
                            let contador = 1;

                            let agregar = document.querySelector("#agregar_sucursal");

                            agregar.addEventListener("click", () => {

                                
                       
                        let titularH = document.querySelector("#titular").value;
                        let rfcH = document.querySelector("#rfc").value;
                        let domicilioH = document.querySelector("#domicilio").value;
                        let coloniaH = document.querySelector("#colonia").value;
                        let cpH = document.querySelector("#cp").value;
                        let ciudadH = document.querySelector("#ciudad").value;
                        let estadoH = document.querySelector("#estado").value;
                        let telefonoH = document.querySelector("#telefono").value;
                        let latitudH = document.querySelector("#latitud").value;
                        let longitudH = document.querySelector("#longitud").value;
                        let nombreH = document.querySelector("#nombre").value;
                            
    
                                let data = {
                                    nombre: nombreH,
                                    titular: titularH,
                                    rfc: rfcH,
                                    domicilio: domicilioH,
                                    colonia: coloniaH,
                                    codigoPostal: cpH,
                                    ciudad: ciudadH,
                                    estado: estadoH,
                                    telefono: telefonoH,
                                    latitud: latitudH,
                                    longitud: longitudH
                                };
                                let URL = "http://localhost:8080/Api_da/api/db/sucursal/agregar";
                                const queryStrings = new URLSearchParams(data).toString();
                                const options = {
                                  method: "POST",
                                  headers: {
                                    "Content-type": "application/x-www-form-urlencoded"
                                  },
                                  body: queryStrings
                                }


                                fetch(URL, options)
                                    .then(res => {
                                        return res.text();

                                    }).then((resp) => {
                                        console.log(resp);
                                    })


                            })

                            const mostrar = (indice, arreglo) => {
                                
                              
                 
        
                        let idSucursal = document.querySelector("#idSucursal").value = arreglo[indice].idSucursal;
                        let titular = document.querySelector("#titular").value = arreglo[indice].titular;
                        let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                        let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                        let colonia = document.querySelector("#colonia").value = arreglo[indice].colonia;
                        let cp= document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                        let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                        let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                        let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                        let latitud = document.querySelector("#latitud").value = arreglo[indice].latitud;
                        let longitud = document.querySelector("#longitud").value = arreglo[indice].longitud;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                      
                    
                            }

                            boton_buscar.addEventListener("click",() => {
                                
                                console.log("adawdawd");
                              
                                let buscador_valor = document.querySelector("#buscador_sucursales").value;
                                        
                                    fila.innerHTML = "";
                             
                                    
                                   let coincidencias =  sucursales.filter((elemento) => {
                                        let sucursal_id = elemento.idSucursal; 
                                        let estatus = elemento.estatus;
                                        let nombre = elemento.nombre;
                                        
                                        let buscador = buscador_valor.toLowerCase();
                                        if(sucursal_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador){
                                            return elemento;
                                        }
                                    });
                                
                                    let contador = 1;
                                    coincidencias.forEach((elemento) => {
                                     

                                        if(contador <= 10){
                                            let info = `<tr id= "filaSelected${contador}">
                                            <td>${elemento.idSucursal}</td>
                                            <td>${elemento.nombre}</td>
                                            <td>${elemento.telefono}</td>
                                            <td>${elemento.codigoPostal}</td>
                                            <td>${elemento.estatus}</td>
                                            </tr>`
                                            fila.innerHTML += info;
                                            contador++;
    
                                        }
                                                           
                                           
                                      

                                    });

                                    console.log(coincidencias)
                              
                                   
                                                                   
                                    let filaMostrar1 = document.querySelector("#filaSelected1");
                                    let filaMostrar2 = document.querySelector("#filaSelected2");
                                    let filaMostrar3 = document.querySelector("#filaSelected3");
                                    let filaMostrar4 = document.querySelector("#filaSelected4");
                                    let filaMostrar5 = document.querySelector("#filaSelected5");
                                    let filaMostrar6 = document.querySelector("#filaSelected6");
                                    let filaMostrar7 = document.querySelector("#filaSelected7");
                                    let filaMostrar8 = document.querySelector("#filaSelected8");
                                    let filaMostrar9 = document.querySelector("#filaSelected9");
                                    let filaMostrar10 = document.querySelector("#filaSelected10");
       
                            })

                              
                            boton_actualizar.addEventListener("click", async() => {
                                let buscador_valor = document.querySelector("#buscador_sucursales").value = "";
                                fila.innerHTML = "";
                                await peticionSucursal();
                               
                                crearTabla();

                            });

                            function crearTabla(){
                                let contador = 1;
                                
                                sucursales.forEach((empl) => {
                                    
                            if(contador <= 10){
                                let info = `<tr id= "filaSelected${contador}">
                                <td>${empl.idSucursal}</td>
                                <td>${empl.nombre}</td>
                                <td>${empl.telefono}</td>
                                <td>${empl.codigoPostal}</td>
                                <td>${empl.estatus}</td>
                                </tr>`
                                fila.innerHTML += info;
                            }
                                
                                contador++;
                            
                                   
                                    
                                });

                               
                                let filaMostrar1 = document.querySelector("#filaSelected1");
                                let filaMostrar2 = document.querySelector("#filaSelected2");
                                let filaMostrar3 = document.querySelector("#filaSelected3");
                                let filaMostrar4 = document.querySelector("#filaSelected4");
                                let filaMostrar5 = document.querySelector("#filaSelected5");
                                let filaMostrar6 = document.querySelector("#filaSelected6");
                                let filaMostrar7 = document.querySelector("#filaSelected7");
                                let filaMostrar8 = document.querySelector("#filaSelected8");
                                let filaMostrar9 = document.querySelector("#filaSelected9");
                                let filaMostrar10 = document.querySelector("#filaSelected10");
                            }
                          
                            crearTabla();
                })}
                

                ///MODIFICAR SUCURSALES
                else if(e.target.matches("a#modificar_sucursales")){fetch("modificar/modificar_sucursal.html").then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url
                    

                    
                    let boton_buscar = document.querySelector("#boton_buscar_sucursales");
                    let boton_actualizar = document.querySelector("#boton_actualizar");
                    let modificar_empleado = document.querySelector("#modificar_sucursal");
                    let fila = document.querySelector("#fila");
                    let empleadosAct = [];
                    let contador = 1;

                  
                    const mostrar = (indice, arreglo) => {
                      
        
                        let idSucursal = document.querySelector("#idSucursal").value = arreglo[indice].idSucursal;
                        let titular = document.querySelector("#titular").value = arreglo[indice].titular;
                        let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                        let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                        let colonia = document.querySelector("#colonia").value = arreglo[indice].colonia;
                        let cp= document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                        let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                        let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                        let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                        let latitud = document.querySelector("#latitud").value = arreglo[indice].latitud;
                        let longitud = document.querySelector("#longitud").value = arreglo[indice].longitud;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;
                                      
                    }
                    
               

                 
                    boton_buscar.addEventListener("click",() => {
               
                      
                        let buscador_valor = document.querySelector("#buscador_sucursales").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  sucursales.filter((elemento) => {
                                let sucursal_id = elemento.idSucursal; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                              
                                let buscador = buscador_valor.toLowerCase();
                                if(sucursal_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.idSucursal}</td>
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.telefono}</td>
                                    <td>${elemento.codigoPostal}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");


                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,coincidencias);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, coincidencias);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, coincidencias);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, coincidencias);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, coincidencias);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, coincidencias);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, coincidencias);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, coincidencias);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, coincidencias);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, coincidencias);
                });
                               

                                
                            
                            
        
                           
        
                      
                        
                    })

                    modificar_empleado.addEventListener("click",() => {
                  
                        let idSucursalH = document.querySelector("#idSucursal").value;
                        let titularH = document.querySelector("#titular").value;
                        let rfcH = document.querySelector("#rfc").value;
                        let domicilioH = document.querySelector("#domicilio").value;
                        let coloniaH = document.querySelector("#colonia").value;
                        let cpH = document.querySelector("#cp").value;
                        let ciudadH = document.querySelector("#ciudad").value;
                        let estadoH = document.querySelector("#estado").value;
                        let telefonoH = document.querySelector("#telefono").value;
                        let latitudH = document.querySelector("#latitud").value;
                        let longitudH = document.querySelector("#longitud").value;
                        let estatusH = document.querySelector("#estatus").value;
                        let nombreH = document.querySelector("#nombre").value;
                        
                        let data = {
                          idSucursal:  idSucursalH,
                          nombre: nombreH,
                          titular: titularH,
                          rfc: rfcH,
                          domicilio: domicilioH,
                          colonia: coloniaH,
                          codigoPostal: cpH,
                          ciudad: ciudadH,
                          estado: estadoH,
                          telefono: telefonoH,
                          latitud: latitudH,
                          longitud: longitudH
                        };

                        const queryStrings = new URLSearchParams(data).toString();
                        const options = {
                          method: "POST",
                          headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                          },
                          body: queryStrings
                        }

                        fetch("http://localhost:8080/Api_da/api/db/sucursal/modificar", options)
                        .then((res) => {return res.text()})
                        .then((resp) => {
                            console.log(resp);
                        })


                    })
                      boton_actualizar.addEventListener("click", async() => {
                        let buscador_valor = document.querySelector("#buscador_sucursales").value = "";
                        fila.innerHTML = "";
                        await peticionSucursal();    
                        crearTabla();

                    });
                   

                    function crearTabla(){
                        let contador = 1;
                        
                        sucursales.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.idSucursal}</td>
                        <td>${empl.nombre}</td>
                        <td>${empl.telefono}</td>
                        <td>${empl.codigoPostal}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");

                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,sucursales);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, sucursales);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, sucursales);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, sucursales);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, sucursales);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, sucursales);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, sucursales);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, sucursales);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, sucursales);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, sucursales);
                        });


                    }
                  
                    crearTabla();
                })}
                else if(e.target.matches("a#buscar_sucursales")){fetch("buscar/buscar_sucursales.html").then((res) => { return res.text()}).then((url) => {
                    informacion.innerHTML = url
                      


                    let boton_buscar = document.querySelector("#boton_buscar_sucursales");
                    let boton_actualizar = document.querySelector("#boton_actualizar");

                    let fila = document.querySelector("#fila");
                    let empleadosAct = [];
                    let contador = 1;


                  
    
                    
                      
                      
                      

                    const mostrar = (indice, arreglo) => {
                        let mapaa = document.getElementById('mapContainer').innerHTML = "";
                        
                        let idSucursal = document.querySelector("#idSucursal").value = arreglo[indice].idSucursal;
                        let titular = document.querySelector("#titular").value = arreglo[indice].titular;
                        let rfc = document.querySelector("#rfc").value = arreglo[indice].rfc;
                        let domicilio = document.querySelector("#domicilio").value = arreglo[indice].domicilio;
                        let colonia = document.querySelector("#colonia").value = arreglo[indice].colonia;
                        let cp= document.querySelector("#cp").value = arreglo[indice].codigoPostal;
                        let ciudad = document.querySelector("#ciudad").value = arreglo[indice].ciudad;
                        let estado = document.querySelector("#estado").value = arreglo[indice].estado;
                        let telefono = document.querySelector("#telefono").value = arreglo[indice].telefono;
                        let latitud = document.querySelector("#latitud").value = arreglo[indice].latitud;
                        let longitud = document.querySelector("#longitud").value = arreglo[indice].longitud;
                        let estatus = document.querySelector("#estatus").value = arreglo[indice].estatus;
                        let nombre = document.querySelector("#nombre").value = arreglo[indice].nombre;

                        let lat = parseFloat(latitud);
                        let long = parseFloat(longitud);
                        var platform = new H.service.Platform({
                            'apikey': 'KLkue_5FCGZBBXvxQCatQWoG6a4qYrtRMtid-4lPXC8'
                          });

                        let maptypes = platform.createDefaultLayers();
                        
                          // Obtain the default map types from the platform object:
                    var defaultLayers = platform.createDefaultLayers();
                    let configuracion = {
                        zoom: 17,
                        center: { lat: lat, lng: long }
                    }   
    
                    let mapa = new H.Map(document.getElementById("mapContainer"),
                            maptypes.vector.normal.map,
                            configuracion);
            
                        let marcador = new H.map.Marker({ lat: lat, lng: long });
                        mapa.addObject(marcador);
            
                        var ui = H.ui.UI.createDefault(mapa, maptypes);
                        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(mapa));
                                      
                    }

                 
                    boton_buscar.addEventListener("click",() => {
              
                        let buscador_valor = document.querySelector("#buscador_sucursales").value;
                                
                            fila.innerHTML = "";
                     
                            
                           let coincidencias =  sucursales.filter((elemento) => {
                                let sucursal_id = elemento.idSucursal; 
                                let estatus = elemento.estatus;
                                let nombre = elemento.nombre;
                            
                                let buscador = buscador_valor.toLowerCase();
                                if(sucursal_id.toString().toLowerCase() == buscador || nombre.toLowerCase() == buscador){
                                    return elemento;
                                }
                            });
                        
                            let contador = 1;
                            coincidencias.forEach((elemento) => {
                             

                                if(contador <= 10){
                                    let info = `<tr id= "filaSelected${contador}">
                                    <td>${elemento.idSucursal}</td>
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.telefono}</td>
                                    <td>${elemento.codigoPostal}</td>
                                    <td>${elemento.estatus}</td>
                                    </tr>`
                                    fila.innerHTML += info;
                                    contador++;

                                }
                                                   
                                   
                              

                            });

                            console.log(coincidencias)
                      
                           
                                                           
                            let filaMostrar1 = document.querySelector("#filaSelected1");
                            let filaMostrar2 = document.querySelector("#filaSelected2");
                            let filaMostrar3 = document.querySelector("#filaSelected3");
                            let filaMostrar4 = document.querySelector("#filaSelected4");
                            let filaMostrar5 = document.querySelector("#filaSelected5");
                            let filaMostrar6 = document.querySelector("#filaSelected6");
                            let filaMostrar7 = document.querySelector("#filaSelected7");
                            let filaMostrar8 = document.querySelector("#filaSelected8");
                            let filaMostrar9 = document.querySelector("#filaSelected9");
                            let filaMostrar10 = document.querySelector("#filaSelected10");


                            
               filaMostrar1.addEventListener("click", () => {
                    mostrar(0,coincidencias);
               });
                filaMostrar2.addEventListener("click", () => {
                    mostrar(1, coincidencias);
                });
                filaMostrar3.addEventListener("click", () => {
                    mostrar(2, coincidencias);
                });
                filaMostrar4.addEventListener("click", () => {
                    mostrar(3, coincidencias);
                });
                filaMostrar5.addEventListener("click", () => {
                    mostrar(4, coincidencias);
                });
                filaMostrar6.addEventListener("click", () => {
                    mostrar(5, coincidencias);
                });
                filaMostrar7.addEventListener("click", () => {
                    mostrar(6, coincidencias);
                });
                filaMostrar8.addEventListener("click", () => {
                    mostrar(7, coincidencias);
                });
                filaMostrar9.addEventListener("click", () => {
                    mostrar(8, coincidencias);
                });
                filaMostrar10.addEventListener("click", () => {
                    mostrar(9, coincidencias);
                });
                               

                                
                            
                            
        
                           
        
                      
                        
                    })
                 
                     
                    boton_actualizar.addEventListener("click", async() => {
                        let buscador_valor = document.querySelector("#buscador_sucursales").value = "";
                        fila.innerHTML = "";
                        await peticionSucursal();
                            
                        crearTabla();

                    });

                    function crearTabla(){
                        let contador = 1;
                        
                        sucursales.forEach((empl) => {
                            
                    if(contador <= 10){
                        let info = `<tr id= "filaSelected${contador}">
                        <td>${empl.idSucursal}</td>
                        <td>${empl.nombre}</td>
                        <td>${empl.telefono}</td>
                        <td>${empl.codigoPostal}</td>
                        <td>${empl.estatus}</td>
                        </tr>`
                        fila.innerHTML += info;
                    }
                        
                        contador++;
                    
                           
                            
                        });

                       
                        let filaMostrar1 = document.querySelector("#filaSelected1");
                        let filaMostrar2 = document.querySelector("#filaSelected2");
                        let filaMostrar3 = document.querySelector("#filaSelected3");
                        let filaMostrar4 = document.querySelector("#filaSelected4");
                        let filaMostrar5 = document.querySelector("#filaSelected5");
                        let filaMostrar6 = document.querySelector("#filaSelected6");
                        let filaMostrar7 = document.querySelector("#filaSelected7");
                        let filaMostrar8 = document.querySelector("#filaSelected8");
                        let filaMostrar9 = document.querySelector("#filaSelected9");
                        let filaMostrar10 = document.querySelector("#filaSelected10");

                        filaMostrar1.addEventListener("click", () => {
                            mostrar(0,sucursales);
                        });
                        filaMostrar2.addEventListener("click", () => {
                            mostrar(1, sucursales);
                        });
                        filaMostrar3.addEventListener("click", () => {
                            mostrar(2, sucursales);
                        });
                        filaMostrar4.addEventListener("click", () => {
                            mostrar(3, sucursales);
                        });
                        filaMostrar5.addEventListener("click", () => {
                            mostrar(4, sucursales);
                        });
                        filaMostrar6.addEventListener("click", () => {
                            mostrar(5, sucursales);
                        });
                        filaMostrar7.addEventListener("click", () => {
                            mostrar(6, sucursales);
                        });
                        filaMostrar8.addEventListener("click", () => {
                            mostrar(7, sucursales);
                        });
                        filaMostrar9.addEventListener("click", () => {
                            mostrar(8, sucursales);
                        });
                        filaMostrar10.addEventListener("click", () => {
                            mostrar(9, sucursales);
                        });


                    }
                  
                    crearTabla();



                })}
            })
        })

    }
  
},false)





