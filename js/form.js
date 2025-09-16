const nome = document.getElementById ( "nome" )
const email = document.getElementById ( "email" )
const telefone = document.getElementById ( "phone" )
const emailSecundario = document.getElementById ( "email-sec" )
const ideiaTexto = document.getElementById ( "about-problem" )
const buttonForm = document.querySelector ( ".send-form-container-about-me" )

( function ( ) {
    emailjs.init ( "DwHqRsRHDTxUcEI-x" )
} ) ( )

const enviarFormulario = ( ) =>
{
    if ( ! nome.value || ! email.value || ! ideiaTexto.value )
    {
        alert ( "Por favor, preencha pelo menos os campos: Nome, Email e Ideia." )
        return
    }

    const templateParams = {
        from_name: nome.value,
        from_email: email.value,
        from_telefone: telefone.value || "Não informado",
        from_email_secundario: emailSecundario.value || "Não informado",
        from_message: ideiaTexto.value
    }

    emailjs.send ( "service_2wp1x6o", "template_misy95p", templateParams )
        .then ( response =>
        {
            alert ( "Mensagem enviada com sucesso!" )

            nome.value = ""
            email.value = ""
            telefone.value = ""
            emailSecundario.value = ""
            ideiaTexto.value = ""
        } )
        .catch ( error =>
        {
            console.error ( "Erro ao enviar e-mail:", error )
            alert ( "Erro ao enviar mensagem. Verifique o console." )
        } )
}

buttonForm.addEventListener ( "click", enviarFormulario )
