const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("phone");
const emailSecundario = document.getElementById("email-sec");
const ideiaTexto = document.getElementById("about-problem");
const buttonForm = document.querySelector(".send-form-container-about-me");

const enviarFormulario = async () => {
  if (!nome.value || !email.value || !ideiaTexto.value) {
    alert("Por favor, preencha pelo menos os campos: Nome, Email e Ideia.");
    return;
  }

  const dados = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    emailSecundario: emailSecundario.value || "null",
    mensagem: ideiaTexto.value
  };

  try {
    const response = await fetch("/api/send-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });

    const result = await response.json();
    alert(result.message);

    nome.value = "";
    email.value = "";
    telefone.value = "";
    emailSecundario.value = "";
    ideiaTexto.value = "";

  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    alert("Erro ao enviar mensagem. Verifique o console.");
  }
};

buttonForm.addEventListener("click", enviarFormulario);
