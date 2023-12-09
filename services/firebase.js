import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getFirestore, doc, setDoc, query, collection, getDocs, where } from "firebase/firestore";

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

export async function writeInfo(serial, date) {
  try {
    const q = query(
      collection(db, "sensors", "info", serial),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    const dataObj = new Date(date);
    const dia = dataObj.getUTCDate();
    const mes = dataObj.getUTCMonth() + 1; // Adicionar 1, pois os meses são indexados de 0 a 11
    const ano = dataObj.getUTCFullYear();
    if (data.length > 0) {
      let newData = data[0]
      console.log(newData)
      console.log(dia, mes, ano)
      if (!newData.years) {
        console.log("years não existe");
        newData.years[`${ano}`] = {}
      }
      if (!newData.years[`${ano}`]) {
        console.log("não tem ano");
        newData.years[`${ano}`] = {}
      }
      if (!newData.years[`${ano}`][`${mes}`]) {
        console.log("não tem mes");
        newData.years[`${ano}`][`${mes}`] = [dia]
      } else {
        if (!newData.years[`${ano}`][`${mes}`].includes(dia)) {
          console.log("nao tem o dia");
          newData.years[`${ano}`][`${mes}`].push(dia);
        }
      }
      console.log(newData)
      await setDoc(doc(db, "sensors", "info", serial, serial), {
        ...newData
      });
    } else {
      let newData = {
        years: {},
      }
      console.log(newData)
      console.log(dia, mes, ano)
      console.log("não tem ano")
      console.log("não tem mes")
      newData.years[`${ano}`] = {}
      newData.years[`${ano}`][`${mes}`] = {}
      newData.years[`${ano}`][`${mes}`] = [dia]
      console.log(newData)
      await setDoc(doc(db, "sensors", "info", serial, serial), {
        ...newData
      });
      return null;

    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}