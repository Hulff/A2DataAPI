import { writeData, getData } from "../../services/firebase";

function saveData(req, res) {
  const currentDate = new Date();
  const adjustedDate = new Date(currentDate.getTime() + 180 * 60000);
  const locale = "pt-BR";
  const formattedDate = adjustedDate.toLocaleString(locale);

  // Imprime a data formatada
  console.log("Data:", formattedDate);

  let data = {
    temp: req.body.temp,
    vocs: req.body.vocs,
    co2: req.body.co2,
  };
  console.log(data);

  // res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  writeData(req.body.code, adjustedDate, data);

  res.json({
    horario: formattedDate,
  });
}
export default saveData;
