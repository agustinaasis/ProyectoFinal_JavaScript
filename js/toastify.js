function toastify(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            padding: '10px 20px',
            borderRadius: '30px',
            border: '2px solid transparent',
            background: '#877c7c',
            color: '#fff',
            margin: '60px 16px ',
        },
        onClick: function () { } // Callback after click
    }).showToast();
}





export { toastify };