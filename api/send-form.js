export default async function handler ( req, res ) 
{
  if ( req.method !== "POST" ) 
    {
    return res.status ( 405 ).json ( { error: "Método não permitido" } );
  }

  const { nome, email, telefone, emailSecundario, mensagem } = req.body;

  console.log ( "Formulário recebido:", { nome, email, telefone, emailSecundario, mensagem } );

  return res.status ( 200 ).json ( { message: "Formulário recebido com sucesso!" } );
}
