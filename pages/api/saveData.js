import { writeData } from "../../services/firebase";
function saveData(req, res) {
  const currentDate = new Date();
  const adjustedDate = new Date(currentDate.getTime() + -180 * 60000);
  const finalDate = adjustedDate.toLocaleString("pt-BR");
  let data = {
    temp: req.body.temp,
    vocs: req.body.vocs,
    co2: req.body.co2,
  };
  writeData(req.body.code, finalDate, data);
  res.json({
    horario: finalDate,
  });
}
export default saveData;
