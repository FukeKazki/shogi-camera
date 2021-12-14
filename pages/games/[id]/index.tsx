import { useRouter } from "next/router";
import { InferGetServerSidePropsType, NextPage } from "next/types";
import { fetchGames } from "../../../apis/firebase/games";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export async function getServerSideProps() {
  const games = await fetchGames();
  return {
    props: { games },
  };
}

const Post: NextPage<GamesPageProps> = ({ games }) => {
  const router = useRouter()
  const gameDetail = games.filter((game) => {
    return game.id === router.query.id
  })

  return (
    <div>
      <div>{router.query.id}</div>
      <div>{JSON.stringify(gameDetail)}</div>
    </div>
    )
}

export default Post