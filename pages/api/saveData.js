import { writeData, getData } from "../../services/firebase"

function saveData(req, res) {
  const date = new Date();
  let data = { ...req.body };
  console.log(data);

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

//   writeData(data.code,date, data.data);

  res.json({
    horario: date,
  });
}
export default saveData;
