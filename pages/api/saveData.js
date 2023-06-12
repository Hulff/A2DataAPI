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
    // Handle the error
    res.status(500).json({ error: "Failed to write data" });
  }
}
export default saveData;
