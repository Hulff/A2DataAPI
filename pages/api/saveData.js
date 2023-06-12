import { writeData , getData } from "../../services/firebase";

function saveData(req, res) {
const date = new Date();
const locale = 'pt-BR';
const options = { dateStyle: 'short', timeStyle: 'short' };
const formattedDate = date.toLocaleString(locale, options);

// Imprime a data formatada
console.log('Data:', formattedDate);

  let data = {
    temp: req.body.temp,
    vocs: req.body.vocs,
    co2: req.body.co2,
  };
  console.log(data);

  // res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  writeData(req.body.code, date, data);

  res.json({
    horario: formattedDate,
  });
}
export default saveData;
