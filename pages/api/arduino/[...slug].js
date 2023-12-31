import { set,ref } from "firebase/database";
import { db2 } from "../../../services/firebase";
function writeUserData(c) {
    const modeRef = ref(db2, '/');
    set(modeRef, {
        mode:c
    });
}
export default async function (req, res) {
    const { slug } = req.query; // Obtém o slug da URL
    console.log(slug);
    if (slug == "") {
    } else {
     
        try {
            let m;
            if(slug[0]==1) {
                m = "blue"
            } else if (slug[0] == 2) {
                m = "lime"
            } else if (slug[0]== 3) {
                m = "red"
            }
            writeUserData(m)
            res.send("foi")
        } catch (error) {
            console.error(error);
            res.send(error)
        }
    }

}
