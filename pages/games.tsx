import { collection, getDocs } from "firebase/firestore"
import Link from "next/link";
import React, {useEffect} from "react";
import { db, firebase } from "../libs/firebase";

const getFirestoreData = (collectionName: string) => {
  return getDocs(collection(db,collectionName)).then((data) => {
    return data.forEach((doc) => {
      doc.data()
    })
  }).catch((error) => {
    console.error(error.code)
  })
}

const games = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const f = async () => {
      const fetchData = await getFirestoreData("games")
      console.log(fetchData)
    }
    f();
  }, [])
  return (
    <>
      <div>games</div>
      <div>
      hoge
      </div>
    </>
    )
}

export default games