import { writeData } from "../../services/firebase";

async function saveData(req, res) {
  const adjustedDate = new Date(new Date().getTime() - 180 * 60000);
  let data = {
    serial: req.body.serial,
    name: req.body.name,
    temp: req.body.temp,
    voc: req.body.voc,
    co2: req.body.co2,
    co: req.body.co,

  };
  console.log(data)

  try {
    await writeData(data, adjustedDate);
    res.json({
      horario: adjustedDate.toLocaleString("pt-BR"),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to write data" });
  }
}
export default saveData;

