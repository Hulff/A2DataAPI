import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, remove, get, child } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAkV7_nu0LT2Ya8GQzsSYP5mITLGKEuCTo",
    authDomain: "a2dataapi.firebaseapp.com",
    projectId: "a2dataapi",
    storageBucket: "a2dataapi.appspot.com",
    messagingSenderId: "17389564071",
    appId: "1:17389564071:web:f227c75e8bbfe1be5beb82",
    measurementId: "G-YRM4GW93B5"
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function writeData(code, time, data) {
  return new Promise((resolve, reject) => {
    set(ref(database, `devices/${code}/${time}`), data)
      .then(() => {
        console.log("Success");
        resolve();
      })
      .catch((error) => {
        console.log("Error", error);
        reject(error);
      });
  });
}
export async function getData(code) {
  const snapshot = await get(child(ref(database), `devices/${code}`));
  if (snapshot.exists()) {
    let data = snapshot.val();
    return data;
  } else {
    console.log("No data available");
    return null;
  }
}


