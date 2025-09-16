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
        from_telefone: telefone.value,
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
            alert ( "Erro ao enviar mensagem" )
        } )
}

buttonForm.addEventListener ( "click", enviarFormulario )
