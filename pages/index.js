import React, { useEffect, useState } from 'react';
import { db2 } from '../services/firebase';
import { ref, onValue } from "firebase/database";

const modeRef = ref(db2, 'mode');

export function getMode() {
    return new Promise((resolve, reject) => {
        onValue(modeRef, (snapshot) => {
            const data = snapshot.val();
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
}

const Home = () => {
    const [modeData, setModeData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Listen for changes and update the state accordingly
                onValue(modeRef, (snapshot) => {
                    const data = snapshot.val();
                    setModeData(data);
                });
            } catch (error) {
                console.error('Error fetching mode data:', error);
                // Depending on your use case, you might want to set an appropriate default value or handle the error state differently.
                setModeData("");
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

    return (
        <>
            <div style={{ background: modeData !== null ? modeData : "white",width:"100",height:"100vh"} }>
            </div>
        </>
    );
};

export default Home;
