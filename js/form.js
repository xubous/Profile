const nome = document.getElementById ( "nome" )
const email = document.getElementById ( "email" )
const telefone = document.getElementById ( "phone" )
const emailSecundario = document.getElementById ( "email-sec" )
const ideiaTexto = document.getElementById ( "about-problem" )
const buttonForm = document.querySelector ( ".send-form-container-about-me" )

buttonForm.addEventListener ( "click", ( ) => {
    const objeto = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        emailSecundario: emailSecundario.value || "",
        ideia: ideiaTexto.value
    }

    fetch ( "http://localhost:4567/submit", {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ( objeto )
    } )
    .then ( res => res.text ( ) )
    .then ( data => console.log ( data ) )
    .catch ( err => console.error ( err ) )

    nome.value = ""
    email.value = ""
    telefone.value = ""
    emailSecundario.value = ""
    ideiaTexto.value = ""
} )
