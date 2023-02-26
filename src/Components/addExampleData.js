import { doc, collection, setDoc } from "firebase/firestore"; 
import { db } from "../firebase_setup/firebase"

const turtlesRef = collection(db, "turtles");

const addExampleData = async () =>{
  await setDoc(doc(turtlesRef, "leo"), {
    name: "Leonardo", 
    answer: true,
    pic: "https://ts1.cn.mm.bing.net/th/id/R-C.93083fbf4e5c5eb440d9aba006bb839f?rik=7hKhQ0BdLId7Tg&riu=http%3a%2f%2fit.wikifur.com%2fw%2fimages%2f5%2f57%2fLeoturtle.png&ehk=C2SJBDxZUFvJ9OKbm5Hm2iTfLkwKYtoFVBRQzKUpW%2fU%3d&risl=&pid=ImgRaw&r=0",
    intro: "Leonardo, the leader, is the most disciplined and skilled turtle;an expert swordsman, he wields two katana and wears a blue bandana."
   });
  
   await setDoc(doc(turtlesRef, "gaph"), {
    name: "Raphael", 
    answer: false,
    pic: "https://tse4-mm.cn.bing.net/th/id/OIP-C.tiC-i7SNj6qArifuJplQRgAAAA?pid=ImgDet&rs=1",
    intro: "Raphael, the strongest and most hot-headed turtle,wears a red bandana and uses a pair of sai."
   });

   await setDoc(doc(turtlesRef, "donnie"), {
    name: "Donatello", 
    answer: false,
    pic: "https://ts1.cn.mm.bing.net/th/id/R-C.4b8e8a50fd1b829293839978bf0e1078?rik=uLpeXAfFr5kbuw&riu=http%3a%2f%2fit.wikifur.com%2fw%2fimages%2f1%2f17%2fDonnieturtle.png&ehk=seRmosE0tiaO9WpSTJaVTNNXqs6Ul2AbhRRLQ5n%2b3N8%3d&risl=&pid=ImgRaw&r=0",
    intro: "Donatello uses his intellect to invent gadgets and vehicles;he wears a purple mask and uses a bo staff."
   });

   await setDoc(doc(turtlesRef, "mikey"), {
    name: "Michelangelo", 
    answer: false,
    pic: "https://tse4-mm.cn.bing.net/th/id/OIP-C.Ot06GjIo5fF_rC0RBV1IewHaLz?pid=ImgDet&rs=1",
    intro: "Michelangelo is the least disciplined and most fun-loving turtle, and is usually portrayed as the fastest and most agile.He wears an orange bandana and uses nunchucks."
   });
  
}

export default addExampleData;