import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import React from "react";
import { db } from "../libs/firebase";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps: GetServerSideProps = async () => {
  const querySnapShot = await getDocs(collection(db, "games"));
  const games = []; // ここ型つけといてほしい

  querySnapShot.forEach((doc) => {
    games.push(doc.data()); // ここ型つけといてほしい
  });

  return {
    props: { games: JSON.parse(JSON.stringify(games)) },
  };
};

const Games: NextPage<GamesPageProps> = ({ games }) => {
  return (
    <>
      <div>games</div>
      <div>
        {JSON.stringify(games)}
      </div>
    </>
  );
};

export default Games;