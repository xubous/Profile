const nome = document.getElementById ( "nome" )
const email = document.getElementById ( "email" )
const telefone = document.getElementById ( "phone" )
const emailSecundario = document.getElementById ( "email-sec" )
const ideiaTexto = document.getElementById ( "about-problem" )
const buttonForm = document.querySelector ( ".send-form-container-about-me" )

( function ( ) {
    emailjs.init ( "DwHqRsRHDTxUcEI-x" )
} ) ( )

buttonForm.addEventListener ( "click", ( ) => {
    if ( !nome.value || !email.value || !ideiaTexto.value ) {
        alert ( "Por favor, preencha pelo menos os campos: Nome, Email e Ideia." )
        return
    }

    const templateParams = {
        from_name: nome.value,
        from_email: email.value,
        telefone: telefone.value,
        email_secundario: emailSecundario.value,
        message: ideiaTexto.value
    }

    emailjs.send ( "service_2wp1x6o", "template_misy95p", templateParams )
        .then ( function ( response ) {
            console.log ( "SUCESSO!", response.status, response.text )
            alert ( "Mensagem enviada com sucesso! Entrarei em contato em breve." )
            
            nome.value = ""
            email.value = ""
            telefone.value = ""
            emailSecundario.value = ""
            ideiaTexto.value = ""
        }, function ( error ) {
            console.log ( "FALHA...", error )
            alert ( "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente por um dos canais abaixo." )
        } )
} )