import { getData } from "../../services/firebase";

function createMidnightDate(day, month, year) {
    const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
    return isNaN(date) ? null : date;
}

function createEndOfDayDate(day, month, year) {
    const date = new Date(Date.UTC(year, month - 1, day, 23, 59, 59, 999));
    return isNaN(date) ? null : date;
}
function substituirServerTimePorHorarioNormal(dados) {
    // Itera sobre os objetos no array de dados
    dados.forEach((item) => {
        // Obtém o timestamp do campo serverTime
        const timestamp = item.serverTime.seconds;

        // Cria um objeto Date usando o timestamp
        const data = new Date(timestamp * 1000); // Multiplica por 1000 para converter segundos para milissegundos

        // Substitui o campo serverTime pelo horário normal formatado
        item.horarioNormal = data.toLocaleString();

        // Remove o campo serverTime se não for mais necessário
        delete item.serverTime;
    });
    return dados;
}


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
