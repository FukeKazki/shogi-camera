import { useRouter } from "next/router";
import { GetStaticPaths } from "next/types";

const Post = () => {
  const router = useRouter()
  return (
    <div>
      {router.query.id}
    </div>
    )
}

export default Post