import { collection, getDocs, deleteDoc, setDoc, doc } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "../firebase_setup/firebase";

import { query, orderBy, limit } from "firebase/firestore"; 
import { nanoid } from "nanoid";

const ReadPlayerList =  ()=>{

    const [content, setContent] = useState("Loading top players...");
    const playersRef = collection(db, "players");
   
    const [final_user_list, setFinal_user_list] = useState([]);
    const [deleted_target_id, setDeleted_target_id] = useState(undefined);

    useEffect(
        ()=>{  

            const temp_user_list = [];
            const display_user_list = async ()=>{

                // We will delete the last document, and display the first 5;
                let q = query(playersRef, orderBy("used_time"), limit(6));
                let querySnapshot = await getDocs(q);
                querySnapshot.forEach((document) => {
                    if (temp_user_list.length<5)
                        {
                            const current_user = {
                                name: document.data().name,
                                used_time : document.data().used_time
                            }
                            temp_user_list.push(current_user);
                        } 
                    else 
                        setDeleted_target_id(document.id);
                });

                if(temp_user_list.length!=0){
                    const temp_final_list = [];
                    for(let i=0; i<temp_user_list.length; i++){
                        temp_final_list.push(temp_user_list[i]);
                    }
                    setFinal_user_list(temp_final_list);
                    
                    setContent(
                        <div>
                           <table className="record-table">
                                <caption className="table-title">Top 5 Players</caption>
                                <tbody>
                                    <tr><th>No.</th><th>Name</th><th>Second(s)</th></tr>
                                    {
                                        temp_user_list.map(
                                            (user, index)=>
                                            {
                                            return  <tr key={`tr`+nanoid()} ><td>{index+1}</td><td>{user["name"]}</td><td>{user["used_time"]}</td></tr>
                                            }
                                    
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    );
                }

            }
            display_user_list();
        
        },[]
    )


    const deleteRecord = async (deleted_target_id)=>{
        deleteDoc(doc(db, "players", deleted_target_id));
    }

    if (final_user_list.length!=0 && deleted_target_id != undefined ){
        deleteRecord( deleted_target_id);
    }

    return <div>{content}</div>;
}

export default ReadPlayerList;