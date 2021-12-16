import { InferGetServerSidePropsType, NextPage, GetServerSidePropsContext } from "next/types";
import { fetchGameDetail } from "../../../apis/firebase/gameDetail";
import GameDetailPage from "components/domain/GameDetail";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const id = params?.id as string;
  const gameDetail = await fetchGameDetail(id);

  return {
    props: { gameDetail },
  };
}

const Post: NextPage<GamesPageProps> = ({ gameDetail }) => {
  return (
    <div>
      <GameDetailPage gameDetail={gameDetail} />
    </div>
  );
};

export default Post;
