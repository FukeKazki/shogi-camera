import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { fetchGames } from "../../apis/firebase/games";
import { GamesInfoType } from "../../types";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

type Props = {
  games : GamesInfoType[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const games = await fetchGames()
  return {
    props: { games },
  };
};

const Games: NextPage<GamesPageProps> = ({ games } : GamesPageProps) => {
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