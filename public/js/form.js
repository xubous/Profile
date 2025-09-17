window.onload = () => {
    const form = document.getElementById("meuForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("phone").value;
        const emailSecundario = document.getElementById("email-sec").value;
        const ideia = document.getElementById("about-problem").value;

        if (!nome || !email || !ideia) {
            alert("Por favor, preencha pelo menos Nome, Email e Ideia.");
            return;
        }

        const formData = { nome, email, telefone, emailSecundario, ideia };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                form.reset();
            } else {
                alert(data.message || "Erro ao enviar formulário.");
            }
        } catch (err) {
            console.error("Erro ao enviar formulário:", err);
            alert("Erro ao enviar formulário. Veja o console.");
        }
    });
};
