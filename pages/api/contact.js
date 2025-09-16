import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!uri) {
  throw new Error("Defina a variável MONGODB_URI no Vercel");
}

client = new MongoClient(uri);
clientPromise = client.connect();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, email, telefone, emailSecundario, ideia } = req.body;

  if (!nome || !email || !ideia) {
    return res.status(400).json({ message: "Nome, Email e Ideia são obrigatórios" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("meuBanco"); // substitua pelo nome do seu banco
    const collection = db.collection("formulario");

    const result = await collection.insertOne({
      nome,
      email,
      telefone: telefone || "Não informado",
      emailSecundario: emailSecundario || "Não informado",
      ideia,
      createdAt: new Date(),
    });

    res.status(200).json({ message: "Formulário enviado com sucesso!", data: result });
  } catch (error) {
    console.error("Erro ao salvar no MongoDB:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
}
