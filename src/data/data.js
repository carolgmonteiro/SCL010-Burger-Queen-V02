import firebase from "./firebase.js";

const db = firebase.firestore();
const data = db.collection("orders");

//obtener datos de firebase

const dataFirebase = state => {
  return new Promise((resolve, reject) => {
    data
      .where("state", "==", state)
      .get()
      .then(function(querySnapshot) {
        let list = [];
        querySnapshot.forEach(function(doc) {
          let data = doc.data();
          data["id"] = doc.id;
          list.push(data);
        });
        resolve(list);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
        reject(error);
      });
  });
};

export default dataFirebase;
