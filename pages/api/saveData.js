import { writeData } from "../../services/firebase";

function saveData(req, res) {
  const currentDate = new Date();
  const adjustedDate = new Date(currentDate.getTime() + -180 * 60000);
  let data = {
    temp: req.body.temp,
    vocs: req.body.vocs,
    co2: req.body.co2,
  };
  console.log(data);
  writeData(req.body.code, adjustedDate, data);
  res.json({
    horario: adjustedDate.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }),
  });
}
export default saveData;
