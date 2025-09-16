import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db("meuPortfolio"); // substitua pelo nome do seu banco
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // validação mínima
    if (!data.nome || !data.email || !data.ideia) {
      return res.status(400).json({ message: "Nome, Email e Ideia são obrigatórios." });
    }

    try {
      const db = await connectDB();
      await db.collection("contatos").insertOne(data);
      res.status(200).json({ message: "Formulário enviado com sucesso!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao salvar dados no banco." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
