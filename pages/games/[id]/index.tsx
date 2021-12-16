import { useRouter } from "next/router";
import { InferGetServerSidePropsType, NextPage, GetServerSidePropsContext } from "next/types";
import { fetchGameDetail } from "../../../apis/firebase/gameDetail";

export type GamesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const id = params?.id as string
  const gameDetail = await fetchGameDetail(id)

  return {
    props: { gameDetail },
  };
}

const Post: NextPage<GamesPageProps> = ({ gameDetail }) => {
  const router = useRouter()
  return (
    <div>
      <div>{router.query.id}</div>
      <div>{JSON.stringify(gameDetail)}</div>
    </div>
    )
}

export default Post