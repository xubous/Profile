/* global emailjs */ // evita alerta no editor sobre 'emailjs' não definido

// Seleção dos elementos
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("phone");
const emailSecundario = document.getElementById("email-sec");
const ideiaTexto = document.getElementById("about-problem");
const buttonForm = document.querySelector(".send-form-container-about-me");

// Inicializa o EmailJS
(function() {
  emailjs.init("DwHqRsRHDTxUcEI-x");
})();

// Função para enviar o formulário
const enviarFormulario = async () => {
  // Validação mínima
  if (!nome.value || !email.value || !ideiaTexto.value) {
    alert("Por favor, preencha pelo menos os campos: Nome, Email e Ideia.");
    return;
  }

  const templateParams = {
    from_name: nome.value,
    from_email: email.value,
    telefone: telefone.value,
    email_secundario: emailSecundario.value,
    message: ideiaTexto.value
  };

  try {
    const response = await emailjs.send(
      "service_2wp1x6o",
      "template_misy95p",
      templateParams
    );

    console.log("✅ SUCESSO!", response.status, response.text);
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");

    // Limpar campos
    nome.value = "";
    email.value = "";
    telefone.value = "";
    emailSecundario.value = "";
    ideiaTexto.value = "";

  } catch (error) {
    console.error("❌ FALHA AO ENVIAR EMAIL:", error);
    alert("Erro ao enviar mensagem. Verifique o console para mais detalhes.");
  }
};

// Adiciona o evento ao botão
buttonForm.addEventListener("click", enviarFormulario);
