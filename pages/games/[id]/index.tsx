import { useRouter } from "next/router";
import { InferGetServerSidePropsType, NextPage, GetServerSidePropsContext } from "next/types";
import { fetchGameDetail } from "../../../apis/firebase/gameDetail";
import { fetchGames } from "../../../apis/firebase/games";
import GameDefaultPage from "../../../components/domain/GameDefault";
import { GamesInfoType } from "../../../types";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const id = params?.id as string
  const gameDetail: GamesInfoType[] = await fetchGameDetail(id)

  return {
    props: { gameDetail },
  };
}

const Post: NextPage<GamesPageProps> = ({ gameDetail }) => {
  const router = useRouter()
  return (
    <div>
      <GameDefaultPage props={gameDetail}/>
    </div>
    )
}

export default Post