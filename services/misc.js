function createMidnightDate(day, month, year, timezoneOffset) {
    const date = new Date(Date.UTC(year, month - 1, day));
    if (!isNaN(date)) {
        // Apply the timezone offset (in minutes) to the date
        date.setMinutes(date.getMinutes() - timezoneOffset);
        return date;
    }
    return null; // Return null for an invalid date
}

const day = 19; // Exemplo de dia
const month = 10; // Exemplo de mês (outubro)
const year = 2023; // Exemplo de ano
const timezoneOffset = 180; // Exemplo de offset de fuso horário em minutos (UTC-3)

const startDate = createMidnightDate(day, month, year, timezoneOffset);

if (startDate !== null) {
    console.log(startDate.toISOString());
} else {
    console.log("Data inválida.");
}