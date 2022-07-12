import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

async function createDocument(filename, author, writableState ) {
  console.log("create document called");
 
  const data = {
    author,
    filename,
    created_at: serverTimestamp(),
    editorState: writableState,
  };
  console.log("Thre data is", data);
   const ref = doc(db, "docs", filename);
   console.log("Thre ref is", collection);
  try {
    await setDoc(ref, data, { merge: true });
  } catch (error) {
    console.error(error);
  }
}

async function getAllDocs() {
  const dbQuery = query(collection(db, "docs"), orderBy("author"));
  const querySnapshot = await getDocs(dbQuery);

  const docArray = querySnapshot.docs.map((doc) => doc.data());
  return docArray;
}

async function getOneDoc(filename) {
  const docRef = doc(db, "docs", filename);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    throw Error({ message: "No such document" });
  }
}

export { createDocument, getOneDoc, getAllDocs };
