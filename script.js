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

function enviarMail(){
    event.preventDefault();

    const nombre = document.getElementById('input_comp-kgdwzl4d').value;
    const telefono = document.getElementById('input_comp-kgdwzl4w').value;
    const email = document.getElementById('input_comp-kgdwzl50').value;
    const mensaje = document.getElementById('textarea_comp-kgdwzl54').value;

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
        console.log("response: " + response);
        console.log("data: " + data);
        if (data.message) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "¡Correo enviado exitosamente!",
                showConfirmButton: false,
                timer: 1500
            });
            document.getElementById('contact-form-quienes').reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Algo salió mal al enviar el correo! Inténtalo de nuevo más tarde."
            });
            document.getElementById('contact-form-quienes').reset();
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
        document.getElementById('contact-form-quienes').reset();
    });
}


let slideIndex = 0;
const slides = document.querySelector('.carrusel-slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlides(n) {
    showSlide(slideIndex + n);
}

// Para cambiar automáticamente cada 5 segundos
setInterval(() => {
    moveSlides(1);
}, 5000);





