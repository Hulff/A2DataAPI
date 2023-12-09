
import { writeData,writeInfo } from "../../services/firebase";

async function saveData(req, res) {
  const adjustedDate = new Date(new Date().getTime());
  let data = req.body
  console.log(req.body)

  try {
    await writeData(data, adjustedDate);
    await writeInfo(req.body.serial,adjustedDate);
    res.json({
      horario: adjustedDate
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to write data" });
  }
}
export default saveData;

