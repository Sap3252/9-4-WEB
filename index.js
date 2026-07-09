const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const ciudad = document.getElementById("ciudad");
const codigoPostal = document.getElementById("codigoPostal");
const dni = document.getElementById("dni");
const bienvenida = document.getElementById("bienvenida");

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalMensaje = document.getElementById("modalMensaje");
const modalCerrar = document.getElementById("modalCerrar");

var boolnombre = false;
var boolemail = false;
var boolpassword = false;
var boolconfirmPassword = false;
var booledad = false;
var booltelefono = false;
var booldireccion = false;
var boolciudad = false;
var boolcodigoPostal = false;
var booldni = false;

// Validar nombre
nombre.addEventListener("blur", function() {
    const error = nombre.nextElementSibling;
    error.textContent = "";
    
    if (nombre.value.length === 0) {
        error.textContent = "El nombre es obligatorio";
    } else if (nombre.value.length <= 6) {
        error.textContent = "El nombre debe tener más de 6 letras";
    } else if (nombre.value.indexOf(" ") === -1) {
        error.textContent = "El nombre debe tener al menos un espacio";
    } else {
        boolnombre = true;
    }
});

nombre.addEventListener("input", function() {
    nombre.nextElementSibling.textContent = "";
});

// Validar email
email.addEventListener("blur", function() {
    const error = email.nextElementSibling;
    error.textContent = "";
    
    if (email.value.length === 0) {
        error.textContent = "El email es obligatorio";
    } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        error.textContent = "El email no es válido";
    }
    else {
        boolemail = true;
    }
});

email.addEventListener("input", function() {
    email.nextElementSibling.textContent = "";
});

// Validar contraseña
password.addEventListener("blur", function() {
    const error = password.nextElementSibling;
    error.textContent = "";
    
    if (password.value.length === 0) {
        error.textContent = "La contraseña es obligatoria";
    } else if (password.value.length < 8) {
        error.textContent = "La contraseña debe tener al menos 8 caracteres";
    } else {
        let hasLetter = false;
        let hasNumber = false;
        for (let char of password.value) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                hasLetter = true;
            }
            if (char >= '0' && char <= '9') {
                hasNumber = true;
            }
        }
        if (!hasLetter || !hasNumber) {
            error.textContent = "La contraseña debe tener letras y números";
        }
        else {
            boolpassword = true;
        }
    }
});

password.addEventListener("input", function() {
    password.nextElementSibling.textContent = "";
});

// Validar confirmación de contraseña
confirmPassword.addEventListener("blur", function() {
    const error = confirmPassword.nextElementSibling;
    error.textContent = "";
    
    if (confirmPassword.value.length === 0) {
        error.textContent = "Debe confirmar la contraseña";
    } else if (confirmPassword.value !== password.value) {
        error.textContent = "Las contraseñas no coinciden";
    } else {
        boolconfirmPassword = true;
    }
});

confirmPassword.addEventListener("input", function() {
    confirmPassword.nextElementSibling.textContent = "";
});

// Validar edad
edad.addEventListener("blur", function() {
    const error = edad.nextElementSibling;
    error.textContent = "";
    
    if (edad.value.length === 0) {
        error.textContent = "La edad es obligatoria";
    } else {
        const edadNum = parseInt(edad.value);
        if (isNaN(edadNum) || edadNum < 18) {
            error.textContent = "Debe ser mayor de 18 años";
        } else {
            booledad = true;
        }
    }
});

edad.addEventListener("input", function() {
    edad.nextElementSibling.textContent = "";
});

// Validar teléfono
telefono.addEventListener("blur", function() {
    const error = telefono.nextElementSibling;
    error.textContent = "";
    
    if (telefono.value.length === 0) {
        error.textContent = "El teléfono es obligatorio";
    } else if (telefono.value.length < 7) {
        error.textContent = "El teléfono debe tener al menos 7 dígitos";
    } else {
        let soloDigitos = true;
        for (let char of telefono.value) {
            if (char < '0' || char > '9') {
                soloDigitos = false;
            }
        }
        if (!soloDigitos) {
            error.textContent = "El teléfono debe contener solo dígitos";
        } else {
            booltelefono = true;
        }
    }
});

telefono.addEventListener("input", function() {
    telefono.nextElementSibling.textContent = "";
});

