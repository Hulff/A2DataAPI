import { writeData, getData } from "../../services/firebase";

function saveData(req, res) {
  const date = new Date();
  let data = {
    temp:req.body.temp,
    vocs:req.body.vocs,
    co2:req.body.co2

  }
  console.log(data);

  // res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  writeData(data.code, date, data);

  res.json({
    horario: date,
  });
}
export default saveData;
