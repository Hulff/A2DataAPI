import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

const firebaseConfig = {
  apiKey: "AIzaSyBdLJtpVObKArm9HKgl1lsqgwtNy8oUtVE",
  authDomain: "alinhautossys.firebaseapp.com",
  projectId: "alinhautossys",
  storageBucket: "alinhautossys.appspot.com",
  messagingSenderId: "239626613809",
  appId: "1:239626613809:web:1f66de3c4b6d65353e1110",
  measurementId: "G-HXHR9P5BK4"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function writeData (data,time) {

  await setDoc(doc(db, "sensors", "data", data.serial, uuid()), {
    ...data, serverTime: time
  });
}


import { query, collection, getDocs, where } from "firebase/firestore";

export async function getData(serial, startDate, endDate) {
  try {
    const start = new Date(startDate);
    const end = new Date(endDate);

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
