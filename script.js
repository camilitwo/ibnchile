document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('input_comp-kgbiuupk').value;
    const telefono = document.getElementById('input_comp-kgbiuupp').value;
    const email = document.getElementById('input_comp-kgbiuupt1').value;
    const mensaje = document.getElementById('textarea_comp-kgbiuupy').value;

    const data = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        mensaje: mensaje
    };

    fetch('https://resend-next.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())  // Parsear la respuesta como JSON
    .then(data => {
        console.log("response: "+response);
        console.log("data: "+data);
        if (data.message) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "¡Correo enviado exitosamente!",
                showConfirmButton: false,
                timer: 1500
              });
            document.getElementById('contact-form').reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Algo salió mal al enviar el correo! Inténtalo de nuevo más tarde."
              });
              document.getElementById('contact-form').reset();
            return response.text().then(text => { throw new Error(text) });
        }
    })
    .catch(error => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Correo enviado exitosamente!",
            showConfirmButton: false,
            timer: 1500
          });
        document.getElementById('contact-form').reset();
    });
});
