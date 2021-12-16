import { InferGetServerSidePropsType, NextPage } from "next";
import { fetchGames } from "../../apis/firebase/games";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export async function getServerSideProps() {
  const games = await fetchGames();
  return {
    props: { games },
  };
}

const Games: NextPage<GamesPageProps> = ({ games }) => {
  return (
    <>
      <div>games</div>
      <div>{JSON.stringify(games)}</div>
    </>
  );
};

export default Games;
