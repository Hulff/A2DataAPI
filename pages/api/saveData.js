import { writeData } from "../../services/firebase";

async function saveData(req, res) {
  const adjustedDate = new Date(new Date().getTime() + -180 * 60000);
  let data = {
    temp: req.body.temp,
    vocs: req.body.vocs,
    co2: req.body.co2,
  };

  try {
    await writeData(req.body.code, adjustedDate, data);
    res.json({
      horario: adjustedDate.toLocaleString("pt-BR"),
    });
  } catch (error) {
    // Trate qualquer erro que possa ocorrer durante a operação de salvamento
    res.status(500).json({ error: "Falha ao salvar os dados" });
  }
}

export default saveData;