// Validar dirección
direccion.addEventListener("blur", function() {
    const error = direccion.nextElementSibling;
    error.textContent = "";
    
    if (direccion.value.length === 0) {
        error.textContent = "La dirección es obligatoria";
    } else if (direccion.value.length < 5) {
        error.textContent = "La dirección debe tener al menos 5 caracteres";
    } else if (direccion.value.indexOf(" ") === -1) {
        error.textContent = "La dirección debe tener al menos un espacio";
    }
    else {
        booldireccion = true;
    }
});

direccion.addEventListener("input", function() {
    direccion.nextElementSibling.textContent = "";
});

// Validar ciudad
ciudad.addEventListener("blur", function() {
    const error = ciudad.nextElementSibling;
    error.textContent = "";
    
    if (ciudad.value.length === 0) {
        error.textContent = "La ciudad es obligatoria";
    } else if (ciudad.value.length < 3) {
        error.textContent = "La ciudad debe tener al menos 3 caracteres";
    }
    else {
        boolciudad = true;
    }
});

ciudad.addEventListener("input", function() {
    ciudad.nextElementSibling.textContent = "";
});

// Validar código postal
codigoPostal.addEventListener("blur", function() {
    const error = codigoPostal.nextElementSibling;
    error.textContent = "";
    
    if (codigoPostal.value.length === 0) {
        error.textContent = "El código postal es obligatorio";
    } else if (codigoPostal.value.length < 3) {
        error.textContent = "El código postal debe tener al menos 3 caracteres";
    }
    else {
        boolcodigoPostal = true;
    }
});

codigoPostal.addEventListener("input", function() {
    codigoPostal.nextElementSibling.textContent = "";
});

// Validar DNI
dni.addEventListener("blur", function() {
    const error = dni.nextElementSibling;
    error.textContent = "";
    
    if (dni.value.length === 0) {
        error.textContent = "El DNI es obligatorio";
    } else if (dni.value.length !== 7 && dni.value.length !== 8) {
        error.textContent = "El DNI debe tener 7 u 8 dígitos";
    } else {
        let soloDigitos = true;
        for (let char of dni.value) {
            if (char < '0' || char > '9') {
                soloDigitos = false;
            }
        }
        if (!soloDigitos) {
            error.textContent = "El DNI debe contener solo dígitos";
        }
        else {
            booldni = true;
        }
    }
});

dni.addEventListener("input", function() {
    dni.nextElementSibling.textContent = "";
});

function mostrarModal(titulo, mensaje) {
    modalTitulo.textContent = titulo;
    modalMensaje.textContent = mensaje;
    modal.classList.remove("oculto");
}

function ocultarModal() {
    modal.classList.add("oculto");
}

modalCerrar.addEventListener("click", ocultarModal);

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        ocultarModal();
    }
});

function manejarExito(data) {
    bienvenida.textContent = "Hola, " + nombre.value;
    bienvenida.style.color = "#e6d235";

    const datosGuardados = {
        nombre: nombre.value,
        email: email.value,
        edad: edad.value,
        telefono: telefono.value,
        direccion: direccion.value,
        ciudad: ciudad.value,
        codigoPostal: codigoPostal.value,
        dni: dni.value
    };
    localStorage.setItem("datosFormulario", JSON.stringify(datosGuardados));

    mostrarModal("Registro exitoso", "Tus datos se enviaron correctamente.");
}

function manejarError(error) {
    mostrarModal("Error en el envío", "No se pudieron enviar los datos. Intenta nuevamente más tarde.");
}

formulario.addEventListener("submit", function(e) {

    e.preventDefault();
    if (!boolnombre || !boolemail || !boolpassword || !boolconfirmPassword || !booledad || !booltelefono || !booldireccion || !boolciudad || !boolcodigoPostal || !booldni) {
        alert("Por favor, complete el formulario correctamente antes de enviar.");
        return;
    }

    const queryParams = new URLSearchParams(new FormData(formulario)).toString();
    const url = "https://jsonplaceholder.typicode.com/posts?" + queryParams;

    fetch(url, { method: "POST" })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Respuesta del servidor no exitosa: " + response.status);
            }
            return response.json();
        })
        .then(manejarExito)
        .catch(manejarError);
});

window.addEventListener("load", function() {
    const guardados = localStorage.getItem("datosFormulario");
    if (!guardados) {
        return;
    }

    const datos = JSON.parse(guardados);
    nombre.value = datos.nombre || "";
    email.value = datos.email || "";
    edad.value = datos.edad || "";
    telefono.value = datos.telefono || "";
    direccion.value = datos.direccion || "";
    ciudad.value = datos.ciudad || "";
    codigoPostal.value = datos.codigoPostal || "";
    dni.value = datos.dni || "";
});