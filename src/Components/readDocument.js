import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase_setup/firebase";

const readDocument = async (document_name)=>{
    const q = query(collection(db, "turtles"), where("id", "==", document_name));

    const querySnapshot = await getDocs(q);

    let result = undefined;
    querySnapshot.forEach((doc) => {
        result = doc.data();
    });

    return result;
}

export default readDocument;