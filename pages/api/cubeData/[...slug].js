import { writeData } from "../../../services/firebase";
export default async function (req, res) {
    const { slug } = req.query; // Obtém o slug da URL
    const adjustedDate = new Date(new Date().getTime());
    let data = {
        altitude:0,
        bateria:0,
        co2:0,
        pressao:0,
        temp:0,
        voc:0,
umidade:0,
        serial:0,
    }
    console.log(slug);
    if (slug == "") {
        res.send("vazio")
    } else {
        let fields = Object.keys(data)
        for (let i=0;i<slug.length;i++) {
            data[`${fields[i]}`]= slug[i]
        }
        console.log(data)
        try {
            await writeData(data, adjustedDate);
            res.json({
                horario: adjustedDate
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to write data" });
        }
    }

}
