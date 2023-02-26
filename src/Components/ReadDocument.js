import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase_setup/firebase"


const ReadDocument = async ()=>{
    const q = query(collection(db, "turtles"), where("answer", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}

export default ReadDocument;