function irs() {

    let c = "emp";
    let u = "emp1";

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    if (document.forms.password.value == c && document.forms.login.value == u) {
        window.location = "../menu_sucursal.html";
    }

    else {
        Toast.fire({
            icon: 'warning',
            title: 'Usuario o contrasena incorrecto'
          })
    }
}