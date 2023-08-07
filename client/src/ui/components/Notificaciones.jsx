import 'animate.css';
export const Noti = ({ notiCarrito, activeNoti, ide="" }) => {
    let message = "";
    let color = "";
    // switch (notiCarrito){
    //     case "Agregado":
    //         message = "El producto fue agregado a tu carrito."
    //         color = "success";
    //         break;
    //     case "Existe":
    //         message = "El producto ya se encuentra en tu carrito.";
    //         color = "warning";
    //         break;
    //     case "Guardada":
    //         message = "Ubicación guardada.";
    //         color = "success";
    //         break;
    //     case "UbicacionError":
    //         message = "Activa la ubicación.";
    //         color = "danger";
    //         break;
    //     case "UsuarioIncorrecto"
    // }
    if (notiCarrito === "Agregado") {
        message = "El producto fue agregado a tu carrito."
        color = "success"
    }
    else if( notiCarrito === "AgregadoGustos") {
        message = "El producto fue agregado a tus gustos."
        color = "success"
    }
    else if( notiCarrito === "ExisteGustos"){
        message = "El producto ya se encuentra en tus gustos."
        color = "warning"
    }
    else if (notiCarrito === "Existe") {
        message = "El producto ya se encuentra en tu carrito."
        color = "warning"
    }
    else if (notiCarrito === "Eliminado") {
        message = "El producto fue elimando de tu carrito."
        color = "danger"
    }
    else if (notiCarrito === "Guardada") {
        message = "Ubicación guardada.";
        color = "success"
    }
    else if (notiCarrito === "UbicacionError") {
        message = "Activa la ubicación.";
        color = "danger";
    }
    else if( notiCarrito === "UsuarioIncorrecto") {
        message = "Las credenciales que ingreso son incorrectas. por favor verifique sus datos";
        color = "danger";
    }
    else if(notiCarrito === "CorreoVacio"){
        message = "El correo es un compo obligatorio";
        color = "warning"
    }
    else if(notiCarrito === "NombreVacio"){
        message = "El nombre es un campo obligatorio";
        color = "warning";
    }
    else if(notiCarrito === "PassVacio"){
        message = "La contraseña es un campo obligatorio";
        color = "warning"
    }
    else if( notiCarrito === "Actualizado"){
        message = "El usuario fue actualizado";
        color = "success";
    }
    else if(notiCarrito === "EliminadoGusto"){
        message = "El producto fue eliminado de tus guardados";
        color = "danger";
    }
    else if(notiCarrito === "CorreoEnviado"){
        message = "La oferta fue enviada al proveedor, mantente alerta a tus notificaciones por si acepta la oferta o te hace una contra oferta";
        color = "success";
    }
    else if(notiCarrito === "CorreoEnviado2"){
        message = "¡Gracias por su compra se le envio información a su correo!";
        color = "success";
    }
    else if( notiCarrito === "errorCorreo"){
        message = "Algo salio mal porfavor recarga la pagina y vuelve a internatrlo.";
        color = "danger";
    }
    else if(notiCarrito === "PDFcreado"){
        message = "La cotización fue generada";
        color = "success";
    }
    else if(notiCarrito === "ErrorPDF"){
        message = "Algo salio mal por favor recarga la pagina y vuelve a intentarlo";
        color = "danger"
    }
    else if(notiCarrito === "ArticuloUpdate"){
        message = "Articulo actualizado exitosamente"
        color = "success"
    }
    else if( notiCarrito === "ElementosActualizados"){
        message = "Articulos actualizados";
        color = "success";
    }else if(notiCarrito === "Stock"){
        message = "El campo Stock es un campo obligatorio.";
        color="warning"
    }else if(notiCarrito === "descripcion"){
        message = "El campo descripcion es un campo obligatorio.";
        color="warning"
    }else if(notiCarrito === "Precio"){
        message = "El campo Precio es un campo obligatorio.";
        color="warning"
    }else if(notiCarrito === "Nombre"){
        message = "El campo Nombre es un campo obligatorio.";
        color="warning"
    }else if(notiCarrito === "TiempoEN"){
        message ="El campo Tiempo de entrega es un campo obligatorio.";
        color="warning";
    }else if(notiCarrito === "IncluirFoto"){
        message = "Debes incluir almenos una foto del producto";
        color="warning";
    }else if(notiCarrito === "MarcaEN"){
        message = "El campo Marca es un campo obligatorio";
        color="warning";
    }else if(notiCarrito === "CodigoProveedor"){
        message = "El campo Código es un campo obligatorio";
        color="warning";
    }else if(notiCarrito === "PesoIN"){
        message = "El campo Peso es un campo obligatorio";
        color="warning";
    }else if(notiCarrito === "TempoDdeEntregaAgotadoIN"){
        message = "El campo Tiempo de entrega en caso de agotarse es un campo obligatorio.";
        color="warning";
    }else if(notiCarrito === "identificadorAIN"){
        message = "El campo Identificador almacen es un campo obligatorio";
        color="warning";
    }else if(notiCarrito === "numParteIN"){
        message = "El campo Número de parte es un campo obligatorio";
        color="warning";
    }else if(notiCarrito === "ArticuloInsertado"){
        message = "Muy bien, el producto fue regitsrado";
        color="success";
    }else if(notiCarrito === "Imagenactualizadas"){
        message = "Imagenes actualizadas";
        color="success";
    }else if(notiCarrito === "YaExiste"){
        message = "El correo que ingreso ya tiene una cuenta";
        color="danger";
    }else if(notiCarrito === "RegistroUsuario"){
        message = "El usuario se registro con exito, ya puedes iniciar sesión";
        color="success";
    }else if(notiCarrito === "ContraRechazada"){
        message = "Contra oferta rechazada. se le notificara al proveedor";
        color="success";
    }else if(notiCarrito === "Categoria"){
        message = "El campo Categoria es un campo obligatorio";
        color="warning";
    }
    else if(notiCarrito === "CategoriaAll"){
        message = `El campo Categoria es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
    else if(notiCarrito === "StockAll"){
        message = `El campo Stock es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
    else if(notiCarrito === "descripcionAll"){
        message = `El campo descripción es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
    else if(notiCarrito === "PrecioAll"){
        message = `El campo Precio es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }

     else if(notiCarrito === "NombreAll"){
        message = `El campo Nombre es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
    else if(notiCarrito === "TiempoENAll"){
        message = `El campo Tiempo de entrega es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
    else if(notiCarrito === "MarcaENAll"){
        message = `El campo Marca es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
     else if(notiCarrito === "CodigoProveedorAll"){
        message = `El campo Código es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
    else if(notiCarrito === "PesoINAll"){
        message = `El campo Peso es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }
    else if(notiCarrito === "TempoDdeEntregaAgotado"){
        message = `El campo Tiempo de entrega en caso de agotarse es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }else if(notiCarrito === "AlmacenAll"){
        message = `El campo Almacen es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }else if(notiCarrito === "AlmacenUbiAll"){
        message= `El campo Ubicación almacen es un campo obligatorio, en el articulo ${ide}`;
        color="warning";
    }else if(notiCarrito === "Almacen"){
        message = "El campo Almacen es un campo obligatorio";
        color="warning";
    }else if(notiCarrito === "AlmacenUbi"){
        message= "El campo Ubicación almacen es un campo obligatorio";
        color="warning";
    }
    else if(notiCarrito === "NombrePerfil"){
        message = "El campo nombre es un campo obligatorio"
        color="warning";
    }
    else if(notiCarrito === "TelefonoPerfil"){
        message = "El campo telefono es un campo obligatorio"
        color="warning";
    }
    else if(notiCarrito === "passPerfil"){
        message = "El campo contraseña es un campo obligatorio"
        color="warning";
    }
    else if(notiCarrito === "direccionPerfil"){
        message = "El campo dirección es un campo obligatorio"
        color="warning";
    }
    else if(notiCarrito === "CPPerfil"){
        message = "El campo Código postal es un campo obligatorio"
        color="warning";
    }else if(notiCarrito === "ImagenUsuario"){
        message = "Su foto de usuario ha sido actualizada";
        color = "success"
    }
    
    return (
        <div style={{ "position": "fixed", "right": "20px", "top": "80px", "zIndex": "1", "display": "block" }} className={`toast align-items-center text-bg-${color} border-0 animate__animated ${(activeNoti) ? 'animate__fadeInRight' : 'animate__fadeOutRight'} `} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    {message}
                </div>
                <button type="button" className="btn-close btn-close-dark me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    )
}