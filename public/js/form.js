window.onload = () => {
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

        const formData = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            emailSecundario: emailSecundario.value,
            ideia: ideiaTexto.value
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                nome.value = "";
                email.value = "";
                telefone.value = "";
                emailSecundario.value = "";
                ideiaTexto.value = "";
            } else {
                alert(data.message || "Erro ao enviar formulário.");
            }
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Erro ao enviar formulário. Veja o console.");
        }
    };

    buttonForm.addEventListener("click", (e) => {
        e.preventDefault();
        enviarFormulario();
    });
};
