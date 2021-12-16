import { InferGetServerSidePropsType, NextPage } from "next";
import { fetchGames } from "../../apis/firebase/games";
import GamesPage from "../../components/domain/Games";

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
      <GamesPage props={games}></GamesPage>
    </>
  );
};

export default Games;