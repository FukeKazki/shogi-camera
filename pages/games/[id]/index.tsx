import { useRouter } from "next/router";
import { InferGetServerSidePropsType, NextPage, GetServerSidePropsContext } from "next/types";
import { fetchGames } from "../../../apis/firebase/games";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  // idの取得をここでする
  const id = params?.id as string

  // idでデータを取得したい
  // idでデータを取得するapiあたらしくはやす
  // const ref = doc(db, "games", id).get() 的な感じだと思う
  // const game = await getDoc(ref)

  const games = await fetchGames();

  // gameを返す
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