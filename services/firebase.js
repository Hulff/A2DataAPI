import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

const firebaseConfig = {
  apiKey: "AIzaSyAkV7_nu0LT2Ya8GQzsSYP5mITLGKEuCTo",
  authDomain: "a2dataapi.firebaseapp.com",
  projectId: "a2dataapi",
  storageBucket: "a2dataapi.appspot.com",
  messagingSenderId: "17389564071",
  appId: "1:17389564071:web:f227c75e8bbfe1be5beb82",
  measurementId: "G-YRM4GW93B5",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function writeData (data,time) {

  await setDoc(doc(db, "sensors", "data", data.serial, uuid()), {
    name:data.name,
    co2:data.co2,
    co:data.co,
    voc:data.voc,
    temp:data.temp,
    serverTime:time
  });
}

