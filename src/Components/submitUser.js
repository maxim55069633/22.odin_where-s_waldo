import { doc, collection, setDoc } from "firebase/firestore"; 
import { db } from "../firebase_setup/firebase";
import { nanoid } from "nanoid";

const PlayerRef = collection(db, "players");

const submitUser =  async (player_name,time_diff) =>{
    await setDoc(doc(PlayerRef, `player-${nanoid()}`), {
        name: player_name, 
        used_time: time_diff
       });
}

export default submitUser