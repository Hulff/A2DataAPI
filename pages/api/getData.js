import { getData } from "../../services/firebase";

function createMidnightDate(day, month, year) {
    const date = new Date(Date.UTC(year, month - 1, day));
    if (!isNaN(date)) {
        date.setMinutes(date.getMinutes());
        return date;
    }
    return null;
}
function createEndOfDayDate(day, month, year) {
    const date = new Date(Date.UTC(year, month - 1, day, 23, 59, 59, 999));
    if (!isNaN(date)) {
        date.setMinutes(date.getMinutes());
        return date;
    }
    return null; 
}
async function sendData(req, res) {
    let params = req.body;
    console.log(req.body);
    const startDate = createMidnightDate(params.sD, params.month, params.year);
    const endDate = createEndOfDayDate(params.fD, params.month, params.year);
    console.log(startDate)
    console.log(endDate)
    if ((startDate,endDate) == null) {
        res.status(500).json({ error: "Data inválida" });
    }
    try {
        let data = await getData("13898", startDate, endDate); // Usando await para esperar a função getData terminar
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}

export default sendData;
