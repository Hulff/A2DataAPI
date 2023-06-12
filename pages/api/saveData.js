import { writeData } from "../../services/firebase";
function saveData(req, res) {
  const adjustedDate = new Date(new Date().getTime() + -180 * 60000);
  let fixedDate = adjustedDate.toLocaleString("pt-BR");
  let data = {
    temp: req.body.temp,
    vocs: req.body.vocs,
    co2: req.body.co2,
  };
  writeData(req.body.code, adjustedDate, data);
  res.json({
    horario: fixedDate,
  });
}
export default saveData;
