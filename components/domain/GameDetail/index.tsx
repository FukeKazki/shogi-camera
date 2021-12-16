import React from "react";
import { GamesInfoType } from "~/types";

type Props = {
  gameDetail: GamesInfoType | undefined;
};

const GameDetailPage: React.VFC<Props> = (props) => {
  return (
    <div>
      <div>{JSON.stringify(props)}</div>
    </div>
  );
};

export default GameDetailPage;