import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkV7_nu0LT2Ya8GQzsSYP5mITLGKEuCTo",
  authDomain: "a2dataapi.firebaseapp.com",
  databaseURL: "https://a2dataapi-default-rtdb.firebaseio.com",
  projectId: "a2dataapi",
  storageBucket: "a2dataapi.appspot.com",
  messagingSenderId: "17389564071",
  appId: "1:17389564071:web:f227c75e8bbfe1be5beb82",
  measurementId: "G-YRM4GW93B5"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function writeData(data, time) {

  await setDoc(doc(db, "sensors", "data", data.serial, uuid()), {
    ...data, serverTime: time
  });
}


import { query, collection, getDocs, where } from "firebase/firestore";

export async function getData(serial, startDate, endDate) {
  try {
    const start = new Date(startDate);
    const end = new Date(endDate);
    console.log(startDate)
    console.log(endDate)
    const q = query(
      collection(db, "sensors", "data", serial),
      where("serverTime", ">=", start),
      where("serverTime", "<=", end)
    );

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    if (data.length > 0) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

