import { error } from "console";
import { collection, getDocs } from "firebase/firestore"
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React, {useEffect} from "react";
import { db, firebase } from "../libs/firebase";

type Props = {
  test: string
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const querySnapShot = await getDocs(collection(db,"games"));
  const info = querySnapShot.docs.map((doc: { data: () => void }) => {
    doc.data();
  });
  console.log(info)
  // console
  // [ undefined, undefined ]
  const test = "hogehoge"
  return {
    props: { test }
  }
}

const Games: NextPage<Props> = ({test}: Props) => {
  return (
    <>
      <div>games</div>
      <div>
      {test}
      </div>
    </>
  )
}

export default Games