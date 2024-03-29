import { getData } from "../../services/firebase";

function createMidnightDate(day, month, year) {
    const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
    return isNaN(date) ? null : date;
}

function createEndOfDayDate(day, month, year) {
    const date = new Date(Date.UTC(year, month - 1, day, 23, 59, 59, 999));
    return isNaN(date) ? null : date;
}
const substituirServerTimePorHorarioNormal = (dados) => {
    dados.forEach((item) => {
        const timestamp = item.serverTime.seconds + item.serverTime.nanoseconds / 1e9;
        const date = new Date(timestamp * 1000);

        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'America/Sao_Paulo', // ajuste conforme necessário
        };

        item.Time = date.toLocaleString('pt-BR', options);

        // Remove o campo serverTime se não for mais necessário
        delete item.serverTime;
    });

    return dados;
};


async function sendData(req, res) {
    let params = req.body;
    console.log(req.body);

    const startDate = createMidnightDate(params.sD, params.month, params.year);
    const endDate = createEndOfDayDate(params.fD, params.month, params.year);


    if (startDate === null || endDate === null) {
        res.status(500).json({ error: "Data inválida" });
        return; // Return to exit the function in case of an error
    }

    try {
        let data = await getData(req.body.id, startDate, endDate);
        substituirServerTimePorHorarioNormal(data)
        if (data === null) {
            res.status(500).json({ error: "Failed to fetch data" });
            return; // Return to exit the function in case of an error
        }
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}

export default sendData;
